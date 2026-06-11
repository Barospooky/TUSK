import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

const PHONE = '+919876543210'
const WHATSAPP_MSG = encodeURIComponent('Hi, I would like to book a consultation at The Tusk Dental Clinic.')

function AppContent() {
  const location = useLocation()

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
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      {/* Floating WhatsApp Button (Desktop) */}
      <a
        href={`https://wa.me/${PHONE}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M11.99 2C6.476 2 2 6.477 2 12c0 1.99.584 3.84 1.585 5.396L2 22l4.738-1.558A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.514 2 11.99 2z"/>
        </svg>
        <span>WhatsApp</span>
      </a>

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
