import { ArrowUp } from 'lucide-react'

export default function AIEngineLadder() {
  const engines = [
    { level: 1, label: 'Market Intelligence', color: 'from-blue-900/40 to-blue-800/40', border: 'border-blue-700/40' },
    { level: 2, label: 'Strategy & Program Design', color: 'from-blue-800/50 to-blue-700/50', border: 'border-blue-600/50' },
    { level: 3, label: 'Partner Discovery & Outreach', color: 'from-blue-700/60 to-blue-600/60', border: 'border-blue-500/60' },
    { level: 4, label: 'Enablement & Activation', color: 'from-blue-600/70 to-blue-500/70', border: 'border-blue-400/70' },
    { level: 5, label: 'Deal Intelligence & Execution', color: 'from-blue-500/80 to-blue-400/80', border: 'border-blue-300/80' },
    { level: 6, label: 'Analytics & Optimization', color: 'from-blue-400/90 to-blue-300/90', border: 'border-blue-200/90' },
  ]

  return (
    <div className="relative max-w-3xl mx-auto my-8">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-400/40 to-blue-300/60 hidden md:block" />

      <div className="space-y-3">
        {engines.map((engine, index) => (
          <div key={engine.level} className="relative">
            {index > 0 && (
              <div className="absolute -top-1.5 left-8 transform -translate-x-1/2 hidden md:block">
                <ArrowUp className="text-blue-400/60" size={16} />
              </div>
            )}

            <div className={`bg-gradient-to-r ${engine.color} border ${engine.border} rounded-lg p-4 md:ml-16 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10`}>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${engine.color} border-2 ${engine.border} flex items-center justify-center`}>
                    <span className="text-blue-100 font-bold text-lg">{engine.level}</span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="text-blue-200 text-xs font-semibold mb-1">
                    AI Engine Level {engine.level}
                  </div>
                  <div className="text-white font-bold text-sm md:text-base">
                    {engine.label}
                  </div>
                </div>

                <div className="hidden sm:block flex-shrink-0">
                  <div className="text-blue-300/60 text-xs font-medium bg-blue-950/40 px-3 py-1 rounded-full border border-blue-700/30">
                    Pack {engine.level}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-blue-950/30 border border-blue-600/30 rounded-lg p-4 text-center">
        <p className="text-blue-200 text-sm font-medium">
          All previous AI engines remain active at every level
        </p>
        <p className="text-blue-300/70 text-xs mt-1">
          Each pack compounds value — you never lose what came before
        </p>
      </div>
    </div>
  )
}
