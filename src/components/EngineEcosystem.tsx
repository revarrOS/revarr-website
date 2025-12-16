import { useNavigate } from 'react-router-dom'

interface EngineEcosystemProps {
  currentEngine: 'channel-blueprint' | 'partner-intelligence' | 'partner-acquisition' | 'partner-enablement' | 'partner-revenue-intelligence' | 'co-sell-deal-routing' | 'channel-growth'
}

export default function EngineEcosystem({ currentEngine }: EngineEcosystemProps) {
  const navigate = useNavigate()

  const engines = [
    {
      id: 'channel-blueprint',
      name: 'Channel Blueprint',
      shortDesc: 'Market intelligence',
      position: { top: '0', left: '50%', transform: 'translate(-50%, -4px)' },
      color: 'blue',
      route: '/product/channel-blueprint',
      isStart: true
    },
    {
      id: 'partner-intelligence',
      name: 'Partner Map',
      shortDesc: 'Partner landscape',
      position: { top: '15%', right: '8%', transform: 'translateY(-50%)' },
      color: 'cyan',
      route: '/product/partner-map-engine'
    },
    {
      id: 'partner-acquisition',
      name: 'Partner Acquisition',
      shortDesc: 'Recruit partners',
      position: { top: '50%', right: '8%', transform: 'translateY(-50%)' },
      color: 'emerald',
      route: '/product/partner-acquisition-engine'
    },
    {
      id: 'partner-enablement',
      name: 'Enablement Hub',
      shortDesc: 'Train & activate',
      position: { bottom: '15%', right: '18%', transform: 'translateY(50%)' },
      color: 'blue',
      route: '/product/partner-enablement-hub'
    },
    {
      id: 'partner-revenue-intelligence',
      name: 'Co-Sell Engine',
      shortDesc: 'Deal intelligence',
      position: { bottom: '8%', left: '50%', transform: 'translateX(-50%)' },
      color: 'cyan',
      route: '/product/co-sell-engine'
    },
    {
      id: 'co-sell-deal-routing',
      name: 'Deal Routing',
      shortDesc: 'Workflow automation',
      position: { bottom: '15%', left: '18%', transform: 'translateY(50%)' },
      color: 'emerald',
      route: '/product/deal-routing-engine'
    },
    {
      id: 'channel-growth',
      name: 'Channel Analytics',
      shortDesc: 'Leader dashboards',
      position: { top: '50%', left: '8%', transform: 'translateY(-50%)' },
      color: 'blue',
      route: '/product/channel-analytics'
    }
  ]

  return (
    <div className="relative max-w-5xl mx-auto py-12">
      <div className="relative aspect-square max-w-3xl mx-auto">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          <circle cx="200" cy="200" r="140" fill="none" stroke="url(#circleGradient)" strokeWidth="2" opacity="0.3" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="url(#circleGradient)" strokeWidth="1" opacity="0.2" />

          <g className="animate-pulse">
            <circle cx="200" cy="60" r="8" fill="#3b82f6" />
            <circle cx="314" cy="114" r="6" fill="#06b6d4" />
            <circle cx="314" cy="286" r="6" fill="#10b981" />
            <circle cx="200" cy="340" r="6" fill="#3b82f6" />
            <circle cx="86" cy="286" r="6" fill="#06b6d4" />
            <circle cx="86" cy="114" r="6" fill="#10b981" />
            <circle cx="200" cy="200" r="6" fill="#f59e0b" />
          </g>
        </svg>

        {engines.map((engine) => {
          const isCurrentEngine = engine.id === currentEngine
          const isOIE = engine.id === 'channel-blueprint'
          const isHighlighted = isCurrentEngine || isOIE

          return (
            <div
              key={engine.id}
              className="absolute"
              style={engine.position}
            >
              <button
                onClick={() => {
                  navigate(engine.route)
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
                }}
                className="group relative"
              >
                {isHighlighted && (
                  <div className={`absolute -inset-4 bg-gradient-to-r ${isOIE ? 'from-blue-600 to-cyan-600' : isCurrentEngine && engine.color === 'cyan' ? 'from-cyan-600 to-emerald-600' : isCurrentEngine && engine.color === 'emerald' ? 'from-emerald-600 to-blue-600' : 'from-blue-600 to-cyan-600'} rounded-2xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity`}></div>
                )}
                <div className={`relative bg-gradient-to-br ${isHighlighted ? `from-${engine.color}-950 to-black border-2 border-${engine.color}-500` : `from-${engine.color}-950/80 to-black border border-${engine.color}-800 hover:border-${engine.color}-500`} rounded-${isHighlighted ? '2xl p-6' : 'xl p-4'} hover:scale-105 transition-all`}>
                  <div className="text-center">
                    {isOIE && (
                      <div className="inline-flex items-center justify-center px-3 py-1 bg-blue-500 rounded-full text-white text-xs font-black mb-2">
                        START HERE
                      </div>
                    )}
                    {isCurrentEngine && !isOIE && (
                      <div className={`inline-flex items-center justify-center px-3 py-1 bg-${engine.color}-500 rounded-full text-white text-xs font-black mb-2`}>
                        YOU ARE HERE
                      </div>
                    )}
                    <div className={`${isHighlighted ? 'text-lg' : 'text-sm'} font-black text-white mb-1`}>
                      {engine.name}
                    </div>
                    <div className={`text-${engine.color}-400 text-xs ${isHighlighted ? 'font-bold' : ''}`}>
                      {engine.shortDesc}
                    </div>
                  </div>
                </div>
              </button>
            </div>
          )
        })}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-gradient-to-br from-orange-950/90 to-black border-2 border-orange-600 rounded-2xl p-6 shadow-2xl shadow-orange-500/20">
            <div className="text-center">
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-1">
                revARR OS
              </div>
              <div className="text-white text-xs font-bold">Central Intelligence</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 pt-8">
        <div className="bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 rounded-2xl p-6 text-center">
          <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
            1 System
          </div>
          <p className="text-slate-300">All engines work together</p>
        </div>
        <div className="bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 rounded-2xl p-6 text-center">
          <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-2">
            7 Engines
          </div>
          <p className="text-slate-300">Complete partner lifecycle</p>
        </div>
        <div className="bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 rounded-2xl p-6 text-center">
          <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-2">
            ∞ Revenue
          </div>
          <p className="text-slate-300">Compounds automatically</p>
        </div>
      </div>
    </div>
  )
}
