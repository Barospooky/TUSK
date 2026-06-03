import React, { useState } from 'react'
import './PageCommon.css'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '', date: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => setForm({ ...form, [event.target.name]: event.target.value })

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__inner">
          <span className="section-label">Get In Touch</span>
          <h1 className="page-hero__title">Book an <span className="gold-shimmer">Appointment</span></h1>
          <p className="page-hero__subtitle">Share your concern and our team will guide you to the right consultation or treatment.</p>
        </div>
      </div>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="section-label">Find Us</span>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>We're Here <span>For You</span></h2>
            <div className="divider">
              <div className="divider-line" />
              <span className="divider-icon">◆</span>
              <div className="divider-line" />
            </div>

            {[
              {
                icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>),
                title: 'Location',
                lines: ['D-202, New Raikar Chambers', 'Opposite Neelkanth Apartments, Deonar, Mumbai - 400088'],
              },
              {
                icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.1 11.28 19.79 19.79 0 01.07 2.69 2 2 0 012.07.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006 6l.87-.87a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 15.22v1.7z"/></svg>),
                title: 'Phone',
                lines: ['+91 98765 43210', 'Call or WhatsApp for appointments'],
              },
              {
                icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>),
                title: 'Email',
                lines: ['hello@tuskdental.com', 'appointments@tuskdental.com'],
              },
              {
                icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>),
                title: 'Hours',
                lines: ['Mon - Sat: 9:00 AM - 8:00 PM', 'Sunday: By appointment'],
              },
            ].map((item) => (
              <div key={item.title} className="contact-info-item">
                <div className="contact-info-item__icon">{item.icon}</div>
                <div>
                  <div className="contact-info-item__title">{item.title}</div>
                  {item.lines.map((line) => (
                    <div key={line} className="contact-info-item__line">{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success__icon">◆</div>
                <h3>Appointment Request Received</h3>
                <p>Thank you, <strong>{form.name}</strong>. Our team will confirm your appointment within 24 hours.</p>
                <button className="btn-gold" onClick={() => setSubmitted(false)}><span>Book Another</span></button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="contact-form__title">Book Your Appointment</h3>
                <div className="divider">
                  <div className="divider-line" />
                  <span className="divider-icon">◆</span>
                  <div className="divider-line" />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input className="form-input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input className="form-input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Service Needed</label>
                    <select className="form-input form-select" name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      <option>Smile Designing & Aesthetics</option>
                      <option>Root Canal & Pain Relief</option>
                      <option>Braces / Aligners</option>
                      <option>Dental Implants</option>
                      <option>Crowns / Bridges / Dentures</option>
                      <option>Cleaning / Scaling / Bad Breath</option>
                      <option>Tooth Extraction / Surgical Care</option>
                      <option>General Check-up</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Preferred Date</label>
                    <input className="form-input" type="date" name="date" value={form.date} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Message / Concerns</label>
                  <textarea className="form-input form-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your dental concern..." rows="4" />
                </div>

                <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Request Appointment</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
