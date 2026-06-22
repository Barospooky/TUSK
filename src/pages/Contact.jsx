import React, { useState } from 'react'
import './PageCommon.css'
import './Contact.css'

const MIN_DATE = new Date().toISOString().split('T')[0]
const PHONE_REGEX = /^[0-9]{10}$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const CLINIC_WHATSAPP = '919876543210'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '', date: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Full name is required.'
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required.'
    } else if (!PHONE_REGEX.test(form.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit phone number.'
    }
    if (form.email && !EMAIL_REGEX.test(form.email)) {
      newErrors.email = 'Enter a valid email address.'
    }
    if (!form.service) newErrors.service = 'Please select a treatment.'
    if (form.date && form.date < MIN_DATE) {
      newErrors.date = 'Date cannot be in the past.'
    }
    return newErrors
  }

  const handlePhoneInput = (e) => {
    // Allow only digits, spaces, +, -, ()
    const cleaned = e.target.value.replace(/[^0-9+\-() ]/g, '')
    setForm((prev) => ({ ...prev, phone: cleaned }))
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const whatsappMessage = [
      'Hello, I would like to request an appointment at The Tusk Dental Clinic.',
      '',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Email: ${form.email.trim() || 'Not provided'}`,
      `Treatment: ${form.service}`,
      `Preferred date: ${form.date || 'Not specified'}`,
      `Message / concerns: ${form.message.trim() || 'Not provided'}`,
    ].join('\n')

    const whatsappUrl = `https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(whatsappMessage)}`
    setSubmitted(true)
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
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
        <div className="container">
          {/* Form + Map Grid */}
          <div className="contact-grid">
            <div className="contact-form-wrap">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success__icon">◆</div>
                  <h3>Thank You, {form.name}!</h3>
                  <p>Your appointment request has been received. Our team will contact you within <strong>24 hours</strong> to confirm your appointment.</p>
                  <button className="btn-gold" onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', message: '', date: '' }) }}>
                    <span>Book Another</span>
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <h3 className="contact-form__title">Contact Us</h3>
                  <div className="divider">
                    <div className="divider-line" />
                    <span className="divider-icon">◆</span>
                    <div className="divider-line" />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">Full Name *</label>
                      <input
                        id="contact-name"
                        className={`form-input${errors.name ? ' form-input--error' : ''}`}
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        aria-required="true"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && <span className="form-error" id="name-error" role="alert">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-phone">Phone Number *</label>
                      <input
                        id="contact-phone"
                        className={`form-input${errors.phone ? ' form-input--error' : ''}`}
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handlePhoneInput}
                        placeholder="10-digit mobile number"
                        required
                        aria-required="true"
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        maxLength={15}
                      />
                      {errors.phone && <span className="form-error" id="phone-error" role="alert">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      className={`form-input${errors.email ? ' form-input--error' : ''}`}
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && <span className="form-error" id="email-error" role="alert">{errors.email}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-service">Treatment Needed *</label>
                      <select
                        id="contact-service"
                        className={`form-input form-select${errors.service ? ' form-input--error' : ''}`}
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-describedby={errors.service ? 'service-error' : undefined}
                      >
                        <option value="">Select a treatment</option>
                        <option>Smile Designing &amp; Aesthetics</option>
                        <option>Root Canal &amp; Pain Relief</option>
                        <option>Braces / Aligners</option>
                        <option>Dental Implants</option>
                        <option>Crowns / Bridges / Dentures</option>
                        <option>Cleaning / Scaling / Bad Breath</option>
                        <option>Tooth Extraction / Surgical Care</option>
                        <option>General Check-up</option>
                        <option>Other</option>
                      </select>
                      {errors.service && <span className="form-error" id="service-error" role="alert">{errors.service}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-date">Preferred Date</label>
                      <input
                        id="contact-date"
                        className={`form-input${errors.date ? ' form-input--error' : ''}`}
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        min={MIN_DATE}
                        aria-describedby={errors.date ? 'date-error' : undefined}
                      />
                      {errors.date && <span className="form-error" id="date-error" role="alert">{errors.date}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">Message / Concerns</label>
                    <textarea
                      id="contact-message"
                      className="form-input form-textarea"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your dental concern..."
                      rows="4"
                    />
                  </div>

                  <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                    <span>Request Appointment</span>
                  </button>
                  <p className="form-privacy">🔒 Your information is safe with us. We never share your data.</p>
                </form>
              )}
            </div>

            <div className="contact-sidebar">
              {/* Contact Info Row */}
              <div className="contact-info-row">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    ),
                    title: 'Location',
                    lines: ['D-202, New Raikar Chambers', 'Opposite Neelkanth Apartments, Deonar, Mumbai - 400088'],
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.1 11.28 19.79 19.79 0 01.07 2.69 2 2 0 012.07.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006 6l.87-.87a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 15.22v1.7z"/>
                      </svg>
                    ),
                    title: 'Phone',
                    lines: ['+91 98765 43210', 'Call or WhatsApp for appointments'],
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                    ),
                    title: 'Email',
                    lines: ['hello@tuskdental.com', 'appointments@tuskdental.com'],
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                      </svg>
                    ),
                    title: 'Hours',
                    lines: ['Mon – Sat: 9:00 AM – 8:00 PM', 'Sunday: By appointment only'],
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

              {/* Google Maps Embed */}
              <div className="contact-map-wrap">
                <iframe
                  title="The Tusk Dental Clinic Location"
                  src="https://www.google.com/maps?q=The%20Tusk%20Dental%20Clinic%2C%2019.0526664%2C72.9157856&z=15&output=embed"
                  className="contact-map"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Map showing The Tusk Dental Clinic location in Deonar, Mumbai"
                />
                <a
                  href="https://www.google.com/maps/place/The+Tusk+Dental+Clinic/@19.0526858,72.8973315,15z/data=!3m1!4b1!4m6!3m5!1s0x3be7c7f18e58f7a7:0x802a81c789286de7!8m2!3d19.0526664!4d72.9157856!16s%2Fg%2F11y_bf1f4m?entry=ttu&amp;g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-map-link"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
