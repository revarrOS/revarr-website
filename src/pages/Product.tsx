import { useNavigate } from 'react-router-dom'
import { Brain, DollarSign, Users, Target, Zap, TrendingUp, BarChart3, Search, FileText, MapPin, Shield, Database, Clock, CheckCircle, ArrowRight, Sparkles } from 'lucide-react'

export default function Product() {
  const navigate = useNavigate()

  const tenFactors = [
    {
      number: '1',
      title: 'Vendor Product Portfolio Analysis',
      description: 'AI-powered analysis of your entire product catalog, core offerings, and market positioning',
      icon: Search
    },
    {
      number: '2',
      title: 'Target Market Segmentation',
      description: '3 specific vertical markets where you can win, based on B2B frameworks and competitive gaps',
      icon: Target
    },
    {
      number: '3',
      title: 'Ideal Customer Profile (ICP)',
      description: 'Firmographic and technographic intelligence for precise partner program targeting',
      icon: Users
    },
    {
      number: '4-6',
      title: 'Three-Tier Competitive Intelligence',
      description: 'Priority A/B/C competitors mapped with market share, geographic presence, and strategic threat assessment',
      icon: Shield
    },
    {
      number: '7',
      title: 'Primary Attack Vector',
      description: 'AI-synthesized differentiation strategy and unique value proposition vs. direct competitors',
      icon: Zap
    },
    {
      number: '8-9',
      title: 'Geographic Intelligence',
      description: 'Competitive density analysis and white space identification for expansion opportunities',
      icon: MapPin
    },
    {
      number: '10',
      title: 'Internal Value Narrative',
      description: 'Partner-facing value propositions and messaging framework for channel enablement',
      icon: FileText
    }
  ]

  const partnerTiers = [
    {
      tier: 'Tier 1 Partners',
      badge: '3/3 Overlap',
      description: 'Partners working with ALL your competitors',
      color: 'emerald',
      priority: 'CRITICAL TARGET',
      insight: 'These partners already know your market inside-out and are selling competitive solutions successfully'
    },
    {
      tier: 'Tier 2 Partners',
      badge: '2/3 Overlap',
      description: 'Partners working with 2 competitors',
      color: 'cyan',
      priority: 'HIGH-VALUE TARGET',
      insight: 'Proven track record in your space with established sales motion and customer relationships'
    },
    {
      tier: 'Tier 3 Partners',
      badge: '1/3 Overlap',
      description: 'Partners working with 1 competitor',
      color: 'blue',
      priority: 'OPPORTUNITY TARGET',
      insight: 'Familiar with your market segment and potentially receptive to additional vendor relationships'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="py-20 md:py-28 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-8">
              <Sparkles size={16} />
              <span>Production-Ready AI Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              The Complete Channel Growth<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Operating System</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-6 leading-relaxed">
              Not a consultant deck. Not a framework PDF. A <strong className="text-white">fully functional, AI-powered, production-ready platform</strong> that automates the entire channel partnership lifecycle from discovery to revenue.
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              One platform that replaces market research firms, partner discovery services, competitive intelligence tools, and PRM systems saving you $100K+ and 6-12 months of manual work.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">2-3 min</div>
              <div className="text-sm text-slate-400">Executive Intelligence Report</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">1,500+</div>
              <div className="text-sm text-slate-400">Partners Discovered</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">$100K+</div>
              <div className="text-sm text-slate-400">Cost Savings</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">6-12 mo</div>
              <div className="text-sm text-slate-400">To Revenue</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 1: The Intelligence Engine */}
      <section className="py-20 md:py-24 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full text-blue-400 text-sm font-medium mb-4">
              STAGE 1: DISCOVER & DEFINE
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              The Intelligence Engine
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Transforms a company name into executive-level competitive intelligence in <strong className="text-white">2-3 minutes</strong>
            </p>
          </div>

          <div className="mb-16">
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-10 mb-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain size={32} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">The 10 Executive Business Factors</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Not generic data. <strong className="text-white">STRATEGIC INTELLIGENCE</strong> that CFOs and Board members understand. Each factor automatically generated using AI-powered web scraping and competitive analysis.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {tenFactors.map((factor, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <factor.icon className="text-blue-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-blue-400 font-bold text-lg">Factor {factor.number}</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">{factor.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{factor.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Executive PDF Report Generation</h4>
                  <p className="text-slate-400 leading-relaxed">
                    One-click export of entire intelligence report with professional formatting for Board presentations. Share with investors, executive team, or stakeholders complete with all 10 intelligence factors and financial projections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Intelligence */}
      <section className="py-20 md:py-24 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full text-emerald-400 text-sm font-medium mb-4">
              THE FINANCIAL INTELLIGENCE
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Competitive Intelligence That Thinks Like a CFO
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              The platform doesn't just identify competitors, it <strong className="text-white">quantifies the opportunity</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-10">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <Database size={28} className="text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Competitive Revenue Pool (CRP) Calculation
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                AI scrapes pricing, revenue, and customer data for ALL Priority A competitors. Aggregates total addressable revenue pool with confidence scoring.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300">Total Market Size (Aggregate ARR)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300">Total Customer Base</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300">Competitor-by-Competitor Breakdown</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300">Confidence Assessment & Validation</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-10">
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp size={28} className="text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Win Scenario ROI Projection
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                5-year revenue model projecting YOUR revenue opportunity based on market share capture. Board-ready financial projections.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-amber-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300">Year-by-Year Revenue Projections</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-amber-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300">Customer Acquisition Forecasts</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-amber-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300">Average Contract Value Modeling</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-amber-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300">Cumulative 5-Year Revenue Total</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-10 max-w-6xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <DollarSign size={32} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Business Impact</h3>
                <ul className="space-y-3 text-slate-300 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400">•</span>
                    <span>CFOs can justify channel investment with hard numbers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400">•</span>
                    <span>Sales teams can size their TAM with precision</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400">•</span>
                    <span>Investors see validated market opportunity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400">•</span>
                    <span>Board-level business case for channel strategy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 2: Partner Intelligence */}
      <section className="py-20 md:py-24 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full text-cyan-400 text-sm font-medium mb-4">
              STAGE 2: PARTNER INTELLIGENCE
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Partner Discovery on Autopilot
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Analyzes your top 3 competitors' entire partner ecosystems in <strong className="text-white">8-12 minutes</strong>
            </p>
          </div>

          <div className="mb-12">
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-10 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users size={32} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">The Discovery Process</h3>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div>
                      <div className="text-cyan-400 font-bold mb-2">STEP 1</div>
                      <h4 className="text-white font-bold mb-2">Competitive Partner Program Analysis</h4>
                      <p className="text-slate-300 text-sm">Discovers partner tiers, program structure, and benefits for each competitor</p>
                    </div>
                    <div>
                      <div className="text-cyan-400 font-bold mb-2">STEP 2</div>
                      <h4 className="text-white font-bold mb-2">Partner Network Scraping</h4>
                      <p className="text-slate-300 text-sm">Up to 500 partners per competitor = 1,500 total partner profiles discovered</p>
                    </div>
                    <div>
                      <div className="text-cyan-400 font-bold mb-2">STEP 3</div>
                      <h4 className="text-white font-bold mb-2">Strategic Overlap Analysis</h4>
                      <p className="text-slate-300 text-sm">Identifies partners working with multiple competitors and prioritizes them</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {partnerTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-${tier.color}-900/30 to-${tier.color}-900/10 backdrop-blur-sm border border-${tier.color}-500/30 rounded-xl p-8 hover:border-${tier.color}-500/50 hover:shadow-lg hover:shadow-${tier.color}-500/10 transition-all`}
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-14 h-14 bg-${tier.color}-500/20 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Target size={28} className={`text-${tier.color}-400`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h4 className="text-2xl font-bold text-white">{tier.tier}</h4>
                        <span className={`px-3 py-1 bg-${tier.color}-500/20 border border-${tier.color}-500/30 rounded-full text-${tier.color}-300 text-sm font-medium`}>
                          {tier.badge}
                        </span>
                        <span className={`px-3 py-1 bg-${tier.color}-500/10 rounded-full text-${tier.color}-400 text-sm font-bold`}>
                          {tier.priority}
                        </span>
                      </div>
                      <p className="text-slate-300 text-lg mb-3">{tier.description}</p>
                      <p className="text-slate-400 italic">"{tier.insight}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">Why This Changes Everything</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={24} className="text-cyan-400" />
                </div>
                <h4 className="text-white font-bold mb-2">Proven Winners</h4>
                <p className="text-slate-400 text-sm">These partners ALREADY sell competitive solutions successfully</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock size={24} className="text-cyan-400" />
                </div>
                <h4 className="text-white font-bold mb-2">Fast Time-to-Revenue</h4>
                <p className="text-slate-400 text-sm">No partner education needed, they know the market and sales motion</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap size={24} className="text-cyan-400" />
                </div>
                <h4 className="text-white font-bold mb-2">Recruiting Advantage</h4>
                <p className="text-slate-400 text-sm">Approach with competitive intelligence and strategic positioning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Endgame: Full PRM */}
      <section className="py-20 md:py-24 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full text-amber-400 text-sm font-medium mb-4">
              THE ENDGAME
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Evolves Into Your Full PRM System
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              After the intelligence and discovery stages, revARR becomes your complete Partner Relationship Management platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h4 className="text-white font-bold mb-3">Stage 3: Partner Acquisition</h4>
              <p className="text-slate-400 text-sm mb-4">AI-powered outreach automation and personalized messaging</p>
              <div className="inline-flex px-3 py-1 bg-amber-500/10 rounded-full text-amber-400 text-xs font-medium">
                Coming Soon
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h4 className="text-white font-bold mb-3">Stage 4: Sign-Up & Onboarding</h4>
              <p className="text-slate-400 text-sm mb-4">Digital partner portal and automated enablement workflows</p>
              <div className="inline-flex px-3 py-1 bg-amber-500/10 rounded-full text-amber-400 text-xs font-medium">
                In Development
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h4 className="text-white font-bold mb-3">Stage 5: Co-Sell Management</h4>
              <p className="text-slate-400 text-sm mb-4">Deal rooms, pipeline tracking, and joint account planning</p>
              <div className="inline-flex px-3 py-1 bg-amber-500/10 rounded-full text-amber-400 text-xs font-medium">
                Roadmap
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 md:col-span-2 lg:col-span-3">
              <h4 className="text-white font-bold mb-3">Stage 6: QBR Dashboards & Executive Reporting</h4>
              <p className="text-slate-400 text-sm mb-4">Partner performance analytics, ROI measurement, and automated quarterly business reviews</p>
              <div className="inline-flex px-3 py-1 bg-amber-500/10 rounded-full text-amber-400 text-xs font-medium">
                Future Release
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-10">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <BarChart3 size={32} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">What Makes This Different from Traditional PRMs</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                    <span><strong>Built on competitive intelligence:</strong> Every partner recruited with strategic intent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                    <span><strong>AI-powered recommendations:</strong> Platform suggests which partners to activate for which deals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                    <span><strong>Outcome-driven:</strong> Designed around revenue generation, not just relationship tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                    <span><strong>Grows organically:</strong> Built as your channel grows, no $50K-$500K PRM implementation needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See the Platform in Action
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            Experience what it's like to have executive-grade intelligence at your fingertips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/pricing')}
              className="group px-8 py-5 bg-blue-600 hover:bg-blue-500 text-white text-lg rounded-xl font-medium transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/solution')}
              className="px-8 py-5 bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700 text-white text-lg hover:bg-slate-700 hover:border-slate-600 rounded-xl font-medium transition-all"
            >
              View Full Methodology
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
