import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const aboutLinks = [
  { label: 'Our Approach', to: '/about#our-approach' },
  { label: 'Our Team', to: '/about#our-team' },
  { label: 'Testimonials', to: '/#testimonials' },
]

const treatmentColumns = [
  {
    title: 'Restorative Care',
    to: '/services#modern-dentistry',
    items: ['Dental Implants', 'Fixed Bridges & Crowns', 'Dentures', 'Broken Tooth Reconstruction'],
  },
  {
    title: 'Cosmetic Dentistry',
    to: '/services#cosmetic-dentistry',
    items: ['Smile Designing', 'Teeth Whitening', 'Tooth-Coloured Fillings', 'Facial Aesthetics'],
  },
  {
    title: 'Endodontics',
    to: '/services#root-canal-treatment',
    items: ['Root Canal Treatment', 'Dental Pain Relief', 'Swelling & Infection Care', 'Traumatic Tooth Care'],
  },
  {
    title: 'Orthodontics',
    to: '/services#orthodontic-dentistry',
    items: ['Invisible Aligners', 'Metal Braces', 'Ceramic Braces', 'Bite Correction'],
  },
  {
    title: 'General Dentistry',
    to: '/services#general-dentistry',
    items: ['Cleaning & Scaling', 'Bad Breath Management', 'Tooth Extraction', 'Oral & Facial Pain'],
  },
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
                  <span>›</span>{item.label}
                </Link>
              ))}
            </div>
          </li>
          <li className="navbar__dropdown navbar__dropdown--mega">
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
              Treatments <span className="navbar__plus">+</span>
            </NavLink>
            <div className="navbar__dropdown-menu navbar__dropdown-menu--wide">
              {treatmentColumns.map((column) => (
                <div key={column.title} className="navbar__treatment-column">
                  <Link to={column.to} className="navbar__treatment-title">
                    <span className="navbar__tooth" aria-hidden="true">◆</span>
                    {column.title}
                  </Link>
                  <div className="navbar__treatment-list">
                    {column.items.map((item) => (
                      <Link key={item} to={column.to} className="navbar__dropdown-link">
                        <span>›</span>{item}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </li>
          <li><Link to="/about#our-team">Consultants</Link></li>
          <li><NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : '')}>Gallery</NavLink></li>
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
            <Link key={item.label} to={item.to} onClick={closeMenu}>› {item.label}</Link>
          ))}
        </div>
        <NavLink to="/services" onClick={closeMenu}>Treatments</NavLink>
        <div className="navbar__mobile-group">
          {treatmentColumns.map((column) => (
            <Link key={column.title} to={column.to} onClick={closeMenu}>› {column.title}</Link>
          ))}
        </div>
        <Link to="/about#our-team" onClick={closeMenu}>Consultants</Link>
        <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        <Link to="/contact" className="btn-gold" onClick={closeMenu}>
          <span>Book a Consultation</span>
        </Link>
      </div>
    </nav>
  )
}
