import { Mail, Phone, MapPin, Briefcase } from 'lucide-react'

export default function Company() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About revARR
            </h1>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Company Overview</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                <span className="font-bold text-white">Legal Name:</span> revARR Inc.
              </p>
              <p>
                <span className="font-bold text-white">Founded:</span> 2022
              </p>
              <p>
                <span className="font-bold text-white">Mission:</span> To make channel growth predictable, measurable, and accessible to every B2B company through our proven methodology and technology platform.
              </p>
              <p>
                <span className="font-bold text-white">Core Values:</span>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Results over process</li>
                <li>Execution over consulting</li>
                <li>Data-driven decisions</li>
                <li>Partner success is our success</li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 text-center">
                <div className="w-24 h-24 bg-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-slate-400">JD</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">John Doe</h3>
                <p className="text-blue-400 text-sm mb-4">CEO & Co-Founder</p>
                <p className="text-slate-400 text-sm mb-4">
                  Former VP of Partnerships at leading SaaS companies. 15+ years building channel programs.
                </p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  LinkedIn →
                </a>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 text-center">
                <div className="w-24 h-24 bg-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-slate-400">JS</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Jane Smith</h3>
                <p className="text-blue-400 text-sm mb-4">CTO & Co-Founder</p>
                <p className="text-slate-400 text-sm mb-4">
                  Built channel platforms at scale. Expert in partner ecosystems and technology.
                </p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  LinkedIn →
                </a>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 text-center">
                <div className="w-24 h-24 bg-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-slate-400">MC</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Mike Chen</h3>
                <p className="text-blue-400 text-sm mb-4">VP of Channel Operations</p>
                <p className="text-slate-400 text-sm mb-4">
                  Channel execution expert. Led partner programs for Fortune 500 companies.
                </p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Briefcase className="text-blue-400" size={24} />
              Careers
            </h2>
            <p className="text-slate-300 mb-4">
              We're always looking for talented channel professionals, data analysts, and go-to-market experts to join our team.
            </p>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all">
              View Open Positions
            </button>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-400" size={24} />
                <div>
                  <div className="text-slate-400 text-sm">Email</div>
                  <a href="mailto:contact@revarr.com" className="text-white hover:text-blue-400 transition-all">
                    contact@revarr.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-blue-400" size={24} />
                <div>
                  <div className="text-slate-400 text-sm">Phone</div>
                  <div className="text-white">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-400" size={24} />
                <div>
                  <div className="text-slate-400 text-sm">Address</div>
                  <div className="text-white">123 Channel Street, San Francisco, CA 94105</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
