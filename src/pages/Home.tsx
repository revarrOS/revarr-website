import { useNavigate } from 'react-router-dom'
import { ArrowRight, Building2, Server, Briefcase, Zap, Target, TrendingUp, Brain, DollarSign, Users, Clock, BarChart3, Shield } from 'lucide-react'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen">
      <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-8">
              <Zap size={16} />
              <span>AI-Powered Channel Intelligence Platform</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Build Predictable Channel<br />Revenue in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">6-12 Months</span>
            </h1>
            <p className="text-xl text-slate-300 mb-6 max-w-4xl mx-auto leading-relaxed">
              The only platform that discovers your competitors' partners, quantifies your market opportunity, and builds your entire channel program from zero to revenue.
            </p>
            <p className="text-lg text-slate-400 mb-10 max-w-3xl mx-auto">
              Not a consultant. Not a framework. A <strong className="text-white">fully functional, AI-powered platform</strong> that delivers executive-grade competitive intelligence in minutes, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => navigate('/product')}
                className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
              >
                See the Platform
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate('/solution')}
                className="px-8 py-4 bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700 text-white hover:bg-slate-700 hover:border-slate-600 rounded-xl font-medium transition-all"
              >
                View Methodology
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">2-3 min</div>
                <div className="text-xs md:text-sm text-slate-400">Competitive Intelligence</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">8-12 min</div>
                <div className="text-xs md:text-sm text-slate-400">1,500+ Partners Discovered</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-1">$100K+</div>
                <div className="text-xs md:text-sm text-slate-400">Consulting Costs Replaced</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-1">6-12 mo</div>
                <div className="text-xs md:text-sm text-slate-400">To Predictable Revenue</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              This Isn't a Tool. It's Your Channel Team.
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              One platform that replaces $100K+ in consultants, tools, and manual research
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all group">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="text-blue-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Competitive Intelligence Engine</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Enter a company name, get executive-level intelligence in 2-3 minutes. Market sizing, competitive landscape, and financial projections automatically.
              </p>
              <div className="text-sm text-blue-400 font-medium">Replaces: Market research firms ($50K+ engagements)</div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all group">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Partner Discovery Autopilot</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Discover 1,500+ potential partners in 8-12 minutes. Know exactly which partners your competitors recruited and why they matter.
              </p>
              <div className="text-sm text-cyan-400 font-medium">Replaces: Partner discovery services (3-6 months manual work)</div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all group">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <DollarSign className="text-emerald-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Revenue Intelligence</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Competitive Revenue Pool (CRP) calculation and 5-year Win Scenario projections. Board-ready financial modeling built-in.
              </p>
              <div className="text-sm text-emerald-400 font-medium">Replaces: Revenue forecasting consultants ($25K+ projects)</div>
            </div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="text-amber-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Evolves Into Your Full PRM System</h3>
                <p className="text-slate-400 leading-relaxed">
                  After discovering and recruiting partners, revARR becomes your Partner Relationship Management system tracking deals, managing co-sell opportunities, and generating QBR reports. No separate $50K PRM implementation needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Built for Channel Leaders Who Demand Results
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Intelligence-driven channel building for companies serious about indirect revenue
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="text-blue-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">For SaaS Companies</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Build a channel program in 6-12 months that would traditionally take 3-5 years with LESS risk, BETTER partners, and MEASURABLE outcomes.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <Target size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                  <span>Know your exact market opportunity (CRP)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                  <span>Recruit proven partners, not cold prospects</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                  <span>Scale revenue without scaling headcount</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                <Server className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">For IT Vendors</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Stop guessing which partners to recruit. See EXACTLY who's selling competitive solutions successfully, then recruit them strategically.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <Target size={18} className="text-cyan-400 flex-shrink-0 mt-1" />
                  <span>Analyze competitors' partner ecosystems</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target size={18} className="text-cyan-400 flex-shrink-0 mt-1" />
                  <span>Discover 1,500+ pre-qualified partners</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target size={18} className="text-cyan-400 flex-shrink-0 mt-1" />
                  <span>Build distribution with intelligence</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="text-emerald-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">For IT Service Providers</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                See your competitive landscape, understand the revenue opportunity, and identify the RIGHT technology partners to add to your portfolio.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <Target size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <span>Competitive intelligence on vendors</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <span>Market sizing and opportunity analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <span>Strategic partner selection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Traditional Approach vs. revARR</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              See the difference intelligence makes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="inline-flex px-4 py-2 bg-slate-700/50 rounded-lg text-slate-400 font-medium mb-4">
                  Traditional Approach
                </div>
              </div>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <Clock size={20} className="text-slate-500 flex-shrink-0 mt-1" />
                  <span>3-6 months of market research</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={20} className="text-slate-500 flex-shrink-0 mt-1" />
                  <span>$50K competitive analysis project</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={20} className="text-slate-500 flex-shrink-0 mt-1" />
                  <span>Manual partner research (months)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={20} className="text-slate-500 flex-shrink-0 mt-1" />
                  <span>$100K+ PRM implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={20} className="text-slate-500 flex-shrink-0 mt-1" />
                  <span>24+ month time-to-first-deal</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={20} className="text-slate-500 flex-shrink-0 mt-1" />
                  <span>Generic partner recruitment</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={20} className="text-slate-500 flex-shrink-0 mt-1" />
                  <span>Hope-based forecasting</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8 shadow-lg shadow-blue-500/10">
              <div className="text-center mb-6">
                <div className="inline-flex px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-300 font-medium mb-4">
                  revARR Platform
                </div>
              </div>
              <ul className="space-y-4 text-slate-200">
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                  <span><strong>2-3 minutes</strong> automated intelligence</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                  <span><strong>Included</strong> in platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                  <span><strong>8-12 minutes</strong> automated discovery</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                  <span><strong>Grows organically</strong> with your channel</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                  <span><strong>6-12 months</strong> with proven partners</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                  <span><strong>Strategic,</strong> intelligence-driven targeting</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                  <span><strong>Data-driven</strong> Win Scenario projections</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">The "Wow" Moments</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              What makes channel leaders choose revARR
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Brain size={24} className="text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">2-3 Minutes</div>
              <p className="text-slate-400 leading-relaxed">
                From company name to executive-grade competitive intelligence report with CRP calculation and Win Scenario projections
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} className="text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">1,500+ Partners</div>
              <p className="text-slate-400 leading-relaxed">
                Discovered and prioritized in 8-12 minutes. Know exactly which partners your competitors recruited and why they're strategic targets
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 size={24} className="text-emerald-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">Board-Ready</div>
              <p className="text-slate-400 leading-relaxed">
                Financial intelligence that CFOs and investors understand. CRP quantifies the market, Win Scenario projects your revenue
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-10 max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield size={32} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Built by Channel Leaders, For Channel Leaders</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-4">
                  Not a generic CRM with a "partner module". Not a consultant framework in a PDF. Not a manual process with software on top.
                </p>
                <p className="text-white font-medium text-xl">
                  A FULL-STACK CHANNEL OPERATING SYSTEM built on competitive intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Predictable Channel Revenue?
          </h2>
          <p className="text-xl text-slate-300 mb-4 max-w-3xl mx-auto">
            See your competitive intelligence in 2-3 minutes. Discover 1,500+ potential partners in 8-12 minutes.
          </p>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Join channel leaders who build programs on intelligence, not guesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/product')}
              className="group px-8 py-5 bg-blue-600 hover:bg-blue-500 text-white text-lg rounded-xl font-medium transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
            >
              Try the Platform
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/solution')}
              className="px-8 py-5 bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700 text-white text-lg hover:bg-slate-700 hover:border-slate-600 rounded-xl font-medium transition-all"
            >
              See the Methodology
            </button>
          </div>
          <div className="mt-12 text-slate-400 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </div>
        </div>
      </section>
    </div>
  )
}
