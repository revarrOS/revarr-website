import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MessageCircle, Filter, LogOut, Rocket } from 'lucide-react'
import { supabase } from '../lib/supabase'

interface Conversation {
  id: string
  user_name: string
  user_email: string
  company: string | null
  channel: string
  status: string
  created_at: string
  updated_at: string
  last_message?: string
}

interface TrialAccount {
  id: string
  email: string
  name: string
  company_name: string
  status: string
  pack_level: number
  trial_start_date: string
  trial_end_date: string
  os_access_granted: boolean
  os_onboarding_completed: boolean
  converted_at: string | null
  created_at: string
}

const CHANNEL_LABELS: Record<string, string> = {
  sales: 'Sales',
  'customer-service': 'Customer Service',
  billing: 'Billing',
  'technical-support': 'Technical Support',
  general: 'General',
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'conversations' | 'trials'>('conversations')
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [filteredConversations, setFilteredConversations] = useState<Conversation[]>([])
  const [trials, setTrials] = useState<TrialAccount[]>([])
  const [filteredTrials, setFilteredTrials] = useState<TrialAccount[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [channelFilter, setChannelFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [trialStatusFilter, setTrialStatusFilter] = useState('all')
  const navigate = useNavigate()

  useEffect(() => {
    const session = localStorage.getItem('revarr_admin_session')
    if (!session) {
      navigate('/admin/login')
      return
    }

    loadConversations()
    loadTrials()
  }, [navigate])

  useEffect(() => {
    filterConversations()
  }, [conversations, channelFilter, statusFilter])

  useEffect(() => {
    filterTrials()
  }, [trials, trialStatusFilter])

  const loadConversations = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/admin-conversations`,
        {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      )

      const result = await response.json()

      if (response.ok && result.conversations) {
        const formattedConversations = result.conversations.map((conv: any) => ({
          id: conv.id,
          user_name: conv.user_name,
          user_email: conv.user_email,
          company: conv.company,
          channel: conv.channel,
          status: conv.status,
          created_at: conv.created_at,
          updated_at: conv.updated_at,
          last_message: conv.lastMessage?.text || ''
        }))
        setConversations(formattedConversations)
      } else {
        console.error('Failed to load conversations:', result.error)
      }
    } catch (error) {
      console.error('Failed to load conversations:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const filterConversations = () => {
    let filtered = [...conversations]

    if (channelFilter !== 'all') {
      filtered = filtered.filter(conv => conv.channel === channelFilter)
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(conv => conv.status === statusFilter)
    }

    setFilteredConversations(filtered)
  }

  const loadTrials = async () => {
    try {
      const { data, error } = await supabase
        .from('trial_accounts')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Failed to load trials:', error)
        return
      }

      setTrials(data || [])
    } catch (error) {
      console.error('Failed to load trials:', error)
    }
  }

  const filterTrials = () => {
    let filtered = [...trials]

    if (trialStatusFilter !== 'all') {
      filtered = filtered.filter(trial => trial.status === trialStatusFilter)
    }

    setFilteredTrials(filtered)
  }

  const handleLogout = () => {
    localStorage.removeItem('revarr_admin_session')
    navigate('/admin/login')
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
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

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                <MessageCircle className="text-blue-400" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-slate-400 text-sm">Manage conversations and trials</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 border-t border-slate-800">
            <button
              onClick={() => setActiveTab('conversations')}
              className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-colors ${
                activeTab === 'conversations'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <MessageCircle size={20} />
              <span className="font-medium">Conversations</span>
              <span className="px-2 py-0.5 bg-slate-800 rounded-full text-xs">{conversations.length}</span>
            </button>
            <button
              onClick={() => setActiveTab('trials')}
              className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-colors ${
                activeTab === 'trials'
                  ? 'border-emerald-500 text-emerald-400'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Rocket size={20} />
              <span className="font-medium">Trial Accounts</span>
              <span className="px-2 py-0.5 bg-slate-800 rounded-full text-xs">{trials.length}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'conversations' ? (
          <>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-white">
                  <Filter size={20} />
                  <span className="font-medium">Filters:</span>
                </div>

                <div>
                  <select
                    value={channelFilter}
                    onChange={(e) => setChannelFilter(e.target.value)}
                    className="px-4 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Channels</option>
                    {Object.entries(CHANNEL_LABELS).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Status</option>
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>

                <div className="ml-auto text-slate-400 text-sm">
                  {filteredConversations.length} conversation{filteredConversations.length !== 1 ? 's' : ''}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {filteredConversations.length === 0 ? (
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 text-center">
                  <p className="text-slate-400">No conversations found</p>
                </div>
              ) : (
                filteredConversations.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={() => navigate(`/admin/conversations/${conv.id}`)}
                    className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{conv.user_name}</h3>
                        <p className="text-slate-400 text-sm">{conv.user_email}</p>
                        {conv.company && (
                          <p className="text-slate-500 text-sm">{conv.company}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          conv.status === 'open'
                            ? 'bg-green-500/10 text-green-400 border border-green-500/30'
                            : 'bg-slate-700/50 text-slate-400 border border-slate-700'
                        }`}>
                          {conv.status}
                        </span>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30">
                          {CHANNEL_LABELS[conv.channel]}
                        </span>
                      </div>
                    </div>

                    {conv.last_message && (
                      <p className="text-slate-400 text-sm mb-3 line-clamp-2">
                        {conv.last_message.substring(0, 120)}
                        {conv.last_message.length > 120 ? '...' : ''}
                      </p>
                    )}

                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>Updated: {formatDate(conv.updated_at)}</span>
                      <span>Created: {formatDate(conv.created_at)}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        ) : (
          <>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-white">
                  <Filter size={20} />
                  <span className="font-medium">Filters:</span>
                </div>

                <div>
                  <select
                    value={trialStatusFilter}
                    onChange={(e) => setTrialStatusFilter(e.target.value)}
                    className="px-4 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="expired">Expired</option>
                    <option value="converted">Converted</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                <div className="ml-auto text-slate-400 text-sm">
                  {filteredTrials.length} trial{filteredTrials.length !== 1 ? 's' : ''}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {filteredTrials.length === 0 ? (
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 text-center">
                  <p className="text-slate-400">No trial accounts found</p>
                </div>
              ) : (
                filteredTrials.map((trial) => (
                  <div
                    key={trial.id}
                    className="bg-slate-900 border border-slate-800 rounded-xl p-6"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{trial.name}</h3>
                        <p className="text-slate-400 text-sm">{trial.email}</p>
                        <p className="text-slate-500 text-sm">{trial.company_name}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          trial.status === 'active'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : trial.status === 'converted'
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                            : trial.status === 'expired'
                            ? 'bg-red-500/10 text-red-400 border border-red-500/30'
                            : 'bg-slate-700/50 text-slate-400 border border-slate-700'
                        }`}>
                          {trial.status}
                        </span>
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/30">
                          Pack {trial.pack_level}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                      <div>
                        <p className="text-slate-500 mb-1">Trial Start</p>
                        <p className="text-slate-300">{formatDate(trial.trial_start_date)}</p>
                      </div>
                      <div>
                        <p className="text-slate-500 mb-1">Trial End</p>
                        <p className="text-slate-300">{formatDate(trial.trial_end_date)}</p>
                      </div>
                      <div>
                        <p className="text-slate-500 mb-1">OS Access</p>
                        <p className={trial.os_access_granted ? 'text-emerald-400' : 'text-red-400'}>
                          {trial.os_access_granted ? 'Granted' : 'Not Granted'}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500 mb-1">Onboarding</p>
                        <p className={trial.os_onboarding_completed ? 'text-emerald-400' : 'text-slate-400'}>
                          {trial.os_onboarding_completed ? 'Complete' : 'Pending'}
                        </p>
                      </div>
                    </div>

                    {trial.converted_at && (
                      <div className="mt-3 pt-3 border-t border-slate-800">
                        <p className="text-xs text-slate-500">
                          Converted to paid: {formatDate(trial.converted_at)}
                        </p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
