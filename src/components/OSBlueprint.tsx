import { Brain, Zap, Layers, ArrowRight } from 'lucide-react'

export default function OSBlueprint() {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-slate-700 rounded-3xl p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 space-y-8">
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm font-bold text-cyan-400 uppercase tracking-wider">The revARROS Architecture</p>
            <h3 className="text-3xl sm:text-4xl font-black text-white">
              Three Layers. Seven Engines. One Unified OS.
            </h3>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-950/50 to-blue-900/20 border-2 border-blue-700/50 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-blue-500/30">
                  <Brain className="text-blue-400" size={32} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/30">
                      LAYER 1
                    </span>
                    <h4 className="text-2xl font-bold text-white">Intelligence Layer</h4>
                  </div>
                  <p className="text-slate-300 text-lg">
                    The Brain: Ingests markets, competitors, partners, pricing, saturation, buyer sophistication — live, on-demand, zero human involvement.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="text-cyan-400 rotate-90" size={40} />
            </div>

            <div className="bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 border-2 border-cyan-700/50 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-cyan-500/30">
                  <Zap className="text-cyan-400" size={32} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                      LAYER 2
                    </span>
                    <h4 className="text-2xl font-bold text-white">Automation Layer</h4>
                  </div>
                  <p className="text-slate-300 text-lg mb-4">
                    The Nervous System: Where intelligence becomes action. All 56 features execute here.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['Engine 1', 'Engine 2', 'Engine 3', 'Engine 4', 'Engine 5', 'Engine 6', 'Engine 7', '56 Features'].map((item, i) => (
                      <div key={i} className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-3 py-2 text-center">
                        <p className="text-xs font-bold text-cyan-400">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="text-emerald-400 rotate-90" size={40} />
            </div>

            <div className="bg-gradient-to-br from-emerald-950/50 to-emerald-900/20 border-2 border-emerald-700/50 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-emerald-500/30">
                  <Layers className="text-emerald-400" size={32} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                      LAYER 3
                    </span>
                    <h4 className="text-2xl font-bold text-white">Execution Layer</h4>
                  </div>
                  <p className="text-slate-300 text-lg">
                    The Hands: Produces investor-ready reports, playbooks, blueprints, forecasts, dashboards, competitive breakdowns, deal coaching — instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-700 text-center">
            <p className="text-xl text-slate-300 mb-2">
              This is not a feature stack.
            </p>
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              This is a living system designed to think, learn, and execute.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
