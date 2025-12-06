import { useNavigate } from 'react-router-dom'
import { Check, HelpCircle, Sparkles, Users } from 'lucide-react'
import AIEngineLadder from '../components/AIEngineLadder'
import { useState, useEffect } from 'react'

export default function Pricing() {
  const navigate = useNavigate()
  const [currency, setCurrency] = useState<'USD' | 'GBP' | 'EUR'>('USD')
  const gbpToUsdRate = 1.35
  const gbpToEurRate = 1.25

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
        }
      } catch (error) {
        console.log('Could not detect location, defaulting to USD')
      }
    }
    detectCurrency()
  }, [])

  const formatPrice = (gbpPrice: number) => {
    if (currency === 'USD') {
      const usdPrice = Math.round(gbpPrice * gbpToUsdRate)
      return `$${usdPrice.toLocaleString()}`
    }
    if (currency === 'EUR') {
      const eurPrice = Math.round(gbpPrice * gbpToEurRate)
      return `€${eurPrice.toLocaleString()}`
    }
    return `£${gbpPrice.toLocaleString()}`
  }

  const handleCheckout = (priceId: string, planName: string, price: number) => {
    const formattedPrice = formatPrice(price)
    navigate(`/checkout?priceId=${priceId}&plan=${encodeURIComponent(planName)}&price=${encodeURIComponent(formattedPrice)}`)
  }

  const tiers = [
    {
      name: 'PACK 1',
      subtitle: 'Discover & Define',
      aiPrice: 75,
      stripePriceId: 'price_1SaeenE8Pfwh77qbInh6CopD',
      period: '/month',
      description: 'Market Intelligence Snapshot',
      engineLevel: 'AI Engine Level 1',
      engineDescription: 'AI analyzes your market and competitors.',
      includes: 'AI-powered market intelligence',
      aiFeatures: [
        '10 Executive Insights',
        'Global competitor map',
        'White space analysis',
        'Market sizing + confidence scoring',
        'Competitive Revenue Pool (CRP)',
        '5-Year Opportunity Capture Model',
        'Board-ready executive PDF report',
      ],
      humanAddOn: null,
      outcome: 'You know exactly where your channel opportunity is and how big it can become.',
      ctaAI: 'Buy Now',
      primary: false,
    },
    {
      name: 'PACK 2',
      subtitle: 'Design & Align',
      aiPrice: 149,
      stripePriceId: 'price_1SaefWE8Pfwh77qb0sppV90D',
      period: '/month',
      description: 'Channel Strategy & Program Architecture',
      engineLevel: 'AI Engine Level 2',
      engineDescription: 'Includes Pack 1 AI + ongoing intelligence for strategy design.',
      includes: 'Everything in Pack 1 PLUS:',
      intelligenceExpansion: [
        'Global map of partners, distributors, GSIs, and relevant partner types for your business',
      ],
      programDesign: [
        'AI-designed channel strategy',
        'Partner program architecture',
        'Tier structure & benefits',
        'Partner economics model',
        'Legal agreement templates',
        'Partner recruiting playbooks',
        'Enablement curriculum outline',
        'KPI & measurement framework',
        '12-month channel roadmap',
        'Go-to-Market alignment plan',
      ],
      humanAddOn: {
        price: 75,
        description: 'Email support for queries about your AI-generated results',
      },
      outcome: 'Your entire channel program is designed, documented, and ready to execute.',
      ctaAI: 'Buy Now',
      primary: false,
    },
    {
      name: 'PACK 3',
      subtitle: 'Partner Acquisition & Onboarding',
      aiPrice: 249,
      stripePriceId: 'price_1Saeh0E8Pfwh77qbpuk1z8nu',
      period: '/month',
      description: 'Find partners. Automate outreach.',
      badge: 'Most Popular',
      engineLevel: 'AI Engine Level 3',
      engineDescription: 'Includes Packs 1 & 2 AI. Now continuously discovering partners, scoring them, and auto-outreaching 24/7.',
      includes: 'Includes Packs 1 + 2 PLUS:',
      aiResponsibilities: [
        'Competitor partner ecosystem analysis',
        'AI discovery of 1,500+ partners',
        'AI tiering & prioritization',
        'AI recommendation notes',
        'Partner overlap intelligence',
        'AI-driven automated outreach using sales tools',
        'AI-managed messaging with interested partners',
        'AI scheduling support to set meetings and demos',
      ],
      humanAddOn: {
        price: 3950,
        description: 'AI does the discovery and outreach. Humans close and onboard your best prospects.',
        features: [
          'Conducting partner introduction meetings',
          'Business overview presentations',
          'Partner program presentations',
          'Discussing margins, requirements, and expectations',
          'Providing onboarding documents',
          'Sharing partner/distributor program guidelines',
          'Contract negotiation + contract supply',
          'Contract signature coordination',
          'Onboarding workflow setup',
          'Basic readiness checks',
        ],
      },
      outcome: "Real partners are signed, contracts in place, and ready for enablement.",
      ctaAI: 'Buy Now',
      primary: true,
    },
    {
      name: 'PACK 4',
      subtitle: 'Enable & Activate',
      aiPrice: 349,
      stripePriceId: 'price_1SaehyE8Pfwh77qbUzIr7mN7',
      period: '/month',
      description: 'Train partners. Launch them. Drive early pipeline.',
      engineLevel: 'AI Engine Level 4',
      engineDescription: 'Includes Packs 1–3 AI. Now generating enablement assets and activation campaigns on autopilot.',
      includes: 'Includes Packs 1–3 PLUS:',
      aiResponsibilities: [
        'AI-generated training content',
        'AI-generated joint value propositions',
        'AI-generated battlecards & playbooks',
        'AI-generated co-marketing materials',
        'AI-generated activation campaign blueprints',
        'AI-generated certification frameworks',
        'AI-generated onboarding paths per partner type',
      ],
      humanAddOn: {
        price: 3950,
        description: 'AI creates the content. Humans deliver training and drive certification.',
        features: [
          'Sales enablement training delivery',
          'Technical training sessions',
          'Marketing training workshops',
          'Operations/process alignment',
          'Partner team certification programs',
          'Partner portal setup & activation',
          'Pipeline generation campaigns',
          'Co-marketing campaign launch',
          'GTM alignment across partner teams',
        ],
      },
      outcome: 'Partners are trained, certified, and ready to sell.',
      ctaAI: 'Buy Now',
      primary: false,
    },
    {
      name: 'PACK 5',
      subtitle: 'Execute & Grow',
      aiPrice: 449,
      stripePriceId: 'price_1SaeiZE8Pfwh77qbLoed2A4A',
      period: '/month',
      description: 'Intelligence-powered execution engine.',
      engineLevel: 'AI Engine Level 5',
      engineDescription: 'Includes Packs 1–4 AI. Now monitoring deals, partner activity, and forecasting revenue in real time.',
      includes: 'Includes Packs 1–4 PLUS:',
      aiResponsibilities: [
        'Full PRM automation (portal, deal reg, MDF tracking)',
        'AI deal intelligence (detects hidden partner influence)',
        'Partner scoring with predictive win likelihood',
        'AI-generated co-sell playbooks',
        'Pipeline scoring & stage progression alerts',
        'Revenue projection automation',
        'Automated partner communications',
        'First opportunity campaign orchestration',
      ],
      humanAddOn: {
        price: 3950,
        description: 'AI manages the system. Humans drive co-sell execution and close deals faster.',
        features: [
          'Co-sell support & deal strategy',
          'Shared deal rooms',
          'Joint account planning',
          'Pipeline acceleration programs',
          'Weekly governance with partners',
        ],
      },
      outcome: 'Partners are producing revenue. Your pipeline is growing.',
      ctaAI: 'Buy Now',
      primary: false,
    },
    {
      name: 'PACK 6',
      subtitle: 'Measure & Optimize',
      aiPrice: 549,
      stripePriceId: 'price_1Saej6E8Pfwh77qbFFsWiTDR',
      period: '/month',
      description: 'Advanced analytics and optimization engine.',
      engineLevel: 'AI Engine Level 6',
      engineDescription: 'Includes Packs 1–5 AI. Now optimizing performance, predicting outcomes, and generating QBRs automatically.',
      includes: 'Includes Packs 1–5 PLUS:',
      aiResponsibilities: [
        'Real-time revenue dashboards',
        'Partner performance analytics',
        'ROI vs Win Scenario reporting',
        'Pipeline health scoring',
        'Partner health + churn prediction',
        'Automated QBR generation',
        'Predictive optimization recommendations',
        'Channel economics optimization modeling',
      ],
      humanAddOn: {
        price: 9450,
        period: '/month per role',
        description: 'AI runs the analytics. Executives drive strategy, board reporting, and expansion planning.',
        sections: [
          {
            title: 'Strategic Reviews',
            features: [
              'Monthly strategic reviews',
              'Quarterly Executive Business Reviews',
              'Board-prep deck automation',
            ]
          },
          {
            title: 'Growth & Expansion',
            features: [
              'AI + human forecasting for new verticals',
              'Market expansion simulations',
              'Scaling & expansion planning',
            ]
          },
          {
            title: 'Executive Support',
            features: [
              'Channel economics optimization',
              'Investor storytelling support',
              'Continuous improvement cycle',
            ]
          }
        ],
      },
      outcome: 'Your channel becomes predictable, scalable, and board-ready.',
      ctaAI: 'Buy Now',
      primary: false,
    },
  ]

  const addOns = [
    {
      name: 'PRM Automation Module',
      price: 299,
      stripePriceId: 'price_1SaejzE8Pfwh77qbfuQM5MgC',
      period: '/month',
      description: 'Portal, deal reg, co-sell routing',
      available: 'Available for Packs 2–6',
    },
  ]

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('success')) {
      alert('Payment successful! Your subscription is now active.')
    }
    if (params.get('canceled')) {
      alert('Payment was canceled.')
    }
  }, [])

  const faqs = [
    {
      question: 'Is there a free trial?',
      answer: 'No. Pack 1 is intentionally priced at $99/month to give any business (including pre-revenue startups) affordable access to market intelligence without needing a trial.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes. You can cancel your subscription at any time. Cancellations take effect at the end of your billing period.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for AI Platform subscriptions only if you\'re not satisfied with the AI output. Human execution add-ons are excluded from refunds.',
    },
    {
      question: 'Do I lose access to previous AI engines when I upgrade/downgrade?',
      answer: 'No. Upgrading unlocks additional AI engines. Downgrading pauses those higher-level engines but your saved outputs remain accessible.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'All major credit cards. ACH and wire transfer options are available for enterprise accounts.',
    },
    {
      question: 'Is human assistance available if we need it?',
      answer: 'Yes. Optional human guidance is available as an add-on across Packs 2–6. revARR remains an AI-first platform, with human support only where required.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              revARR 6-Stage Channel Operating System
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-4">
              AI-powered channel technology. Optional human support when you need it.
            </p>
            <p className="text-base text-slate-300 max-w-3xl mx-auto font-medium">
              AI does the heavy lifting. Humans are optional accelerators. You stay in control.
            </p>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto">
              Monthly subscriptions • 30-day cancellation notice • No long-term contracts
            </p>

            <div className="flex justify-center mt-6">
              <div className="inline-flex items-center bg-slate-800/70 border border-slate-700 rounded-lg p-1">
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                    currency === 'USD'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  USD ($)
                </button>
                <button
                  onClick={() => setCurrency('GBP')}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                    currency === 'GBP'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  GBP (£)
                </button>
                <button
                  onClick={() => setCurrency('EUR')}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                    currency === 'EUR'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  EUR (€)
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 border-2 border-blue-500/40 rounded-xl p-8 max-w-5xl mx-auto mb-12">
            <div className="flex items-start gap-4 mb-6">
              <Sparkles className="text-blue-400 flex-shrink-0 mt-1" size={32} />
              <div className="text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">How revARR's AI Engine Works</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  As you move up each pack, <span className="text-blue-300 font-semibold">you never lose what came before</span>. The AI keeps all previous engines running in the background, 24/7.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <h3 className="text-blue-300 font-bold mb-2">Pack 3 includes:</h3>
                    <p className="text-slate-400 text-sm">AI Engines 1–3 running continuously</p>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <h3 className="text-blue-300 font-bold mb-2">Pack 6 includes:</h3>
                    <p className="text-slate-400 text-sm">All 6 AI engines working together, 24/7</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed text-base font-medium">
                  Each pack unlocks another AI engine. All previous engines continue running automatically.
                </p>
                <p className="text-slate-400 leading-relaxed mt-2 text-sm">
                  AI pricing increases as more engines run continuously in the background, delivering compounding intelligence and automation at every stage.
                </p>
              </div>
            </div>

            <AIEngineLadder />
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-16">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-lg p-6 hover:border-slate-600 transition-all relative flex flex-col ${
                  tier.primary ? 'border-blue-500 lg:scale-105' : 'border-slate-700'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{tier.name}</h3>
                  <p className="text-lg text-blue-400 mb-2 font-semibold">{tier.subtitle}</p>
                  <p className="text-slate-300 text-sm mb-4">{tier.description}</p>
                  {tier.engineLevel && (
                    <div className="bg-blue-950/40 border border-blue-500/30 rounded-lg p-3 mb-2">
                      <p className="text-blue-300 text-xs font-bold mb-1">{tier.engineLevel}</p>
                      <p className="text-slate-300 text-xs leading-relaxed">{tier.engineDescription}</p>
                    </div>
                  )}
                </div>

                <div className="flex-1 space-y-4 mb-6">
                  <div className="bg-blue-900/20 border-2 border-blue-600/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="text-blue-400" size={18} />
                        <h4 className="text-base font-bold text-blue-300">AI Platform</h4>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{formatPrice(tier.aiPrice)}</div>
                        <div className="text-xs text-slate-400">{tier.period}</div>
                      </div>
                    </div>

                    <ul className="space-y-1.5 mb-3">
                      {tier.aiFeatures && tier.aiFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="text-blue-400 flex-shrink-0 mt-0.5" size={12} />
                          <span className="text-slate-200 text-xs leading-relaxed">{feature}</span>
                        </li>
                      ))}
                      {tier.intelligenceExpansion && tier.intelligenceExpansion.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="text-blue-400 flex-shrink-0 mt-0.5" size={12} />
                          <span className="text-slate-200 text-xs leading-relaxed">{feature}</span>
                        </li>
                      ))}
                      {tier.programDesign && tier.programDesign.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="text-blue-400 flex-shrink-0 mt-0.5" size={12} />
                          <span className="text-slate-200 text-xs leading-relaxed">{feature}</span>
                        </li>
                      ))}
                      {tier.aiResponsibilities && tier.aiResponsibilities.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="text-blue-400 flex-shrink-0 mt-0.5" size={12} />
                          <span className="text-slate-200 text-xs leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => handleCheckout(tier.stripePriceId, tier.name, tier.aiPrice)}
                      className="w-full px-4 py-2.5 rounded-lg font-semibold transition-all text-sm bg-blue-600 hover:bg-blue-500 text-white"
                    >
                      {tier.ctaAI}
                    </button>
                  </div>

                  {tier.humanAddOn && (
                    <div className="bg-green-900/20 border-2 border-green-600/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Users className="text-green-400" size={18} />
                          <h4 className="text-base font-bold text-green-300">Optional Human Execution Layer</h4>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{formatPrice(tier.humanAddOn.price)}</div>
                          <div className="text-xs text-slate-400">{tier.humanAddOn.period || tier.period}</div>
                        </div>
                      </div>

                      <p className="text-xs text-slate-400 mb-3 italic">{tier.humanAddOn.description}</p>

                      {tier.humanAddOn.features && (
                        <ul className="space-y-1.5 mb-3">
                          {tier.humanAddOn.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="text-green-400 flex-shrink-0 mt-0.5" size={12} />
                              <span className="text-slate-200 text-xs leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {tier.humanAddOn.sections && (
                        <div className="space-y-3 mb-3">
                          {tier.humanAddOn.sections.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                              <h5 className="text-green-300 font-bold text-xs mb-1.5">{section.title}</h5>
                              <ul className="space-y-1.5">
                                {section.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <Check className="text-green-400 flex-shrink-0 mt-0.5" size={12} />
                                    <span className="text-slate-200 text-xs leading-relaxed">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      <button
                        onClick={() => navigate('/login')}
                        className="w-full px-4 py-2.5 rounded-lg font-semibold transition-all text-sm border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
                      >
                        Contact Sales
                      </button>
                    </div>
                  )}

                  {tier.outcome && (
                    <div className="bg-slate-900/70 rounded-lg p-3 border border-slate-600">
                      <h4 className="text-xs font-bold text-white mb-2">Outcome:</h4>
                      <p className={`text-xs leading-relaxed ${tier.name === 'PACK 5' ? 'text-white font-bold' : 'text-slate-300'}`}>
                        {tier.outcome}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-3">Add-On</h2>
              <p className="text-slate-400">
                Available for Packs 2–6 - enhance your channel program with automation
              </p>
            </div>
            <div className="flex justify-center">
              <div className="max-w-md w-full">
              {addOns.map((addOn, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all flex flex-col"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{addOn.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-2xl font-bold text-blue-400">{formatPrice(addOn.price)}</span>
                    <span className="text-slate-400 text-sm">{addOn.period}</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-2 flex-1">{addOn.description}</p>
                  <p className="text-xs text-slate-500 mb-4">{addOn.available}</p>
                  <button
                    onClick={() => handleCheckout(addOn.stripePriceId, addOn.name, addOn.price)}
                    className="w-full px-4 py-2 rounded-lg font-medium transition-all text-sm border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                  >
                    Buy Now
                  </button>
                </div>
              ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Payment Information</h2>
            <div className="max-w-2xl mx-auto">
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                  <span>Monthly or annual billing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                  <span>Major credit cards accepted</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                  <span>ACH & wire transfers available for enterprise accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                  <span>Cancellations take effect at the end of the billing cycle</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                  <span>Results-based pricing available for Pack 6</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                  <span>No free trials. Pack 1 provides low-cost entry for all companies</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
              <HelpCircle className="text-blue-400" size={24} />
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-slate-700 pb-6 last:border-0">
                  <h3 className="text-white font-bold mb-2">{faq.question}</h3>
                  <p className="text-slate-400 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
