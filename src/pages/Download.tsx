import { useNavigate } from 'react-router-dom'
import { Download as DownloadIcon, FileText, Calculator, BarChart, Smartphone } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

export default function Download() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const resources = [
    {
      icon: FileText,
      title: 'Methodology Guide',
      description: 'Complete overview of the 6-stage framework',
      format: 'PDF',
    },
    {
      icon: FileText,
      title: 'Channel Readiness Assessment',
      description: 'Self-assessment worksheet',
      format: 'PDF Template',
    },
    {
      icon: Calculator,
      title: 'Partner Economics Calculator',
      description: 'Excel template for modeling margins',
      format: 'XLSX',
    },
    {
      icon: BarChart,
      title: 'ROI Case Studies',
      description: 'Success stories and results',
      format: 'PDF',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Started with revARR
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Access the platform, resources, and tools to transform your channel strategy.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">revARR Platform</h2>
            <p className="text-slate-300 mb-6">
              For existing customers and trial users. Access the full revARR platform to manage your channel program.
            </p>
            {user ? (
              <button
                onClick={() => window.location.href = '/app'}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all"
              >
                Go to Platform
              </button>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/login')}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate('/pricing')}
                  className="px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-xl font-medium transition-all"
                >
                  Don't have an account? Start your free trial
                </button>
              </div>
            )}
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 hover:border-slate-600 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <resource.icon className="text-blue-400" size={24} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                      <p className="text-slate-400 text-sm mb-4">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 text-xs font-bold uppercase">{resource.format}</span>
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all text-sm inline-flex items-center gap-2">
                          <DownloadIcon size={16} />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Smartphone className="text-blue-400" size={24} />
              Mobile App
            </h2>
            <p className="text-slate-300 mb-6">
              Access revARR on the go with our mobile applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-slate-900 border border-slate-700 rounded-lg px-6 py-3 inline-flex items-center gap-3">
                <div className="text-white font-bold">App Store</div>
                <span className="text-slate-500 text-sm">Coming Soon</span>
              </div>
              <div className="bg-slate-900 border border-slate-700 rounded-lg px-6 py-3 inline-flex items-center gap-3">
                <div className="text-white font-bold">Google Play</div>
                <span className="text-slate-500 text-sm">Coming Soon</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">System Requirements</h2>
            <div className="grid md:grid-cols-2 gap-6 text-slate-300">
              <div>
                <h3 className="font-bold text-white mb-3">Browser Compatibility</h3>
                <ul className="space-y-2 text-sm">
                  <li>Chrome 90+</li>
                  <li>Firefox 88+</li>
                  <li>Safari 14+</li>
                  <li>Edge 90+</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-white mb-3">Recommended Specs</h3>
                <ul className="space-y-2 text-sm">
                  <li>4GB RAM minimum</li>
                  <li>Stable internet connection</li>
                  <li>1920x1080 display or higher</li>
                  <li>JavaScript enabled</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
