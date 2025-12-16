import { useState, FormEvent } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { LogIn } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { signIn, signUp } = useAuth()
  const redirectUrl = searchParams.get('redirect') || '/'

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { error } = isSignUp
        ? await signUp(email, password)
        : await signIn(email, password)

      if (error) {
        setError(error.message)
      } else {
        navigate(redirectUrl)
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="hidden md:block">
            <h2 className="text-3xl font-bold text-white mb-4">
              Welcome to revARR
            </h2>
            <p className="text-slate-400 mb-6">
              Build predictable channel revenue with our proven 6-stage methodology. Track every partner, measure every outcome, scale with confidence.
            </p>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <p className="text-slate-300 italic">
                "revARR transformed our channel program from zero to 15 active partners in 12 months. Their methodology works."
              </p>
              <div className="text-slate-400 text-sm mt-4">
                <div className="font-bold text-white">Sarah Johnson</div>
                <div>VP of Partnerships, TechCorp</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <LogIn className="text-blue-400" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">
                {isSignUp ? 'Create Account' : 'Log In'}
              </h2>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 mb-6">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="••••••••"
                />
              </div>

              {!isSignUp && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-slate-700 bg-slate-900" />
                    <span className="text-sm text-slate-400">Remember me</span>
                  </label>
                  <button type="button" className="text-sm text-blue-400 hover:text-blue-300">
                    Forgot Password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Please wait...' : isSignUp ? 'Create Account' : 'Log In'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <div className="text-slate-400 text-sm mb-2">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              </div>
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                {isSignUp ? 'Log In' : 'Create Account'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
