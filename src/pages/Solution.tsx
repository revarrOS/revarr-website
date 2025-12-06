import { useNavigate } from 'react-router-dom'
import { Compass, Users, Rocket, TrendingUp, BarChart, Check, Brain, Target, Zap, Shield, Database, ArrowRight, Clock, CheckCircle2 } from 'lucide-react'

export default function Solution() {
  const navigate = useNavigate()

  const stages = [
    {
      number: 1,
      title: 'Discover & Define',
      subtitle: 'The Intelligence Engine',
      duration: 'Months 0-2',
      platformFeature: 'AI-Powered Competitive Intelligence',
      icon: Brain,
      color: 'blue',
      description: '10-point executive intelligence + financial modeling in 2-3 minutes',
      keyOutputs: [
        {
          name: '10 Executive Business Factors',
          items: [
            'Product portfolio analysis',
            'Target market segmentation & ICP',
            '3-tier competitive intelligence map',
            'Primary attack vector & differentiation',
            'Geographic density & white space analysis',
            'Internal value narrative'
          ]
        },
        {
          name: 'Financial Intelligence',
          items: [
            'Competitive Revenue Pool (CRP) calculation',
            '5-year Win Scenario ROI projection',
            'Market sizing with confidence scoring',
            'Board-ready executive PDF report'
          ]
        }
      ],
      businessImpact: 'Replaces $50K market research + 3-6 months of manual analysis',
      milestones: [
        'Executive intelligence report generated',
        'CRP and Win Scenario validated',
        'Geographic expansion targets identified'
      ]
    },
    {
      number: 2,
      title: 'Design & Align',
      subtitle: 'Strategic Program Design',
      duration: 'Months 1-3',
      platformFeature: 'Intelligence-Driven Program Architecture',
      icon: Compass,
      color: 'cyan',
      description: 'Build partner program structure based on competitive intelligence',
      keyOutputs: [
        {
          name: 'Program Design',
          items: [
            'Partner program structure based on competitive analysis',
            'Economics modeling using CRP data',
            'Tier structure & benefits design',
            'Legal agreements and templates',
            'Internal stakeholder alignment'
          ]
        },
        {
          name: 'Strategic Framework',
          items: [
            'Go-to-market strategy anchored in intelligence',
            'Partner recruiting playbooks',
            'Enablement curriculum design',
            'Success metrics & KPIs'
          ]
        }
      ],
      businessImpact: 'Program designed on data, not guesses, higher success probability',
      milestones: [
        'Channel program guide completed',
        'Partner agreement templates finalized',
        'Internal teams aligned and trained'
      ]
    },
    {
      number: 3,
      title: 'Recruit & Onboard',
      subtitle: 'Strategic Partner Acquisition',
      duration: 'Months 3-9',
      platformFeature: 'AI Partner Discovery Engine',
      icon: Users,
      color: 'emerald',
      description: '1,500+ partners discovered & prioritized in 8-12 minutes',
      keyOutputs: [
        {
          name: 'Partner Discovery',
          items: [
            'Competitor partner ecosystem analysis',
            '1,500+ partner profiles discovered',
            'Tier 1/2/3 strategic prioritization',
            'AI-generated recommendation notes',
            'Partner overlap intelligence'
          ]
        },
        {
          name: 'Recruitment Execution',
          items: [
            'Targeted outreach to Tier 1 partners',
            'Strategic messaging based on competitive intel',
            'Partner application & contracts',
            'Onboarding workflow automation',
            'Distributor agreements signed'
          ]
        }
      ],
      businessImpact: 'Recruit PROVEN partners who already sell competitive solutions',
      milestones: [
        'Tier 1 partners identified and contacted',
        'First strategic partners signed',
        'Onboarding processes automated'
      ]
    },
    {
      number: 4,
      title: 'Enable & Activate',
      subtitle: 'Partner Readiness & Launch',
      duration: 'Months 6-12',
      platformFeature: 'Partner Enablement Hub',
      icon: Rocket,
      color: 'amber',
      description: 'Training, certification, and pipeline activation',
      keyOutputs: [
        {
          name: 'Enablement Delivery',
          items: [
            'Sales team training & certification',
            'Technical enablement programs',
            'Marketing enablement & co-marketing',
            'Joint value proposition development',
            'Playbooks and battle cards'
          ]
        },
        {
          name: 'Activation Campaigns',
          items: [
            'Pipeline generation campaigns',
            'Co-marketing initiatives',
            'Demand generation programs',
            'Partner portal access & resources',
            '5% partner activation target'
          ]
        }
      ],
      businessImpact: 'Fast time-to-revenue with partners who know the market',
      milestones: [
        'Partners certified and enabled',
        'First co-marketing campaigns launched',
        'Initial pipeline opportunities registered'
      ]
    },
    {
      number: 5,
      title: 'Execute & Grow',
      subtitle: 'Revenue Generation & Co-Sell',
      duration: 'Months 10-18',
      platformFeature: 'Co-Sell Deal Management',
      icon: TrendingUp,
      color: 'violet',
      description: 'Joint opportunity management and revenue realization',
      keyOutputs: [
        {
          name: 'Deal Management',
          items: [
            'Shared deal rooms & collaboration',
            'Partner-submitted opportunity registration',
            'Co-sell execution & support',
            'Joint account planning',
            'Pipeline acceleration programs'
          ]
        },
        {
          name: 'Revenue Tracking',
          items: [
            'Deal attribution & revenue tracking',
            'Win/loss analysis',
            'Partner contribution measurement',
            'Revenue milestone tracking vs Win Scenario',
            'Performance scorecards'
          ]
        }
      ],
      businessImpact: 'Track progress against Win Scenario projections with real data',
      milestones: [
        'First channel deals closed',
        'Active pipeline with multiple partners',
        'Revenue attribution operational'
      ]
    },
    {
      number: 6,
      title: 'Measure & Optimize',
      subtitle: 'Performance Analytics & QBRs',
      duration: 'Ongoing (Months 12+)',
      platformFeature: 'Executive Dashboards & Reporting',
      icon: BarChart,
      color: 'rose',
      description: 'ROI measurement and continuous optimization',
      keyOutputs: [
        {
          name: 'Performance Analytics',
          items: [
            'Real-time revenue dashboards',
            'Partner performance analytics',
            'ROI vs Win Scenario comparison',
            'Pipeline health scoring',
            'Channel contribution reporting'
          ]
        },
        {
          name: 'Strategic Optimization',
          items: [
            'Automated QBR generation per partner',
            'Program optimization recommendations',
            'Partner health & churn prediction',
            'Scale & expansion planning',
            'Continuous intelligence updates'
          ]
        }
      ],
      businessImpact: 'Data-driven optimization replaces hope-based forecasting',
      milestones: [
        'QBR dashboards live',
        'ROI positive and validated',
        'Scale strategy defined and executing'
      ]
    }
  ]

  const platformAdvantages = [
    {
      icon: Zap,
      title: '2-3 Minutes',
      description: 'From company name to executive intelligence',
      traditional: '3-6 months manual research'
    },
    {
      icon: Database,
      title: '1,500+ Partners',
      description: 'Discovered and prioritized automatically',
      traditional: 'Months of manual partner research'
    },
    {
      icon: Shield,
      title: '$100K+ Saved',
      description: 'Replaces consultants, tools, and research firms',
      traditional: 'Multiple vendor engagements'
    },
    {
      icon: Target,
      title: 'Intelligence-Driven',
      description: 'Every decision backed by competitive data',
      traditional: 'Generic frameworks and guesswork'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="py-20 md:py-28 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-8">
              <Brain size={16} />
              <span>The 6-Stage Channel Growth Engine</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Build Predictable Channel Revenue<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">in 6-12 Months</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-6 leading-relaxed">
              A proven, platform-powered methodology that transforms channel programs from cost centers into revenue engines built on competitive intelligence, not guesswork.
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Traditional approaches take 3-5 years and cost $500K+. revARR delivers faster results with less risk through AI-powered intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {platformAdvantages.map((advantage, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <advantage.icon className="text-blue-400" size={24} />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{advantage.title}</div>
                <div className="text-sm text-slate-400 mb-3">{advantage.description}</div>
                <div className="text-xs text-slate-500 italic">vs. {advantage.traditional}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 6 Stages */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              The Complete Journey: Zero to Revenue
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Each stage powered by intelligence, automation, and proven channel methodologies
            </p>
          </div>

          <div className="space-y-12">
            {stages.map((stage, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-10 hover:border-slate-600 transition-all"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 bg-${stage.color}-500/20 rounded-2xl flex items-center justify-center mb-4`}>
                      <stage.icon className={`text-${stage.color}-400`} size={32} />
                    </div>
                    <div className="text-center lg:text-left">
                      <div className={`text-${stage.color}-400 font-bold text-sm mb-1`}>STAGE {stage.number}</div>
                      <div className="text-slate-500 text-sm">{stage.duration}</div>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-white mb-2">{stage.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                        <p className="text-xl text-slate-300">{stage.subtitle}</p>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 bg-${stage.color}-500/10 border border-${stage.color}-500/30 rounded-full text-${stage.color}-400 text-sm font-medium w-fit`}>
                          <Zap size={14} />
                          <span>{stage.platformFeature}</span>
                        </div>
                      </div>
                      <p className="text-slate-400 leading-relaxed">{stage.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {stage.keyOutputs.map((output, idx) => (
                        <div key={idx} className="bg-slate-900/50 rounded-xl p-6">
                          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                            <CheckCircle2 className={`text-${stage.color}-400`} size={20} />
                            {output.name}
                          </h4>
                          <ul className="space-y-2">
                            {output.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="text-slate-400 text-sm flex items-start gap-2">
                                <span className={`text-${stage.color}-400 mt-1 flex-shrink-0`}>•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-xl p-6 mb-4">
                      <div className="flex items-start gap-3 mb-4">
                        <Target className={`text-${stage.color}-400 flex-shrink-0 mt-1`} size={20} />
                        <div>
                          <h4 className="text-white font-bold mb-2">Business Impact</h4>
                          <p className="text-slate-300">{stage.businessImpact}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">Key Milestones</h4>
                      <div className="flex flex-wrap gap-2">
                        {stage.milestones.map((milestone, mIdx) => (
                          <div key={mIdx} className="inline-flex items-center gap-2 px-3 py-1 bg-slate-700/50 rounded-full text-slate-300 text-sm">
                            <Check size={14} className={`text-${stage.color}-400`} />
                            <span>{milestone}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              The 6-12 Month Timeline
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From competitive intelligence to predictable revenue
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-1 bg-slate-700 hidden md:block"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center relative">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 relative z-10 shadow-lg shadow-blue-500/25">
                  0-3
                </div>
                <h4 className="text-white font-bold mb-2 text-lg">Foundation</h4>
                <p className="text-slate-400 text-sm mb-3">Intelligence & Design</p>
                <div className="text-blue-400 text-xs font-medium">Platform generates competitive intel + CRP</div>
              </div>
              <div className="text-center relative">
                <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 relative z-10 shadow-lg shadow-cyan-500/25">
                  3-9
                </div>
                <h4 className="text-white font-bold mb-2 text-lg">Recruitment</h4>
                <p className="text-slate-400 text-sm mb-3">Discover & Onboard</p>
                <div className="text-cyan-400 text-xs font-medium">Platform discovers 1,500+ partners</div>
              </div>
              <div className="text-center relative">
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 relative z-10 shadow-lg shadow-emerald-500/25">
                  10-15
                </div>
                <h4 className="text-white font-bold mb-2 text-lg">Revenue</h4>
                <p className="text-slate-400 text-sm mb-3">Enable & Execute</p>
                <div className="text-emerald-400 text-xs font-medium">First deals close with proven partners</div>
              </div>
              <div className="text-center relative">
                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 relative z-10 shadow-lg shadow-amber-500/25">
                  16-24
                </div>
                <h4 className="text-white font-bold mb-2 text-lg">Scale</h4>
                <p className="text-slate-400 text-sm mb-3">Grow & Optimize</p>
                <div className="text-amber-400 text-xs font-medium">ROI dashboards + expansion</div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
              <Clock className="text-blue-400 mx-auto mb-3" size={24} />
              <div className="text-white font-bold mb-1">Month 3</div>
              <div className="text-slate-400 text-sm">First partners signed</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
              <Clock className="text-cyan-400 mx-auto mb-3" size={24} />
              <div className="text-white font-bold mb-1">Month 9</div>
              <div className="text-slate-400 text-sm">Partners enabled</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
              <Clock className="text-emerald-400 mx-auto mb-3" size={24} />
              <div className="text-white font-bold mb-1">Month 12</div>
              <div className="text-slate-400 text-sm">First deals closed</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
              <Clock className="text-amber-400 mx-auto mb-3" size={24} />
              <div className="text-white font-bold mb-1">Month 18</div>
              <div className="text-slate-400 text-sm">ROI positive</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Channel Journey?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            See your competitive intelligence and partner opportunities in minutes, not months
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/product')}
              className="group px-8 py-5 bg-blue-600 hover:bg-blue-500 text-white text-lg rounded-xl font-medium transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
            >
              See the Platform
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/pricing')}
              className="px-8 py-5 bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700 text-white text-lg hover:bg-slate-700 hover:border-slate-600 rounded-xl font-medium transition-all"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
