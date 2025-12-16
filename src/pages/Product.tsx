import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  Brain, Shield, Lock, CheckCircle, ArrowRight,
  TrendingUp, Users, Target, BarChart3, Network,
  Clock, Sparkles, Cpu, Database, Globe, Gauge,
  BookOpen, Boxes, GitBranch, Server, Code, Workflow
} from 'lucide-react'
import OSBlueprint from '../components/OSBlueprint'
import FAQ from '../components/FAQ'

export default function Product() {
  const navigate = useNavigate()
  const [currency, setCurrency] = useState<'USD' | 'GBP' | 'EUR'>('GBP')

  useEffect(() => {
    const detectCurrency = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        const euroCountries = ['AT', 'BE', 'CY', 'EE', 'FI', 'FR', 'DE', 'GR', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PT', 'SK', 'SI', 'ES']

        if (data.country_code === 'GB') {
          setCurrency('GBP')
        } else if (euroCountries.includes(data.country_code)) {
          setCurrency('EUR')
        } else {
          setCurrency('USD')
        }
      } catch (error) {
        console.log('Could not detect location, defaulting to GBP')
      }
    }
    detectCurrency()
  }, [])

  const formatPrice = () => {
    if (currency === 'USD') return '$109'
    if (currency === 'EUR') return '€89'
    return '£75'
  }

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-20 pb-16 px-6 overflow-hidden border-b border-blue-900/30 bg-gradient-to-br from-blue-950/30 to-black">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-bold mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            PRODUCT OVERVIEW
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8">
            The Revenue Operating System
          </h1>

          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 leading-tight">
              Seven interconnected engines.<br />
              One unified intelligence platform.<br />
              Complete revenue clarity in 20 minutes.
            </p>

            <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed">
              Not a tool. Not a dashboard. Not a CRM add-on.<br />
              A living system designed to think, learn, and execute.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => {
                document.getElementById('engine-ladder')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-lg rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25"
            >
              Start with Engine 1
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-black to-slate-950 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 text-sm font-medium mb-8">
              <Cpu size={16} />
              SYSTEM ARCHITECTURE
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Three Layers Working as One
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A distributed intelligence architecture that ingests, processes, and executes<br />
              <span className="text-white font-semibold">24/7 without human intervention.</span>
            </p>
          </div>

          <div>
            <OSBlueprint />
          </div>
        </div>
      </section>

      <section id="engine-ladder" className="py-24 px-6 bg-slate-950 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-bold mb-8">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              THE ENGINE LADDER
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Click any stage to see what the engine does,<br />what you get, and how to buy.
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Seven engines designed to work sequentially. Each builds on the last.<br />
              <span className="text-cyan-400 font-bold">Start with Engine 1. Scale through all seven.</span>
            </p>
          </div>

          <div className="space-y-6 mb-16">
            <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/20 border-2 border-cyan-500/40 rounded-3xl overflow-hidden">
              <div className="p-8 sm:p-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cyan-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                      <span className="text-3xl sm:text-4xl font-black text-cyan-400">1</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-cyan-400 mb-2 tracking-wider">ENGINE LEVEL 1</div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">Channel Blueprint</h3>
                      <p className="text-slate-300 text-lg">The foundation every company needs before building a channel.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/40 rounded-full">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                      <span className="text-emerald-400 font-bold text-sm">Start here</span>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl sm:text-4xl font-black text-white">{formatPrice()}</div>
                      <div className="text-sm text-slate-400">per month</div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-2xl p-6 sm:p-8 mb-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {[
                      'Market Position Snapshot',
                      'Competitor Strength Ranking',
                      'Revenue Intelligence',
                      'Channel White Space Finder',
                      'Best Industries Analysis',
                      'Best Regions Analysis',
                      'Risk Alerts & Mitigation'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="text-cyan-400 flex-shrink-0" size={16} />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-slate-800">
                    <p className="text-slate-300 mb-4">
                      <span className="text-white font-bold">In 20 minutes:</span> Complete TAM analysis, competitive landscape mapping, revenue projections, and your investor-ready execution blueprint.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/product/channel-blueprint')}
                  className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-lg rounded-xl font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
                >
                  See Full Engine Details
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {[
              {
                number: 2,
                name: 'Partner Intelligence Engine',
                tagline: 'Discover who controls your category and where the power sits.',
                outcome: 'Know your top 100 ideal partners, their influence scores, and exactly how to approach them.',
                icon: Users
              },
              {
                number: 3,
                name: 'Partner Acquisition Engine',
                tagline: 'Turn cold prospects into active partners on autopilot.',
                outcome: 'Automated outreach sequences, meeting scheduling, and partnership activation without hiring.',
                icon: Target
              },
              {
                number: 4,
                name: 'Partner Enablement Engine',
                tagline: 'Transform partners into revenue-producing machines.',
                outcome: 'Self-serve onboarding, role-based learning tracks, and certification—all automated.',
                icon: Sparkles
              },
              {
                number: 5,
                name: 'Partner Revenue Intelligence Engine',
                tagline: 'See deals flowing before your sales team knows they exist.',
                outcome: 'Predictive pipeline signals, automatic deal registration, and AI-powered deal coaching.',
                icon: TrendingUp
              },
              {
                number: 6,
                name: 'Channel Growth Engine',
                tagline: 'Your automatic RevOps brain for infinite scale.',
                outcome: 'Partner capacity modeling, performance scoring, churn prediction, and quarterly growth blueprints.',
                icon: BarChart3
              },
              {
                number: 7,
                name: 'Co-Sell & Deal Routing Engine',
                tagline: 'Remove all friction from partner-sourced revenue.',
                outcome: 'Zero-login partner workflows, smart routing, co-sell automation, and QBR generation.',
                icon: Network
              }
            ].map((engine) => {
              const Icon = engine.icon
              return (
                <div
                  key={engine.number}
                  className="bg-gradient-to-br from-slate-800/40 to-slate-900/20 border border-slate-700 rounded-3xl overflow-hidden hover:border-slate-600 transition-all"
                >
                  <div className="p-8 sm:p-10">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-700">
                          <span className="text-3xl sm:text-4xl font-black text-slate-400">{engine.number}</span>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-500 mb-2 tracking-wider">ENGINE LEVEL {engine.number}</div>
                          <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">{engine.name}</h3>
                          <p className="text-slate-400 text-lg mb-4">{engine.tagline}</p>
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-full">
                            <Clock className="text-slate-500" size={16} />
                            <span className="text-slate-400 font-semibold text-sm">Coming in 2026</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                      <div className="flex items-start gap-3">
                        <Icon className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                        <div>
                          <div className="text-sm font-bold text-slate-400 mb-2">What you'll get:</div>
                          <p className="text-slate-300">{engine.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="bg-gradient-to-br from-blue-950/30 to-cyan-950/20 border border-blue-900/50 rounded-2xl p-10 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-white mb-4">
              This isn't a roadmap of disconnected features.
            </p>
            <p className="text-xl text-slate-300 mb-8">
              It's a <span className="text-cyan-400 font-bold">sequential intelligence system</span> where each engine feeds insights to the next,<br />
              creating a compounding advantage that grows stronger over time.
            </p>
            <button
              onClick={() => navigate('/pricing')}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-lg rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25"
            >
              View Pricing
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-black to-slate-950 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 text-sm font-medium mb-8">
              <Workflow size={16} />
              AUTOMATION POWER
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              56 Features Running Continuously.<br />Zero Human Intervention Required.
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              This isn't software you "use." It's a system that runs autonomously,<br />
              <span className="text-white font-semibold">learning and optimizing 24/7.</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-950/50 to-blue-900/20 border border-blue-800/50 rounded-2xl p-8">
              <Gauge className="text-blue-400 mb-6" size={48} />
              <h3 className="text-2xl font-bold text-white mb-4">Always-On Intelligence</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                The system monitors 1,500+ partner ecosystems, tracks competitive movements, analyzes market shifts, and identifies opportunities while you sleep.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-blue-400 flex-shrink-0" size={18} />
                  <span>Real-time market scanning</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-blue-400 flex-shrink-0" size={18} />
                  <span>Continuous partner discovery</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-blue-400 flex-shrink-0" size={18} />
                  <span>Autonomous workflow execution</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 border border-cyan-800/50 rounded-2xl p-8">
              <Brain className="text-cyan-400 mb-6" size={48} />
              <h3 className="text-2xl font-bold text-white mb-4">Self-Optimizing Systems</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Machine learning models improve partner matching, refine outreach timing, and optimize routing decisions based on outcomes—automatically.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-cyan-400 flex-shrink-0" size={18} />
                  <span>Pattern recognition & adaptation</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-cyan-400 flex-shrink-0" size={18} />
                  <span>Predictive modeling refinement</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-cyan-400 flex-shrink-0" size={18} />
                  <span>Performance-based optimization</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-10 mb-12">
            <div className="grid sm:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-black text-cyan-400 mb-2">94%</div>
                <div className="text-slate-400">Operations automated</div>
              </div>
              <div>
                <div className="text-5xl font-black text-cyan-400 mb-2">24/7</div>
                <div className="text-slate-400">Continuous operation</div>
              </div>
              <div>
                <div className="text-5xl font-black text-cyan-400 mb-2">&lt;10s</div>
                <div className="text-slate-400">Average response time</div>
              </div>
              <div>
                <div className="text-5xl font-black text-cyan-400 mb-2">99.9%</div>
                <div className="text-slate-400">Uptime SLA</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/pricing')}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-lg rounded-xl font-semibold transition-all shadow-lg shadow-cyan-500/25"
            >
              See Pricing Plans
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 text-sm font-medium mb-8">
              <Database size={16} />
              ENTERPRISE ARCHITECTURE
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Built for Scale from Day One
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Multi-tenant architecture designed to handle enterprise complexity<br />
              <span className="text-white font-semibold">without compromising on performance or security.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Boxes className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Multi-Tenant by Design</h3>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Isolated workspaces for teams, business units, and subsidiaries. Each tenant operates independently with complete data separation and customizable permissions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-blue-400 flex-shrink-0" size={16} />
                  <span>Row-level security isolation</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-blue-400 flex-shrink-0" size={16} />
                  <span>Granular role-based access control</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-blue-400 flex-shrink-0" size={16} />
                  <span>Cross-tenant analytics (optional)</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Server className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Distributed Infrastructure</h3>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Edge-optimized architecture with global CDN distribution. Processing happens close to your data for sub-100ms response times worldwide.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-cyan-400 flex-shrink-0" size={16} />
                  <span>Auto-scaling compute resources</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-cyan-400 flex-shrink-0" size={16} />
                  <span>Geographic data residency options</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-cyan-400 flex-shrink-0" size={16} />
                  <span>Redundant failover systems</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                  <GitBranch className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">API-First Design</h3>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Every feature accessible via RESTful APIs. Build custom integrations, automate workflows, or embed intelligence into your existing tools.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-emerald-400 flex-shrink-0" size={16} />
                  <span>Comprehensive API documentation</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-emerald-400 flex-shrink-0" size={16} />
                  <span>Webhook support for real-time events</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-emerald-400 flex-shrink-0" size={16} />
                  <span>OAuth 2.0 authentication</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Code className="text-orange-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Zero-Integration Philosophy</h3>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Works independently. No CRM requirements. No middleware. No data syncing. Optional integrations available when you need them—not before.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-orange-400 flex-shrink-0" size={16} />
                  <span>10-minute time to first value</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-orange-400 flex-shrink-0" size={16} />
                  <span>No IT involvement required</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-orange-400 flex-shrink-0" size={16} />
                  <span>Future-proof architecture</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/pricing')}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-lg rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25"
            >
              Get Started Today
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-black border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 text-sm font-medium mb-8">
              <Shield size={16} />
              SECURITY & COMPLIANCE
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Enterprise Security.<br />From Day One.
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Security isn't a feature we added later. It's the foundation<br />
              <span className="text-white font-semibold">everything else was built on.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Lock, title: 'End-to-End Encryption', desc: 'TLS 1.3 in transit, AES-256 at rest', color: 'blue' },
              { icon: Shield, title: 'Row-Level Security', desc: 'Granular access control per user & tenant', color: 'cyan' },
              { icon: Database, title: 'Immutable Audit Logs', desc: 'Complete activity tracking & compliance trails', color: 'emerald' },
              { icon: CheckCircle, title: 'GDPR Compliant', desc: 'Right-to-access, deletion, and data portability', color: 'blue' },
              { icon: Globe, title: 'Data Residency Options', desc: 'EU, US, UK data center selection available', color: 'cyan' },
              { icon: Lock, title: 'Zero AI Training', desc: 'Your data never trains our models', color: 'emerald' },
              { icon: Shield, title: 'SSO & SAML', desc: 'Enterprise identity provider integration', color: 'blue' },
              { icon: BookOpen, title: 'SOC 2 Type II', desc: 'Security audit in progress (Q2 2025)', color: 'cyan' },
              { icon: Lock, title: 'Penetration Tested', desc: 'Annual third-party security assessments', color: 'emerald' }
            ].map((item, index) => {
              const colorClasses = {
                blue: 'text-blue-400',
                cyan: 'text-cyan-400',
                emerald: 'text-emerald-400'
              }
              return (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className={colorClasses[item.color as keyof typeof colorClasses]} size={24} />
                  </div>
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-10 text-center">
            <p className="text-2xl text-slate-300 mb-4">
              Most products "add" security later as an afterthought.
            </p>
            <p className="text-3xl font-bold text-white">
              revARR OS <span className="text-cyan-400">started</span> with security architecture.
            </p>
            <p className="text-lg text-slate-400 mt-4">
              Then we built the engines on top of it.
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
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Because no one else has built a complete operating system for revenue.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-10 mb-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'The unified OS architecture',
                'Seven interconnected engines',
                '56+ autonomous features',
                'The compound intelligence effect',
                'Multi-tenant from day one',
                '20-minute time-to-value',
                'Zero-integration philosophy',
                'Enterprise security foundation',
                'API-first design',
                'Self-optimizing automation',
                '24/7 continuous operation',
                'Sub-100ms global performance',
                'Complete data sovereignty'
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-slate-300 bg-slate-900/50 rounded-lg p-3 hover:bg-slate-900 transition-all"
                >
                  <CheckCircle className="text-cyan-400 flex-shrink-0" size={16} />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-950/50 to-cyan-950/20 border border-blue-900/50 rounded-2xl p-12 text-center">
            <p className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              This isn't a product category you can compare.
            </p>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8">
              It's a <span className="text-cyan-400 font-bold">new gravitational center</span> for how B2B companies build revenue.<br />
              Everyone else will have to adjust to it.
            </p>
            <button
              onClick={() => navigate('/pricing')}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-lg rounded-xl font-semibold transition-all shadow-lg shadow-cyan-500/25"
            >
              View All Plans
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <FAQ faqs={[
        {
          question: "How is revARR OS different from a CRM or partner portal?",
          answer: "CRMs and partner portals are record-keeping systems. revARR OS is an intelligence and automation system. It doesn't just store information—it discovers partners, analyzes markets, predicts revenue, automates outreach, and continuously optimizes your entire partner ecosystem. It's a complete operating system, not a database."
        },
        {
          question: "Do I need to integrate revARR OS with my existing systems?",
          answer: "No. revARR OS runs independently with zero integrations required. This means no IT involvement, no implementation projects, no data mapping, and no breaking when your systems change. You can optionally sync data via our API if you want, but it's not required to get full value."
        },
        {
          question: "How does the 7-engine system work?",
          answer: "Each engine builds on the previous one, creating a compounding intelligence effect. Engine 1 validates your market. Engine 2 discovers partners. Engine 3 acquires them. Engine 4 enables them. Engine 5 tracks revenue. Engine 6 optimizes growth. Engine 7 manages co-selling. All engines run continuously 24/7, sharing insights and improving over time."
        },
        {
          question: "Can I use revARR OS if I don't have any partners yet?",
          answer: "Yes! That's actually the ideal time to start. Begin with Engine 1 (Opportunity Intelligence) to validate your market opportunity and identify your ideal partner profile before you build anything. This ensures you're targeting the right partners from day one instead of guessing."
        },
        {
          question: "Is this suitable for enterprise companies?",
          answer: "Absolutely. revARR OS was built with enterprise architecture from day one. Multi-tenant workspaces, row-level security, SSO/SAML, data residency options, API access, and audit logging come standard. Enterprises use it to manage thousands of partners across multiple regions and business units."
        },
        {
          question: "What about data security and compliance?",
          answer: "Security is our foundation, not an add-on. We provide end-to-end encryption (TLS 1.3 + AES-256), row-level security, immutable audit logs, GDPR compliance, data residency options, and zero AI training on your data. SOC 2 Type II audit in progress for Q2 2025."
        },
        {
          question: "How does the multi-tenant architecture work?",
          answer: "Each tenant (team, business unit, or subsidiary) operates in a completely isolated workspace with its own data, users, and permissions. Data never crosses tenant boundaries unless explicitly configured. You can run multiple independent partner programs within one account with full separation."
        },
        {
          question: "What happens to my data if I cancel?",
          answer: "You can export all your data at any time via our API or UI. We never delete your outputs—they remain accessible for 90 days after cancellation. You own everything the system creates for you: reports, partner lists, strategies, forecasts, and insights. Complete data portability guaranteed."
        }
      ]} />

      <section className="py-24 px-6 bg-gradient-to-br from-slate-950 via-black to-slate-950">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight">
              The Revenue Operating<br />System Is Here.
            </h2>
            <p className="text-2xl sm:text-3xl text-slate-300 max-w-2xl mx-auto">
              Start with Engine 1. Build complete revenue intelligence in 20 minutes.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-xl p-1.5 shadow-lg">
              <button
                onClick={() => setCurrency('USD')}
                className={`px-6 py-3 rounded-lg text-sm md:text-base font-semibold transition-all ${
                  currency === 'USD'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency('GBP')}
                className={`px-6 py-3 rounded-lg text-sm md:text-base font-semibold transition-all ${
                  currency === 'GBP'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                GBP (£)
              </button>
              <button
                onClick={() => setCurrency('EUR')}
                className={`px-6 py-3 rounded-lg text-sm md:text-base font-semibold transition-all ${
                  currency === 'EUR'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                EUR (€)
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                navigate('/product/channel-blueprint')
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
              }}
              className="group px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-lg rounded-xl font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
            >
              Get Instant Access - {formatPrice()} one-time
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <p className="text-slate-500 text-sm">
            One-time purchase • Instant access after payment • 30-day money-back guarantee
          </p>
        </div>
      </section>
    </div>
  )
}
