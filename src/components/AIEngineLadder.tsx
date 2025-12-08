import { ArrowUp, ChevronDown, ChevronUp, Cpu, Users } from 'lucide-react'
import { useState } from 'react'

export default function AIEngineLadder() {
  const [expandedEngine, setExpandedEngine] = useState<number | null>(null)

  const engines = [
    {
      level: 1,
      label: 'Market Intelligence',
      color: 'from-blue-900/40 to-blue-800/40',
      border: 'border-blue-700/40',
      aiOnly: true,
      outcomes: [
        'Executive insights report with 10 key findings',
        'Global competitor landscape map',
        'White space opportunity analysis',
        'Market sizing with confidence scoring',
        '5-year revenue capture model',
      ],
    },
    {
      level: 2,
      label: 'Strategy & Program Design',
      color: 'from-blue-800/50 to-blue-700/50',
      border: 'border-blue-600/50',
      aiOnly: false,
      outcomes: [
        'Competitor program structures & 1,500+ partner networks revealed',
        'Tier 1-3 partner targeting with AI-ranked priority scoring',
        'Validated partners already selling similar solutions',
        'Program blueprint built from competitive intelligence',
        '12-month go-to-market roadmap',
      ],
    },
    {
      level: 3,
      label: 'Partner Discovery & Outreach',
      color: 'from-blue-700/60 to-blue-600/60',
      border: 'border-blue-500/60',
      aiOnly: false,
      outcomes: [
        'Partner List Import: Upload Tier 1/2/3 targets and build acquisition projects instantly',
        'Sales Navigator Sync: Connect license for real-time partner organisation scanning',
        'AI Contact Finder: Auto-pulls 8-12 decision makers per partner (VP Sales, CRO, CEO, etc.)',
        'Partner Project Builder: Full profiles with notes, ICP fit, strategic insights & guidance',
        'Automated Outreach Sequences: AI sends connection requests, follow-ups, and emails',
        'AI Reply Assistant: Reads messages, scores interest, drafts responses, recommends next steps',
        'Meeting Scheduling Automation: AI checks calendars, books meetings, sends reminders',
        'Partner Meeting Toolkit: AI-built deck, program overview, agreement templates',
      ],
    },
    {
      level: 4,
      label: 'Enablement & Activation',
      color: 'from-blue-600/70 to-blue-500/70',
      border: 'border-blue-400/70',
      aiOnly: false,
      outcomes: [
        'Training content & certification frameworks',
        'Joint value propositions & battlecards',
        'Co-marketing materials & campaign blueprints',
        'Partner portal setup workflows',
        'Activation campaigns ready to launch',
      ],
    },
    {
      level: 5,
      label: 'Deal Intelligence & Execution',
      color: 'from-blue-500/80 to-blue-400/80',
      border: 'border-blue-300/80',
      aiOnly: false,
      outcomes: [
        'Full PRM automation (portal, deal reg, MDF tracking)',
        'AI deal scoring with win likelihood prediction',
        'Pipeline progression alerts & recommendations',
        'Co-sell playbooks generated automatically',
        'Revenue projection & forecasting',
      ],
    },
    {
      level: 6,
      label: 'Analytics & Optimization',
      color: 'from-blue-400/90 to-blue-300/90',
      border: 'border-blue-200/90',
      aiOnly: false,
      outcomes: [
        'Real-time revenue dashboards',
        'Partner performance analytics & health scoring',
        'ROI vs Win Scenario reporting',
        'Automated QBR generation',
        'Predictive optimization recommendations',
      ],
    },
  ]

  const toggleEngine = (level: number) => {
    setExpandedEngine(expandedEngine === level ? null : level)
  }

  return (
    <div className="relative max-w-3xl mx-auto my-8">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-400/40 to-blue-300/60 hidden md:block" />

      <div className="space-y-3">
        {engines.map((engine, index) => (
          <div key={engine.level} className="relative">
            {index > 0 && (
              <div className="absolute -top-1.5 left-8 transform -translate-x-1/2 hidden md:block z-10">
                <ArrowUp className="text-blue-400/60" size={16} />
              </div>
            )}

            <div className="md:ml-16">
              <button
                onClick={() => toggleEngine(engine.level)}
                className={`w-full bg-gradient-to-r ${engine.color} border ${engine.border} rounded-lg p-4 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${engine.color} border-2 ${engine.border} flex items-center justify-center`}>
                      <span className="text-blue-100 font-bold text-lg">{engine.level}</span>
                    </div>
                  </div>

                  <div className="flex-1 text-left">
                    <div className="text-blue-200 text-xs font-semibold mb-1">
                      AI Engine Level {engine.level}
                    </div>
                    <div className="text-white font-bold text-sm md:text-base">
                      {engine.label}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="hidden sm:block flex-shrink-0">
                      <div className="text-blue-300/60 text-xs font-medium bg-blue-950/40 px-3 py-1 rounded-full border border-blue-700/30">
                        Pack {engine.level}
                      </div>
                    </div>
                    <div className="text-blue-300">
                      {expandedEngine === engine.level ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </div>
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedEngine === engine.level
                    ? 'max-h-[500px] opacity-100 mt-2'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="bg-slate-800/60 backdrop-blur-sm border border-blue-700/30 rounded-lg p-5 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    {engine.aiOnly ? (
                      <div className="flex items-center gap-2 bg-blue-950/50 border border-blue-600/30 rounded-full px-3 py-1.5">
                        <Cpu className="text-blue-400" size={16} />
                        <span className="text-blue-300 text-xs font-semibold">AI Only</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-blue-950/50 border border-blue-600/30 rounded-full px-3 py-1.5">
                          <Cpu className="text-blue-400" size={16} />
                          <span className="text-blue-300 text-xs font-semibold">AI Powered</span>
                        </div>
                        <div className="flex items-center gap-2 bg-green-950/50 border border-green-600/30 rounded-full px-3 py-1.5">
                          <Users className="text-green-400" size={16} />
                          <span className="text-green-300 text-xs font-semibold">Human Support Available</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <h4 className="text-white font-semibold text-sm mb-3">Core Outcomes:</h4>
                  <ul className="space-y-2.5">
                    {engine.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5" />
                        <span className="text-slate-300 text-sm leading-relaxed">{outcome}</span>
                      </li>
                    ))}
                  </ul>
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
