import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'
import { CreditCard, Building2, Mail, User, Lock } from 'lucide-react'

export default function Checkout() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const priceId = searchParams.get('priceId')
  const planName = searchParams.get('plan')
  const price = searchParams.get('price')

  const [formData, setFormData] = useState({
    name: '',
    email: user?.email || '',
    companyName: '',
    password: '',
  })

  useEffect(() => {
    if (!priceId || !planName || !price) {
      navigate('/pricing')
    }
  }, [priceId, planName, price, navigate])

  useEffect(() => {
    if (user?.email) {
      setFormData(prev => ({ ...prev, email: user.email || '' }))
    }
  }, [user])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (!user) {
        const { data: authData, error: signUpError } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              name: formData.name,
              company_name: formData.companyName,
            }
          }
        })

        if (signUpError) {
          if (signUpError.message.includes('already registered')) {
            setError('This email is already registered. Please login instead.')
          } else {
            setError(signUpError.message)
          }
          setLoading(false)
          return
        }

        if (!authData.user) {
          setError('Failed to create account')
          setLoading(false)
          return
        }
      }

      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        setError('Please login to continue')
        setLoading(false)
        return
      }

      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${session.access_token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ priceId }),
        }
      )

      const data = await response.json()

      if (data.error) {
        setError(data.error)
        setLoading(false)
        return
      }

      if (data.url) {
        window.location.href = data.url
      }
    } catch (err) {
      console.error('Checkout error:', err)
      setError('An error occurred. Please try again.')
      setLoading(false)
    }
  }

  if (!priceId || !planName || !price) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Complete Your Purchase</h1>
          <p className="text-slate-400">Secure checkout powered by Stripe</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <User size={24} className="text-blue-400" />
              {user ? 'Your Information' : 'Create Account'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John Smith"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-3 text-slate-400" />
                  <input
                    type="email"
                    id="email"
                    required
                    disabled={!!user}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                  Company Name *
                </label>
                <div className="relative">
                  <Building2 size={18} className="absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Acme Inc"
                  />
                </div>
              </div>

              {!user && (
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-3 top-3 text-slate-400" />
                    <input
                      type="password"
                      id="password"
                      required
                      minLength={6}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Minimum 6 characters"
                    />
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Minimum 6 characters</p>
                </div>
              )}

              {error && (
                <div className="bg-red-500/10 border border-red-500 rounded-lg p-3">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              {!user && (
                <p className="text-xs text-slate-400">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => navigate(`/login?redirect=/checkout?priceId=${priceId}&plan=${planName}&price=${price}`)}
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Login here
                  </button>
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  'Processing...'
                ) : (
                  <>
                    <CreditCard size={20} />
                    Continue to Payment
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 border border-blue-500/40 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-2">{planName}</h3>
                <p className="text-4xl font-bold text-blue-400 mb-4">{price}</p>
                <p className="text-sm text-slate-300">Billed monthly</p>
              </div>

              <div className="bg-slate-900/50 rounded-lg p-6 space-y-3">
                <h4 className="text-sm font-semibold text-slate-300 mb-3">What's included:</h4>
                <div className="space-y-2 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    <span>AI-powered market intelligence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    <span>24/7 automated execution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    <span>Real-time channel analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-4">
                <div className="flex justify-between text-lg font-bold text-white mb-2">
                  <span>Total due today</span>
                  <span>{price}</span>
                </div>
                <p className="text-xs text-slate-400">
                  Your subscription will automatically renew monthly. Cancel anytime.
                </p>
              </div>

              <div className="bg-slate-900/50 rounded-lg p-4 text-xs text-slate-400 space-y-2">
                <p className="flex items-start gap-2">
                  <CreditCard size={14} className="flex-shrink-0 mt-0.5 text-green-400" />
                  <span>Secure payment processing by Stripe</span>
                </p>
                <p className="flex items-start gap-2">
                  <CreditCard size={14} className="flex-shrink-0 mt-0.5 text-green-400" />
                  <span>30-day money-back guarantee</span>
                </p>
                <p className="flex items-start gap-2">
                  <CreditCard size={14} className="flex-shrink-0 mt-0.5 text-green-400" />
                  <span>No long-term contracts required</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/pricing')}
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            ← Back to pricing
          </button>
        </div>
      </div>
    </div>
  )
}
