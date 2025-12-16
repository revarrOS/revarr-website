import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { CreditCard, Check } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'

export default function Checkout() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { user, loading: authLoading } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const priceId = searchParams.get('priceId')
  const planName = searchParams.get('plan')
  const price = searchParams.get('price')

  useEffect(() => {
    if (!priceId || !planName || !price) {
      navigate('/pricing')
      return
    }

    if (!authLoading && !user) {
      const checkoutUrl = `/checkout?priceId=${priceId}&plan=${planName}&price=${price}`
      navigate(`/login?redirect=${encodeURIComponent(checkoutUrl)}`)
    }
  }, [priceId, planName, price, navigate, user, authLoading])

  const handleCheckout = async () => {
    if (!user) {
      setError('Please log in to continue')
      return
    }

    setError('')
    setLoading(true)

    try {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        setError('Session expired. Please log in again.')
        setLoading(false)
        return
      }

      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session.access_token}`,
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

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Complete Your Purchase</h1>
          <p className="text-slate-400">Secure checkout powered by Stripe</p>
          <div className="mt-3 inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm text-slate-300">Logged in as <span className="font-medium text-white">{user.email}</span></span>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 border border-blue-500/40 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {planName === 'PACK 1' ? 'Channel Blueprint' : planName}
              </h3>
              <p className="text-4xl font-bold text-blue-400 mb-4">{price}</p>
              <p className="text-sm text-slate-300">
                {planName === 'PACK 1' ? 'One-Time Payment' : 'One-Time Payment'}
              </p>
            </div>

            <div className="bg-slate-900/50 rounded-lg p-6 space-y-3">
              <h4 className="text-sm font-semibold text-slate-300 mb-3">What you get:</h4>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <Check size={18} className="flex-shrink-0 mt-0.5 text-emerald-400" />
                  <div>
                    <div className="font-semibold text-white">Full Channel Blueprint</div>
                    <div className="text-xs text-slate-400">All 8 market insights generated for your company</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={18} className="flex-shrink-0 mt-0.5 text-emerald-400" />
                  <div>
                    <div className="font-semibold text-white">Instant Access to revARR OS</div>
                    <div className="text-xs text-slate-400">Complete intelligence dashboard</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={18} className="flex-shrink-0 mt-0.5 text-emerald-400" />
                  <div>
                    <div className="font-semibold text-white">Results Generated for Your Business</div>
                    <div className="text-xs text-slate-400">Personalized market analysis and action plan</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-4">
              <div className="flex justify-between text-lg font-bold text-white mb-2">
                <span>Total due today</span>
                <span>{price}</span>
              </div>
              <p className="text-xs text-slate-400">
                One-time payment. No recurring charges.
              </p>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500 rounded-lg p-3">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <div className="bg-blue-950/30 border border-blue-600/30 rounded-lg p-4">
              <p className="text-blue-200 text-sm font-medium text-center">
                After payment, you'll be redirected to the revARR OS to access your intelligence dashboard
              </p>
            </div>

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
            >
              {loading ? (
                'Processing...'
              ) : (
                <>
                  <CreditCard size={20} />
                  Pay Now
                </>
              )}
            </button>

            <div className="bg-slate-900/50 rounded-lg p-4 text-xs text-slate-400 space-y-2">
              <p className="flex items-start gap-2">
                <CreditCard size={14} className="flex-shrink-0 mt-0.5 text-green-400" />
                <span>Secure payment processing by Stripe</span>
              </p>
              <p className="flex items-start gap-2">
                <CreditCard size={14} className="flex-shrink-0 mt-0.5 text-green-400" />
                <span>Email will be collected securely by Stripe</span>
              </p>
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
