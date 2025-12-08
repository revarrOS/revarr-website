import { Check } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              We're Channel Growth Experts
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Built by channel veterans who've scaled partnerships at leading SaaS and technology companies.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                revARR was founded by channel leaders who experienced firsthand the challenges of building partner ecosystems from scratch. We know what works and what doesn't because we've done it ourselves at scale.
              </p>
              <p>
                Our mission is simple: make channel growth predictable, measurable, and accessible to every B2B company.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-white mb-2">25+ Years</div>
              <p className="text-slate-400">Combined channel experience</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-white mb-2">$500M+</div>
              <p className="text-slate-400">In channel revenue enabled</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <p className="text-slate-400">Partners activated</p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Our Approach</h2>
            <p className="text-2xl text-blue-400 font-bold mb-6">
              "We don't just consult. We execute."
            </p>
            <div className="text-slate-300 space-y-4">
              <p>
                We become your channel team. We build the strategy AND execute it. We measure results with data. We stay with you until you hit your goals.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Why revARR?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-slate-300">Proven methodology, not just theory</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-slate-300">Technology platform included</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-slate-300">Execution-focused, not just consulting</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-slate-300">Results-based pricing models available</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-slate-300">We only win when you win</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
