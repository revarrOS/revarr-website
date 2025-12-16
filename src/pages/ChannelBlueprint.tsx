import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Target, Shield, DollarSign, Lightbulb, CheckCircle2, TrendingUp, Users, Zap, ArrowRight, Sparkles, Building2, Rocket, Clock, Briefcase } from 'lucide-react';
import EngineEcosystem from '../components/EngineEcosystem';

export default function ChannelBlueprint() {
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
              The Channel Blueprint
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Should You Go Channel?
              <br />
              Get the Answer in 1 Hour.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
              AI-built business case that shows if channel is your right GTM move. Board-ready. Evidence-backed. <span className="font-bold text-white">{formatPrice()} one-time.</span>
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
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-cyan-500/25"
              >
                Get The Channel Blueprint - {formatPrice()}
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">5</div>
              <div className="text-slate-400 text-sm">Analysis Modules</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">&lt;1hr</div>
              <div className="text-slate-400 text-sm">To Board-Ready</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">1</div>
              <div className="text-slate-400 text-sm">Business Case</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{formatPrice()}</div>
              <div className="text-slate-400 text-sm">One-Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Engine Ecosystem */}
      <section className="py-16 px-6 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Part of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">7-Level AI Engine</span> System
            </h2>
            <p className="text-xl text-slate-400">Start here. Then scale through the complete partner revenue lifecycle.</p>
          </div>
          <EngineEcosystem currentEngine="channel-blueprint" />
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              One Question. Clear Answer.
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              <span className="font-bold text-white">"Should we invest in channel?"</span> You need data, not opinions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
              <Building2 className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">CEOs & Founders</h3>
              <p className="text-slate-400 mb-4">"Is channel our path to scale?"</p>
              <div className="text-sm text-slate-500">
                Get the business case to present to your board or investors.
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
              <TrendingUp className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Revenue Leaders</h3>
              <p className="text-slate-400 mb-4">"Will channel hit our number?"</p>
              <div className="text-sm text-slate-500">
                Prove the ROI with competitive benchmarks and revenue models.
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
              <Briefcase className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Investors & Board</h3>
              <p className="text-slate-400 mb-4">"Is this plan realistic?"</p>
              <div className="text-sm text-slate-500">
                Validate the channel strategy against market reality.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Product Outcomes */}
      <section className="py-16 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What's Inside
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Five modules. <span className="font-bold text-white">One clear answer.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-xl mb-4 mx-auto">
                <Target className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Market Reality</h3>
              <p className="text-sm text-slate-400">Who you compete with & market saturation</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-xl mb-4 mx-auto">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Competitive Intel</h3>
              <p className="text-sm text-slate-400">How competitors use channel & their weaknesses</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded-xl mb-4 mx-auto">
                <DollarSign className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Revenue Model</h3>
              <p className="text-sm text-slate-400">3-year ARR forecast & investment needs</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-xl mb-4 mx-auto">
                <Lightbulb className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">The Verdict</h3>
              <p className="text-sm text-slate-400">Direct vs. channel: What's right for you?</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-xl mb-4 mx-auto">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Get Approval</h3>
              <p className="text-sm text-slate-400">Board-ready case to get buy-in</p>
            </div>
          </div>

          {/* CTA After Modules */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              to="/pricing"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-cyan-500/25"
            >
              Get The Channel Blueprint - {formatPrice()}
            </Link>
          </div>
        </div>
      </section>

      {/* What Happens After Approval */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-950 via-blue-950/10 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Happens After Approval?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We don't advise you what to do next. <span className="font-bold text-white">We build it for you.</span>
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-2 border-cyan-500/30 rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-12 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  <span className="text-cyan-400">Step 1:</span> Get Approval
                </h3>
                <div className="space-y-3 text-slate-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Complete your Channel Business Plan</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Share with stakeholders for review</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Get alignment and approval to proceed</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  <span className="text-emerald-400">Step 2:</span> Unlock Execution
                </h3>
                <div className="space-y-3 text-slate-300">
                  <div className="flex items-start gap-3">
                    <Rocket className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Partner Intelligence Engine:</strong> Find & qualify the right partners</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Partner Acquisition:</strong> Recruit & onboard partners</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Enablement, PRM, Co-sell, Growth:</strong> Scale channel revenue</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-950/50 border border-cyan-500/30 rounded-2xl p-6 text-center">
              <p className="text-lg text-slate-300 mb-2">
                <span className="font-bold text-white">This keeps the promise clean.</span>
              </p>
              <p className="text-slate-400">
                Product 1 helps you decide. Products 2-7 help you execute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Scenarios */}
      <section className="py-16 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Real Examples
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              How teams actually use this.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm text-cyan-400 font-semibold mb-1">SaaS CEO</div>
                  <div className="text-slate-300 font-medium">B2B Security Platform</div>
                </div>
              </div>
              <p className="text-slate-400 mb-4 text-sm">
                "Board wanted proof before approving £800K channel investment."
              </p>
              <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-4 mb-4">
                <div className="text-sm text-emerald-400 font-semibold mb-2">The Blueprint showed:</div>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• 8/10 competitors do 60%+ revenue through channel</li>
                  <li>• Direct costs 3x more per deal in this market</li>
                  <li>• Realistic 3-year channel ARR: £2M+</li>
                </ul>
              </div>
              <div className="text-white font-semibold text-sm">
                Result: Board approved. Now executing with Products 2-7.
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-emerald-900/20 border border-blue-500/30 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-blue-400 font-semibold mb-1">VP Revenue</div>
                  <div className="text-slate-300 font-medium">Marketing Automation SaaS</div>
                </div>
              </div>
              <p className="text-slate-400 mb-4 text-sm">
                "CFO wanted ROI proof before hiring 2 partner managers."
              </p>
              <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-4 mb-4">
                <div className="text-sm text-emerald-400 font-semibold mb-2">The Blueprint showed:</div>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• Top 3 competitors: 40-55% revenue via partners</li>
                  <li>• Partner types: agencies, consultants, integrators</li>
                  <li>• 18-month payback on channel investment</li>
                </ul>
              </div>
              <div className="text-white font-semibold text-sm">
                Result: Got budget. Moving to partner recruitment.
              </div>
            </div>
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
              Simple process. <span className="font-bold text-white">Clear output.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProcessStep
              number="1"
              title="Answer Questions"
              description="Provide basic info about your company, product, and target market. Takes 10 minutes."
              icon={<Users className="w-8 h-8" />}
              time="10 minutes"
              color="cyan"
            />
            <ProcessStep
              number="2"
              title="AI Builds Your Plan"
              description="Our AI researches your market, analyzes competitors, and generates your complete Channel Business Plan."
              icon={<Zap className="w-8 h-8" />}
              time="30-45 minutes"
              color="blue"
            />
            <ProcessStep
              number="3"
              title="Review & Share"
              description="Get your board-ready business case. Invite stakeholders. Get approval. Unlock execution."
              icon={<Target className="w-8 h-8" />}
              time="Review anytime"
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
              The Cost of Guessing
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              You're about to bet 6-7 figures on channel. <span className="font-bold text-white">You need certainty.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto">
            <div className="bg-red-900/10 border border-red-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-6">Without The Blueprint</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-300">Leadership debates for weeks. No data to decide.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-300">Hiring consultants for $50K+ to build the business case</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-300">Guessing if competitors actually scale via channel</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-300">Betting 6-7 figures on a channel program without knowing if it's viable</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-300">Board meetings with no ROI model to justify investment</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-300">Missing your window while researching for 3-6 months</span>
                </div>
              </div>
            </div>

            <div className="bg-emerald-900/10 border border-emerald-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6">With The Blueprint</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    <span className="font-bold text-white">Clear go/no-go answer</span> in under 1 hour
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    <span className="font-bold text-white">Competitive benchmarks:</span> how competitors scale via channel
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    <span className="font-bold text-white">Revenue model:</span> realistic 3-year ARR potential
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    <span className="font-bold text-white">Board-ready business case</span> for {formatPrice()}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    Know if channel is right <span className="font-bold text-white">BEFORE</span> investing 6-7 figures
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    Move fast with confidence. <span className="font-bold text-white">Not gut feel.</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-8">
              <p className="text-xl font-bold text-white mb-4">
                The Alternative?
              </p>
              <p className="text-lg text-slate-300">
                Spend 3-6 months researching. Hire a consultant for $50K+. Or just... guess and hope you're right when you commit £800K to a channel program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-950 via-cyan-950/10 to-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-2 border-cyan-500/30 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get Your Answer Today
            </h2>
            <p className="text-xl text-slate-300 mb-2">
              Should you invest in channel?
            </p>
            <p className="text-lg text-slate-400 mb-8">
              Board-ready answer in under 1 hour. <span className="font-bold text-white">{formatPrice()} one-time.</span>
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-cyan-500/25 mb-6"
            >
              Get The Channel Blueprint
              <ArrowRight size={24} />
            </Link>
            <div className="flex items-center justify-center gap-6 text-sm text-slate-400 mt-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>No subscription</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Instant access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Results in 1 hour</span>
              </div>
            </div>
          </div>
        </div>
      </section>
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
