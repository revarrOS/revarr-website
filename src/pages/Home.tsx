import { useNavigate } from 'react-router-dom'
import { ArrowRight, Target, Shield, Brain, Rocket, DollarSign, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Home() {
  const navigate = useNavigate()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black opacity-90"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10 space-y-12">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600">
                Partner Ecosystem<br />Blindness
              </span><br />
              Solved.
            </h1>
          </div>

          <div className="space-y-4 animate-fade-in-delay-1">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200">
              You can't see who your competitors' partners are.<br />
              You can't identify which partners drive real revenue.<br />
              You can't build a partner ecosystem that scales.
            </p>
            <p className="text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto">
              So you guess. You hire consultants. You wait months.<br />And your competitors move faster.
            </p>
          </div>

          <div className="pt-8 animate-fade-in-delay-2">
            <button
              onClick={() => {
                document.getElementById('the-miracle')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-3 text-slate-400 hover:text-white transition-all text-lg"
            >
              <span>See the solution</span>
              <ArrowRight className="group-hover:translate-y-2 transition-transform" size={24} />
            </button>
          </div>
        </div>
      </section>

      <section id="the-miracle" className="relative py-32 px-6 bg-gradient-to-b from-black via-slate-950 to-black border-t border-slate-800">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-bold mb-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              THE MIRACLE
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight">
              In 20 Minutes,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                Your Entire Company<br />Becomes Clear.
              </span>
            </h2>

            <p className="text-2xl sm:text-3xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              See who your competitors' partners are.<br />
              Identify exactly which partners drive revenue.<br />
              Build a scalable partner ecosystem instantly.
            </p>

            <div className="bg-gradient-to-br from-blue-950/40 to-black border-2 border-blue-800/50 rounded-3xl p-12 space-y-8">
              <p className="text-3xl sm:text-4xl font-black text-white leading-tight">
                revARROS = The world's first<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                  Partner-Led Revenue Operating System
                </span>
              </p>
              <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto">
                An AI engine that builds your entire partner ecosystem from market validation to revenue generation.
              </p>
            </div>
          </div>

          <div className="pt-8 text-center">
            <button
              onClick={() => {
                document.getElementById('who-its-for')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-3 text-slate-400 hover:text-white transition-all text-lg"
            >
              <span>Is this for you?</span>
              <ArrowRight className="group-hover:translate-y-2 transition-transform" size={24} />
            </button>
          </div>
        </div>
      </section>

      <section id="who-its-for" className="relative py-32 px-6 bg-gradient-to-b from-black via-slate-950 to-black border-t border-slate-800">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-bold mb-4">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              WHO IT'S FOR
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              For Every Company That<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                Needs Partners to Scale
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/10 border border-blue-800/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Startups</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Start with market opportunity intelligence at £75/mo. Validate your market, discover ideal partners, and build your first partner relationships before you scale.
              </p>
              <div className="space-y-2 text-slate-400">
                <p className="flex items-center gap-2"><span className="text-blue-400">→</span> Market validation in minutes</p>
                <p className="flex items-center gap-2"><span className="text-blue-400">→</span> Partner discovery automated</p>
                <p className="flex items-center gap-2"><span className="text-blue-400">→</span> Ecosystem foundations built</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-950/30 to-cyan-900/10 border border-cyan-800/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Mid-Market</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Scale your partner program with automated acquisition and enablement. Generate predictable partner pipeline and optimize performance continuously.
              </p>
              <div className="space-y-2 text-slate-400">
                <p className="flex items-center gap-2"><span className="text-cyan-400">→</span> Partner acquisition at scale</p>
                <p className="flex items-center gap-2"><span className="text-cyan-400">→</span> Automated enablement</p>
                <p className="flex items-center gap-2"><span className="text-cyan-400">→</span> Revenue intelligence 24/7</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-950/30 to-emerald-900/10 border border-emerald-800/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Complete partner ecosystem management across all regions and business units. Co-sell orchestration, deal routing, and continuous growth optimization.
              </p>
              <div className="space-y-2 text-slate-400">
                <p className="flex items-center gap-2"><span className="text-emerald-400">→</span> Global partner operations</p>
                <p className="flex items-center gap-2"><span className="text-emerald-400">→</span> Co-sell deal routing</p>
                <p className="flex items-center gap-2"><span className="text-emerald-400">→</span> Enterprise-wide insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-slate-950 to-black border-t border-slate-800">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-bold mb-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              WHAT YOU GET
            </div>

            <h2 className="text-5xl sm:text-6xl font-black leading-tight">
              A Complete<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                Partner Revenue Machine
              </span>
            </h2>

            <p className="text-2xl sm:text-3xl text-slate-300 max-w-4xl mx-auto">
              7 AI engines working 24/7 to build,<br />enable, and scale your partner ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-950/30 to-black border border-blue-900/50 rounded-2xl p-10 hover:border-blue-500/70 transition-all group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Brain className="text-blue-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Discover Your Ideal Partners</h3>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    See exactly who's working with your competitors. Identify partners by revenue potential, market fit, and ecosystem positioning. No guessing, just intelligence.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-950/30 to-black border border-cyan-900/50 rounded-2xl p-10 hover:border-cyan-500/70 transition-all group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <DollarSign className="text-cyan-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Acquire Partners Faster</h3>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Intelligent targeting, automated scoring, and smart outreach. Find the right partners in minutes, not months. Scale acquisition without scaling headcount.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-950/30 to-black border border-emerald-900/50 rounded-2xl p-10 hover:border-emerald-500/70 transition-all group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Target className="text-emerald-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Enable At Machine Speed</h3>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Automated onboarding, instant enablement, and continuous activation. Get partners productive in days, not quarters. Zero manual work required.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-950/30 to-black border border-orange-900/50 rounded-2xl p-10 hover:border-orange-500/70 transition-all group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Sparkles className="text-orange-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Generate Partner Pipeline</h3>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Predictable partner-led revenue across every partner type. Track pipeline signals, forecast deal flow, and manage co-sell opportunities in real-time.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-950/30 to-black border border-pink-900/50 rounded-2xl p-10 hover:border-pink-500/70 transition-all group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-pink-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Rocket className="text-pink-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Scale Continuously</h3>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Performance insights refresh 24/7. Optimize partner mix, identify growth opportunities, and scale revenue without plateaus. True compounding growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-black border border-slate-700 rounded-2xl p-10 hover:border-slate-500 transition-all group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-slate-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Shield className="text-slate-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Manage Everything In One Place</h3>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Partners. Contacts. Deals. Assets. Enablement. Co-sell routing. The entire partner ecosystem unified in one operating system.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-8 pt-12">
            <p className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 leading-tight">
              From market opportunity to partner-led revenue.<br />
              One system. Seven engines. Infinite compound.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-blue-950/20 to-black border-t border-slate-800">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-bold mb-4">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              WAIT, ALL THIS FOR HOW MUCH?
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              Everything You Just Saw<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Starts at £75/month
              </span>
            </h2>

            <p className="text-2xl sm:text-3xl text-slate-300 max-w-3xl mx-auto">
              Less than one consultant day.<br />
              Less than one lunch meeting.<br />
              <span className="text-white font-bold">7 AI engines. 24/7. Forever.</span>
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-black border-2 border-slate-700 rounded-3xl p-12 space-y-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-2xl font-bold text-red-400">The Old Way:</p>
                <ul className="space-y-4 text-slate-300 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Partner consultants at £2,000+/day</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Hire partner managers, analysts, ops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>6-12 months to first partner revenue</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>£200,000+ in first year costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>No visibility, no automation, no scale</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <p className="text-2xl font-bold text-emerald-400">revARROS:</p>
                <ul className="space-y-4 text-slate-300 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>7 progressive engines, all automated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>£75/mo to start, scale as you grow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Partner discovery to revenue in weeks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Every engine runs 24/7 forever</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Complete partner operating system</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-700 text-center">
              <p className="text-3xl sm:text-4xl font-black text-white mb-2">
                99% cheaper. 10x faster. Infinitely scalable.
              </p>
              <p className="text-xl text-slate-400">
                This is how partner ecosystems should be built.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-slate-950 to-black border-t border-slate-800">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
              Companies don't struggle with partners<br />because they lack talent.
            </h2>
            <p className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 leading-tight">
              They struggle because<br />they lack a system.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-black border-2 border-slate-700 rounded-3xl p-12 space-y-8">
            <p className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Best partners went to competitors.<br />
              No way to identify revenue drivers.<br />
              Enablement took months.<br />
              Partner ROI stayed a mystery.
            </p>
            <div className="pt-6 border-t border-slate-700">
              <p className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                revARROS gives you the system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-40 px-6 bg-gradient-to-b from-black via-blue-950/20 to-black border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <div className="space-y-12">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 leading-none">
              Build your<br />
              partner ecosystem<br />
              in 20 minutes.
            </h2>

            <p className="text-2xl sm:text-3xl font-bold text-white max-w-3xl mx-auto">
              One system. Seven engines. Forever.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => {
                  navigate('/product')
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
                }}
                className="group px-10 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xl font-bold rounded-2xl transition-all shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 inline-flex items-center justify-center gap-3"
              >
                See How It Works
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  navigate('/pricing')
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
                }}
                className="px-10 py-6 bg-slate-900/80 backdrop-blur-sm border-2 border-slate-700 text-white text-xl font-bold hover:bg-slate-800 hover:border-slate-600 rounded-2xl transition-all"
              >
                View Pricing
              </button>
            </div>

            <p className="text-slate-400 text-lg pt-8">
              <span className="text-white font-bold">A partner-led revenue machine that compounds forever.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
