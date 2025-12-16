import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock } from 'lucide-react'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123'

    if (password === adminPassword) {
      localStorage.setItem('revarr_admin_session', 'authenticated')
      navigate('/admin')
    } else {
      setError('Invalid password')
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-xl">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center">
              <Lock className="text-blue-400" size={32} />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-white text-center mb-2">
            Admin Login
          </h1>
          <p className="text-slate-400 text-center mb-8">
            Enter your admin password to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                autoFocus
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
