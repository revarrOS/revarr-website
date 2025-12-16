import { useNavigate } from 'react-router-dom'
import { Check, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Pricing() {
  const navigate = useNavigate()
  const [currency, setCurrency] = useState<'USD' | 'GBP' | 'EUR'>('USD')
  const [expandedFaqs, setExpandedFaqs] = useState<{ [key: number]: boolean }>({})
  const [expandedEngine, setExpandedEngine] = useState<number | null>(null)
  const [isHeaderSticky, setIsHeaderSticky] = useState(false)

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

  const formatPrice = (gbpPrice: number, usdPrice?: number, eurPrice?: number) => {
    if (currency === 'USD' && usdPrice) {
      return `$${usdPrice.toLocaleString()}`
    }
    if (currency === 'EUR' && eurPrice) {
      return `€${eurPrice.toLocaleString()}`
    }
    return `£${gbpPrice.toLocaleString()}`
  }

  const handleCheckout = (priceId: string, planName: string, price: number, priceUSD?: number, priceEUR?: number) => {
    const formattedPrice = formatPrice(price, priceUSD, priceEUR)
    navigate(`/checkout?priceId=${priceId}&plan=${encodeURIComponent(planName)}&price=${encodeURIComponent(formattedPrice)}`)
  }

  const toggleFaq = (index: number) => {
    setExpandedFaqs(prev => ({ ...prev, [index]: !prev[index] }))
  }

  const toggleEngine = (level: number) => {
    setExpandedEngine(expandedEngine === level ? null : level)
  }

  const engines = [
    {
      level: 1,
      label: 'Channel Blueprint',
      color: 'from-blue-900/40 to-blue-800/40',
      border: 'border-blue-700/40',
      aiOnly: true,
      startHere: true,
      comingSoon: false,
      isOneTime: true,
      outcomes: [
        { title: 'Market Position Snapshot', desc: 'Instantly see where your product fits and which segments are growing.' },
        { title: 'Competitor Strength Ranking', desc: 'Ranks your rivals and identifies Exploitable Weaknesses (Gaps) in their programs.' },
        { title: 'Revenue Intelligence', desc: 'Generates a Grounded ARR Forecast (3-Year) and the Target LTV:CAC Ratio you need to win.' },
        { title: 'Channel White Space Finder', desc: 'Uncovers THE Single Definitive Channel Strategy Mandate for immediate execution.' },
        { title: 'Best Industries to Target', desc: 'A clear ranking of industries with the fastest path to revenue.' },
        { title: 'Best Regions to Target', desc: 'NA, EMEA, APAC, LATAM ranked by opportunity and ease of entry.' },
        { title: 'Market Risk Alerts', desc: 'Warnings for slow, saturated, or declining markets you should avoid.' },
        { title: 'Your 90-Day Action Plan', desc: 'A simple, personal roadmap showing what to do first, second, and third.' },
      ],
      stripePriceId: 'price_1SdaOGE8Pfwh77qbTNnLddxm',
      price: 75,
      priceUSD: 109,
      priceEUR: 89,
    },
    {
      level: 2,
      label: 'Partner Map',
      color: 'from-blue-900/40 to-blue-800/40',
      border: 'border-blue-700/40',
      aiOnly: false,
      comingSoon: true,
      outcomes: [
        { title: 'Competitor Program Breakdown', desc: 'See exactly how your top 3 rivals structure their partner programs.' },
        { title: '1,500+ Partner Discovery Scan', desc: 'Finds and analyses partner profiles across your competitors\' ecosystems.' },
        { title: 'Program Benchmarking', desc: 'Understand the incentives, margins, and support your market expects.' },
        { title: 'Tier 1 / 2 / 3 Partner Targeting', desc: 'Partners ranked by overlap with competitors so you know who to recruit first.' },
        { title: 'Overlap Score (0–100)', desc: 'A clear priority list showing which partners give you the fastest revenue lift.' },
        { title: 'Competitive Messaging Angles', desc: 'Know exactly what to say to each partner based on who they work with.' },
        { title: 'Partner Program Blueprint', desc: 'Build your own program structure using real competitor economics.' },
        { title: 'Recruitment Playbook + Export List', desc: 'A ready-to-use partner list with generated notes explaining why each one matters.' },
      ],
      stripePriceId: 'price_1SaefWE8Pfwh77qb0sppV90D',
      price: 149,
      priceUSD: 199,
      priceEUR: 189,
    },
    {
      level: 3,
      label: 'Partner Acquisition Engine',
      color: 'from-blue-900/40 to-blue-800/40',
      border: 'border-blue-700/40',
      aiOnly: false,
      comingSoon: true,
      outcomes: [
        { title: 'Partner List Import', desc: 'Upload your Tier 1/2/3 partner targets and the system builds your acquisition project instantly.' },
        { title: 'Sales Navigator Sync', desc: 'Connect your Sales Navigator license to scan each partner\'s organisation in real time.' },
        { title: 'Contact Finder', desc: 'Automatically pulls 8-12 decision makers per partner (VP Sales, CRO, CEO, Head of Channel, etc.).' },
        { title: 'Partner Project Builder', desc: 'Creates a full partner profile with notes, ICP fit, strategic insights, and outreach guidance.' },
        { title: 'Automated Outreach Sequences', desc: 'Sends connection requests, follow-ups, and emails using pre-built messaging flows.' },
        { title: 'Reply Assistant', desc: 'Reads incoming messages, scores interest, drafts responses, and recommends the next step.' },
        { title: 'Meeting Scheduling Automation', desc: 'Checks calendars, proposes times, books meetings, and sends reminders to both sides.' },
        { title: 'Partner Meeting Toolkit', desc: 'Includes a partner deck, partner program overview, and ready-to-use agreement templates.' },
      ],
      stripePriceId: 'price_1Saeh0E8Pfwh77qbpuk1z8nu',
      price: 275,
      priceUSD: 369,
      priceEUR: 345,
    },
    {
      level: 4,
      label: 'Partner Enablement Hub',
      color: 'from-blue-900/40 to-blue-800/40',
      border: 'border-blue-700/40',
      aiOnly: false,
      comingSoon: true,
      outcomes: [
        { title: 'Automated Partner Onboarding', desc: 'Kickstarts every new partner with training paths, welcome flows, and role-based instructions.' },
        { title: 'Role-Based Training Tracks', desc: 'Sales, technical, and marketing enablement delivered automatically to the right people.' },
        { title: 'Partner Activation Playbooks', desc: 'Builds and assigns the exact actions each partner must complete to become revenue-ready.' },
        { title: 'Enablement Progress Tracking', desc: 'Real-time visibility into who is trained, who is stuck, and which partners need attention.' },
        { title: 'Smart Alerts & Nudges', desc: 'Flags missing sessions, low engagement, no-shows, and overdue training and automatically fixes it.' },
        { title: 'Asset Hub & Auto-Personalisation', desc: 'Stores all sales/marketing content and automatically tailors it for each partner.' },
        { title: 'Certification & Readiness Scoring', desc: 'Tracks completion, scores partner readiness, and ranks which teams can sell today.' },
        { title: 'Partner Capacity Dashboard', desc: 'See how many partner sellers, marketers, and engineers are "revARR-ready" at any moment.' },
      ],
      stripePriceId: 'price_1SaehyE8Pfwh77qbUzIr7mN7',
      price: 349,
      priceUSD: 469,
      priceEUR: 439,
    },
    {
      level: 5,
      label: 'Co-Sell Engine',
      color: 'from-blue-900/40 to-blue-800/40',
      border: 'border-blue-700/40',
      aiOnly: false,
      comingSoon: true,
      outcomes: [
        { title: 'Pipeline Signal Detection', desc: 'Scans activity across outreach, email, responses and meeting notes to detect when a real partner deal is forming.' },
        { title: 'AI Deal Scoring', desc: 'Predicts deal likelihood, partner performance, competitive risk and expected revenue impact with win probability scoring.' },
        { title: 'Revenue Forecasting', desc: 'Generates accurate partner-sourced and partner-influenced revenue projections based on deal velocity and trends.' },
        { title: 'Deal Movement Alerts', desc: 'Instant notifications when deals stall, accelerate, change stage or need a push.' },
        { title: 'Coaching for Every Deal', desc: 'Automatic recommendations, follow-up messages, talk tracks, objection handling and next-step guidance.' },
        { title: 'Partner Influence Mapping', desc: 'Shows which partners are influencing which deals, even if they never registered anything.' },
        { title: 'Co-Sell Playbooks', desc: 'Automatically generates deal-specific playbooks with best practices, competitive angles, and winning strategies.' },
        { title: 'Pipeline Progression Analytics', desc: 'Tracks deal velocity, stage conversion rates, and partner contribution to pipeline health.' },
      ],
      stripePriceId: 'price_1Saeh0E8Pfwh77qbLoed2A4A',
      price: 599,
      priceUSD: 799,
      priceEUR: 749,
    },
    {
      level: 6,
      label: 'Deal Routing Engine',
      color: 'from-blue-900/40 to-blue-800/40',
      border: 'border-blue-700/40',
      aiOnly: false,
      comingSoon: true,
      outcomes: [
        { title: 'Automatic Deal Registration', desc: 'Detects partner opportunities and creates deal registrations automatically with no forms or portals.' },
        { title: 'Smart Deal Approval Routing', desc: 'Approves clean deals automatically and flags duplicates, conflicts, or compliance issues for review.' },
        { title: 'Co-Sell Workflow Automation', desc: 'Generates tasks, nudges both sides, assigns owners, and keeps every co-sell motion moving forward.' },
        { title: 'Zero-Login Partner Experience', desc: 'Partners never need to submit anything as revARR updates pipeline, notes, and statuses automatically.' },
        { title: 'Meeting Assistant', desc: 'Joins partner calls, extracts deal details, updates CRM, and generates next-step actions automatically.' },
        { title: 'Deal Momentum Tracking', desc: 'Monitors deal velocity and engagement signals to identify momentum shifts and engagement patterns.' },
        { title: 'Risk & Stall Alerts', desc: 'Flags stalled deals, slow partners, missing follow-ups, and competitive threats instantly for intervention.' },
        { title: 'Partner Notification Engine', desc: 'Automatically keeps partners updated on deal status, approvals, and next steps without manual work.' },
      ],
      stripePriceId: 'price_1Saej6E8Pfwh77qbFFsWiTDR',
      price: 849,
      priceUSD: 1149,
      priceEUR: 1049,
    },
    {
      level: 7,
      label: 'Channel Analytics',
      color: 'from-blue-900/40 to-blue-800/40',
      border: 'border-blue-700/40',
      aiOnly: false,
      comingSoon: true,
      outcomes: [
        { title: 'Real-Time Revenue Dashboards', desc: 'Live visibility into partner pipeline, bookings, influenced revenue, and growth trends all updated automatically.' },
        { title: 'Partner Performance Scoring', desc: 'Ranks every partner across readiness, activity, influence, deal velocity and win contribution with executive-ready reports.' },
        { title: 'Churn & Risk Prediction', desc: 'Detects silent partners, declining engagement, slowed deal flow and early churn signals before revenue is lost.' },
        { title: 'ROI & Efficiency Modeling', desc: 'Shows which partners deliver the highest return relative to effort, enablement, support and investment.' },
        { title: 'Expansion Opportunity Finder', desc: 'Flags partners ready for cross-sell, upsell, new-region expansion or vertical expansion with data-backed recommendations.' },
        { title: 'Growth Scenario Simulator', desc: 'Simulate "what if" scenarios like new hires, new regions, partner mix changes and see projected revenue outcomes.' },
        { title: 'Quarterly Growth Blueprint', desc: 'Generates your quarterly channel optimization plan: priorities, risks, focus partners, actions and targets.' },
        { title: 'Automated QBR Generator', desc: 'Produces complete executive quarterly reviews: wins, forecast, risks, recommendations, and strategic partner impact analysis.' },
      ],
      stripePriceId: 'price_1SaejzE8Pfwh77qbfuQM5MgC',
      price: 1299,
      priceUSD: 1749,
      priceEUR: 1649,
    },
  ]


  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('success')) {
      alert('Payment successful! You now have access to revARR OS.')
    }
    if (params.get('canceled')) {
      alert('Payment was canceled.')
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const tableSection = document.getElementById('pricing-table-section')
      if (tableSection) {
        const rect = tableSection.getBoundingClientRect()
        setIsHeaderSticky(rect.top <= 0 && rect.bottom > 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isHeaderSticky) return

    const tableContainer = document.getElementById('pricing-table-container')
    const headerContainer = document.getElementById('pricing-header-container')

    if (!tableContainer || !headerContainer) return

    const syncScroll = () => {
      headerContainer.scrollLeft = tableContainer.scrollLeft
    }

    tableContainer.addEventListener('scroll', syncScroll)
    return () => tableContainer.removeEventListener('scroll', syncScroll)
  }, [isHeaderSticky])

  const faqs = [
    {
      question: 'Is the Channel Blueprint a one-time payment?',
      answer: 'Yes. Engine Level 1 (Channel Blueprint) is a one-time purchase. You pay once and get instant access to your complete market intelligence.',
    },
    {
      question: 'What happens after I purchase?',
      answer: 'After payment, you\'ll be redirected to the revARR OS where you can access your complete intelligence dashboard with all 8 insights generated for your company.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee if you\'re not satisfied with the output.',
    },
    {
      question: 'What about the other engine levels?',
      answer: 'Engine Levels 2-7 are coming in 2026. Start with Level 1 today to get your market intelligence foundation in place.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'All major credit cards via Stripe. ACH and wire transfer options are available for enterprise accounts.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <section className="pt-20 pb-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-center text-white">
            revARR 7-Stage Channel Operating System
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 text-center mb-3">
            Build a world-class, revenue-generating partner ecosystem in weeks, not months with the revARR Operating System.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 border-2 border-blue-500/40 rounded-2xl p-8 md:p-10 max-w-5xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">How revARR Engine Works</h2>
            <p className="mt-3 max-w-[720px] mx-auto text-center text-base text-slate-200/90 leading-relaxed">
              Each stage adds a new layer to your engine. As you level up, every previous engine keeps running 24/7 in the background, refreshing your insights.
            </p>
            <p className="mt-6 max-w-[720px] mx-auto text-center text-base text-slate-200/90 font-bold">
              Click any stage to see what the engine does, what you get, and how to buy.
            </p>

            <div className="relative max-w-3xl mx-auto mt-8">
              <div className="space-y-3">
                {engines.map((engine) => (
                  <div key={engine.level} className="relative">

                    <div className="md:ml-16">
                      <button
                        onClick={() => !engine.comingSoon && toggleEngine(engine.level)}
                        className={`w-full bg-gradient-to-r ${engine.color} border ${engine.border} rounded-lg p-4 transition-all ${!engine.comingSoon ? 'hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer' : 'cursor-default opacity-80'}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${engine.color} border-2 ${engine.border} flex items-center justify-center`}>
                              <span className="text-blue-100 font-bold text-lg">{engine.level}</span>
                            </div>
                          </div>

                          <div className="flex-1 text-left">
                            {engine.level === 1 ? (
                              <div>
                                <div className="mb-1.5 flex items-center gap-2">
                                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-300/80">
                                    ENGINE LEVEL 1
                                  </span>
                                  <span className="inline-flex items-center rounded-full bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg shadow-emerald-500/30 ml-[4.1rem]">
                                    ● Start here
                                  </span>
                                </div>
                                <h3 className="text-lg font-extrabold text-white mb-1">
                                  {engine.label}
                                </h3>
                                <p className="text-sm text-slate-300/90 font-medium">
                                  The foundation every company needs before building a channel.
                                </p>
                              </div>
                            ) : (
                              <div>
                                <div className="mb-1.5">
                                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-300/80">
                                    ENGINE LEVEL {engine.level}
                                  </span>
                                </div>
                                <h3 className="text-lg font-extrabold text-white mb-1">
                                  {engine.label}
                                </h3>
                              </div>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="hidden sm:block flex-shrink-0">
                              <div className="text-blue-100 text-base font-bold bg-blue-950/60 px-4 py-2 rounded-full border border-blue-600/50">
                                {engine.comingSoon ? 'Coming in 2026' : `${formatPrice(engine.price, engine.priceUSD, engine.priceEUR)}${engine.isOneTime ? '' : '/mo'}`}
                              </div>
                            </div>
                            {!engine.comingSoon && (
                              <div className="text-blue-300">
                                {expandedEngine === engine.level ? (
                                  <ChevronUp size={20} />
                                ) : (
                                  <ChevronDown size={20} />
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedEngine === engine.level
                            ? 'max-h-[800px] opacity-100 mt-2'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="bg-slate-800/60 backdrop-blur-sm border border-blue-700/30 rounded-lg p-5 shadow-lg">
                          {engine.outcomes && (
                            <>
                              <div className="text-sm text-slate-200 leading-relaxed mb-5 space-y-4">
                                {engine.outcomes.map((outcome, idx) => (
                                  <div key={idx} className="flex items-start gap-3">
                                    <span className="text-emerald-400 flex-shrink-0 mt-1">✓</span>
                                    <div>
                                      <div className="text-base font-bold text-white mb-1">{outcome.title}</div>
                                      <div className="text-sm text-slate-300 pl-0">{outcome.desc}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}

                          <div className="mt-7">
                            <button
                              onClick={() => handleCheckout(engine.stripePriceId, `PACK ${engine.level}`, engine.price, engine.priceUSD, engine.priceEUR)}
                              className="w-full px-6 py-3.5 rounded-xl font-semibold transition-all text-base bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-xl mb-4"
                            >
                              Get Instant Access - {formatPrice(engine.price, engine.priceUSD, engine.priceEUR)}{engine.isOneTime ? ' one-time' : '/mo'}
                            </button>
                            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] text-emerald-300">
                              <span className="flex items-center gap-1.5 whitespace-nowrap">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 flex-shrink-0" />
                                One-time purchase
                              </span>
                              <span className="flex items-center gap-1.5 whitespace-nowrap">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 flex-shrink-0" />
                                Instant access after payment
                              </span>
                              <span className="flex items-center gap-1.5 whitespace-nowrap">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 flex-shrink-0" />
                                30-day money-back guarantee
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-blue-950/30 border border-blue-600/30 rounded-lg p-4 text-center">
                <p className="text-blue-200 text-sm font-medium">
                  All previous engines remain active at every level
                </p>
                <p className="text-blue-300/70 text-xs mt-1">
                  Each pack compounds value and you never lose what came before
                </p>
              </div>
            </div>
          </div>

          <section id="pricing-table-section" className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 pt-10 pb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Compare all revARR Engines
            </h2>

            {isHeaderSticky && <div className="h-[95px]"></div>}
            {isHeaderSticky && (
              <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-2xl py-2">
                <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
                  <div id="pricing-header-container" className="overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-[minmax(100px,110px)_repeat(7,minmax(130px,1fr))] gap-2">
                      <div className="bg-gradient-to-br from-blue-900/60 to-blue-800/60 border border-blue-700/40 rounded-lg p-1.5 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white uppercase tracking-wide text-center">Feature</span>
                      </div>
                      {engines.map((engine) => (
                        <div key={engine.level} className="bg-gradient-to-br from-blue-900/60 to-blue-800/60 border border-blue-700/40 rounded-lg p-1.5">
                          <div className="text-center">
                            <h3 className="text-[10px] font-bold text-white mb-1 leading-tight min-h-[26px] flex items-center justify-center px-1">
                              {engine.label}
                            </h3>
                            {engine.comingSoon ? (
                              <div className="text-[10px] font-bold text-slate-400 py-3">
                                Coming in 2026
                              </div>
                            ) : (
                              <>
                                <div className="text-sm font-bold text-blue-100 mb-1.5">
                                  {formatPrice(engine.price, engine.priceUSD, engine.priceEUR)}
                                  <span className="text-[8px] text-slate-400 block mt-0.5">{engine.isOneTime ? 'one-time' : '/month'}</span>
                                </div>
                                <button
                                  onClick={() => handleCheckout(engine.stripePriceId, `Level ${engine.level}`, engine.price, engine.priceUSD, engine.priceEUR)}
                                  className="w-full px-2 py-1 rounded-md font-semibold transition-all text-[9px] bg-blue-600 hover:bg-blue-500 text-white shadow-md"
                                >
                                  Buy Now
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div id="pricing-table-container" className="overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
              <div className="inline-block min-w-full align-middle">
                {!isHeaderSticky && (
                  <div className="mb-2">
                    <div className="grid grid-cols-[minmax(100px,110px)_repeat(7,minmax(130px,1fr))] gap-2">
                      <div className="bg-gradient-to-br from-blue-900/60 to-blue-800/60 border border-blue-700/40 rounded-lg p-1.5 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white uppercase tracking-wide text-center">Feature</span>
                      </div>
                      {engines.map((engine) => (
                        <div key={engine.level} className="bg-gradient-to-br from-blue-900/60 to-blue-800/60 border border-blue-700/40 rounded-lg p-1.5">
                          <div className="text-center">
                            <h3 className="text-[10px] font-bold text-white mb-1 leading-tight min-h-[26px] flex items-center justify-center px-1">
                              {engine.label}
                            </h3>
                            {engine.comingSoon ? (
                              <div className="text-[10px] font-bold text-slate-400 py-3">
                                Coming in 2026
                              </div>
                            ) : (
                              <>
                                <div className="text-sm font-bold text-blue-100 mb-1.5">
                                  {formatPrice(engine.price, engine.priceUSD, engine.priceEUR)}
                                  <span className="text-[8px] text-slate-400 block mt-0.5">/month</span>
                                </div>
                                <button
                                  onClick={() => handleCheckout(engine.stripePriceId, `Level ${engine.level}`, engine.price, engine.priceUSD, engine.priceEUR)}
                                  className="w-full px-2 py-1 rounded-md font-semibold transition-all text-[9px] bg-blue-600 hover:bg-blue-500 text-white shadow-md"
                                >
                                  Buy Now
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-1">
                  {(() => {
                    const allFeatures = engines
                      .filter(engine => !engine.comingSoon)
                      .flatMap((engine, engineIndex) =>
                        engine.outcomes.map((outcome, outcomeIndex) => ({
                          title: outcome.title,
                          levelIndex: engineIndex,
                          globalIndex: engineIndex * 8 + outcomeIndex
                        }))
                      );

                    return allFeatures.map((feature, idx) => (
                      <div
                        key={idx}
                        className="grid grid-cols-[minmax(100px,110px)_repeat(7,minmax(130px,1fr))] gap-2 items-center bg-slate-800/30 hover:bg-slate-800/50 transition-colors rounded-lg py-3 px-2"
                      >
                        <div className="px-2 flex items-center">
                          <div className="font-semibold text-white text-[11px] leading-tight">
                            {feature.title}
                          </div>
                        </div>
                        {engines.map((engine, engineIdx) => {
                          const featureLevelIndex = feature.levelIndex;
                          const shouldShowTick = !engine.comingSoon && engineIdx >= featureLevelIndex;

                          return (
                            <div key={engine.level} className="flex items-center justify-center">
                              {shouldShowTick ? (
                                <Check className="text-emerald-400 flex-shrink-0" size={18} />
                              ) : (
                                <span className="text-slate-600 text-sm">-</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ));
                  })()}
                </div>
              </div>
            </div>
          </section>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 md:p-10 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Payment Information</h2>
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-4 text-slate-300 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
                  <span>Channel Blueprint: One-time purchase</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
                  <span>All major credit cards accepted via Stripe</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
                  <span>Instant access after payment</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
                  <span>30-day money-back guarantee</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
                  <span>Enterprise options: ACH and wire transfers available</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <HelpCircle className="text-blue-400" size={28} />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-slate-700 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-700/30 transition-colors"
                  >
                    <h3 className="text-white font-semibold text-base md:text-lg pr-4">{faq.question}</h3>
                    {expandedFaqs[index] ? (
                      <ChevronUp className="text-blue-400 flex-shrink-0" size={20} />
                    ) : (
                      <ChevronDown className="text-blue-400 flex-shrink-0" size={20} />
                    )}
                  </button>
                  {expandedFaqs[index] && (
                    <div className="px-5 pb-5 animate-fade-in">
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
