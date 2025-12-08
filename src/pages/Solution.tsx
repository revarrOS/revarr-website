import { useNavigate } from 'react-router-dom'
import { ArrowRight, Target, TrendingUp, CheckCircle, Brain } from 'lucide-react'

export default function Solution() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold tracking-wide">
              THE SOLUTION
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 text-white leading-tight">
            The Pain of the World.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              The Transformation<br />of revARROS.
            </span>
          </h1>
          <p className="text-2xl sm:text-3xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
            See what changes the moment you subscribe.
          </p>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-black via-slate-950 to-black border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-bold mb-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              THE MOMENT EVERYTHING CHANGES
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight">
              Before revARROS vs After revARROS
            </h2>
            <p className="text-2xl sm:text-3xl text-slate-300 max-w-4xl mx-auto">
              This is not an upgrade. This is a complete transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-red-950/50 to-red-900/30 border-2 border-red-800/60 rounded-3xl p-12 space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-4xl font-black text-red-400 mb-4">❌ BEFORE</h3>
                <p className="text-2xl font-bold text-white">Your Reality Today</p>
              </div>
              <div className="space-y-6 text-lg">
                <div className="bg-red-950/40 border border-red-900/50 rounded-xl p-6">
                  <p className="text-red-300 font-bold mb-2">Chaos</p>
                  <p className="text-slate-300">No idea which market to enter. Competitors moving. Your team guessing. Board asking questions you can't answer.</p>
                </div>
                <div className="bg-red-950/40 border border-red-900/50 rounded-xl p-6">
                  <p className="text-red-300 font-bold mb-2">Guesswork</p>
                  <p className="text-slate-300">Partner decisions based on gut feel. Revenue forecasts based on hope. Strategy based on outdated reports.</p>
                </div>
                <div className="bg-red-950/40 border border-red-900/50 rounded-xl p-6">
                  <p className="text-red-300 font-bold mb-2">Wasted Quarters</p>
                  <p className="text-slate-300">6 months for market validation. 12 months to find partners. Another 6 months to see if it works. Competitors already won.</p>
                </div>
                <div className="bg-red-950/40 border border-red-900/50 rounded-xl p-6">
                  <p className="text-red-300 font-bold mb-2">Bleeding Cash</p>
                  <p className="text-slate-300">£300K+ on consultants. Another £200K on hiring. Zero guarantee of results. Runway shrinking fast.</p>
                </div>
              </div>
              <div className="text-center pt-6 border-t border-red-800/50">
                <p className="text-2xl font-black text-red-400">This is every business today.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-950/50 to-emerald-900/30 border-2 border-emerald-700/60 rounded-3xl p-12 space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-4xl font-black text-emerald-400 mb-4">✅ AFTER</h3>
                <p className="text-2xl font-bold text-white">Your New Reality</p>
              </div>
              <div className="space-y-6 text-lg">
                <div className="bg-emerald-950/40 border border-emerald-800/50 rounded-xl p-6">
                  <p className="text-emerald-300 font-bold mb-2">Clarity</p>
                  <p className="text-slate-300">Complete market intelligence in 20 minutes. Every competitor mapped. Every partner identified. Every opportunity visible.</p>
                </div>
                <div className="bg-emerald-950/40 border border-emerald-800/50 rounded-xl p-6">
                  <p className="text-emerald-300 font-bold mb-2">Confidence</p>
                  <p className="text-slate-300">Every decision backed by facts. Board meetings become victory laps. Investors see machine-accurate forecasts.</p>
                </div>
                <div className="bg-emerald-950/40 border border-emerald-800/50 rounded-xl p-6">
                  <p className="text-emerald-300 font-bold mb-2">Money</p>
                  <p className="text-slate-300">Partner-sourced revenue flowing in weeks. Predictable pipeline. £5M+ ARR potential in 12 months. Real growth.</p>
                </div>
                <div className="bg-emerald-950/40 border border-emerald-800/50 rounded-xl p-6">
                  <p className="text-emerald-300 font-bold mb-2">Momentum</p>
                  <p className="text-slate-300">Moving faster than competitors. Automated execution. 24/7 intelligence. Unstoppable growth engine running.</p>
                </div>
              </div>
              <div className="text-center pt-6 border-t border-emerald-800/50">
                <p className="text-2xl font-black text-emerald-400">This is your business with revARROS.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-black border-2 border-slate-700 rounded-3xl p-12 text-center space-y-8">
            <p className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 leading-tight">
              DAMN.<br />
              This changes everything.
            </p>
            <p className="text-2xl sm:text-3xl text-white max-w-5xl mx-auto leading-tight">
              The moment you subscribe, chaos becomes clarity.<br />
              Guesswork becomes confidence.<br />
              Wasted quarters become money and momentum.
            </p>
            <div className="pt-8 border-t border-slate-700">
              <p className="text-3xl font-bold text-white mb-4">This is not incremental improvement.</p>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                This is transformation. This is your competitive advantage.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-32">
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-bold mb-4">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              WHAT YOU BUILD
            </div>
            <h2 className="text-5xl sm:text-6xl font-black leading-tight">
              From Chaos to<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                Machine-Speed Revenue
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-950/40 to-blue-900/20 border border-blue-800/50 rounded-2xl p-8 text-center hover:border-blue-500 transition-all">
              <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Brain className="text-blue-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Complete Intelligence</h3>
              <p className="text-slate-300 leading-relaxed">
                See your entire market, every competitor, all partners, and every opportunity in 20 minutes. Perfect clarity, always.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-950/40 to-cyan-900/20 border border-cyan-800/50 rounded-2xl p-8 text-center hover:border-cyan-500 transition-all">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Predictive Revenue</h3>
              <p className="text-slate-300 leading-relaxed">
                See deals before they close, forecast with machine accuracy, and build partner-sourced pipeline automatically.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-950/40 to-emerald-900/20 border border-emerald-800/50 rounded-2xl p-8 text-center hover:border-emerald-500 transition-all">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="text-emerald-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Automated Execution</h3>
              <p className="text-slate-300 leading-relaxed">
                Partner discovery, outreach, enablement, and deal routing all running 24/7 without manual work.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-black border-2 border-slate-700 rounded-3xl p-12 text-center">
            <p className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              20 minutes. £75 to start. Forever running.
            </p>
            <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
              This is the transformation.<br />
              This is your competitive advantage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-black via-slate-950 to-black border-b border-slate-800">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-bold mb-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              WHO NEEDS THIS
            </div>
            <h2 className="text-5xl sm:text-6xl font-black leading-tight">
              Every Business Making<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Million-Pound Decisions
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/10 border border-blue-800/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Startups</h3>
              <p className="text-slate-300 mb-6">
                Compete with enterprises from day one. Get intelligence that costs them £300K ($390K USD | €360K EUR) for £75/month ($99 USD | €95 EUR).
              </p>
              <div className="space-y-2 text-slate-400">
                <p className="flex items-center gap-2">
                  <CheckCircle className="text-blue-400" size={16} />
                  <span>Validate before you build</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="text-blue-400" size={16} />
                  <span>Find partners instantly</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="text-blue-400" size={16} />
                  <span>Impress investors with facts</span>
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-950/30 to-cyan-900/10 border border-cyan-800/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Mid-Market</h3>
              <p className="text-slate-300 mb-6">
                Stop waiting for consultants. Build partner programs that generate real revenue automatically.
              </p>
              <div className="space-y-2 text-slate-400">
                <p className="flex items-center gap-2">
                  <CheckCircle className="text-cyan-400" size={16} />
                  <span>Automate partner operations</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="text-cyan-400" size={16} />
                  <span>Forecast with machine accuracy</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="text-cyan-400" size={16} />
                  <span>Scale without friction</span>
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-950/30 to-emerald-900/10 border border-emerald-800/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <p className="text-slate-300 mb-6">
                One source of truth across every team, region, and business unit. Instant alignment.
              </p>
              <div className="space-y-2 text-slate-400">
                <p className="flex items-center gap-2">
                  <CheckCircle className="text-emerald-400" size={16} />
                  <span>Real-time competitive tracking</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="text-emerald-400" size={16} />
                  <span>Partner capacity modeling</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="text-emerald-400" size={16} />
                  <span>Quarterly growth simulation</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 px-6 bg-gradient-to-br from-blue-950/20 via-black to-cyan-950/20">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight">
            This Is the Transformation.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              Start Now.
            </span>
          </h2>

          <p className="text-2xl sm:text-3xl text-slate-300 max-w-4xl mx-auto">
            From chaos to clarity. From guessing to knowing.<br />In 20 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button
              onClick={() => {
                navigate('/pricing')
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
              }}
              className="group px-10 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xl rounded-2xl font-semibold transition-all inline-flex items-center justify-center gap-3 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
              >
              Get Started
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                navigate('/product')
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
              }}
              className="px-10 py-6 bg-slate-900/80 backdrop-blur-sm border-2 border-slate-700 text-white text-xl hover:bg-slate-800 hover:border-slate-600 rounded-2xl font-semibold transition-all"
            >
              Explore revARROS
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
