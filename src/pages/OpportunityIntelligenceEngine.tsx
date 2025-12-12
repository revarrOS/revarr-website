import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Target, Shield, DollarSign, Lightbulb, Globe, CheckCircle2, TrendingUp, Users, Zap, ArrowRight, Sparkles, Building2, Rocket, Clock, Briefcase } from 'lucide-react';

export default function OpportunityIntelligenceEngine() {
  const [currency, setCurrency] = useState<'USD' | 'GBP' | 'EUR'>('GBP');

  useEffect(() => {
    const detectCurrency = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const euroCountries = ['AT', 'BE', 'CY', 'EE', 'FI', 'FR', 'DE', 'GR', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PT', 'SK', 'SI', 'ES'];

        if (data.country_code === 'GB') {
          setCurrency('GBP');
        } else if (euroCountries.includes(data.country_code)) {
          setCurrency('EUR');
        } else {
          setCurrency('USD');
        }
      } catch (error) {
        console.log('Could not detect location, defaulting to GBP');
      }
    };
    detectCurrency();
  }, []);

  const formatPrice = () => {
    if (currency === 'USD') {
      return '$109';
    }
    if (currency === 'EUR') {
      return '€89';
    }
    return '£75';
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-blue-950/30 to-slate-950"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-6">
              <Sparkles size={16} />
              Level 1: Opportunity Intelligence Engine
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Know Where You Win.
              <br />
              Before You Waste a Dollar.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
              Validate ideas. Find $10M revenue streams. <span className="font-bold text-white">Turn guesses into strategy.</span>
            </p>

            <div className="flex justify-center mb-6">
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/pricing"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-emerald-500/25"
              >
                BUY NOW - Only {formatPrice()} one-time
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">1</div>
              <div className="text-slate-400 text-sm">Intelligence Engine</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">8</div>
              <div className="text-slate-400 text-sm">Analysis Modules</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">100+</div>
              <div className="text-slate-400 text-sm">Strategic Outputs</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">1</div>
              <div className="text-slate-400 text-sm">Battle Card. Ready.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Who This Is For
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Validating ideas. Scaling revenue. Making investment decisions. <span className="font-bold text-white">One platform.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ICPCard
              icon={<Rocket className="w-8 h-8" />}
              title="Aspiring Founders"
              subtitle="Validate your idea before you build."
              challenges={[
                "Is there a market?",
                "Who am I competing against?",
                "Can I win?",
                "Which market first?"
              ]}
              outcomes={[
                "Competitive landscape in 30 seconds",
                "18+ competitors identified instantly",
                "Market gaps nobody's touching",
                "Clarity on where you win"
              ]}
              color="cyan"
            />

            <ICPCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="SMB Leaders & Executives"
              subtitle="Know where to grow next."
              challenges={[
                "Which markets to expand into?",
                "Where can we win fastest?",
                "What's our revenue potential?",
                "How do we differentiate?"
              ]}
              outcomes={[
                "Ranked industries to target",
                "Geographic expansion roadmap",
                "5-year revenue forecasts",
                "Battle cards vs competitors"
              ]}
              color="blue"
            />

            <ICPCard
              icon={<Building2 className="w-8 h-8" />}
              title="Corporate Executives"
              subtitle="Board-ready intelligence."
              challenges={[
                "Board wants opportunities",
                "Threats emerging in segment",
                "Need data for initiatives",
                "Roadmap needs justification"
              ]}
              outcomes={[
                "Board-ready reports in 30 seconds",
                "Threat monitoring (10 dimensions)",
                "Market risk alerts",
                "Data-backed recommendations"
              ]}
              color="emerald"
            />

            <ICPCard
              icon={<Briefcase className="w-8 h-8" />}
              title="Investors & Analysts"
              subtitle="Fast due diligence."
              challenges={[
                "How crowded is the market?",
                "Can they differentiate?",
                "What's the realistic TAM?",
                "Who are the threats?"
              ]}
              outcomes={[
                "Complete landscape analysis",
                "Saturation signals",
                "Competitor benchmarking",
                "White-space validation"
              ]}
              color="cyan"
            />
          </div>
        </div>
      </section>

      {/* Real Product Outcomes */}
      <section className="py-16 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What You Get
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Not vague reports. <span className="font-bold text-white">Actionable intelligence you use today.</span>
            </p>
          </div>

          <div className="space-y-12">
            <OutcomeSection
              title="Module 1: Market Position Snapshot"
              description="Market clarity in 30 seconds"
              icon={<Target className="w-8 h-8" />}
              color="emerald"
              outcomes={[
                {
                  name: "Strategic Position",
                  detail: "Where you fit in the landscape"
                },
                {
                  name: "Market Vitals",
                  detail: "Growth rate, size, maturity stage"
                },
                {
                  name: "Competitor Radar",
                  detail: "Top 5 direct threats + top 5 alternatives"
                },
                {
                  name: "Growth Tailwinds",
                  detail: "Fastest growing segments (12%+ CAGR)"
                },
                {
                  name: "Key Trends",
                  detail: "High-impact shifts in your market"
                }
              ]}
            />

            <OutcomeSection
              title="Module 2: Competitor Strength Ranking"
              description="Tactical intelligence to win"
              icon={<Shield className="w-8 h-8" />}
              color="cyan"
              outcomes={[
                {
                  name: "10-Category Threat Scoring",
                  detail: "Market, Product, GTM, Brand, Innovation, Lock-In, Sales, Pricing, Partnerships, Funding"
                },
                {
                  name: "Traffic-Light System",
                  detail: "Green (you win), Red (they win) across all dimensions"
                },
                {
                  name: "Threat Score (0-100)",
                  detail: "Which competitors are vulnerable"
                },
                {
                  name: "Intelligence Reports",
                  detail: "Vulnerability breakdown + strategic recs"
                },
                {
                  name: "Live Tactical Data",
                  detail: "Pricing, HQ, sales footprint, funding"
                }
              ]}
            />
          </div>

          {/* CTA After Module 2 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/pricing"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-emerald-500/25"
            >
              BUY NOW - Only {formatPrice()} one-time
            </Link>
          </div>
        </div>
      </section>

      {/* Future Modules Preview - Removed heading: "The Complete Intelligence Engine" with subtitle: "Four additional modules that transform intelligence into predictable revenue growth." */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-950 via-blue-950/10 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            <OutcomeSection
              title="Module 3: Revenue Intelligence"
              description="Know the numbers before you bet"
              icon={<DollarSign className="w-8 h-8" />}
              color="blue"
              outcomes={[
                {
                  name: "5-Year ARR Projections",
                  detail: "What 50, 100, 200 customers means"
                },
                {
                  name: "Deal Velocity Benchmarks",
                  detail: "Sales cycle by competitor & segment"
                },
                {
                  name: "Win Rate Predictions",
                  detail: "Close probability by industry & deal size"
                },
                {
                  name: "CAC Trend Analysis",
                  detail: "Which channels are getting efficient"
                },
                {
                  name: "LTV Models",
                  detail: "LTV by segment + churn risk factors"
                }
              ]}
            />

            <OutcomeSection
              title="Module 4: White-Space Finder"
              description="What competitors missed"
              icon={<Lightbulb className="w-8 h-8" />}
              color="cyan"
              outcomes={[
                {
                  name: "Unserved Segments",
                  detail: "Clear needs, no dominant solution"
                },
                {
                  name: "Feature Gaps",
                  detail: "What customers want but nobody delivers"
                },
                {
                  name: "Geographic Blind Spots",
                  detail: "Demand exists, competition thin"
                },
                {
                  name: "Underserved Personas",
                  detail: "Buyers competitors ignore"
                },
                {
                  name: "Emerging Trends",
                  detail: "Movements before competitors see them"
                }
              ]}
            />

            {/* CTA After Module 4 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center py-6">
              <Link
                to="/pricing"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-emerald-500/25"
              >
                BUY NOW - Only {formatPrice()} one-time
              </Link>
            </div>

            <OutcomeSection
              title="Module 5: Market Expansion Intelligence"
              description="Where to grow next"
              icon={<Globe className="w-8 h-8" />}
              color="emerald"
              outcomes={[
                {
                  name: "Industry Rankings",
                  detail: "Verticals by TAM, CAGR, competitive intensity"
                },
                {
                  name: "Regional Scores",
                  detail: "NA, EMEA, APAC, LATAM by revenue & entry ease"
                },
                {
                  name: "Density Maps",
                  detail: "Where competitors cluster vs. open markets"
                },
                {
                  name: "GTM Difficulty Index",
                  detail: "Regulatory barriers, partnerships, sales complexity"
                },
                {
                  name: "Partner Ecosystem",
                  detail: "Available channels, integrations, alliances"
                }
              ]}
            />

            <OutcomeSection
              title="Module 6: Strategic Action Plan"
              description="Your roadmap from insight to revenue"
              icon={<CheckCircle2 className="w-8 h-8" />}
              color="purple"
              outcomes={[
                {
                  name: "Risk Dashboard",
                  detail: "Alerts for saturation, funding, declining segments"
                },
                {
                  name: "Threat Monitoring",
                  detail: "Track launches, pricing changes, strategic moves"
                },
                {
                  name: "30-60-90 Day Priorities",
                  detail: "What to do first, second, third"
                },
                {
                  name: "Resource Allocation",
                  detail: "Where to invest sales, marketing, product"
                },
                {
                  name: "Quick-Win Playbook",
                  detail: "High-impact, low-effort opportunities now"
                }
              ]}
            />

            {/* CTA After Module 6 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center py-6">
              <Link
                to="/pricing"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-emerald-500/25"
              >
                BUY NOW - Only {formatPrice()} one-time
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Scenarios */}
      <section className="py-16 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Real Decisions
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              How people use this. <span className="font-bold text-white">Real scenarios.</span>
            </p>
          </div>

          <div className="space-y-8">
            <UseCaseScenario
              role="Aspiring Founder"
              vertical="Healthcare AI"
              scenario="Validating digital health companion"
              challenge="'Is this market saturated? Can I compete?'"
              solution={[
                "Discovered 18 competitors in 30 seconds",
                "5 direct threats with key weaknesses revealed",
                "Market growing 12% CAGR, AI adoption trends strong",
                "White space: blood cancer patients underserved"
              ]}
              outcome="'Three competitors weak on AI personalization. Massive gap in blood cancer. Pitched investors with confidence.'"
              color="cyan"
            />

            <UseCaseScenario
              role="SMB CEO"
              vertical="Sales Engagement SaaS"
              scenario="Planning market expansion"
              challenge="'Maxed out segment. Where to hit $10M ARR?'"
              solution={[
                "Healthcare ranked #1 (fast sales cycle, high win rates)",
                "200 healthcare customers = 5-year revenue forecast",
                "EMEA: 40% lower competitive density",
                "90-day expansion roadmap generated"
              ]}
              outcome="'Launching healthcare vertical next quarter. Board approved $3M expansion budget.'"
              color="blue"
            />

            <UseCaseScenario
              role="VP Product"
              vertical="Marketing Automation"
              scenario="Prioritizing Q3 roadmap"
              challenge="'50 feature requests. Which matter for differentiation?'"
              solution={[
                "7 of 10 competitors weak on mobile",
                "Gap found: no native video messaging",
                "Threat scores prioritized defensive features",
                "Battle cards generated for all competitors"
              ]}
              outcome="'Launched mobile-first roadmap. Won 3 competitive deals next quarter.'"
              color="emerald"
            />

            <UseCaseScenario
              role="Investor"
              vertical="DevOps Platform"
              scenario="Series B due diligence"
              challenge="'Unique positioning or crowded space?'"
              solution={[
                "18 competitors in space",
                "12 competitors weak on AI (scored Red)",
                "AI-powered debugging gap confirmed",
                "Healthy growth, no saturation"
              ]}
              outcome="'Founder was right. Real white-space. Led Series B round.'"
              color="cyan"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-950 via-cyan-950/10 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-400">
              No setup. No manual research. <span className="font-bold text-white">Just intelligence.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProcessStep
              number="1"
              title="AI Analysis"
              description="Automated market mapping, competitor discovery, and landscape intelligence across 18+ dimensions."
              icon={<Zap className="w-8 h-8" />}
              time="30 seconds"
              color="cyan"
            />
            <ProcessStep
              number="2"
              title="Co-Creation"
              description="Collaborative refinement. You provide context, AI adapts insights to your strategic position."
              icon={<Users className="w-8 h-8" />}
              time="5 minutes"
              color="blue"
            />
            <ProcessStep
              number="3"
              title="Actionable Outcomes"
              description="Battle cards, scorecards, threat analysis, and strategic recommendations ready to deploy."
              icon={<Target className="w-8 h-8" />}
              time="Instant"
              color="emerald"
            />
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900/80 border border-slate-700 rounded-xl">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="text-slate-300">
                <span className="font-bold text-white">Built GDPR-first.</span> Multi-architecture. Enterprise-grade security at every layer.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Stop Burning Money on Garbage Intelligence
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Every day you're paying for slow, outdated, useless market research that your team can't actually use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-6">Without RevARR</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-red-950/20 border border-red-500/30 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-300">
                    Gartner/Forrester: <span className="font-bold text-red-300">$150K+, 6 months outdated</span>, doesn't answer your questions
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-950/20 border border-red-500/30 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-300">
                    Sales Ops building spreadsheets: <span className="font-bold text-red-300">wrong by the time they're done</span>
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-950/20 border border-red-500/30 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-300">
                    Consultants: <span className="font-bold text-red-300">$75K, 3 months</span> for obvious insights
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-950/20 border border-red-500/30 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-300">
                    Gen AI subscriptions: <span className="font-bold text-red-300">$2,500/month</span>, hours stitching conflicting data
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-950/20 border border-red-500/30 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-300">
                    Business Ops <span className="font-bold text-red-300">researching instead of executing</span> revenue work
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-950/20 border border-red-500/30 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-300">
                    Generic market reports when you need <span className="font-bold text-red-300">specific intelligence now</span>
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-950/20 border border-red-500/30 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-300">
                    Sales team <span className="font-bold text-red-300">googling competitors 10 minutes before calls</span>
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-950/20 border border-red-500/30 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-300">
                    Six-figure bets on <span className="font-bold text-red-300">gut feel</span> because data takes too long
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-6">With RevARR</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    <span className="font-bold text-emerald-300">1 hour, {formatPrice()}.</span> Real-time intelligence. Not $150K over 6 months.
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    <span className="font-bold text-emerald-300">Battle cards auto-generated.</span> Ready for sales today.
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    <span className="font-bold text-emerald-300">One platform</span> replaces Gartner + consultants + AI subscriptions
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    <span className="font-bold text-emerald-300">Marketing gets content immediately</span> tied to competitor weaknesses
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    <span className="font-bold text-emerald-300">Sales Ops and Business Ops stay on revenue work.</span> Not research.
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    <span className="font-bold text-emerald-300">Board-ready reports in 30 seconds.</span> Not "working on analysis".
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    <span className="font-bold text-emerald-300">White-space opportunities identified</span> before you waste budget
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    <span className="font-bold text-emerald-300">One source of truth.</span> No conflicting data. No version control.
                  </span>
                </div>
              </div>
            </div>
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

          <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-2 border-cyan-500/30 rounded-3xl p-12 text-center">
            <div className="text-5xl font-black text-white mb-4 leading-tight">
              {formatPrice()}. One time.<br />Complete market intelligence.<br />In your hands today.
            </div>
            <p className="text-2xl text-cyan-300 mb-6 font-bold">
              While your competitors burn 6 months and $150K on outdated research...
            </p>
            <p className="text-xl text-white max-w-3xl mx-auto mb-8 leading-relaxed">
              You'll have <span className="font-black text-cyan-400">competitor breakdowns, revenue models, white-space opportunities, and battle-ready strategies</span> before lunch.
            </p>
            <div className="bg-slate-950/50 border border-cyan-500/30 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-lg text-slate-300">
                Every day you wait is another day <span className="font-bold text-white">making blind decisions.</span><br />
                Every dollar you waste on slow research is a dollar <span className="font-bold text-white">your competitor uses to win.</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-emerald-500/25"
              >
                BUY NOW - Only {formatPrice()} one-time
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stop Guessing. Start Knowing.
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Make decisions with <span className="font-bold text-white">intelligence, not gut feel.</span>
          </p>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-cyan-500/25"
          >
            BUY NOW - Only {formatPrice()} one-time
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}

interface ICPCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  challenges: string[];
  outcomes: string[];
  color: 'cyan' | 'blue' | 'emerald';
}

function ICPCard({ icon, title, subtitle, challenges, outcomes, color }: ICPCardProps) {
  const colorClasses = {
    cyan: {
      border: 'border-cyan-500/30',
      icon: 'text-cyan-400 bg-cyan-500/10',
      title: 'text-cyan-400',
      accent: 'text-cyan-400'
    },
    blue: {
      border: 'border-blue-500/30',
      icon: 'text-blue-400 bg-blue-500/10',
      title: 'text-blue-400',
      accent: 'text-blue-400'
    },
    emerald: {
      border: 'border-emerald-500/30',
      icon: 'text-emerald-400 bg-emerald-500/10',
      title: 'text-emerald-400',
      accent: 'text-emerald-400'
    }
  };

  const colors = colorClasses[color];

  return (
    <div className={`bg-slate-900/50 border ${colors.border} rounded-2xl p-8 hover:scale-105 transition-all duration-300`}>
      <div className={`w-16 h-16 rounded-xl ${colors.icon} flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className={`${colors.title} text-sm mb-6`}>{subtitle}</p>

      <div className="mb-6">
        <h4 className="text-sm font-bold text-slate-400 uppercase mb-3">What You're Asking</h4>
        <div className="space-y-2">
          {challenges.map((challenge, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 flex-shrink-0"></div>
              <span>{challenge}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-bold text-slate-400 uppercase mb-3">What You'll Know</h4>
        <div className="space-y-2">
          {outcomes.map((outcome, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <CheckCircle2 className={`w-4 h-4 ${colors.accent} flex-shrink-0 mt-0.5`} />
              <span>{outcome}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface OutcomeSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'emerald' | 'cyan' | 'blue' | 'purple';
  outcomes: {
    name: string;
    detail: string;
  }[];
}

function OutcomeSection({ title, description, icon, color, outcomes }: OutcomeSectionProps) {
  const colorClasses = {
    emerald: {
      border: 'border-emerald-500/30',
      bg: 'from-emerald-900/20 to-emerald-950/10',
      icon: 'text-emerald-400 bg-emerald-500/10',
      accent: 'text-emerald-400'
    },
    cyan: {
      border: 'border-cyan-500/30',
      bg: 'from-cyan-900/20 to-cyan-950/10',
      icon: 'text-cyan-400 bg-cyan-500/10',
      accent: 'text-cyan-400'
    },
    blue: {
      border: 'border-blue-500/30',
      bg: 'from-blue-900/20 to-blue-950/10',
      icon: 'text-blue-400 bg-blue-500/10',
      accent: 'text-blue-400'
    },
    purple: {
      border: 'border-emerald-500/30',
      bg: 'from-emerald-900/20 to-emerald-950/10',
      icon: 'text-emerald-400 bg-emerald-500/10',
      accent: 'text-emerald-400'
    }
  };

  const colors = colorClasses[color];

  return (
    <div className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-2xl p-8`}>
      <div className="flex items-start gap-6 mb-6">
        <div className={`w-16 h-16 rounded-xl ${colors.icon} flex items-center justify-center flex-shrink-0`}>
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-slate-400">{description}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {outcomes.map((outcome, i) => (
          <div key={i} className="bg-slate-900/50 rounded-lg p-6">
            <h4 className={`font-bold ${colors.accent} mb-2`}>{outcome.name}</h4>
            <p className="text-sm text-slate-300">{outcome.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

interface UseCaseScenarioProps {
  role: string;
  vertical: string;
  scenario: string;
  challenge: string;
  solution: string[];
  outcome: string;
  color: 'cyan' | 'blue' | 'emerald';
}

function UseCaseScenario({ role, vertical, scenario, challenge, solution, outcome, color }: UseCaseScenarioProps) {
  const colorClasses = {
    cyan: {
      border: 'border-cyan-500/30',
      badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      outcome: 'bg-cyan-950/30 border-cyan-500/30'
    },
    blue: {
      border: 'border-blue-500/30',
      badge: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      outcome: 'bg-blue-950/30 border-blue-500/30'
    },
    emerald: {
      border: 'border-emerald-500/30',
      badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      outcome: 'bg-emerald-950/30 border-emerald-500/30'
    }
  };

  const colors = colorClasses[color];

  return (
    <div className={`bg-slate-900/50 border ${colors.border} rounded-2xl p-8`}>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`px-3 py-1 ${colors.badge} border rounded-full text-sm font-medium`}>
          {role}
        </span>
        <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">
          {vertical}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-white mb-2">{scenario}</h3>

      <div className="mb-6">
        <h4 className="text-sm font-bold text-slate-400 uppercase mb-2">The Challenge</h4>
        <p className="text-slate-300 italic">{challenge}</p>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-bold text-slate-400 uppercase mb-3">How They Used RevARR</h4>
        <div className="space-y-2">
          {solution.map((step, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={`${colors.outcome} border rounded-xl p-4`}>
        <h4 className="text-sm font-bold text-white uppercase mb-2">The Outcome</h4>
        <p className="text-slate-200 italic">{outcome}</p>
      </div>
    </div>
  );
}

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  time: string;
  color: 'cyan' | 'blue' | 'emerald';
}

function ProcessStep({ number, title, description, icon, time, color }: ProcessStepProps) {
  const colorClasses = {
    cyan: 'from-cyan-500 to-blue-500',
    blue: 'from-blue-500 to-cyan-500',
    emerald: 'from-emerald-500 to-green-500'
  };

  return (
    <div className="relative">
      <div className="flex flex-col items-center text-center">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center mb-4 shadow-lg`}>
          {icon}
        </div>
        <div className="text-4xl font-black text-slate-700 mb-2">{number}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="inline-block px-3 py-1 bg-slate-800 rounded-full text-sm text-cyan-400 mb-3">
          <Clock size={14} className="inline mr-1" />
          {time}
        </div>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
}
