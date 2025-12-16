import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Github, Mail, Phone } from 'lucide-react'
import SocialShare from './SocialShare'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-12">
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-white">revARR</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              The world's first Partner-Led Revenue Operating System.
              Build, enable, and scale your partner ecosystem in 20 minutes.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:contact@revarr.com"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Platform</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/product" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/solution" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Solution
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Partner Program
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide font-semibold mb-2">Support</p>
                <div className="space-y-2">
                  <a href="tel:+18885551234" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm">
                    <Phone size={14} />
                    <span>US: +1 (888) 555-1234</span>
                  </a>
                  <a href="tel:+442012345678" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm">
                    <Phone size={14} />
                    <span>UK: +44 20 1234 5678</span>
                  </a>
                  <a href="tel:+493012345678" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm">
                    <Phone size={14} />
                    <span>DE: +49 30 1234 5678</span>
                  </a>
                </div>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide font-semibold mb-2">Sales</p>
                <div className="space-y-2">
                  <a href="tel:+18885555678" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm">
                    <Phone size={14} />
                    <span>US: +1 (888) 555-5678</span>
                  </a>
                  <a href="tel:+442087654321" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm">
                    <Phone size={14} />
                    <span>UK: +44 20 8765 4321</span>
                  </a>
                  <a href="tel:+493087654321" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm">
                    <Phone size={14} />
                    <span>DE: +49 30 8765 4321</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/eula" className="text-slate-400 hover:text-white transition-colors text-sm">
                  EULA
                </Link>
              </li>
              <li>
                <Link to="/msa" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Master Service Agreement
                </Link>
              </li>
              <li>
                <Link to="/admin/login" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} revARR. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <SocialShare />
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <span>Built with</span>
                <span className="text-red-500">♥</span>
                <span>for partner-led revenue teams</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
