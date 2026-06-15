import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const aboutLinks = [
  { label: 'Our Approach', to: '/about#our-approach' },
  { label: 'Gallery', to: '/about#gallery' },
  { label: 'Our Team', to: '/about#our-team' },
  { label: 'Testimonials', to: '/#testimonials' },
]

const serviceLinks = [
  { label: 'Root Canal Treatment', to: '/services#root-canal-treatment' },
  { label: 'Cosmetic Dentistry', to: '/services#cosmetic-dentistry' },
  { label: 'Modern Dentistry', to: '/services#modern-dentistry' },
  { label: 'Orthodontic Dentistry', to: '/services#orthodontic-dentistry' },
  { label: 'General Dentistry', to: '/services#general-dentistry' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img src="/tusk-logo.jpeg" alt="The Tusk Dental Clinic" className="navbar__logo-image" />
          <div className="navbar__brand">
            <span className="navbar__brand-title">The Tusk Dental Clinic</span>
            <span className="navbar__brand-subtitle">Premium Dental Care</span>
          </div>
        </Link>

        <ul className="navbar__links">
          <li><NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
          <li className="navbar__dropdown">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
              About Us <span className="navbar__chevron">▾</span>
            </NavLink>
            <div className="navbar__dropdown-menu">
              {aboutLinks.map((item) => (
                <Link key={item.label} to={item.to} className="navbar__dropdown-link">
                  <span>→</span>{item.label}
                </Link>
              ))}
            </div>
          </li>
          <li><Link to="/about#gallery">Gallery</Link></li>
          <li className="navbar__dropdown">
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
              Our Services <span className="navbar__chevron">▾</span>
            </NavLink>
            <div className="navbar__dropdown-menu navbar__dropdown-menu--wide">
              {serviceLinks.map((item) => (
                <Link key={item.label} to={item.to} className="navbar__dropdown-link">
                  <span>→</span>{item.label}
                </Link>
              ))}
            </div>
          </li>
          <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
        </ul>

        <Link to="/contact" className="btn-gold navbar__cta">
          <span>Book a Consultation</span>
        </Link>

        <button
          type="button"
          className={`navbar__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
        <div className="navbar__mobile-group">
          {aboutLinks.map((item) => (
            <Link key={item.label} to={item.to} onClick={closeMenu}>→ {item.label}</Link>
          ))}
        </div>
        <Link to="/about#gallery" onClick={closeMenu}>Gallery</Link>
        <NavLink to="/services" onClick={closeMenu}>Our Services</NavLink>
        <div className="navbar__mobile-group">
          {serviceLinks.map((item) => (
            <Link key={item.label} to={item.to} onClick={closeMenu}>→ {item.label}</Link>
          ))}
        </div>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        <Link to="/contact" className="btn-gold" onClick={closeMenu}>
          <span>Book a Consultation</span>
        </Link>
      </div>
    </nav>
  )
}
