import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const quickStats = [
  { value: '18', label: 'Years in Practice' },
  { value: '2,400+', label: 'Patients Treated' },
  { value: '4', label: 'Specialist Doctors' },
]

const brandMarks = ['Invisalign', 'Nobel Biocare', 'Straumann', 'Dentsply Sirona', 'CEREC']

const services = [
  {
    title: 'Smile Designing & Aesthetics',
    copy: 'Smile designing, veneers, laminates, bleaching, and facial aesthetic treatments planned for natural-looking enhancement.',
    image: '/service-aesthetic.jpeg',
  },
  {
    title: 'Braces & Aligners',
    copy: 'Metal braces, ceramic braces, and invisible aligners for crooked teeth, bite correction, and confident smile alignment.',
    image: '/hero-clinic-bg.png',
  },
  {
    title: 'Root Canal & Pain Relief',
    copy: 'Root canal treatment, dental pain care, swelling management, and fractured tooth treatment focused on preserving teeth.',
    image: '/hero-implant.png',
  },
  {
    title: 'Missing Teeth & Surgical Care',
    copy: 'Implants, dentures, crowns, bridges, cleaning, bad breath care, and tooth extraction or surgical removal when needed.',
    image: '/service-preventive.jpeg',
  },
]

const transformations = [
  {
    category: 'Aesthetic Dentistry',
    title: 'Full Smile Reconstruction',
    image: '/transform-case.jpeg',
    variant: 'wide',
  },
  {
    category: 'Orthodontics',
    title: 'Invisalign Alignment',
    image: '/transform-doctor-female.jpeg',
    variant: 'tall',
  },
  {
    category: 'Implantology',
    title: 'Single Tooth Implant',
    image: '/transform-doctor-male.jpeg',
    variant: 'small',
  },
  {
    category: 'Clinical Design',
    title: 'Refined Treatment Space',
    image: '/transform-clinic-room.jpeg',
    variant: 'small',
  },
]

const doctors = [
  {
    name: 'Dr. Swapnil Yelmar',
    role: 'Consultant Orthodontist',
    experience: '4 years of experience',
    bio: 'Dr. Swapnil Yelmar is a dedicated Consultant Orthodontist specializing in advanced smile corrections and dentofacial orthopaedics. Trained at Government Dental College, Mumbai, he combines clinical precision with a patient-centric approach to deliver functional, aesthetic results.',
    image: '/dr-swapnil-yelmar.jpeg',
  },
  {
    name: 'Dr. Heti Sunil Kacha',
    role: 'Consultant Oral and Maxillofacial Surgeon',
    experience: '2+ years of consultant practice',
    bio: 'Dr. Heti Sunil Kacha is skilled in oral and maxillofacial surgery, facial esthetics, and critical care management. She focuses on tailored treatment planning and collaborative interdisciplinary care to deliver precise, patient-centered outcomes.',
    image: '/dr-heti-kacha.jpeg',
  },
  {
    name: 'Dr. Balasubramaniam Shankar',
    role: 'Endodontist',
    experience: 'Specialist endodontic care',
    bio: 'Dr. Balasubramaniam Shankar focuses on endodontic treatment with an emphasis on precise diagnosis, tooth preservation, and comfortable patient care.',
    image: '/dr-balasubramaniam-shankar.jpeg',
  },
]

const storyPoints = [
  {
    label: 'Clinical Environment',
    text: 'Designed for calm consultations, thoughtful pacing, and a premium treatment experience from arrival to review.',
  },
  {
    label: 'Precision Planning',
    text: 'Every case is mapped with digital diagnostics and careful sequencing so treatment feels clear, not overwhelming.',
  },
  {
    label: 'Personal Attention',
    text: 'We stay focused on comfort, communication, and natural-looking outcomes that genuinely fit the patient.',
  },
]

const testimonials = [
  {
    text: 'Dr. Bauer’s eye for aesthetics is remarkable. She preserved what was natural and enhanced what needed to be. My result looks completely real.',
    author: 'L. V., Milan',
    meta: 'Smile Design · Porcelain Veneers',
  },
  {
    text: 'The whitening results surpassed what I thought was possible. Two shades lighter without any sensitivity. Their approach to preventive dentistry is genuinely ahead of the curve.',
    author: 'S. H., Munich',
    meta: 'Whitening · Preventive Care',
  },
  {
    text: 'I’ve seen specialists across Europe, but the attention to detail here felt different. Every option was explained clearly before treatment began.',
    author: 'M. H., Vienna',
    meta: 'Full Smile Transformation · Veneers + Whitening',
  },
  {
    text: 'Everything was planned with precision. My implant was placed in one session, and months later it still feels entirely like my own tooth.',
    author: 'T. K., London',
    meta: 'Implantology · Full Arch',
  },
  {
    text: 'The aligner journey was smoother than expected. The team stayed patient, accessible, and deeply invested in getting every refinement right.',
    author: 'A. R., Dubai',
    meta: 'Invisalign · Bite Refinement',
  },
]

const footerLinks = ['Privacy Policy', 'Cookie Policy', 'Terms of Use', 'Imprint']

export default function Home() {
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    document.querySelectorAll('.reveal').forEach((element) => {
      observerRef.current.observe(element)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="home home-refined">
      <section className="reference-hero">
        <div className="reference-hero__bg">
          <div className="reference-hero__photo" />
          <div className="reference-hero__shape reference-hero__shape--monitor" />
          <div className="reference-hero__shape reference-hero__shape--chair" />
          <div className="reference-hero__shape reference-hero__shape--cabinet" />
          <div className="reference-hero__shape reference-hero__shape--glass" />
          <div className="reference-hero__shape reference-hero__shape--ceiling" />
          <div className="reference-hero__overlay" />
        </div>

        <div className="container reference-hero__inner">
          <div className="reference-hero__content">
            <h1 className="reference-hero__title animate-in delay-1">
              Your smile,
              <span>refined.</span>
            </h1>

            <p className="reference-hero__copy animate-in delay-2">
              Modern dentistry with a luxury-clinic feel, built around calm consultations,
              precision treatment, and beautifully finished smiles.
            </p>

            <div className="reference-hero__actions animate-in delay-3">
              <Link to="/contact" className="btn-gold reference-hero__primary">
                <span>Book a Consultation</span>
              </Link>
              <Link to="/services" className="reference-hero__secondary">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="reference-hero__visual animate-in delay-2">
            <div className="implant-visual">
              <img
                src="/hero-implant.png"
                alt="Dental implant visual"
                className="implant-visual__image implant-visual__image--scene"
              />
            </div>
          </div>
        </div>

        <div className="reference-hero__footer animate-in delay-4">
          <div className="container reference-hero__footer-inner">
            <div className="reference-hero__stats">
              {quickStats.map((stat) => (
                <div key={stat.label} className="reference-hero__stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="reference-hero__brands">
              {brandMarks.map((mark) => (
                <span key={mark}>{mark}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section standard-strip reveal">
        <div className="container standard-strip__inner">
          <div className="standard-strip__left">
            <h2 className="standard-strip__title">
              The standard
              <span>others aspire to.</span>
            </h2>
            <p className="standard-strip__copy">
              Thoughtful dentistry with a premium clinical environment, refined workflows,
              and treatment planning built to make every visit feel calm and confident.
            </p>

            <div className="standard-strip__image-frame">
              <img
                src="/hero-clinic-bg.png"
                alt="The Tusk Dental Clinic interior"
                className="standard-strip__image"
              />
            </div>
          </div>

          <div className="standard-strip__right">
            {services.map((service, index) => (
              <article key={service.title} className="standard-point">
                <span className="standard-point__index">{String(index + 1).padStart(2, '0')}</span>
                <div className="standard-point__body">
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-panel reveal">
        <div className="container">
          <div className="services-panel__card">
            <h2 className="services-panel__title">
              Our <span>services.</span>
            </h2>

            <div className="services-panel__grid">
              {services.map((service) => (
                <article key={service.title} className="service-tile">
                  <div className="service-tile__image-wrap">
                    <img src={service.image} alt={service.title} className="service-tile__image" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section transformations-strip reveal">
        <div className="container">
          <h2 className="transformations-strip__title">
            Transformations that
            <span>speak for themselves.</span>
          </h2>

          <div className="transformations-grid">
            {transformations.map((item) => (
              <article
                key={item.title}
                className={`transformation-card transformation-card--${item.variant}`}
              >
                <img src={item.image} alt={item.title} className="transformation-card__image" />
                <div className="transformation-card__overlay" />
                <div className="transformation-card__content">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="doctors-panel reveal">
        <div className="container">
          <div className="doctors-panel__card">
            <h2 className="doctors-panel__title">
              Meet our <span>doctors.</span>
            </h2>

            <div className="doctors-panel__grid">
              {doctors.map((doctor, index) => (
                <article key={`${doctor.name}-${index}`} className="doctor-item">
                  <div className="doctor-item__avatar-wrap">
                    <img src={doctor.image} alt={doctor.name} className="doctor-item__avatar" />
                  </div>

                  <div className="doctor-item__body">
                    <h3>{doctor.name}</h3>
                    <span className="doctor-item__role">{doctor.role}</span>
                    <div className="doctor-item__divider" />
                    <span className="doctor-item__experience">{doctor.experience}</span>
                    <p>{doctor.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section story-strip reveal">
        <div className="container story-strip__inner">
          <div className="story-strip__intro">
            <h2 className="story-strip__title">
              We built The Tusk because
              <span>patients deserve better.</span>
            </h2>

            <p className="story-strip__copy">
              The clinic was shaped around one simple belief: exceptional dental care should
              feel calm, considered, and deeply personal from the first conversation onward.
            </p>

            <div className="story-strip__feature-image">
              <img src="/story-hallway.jpeg" alt="The Tusk clinic hallway" className="story-strip__image" />
              <div className="story-strip__quote">
                <p>"Every detail in the clinic is designed to make treatment feel clearer and more comfortable."</p>
                <span>The Tusk Dental Clinic</span>
              </div>
            </div>
          </div>

          <div className="story-strip__details">
            <div className="story-strip__top-image">
              <img src="/story-reception.jpeg" alt="The Tusk consultation area" className="story-strip__image" />
            </div>

            <div className="story-strip__points">
              {storyPoints.map((point) => (
                <article key={point.label} className="story-point">
                  <span>{point.label}</span>
                  <p>{point.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials-strip reveal">
        <div className="container">
          <div className="testimonials-strip__header">
            <h2 className="testimonials-strip__title">
              What our patients <span>say.</span>
            </h2>

            <div className="testimonials-strip__rating">
              <div className="testimonials-strip__stars">★★★★★</div>
              <div className="testimonials-strip__score">4.9 <span>(2,100 reviews)</span></div>
              <div className="testimonials-strip__avatars">
                <img src="/doctor-female-2.jpeg" alt="" />
                <img src="/doctor-male-1.jpeg" alt="" />
                <img src="/transform-doctor-male.jpeg" alt="" />
                <img src="/transform-doctor-female.jpeg" alt="" />
                <img src="/tusk-logo.jpeg" alt="" />
              </div>
            </div>
          </div>

          <div className="testimonials-strip__marquee">
            <div className="testimonials-strip__track">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <article
                  key={`${testimonial.author}-${testimonial.meta}-${index}`}
                  className="testimonial-card-premium"
                >
                  <div className="testimonial-card-premium__stars">★★★★★</div>
                  <p className="testimonial-card-premium__text">"{testimonial.text}"</p>
                  <div className="testimonial-card-premium__footer">
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.meta}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="consultation-strip-dark reveal">
        <div className="container consultation-strip-dark__inner">
          <div className="consultation-strip-dark__image-panel">
            <img
              src="/story-reception.jpeg"
              alt="The Tusk consultation space"
              className="consultation-strip-dark__image"
            />
          </div>

          <div className="consultation-strip-dark__content">
            <h2 className="consultation-strip-dark__title">
              Start your smile
              <span>journey today.</span>
            </h2>

            <p className="consultation-strip-dark__copy">
              Book a complimentary consultation with one of our specialists. We will create
              a personalised treatment plan with full transparency on timeline and cost.
            </p>

            <form className="consultation-form">
              <input type="text" placeholder="Your Name *" />
              <input type="tel" placeholder="Phone Number *" />
              <input type="email" placeholder="Email Address (optional)" />
              <select defaultValue="">
                <option value="" disabled>Select Service (optional)</option>
                <option>Aesthetic Dentistry</option>
                <option>Invisalign & Orthodontics</option>
                <option>Implantology</option>
                <option>Preventive Care</option>
              </select>
              <textarea placeholder="Message (optional)" rows="5" />
              <button type="submit" className="btn-gold consultation-form__button">
                <span>Request Consultation</span>
              </button>
              <p className="consultation-form__note">We respect your privacy. No spam, ever.</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="home-footer reveal">
        <div className="container home-footer__inner">
          <div className="home-footer__col">
            <span className="home-footer__eyebrow">The Tusk Clinic</span>
            <p>D-202, New Raikar Chambers</p>
            <p>Opposite Neelkanth Apartments, Deonar, Mumbai - 400088</p>
            <a href="https://maps.google.com" className="home-footer__link">View on Google Maps</a>
          </div>

          <div className="home-footer__brand">
            <h3>The Tusk Dental Clinic</h3>
            <p>Thoughtful dental care where precision meets elegance.</p>
            <div className="home-footer__socials">
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="Facebook">fb</a>
              <a href="#" aria-label="WhatsApp">wa</a>
              <a href="#" aria-label="Email">@</a>
            </div>
          </div>

          <div className="home-footer__col home-footer__col--right">
            <span className="home-footer__eyebrow">Opening Hours</span>
            <p>Mon - Fri: 8:00 - 19:00</p>
            <p>Saturday: 9:00 - 14:00</p>
            <p>Sunday: Closed</p>

            <div className="home-footer__legal">
              {footerLinks.map((item) => (
                <a key={item} href="#">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
