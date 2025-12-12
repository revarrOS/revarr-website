import { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Send, CheckCircle, Loader2 } from 'lucide-react'

interface Message {
  id: string
  from: 'user' | 'admin'
  text: string
  createdAt: string
}

interface ConversationData {
  conversationId: string
  status: string
  reference_id?: string
  channel: string
  user: {
    name: string
    email: string
    company: string | null
  }
  messages: Message[]
}

const CHANNEL_LABELS: Record<string, string> = {
  sales: 'Sales',
  'customer-service': 'Customer Service',
  billing: 'Billing',
  'technical-support': 'Technical Support',
  general: 'General',
}

export default function AdminConversation() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [conversationData, setConversationData] = useState<ConversationData | null>(null)
  const [replyText, setReplyText] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSending, setIsSending] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const session = localStorage.getItem('revarr_admin_session')
    if (!session) {
      navigate('/admin/login')
      return
    }

    loadConversation()
    const interval = setInterval(loadConversation, 5000)
    return () => clearInterval(interval)
  }, [id, navigate])

  useEffect(() => {
    scrollToBottom()
  }, [conversationData?.messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const loadConversation = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat-messages?conversationId=${id}`,
        {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
        }
      )

      if (response.ok) {
        const data = await response.json()
        setConversationData(data)
      }
    } catch (error) {
      console.error('Failed to load conversation:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendReply = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!replyText.trim()) return

    setIsSending(true)

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat-reply`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            conversationId: id,
            replyText,
          }),
        }
      )

      if (response.ok) {
        setReplyText('')
        await loadConversation()
      }
    } catch (error) {
      console.error('Failed to send reply:', error)
    } finally {
      setIsSending(false)
    }
  }

  const handleCloseConversation = async () => {
    if (!confirm('Are you sure you want to close this conversation?')) return

    setIsClosing(true)

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat-close`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            conversationId: id,
          }),
        }
      )

      if (response.ok) {
        await loadConversation()
      }
    } catch (error) {
      console.error('Failed to close conversation:', error)
    } finally {
      setIsClosing(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!conversationData) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-white text-xl">Conversation not found</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate('/admin')}
            className="flex items-center gap-2 text-slate-400 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Dashboard
          </button>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">
                {conversationData.user.name}
              </h1>
              <p className="text-slate-400">{conversationData.user.email}</p>
              {conversationData.user.company && (
                <p className="text-slate-500">{conversationData.user.company}</p>
              )}
              {conversationData.reference_id && (
                <p className="text-cyan-400 font-mono font-medium text-sm mt-2">
                  REF: {conversationData.reference_id}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className={`px-4 py-2 rounded-lg text-sm font-medium ${
                conversationData.status === 'open'
                  ? 'bg-green-500/10 text-green-400 border border-green-500/30'
                  : 'bg-slate-700/50 text-slate-400 border border-slate-700'
              }`}>
                {conversationData.status}
              </span>
              <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg text-sm font-medium border border-blue-500/30">
                {CHANNEL_LABELS[conversationData.channel]}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {conversationData.messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.from === 'user' ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[70%] ${
                    msg.from === 'user'
                      ? 'bg-slate-800 text-white'
                      : 'bg-blue-600 text-white'
                  } rounded-2xl px-4 py-3`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold">
                      {msg.from === 'user' ? conversationData.user.name : 'Admin'}
                    </span>
                    <span className="text-xs opacity-60">
                      {formatDate(msg.createdAt)}
                    </span>
                  </div>
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {conversationData.status === 'open' && (
            <div className="border-t border-slate-800 p-6">
              <form onSubmit={handleSendReply} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Reply
                  </label>
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={4}
                    placeholder="Type your reply..."
                    disabled={isSending}
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSending || !replyText.trim()}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
                  >
                    {isSending ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Reply
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleCloseConversation}
                    disabled={isClosing}
                    className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
                  >
                    {isClosing ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Closing...
                      </>
                    ) : (
                      <>
                        <CheckCircle size={18} />
                        Close Conversation
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {conversationData.status === 'closed' && (
            <div className="border-t border-slate-800 p-6 bg-slate-800/50">
              <p className="text-slate-400 text-center">
                This conversation has been closed
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
