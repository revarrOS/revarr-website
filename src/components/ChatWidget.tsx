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

    return () => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current)
      }
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

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-500 text-white rounded-full p-4 shadow-lg hover:scale-110 transition-all"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-96 h-[600px] flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">revARR Support</h3>
              <p className="text-sm text-blue-100">
                {step === 'chat' && CHANNEL_LABELS[selectedChannel as keyof typeof CHANNEL_LABELS]}
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-1 transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-slate-50">
            {step === 'channel' && (
              <div className="space-y-3">
                <p className="text-slate-700 font-medium mb-4">How can we help you today?</p>
                {Object.entries(CHANNEL_LABELS).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => handleChannelSelect(key)}
                    className="w-full text-left p-4 bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-xl transition-all"
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}

            {step === 'form' && (
              <form onSubmit={handleSubmitForm} className="space-y-4">
                <div>
                  <p className="text-slate-700 font-medium mb-4">
                    {CHANNEL_LABELS[selectedChannel as keyof typeof CHANNEL_LABELS]}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={4}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Sending...' : 'Start Conversation'}
                </button>

                <button
                  type="button"
                  onClick={() => setStep('channel')}
                  className="w-full text-sm text-slate-600 hover:text-slate-800"
                >
                  Back
                </button>
              </form>
            )}

            {step === 'chat' && (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                        msg.from === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white border border-slate-200 text-slate-800'
                      }`}
                    >
                      {msg.from === 'admin' && (
                        <div className="text-xs font-semibold mb-1 text-blue-600">Admin</div>
                      )}
                      <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {step === 'chat' && (
            <div className="border-t border-slate-200 p-4 bg-white">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isSending}
                />
                <button
                  type="submit"
                  disabled={isSending || !messageInput.trim()}
                  className="bg-blue-600 hover:bg-blue-500 text-white rounded-full p-2 transition-colors disabled:opacity-50"
                  aria-label="Send message"
                >
                  {isSending ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                </button>
              </form>
              <button
                onClick={handleReset}
                className="w-full text-xs text-slate-500 hover:text-slate-700 mt-2"
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
