import React, { useState } from 'react';
import { ArrowRight, Target, TrendingUp, Shield, Zap, Users, Lightbulb, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function ValueVisualization() {
  const [activeModule, setActiveModule] = useState<'module1' | 'module2' | 'both'>('both');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm mb-4">
            Level 1: Channel Blueprint • Modules 1-2 of 8
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            The Value Journey
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From "Who am I competing against?" to "Exactly where to strike" — in just 2 modules
          </p>
        </div>

        {/* Module Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveModule('module1')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeModule === 'module1'
                ? 'bg-emerald-500 text-white'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            Module 1 Only
          </button>
          <button
            onClick={() => setActiveModule('both')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeModule === 'both'
                ? 'bg-blue-500 text-white'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            Modules 1 + 2
          </button>
          <button
            onClick={() => setActiveModule('module2')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeModule === 'module2'
                ? 'bg-purple-500 text-white'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            Module 2 Only
          </button>
        </div>

        {/* Before State */}
        <div className="bg-red-950/30 border-2 border-red-500/50 rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            <h2 className="text-3xl font-bold text-red-400">Before revARR</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "❓ Who are my real competitors?",
              "❓ What market am I actually in?",
              "❓ How strong is my position?",
              "❓ Where am I vulnerable?",
              "❓ Who's the biggest threat?",
              "❓ What should I do first?",
              "❓ How do I compare across 10 dimensions?",
              "❓ Which competitors are weakest?"
            ].map((question, i) => (
              <div key={i} className="bg-red-900/20 rounded-lg p-4 text-red-200">
                {question}
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center my-8">
          <ArrowRight className="w-16 h-16 text-cyan-400 animate-pulse" />
        </div>

        {/* Module 1 Outcomes */}
        {(activeModule === 'module1' || activeModule === 'both') && (
          <div className="bg-gradient-to-br from-emerald-950/50 to-emerald-900/30 border-2 border-emerald-500/50 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-emerald-400" />
              <div>
                <h2 className="text-3xl font-bold text-emerald-400">Module 1: Market Position Snapshot</h2>
                <p className="text-emerald-300 text-sm">Complete market clarity in 15-30 seconds</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <OutcomeCard
                icon={<Target className="w-6 h-6" />}
                title="Strategic Position"
                value="Crystal Clear"
                description="Know exactly what market you're in, who you serve, and how you're positioned"
                color="emerald"
              />
              <OutcomeCard
                icon={<Users className="w-6 h-6" />}
                title="Competitive Landscape"
                value="18+ Competitors"
                description="AI identifies all direct threats and indirect alternatives automatically"
                color="emerald"
              />
              <OutcomeCard
                icon={<TrendingUp className="w-6 h-6" />}
                title="Market Growth Rate"
                value="10% CAGR"
                description="See real-time market size, growth rate, and expansion momentum"
                color="emerald"
              />
              <OutcomeCard
                icon={<Zap className="w-6 h-6" />}
                title="Growth Tailwinds"
                value="3 Key Segments"
                description="Market segments with strong growth supporting your expansion"
                color="emerald"
              />
              <OutcomeCard
                icon={<Shield className="w-6 h-6" />}
                title="Market Maturity"
                value="Growth Stage"
                description="Understand if market is emerging, growing, or saturated"
                color="emerald"
              />
              <OutcomeCard
                icon={<Lightbulb className="w-6 h-6" />}
                title="Key Market Trends"
                value="High Impact"
                description="Critical dynamics shaping the competitive landscape"
                color="emerald"
              />
            </div>

            <div className="mt-8 bg-emerald-900/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-emerald-400 mb-4">User Now Knows:</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "✓ Their exact market position and category",
                  "✓ All 18+ competitors (direct + indirect)",
                  "✓ Market size, growth rate, and opportunity",
                  "✓ High-level competitive strengths/weaknesses",
                  "✓ Market trends and growth tailwinds",
                  "✓ Strategic positioning clarity"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-emerald-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Module 2 Outcomes */}
        {(activeModule === 'module2' || activeModule === 'both') && (
          <div className="bg-gradient-to-br from-purple-950/50 to-blue-900/30 border-2 border-purple-500/50 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-purple-400" />
              <div>
                <h2 className="text-3xl font-bold text-purple-400">Module 2: Competitor Strength Ranking</h2>
                <p className="text-purple-300 text-sm">10-category tactical intelligence per competitor</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <OutcomeCard
                icon={<Shield className="w-6 h-6" />}
                title="Your Strength Profile"
                value="10 Categories"
                description="Deep self-analysis: Market Position, GTM, Brand, Innovation, Lock-in, Sales, Pricing, Partnerships, Funding"
                color="purple"
              />
              <OutcomeCard
                icon={<Target className="w-6 h-6" />}
                title="Competitor Threat Scores"
                value="0-100 Scale"
                description="Every competitor gets overall threat score - lower = weaker = opportunity"
                color="purple"
              />
              <OutcomeCard
                icon={<Zap className="w-6 h-6" />}
                title="Traffic-Light Scoring"
                value="Green vs Red"
                description="Instantly see where you're stronger (green) vs weaker (red) in each category"
                color="purple"
              />
              <OutcomeCard
                icon={<Users className="w-6 h-6" />}
                title="Vulnerability Analysis"
                value="Per Competitor"
                description="Detailed breakdown of each competitor's strategic weaknesses to exploit"
                color="purple"
              />
              <OutcomeCard
                icon={<Lightbulb className="w-6 h-6" />}
                title="Tactical Intelligence"
                value="Live Data"
                description="HQ location, pricing structure, sales footprint, GTM strategy"
                color="purple"
              />
              <OutcomeCard
                icon={<TrendingUp className="w-6 h-6" />}
                title="Strategic Assessment"
                value="AI-Powered"
                description="Benchmarking protocols showing exactly how they compare to you"
                color="purple"
              />
            </div>

            <div className="mt-8 bg-purple-900/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">User Now Has:</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "✓ Their complete competitive strength profile (10 dimensions)",
                  "✓ Threat scores for every analyzed competitor",
                  "✓ Category-by-category win/loss analysis",
                  "✓ Competitor vulnerabilities mapped and prioritized",
                  "✓ Executive intelligence reports (exportable)",
                  "✓ Tactical data: pricing, GTM, funding, partnerships",
                  "✓ Strategic recommendations on where to strike",
                  "✓ Battle-ready competitive intelligence"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-purple-200">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Combined Value */}
        {activeModule === 'both' && (
          <div className="bg-gradient-to-br from-cyan-950/50 to-blue-950/50 border-2 border-cyan-500/50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-cyan-400">The Complete Transformation</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-2">0 → 100%</div>
                <div className="text-slate-300">Market Clarity</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">18+</div>
                <div className="text-slate-300">Competitors Identified & Scored</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-emerald-400 mb-2">10×10</div>
                <div className="text-slate-300">Categories × Competitors Analyzed</div>
              </div>
            </div>

            <div className="mt-8 bg-cyan-900/20 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">From Modules 1 + 2, Users Can Now:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "🎯 Know exactly who they're competing against",
                  "📊 See their complete market position snapshot",
                  "💪 Understand their competitive strengths across 10 dimensions",
                  "🎲 Identify the weakest competitors to target first",
                  "⚡ Exploit specific vulnerabilities in each competitor",
                  "📈 Track market growth and position themselves in tailwinds",
                  "🛡️ Shore up their own weaknesses before competitors exploit them",
                  "💰 Build data-driven sales and marketing battle cards"
                ].map((item, i) => (
                  <div key={i} className="bg-cyan-900/30 rounded-lg p-4 text-cyan-100 font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Context Footer */}
        <div className="mt-16 text-center bg-slate-800/50 rounded-xl p-8">
          <div className="text-sm text-slate-400 mb-4">THIS IS JUST 2 OF 8 MODULES IN LEVEL 1</div>
          <div className="text-2xl font-bold mb-2">
            <span className="text-cyan-400">6 More Modules</span>
            <span className="text-slate-400"> in Level 1 • </span>
            <span className="text-purple-400">6 More Products</span>
            <span className="text-slate-400"> Beyond This</span>
          </div>
          <div className="text-slate-300 mt-4">
            And users already have actionable competitive intelligence from just the first 2 modules
          </div>
        </div>
      </div>
    </div>
  );
}

interface OutcomeCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  color: 'emerald' | 'purple' | 'cyan';
}

function OutcomeCard({ icon, title, value, description, color }: OutcomeCardProps) {
  const colorClasses = {
    emerald: 'from-emerald-900/40 to-emerald-800/20 border-emerald-500/30',
    purple: 'from-purple-900/40 to-purple-800/20 border-purple-500/30',
    cyan: 'from-cyan-900/40 to-cyan-800/20 border-cyan-500/30'
  };

  const iconColorClasses = {
    emerald: 'text-emerald-400',
    purple: 'text-purple-400',
    cyan: 'text-cyan-400'
  };

  const valueColorClasses = {
    emerald: 'text-emerald-400',
    purple: 'text-purple-400',
    cyan: 'text-cyan-400'
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} border rounded-xl p-6 hover:scale-105 transition-transform`}>
      <div className={`${iconColorClasses[color]} mb-3`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <div className={`text-2xl font-bold ${valueColorClasses[color]} mb-3`}>{value}</div>
      <p className="text-sm text-slate-300">{description}</p>
    </div>
  );
}
