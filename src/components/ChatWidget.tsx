import { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'

interface Message {
  id: string
  from: 'user' | 'admin'
  text: string
  createdAt: string
}

interface ConversationData {
  conversationId: string
  status: string
  messages: Message[]
  reference_id?: string
}

const CHANNEL_LABELS = {
  sales: 'Talk to Sales',
  'customer-service': 'Customer Service',
  billing: 'Billing & Invoices',
  'technical-support': 'Technical Support',
  general: 'General Question',
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<'channel' | 'form' | 'chat'>('channel')
  const [selectedChannel, setSelectedChannel] = useState<string>('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [messageInput, setMessageInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [conversationId, setConversationId] = useState<string | null>(null)
  const [conversationStatus, setConversationStatus] = useState<string>('open')
  const [conversationRef, setConversationRef] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const storedConvId = localStorage.getItem('revarr_conversation_id')
    const storedChannel = localStorage.getItem('revarr_channel')
    const storedName = localStorage.getItem('revarr_name')
    const storedEmail = localStorage.getItem('revarr_email')
    const storedCompany = localStorage.getItem('revarr_company')

    if (storedConvId && storedChannel) {
      setConversationId(storedConvId)
      setSelectedChannel(storedChannel)
      setName(storedName || '')
      setEmail(storedEmail || '')
      setCompany(storedCompany || '')
      setStep('chat')
      loadMessages(storedConvId)
      startPolling(storedConvId)
    }

    const handleOpenChat = () => {
      setIsOpen(true)
    }

    window.addEventListener('openChatWidget', handleOpenChat)

    return () => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current)
      }
      window.removeEventListener('openChatWidget', handleOpenChat)
    }
  }, [])

  const loadMessages = async (convId: string) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat-messages?conversationId=${convId}`,
        {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
        }
      )

      if (response.ok) {
        const data: ConversationData = await response.json()
        setMessages(data.messages)
        setConversationStatus(data.status)
        if (data.reference_id) {
          setConversationRef(data.reference_id)
        }

        if (data.status === 'closed') {
          if (pollingIntervalRef.current) {
            clearInterval(pollingIntervalRef.current)
          }
          setTimeout(() => {
            handleReset()
          }, 5000)
        }
      }
    } catch (error) {
      console.error('Failed to load messages:', error)
    }
  }

  const startPolling = (convId: string) => {
    if (pollingIntervalRef.current) {
      clearInterval(pollingIntervalRef.current)
    }

    pollingIntervalRef.current = setInterval(() => {
      loadMessages(convId)
    }, 7000)
  }

  const handleChannelSelect = (channel: string) => {
    setSelectedChannel(channel)
    setStep('form')
  }

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!messageInput.trim() || !name || !email || !selectedChannel) return

    setIsLoading(true)

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat-send`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            company: company || null,
            channel: selectedChannel,
            message: messageInput,
          }),
        }
      )

      if (response.ok) {
        const data = await response.json()
        const newConvId = data.conversationId

        setConversationId(newConvId)
        localStorage.setItem('revarr_conversation_id', newConvId)
        localStorage.setItem('revarr_channel', selectedChannel)
        localStorage.setItem('revarr_name', name)
        localStorage.setItem('revarr_email', email)
        localStorage.setItem('revarr_company', company)

        const newMessage: Message = {
          id: Date.now().toString(),
          from: 'user',
          text: messageInput,
          createdAt: new Date().toISOString(),
        }

        setMessages([newMessage])
        setMessageInput('')
        setStep('chat')
        startPolling(newConvId)
      }
    } catch (error) {
      console.error('Failed to send message:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!messageInput.trim() || !conversationId) return

    const userMessage: Message = {
      id: Date.now().toString(),
      from: 'user',
      text: messageInput,
      createdAt: new Date().toISOString(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentMessage = messageInput
    setMessageInput('')
    setIsSending(true)

    try {
      await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat-send`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          company: company || null,
          channel: selectedChannel,
          message: currentMessage,
          conversationId,
        }),
      })

      await loadMessages(conversationId)
    } catch (error) {
      console.error('Failed to send message:', error)
    } finally {
      setIsSending(false)
    }
  }

  const handleReset = () => {
    localStorage.removeItem('revarr_conversation_id')
    localStorage.removeItem('revarr_channel')
    localStorage.removeItem('revarr_name')
    localStorage.removeItem('revarr_email')
    localStorage.removeItem('revarr_company')
    setConversationId(null)
    setSelectedChannel('')
    setName('')
    setEmail('')
    setCompany('')
    setMessages([])
    setMessageInput('')
    setStep('channel')

    if (pollingIntervalRef.current) {
      clearInterval(pollingIntervalRef.current)
    }
  }

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-[#0A1628]/95 backdrop-blur-xl px-4 py-3 rounded-full border border-blue-500/30 shadow-lg shadow-blue-900/30 hover:shadow-blue-500/50 hover:border-blue-400/50 transition-all group"
          aria-label="Open chat"
        >
          <MessageCircle size={20} className="text-blue-400 group-hover:text-blue-300" />
          <span className="text-sm text-blue-100 font-medium whitespace-nowrap group-hover:text-white">Contact revARR Support</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-[#0B1221] backdrop-blur-2xl rounded-xl shadow-2xl shadow-black/80 w-[400px] max-h-[650px] flex flex-col overflow-hidden border border-cyan-500/40 animate-slide-in">
          <div className="bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border-b border-cyan-500/30 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <MessageCircle size={20} className="text-cyan-400" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#0B1221]"></div>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-white">revARR AI Support</h3>
                {step === 'chat' && (
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs text-cyan-400/80">
                      {CHANNEL_LABELS[selectedChannel as keyof typeof CHANNEL_LABELS]}
                    </p>
                    {conversationRef && (
                      <p className="text-[11px] text-cyan-300 font-mono font-medium">
                        REF: {conversationRef}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={async () => {
                if (step === 'chat' && conversationId) {
                  try {
                    await fetch(
                      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat-close`,
                      {
                        method: 'POST',
                        headers: {
                          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          conversationId,
                          closed_by: 'user',
                        }),
                      }
                    )
                  } catch (error) {
                    console.error('Failed to close conversation:', error)
                  }
                  handleReset()
                }
                setIsOpen(false)
              }}
              className="hover:bg-cyan-500/20 rounded-lg p-1.5 transition-colors text-gray-400 hover:text-white"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 bg-gradient-to-b from-[#0B1221] via-[#0E1829] to-[#0B1221]">
            {step === 'channel' && (
              <div className="space-y-3">
                <p className="text-gray-100 font-semibold mb-5 text-center">How can we help you today?</p>
                {Object.entries(CHANNEL_LABELS).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => handleChannelSelect(key)}
                    className="w-full text-left p-4 bg-gradient-to-br from-slate-800/60 to-slate-900/60 hover:from-cyan-900/40 hover:to-blue-900/40 border border-cyan-500/20 hover:border-cyan-400/60 rounded-lg transition-all text-gray-200 hover:text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}

            {step === 'form' && (
              <form onSubmit={handleSubmitForm} className="space-y-4">
                <div>
                  <p className="text-gray-100 font-semibold mb-4 text-center">
                    {CHANNEL_LABELS[selectedChannel as keyof typeof CHANNEL_LABELS]}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-900/60 border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 text-white placeholder-gray-500 outline-none transition-all"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-900/60 border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 text-white placeholder-gray-500 outline-none transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-900/60 border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 text-white placeholder-gray-500 outline-none transition-all"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-900/60 border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 text-white placeholder-gray-500 resize-none outline-none transition-all"
                    placeholder="How can we help you?"
                    rows={4}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white py-3 rounded-lg font-semibold transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Start Conversation'}
                </button>

                <button
                  type="button"
                  onClick={() => setStep('channel')}
                  className="w-full text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  ← Back
                </button>
              </form>
            )}

            {step === 'chat' && (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.from === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-3 rounded-2xl shadow-lg ${
                        msg.from === 'user'
                          ? 'bg-gradient-to-br from-cyan-600 to-blue-600 text-white shadow-cyan-900/40 rounded-br-md'
                          : 'bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-cyan-500/30 text-gray-100 shadow-black/60 rounded-bl-md'
                      }`}
                    >
                      {msg.from === 'admin' && (
                        <div className="text-xs font-bold mb-1.5 text-cyan-400 flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          revARR Support
                        </div>
                      )}
                      <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                    </div>
                    <div className={`text-[10px] text-gray-500 mt-1.5 px-1 ${msg.from === 'user' ? 'text-right' : 'text-left'}`}>
                      {formatTime(msg.createdAt)}
                    </div>
                  </div>
                ))}
                {conversationStatus === 'closed' && (
                  <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 border border-amber-500/40 rounded-lg p-4 text-center space-y-2">
                    <p className="text-amber-200 text-sm font-medium">
                      This conversation (REF: {conversationRef}) is now closed
                    </p>
                    <p className="text-amber-300/80 text-xs leading-relaxed">
                      A copy of this chat has been emailed to you.
                      <br />
                      You can start a new conversation any time.
                    </p>
                    <p className="text-amber-400/60 text-[10px] mt-3">
                      Resetting in 5 seconds...
                    </p>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {step === 'chat' && conversationStatus !== 'closed' && (
            <div className="border-t border-cyan-500/30 p-4 bg-[#0B1221]/95 backdrop-blur-sm">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2.5 bg-slate-900/60 border border-cyan-500/30 rounded-full focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 text-white placeholder-gray-500 outline-none transition-all"
                  disabled={isSending}
                />
                <button
                  type="submit"
                  disabled={isSending || !messageInput.trim()}
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-full p-3 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  {isSending ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                </button>
              </form>
              <button
                onClick={handleReset}
                className="w-full text-xs text-gray-500 hover:text-cyan-400 mt-3 transition-colors"
              >
                Start new conversation
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
