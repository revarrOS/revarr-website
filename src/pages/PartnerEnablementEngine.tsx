import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PartnerEnablementEngine() {
  return (
    <div className="min-h-screen bg-slate-950">
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/20 via-amber-950/30 to-slate-950"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent leading-tight">
              Partner Enablement Engine
            </h1>
            <p className="text-3xl md:text-4xl text-slate-300 mb-16">
              Coming in 2026!
            </p>

            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-2 border-cyan-500/30 rounded-3xl p-12 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Opportunity Intelligence Engine now Live
              </h2>
              <Link
                to="/product/opportunity-intelligence-engine"
                className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-cyan-500/25"
              >
                Click here for your free evaluation
                <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
