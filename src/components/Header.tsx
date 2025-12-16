import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductOpen, setIsProductOpen] = useState(false)
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const productRef = useRef<HTMLDivElement>(null)

  const handleLogout = async () => {
    await signOut()
    navigate('/')
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (productRef.current && !productRef.current.contains(event.target as Node)) {
        setIsProductOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinks = [
    { to: '/pricing', label: 'Pricing' },
    { to: '/partners', label: 'Partners' },
    { to: '/blog', label: 'Blog' },
    { to: '/about', label: 'About Us' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center group">
            <span className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight">
              <span className="text-[#1e3a8a]">rev</span>
              <span className="text-white">ARR</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-slate-400 hover:text-white transition-all text-lg font-semibold"
            >
              Home
            </Link>

            <div className="relative" ref={productRef}>
              <button
                onClick={() => setIsProductOpen(!isProductOpen)}
                className="flex items-center gap-1 text-slate-400 hover:text-white transition-all text-lg font-semibold"
              >
                Product
                <ChevronDown size={20} className={`transition-transform ${isProductOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProductOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden max-h-96 overflow-y-auto">
                  <Link
                    to="/product"
                    onClick={() => setIsProductOpen(false)}
                    className="block px-6 py-3 hover:bg-slate-700 transition-colors border-b border-slate-700"
                  >
                    <div className={`font-semibold text-sm ${location.pathname === '/product' ? 'text-cyan-400' : 'text-white'}`}>
                      revARR OS
                    </div>
                  </Link>
                  <Link
                    to="/product/channel-blueprint"
                    onClick={() => setIsProductOpen(false)}
                    className="block px-6 py-3 hover:bg-slate-700 transition-colors border-b border-slate-700 group"
                  >
                    <div className={`font-semibold text-sm ${location.pathname === '/product/channel-blueprint' ? 'text-cyan-400 group-hover:text-cyan-300' : 'text-white group-hover:text-cyan-300'}`}>
                      Channel Blueprint
                    </div>
                  </Link>
                  <Link
                    to="/product/partner-map-engine"
                    onClick={() => setIsProductOpen(false)}
                    className="block px-6 py-3 hover:bg-slate-700 transition-colors border-b border-slate-700 group"
                  >
                    <div className={`font-semibold text-sm ${location.pathname === '/product/partner-map-engine' ? 'text-cyan-400 group-hover:text-cyan-300' : 'text-white group-hover:text-cyan-300'}`}>
                      Partner Map
                    </div>
                  </Link>
                  <Link
                    to="/product/partner-acquisition-engine"
                    onClick={() => setIsProductOpen(false)}
                    className="block px-6 py-3 hover:bg-slate-700 transition-colors border-b border-slate-700 group"
                  >
                    <div className={`font-semibold text-sm ${location.pathname === '/product/partner-acquisition-engine' ? 'text-cyan-400 group-hover:text-cyan-300' : 'text-white group-hover:text-cyan-300'}`}>
                      Partner Acquisition Engine
                    </div>
                  </Link>
                  <Link
                    to="/product/partner-enablement-hub"
                    onClick={() => setIsProductOpen(false)}
                    className="block px-6 py-3 hover:bg-slate-700 transition-colors border-b border-slate-700 group"
                  >
                    <div className={`font-semibold text-sm ${location.pathname === '/product/partner-enablement-hub' ? 'text-cyan-400 group-hover:text-cyan-300' : 'text-white group-hover:text-cyan-300'}`}>
                      Partner Enablement Hub
                    </div>
                  </Link>
                  <Link
                    to="/product/co-sell-engine"
                    onClick={() => setIsProductOpen(false)}
                    className="block px-6 py-3 hover:bg-slate-700 transition-colors border-b border-slate-700 group"
                  >
                    <div className={`font-semibold text-sm ${location.pathname === '/product/co-sell-engine' ? 'text-cyan-400 group-hover:text-cyan-300' : 'text-white group-hover:text-cyan-300'}`}>
                      Co-Sell Engine
                    </div>
                  </Link>
                  <Link
                    to="/product/deal-routing-engine"
                    onClick={() => setIsProductOpen(false)}
                    className="block px-6 py-3 hover:bg-slate-700 transition-colors border-b border-slate-700 group"
                  >
                    <div className={`font-semibold text-sm ${location.pathname === '/product/deal-routing-engine' ? 'text-cyan-400 group-hover:text-cyan-300' : 'text-white group-hover:text-cyan-300'}`}>
                      Deal Routing Engine
                    </div>
                  </Link>
                  <Link
                    to="/product/channel-analytics"
                    onClick={() => setIsProductOpen(false)}
                    className="block px-6 py-3 hover:bg-slate-700 transition-colors group"
                  >
                    <div className={`font-semibold text-sm ${location.pathname === '/product/channel-analytics' ? 'text-cyan-400 group-hover:text-cyan-300' : 'text-white group-hover:text-cyan-300'}`}>
                      Channel Analytics
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-slate-400 hover:text-white transition-all text-lg font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <button
                  onClick={() => navigate('/admin/chats')}
                  className="flex items-center gap-2 px-5 py-3 text-slate-400 hover:text-white transition-all text-base font-semibold"
                >
                  <MessageCircle size={22} />
                  <span>Messages</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="px-8 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-xl font-semibold text-base transition-all"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="px-8 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-xl font-semibold text-base transition-all"
              >
                Login
              </button>
            )}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-400 hover:text-white transition-all py-2"
            >
              Home
            </Link>
            <div className="border-l-2 border-cyan-500 pl-4">
              <Link
                to="/product"
                onClick={() => setIsMenuOpen(false)}
                className={`block transition-all py-2 text-sm font-semibold ${location.pathname === '/product' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}
              >
                revARR OS
              </Link>
              <Link
                to="/product/channel-blueprint"
                onClick={() => setIsMenuOpen(false)}
                className={`block transition-all py-2 font-semibold text-sm ${location.pathname === '/product/channel-blueprint' ? 'text-cyan-400' : 'text-white hover:text-cyan-300'}`}
              >
                Channel Blueprint
              </Link>
              <Link
                to="/product/partner-map-engine"
                onClick={() => setIsMenuOpen(false)}
                className={`block transition-all py-2 font-semibold text-sm ${location.pathname === '/product/partner-map-engine' ? 'text-cyan-400' : 'text-white hover:text-cyan-300'}`}
              >
                Partner Map
              </Link>
              <Link
                to="/product/partner-acquisition-engine"
                onClick={() => setIsMenuOpen(false)}
                className={`block transition-all py-2 font-semibold text-sm ${location.pathname === '/product/partner-acquisition-engine' ? 'text-cyan-400' : 'text-white hover:text-cyan-300'}`}
              >
                Partner Acquisition Engine
              </Link>
              <Link
                to="/product/partner-enablement-hub"
                onClick={() => setIsMenuOpen(false)}
                className={`block transition-all py-2 font-semibold text-sm ${location.pathname === '/product/partner-enablement-hub' ? 'text-cyan-400' : 'text-white hover:text-cyan-300'}`}
              >
                Partner Enablement Hub
              </Link>
              <Link
                to="/product/co-sell-engine"
                onClick={() => setIsMenuOpen(false)}
                className={`block transition-all py-2 font-semibold text-sm ${location.pathname === '/product/co-sell-engine' ? 'text-cyan-400' : 'text-white hover:text-cyan-300'}`}
              >
                Co-Sell Engine
              </Link>
              <Link
                to="/product/deal-routing-engine"
                onClick={() => setIsMenuOpen(false)}
                className={`block transition-all py-2 font-semibold text-sm ${location.pathname === '/product/deal-routing-engine' ? 'text-cyan-400' : 'text-white hover:text-cyan-300'}`}
              >
                Deal Routing Engine
              </Link>
              <Link
                to="/product/channel-analytics"
                onClick={() => setIsMenuOpen(false)}
                className={`block transition-all py-2 font-semibold text-sm ${location.pathname === '/product/channel-analytics' ? 'text-cyan-400' : 'text-white hover:text-cyan-300'}`}
              >
                Channel Analytics
              </Link>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-400 hover:text-white transition-all py-2"
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <>
                <button
                  onClick={() => {
                    navigate('/admin/chats')
                    setIsMenuOpen(false)
                  }}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-all py-2"
                >
                  <MessageCircle size={20} />
                  <span>Messages</span>
                </button>
                <button
                  onClick={() => {
                    handleLogout()
                    setIsMenuOpen(false)
                  }}
                  className="px-6 py-2 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-xl font-medium transition-all"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  navigate('/login')
                  setIsMenuOpen(false)
                }}
                className="px-6 py-2 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-xl font-medium transition-all"
              >
                Login
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
