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
    to: '/services#restorative-care',
    items: [
      { label: 'Dental Implants', to: '/services#dental-implants' },
      { label: 'Fixed Bridges & Crowns', to: '/services#fixed-bridges-and-crowns' },
      { label: 'Dentures', to: '/services#removable-complete-and-partial-dentures' },
      { label: 'Broken Tooth Reconstruction', to: '/services#broken-tooth-reconstruction' },
    ],
  },
  {
    title: 'Cosmetic Dentistry',
    to: '/services#cosmetic-dentistry',
    items: [
      { label: 'Smile Designing', to: '/services#smile-designing' },
      { label: 'Teeth Whitening', to: '/services#teeth-whitening-and-bleaching' },
      { label: 'Tooth-Coloured Fillings', to: '/services#tooth-coloured-cosmetic-fillings' },
      { label: 'Facial Aesthetics', to: '/services#facial-aesthetics' },
    ],
  },
  {
    title: 'Endodontics',
    to: '/services#endodontics',
    items: [
      { label: 'Root Canal Treatment', to: '/services#root-canal-treatment' },
      { label: 'Dental Pain Relief', to: '/services#severe-dental-pain-due-to-infection' },
      { label: 'Swelling & Infection Care', to: '/services#dental-swelling-and-infection-management' },
      { label: 'Traumatic Tooth Care', to: '/services#broken-and-traumatic-tooth-care' },
    ],
  },
  {
    title: 'Orthodontics',
    to: '/services#orthodontics',
    items: [
      { label: 'Invisible Aligners', to: '/services#invisible-aligners' },
      { label: 'Metal Braces', to: '/services#metal-braces' },
      { label: 'Ceramic Braces', to: '/services#ceramic-braces' },
      { label: 'Bite Correction', to: '/services#orthodontic-consultation-and-diagnosis' },
    ],
  },
  {
    title: 'General Dentistry',
    to: '/services#general-dentistry',
    items: [
      { label: 'Cleaning & Scaling', to: '/services#professional-cleaning-scaling' },
      { label: 'Bad Breath Management', to: '/services#bad-breath-management' },
      { label: 'Tooth Extraction', to: '/services#tooth-extraction-surgical-removal' },
      { label: 'Oral & Facial Pain', to: '/services#oral-and-facial-pain-management' },
    ],
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
                      <Link key={item.label} to={item.to} className="navbar__dropdown-link">
                        <span>›</span>{item.label}
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
