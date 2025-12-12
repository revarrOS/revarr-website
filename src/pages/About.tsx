import { Flame, Shield, Award, Target, Zap, Users } from 'lucide-react'
import FAQ from '../components/FAQ'

export default function About() {
  const faqs = [
    {
      question: "How did revARR get started?",
      answer: "revARR was born from decades of frustration watching companies die from solvable problems. Jonathan and Dirk saw brilliant teams fail not because they lacked talent, but because they lacked a system that could give them real-time truth about their partner ecosystems. They built revARR to end strategic blindness forever."
    },
    {
      question: "What makes revARR different from consultants?",
      answer: "Consultants give you analysis after months of work. revARR gives you intelligence in minutes. Consultants cost £200,000+ per year. revARR starts at £75/month. Consultants leave. revARR runs 24/7 forever. It's not a service, it's a system."
    },
    {
      question: "Why should I trust revARR with our strategy?",
      answer: "Because Jonathan and Dirk have lived your pain. Between them, they have 45+ years of experience building, scaling, and fixing partner ecosystems for billion-dollar companies. They didn't build revARR to start a company. They built it because the world ran out of excuses."
    },
    {
      question: "Is revARR suitable for startups?",
      answer: "Absolutely. revARR was designed to give startups the same intelligence that enterprises pay consultants £300,000+ to get. For £75/month, you get market validation, partner discovery, and strategic clarity that levels the playing field instantly."
    },
    {
      question: "What industries does revARR serve?",
      answer: "revARR serves any B2B company that needs partners to scale. SaaS, technology, IT services, cybersecurity, infrastructure, consulting. If you have a partner ecosystem or need to build one, revARR is for you."
    },
    {
      question: "How quickly can we see results?",
      answer: "Your first intelligence report is ready in 20 minutes. Partner discovery starts immediately. Ecosystem clarity is instant. Most companies report complete strategic transformation within the first 30 days."
    },
    {
      question: "What if revARR doesn't work for us?",
      answer: "We offer a 30-day money-back guarantee. If revARR doesn't transform how you see your market and partner ecosystem, we'll refund you. No questions asked. But we've never had to do it."
    },
    {
      question: "Can we talk to existing customers?",
      answer: "Yes. Contact us at hello@revarr.com and we'll connect you with customers in your industry who are using revARR to transform their partner ecosystems."
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-20 pb-16 px-6 overflow-hidden border-b border-orange-900/30 bg-gradient-to-br from-orange-950/30 via-red-950/20 to-black">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-bold mb-8">
              <Flame size={16} />
              THE REAL STORY
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-8">
              About Us
            </h1>

            <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 mb-8 leading-tight">
              THE REAL STORY BEHIND revARR
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-black border-2 border-slate-700 rounded-3xl p-12 text-center mb-8">
            <p className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              We didn't build revARR because we wanted to start a company.
            </p>
            <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              We built it because the world ran out of excuses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-black to-slate-950 border-b border-slate-800/50">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p className="text-2xl text-white font-bold">
              For decades, businesses have been losing not because of their product, not because of their team,
              but because they were operating blind.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Bad intelligence.',
                'Slow decisions.',
                'Overpriced consultants.',
                'Guesswork sold as strategy.'
              ].map((item, index) => (
                <div key={index} className="bg-red-950/20 border border-red-900/50 rounded-xl p-6">
                  <p className="text-xl font-bold text-red-400">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-xl">
              And founders burning themselves alive trying to answer questions no system could answer for them.
            </p>

            <p className="text-xl text-white font-bold pt-6">
              Jonathan lived this.<br />
              Dirk lived this.
            </p>

            <p className="text-xl">
              And neither of them could watch another company die from problems that were fixable.
            </p>

            <div className="bg-gradient-to-br from-blue-950/40 to-cyan-950/20 border-2 border-blue-800/50 rounded-2xl p-10 text-center my-12">
              <p className="text-3xl sm:text-4xl font-black text-white leading-tight">
                So they built the machine<br />the industry was too afraid to build.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-black border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-bold mb-8">
              <Users size={16} />
              THE TWO PEOPLE BEHIND THE SYSTEM
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Meet the Founders
            </h2>
          </div>

          <div className="space-y-16">
            <div className="bg-gradient-to-br from-orange-950/30 to-red-950/20 border-2 border-orange-800/50 rounded-3xl p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 bg-orange-500/10 rounded-2xl flex items-center justify-center">
                  <Flame className="text-orange-400" size={40} />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white">Jonathan Butler</h3>
                  <p className="text-xl text-orange-400 font-bold">Founder, Vision, Engine Ignition</p>
                </div>
              </div>

              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p className="text-xl text-white font-bold">
                  Jonathan didn't come from privilege or pedigree.<br />
                  He came from the trenches.
                </p>

                <p>
                  The deals, the grind, the pressure, the boards, the impossible quotas, the broken systems, the chaos.
                </p>

                <p>
                  He spent nearly 20 years in American tech watching companies waste:
                </p>

                <div className="grid sm:grid-cols-2 gap-3 my-6">
                  {['quarters', 'budgets', 'partner relationships', 'entire markets', 'entire futures'].map((item, index) => (
                    <div key={index} className="bg-red-950/30 border border-red-900/50 rounded-lg p-4 text-center">
                      <p className="font-bold text-red-400">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xl text-white">
                  Not because they lacked talent, but because they lacked truth.
                </p>

                <div className="bg-orange-950/40 border border-orange-800/50 rounded-xl p-8 my-8">
                  <p className="text-2xl font-bold text-white mb-4">
                    Jonathan had one core realization, the spark that became revARR:
                  </p>
                  <p className="text-2xl text-orange-400 font-bold italic">
                    "No one is giving companies the intelligence they need to survive.<br />
                    So I'll build it myself."
                  </p>
                </div>

                <p className="text-xl">
                  He wanted to give founders something he never had:
                </p>

                <div className="space-y-3 my-6">
                  {[
                    'real-time clarity',
                    'zero guesswork',
                    'an automated strategy engine',
                    'pricing everyone can afford',
                    'a system that makes small teams operate like giants'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <p className="text-white font-semibold">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-orange-900/50">
                  <p className="text-xl text-white font-bold mb-4">
                    Jonathan is the ignition.<br />
                    He's the one who finally said:
                  </p>
                  <p className="text-2xl text-orange-400 font-bold">
                    "Enough. It's time we flipped the world's revenue systems upside down."
                  </p>
                  <p className="text-xl text-white mt-4">
                    And then he did.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-950/30 to-cyan-950/20 border-2 border-blue-800/50 rounded-3xl p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                  <Shield className="text-blue-400" size={40} />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white">Dirk Campbell</h3>
                  <p className="text-xl text-blue-400 font-bold">Co-Founder, Chief Customer Officer, The Engine Stabiliser</p>
                </div>
              </div>

              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p className="text-xl text-white font-bold">
                  If Jonathan is fire, Dirk is the steel that shapes it.
                </p>

                <p>
                  Dirk has spent 25+ years building global revenue-support ecosystems for the world's biggest companies:
                </p>

                <div className="grid sm:grid-cols-2 gap-3 my-6">
                  {['HPE Aruba', 'Juniper Networks', 'Pluribus Networks', 'Ordr', 'ESS', 'Neoteris', 'Blue Coat'].map((company, index) => (
                    <div key={index} className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4 text-center">
                      <p className="font-bold text-blue-400">{company}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <p className="flex items-start gap-3">
                    <Zap className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                    <span>Built 24x7x365 support organizations across four continents.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Zap className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                    <span>Retained 99% of OEM customers.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Zap className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                    <span>Scaled teams from 12 people to 450+.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Zap className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                    <span>Kept renewal engines running even during global chaos.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Zap className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                    <span>Architected the systems that keep billion-dollar machines running.</span>
                  </p>
                </div>

                <p className="text-xl text-white font-bold pt-6">
                  Dirk doesn't guess.<br />
                  Dirk doesn't hope.<br />
                  Dirk knows.
                </p>

                <div className="bg-blue-950/40 border border-blue-800/50 rounded-xl p-8 my-8">
                  <p className="text-xl font-bold text-white mb-4">
                    He joined revARR because he saw something he had been waiting his entire career to find:
                  </p>
                  <p className="text-2xl text-cyan-400 font-bold italic">
                    "This is the system companies should have had 20 years ago.<br />
                    Everything I've built manually, revARR automates in seconds."
                  </p>
                </div>

                <p className="text-xl">
                  Dirk is the person who ensures this OS isn't just powerful, it's bulletproof, reliable, scalable, and built for the real world.
                </p>

                <p className="text-xl text-white font-bold">
                  He brings the experience only someone who has lived through thousands of customer battles can bring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-black to-slate-950 border-b border-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-bold mb-8">
              <Target size={16} />
              THE SHARED MISSION
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Why We Built revARR
            </h2>
          </div>

          <div className="space-y-8 text-slate-300 text-lg leading-relaxed">
            <p className="text-2xl text-white font-bold">
              Jonathan and Dirk didn't meet to build a "startup."
            </p>

            <div className="bg-gradient-to-br from-slate-900 to-black border-2 border-slate-700 rounded-2xl p-10">
              <p className="text-2xl text-center font-bold text-white leading-tight">
                They met because they both believed the same brutal truth:
              </p>
              <p className="text-3xl text-center font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mt-6 leading-tight">
                Companies are dying with full pipelines and broken strategies.<br />
                Not because they're bad. But because they're blind.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              <div className="bg-gradient-to-br from-blue-950/30 to-black border border-blue-900/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">They believed:</h3>
                <div className="space-y-4">
                  {[
                    { text: 'Strategy should take minutes, not quarters', icon: Zap },
                    { text: 'Intelligence should be accessible, not a luxury', icon: Target },
                    { text: 'Partner ecosystems should be automated, not manual', icon: Users },
                    { text: 'Growth should be predictable, not painful', icon: Award },
                    { text: 'Small teams should win as often as big ones', icon: Flame },
                    { text: 'No company should die because no one showed them the truth', icon: Shield }
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <Icon className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                        <p className="text-white font-semibold">{item.text}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-950/30 to-black border border-emerald-900/50 rounded-xl p-8 flex flex-col justify-center">
                <p className="text-3xl font-bold text-white leading-tight mb-6">
                  And together, they built the machine to do it.
                </p>
                <div className="space-y-4 text-xl">
                  <p className="text-emerald-400 font-bold">revARR is not a tool.</p>
                  <p className="text-emerald-400 font-bold">It's not an app.</p>
                  <p className="text-emerald-400 font-bold">It's not another SaaS.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-950/40 to-cyan-950/20 border-2 border-blue-800/50 rounded-3xl p-12 text-center">
              <p className="text-2xl font-bold text-white mb-4">It is:</p>
              <p className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 mb-4 leading-tight">
                The world's first Revenue Operating System
              </p>
              <p className="text-2xl text-slate-300 leading-tight">
                A system designed to think, learn, and execute.<br />
                <span className="text-white font-bold">A system that ends strategic blindness forever.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-black border-b border-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              What Our Customers Feel
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed mb-12">
            <p className="text-2xl text-white font-bold text-center">
              Customers don't choose revARR because it's smart.
            </p>

            <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto">
              They choose it because for the first time in their careers, they feel:
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 my-12">
              {[
                { word: 'clarity', color: 'blue' },
                { word: 'certainty', color: 'cyan' },
                { word: 'direction', color: 'emerald' },
                { word: 'confidence', color: 'blue' },
                { word: 'speed', color: 'cyan' },
                { word: 'power', color: 'emerald' },
                { word: 'advantage', color: 'blue' },
                { word: 'unstoppable', color: 'orange' }
              ].map((item, index) => {
                const colorClasses: Record<string, string> = {
                  blue: 'from-blue-950/40 to-blue-900/20 border-blue-800/50 text-blue-400',
                  cyan: 'from-cyan-950/40 to-cyan-900/20 border-cyan-800/50 text-cyan-400',
                  emerald: 'from-emerald-950/40 to-emerald-900/20 border-emerald-800/50 text-emerald-400',
                  orange: 'from-orange-950/40 to-orange-900/20 border-orange-800/50 text-orange-400'
                }
                return (
                  <div key={index} className={`bg-gradient-to-br ${colorClasses[item.color]} border rounded-xl p-6 text-center`}>
                    <p className="text-2xl font-black">{item.word}</p>
                  </div>
                )
              })}
            </div>

            <div className="space-y-6 text-xl text-slate-300">
              <p>They stop guessing. They start knowing.</p>
              <p>They stop drowning in noise. They start executing with precision.</p>
              <p>They stop wasting quarters. They start compounding wins.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-black border-2 border-slate-700 rounded-2xl p-10 text-center mt-12">
              <p className="text-3xl font-black text-white leading-tight">
                revARR becomes their competitive unfair advantage
              </p>
              <p className="text-2xl text-slate-300 mt-4">
                because now they see what others don't.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-black to-slate-950 border-b border-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Global Presence
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              revARR operates across multiple continents, serving customers in North America, Latin America, and EMEA, with expansion to APAC coming soon.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-950/30 to-black border border-blue-900/50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="text-blue-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">United Kingdom</h3>
              <p className="text-slate-400">European Headquarters</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-950/30 to-black border border-cyan-900/50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Florida</h3>
              <p className="text-slate-400">Americas Hub</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-950/30 to-black border border-emerald-900/50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="text-emerald-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">San Francisco</h3>
              <p className="text-slate-400">West Coast Operations</p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-br from-slate-900 to-black border-2 border-slate-700 rounded-3xl p-12 text-center">
            <p className="text-2xl font-bold text-white mb-4">
              Serving Markets Globally
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="px-6 py-3 bg-blue-950/40 border border-blue-900/50 rounded-xl text-blue-400 font-semibold">
                North America
              </span>
              <span className="px-6 py-3 bg-cyan-950/40 border border-cyan-900/50 rounded-xl text-cyan-400 font-semibold">
                LATAM
              </span>
              <span className="px-6 py-3 bg-emerald-950/40 border border-emerald-900/50 rounded-xl text-emerald-400 font-semibold">
                EMEA
              </span>
              <span className="px-6 py-3 bg-orange-950/40 border border-orange-900/50 rounded-xl text-orange-400 font-semibold">
                APAC (Coming Soon)
              </span>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
    </div>
  )
}
