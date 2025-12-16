import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, Building2, Users, Rocket, Target } from 'lucide-react'
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
                The World's First<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                  End-to-End Channel Revenue<br />Operating System
                </span>
              </span>
            </h1>
          </div>

          <div className="space-y-6 animate-fade-in-delay-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-5xl mx-auto leading-tight">
              <span className="text-slate-200">Partner revenue is </span>
              <span className="text-emerald-400">3X cheaper than direct sales</span>
              <span className="text-slate-200">, but building an ecosystem takes </span>
              <span className="text-red-400">9 months and £200K+</span>
            </h2>
          </div>

          <div className="space-y-6 animate-fade-in-delay-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300 max-w-4xl mx-auto leading-relaxed">
              revARR gives you a complete partner strategy and the tools to execute it in 20 minutes.
            </h3>
          </div>

          <div className="pt-8 animate-fade-in-delay-3 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => {
                navigate('/product/channel-blueprint')
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
              }}
              className="group px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-2xl font-black rounded-2xl transition-all shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              Build My Partner Strategy
              <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                navigate('/product')
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
              }}
              className="px-12 py-6 bg-slate-900/80 backdrop-blur-sm border-2 border-slate-600 text-white text-2xl font-bold hover:bg-slate-800 hover:border-slate-500 rounded-2xl transition-all"
            >
              See a Demo
            </button>
          </div>
        </div>
      </section>

      <section className="relative py-16 px-6 bg-gradient-to-b from-black to-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-slate-400 text-lg font-semibold mb-6">TRUSTED BY LEADING B2B COMPANIES</p>
          </div>

          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
              <div className="w-32 h-16 bg-slate-700/30 rounded-lg flex items-center justify-center text-slate-500 text-xs font-bold">
                LOGO 1
              </div>
              <div className="w-32 h-16 bg-slate-700/30 rounded-lg flex items-center justify-center text-slate-500 text-xs font-bold">
                LOGO 2
              </div>
              <div className="w-32 h-16 bg-slate-700/30 rounded-lg flex items-center justify-center text-slate-500 text-xs font-bold">
                LOGO 3
              </div>
              <div className="w-32 h-16 bg-slate-700/30 rounded-lg flex items-center justify-center text-slate-500 text-xs font-bold">
                LOGO 4
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-gradient-to-b from-slate-950 via-black to-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-bold">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              BUILT FOR
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Every Stage</span> of Growth
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Whether you're just starting or scaling fast, revARR adapts to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-950/40 to-black border border-blue-800/40 rounded-2xl p-8 hover:border-blue-600/60 transition-all">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-500/10 rounded-xl">
                  <Rocket className="text-blue-400" size={32} />
                </div>
                <h3 className="text-xl font-black text-white">Early-Stage Startups</h3>
                <p className="text-slate-400 leading-relaxed">
                  Launch your partner program from day one without hiring a team
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-950/40 to-black border border-cyan-800/40 rounded-2xl p-8 hover:border-cyan-600/60 transition-all">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-cyan-500/10 rounded-xl">
                  <Target className="text-cyan-400" size={32} />
                </div>
                <h3 className="text-xl font-black text-white">Growth-Stage Scaleups</h3>
                <p className="text-slate-400 leading-relaxed">
                  Systematize and scale your existing partner relationships
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-950/40 to-black border border-emerald-800/40 rounded-2xl p-8 hover:border-emerald-600/60 transition-all">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-emerald-500/10 rounded-xl">
                  <Building2 className="text-emerald-400" size={32} />
                </div>
                <h3 className="text-xl font-black text-white">Established Enterprises</h3>
                <p className="text-slate-400 leading-relaxed">
                  Optimize and automate your complex partner ecosystems
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-950/40 to-black border border-blue-800/40 rounded-2xl p-8 hover:border-blue-600/60 transition-all">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-500/10 rounded-xl">
                  <Users className="text-blue-400" size={32} />
                </div>
                <h3 className="text-xl font-black text-white">Service Providers</h3>
                <p className="text-slate-400 leading-relaxed">
                  Find and connect with the right technology partners for your clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-black border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-bold">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              WHAT YOU GET
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Win With Partners</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 rounded-2xl">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                20min
              </div>
              <p className="text-xl text-slate-300">From zero to complete strategy</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 rounded-2xl">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-2">
                7 Tools
              </div>
              <p className="text-xl text-slate-300">Complete partner ecosystem</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 rounded-2xl">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-2">
                24/7
              </div>
              <p className="text-xl text-slate-300">AI tools that work while you sleep</p>
            </div>
          </div>

          <div className="space-y-8">
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
                  "I was about to hire a partner manager. Instead, I used revARR and had a complete partner strategy by lunch. Found 47 ideal partners in my first session."
                </p>
                <div className="pt-4">
                  <p className="text-xl font-bold text-white">Sarah Mitchell</p>
                  <p className="text-slate-400">VP of Partnerships, TechScale</p>
                </div>
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
                  "We spent 6 months trying to figure out our partner strategy with consultants. revARR gave us clarity in 20 minutes and saved us over £200K."
                </p>
                <div className="pt-4">
                  <p className="text-xl font-bold text-white">James Chen</p>
                  <p className="text-slate-400">CEO, CloudScale Systems</p>
                </div>
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
                  "The AI tools run constantly in the background. I wake up to new partner opportunities and deal alerts every morning. It's like having a full partner team."
                </p>
                <div className="pt-4">
                  <p className="text-xl font-bold text-white">Emma Thompson</p>
                  <p className="text-slate-400">Head of Partnerships, DataFlow</p>
                </div>
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
              Why Most Companies<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600">
                Fail at Partner Revenue
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-950/30 to-black border-2 border-red-900/50 rounded-2xl p-10">
              <div className="flex items-start gap-4">
                <div className="text-4xl">❌</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">You don't know which partners to target</h3>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Your competitors are already working with the best partners in your space. You're guessing at who might be a good fit, with no data to guide you.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-950/30 to-black border-2 border-red-900/50 rounded-2xl p-10">
              <div className="flex items-start gap-4">
                <div className="text-4xl">❌</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Partners don't know how to sell you</h3>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Even when you sign partners, they sit idle. They don't understand your value proposition or how to position you to their clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-950/30 to-black border-2 border-red-900/50 rounded-2xl p-10">
              <div className="flex items-start gap-4">
                <div className="text-4xl">❌</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">It takes 9+ months to see revenue</h3>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    By the time you've recruited, trained, and activated partners, market conditions have changed and opportunities are gone.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-950/30 to-black border-2 border-red-900/50 rounded-2xl p-10">
              <div className="flex items-start gap-4">
                <div className="text-4xl">❌</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Building a team costs £150K+ per year</h3>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Partner managers, analysts, ops specialists, consultants. The costs add up quickly before you see a single pound of partner revenue.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-12">
            <p className="text-3xl sm:text-4xl font-black text-white mb-4">
              Building partner ecosystems is complex, expensive, and slow.
            </p>
            <p className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600">
              Until now.
            </p>
          </div>
        </div>
      </section>

      <section id="solution" className="relative py-32 px-6 bg-gradient-to-b from-black via-blue-950/20 to-black border-t border-slate-800">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-bold mb-4">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              THE SOLUTION
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight">
              Get Your Partner Strategy<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                In 20 Minutes
              </span>
            </h2>

            <p className="text-2xl sm:text-3xl text-slate-300 max-w-5xl mx-auto leading-relaxed">
              No consultants. No hiring. No 9-month delays. Just answers.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900/80 to-black border-2 border-slate-700 rounded-3xl p-12 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-6">
                Here's What You'll Know in 20 Minutes
              </h3>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Everything you need to start building partner revenue today
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-950/40 to-black border border-blue-800/40 rounded-2xl p-8">
                <div className="text-blue-400 font-bold mb-4 text-lg">✓ Your Ideal Partner Profile</div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  The exact type of partners who will drive revenue for your business, and why they're the perfect fit
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan-950/40 to-black border border-cyan-800/40 rounded-2xl p-8">
                <div className="text-cyan-400 font-bold mb-4 text-lg">✓ Who Your Partners Are</div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  A list of specific companies and partners to target, complete with contact strategies
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-950/40 to-black border border-emerald-800/40 rounded-2xl p-8">
                <div className="text-emerald-400 font-bold mb-4 text-lg">✓ Your Partner Value Proposition</div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Exactly what to say to partners to make them want to work with you
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-950/40 to-black border border-blue-800/40 rounded-2xl p-8">
                <div className="text-blue-400 font-bold mb-4 text-lg">✓ Your Execution Roadmap</div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Step-by-step plan to recruit, activate, and scale your partner ecosystem
                </p>
              </div>
            </div>

          </div>

          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Then <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Automate With AI Tools</span>
              </h3>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                7 intelligent tools that work 24/7 to find partners, enable them, route deals, and track revenue
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              <div className="relative aspect-square max-w-3xl mx-auto">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>

                  <circle cx="200" cy="200" r="140" fill="none" stroke="url(#circleGradient)" strokeWidth="2" opacity="0.3" />
                  <circle cx="200" cy="200" r="120" fill="none" stroke="url(#circleGradient)" strokeWidth="1" opacity="0.2" />

                  <g className="animate-pulse">
                    <circle cx="200" cy="60" r="8" fill="#3b82f6" />
                    <circle cx="314" cy="114" r="6" fill="#06b6d4" />
                    <circle cx="314" cy="286" r="6" fill="#10b981" />
                    <circle cx="200" cy="340" r="6" fill="#3b82f6" />
                    <circle cx="86" cy="286" r="6" fill="#06b6d4" />
                    <circle cx="86" cy="114" r="6" fill="#10b981" />
                    <circle cx="200" cy="200" r="6" fill="#f59e0b" />
                  </g>
                </svg>

                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
                  <button
                    onClick={() => {
                      navigate('/product/channel-blueprint')
                      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
                    }}
                    className="group relative"
                  >
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-blue-950 to-black border-2 border-blue-500 rounded-2xl p-6 hover:scale-105 transition-all">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center px-3 py-1 bg-blue-500 rounded-full text-white text-xs font-black mb-2">
                          START HERE
                        </div>
                        <div className="text-lg font-black text-white mb-1">Partner Strategy</div>
                        <div className="text-blue-400 text-xs font-bold">Know where to focus</div>
                      </div>
                    </div>
                  </button>
                </div>

                <div className="absolute top-[15%] right-[8%] -translate-y-1/2">
                  <div className="bg-gradient-to-br from-cyan-950/80 to-black border border-cyan-800 rounded-xl p-4 hover:border-cyan-500 transition-all cursor-pointer">
                    <div className="text-center">
                      <div className="text-sm font-black text-white mb-1">Find Partners</div>
                      <div className="text-cyan-400 text-xs">Discover who to target</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 right-[8%] -translate-y-1/2">
                  <div className="bg-gradient-to-br from-emerald-950/80 to-black border border-emerald-800 rounded-xl p-4 hover:border-emerald-500 transition-all cursor-pointer">
                    <div className="text-center">
                      <div className="text-sm font-black text-white mb-1">Recruit Partners</div>
                      <div className="text-emerald-400 text-xs">Get them to sign</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-[15%] right-[18%] -translate-y-1/2">
                  <div className="bg-gradient-to-br from-blue-950/80 to-black border border-blue-800 rounded-xl p-4 hover:border-blue-500 transition-all cursor-pointer">
                    <div className="text-center">
                      <div className="text-sm font-black text-white mb-1">Train Partners</div>
                      <div className="text-blue-400 text-xs">Get them selling</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-br from-cyan-950/80 to-black border border-cyan-800 rounded-xl p-4 hover:border-cyan-500 transition-all cursor-pointer">
                    <div className="text-center">
                      <div className="text-sm font-black text-white mb-1">Track Revenue</div>
                      <div className="text-cyan-400 text-xs">See what's working</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-[15%] left-[18%] -translate-y-1/2">
                  <div className="bg-gradient-to-br from-emerald-950/80 to-black border border-emerald-800 rounded-xl p-4 hover:border-emerald-500 transition-all cursor-pointer">
                    <div className="text-center">
                      <div className="text-sm font-black text-white mb-1">Route Deals</div>
                      <div className="text-emerald-400 text-xs">Connect customers</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-[8%] -translate-y-1/2">
                  <div className="bg-gradient-to-br from-blue-950/80 to-black border border-blue-800 rounded-xl p-4 hover:border-blue-500 transition-all cursor-pointer">
                    <div className="text-center">
                      <div className="text-sm font-black text-white mb-1">Scale Growth</div>
                      <div className="text-blue-400 text-xs">Expand ecosystem</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-br from-orange-950/90 to-black border-2 border-orange-600 rounded-2xl p-6 shadow-2xl shadow-orange-500/20">
                    <div className="text-center">
                      <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-1">
                        revARR
                      </div>
                      <div className="text-white text-xs font-bold">All-in-One Platform</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 rounded-2xl p-6 text-center">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                  Strategy First
                </div>
                <p className="text-slate-300">Know exactly what to do</p>
              </div>
              <div className="bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 rounded-2xl p-6 text-center">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-2">
                  Tools Second
                </div>
                <p className="text-slate-300">Automate the execution</p>
              </div>
              <div className="bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 rounded-2xl p-6 text-center">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-2">
                  Revenue Forever
                </div>
                <p className="text-slate-300">AI runs 24/7 for you</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 rounded-3xl p-12 mb-16">
            <div className="text-center space-y-8 mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-bold">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                SEE IT IN ACTION
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Your Partner Strategy
                </span>
                <br />In Under 20 Minutes
              </h3>
            </div>

            <div className="bg-slate-950/50 border border-slate-700 rounded-2xl overflow-hidden">
              <div className="aspect-video bg-slate-800/50 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-slate-500 text-lg font-bold">PRODUCT DEMO SCREENSHOT</div>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Screenshot of Channel Blueprint output showing partner strategy
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-slate-950/50 border border-slate-700 rounded-xl p-6">
                <div className="aspect-[4/3] bg-slate-800/50 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-slate-600 text-xs font-bold">Screenshot 1</div>
                </div>
                <p className="text-slate-300 text-sm text-center">Partner Discovery Results</p>
              </div>
              <div className="bg-slate-950/50 border border-slate-700 rounded-xl p-6">
                <div className="aspect-[4/3] bg-slate-800/50 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-slate-600 text-xs font-bold">Screenshot 2</div>
                </div>
                <p className="text-slate-300 text-sm text-center">Value Proposition Builder</p>
              </div>
              <div className="bg-slate-950/50 border border-slate-700 rounded-xl p-6">
                <div className="aspect-[4/3] bg-slate-800/50 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-slate-600 text-xs font-bold">Screenshot 3</div>
                </div>
                <p className="text-slate-300 text-sm text-center">Execution Roadmap</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-950/30 to-black border-2 border-blue-800/60 rounded-3xl p-12 text-center space-y-8">
            <h3 className="text-3xl sm:text-4xl font-black text-white">
              Start Building Your Partner Ecosystem<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                In 20 Minutes
              </span>
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Get your complete partner strategy, then automate execution with AI tools that work 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button
                onClick={() => {
                  navigate('/product/channel-blueprint')
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
                }}
                className="group px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xl font-bold rounded-2xl transition-all shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 inline-flex items-center justify-center gap-3"
              >
                Build My Strategy Now
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  navigate('/product')
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
                }}
                className="px-12 py-6 bg-slate-900/80 backdrop-blur-sm border-2 border-slate-600 text-white text-xl font-bold hover:bg-slate-800 hover:border-slate-500 rounded-2xl transition-all"
              >
                See All Tools
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-slate-950 to-black border-t border-slate-800">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-bold mb-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              THE DIFFERENCE
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              From Guesswork<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600">
                To Certainty
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 rounded-2xl p-8 text-center">
              <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
                20min
              </div>
              <p className="text-xl text-slate-300">Complete strategy<br />(not 6 months)</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 rounded-2xl p-8 text-center">
              <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-4">
                24/7
              </div>
              <p className="text-xl text-slate-300">AI automation<br />(not hiring a team)</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 rounded-2xl p-8 text-center">
              <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-4">
                Forever
              </div>
              <p className="text-xl text-slate-300">Yours to keep<br />(not subscription)</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-black border-2 border-slate-700 rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-2xl font-bold text-red-400">Without revARR:</p>
                <ul className="space-y-4 text-slate-300 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 text-xl">✗</span>
                    <span>Guess at which partners to target</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 text-xl">✗</span>
                    <span>Spend months on consultants and strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 text-xl">✗</span>
                    <span>Wait 9-12 months for partner revenue</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 text-xl">✗</span>
                    <span>Partners don't know how to sell you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 text-xl">✗</span>
                    <span>Manual tracking and relationship management</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <p className="text-2xl font-bold text-emerald-400">With revARR:</p>
                <ul className="space-y-4 text-slate-300 text-lg">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-400 mt-1 flex-shrink-0" size={24} />
                    <span>Know exactly which partners to target and why</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-400 mt-1 flex-shrink-0" size={24} />
                    <span>Complete strategy delivered in 20 minutes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-400 mt-1 flex-shrink-0" size={24} />
                    <span>Start executing your plan immediately</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-400 mt-1 flex-shrink-0" size={24} />
                    <span>Partners get enablement materials automatically</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-400 mt-1 flex-shrink-0" size={24} />
                    <span>AI tools work 24/7 to scale your ecosystem</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-700 text-center mt-8">
              <p className="text-3xl sm:text-4xl font-black text-white mb-3">
                Stop guessing. Start knowing.
              </p>
              <button
                onClick={() => {
                  navigate('/product/channel-blueprint')
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
                }}
                className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-lg font-bold rounded-xl transition-all shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 inline-flex items-center justify-center gap-3"
              >
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-40 px-6 bg-gradient-to-b from-black via-slate-950 to-black border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <div className="space-y-12">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none">
              Ready to Build<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                Partner Revenue?
              </span>
            </h2>

            <p className="text-2xl sm:text-3xl font-bold text-slate-300 max-w-3xl mx-auto">
              Get your complete partner strategy in 20 minutes
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => {
                  navigate('/product/channel-blueprint')
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
                }}
                className="group px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-2xl font-black rounded-2xl transition-all shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 inline-flex items-center justify-center gap-3"
              >
                Build My Partner Strategy
                <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  navigate('/pricing')
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
                }}
                className="px-12 py-6 bg-slate-900/80 backdrop-blur-sm border-2 border-slate-600 text-white text-2xl font-bold hover:bg-slate-800 hover:border-slate-500 rounded-2xl transition-all"
              >
                View Pricing
              </button>
            </div>

            <p className="text-slate-400 text-lg pt-8">
              <span className="text-white font-bold">In 20 minutes, you'll have everything you need to start.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
