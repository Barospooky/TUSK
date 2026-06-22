import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import './App.css'

const PHONE = '+919876543210'
const WHATSAPP_MSG = encodeURIComponent('Hi, I would like to book a consultation at The Tusk Dental Clinic.')

function AppContent() {
  const location = useLocation()
  const isContactPage = location.pathname === '/contact'
  const [socialMenuOpen, setSocialMenuOpen] = React.useState(false)

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    window.setTimeout(() => {
      const target = document.querySelector(location.hash)
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }, [location.pathname, location.hash])

  return (
    <div className="page-wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!isContactPage && <Footer />}

      {/* Expandable social contact menu (Desktop) */}
      <div className={`social-float ${socialMenuOpen ? 'social-float--open' : ''}`}>
        <div className="social-float__menu" id="social-contact-menu" aria-hidden={!socialMenuOpen}>
          <button type="button" className="social-float__action social-float__action--instagram" aria-label="Instagram link coming soon" title="Instagram link coming soon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </button>
          <button type="button" className="social-float__action social-float__action--facebook" aria-label="Facebook link coming soon" title="Facebook link coming soon">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8.5V7c0-.8.5-1 1-1h2V2.5h-3c-3.3 0-4 2.5-4 4V8.5H8V12h2v9.5h4V12h2.8l.5-3.5H14Z"/></svg>
          </button>
          <a href={`https://wa.me/${PHONE}?text=${WHATSAPP_MSG}`} target="_blank" rel="noreferrer" className="social-float__action social-float__action--whatsapp" aria-label="Chat on WhatsApp">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.5 11.6a8.5 8.5 0 0 1-12.4 7.5L3 20.6l1.5-5A8.5 8.5 0 1 1 20.5 11.6Z" />
              <path d="M8.2 7.6c.3-.3.7-.4 1-.1l1.2 2.1c.2.3.1.6-.1.8l-.7.8c.8 1.6 2 2.8 3.6 3.6l.8-.9c.2-.3.6-.3.9-.2l2.1 1c.3.2.5.5.4.9-.2 1.1-1.2 1.9-2.3 1.9-3.9-.2-8.2-4.3-8.5-8.1-.1-.7.2-1.3.6-1.8Z" />
            </svg>
          </a>
        </div>
        <button type="button" className="social-float__toggle" onClick={() => setSocialMenuOpen((open) => !open)} aria-label={socialMenuOpen ? 'Close social contact menu' : 'Open social contact menu'} aria-expanded={socialMenuOpen} aria-controls="social-contact-menu">
          <svg className="social-float__toggle-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 14.5a4.5 4.5 0 0 1-4.5 4.5H9l-5 3 1.6-4.5A8 8 0 1 1 20 14.5Z" />
            <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
          </svg>
        </button>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="mobile-cta-bar">
        <a href={`tel:${PHONE}`} className="mobile-cta-bar__call" aria-label="Call us">
          📞 Call
        </a>
        <a
          href={`https://wa.me/${PHONE}?text=${WHATSAPP_MSG}`}
          target="_blank"
          rel="noreferrer"
          className="mobile-cta-bar__whatsapp"
          aria-label="WhatsApp us"
        >
          💬 WhatsApp
        </a>
        <Link to="/contact" className="mobile-cta-bar__book" aria-label="Book consultation">
          Book Consultation
        </Link>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
