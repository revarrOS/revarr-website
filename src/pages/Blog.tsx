import { useState } from 'react'
import { BookOpen, TrendingUp, Users, Target, Lightbulb, ArrowRight } from 'lucide-react'
import FAQ from '../components/FAQ'
import { supabase } from '../lib/supabase'

export default function Blog() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { error: dbError } = await supabase
        .from('form_submissions')
        .insert([
          {
            type: 'blog_subscription',
            email
          }
        ])

      if (dbError) throw dbError

      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-form-email`
      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'blog_subscription',
          email
        })
      })

      setSuccess(true)
      setEmail('')
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }
  const faqs = [
    {
      question: "How often is new content published?",
      answer: "We publish new insights, strategies, and case studies weekly. Subscribe to our newsletter to get the latest content delivered directly to your inbox."
    },
    {
      question: "Can I suggest topics for future content?",
      answer: "Absolutely! We love hearing from our community. Email us at content@revarr.com with your topic suggestions and questions."
    },
    {
      question: "Is the content suitable for beginners?",
      answer: "Yes! We create content for all experience levels, from companies just starting to build partner programs to experienced partnership leaders looking to optimize their operations."
    },
    {
      question: "Can I contribute as a guest author?",
      answer: "We welcome guest contributions from partnership professionals, industry experts, and revARR customers. Contact us at content@revarr.com to discuss your ideas."
    },
    {
      question: "How can I stay updated with new posts?",
      answer: "Subscribe to our newsletter, follow us on LinkedIn and Twitter, or bookmark this page and check back regularly for new content."
    }
  ]

  const featuredArticles = [
    {
      category: 'Strategy',
      icon: Target,
      title: 'The 7 Stages of Partner Ecosystem Maturity',
      excerpt: 'Understanding where your partner program sits on the maturity curve is critical to making the right investments. Learn how to identify your stage and what actions to take next.',
      readTime: '8 min read',
      color: 'blue'
    },
    {
      category: 'Revenue',
      icon: TrendingUp,
      title: 'How to Forecast Partner-Sourced Revenue Accurately',
      excerpt: 'Stop guessing at partner pipeline. Learn the frameworks and signals top companies use to predict partner revenue with 85%+ accuracy.',
      readTime: '12 min read',
      color: 'emerald'
    },
    {
      category: 'Enablement',
      icon: Users,
      title: 'Partner Onboarding: From 6 Months to 6 Days',
      excerpt: 'Traditional partner onboarding wastes time and burns relationships. Discover how modern companies activate partners 10x faster using automation.',
      readTime: '10 min read',
      color: 'cyan'
    },
    {
      category: 'Intelligence',
      icon: Lightbulb,
      title: 'Competitive Partner Intelligence: What to Track and Why',
      excerpt: 'Your competitors\' partner moves tell you everything about their strategy. Learn which signals matter and how to use them to your advantage.',
      readTime: '15 min read',
      color: 'orange'
    }
  ]

  const topics = [
    { name: 'Partner Strategy', count: 24, color: 'blue' },
    { name: 'Revenue Operations', count: 18, color: 'emerald' },
    { name: 'Channel Enablement', count: 15, color: 'cyan' },
    { name: 'Co-Sell Programs', count: 12, color: 'orange' },
    { name: 'Partner Acquisition', count: 20, color: 'pink' },
    { name: 'Market Intelligence', count: 16, color: 'indigo' }
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string, border: string, text: string, icon: string }> = {
      blue: { bg: 'from-blue-950/40 to-blue-900/20', border: 'border-blue-800/50', text: 'text-blue-400', icon: 'text-blue-400' },
      emerald: { bg: 'from-emerald-950/40 to-emerald-900/20', border: 'border-emerald-800/50', text: 'text-emerald-400', icon: 'text-emerald-400' },
      cyan: { bg: 'from-cyan-950/40 to-cyan-900/20', border: 'border-cyan-800/50', text: 'text-cyan-400', icon: 'text-cyan-400' },
      orange: { bg: 'from-orange-950/40 to-orange-900/20', border: 'border-orange-800/50', text: 'text-orange-400', icon: 'text-orange-400' },
      pink: { bg: 'from-pink-950/40 to-pink-900/20', border: 'border-pink-800/50', text: 'text-pink-400', icon: 'text-pink-400' },
      indigo: { bg: 'from-indigo-950/40 to-indigo-900/20', border: 'border-indigo-800/50', text: 'text-indigo-400', icon: 'text-indigo-400' }
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-20 pb-16 px-6 overflow-hidden border-b border-blue-900/30 bg-gradient-to-br from-blue-950/30 to-black">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-bold mb-8">
            <BookOpen size={16} />
            BLOG & INSIGHTS
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-8">
            Partner Ecosystem<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              Knowledge Hub
            </span>
          </h1>

          <p className="text-2xl sm:text-3xl text-slate-300 max-w-3xl mx-auto mb-12 leading-tight">
            Strategies, insights, and expert knowledge to help you build, enable, and scale high-performing partner ecosystems.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-900/50 border border-slate-700 rounded-xl">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent text-white placeholder-slate-500 outline-none w-64"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {success ? 'Subscribed!' : loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {error && (
              <p className="text-red-400 text-sm mt-2">{error}</p>
            )}
          </form>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-black to-slate-950 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Articles</h2>
            <p className="text-slate-400 text-lg">Deep dives into partner ecosystem building</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => {
              const Icon = article.icon
              const colors = getColorClasses(article.color)
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-2xl p-8 hover:scale-[1.02] transition-all cursor-pointer group`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-slate-900/50 rounded-lg flex items-center justify-center`}>
                      <Icon className={colors.icon} size={20} />
                    </div>
                    <span className={`text-sm font-bold ${colors.text} uppercase tracking-wide`}>
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">{article.readTime}</span>
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all">
                      <span className="font-semibold">Read More</span>
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-black border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Browse by Topic</h2>
            <p className="text-slate-400 text-lg">Explore content organized by key partnership themes</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => {
              const colors = getColorClasses(topic.color)
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-xl p-6 hover:scale-105 transition-all cursor-pointer group`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {topic.name}
                      </h3>
                      <p className="text-slate-400 text-sm">{topic.count} articles</p>
                    </div>
                    <ArrowRight className={`${colors.text} group-hover:translate-x-1 transition-transform`} size={24} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-black to-slate-950 border-b border-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-950/40 to-cyan-950/20 border-2 border-blue-800/50 rounded-3xl p-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Coming Soon
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              We're building a comprehensive library of partnership strategies, frameworks, and case studies. Subscribe to be notified when we publish new content.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <div className="text-4xl font-black text-blue-400 mb-2">50+</div>
                <p className="text-slate-400">Articles Coming</p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <div className="text-4xl font-black text-cyan-400 mb-2">20+</div>
                <p className="text-slate-400">Case Studies</p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <div className="text-4xl font-black text-emerald-400 mb-2">10+</div>
                <p className="text-slate-400">Expert Contributors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />

      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get the latest partnership strategies and insights delivered to your inbox weekly.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-6 py-4 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {success ? 'Subscribed!' : loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}
