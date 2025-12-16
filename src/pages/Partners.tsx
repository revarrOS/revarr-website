import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, ArrowRight, TrendingUp, Users, DollarSign, Target, Zap, Award } from 'lucide-react'
import FAQ from '../components/FAQ'
import PartnerForm from '../components/PartnerForm'

export default function Partners() {
  const navigate = useNavigate()
  const [showForm, setShowForm] = useState(false)
  const [formType, setFormType] = useState<'partner_registration' | 'partner_apply'>('partner_registration')

  const openForm = (type: 'partner_registration' | 'partner_apply') => {
    setFormType(type)
    setShowForm(true)
  }

  const faqs = [
    {
      question: "What is the revARR Partner Program?",
      answer: "The revARR Partner Program enables IT solution providers, consultants, and resellers to offer the world's first Partner-Led Revenue Operating System to their customers. Partners earn generous commissions while helping their clients transform partner ecosystem chaos into predictable, scalable revenue."
    },
    {
      question: "What commission do partners earn?",
      answer: "Partners earn 20% recurring commission on all subscriptions they refer for the lifetime of the customer. This means predictable, growing revenue as your clients scale through the revARR engine levels."
    },
    {
      question: "Do I need to be technical to become a partner?",
      answer: "No. revARR is designed to be simple and requires no technical integration. Partners focus on understanding their clients' partner ecosystem challenges and positioning revARR as the solution. We provide all the training, materials, and support you need."
    },
    {
      question: "What support do partners receive?",
      answer: "Partners receive comprehensive onboarding, sales enablement materials, technical training, co-selling support, dedicated partner success managers, and access to our partner portal with real-time commission tracking and customer insights."
    },
    {
      question: "How long does it take to get started?",
      answer: "You can be onboarded and ready to sell within 48 hours. Our partner onboarding includes training on the revARR platform, access to all sales materials, and setup in our partner portal."
    },
    {
      question: "Can I white-label revARR?",
      answer: "Currently, revARR is not available as a white-label solution. However, we offer co-branding opportunities for strategic partners and can work with you to create custom customer experiences that reflect your brand alongside ours."
    },
    {
      question: "What types of companies make the best partners?",
      answer: "Ideal partners include: IT solution providers serving B2B companies, revenue operations consultancies, partner ecosystem consultants, Salesforce/HubSpot partners, and any organization that works with companies building or scaling partner programs."
    },
    {
      question: "Is there a minimum commitment?",
      answer: "No. There are no minimum commitments, quotas, or fees to join the revARR Partner Program. We believe in building long-term partnerships based on mutual success, not contractual obligations."
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-20 pb-16 px-6 overflow-hidden border-b border-blue-900/30 bg-gradient-to-br from-blue-950/30 to-black">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-bold mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            PARTNER PROGRAM
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-8">
            Sell the Future of<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              Partner Revenue
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-3xl mx-auto mb-12 leading-tight">
            Join the revARR Partner Program and bring the world's first Partner-Led Revenue Operating System to your customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openForm('partner_registration')}
              className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-lg rounded-xl font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
            >
              Become a Partner
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('program-details')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-slate-900/80 backdrop-blur-sm border-2 border-slate-700 text-white text-lg hover:bg-slate-800 hover:border-slate-600 rounded-xl font-semibold transition-all"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section id="program-details" className="py-20 px-6 bg-gradient-to-b from-black to-slate-950 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Why Partner with revARR?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Transform your service offering and create a new, recurring revenue stream
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-950/40 to-blue-900/20 border border-blue-800/50 rounded-2xl p-8 hover:border-blue-600/70 transition-all">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                <DollarSign className="text-blue-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Recurring Revenue</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Earn 20% recurring commission on all customer subscriptions for the lifetime of the customer. As your clients scale through engine levels, your revenue grows automatically.
              </p>
              <div className="text-blue-400 font-bold text-3xl">20%</div>
              <p className="text-slate-400 text-sm">Lifetime recurring commission</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-950/40 to-cyan-900/20 border border-cyan-800/50 rounded-2xl p-8 hover:border-cyan-600/70 transition-all">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Full Support</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Dedicated partner success managers, comprehensive training, sales enablement materials, technical support, and co-selling assistance for complex deals.
              </p>
              <div className="flex items-center gap-2 text-cyan-400">
                <Check size={20} />
                <span className="font-semibold">Dedicated support team</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-950/40 to-emerald-900/20 border border-emerald-800/50 rounded-2xl p-8 hover:border-emerald-600/70 transition-all">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="text-emerald-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Easy to Sell</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                No technical integration required. 20-minute demos that sell themselves. Clear ROI story. Customers see value immediately. Simple pricing model that scales.
              </p>
              <div className="flex items-center gap-2 text-emerald-400">
                <Check size={20} />
                <span className="font-semibold">Fast sales cycles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-black border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              What You Get as a Partner
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Target, title: 'Sales Enablement Kit', desc: 'Complete deck, demo scripts, objection handlers, ROI calculators, and customer case studies.' },
              { icon: Award, title: 'Partner Certification', desc: 'Comprehensive training program on the revARR platform, partner ecosystem strategies, and sales techniques.' },
              { icon: Users, title: 'Co-Selling Support', desc: 'Our team joins your enterprise deals to provide technical expertise and help close complex opportunities.' },
              { icon: TrendingUp, title: 'Lead Generation', desc: 'Access to marketing materials, co-marketing opportunities, and inclusion in our partner directory.' },
              { icon: DollarSign, title: 'Partner Portal', desc: 'Real-time commission tracking, customer insights, renewal forecasts, and performance dashboards.' },
              { icon: Zap, title: 'Fast Onboarding', desc: 'Get started in 48 hours with streamlined onboarding, immediate portal access, and assigned success manager.' }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-all"
                >
                  <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-blue-400" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-black to-slate-950 border-b border-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ideal Partner Profile
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Who succeeds in the revARR Partner Program?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-950/30 to-black border border-blue-900/50 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-white mb-6">Best Fit Partners</h3>
              <ul className="space-y-4">
                {[
                  'IT solution providers serving B2B companies',
                  'Revenue operations consultancies',
                  'Partner ecosystem consultants',
                  'Salesforce and HubSpot implementation partners',
                  'Channel and alliance consultants',
                  'GTM strategy consultants',
                  'SaaS resellers and MSPs'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-950/30 to-black border border-emerald-900/50 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-white mb-6">Target Customer Profile</h3>
              <p className="text-slate-300 mb-6">
                Your customers likely fit this profile:
              </p>
              <ul className="space-y-4">
                {[
                  'B2B companies building partner ecosystems',
                  'SaaS companies with channel programs',
                  'Tech companies with reseller networks',
                  'Companies frustrated with partner ROI',
                  'Organizations hiring partner managers',
                  'Businesses spending on partner consultants',
                  'Companies expanding to new markets via partners'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-black border-b border-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-950/40 to-cyan-950/20 border-2 border-blue-800/50 rounded-3xl p-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Commission Structure
            </h2>
            <div className="max-w-2xl mx-auto mb-8">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-6">
                <div className="text-6xl font-black text-blue-400 mb-4">20%</div>
                <p className="text-2xl font-bold text-white mb-2">Recurring Lifetime Commission</p>
                <p className="text-slate-400">
                  Earn 20% of customer subscription value every month for as long as they remain a customer
                </p>
              </div>

              <div className="space-y-4 text-left">
                <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Customer on Pack 1 (£75/mo)</span>
                    <span className="text-emerald-400 font-bold">£15/mo</span>
                  </div>
                  <p className="text-slate-400 text-sm">£180/year recurring</p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Customer on Pack 5 (£599/mo)</span>
                    <span className="text-emerald-400 font-bold">£120/mo</span>
                  </div>
                  <p className="text-slate-400 text-sm">£1,440/year recurring</p>
                </div>

                <div className="bg-gradient-to-br from-emerald-950/40 to-emerald-900/20 border border-emerald-700/50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">10 customers averaging Pack 3</span>
                    <span className="text-emerald-400 font-bold text-xl">£550/mo</span>
                  </div>
                  <p className="text-emerald-300 text-sm font-semibold">£6,600/year recurring revenue</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-700">
              <p className="text-xl text-slate-300">
                As your customers grow and upgrade to higher engine levels,<br />
                <span className="text-white font-bold">your commission grows automatically.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />

      <section className="py-24 px-6 bg-gradient-to-br from-slate-950 via-black to-slate-950">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl sm:text-6xl font-black text-white leading-tight">
              Ready to Join?
            </h2>
            <p className="text-2xl sm:text-3xl text-slate-300 max-w-2xl mx-auto">
              Start building recurring revenue by bringing revARR to your customers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openForm('partner_apply')}
              className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-lg rounded-xl font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
            >
              Apply Now
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                navigate('/pricing')
                window.scrollTo(0, 0)
              }}
              className="px-10 py-5 bg-slate-900/80 backdrop-blur-sm border-2 border-slate-700 text-white text-lg hover:bg-slate-800 hover:border-slate-600 rounded-xl font-semibold transition-all"
            >
              View Pricing
            </button>
          </div>

          <p className="text-slate-400 text-sm pt-8">
            Questions? Email us at <a href="mailto:partners@revarr.com" className="text-blue-400 hover:text-blue-300">partners@revarr.com</a>
          </p>
        </div>
      </section>

      {showForm && (
        <PartnerForm
          type={formType}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}
