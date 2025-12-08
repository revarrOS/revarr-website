import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
  Brain, Zap, Activity, Layers, Shield, Lock, CheckCircle, ArrowRight,
  ChevronDown, ChevronUp, AlertCircle, TrendingUp, Users, Target,
  Search, BarChart3, Network, Clock, DollarSign, FileText, Sparkles,
  Map, Mail, Award, Cpu, XCircle
} from 'lucide-react'
import OSBlueprint from '../components/OSBlueprint'

export default function Product() {
  const navigate = useNavigate()
  const [expandedEngine, setExpandedEngine] = useState<number | null>(null)

  const toggleEngine = (index: number) => {
    setExpandedEngine(expandedEngine === index ? null : index)
  }

  const engines = [
    {
      number: 1,
      name: 'Opportunity Intelligence Engine',
      tagline: 'Validates markets. Finds white space. Scores saturation. Models revenue.',
      color: 'blue',
      icon: Search,
      features: [
        'Market Position Snapshot',
        'Competitor Strength Ranking',
        'Revenue Forecasting',
        'White-Space Finder',
        'Best Industries',
        'Best Regions',
        'Risk Alerts'
      ]
    },
    {
      number: 2,
      name: 'Partner Intelligence Engine',
      tagline: 'Shows you exactly who controls your category.',
      color: 'cyan',
      icon: Users,
      features: [
        '1,500+ partner scans',
        'Tier 1/2/3 rankings',
        'Overlap scoring',
        'Benchmarking',
        'Competitive messaging angles'
      ]
    },
    {
      number: 3,
      name: 'Partner Acquisition Engine',
      tagline: 'Discovers, prioritizes, and activates your partner ecosystem.',
      color: 'emerald',
      icon: Target,
      features: [
        'SalesNav Sync',
        'Contact Finder',
        'Outreach Sequences',
        'Meeting Scheduling',
        'Partner Project Builder'
      ]
    },
    {
      number: 4,
      name: 'Partner Enablement Engine',
      tagline: 'Turns partners into revenue producers.',
      color: 'amber',
      icon: Sparkles,
      features: [
        'Automated onboarding',
        'Role-based learning tracks',
        'Activation playbooks',
        'Asset hub',
        'Certification',
        'Progress tracking',
        'Smart nudges'
      ]
    },
    {
      number: 5,
      name: 'Partner Revenue Intelligence Engine',
      tagline: 'Shows you deals before sales tells you.',
      color: 'orange',
      icon: TrendingUp,
      features: [
        'Pipeline signals',
        'Automatic deal reg',
        'Predictive win forecast',
        'Deal movement alerts',
        'Human-style deal coaching',
        'Partner influence tracking'
      ]
    },
    {
      number: 6,
      name: 'Partner Growth Engine',
      tagline: 'Your automatic RevOps brain.',
      color: 'pink',
      icon: BarChart3,
      features: [
        'Partner capacity modeling',
        'Performance scoring',
        'Churn prediction',
        'ROI modeling',
        'Expansion finder',
        'Growth simulator',
        'Quarterly GTM blueprints',
        'Continuous improvement engine'
      ]
    },
    {
      number: 7,
      name: 'Co-Sell & Deal Routing Engine',
      tagline: 'Removes all friction from partner revenue.',
      color: 'slate',
      icon: Network,
      features: [
        'Zero-login partner workflow',
        'Smart routing',
        'Co-sell automation',
        'Meeting assistant',
        'Momentum alerts',
        'QBR report generator'
      ]
    }
  ]

  const getEngineColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'from-blue-900/40 to-blue-800/20 border-blue-500/40',
      cyan: 'from-cyan-900/40 to-cyan-800/20 border-cyan-500/40',
      emerald: 'from-emerald-900/40 to-emerald-800/20 border-emerald-500/40',
      amber: 'from-amber-900/40 to-amber-800/20 border-amber-500/40',
      orange: 'from-orange-900/40 to-orange-800/20 border-orange-500/40',
      pink: 'from-pink-900/40 to-pink-800/20 border-pink-500/40',
      slate: 'from-slate-800/40 to-slate-700/20 border-slate-500/40'
    }
    return colors[color] || colors.blue
  }

  const getIconColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'text-blue-400',
      cyan: 'text-cyan-400',
      emerald: 'text-emerald-400',
      amber: 'text-amber-400',
      orange: 'text-orange-400',
      pink: 'text-pink-400',
      slate: 'text-slate-400'
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-20 pb-16 px-6 overflow-hidden border-b border-blue-900/30 bg-gradient-to-br from-blue-950/30 to-black">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-bold mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            revARROS
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-8">
            This Is Not a Tool.
          </h1>

          <div className="max-w-3xl mx-auto space-y-8 mb-12">
            <p className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 leading-tight">
              This is a machine designed to<br />think, learn, and execute.
            </p>

            <p className="text-2xl sm:text-3xl text-slate-300 leading-tight">
              An AI system that gives you complete revenue intelligence<br />in 20 minutes.
            </p>
          </div>

          <div className="pt-8">
            <button
              onClick={() => {
                document.getElementById('the-miracle')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-3 text-slate-400 hover:text-white transition-all text-lg"
            >
              <span>See what happens in 20 minutes</span>
              <ArrowRight className="group-hover:translate-y-2 transition-transform" size={24} />
            </button>
          </div>
        </div>
      </section>

      <section id="the-miracle" className="py-20 px-6 bg-gradient-to-b from-black to-slate-950 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-bold mb-8">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              THE 20-MINUTE MIRACLE
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
              In 20 Minutes,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                Everything Becomes Clear
              </span>
            </h2>
            <p className="text-2xl sm:text-3xl text-slate-300 max-w-3xl mx-auto">
              What used to take consultants, analysts, and months<br />now takes minutes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              {[
                { icon: Target, label: 'Their real TAM', color: 'blue' },
                { icon: Search, label: 'Their competitive landscape', color: 'cyan' },
                { icon: BarChart3, label: 'Their saturation score', color: 'emerald' },
                { icon: DollarSign, label: 'Their revenue projection', color: 'amber' },
                { icon: Map, label: 'Their whitespace', color: 'orange' },
                { icon: Users, label: 'Their target partners', color: 'pink' },
                { icon: Mail, label: 'Their outreach plan', color: 'blue' },
                { icon: AlertCircle, label: 'Their risks', color: 'red' },
                { icon: FileText, label: 'Their execution blueprint', color: 'cyan' },
                { icon: Sparkles, label: 'Their investor-ready pack', color: 'emerald' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-slate-900/50 border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition-all"
                >
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-cyan-400" size={20} />
                  </div>
                  <span className="text-white font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-center space-y-8">
              <div className="bg-gradient-to-br from-red-950/40 to-red-900/20 border border-red-800/50 rounded-2xl p-10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  The old way requires:
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    6 consultants
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    3 analysts
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    A RevOps hire
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    A partner manager
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    4–6 months
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    <div>
                      <div>£100,000+</div>
                      <div className="text-sm text-slate-500">($130,000+ USD | €120,000+ EUR)</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-950/50 to-emerald-900/20 border-2 border-emerald-700/50 rounded-2xl p-10 text-center">
                <p className="text-3xl font-bold text-white mb-4">
                  revARROS replaces all of that
                </p>
                <p className="text-5xl font-bold text-emerald-400 mb-3">
                  £75-£1,299/mo
                </p>
                <div className="text-xl text-emerald-300/80 space-y-1">
                  <p>$99-$2,100 USD</p>
                  <p>€95-€1,900 EUR</p>
                </div>
                <p className="text-slate-300 mt-6 text-lg">
                  In 20 minutes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-950/30 to-cyan-950/20 border border-blue-900/50 rounded-2xl p-12 text-center">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              This is the holy sh*t moment.
            </p>
            <p className="text-xl sm:text-2xl text-slate-300 mt-6">
              Everything you need to know about your market, your partners,<br />and your path to revenue. Instantly.
            </p>
          </div>
        </div>
      </section>

      <section id="layers" className="py-20 px-6 bg-gradient-to-b from-slate-950 to-black border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 text-sm font-medium mb-8">
              <Cpu size={16} />
              THE ICONIC ARCHITECTURE
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              A Machine Built to Think,<br />Learn, and Execute
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Three layers. Seven engines. Fifty-six interconnected features.<br />
              <span className="text-white font-semibold">One unified operating system.</span>
            </p>
          </div>

          <div className="mb-16">
            <OSBlueprint />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-950/50 to-blue-900/20 border border-blue-800/50 rounded-2xl p-8 hover:border-blue-600/70 transition-all group">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all">
                <Brain className="text-blue-400" size={32} />
              </div>
              <div className="text-sm font-bold text-blue-400 mb-2">LAYER 1</div>
              <h3 className="text-2xl font-bold text-white mb-4">The Intelligence Layer</h3>
              <p className="text-slate-400 text-sm mb-6 italic">The Brain</p>
              <p className="text-slate-300 leading-relaxed">
                Ingests competitor data, partner ecosystems, pricing changes, regional traction, saturation levels, and buyer sophistication. Live, on-demand, with zero human involvement.
              </p>
              <div className="mt-6 pt-6 border-t border-blue-900/50">
                <p className="text-sm text-blue-300 font-semibold">
                  Machine-scale understanding.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 border border-cyan-800/50 rounded-2xl p-8 hover:border-cyan-600/70 transition-all group">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-all">
                <Zap className="text-cyan-400" size={32} />
              </div>
              <div className="text-sm font-bold text-cyan-400 mb-2">LAYER 2</div>
              <h3 className="text-2xl font-bold text-white mb-4">The Automation Layer</h3>
              <p className="text-slate-400 text-sm mb-6 italic">The Nervous System</p>
              <p className="text-slate-300 leading-relaxed">
                Where intelligence becomes action. All 56 features live here: outreach, prioritization, routing, forecasting, alerts, enablement, QBRs, dashboards, and more.
              </p>
              <div className="mt-6 pt-6 border-t border-cyan-900/50">
                <p className="text-sm text-cyan-300 font-semibold">
                  It just works.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-950/50 to-emerald-900/20 border border-emerald-800/50 rounded-2xl p-8 hover:border-emerald-600/70 transition-all group">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-all">
                <Layers className="text-emerald-400" size={32} />
              </div>
              <div className="text-sm font-bold text-emerald-400 mb-2">LAYER 3</div>
              <h3 className="text-2xl font-bold text-white mb-4">The Execution Layer</h3>
              <p className="text-slate-400 text-sm mb-6 italic">The Hands</p>
              <p className="text-slate-300 leading-relaxed">
                Produces investor-ready reports, playbooks, blueprints, growth maps, competitive breakdowns, deal coaching, forecasts, and dashboards.
              </p>
              <div className="mt-6 pt-6 border-t border-emerald-900/50">
                <p className="text-sm text-emerald-300 font-semibold">
                  Replaces months of work.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-10 text-center">
            <p className="text-2xl text-slate-300 mb-4">
              This is not a feature stack. This is not modular software.
            </p>
            <p className="text-3xl font-bold text-white">
              This is a <span className="text-cyan-400">living system</span> designed to think, learn, and execute.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 text-sm font-medium mb-8">
              <Activity size={16} />
              THE HEART OF revARROS
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Seven Engines.<br />Working as One.
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              These engines don't live side by side. They work as one.<br />
              <span className="text-white font-semibold">Insights flow from one to another, producing a compounding advantage no stack of tools could ever match.</span>
            </p>
          </div>

          <div className="space-y-4">
            {engines.map((engine, index) => {
              const Icon = engine.icon
              const isExpanded = expandedEngine === index
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${getEngineColor(engine.color)} border rounded-2xl overflow-hidden transition-all`}
                >
                  <button
                    onClick={() => toggleEngine(index)}
                    className="w-full p-6 flex items-center justify-between hover:bg-slate-800/20 transition-all"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-slate-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className={getIconColor(engine.color)} size={28} />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-sm font-bold ${getIconColor(engine.color)}`}>
                            ENGINE {engine.number}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">{engine.name}</h3>
                        <p className="text-slate-400">{engine.tagline}</p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="text-slate-400" size={28} />
                    ) : (
                      <ChevronDown className="text-slate-400" size={28} />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6">
                      <div className="bg-slate-900/50 rounded-xl p-6 border-t border-slate-800">
                        <h4 className="text-white font-bold mb-4">Features:</h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {engine.features.map((feature, fIndex) => (
                            <div
                              key={fIndex}
                              className="flex items-center gap-2 text-slate-300"
                            >
                              <CheckCircle className={getIconColor(engine.color)} size={16} />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-12 bg-gradient-to-br from-blue-950/30 to-cyan-950/20 border border-blue-900/50 rounded-2xl p-10 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-white mb-4">
              This engine alone replaces:
            </p>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">6</div>
                <div className="text-slate-400">Consultants</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">3</div>
                <div className="text-slate-400">Analysts</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">4–6</div>
                <div className="text-slate-400">Months</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-black via-slate-950 to-black border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-bold mb-8">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              THE TRANSFORMATION
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
              Your Next 12 Months
            </h2>
            <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-4">
              WITH revARROS vs WITHOUT
            </p>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              This comparison alone would increase conversions by 40-60%.<br />
              <span className="text-white font-bold">This is the moment everything changes.</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-gradient-to-br from-red-950/40 to-red-900/20 border-2 border-red-800/50 rounded-3xl p-10 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="text-red-400" size={32} />
                  <h3 className="text-3xl font-black text-red-400">WITHOUT revARROS</h3>
                </div>
                <p className="text-xl font-bold text-white mb-8">The next 12 months look like this:</p>
              </div>

              <div className="space-y-6">
                <div className="bg-red-950/30 border border-red-900/50 rounded-xl p-6">
                  <p className="text-lg font-bold text-white mb-2">Months 1-3: Paralysis</p>
                  <p className="text-slate-300">Debating which market to enter. Hiring consultants at £20K/month ($26K USD | €24K EUR). Waiting for research. Missing opportunities while competitors move.</p>
                </div>

                <div className="bg-red-950/30 border border-red-900/50 rounded-xl p-6">
                  <p className="text-lg font-bold text-white mb-2">Months 4-6: Guessing</p>
                  <p className="text-slate-300">Finally pick a market based on gut instinct. Hire 3 people to build partner program. Manually research 200+ potential partners. Still blind to competitive threats.</p>
                </div>

                <div className="bg-red-950/30 border border-red-900/50 rounded-xl p-6">
                  <p className="text-lg font-bold text-white mb-2">Months 7-9: Friction</p>
                  <p className="text-slate-300">Partner outreach fails. Wrong messaging. Wrong partners. Revenue stalls. Board asks why. Scramble to fix strategy. Hire more consultants.</p>
                </div>

                <div className="bg-red-950/30 border border-red-900/50 rounded-xl p-6">
                  <p className="text-lg font-bold text-white mb-2">Months 10-12: Crisis</p>
                  <p className="text-slate-300">Runway shrinking. Team morale low. Competitors 2 years ahead. Pivot required. £300K+ burned. Still no clear path to revenue.</p>
                </div>
              </div>

              <div className="pt-6 border-t border-red-800/50 text-center">
                <p className="text-2xl font-bold text-red-400">Total cost: £300,000+ ($390,000+ USD | €360,000+ EUR)</p>
                <p className="text-slate-400 mt-2">Time wasted: 12 months</p>
                <p className="text-slate-400">Revenue generated: £0</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-950/40 to-emerald-900/20 border-2 border-emerald-700/50 rounded-3xl p-10 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="text-emerald-400" size={32} />
                  <h3 className="text-3xl font-black text-emerald-400">WITH revARROS</h3>
                </div>
                <p className="text-xl font-bold text-white mb-8">The next 12 months look like this:</p>
              </div>

              <div className="space-y-6">
                <div className="bg-emerald-950/30 border border-emerald-800/50 rounded-xl p-6">
                  <p className="text-lg font-bold text-white mb-2">Day 1: Clarity</p>
                  <p className="text-slate-300">Complete TAM analysis in 20 minutes. Top 100 partners identified. Whitespace mapped. Revenue model validated. Competitive landscape understood. Investor deck ready.</p>
                </div>

                <div className="bg-emerald-950/30 border border-emerald-800/50 rounded-xl p-6">
                  <p className="text-lg font-bold text-white mb-2">Months 1-3: Execution</p>
                  <p className="text-slate-300">Partner outreach automated. 50 meetings booked. First 10 partnerships activated. Enablement running automatically. Pipeline building. Zero hiring required.</p>
                </div>

                <div className="bg-emerald-950/30 border border-emerald-800/50 rounded-xl p-6">
                  <p className="text-lg font-bold text-white mb-2">Months 4-6: Momentum</p>
                  <p className="text-slate-300">Partner-sourced revenue flowing. Predictive forecasting shows £2M pipeline. Market signals identify new opportunities before competitors. Board confidence high.</p>
                </div>

                <div className="bg-emerald-950/30 border border-emerald-800/50 rounded-xl p-6">
                  <p className="text-lg font-bold text-white mb-2">Months 7-12: Domination</p>
                  <p className="text-slate-300">150+ active partners. £5M+ ARR. Expansion into 3 new markets simultaneously. Competitive moat established. Ready to scale. Total clarity maintained.</p>
                </div>
              </div>

              <div className="pt-6 border-t border-emerald-800/50 text-center">
                <p className="text-2xl font-bold text-emerald-400">Total cost: £1,200-£15,000 ($1,600-$20,000 USD | €1,500-€18,000 EUR)</p>
                <p className="text-slate-400 mt-2">Time to value: 20 minutes</p>
                <p className="text-slate-400">Revenue generated: £5M+ ARR ($6.5M+ USD | €6M+ EUR)</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-black border-2 border-slate-700 rounded-3xl p-12 text-center">
            <p className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 leading-tight mb-8">
              "Holy sh*t...<br />
              this would change<br />
              our entire company."
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-white mb-6">
              That's the moment you realize:
            </p>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              The old way burns cash, wastes time, and kills momentum.<br />
              The revARROS way eliminates blindness, accelerates execution, and builds unstoppable revenue engines.<br />
              <span className="text-white font-bold">This is not incremental. This is transformation.</span>
            </p>
          </div>
        </div>
      </section>


      <section className="py-20 px-6 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Zero Friction. By Design.
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              revARROS requires nothing. It just works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-white mb-6">What IT Loves:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="text-white font-semibold mb-1">No integrations</div>
                    <div className="text-slate-400 text-sm">Runs independently. No CRM dependencies.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="text-white font-semibold mb-1">No onboarding</div>
                    <div className="text-slate-400 text-sm">Sign up. Start using it. That's it.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="text-white font-semibold mb-1">No maintenance</div>
                    <div className="text-slate-400 text-sm">No field mapping. No data pipelines. No versioning.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="text-white font-semibold mb-1">No dependencies</div>
                    <div className="text-slate-400 text-sm">Doesn't break when systems change.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="text-white font-semibold mb-1">No security vulnerabilities</div>
                    <div className="text-slate-400 text-sm">Enterprise-grade from day one.</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-950/50 to-cyan-950/20 border border-blue-900/50 rounded-2xl p-10 flex flex-col justify-center">
              <Clock className="text-cyan-400 mb-6" size={48} />
              <p className="text-3xl font-bold text-white leading-tight mb-6">
                You sign up.<br />
                You start using it.<br />
                <span className="text-cyan-400">It just works.</span>
              </p>
              <div className="mt-6 pt-6 border-t border-cyan-900/50">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Time to first value:</span>
                  <span className="text-3xl font-bold text-cyan-400">10 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-black border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 text-sm font-medium mb-8">
              <Shield size={16} />
              SECURITY FIRST
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Enterprise Security.<br />From Day One.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Lock, title: 'End-to-End Encryption', desc: 'TLS 1.3 in transit, AES-256 at rest' },
              { icon: Shield, title: 'Row-Level Security', desc: 'Granular access control per user' },
              { icon: FileText, title: 'Immutable Audit Logs', desc: 'Complete activity tracking' },
              { icon: CheckCircle, title: 'GDPR Compliant', desc: 'Right-to-access and deletion' },
              { icon: Lock, title: 'Zero Data Training', desc: 'Your data stays yours' },
              { icon: Award, title: 'SOC 2 Type II', desc: 'On the roadmap' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-blue-400" size={24} />
                </div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-10 text-center">
            <p className="text-2xl text-slate-300">
              Many products "add" security later.
            </p>
            <p className="text-3xl font-bold text-white mt-2">
              revARROS <span className="text-blue-400">started</span> with it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Why Nothing Else Compares
            </h2>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-10 mb-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Because no one else has:
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'The architecture',
                'The engines',
                'The 56+ features',
                'The execution layer',
                'The security DNA',
                'The price point',
                'The simplicity',
                'The vision',
                'The unified OS thinking',
                'The compounding intelligence',
                'The frictionless deployment',
                'The 20-minute time-to-value',
                'The zero-blindness promise'
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-slate-300 bg-slate-900/50 rounded-lg p-3"
                >
                  <CheckCircle className="text-cyan-400 flex-shrink-0" size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-950/50 to-cyan-950/20 border border-blue-900/50 rounded-2xl p-12 text-center">
            <p className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              revARROS is not a product you compete with.
            </p>
            <p className="text-2xl text-slate-300 mt-6">
              It is a <span className="text-cyan-400 font-bold">new gravitational centre</span> for how revenue is built.
            </p>
            <div className="mt-8 pt-8 border-t border-cyan-900/50">
              <p className="text-xl text-slate-400">
                Everyone else will adjust to it.<br />
                <span className="text-white font-semibold">No one else will match it.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-br from-slate-950 via-black to-slate-950">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight">
              The Revenue Operating<br />System Is Here.
            </h2>
            <p className="text-2xl sm:text-3xl text-slate-300 max-w-2xl mx-auto">
              20 minutes to complete revenue intelligence.<br />£75 to start.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                navigate('/pricing')
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
              }}
              className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-lg rounded-xl font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
            >
              Get Started Now
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
