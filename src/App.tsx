import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AuthProvider } from './contexts/AuthContext'
import Header from './components/Header'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import ScrollToTop from './components/ScrollToTop'
import Analytics, { initializeAnalytics } from './components/Analytics'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Download from './pages/Download'
import Login from './pages/Login'
import Pricing from './pages/Pricing'
import Checkout from './pages/Checkout'
import Partners from './pages/Partners'
import Blog from './pages/Blog'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import AdminConversation from './pages/AdminConversation'
import ValueVisualization from './pages/ValueVisualization'
import ChannelBlueprint from './pages/ChannelBlueprint'
import PartnerIntelligenceEngine from './pages/PartnerIntelligenceEngine'
import PartnerAcquisitionEngine from './pages/PartnerAcquisitionEngine'
import PartnerEnablementEngine from './pages/PartnerEnablementEngine'
import PartnerRevenueIntelligenceEngine from './pages/PartnerRevenueIntelligenceEngine'
import ChannelGrowthEngine from './pages/ChannelGrowthEngine'
import CoSellDealRoutingEngine from './pages/CoSellDealRoutingEngine'
import CoSellEngine from './pages/CoSellEngine'
import ChannelAnalytics from './pages/ChannelAnalytics'
import DealRoutingEngine from './pages/DealRoutingEngine'

function AppContent() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <div className="min-h-screen bg-slate-950">
      <ScrollToTop />
      <Analytics />
      {!isAdminRoute && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/channel-blueprint" element={<ChannelBlueprint />} />
        <Route path="/product/partner-intelligence-engine" element={<PartnerIntelligenceEngine />} />
        <Route path="/product/partner-map-engine" element={<PartnerIntelligenceEngine />} />
        <Route path="/product/partner-acquisition-engine" element={<PartnerAcquisitionEngine />} />
        <Route path="/product/partner-enablement-engine" element={<PartnerEnablementEngine />} />
        <Route path="/product/partner-enablement-hub" element={<PartnerEnablementEngine />} />
        <Route path="/product/partner-revenue-intelligence-engine" element={<PartnerRevenueIntelligenceEngine />} />
        <Route path="/product/co-sell-engine" element={<CoSellEngine />} />
        <Route path="/product/channel-growth-engine" element={<ChannelGrowthEngine />} />
        <Route path="/product/channel-analytics" element={<ChannelAnalytics />} />
        <Route path="/product/cosell-deal-routing-engine" element={<CoSellDealRoutingEngine />} />
        <Route path="/product/deal-routing-engine" element={<DealRoutingEngine />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/download" element={<Download />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/value" element={<ValueVisualization />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/conversations/:id" element={<AdminConversation />} />
      </Routes>
      {!isAdminRoute && <ChatWidget />}
      {!isAdminRoute && <Footer />}
    </div>
  )
}

function App() {
  useEffect(() => {
    initializeAnalytics()
  }, [])

  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  )
}

export default App
