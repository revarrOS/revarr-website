import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, Target, Zap, TrendingUp, Clock, DollarSign, Users, Sparkles } from 'lucide-react'
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
              <span className="text-white">
                Build Your Entire Partner Ecosystem<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                  in 20 Minutes
                </span>
              </span>
            </h1>
          </div>

          <div className="space-y-6 animate-fade-in-delay-1">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200 max-w-5xl mx-auto leading-tight">
              For founders, investors, and SaaS companies who need to know where their market revenue is held, automate acquisition, and scale revenue through partners without consultants, headcount or guesswork
            </p>
          </div>

          <div className="pt-8 animate-fade-in-delay-2 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => {
                navigate('/product/opportunity-intelligence-engine')
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
              }}
              className="group px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-2xl font-black rounded-2xl transition-all shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              Get Your Free Intelligence Report
              <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                navigate('/product')
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
              }}
              className="px-12 py-6 bg-slate-900/80 backdrop-blur-sm border-2 border-slate-600 text-white text-2xl font-bold hover:bg-slate-800 hover:border-slate-500 rounded-2xl transition-all"
            >
              See How It Works
            </button>
          </div>

          <div className="pt-8 animate-fade-in-delay-2">
            <p className="text-slate-400 text-lg">
              30-day money-back guarantee • No credit card required • Start in minutes
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-gradient-to-b from-black via-slate-950 to-black border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-bold">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              TRUSTED BY PARTNER LEADERS
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Building the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Partner Ecosystems</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 rounded-2xl">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                20min
              </div>
              <p className="text-xl text-slate-300">Complete Partner Intelligence</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 rounded-2xl">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-2">
                99%
              </div>
              <p className="text-xl text-slate-300">Cheaper Than Consultants</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 rounded-2xl">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-2">
                24/7
              </div>
              <p className="text-xl text-slate-300">AI-Powered Automation</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900/30 to-black border border-slate-800 rounded-3xl p-12">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="flex items-center gap-4 justify-center mb-8">
                <CheckCircle className="text-emerald-400" size={32} />
                <CheckCircle className="text-emerald-400" size={32} />
                <CheckCircle className="text-emerald-400" size={32} />
                <CheckCircle className="text-emerald-400" size={32} />
                <CheckCircle className="text-emerald-400" size={32} />
              </div>
              <p className="text-2xl sm:text-3xl text-slate-300 italic leading-relaxed">
                "Finally, a system that gives us the partner intelligence we needed without spending £200K on consultants. We discovered 50+ ideal partners in the first week."
              </p>
              <div className="pt-4">
                <p className="text-xl font-bold text-white">Sarah Mitchell</p>
                <p className="text-slate-400">VP of Partnerships, TechScale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-slate-950 to-black border-t border-slate-800">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm font-bold mb-4">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              THE PROBLEM
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              You're Leaving<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600">
                Massive Partner Revenue
              </span><br />
              On The Table
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-950/30 to-black border-2 border-red-900/50 rounded-2xl p-10">
              <div className="flex items-start gap-4">
                <div className="text-4xl">❌</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Can't See Competitor's Partners</h3>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Your competitors are building partner ecosystems. You have no idea who their partners are or why they're winning deals.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-950/30 to-black border-2 border-red-900/50 rounded-2xl p-10">
              <div className="flex items-start gap-4">
                <div className="text-4xl">❌</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Don't Know Which Partners Drive Revenue</h3>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    You're signing partners blindly. No data. No intelligence. Just hoping they'll drive revenue.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-950/30 to-black border-2 border-red-900/50 rounded-2xl p-10">
              <div className="flex items-start gap-4">
                <div className="text-4xl">❌</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Enablement Takes 6+ Months</h3>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    By the time your partners are enabled, the market has moved. Your competitors are already three steps ahead.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-950/30 to-black border-2 border-red-900/50 rounded-2xl p-10">
              <div className="flex items-start gap-4">
                <div className="text-4xl">❌</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Consultants Cost £200K+ and Leave</h3>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Pay £2,000/day for strategy work that disappears the moment the engagement ends. Zero automation. Zero scale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-12">
            <p className="text-3xl sm:text-4xl font-black text-white mb-4">
              Without a partner team, you're blind.
            </p>
            <p className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600">
              With a partner team, you're drowning in headcount and time-to-revenue delays.
            </p>
          </div>
        </div>
      </section>

      <section id="solution" className="relative py-32 px-6 bg-gradient-to-b from-black via-blue-950/20 to-black border-t border-slate-800">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-bold mb-4">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              THE SOLUTION
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight">
              One Central OS<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                That Does Everything
              </span><br />
              A Partner Team Does
            </h2>

            <p className="text-2xl sm:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Without the headcount. Without the time-to-revenue delays. Without the consultants.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-950/40 to-black border-2 border-blue-800/60 rounded-3xl p-10 hover:border-blue-500/80 transition-all group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="text-blue-400" size={36} />
              </div>
              <h3 className="text-3xl font-black text-white mb-6">Discover</h3>
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                Find ideal partners instantly with complete market and competitive intelligence
              </p>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <span>See competitor's partners in 20 minutes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <span>AI-powered partner scoring & matching</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <span>Complete market opportunity mapping</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-950/40 to-black border-2 border-cyan-800/60 rounded-3xl p-10 hover:border-cyan-500/80 transition-all group">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-cyan-400" size={36} />
              </div>
              <h3 className="text-3xl font-black text-white mb-6">Enable</h3>
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                Automate onboarding & activation at machine speed
              </p>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <span>Partners productive in days not quarters</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <span>Zero manual enablement work</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <span>Continuous performance optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-950/40 to-black border-2 border-emerald-800/60 rounded-3xl p-10 hover:border-emerald-500/80 transition-all group">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-emerald-400" size={36} />
              </div>
              <h3 className="text-3xl font-black text-white mb-6">Scale</h3>
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                Generate predictable partner-led revenue growth
              </p>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <span>Track pipeline signals & forecast deals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <span>Automated co-sell orchestration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <span>Continuous ecosystem growth</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center space-y-8 pt-8">
            <button
              onClick={() => {
                navigate('/product')
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
              }}
              className="group px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xl font-bold rounded-2xl transition-all shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              Explore revARR OS
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                navigate('/product/opportunity-intelligence-engine')
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
              }}
              className="ml-4 px-12 py-6 bg-slate-900/80 backdrop-blur-sm border-2 border-slate-600 text-white text-xl font-bold hover:bg-slate-800 hover:border-slate-500 rounded-2xl transition-all"
            >
              Start With Intelligence
            </button>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-slate-950 to-black border-t border-slate-800">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-bold mb-4">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              HOW IT WORKS
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              From Zero to Partner Revenue<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                in 3 Simple Steps
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-3xl font-black text-white shadow-xl">
                1
              </div>
              <div className="bg-gradient-to-br from-blue-950/30 to-black border border-blue-800/50 rounded-3xl p-10 pt-12">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Users className="text-blue-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Connect</h3>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Answer 5 questions about your business. No integrations. No technical setup. Just simple questions.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-600 to-emerald-600 rounded-full flex items-center justify-center text-3xl font-black text-white shadow-xl">
                2
              </div>
              <div className="bg-gradient-to-br from-cyan-950/30 to-black border border-cyan-800/50 rounded-3xl p-10 pt-12">
                <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="text-cyan-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Discover</h3>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Get complete market & partner intelligence in 20 minutes. See your entire ecosystem instantly.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-full flex items-center justify-center text-3xl font-black text-white shadow-xl">
                3
              </div>
              <div className="bg-gradient-to-br from-emerald-950/30 to-black border border-emerald-800/50 rounded-3xl p-10 pt-12">
                <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="text-emerald-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Scale</h3>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Activate AI engines as you grow. Discovery to acquisition to enablement to revenue.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-12">
            <button
              onClick={() => {
                navigate('/product/opportunity-intelligence-engine')
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
              }}
              className="group px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xl font-bold rounded-2xl transition-all shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              Get Started Now
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-slate-950 to-black border-t border-slate-800">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-bold mb-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              WHAT YOU GET
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              The Results Are<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600">
                Impossible to Ignore
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 rounded-2xl p-8 text-center">
              <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
                20min
              </div>
              <p className="text-xl text-slate-300">Partner discovery<br />(not 6 months)</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 rounded-2xl p-8 text-center">
              <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-4">
                99%
              </div>
              <p className="text-xl text-slate-300">Cheaper than<br />consultants</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 rounded-2xl p-8 text-center">
              <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-4">
                24/7
              </div>
              <p className="text-xl text-slate-300">Automated intelligence<br />& enablement</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 rounded-2xl p-8 text-center">
              <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-4">
                100%
              </div>
              <p className="text-xl text-slate-300">Predictable partner<br />pipeline</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-black border-2 border-slate-700 rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-2xl font-bold text-red-400">The Old Way:</p>
                <ul className="space-y-4 text-slate-300 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 text-xl">✗</span>
                    <span>Partner consultants at £2,000+/day</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 text-xl">✗</span>
                    <span>Hire partner managers, analysts, ops teams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 text-xl">✗</span>
                    <span>6-12 months to first partner revenue</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 text-xl">✗</span>
                    <span>£200,000+ in first year costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 text-xl">✗</span>
                    <span>No visibility, no automation, no scale</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <p className="text-2xl font-bold text-emerald-400">revARR OS:</p>
                <ul className="space-y-4 text-slate-300 text-lg">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-400 mt-1 flex-shrink-0" size={24} />
                    <span>Complete partner intelligence in 20 minutes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-400 mt-1 flex-shrink-0" size={24} />
                    <span>£75/mo to start, scale as you grow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-400 mt-1 flex-shrink-0" size={24} />
                    <span>Partner discovery to revenue in weeks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-400 mt-1 flex-shrink-0" size={24} />
                    <span>AI engines run 24/7 forever</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-400 mt-1 flex-shrink-0" size={24} />
                    <span>Complete partner operating system</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-700 text-center mt-8">
              <p className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                99% cheaper. 10x faster. Infinitely scalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-gradient-to-b from-black via-blue-950/20 to-black border-t border-slate-800">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-bold mb-4">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              PRICING
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              Start Small,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Scale Fast
              </span>
            </h2>

            <p className="text-2xl sm:text-3xl text-slate-300 max-w-3xl mx-auto">
              Plans from £75/month • No long-term contracts<br />
              Scale up as your partner ecosystem grows
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-black border-2 border-slate-700 rounded-3xl p-12 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 font-bold">
              <DollarSign size={24} />
              <span className="text-xl">Transparent, Simple Pricing</span>
            </div>
            <p className="text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Start with market intelligence at £75/month. Add AI engines as you grow. Pay only for what you need.
            </p>
            <button
              onClick={() => {
                navigate('/pricing')
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
              }}
              className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xl font-bold rounded-2xl transition-all shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              View All Plans
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="relative py-40 px-6 bg-gradient-to-b from-black via-slate-950 to-black border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <div className="space-y-12">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none">
              Build Your Partner Ecosystem<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                Today
              </span>
            </h2>

            <p className="text-2xl sm:text-3xl font-bold text-slate-300 max-w-3xl mx-auto">
              Get complete partner intelligence in 20 minutes
            </p>

            <p className="text-xl text-slate-400">
              30-day money-back guarantee • No credit card required
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => {
                  navigate('/product/opportunity-intelligence-engine')
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
                }}
                className="group px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-2xl font-black rounded-2xl transition-all shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 inline-flex items-center justify-center gap-3"
              >
                Get Free Intelligence Report
                <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  navigate('/partners')
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
                }}
                className="px-12 py-6 bg-slate-900/80 backdrop-blur-sm border-2 border-slate-600 text-white text-2xl font-bold hover:bg-slate-800 hover:border-slate-500 rounded-2xl transition-all"
              >
                Talk to Sales
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
