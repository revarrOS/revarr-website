import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import EngineEcosystem from '../components/EngineEcosystem';

export default function DealRoutingEngine() {
  return (
    <div className="min-h-screen bg-slate-950">
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/20 via-fuchsia-950/30 to-slate-950"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Deal Routing Engine
            </h1>
            <p className="text-3xl md:text-4xl text-slate-300 mb-16">
              Coming in 2026!
            </p>

            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-2 border-cyan-500/30 rounded-3xl p-12 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Channel Blueprint now Live
              </h2>
              <Link
                to="/product/channel-blueprint"
                className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-cyan-500/25"
              >
                Get Instant Access to Engine Level 1
                <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-b from-slate-950 via-violet-950/20 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Part of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">7-Level AI Engine</span> System
            </h2>
            <p className="text-xl text-slate-400">See where this engine fits in the complete partner revenue lifecycle.</p>
          </div>
          <EngineEcosystem currentEngine="co-sell-deal-routing" />
        </div>
      </section>
    </div>
  );
}
