import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=D-202%2C%20New%20Raikar%20Chambers%2C%20Deonar%2C%20Mumbai%20400088'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__ornament">
        <div className="footer__ornament-line" />
        <div className="footer__ornament-diamond">◆</div>
        <div className="footer__ornament-line" />
      </div>

      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo-link" aria-label="The Tusk Dental Clinic home">
              <img src="/tusk-logo.jpeg" alt="The Tusk Dental Clinic logo" className="footer__logo-image" />
              <div className="footer__logo">
                <span className="footer__logo-the">The</span>
                <span className="footer__logo-name">Tusk</span>
                <span className="footer__logo-sub">Dental Clinic</span>
              </div>
            </Link>
            <p className="footer__tagline">
              Diagnosis-led dental care for healthier teeth, confident smiles, and comfortable visits.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social footer__social--facebook" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="footer__social footer__social--instagram" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="footer__social footer__social--whatsapp" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.99 2C6.476 2 2 6.477 2 12c0 1.99.584 3.84 1.585 5.396L2 22l4.738-1.558A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.514 2 11.99 2z"/></svg>
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Navigation</h4>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Treatments</h4>
            <ul className="footer__links">
              <li><Link to="/services#cosmetic-dentistry">Smile Designing</Link></li>
              <li><Link to="/services#root-canal-treatment">Root Canal</Link></li>
              <li><Link to="/services#orthodontic-dentistry">Braces & Aligners</Link></li>
              <li><Link to="/services#modern-dentistry">Dental Implants</Link></li>
              <li><Link to="/services#general-dentistry">Cleaning & Scaling</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Visit Us</h4>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>D-202, New Raikar Chambers, Deonar, Mumbai - 400088</span>
              </div>
              <a href={mapUrl} target="_blank" rel="noreferrer" className="footer__map-link">
                View on Google Maps
              </a>
              <div className="footer__contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.1 11.28 19.79 19.79 0 01.07 2.69 2 2 0 012.07.5h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006 6l.87-.87a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 15.22v1.7z"/></svg>
                <span>+91 98765 43210</span>
              </div>
              <div className="footer__contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>hello@tuskdental.com</span>
              </div>
              <div className="footer__contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 The Tusk Dental Clinic. All rights reserved.</p>
          <p>Comfortable care for every smile ◆</p>
        </div>
      </div>
    </footer>
  )
}
