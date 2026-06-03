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
              <a href="#" className="footer__social" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" className="footer__social" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="footer__social" aria-label="WhatsApp">
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
