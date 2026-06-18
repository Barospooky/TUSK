import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const quickStats = [
  { value: '100+', label: 'Happy Patients' },
  { value: '15', label: 'Years in Practice' },
  { value: '3', label: 'Specialist Doctors' },
]

const services = [
  {
    title: 'Smile Designing & Aesthetics',
    copy: 'Smile designing, veneers, laminates, bleaching, and facial aesthetic treatments planned for natural-looking enhancement.',
    image: '/service-smile-designing.png',
  },
  {
    title: 'Braces & Aligners',
    copy: 'Metal braces, ceramic braces, and invisible aligners for crooked teeth, bite correction, and confident smile alignment.',
    image: '/service-invisible-aligners.png',
  },
  {
    title: 'Root Canal & Pain Relief',
    copy: 'Root canal treatment, dental pain care, swelling management, and fractured tooth treatment focused on preserving teeth.',
    image: '/service-root-canal-treatment.png',
  },
  {
    title: 'Missing Teeth & Surgical Care',
    copy: 'Implants, dentures, fixed bridges, tooth-coloured and metal caps, surgical extractions, and mouth or facial pain management when needed.',
    image: '/service-dental-implants.png',
  },
]

const homeTreatmentPreview = [
  { title: 'Dental Implants', desc: 'Permanent tooth replacement for confident smile and chewing support.', icon: 'implant' },
  { title: 'Fixed Bridges & Crowns', desc: 'Natural-looking restoration and seamless gap replacement.', icon: 'crown' },
  { title: 'Removable Dentures', desc: 'Comfortable full or partial removable denture replacement.', icon: 'dentures' },
  { title: 'Root Canal Treatment', desc: 'Pain-free root canal treatment focused on saving the natural tooth.', icon: 'root' },
  { title: 'Invisible Aligners', desc: 'Clear aligners for discreet tooth straightening.', icon: 'aligners' },
  { title: 'Teeth Whitening', desc: 'Professional whitening treatment for a brighter smile.', icon: 'sparkle' },
]

const treatmentIconPaths = {
  implant: 'M8.2 3.7c1.2-.8 2.6.2 3.8.2s2.6-1 3.8-.2c1.8 1.1 1.5 4.3.5 6.7-.7 1.7-1.1 3.4-1.4 5.2-.3 2.1-.8 4.3-2.2 4.3-1.2 0-1.2-3.5-2.7-3.5s-1.5 3.5-2.7 3.5c-1.4 0-1.9-2.2-2.2-4.3-.3-1.8-.7-3.5-1.4-5.2-1-2.4-1.3-5.6.5-6.7Z M12 10.2v9 M9.8 12.2h4.4 M9.8 14.4h4.4 M9.8 16.6h4.4',
  crown: 'M5.5 9.6c2.1-3 4.2-4.5 6.5-4.5s4.4 1.5 6.5 4.5 M6.5 12.2h11 M7.4 12.2v5.1c0 1.1.9 2 2 2h5.2c1.1 0 2-.9 2-2v-5.1 M9.2 8.7l1.3 3.5 M14.8 8.7l-1.3 3.5 M10 16h4',
  dentures: 'M4.6 10c1.5-2.8 4-4.2 7.4-4.2s5.9 1.4 7.4 4.2 M5.2 14.5c1.8 2.8 4.1 4.2 6.8 4.2s5-1.4 6.8-4.2 M6.8 11.7h10.4 M8 14.3h8 M9.5 8.9v2.8 M12 8.4v3.3 M14.5 8.9v2.8',
  root: 'M8.2 3.7c1.2-.8 2.6.2 3.8.2s2.6-1 3.8-.2c1.8 1.1 1.5 4.3.5 6.7-.7 1.7-1.1 3.4-1.4 5.2-.3 2.1-.8 4.3-2.2 4.3-1.2 0-1.2-3.5-2.7-3.5s-1.5 3.5-2.7 3.5c-1.4 0-1.9-2.2-2.2-4.3-.3-1.8-.7-3.5-1.4-5.2-1-2.4-1.3-5.6.5-6.7Z M12 7.8v7.8 M9.7 11.1H12 M12 13.6h2.3',
  aligners: 'M5.4 10.2c1.2-2.2 3.4-3.4 6.6-3.4s5.4 1.2 6.6 3.4 M6.4 12.5h11.2 M8 10.1h2.5v3.2H8z M13.5 10.1H16v3.2h-2.5z M8.3 16.2c2.4 1.3 5 1.3 7.4 0',
  sparkle: 'M8.3 3.7c1.2-.8 2.6.2 3.8.2s2.6-1 3.8-.2c1.8 1.1 1.5 4.3.5 6.7-.7 1.7-1.1 3.4-1.4 5.2-.3 2.1-.8 4.3-2.2 4.3-1.2 0-1.2-3.5-2.7-3.5s-1.5 3.5-2.7 3.5c-1.4 0-1.9-2.2-2.2-4.3-.3-1.8-.7-3.5-1.4-5.2-1-2.4-1.3-5.6.5-6.7Z M18.2 4.8l.8 2.1 2.1.8-2.1.8-.8 2.1-.8-2.1-2.1-.8 2.1-.8.8-2.1Z M18.7 14.3l.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5 1.4-.5.5-1.4Z',
}

const whyChooseIcons = {
  plan: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3.75h10a1.25 1.25 0 0 1 1.25 1.25v14A1.25 1.25 0 0 1 17 20.25H7A1.25 1.25 0 0 1 5.75 19V5A1.25 1.25 0 0 1 7 3.75Z" />
      <path d="M9 3.75V2.5M15 3.75V2.5M8 8h8M8 12h8M8 16h5" />
    </svg>
  ),
  tech: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 7h10v10H7z" />
      <path d="M4 4h3M17 4h3M4 20h3M17 20h3M4 7V4M20 7V4M4 17v3M20 17v3" />
      <path d="M10 10h4v4h-4z" />
    </svg>
  ),
  specialists: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v2" />
      <path d="M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM19.5 21v-1.5a3.5 3.5 0 0 0-2.5-3.35" />
      <path d="M16.5 3.85a4 4 0 0 1 0 7.3" />
    </svg>
  ),
  comfort: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s-7-4.35-7-10.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 7 4.5C19 16.65 12 21 12 21Z" />
      <path d="M9 10.5h6M12 7.5v6" />
    </svg>
  ),
  pricing: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 3.75h12v16.5H6z" />
      <path d="M9 7.5h6M9 11.25h6M9 15h3" />
      <path d="M17 6h1.5M17 10h1.5M17 14h1.5" />
    </svg>
  ),
}

const transformations = [
  {
    category: 'Restorative Dentistry',
    title: 'Tooth-Coloured Filling',
    desc: 'Before shows the prepared cavity; after shows a natural composite filling shaped to restore the tooth surface.',
    beforeImage: '/transform-clinic-room.jpeg',
    afterImage: '/transform-clinic-room.jpeg',
  },
]

// Dr. Bala Subramanian must appear FIRST — Founder & Chief Dental Surgeon
const doctors = [
  {
    name: 'Dr. Bala Subramanian',
    role: 'Founder & Chief Dental Surgeon',
    experience: '15+ years of clinical excellence',
    summary: 'Micro-endodontics, smile designing, and advanced restorative care led with calm precision.',
    bio: 'Dr. Bala Subramanian is the founder of The Tusk Dental Clinic and its Chief Dental Surgeon. An MDS specialist in Conservative Dentistry and Endodontics, he built the clinic around a belief that every patient deserves calm, precise, and transparent dental care. His expertise spans micro-endodontics, smile designing, and advanced restorative care.',
    image: '/dr-balasubramaniam-shankar.jpeg',
    isFounder: true,
  },
  {
    name: 'Dr. Swapnil Yelmar',
    role: 'Consultant Orthodontist',
    experience: '4 years of experience',
    summary: 'Advanced smile correction, braces, aligners, and dentofacial orthopaedic planning.',
    bio: 'Dr. Swapnil Yelmar is a dedicated Consultant Orthodontist specializing in advanced smile corrections and dentofacial orthopaedics. Trained at Government Dental College, Mumbai, he combines clinical precision with a patient-centric approach to deliver functional, aesthetic results.',
    image: '/dr-swapnil-yelmar.jpeg',
    isFounder: false,
  },
  {
    name: 'Dr. Heti Sunil Kacha',
    role: 'Consultant Oral and Maxillofacial Surgeon',
    experience: '2+ years of consultant practice',
    summary: 'Oral surgery, facial esthetics, critical care-aware planning, and patient-first surgical care.',
    bio: 'Dr. Heti Sunil Kacha is skilled in oral and maxillofacial surgery, facial esthetics, and critical care management. She focuses on tailored treatment planning and collaborative interdisciplinary care to deliver precise, patient-centered outcomes.',
    image: '/dr-heti-kacha.jpeg',
    isFounder: false,
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
    text: "Dr. Bauer's eye for aesthetics is remarkable. She preserved what was natural and enhanced what needed to be. My result looks completely real.",
    author: 'L. V., Milan',
    meta: 'Smile Design · Porcelain Veneers',
  },
  {
    text: 'The whitening results surpassed what I thought was possible. Two shades lighter without any sensitivity. Their approach to preventive dentistry is genuinely ahead of the curve.',
    author: 'S. H., Munich',
    meta: 'Whitening · Preventive Care',
  },
  {
    text: "I've seen specialists across Europe, but the attention to detail here felt different. Every option was explained clearly before treatment began.",
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
    meta: 'Invisalign · Bx  ite Refinement',
  },
]

const whyChooseUs = [
  { icon: whyChooseIcons.plan, title: 'Personalised Treatment Plans', desc: 'Every case is uniquely planned based on your diagnosis, goals, and comfort preferences.' },
  { icon: whyChooseIcons.tech, title: 'Advanced Technology', desc: 'Modern equipment and magnification-assisted techniques for precision and safety.' },
  { icon: whyChooseIcons.specialists, title: 'Experienced Specialists', desc: 'A team of focused specialists across all dental disciplines, led by our founder.' },
  { icon: whyChooseIcons.comfort, title: 'Comfortable Environment', desc: 'A calm, thoughtfully designed space that takes the stress out of dental visits.' },
  { icon: whyChooseIcons.pricing, title: 'Transparent Pricing', desc: 'Clear treatment timelines and cost breakdowns before you commit to anything.' },
]

const patientJourney = [
  { step: '01', title: 'Book Consultation', desc: 'Schedule online or call us to book your first visit.' },
  { step: '02', title: 'Diagnosis', desc: 'Thorough clinical assessment and diagnostic imaging.' },
  { step: '03', title: 'Treatment Planning', desc: 'A personalised plan with clear steps, timeline, and cost.' },
  { step: '04', title: 'Treatment', desc: 'Precise, comfortable care delivered by our specialists.' },
  { step: '05', title: 'Follow-up Care', desc: 'Regular follow-ups to ensure lasting, healthy results.' },
]

export default function Home() {
  const observerRef = useRef(null)
  const [comparisonPositions, setComparisonPositions] = useState({})

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((element) => {
      observerRef.current.observe(element)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const whyDiagnosticItems = [
    { icon: '01', title: 'Personalised Plans', desc: 'Every case is uniquely planned around diagnosis, goals, and comfort preferences.' },
    { icon: '02', title: 'Advanced Technology', desc: 'Modern equipment and magnification-assisted techniques support precise treatment.' },
    { icon: '03', title: 'Comfortable Environment', desc: 'A calm, thoughtfully designed space helps make dental visits feel easier.' },
    { icon: '04', title: 'Specialist Support', desc: 'Focused specialists guide each case with clear communication and careful planning.' },
    { icon: '05', title: 'Experienced Care', desc: 'Our doctors bring focused clinical expertise across restorative and aesthetic dentistry.' },
    { icon: '06', title: 'Transparent Pricing', desc: 'Clear treatment timelines and cost breakdowns are discussed before you commit.' },
  ]

  const updateComparison = (title, value) => {
    setComparisonPositions((current) => ({ ...current, [title]: value }))
  }

  return (
    <div className="home home-refined">
      {/* ── Hero ── */}
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
                Explore Treatments
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
          </div>
        </div>
      </section>
      {/* ── Standard Strip ── */}
      <section className="section standard-strip reveal">
        <div className="container standard-strip__inner">
          <div className="standard-strip__left">
            <h2 className="standard-strip__title">
              Care planned
              <span>around your smile.</span>
            </h2>
            <p className="standard-strip__copy">
              From your first consultation to the final review, every treatment at The Tusk is
              guided by diagnosis, comfort, and clear communication.
            </p>

            <div className="standard-strip__images">
              <div className="standard-strip__image-frame">
                <img
                  src="/clinic-treatment-room.jpeg"
                  alt="The Tusk treatment room"
                  className="standard-strip__image"
                />
              </div>
              <div className="standard-strip__image-frame standard-strip__image-frame--secondary">
                <img
                  src="/clinic-consultation-room.jpeg"
                  alt="The Tusk consultation room"
                  className="standard-strip__image"
                />
              </div>
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

      {/* ── Treatments Panel ── */}
      <section className="services-panel reveal">
        <div className="container">
          <div className="home-treatments-preview">
            <div className="home-treatments-preview__header">
              <div>
                <span className="section-label">Treatments</span>
                <h2>Advanced <span>Dental Treatments</span></h2>
                <p>Comprehensive care for your complete dental health.</p>
              </div>
              <Link to="/services" className="home-treatments-preview__button">
                View All Treatments <span>→</span>
              </Link>
            </div>

            <div className="home-treatments-preview__grid">
              {homeTreatmentPreview.map((treatment) => (
                <Link key={treatment.title} to="/services" className="home-treatments-preview__card">
                  <span className="home-treatments-preview__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      {treatmentIconPaths[treatment.icon].split(' M').map((path, index) => (
                        <path key={index} d={index === 0 ? path : `M${path}`} />
                      ))}
                    </svg>
                  </span>
                  <div>
                    <strong>{treatment.title}</strong>
                    <small>{treatment.desc}</small>
                    <span className="home-treatments-preview__arrow">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Transformations ── */}
      <section className="section transformations-strip reveal">
        <div className="container">
          <h2 className="transformations-strip__title">
            Transformations that <span>speak for themselves.</span>
          </h2>

          <div className="transformations-carousel" aria-label="Before and after treatment comparisons">
            {transformations.map((item) => (
              <article
                key={item.title}
                className="transformation-card"
                style={{ '--split': `${comparisonPositions[item.title] ?? 100}%` }}
              >
                <div className="transformation-card__compare">
                  <img src={item.beforeImage} alt={`${item.title} before`} className="transformation-card__image transformation-card__image--before" loading="lazy" />
                  <img src={item.afterImage} alt={`${item.title} after`} className="transformation-card__image transformation-card__image--after" loading="lazy" />
                  <span className="transformation-card__label transformation-card__label--before">Before</span>
                  <span className="transformation-card__label transformation-card__label--after">After</span>
                  <span className="transformation-card__divider" />
                  <span className="transformation-card__handle">↔</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={comparisonPositions[item.title] ?? 100}
                    onChange={(event) => updateComparison(item.title, event.target.value)}
                    className="transformation-card__range"
                    aria-label={`Compare before and after for ${item.title}`}
                  />
                </div>
                <div className="transformation-card__body">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Doctors Panel ── */}
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
                    <p>{doctor.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section why-choose-us reveal">
        <div className="container">
          <div className="why-choose-us__header">
            <span className="section-label">Why Us</span>
            <h2 className="section-title">Why Patients Choose <span>The Tusk</span></h2>
            <p className="why-choose-us__sub">We believe great dental care starts with honesty, comfort, and genuine expertise.</p>
          </div>
          <div className="why-diagnostic">
            <div className="why-diagnostic__list why-diagnostic__list--left">
              {whyDiagnosticItems.slice(0, 3).map((item) => (
                <article key={item.title} className="why-diagnostic__item">
                  <div className="why-diagnostic__copy">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <span className="why-diagnostic__icon">{item.icon}</span>
                </article>
              ))}
            </div>

            <div className="why-diagnostic__visual" aria-hidden="true">
              <div className="why-diagnostic__orbit" />
              <div className="why-diagnostic__disc">
                <img src="https://tranquildentalstudio.com/image/why-tooth.png" alt="" loading="lazy" />
              </div>
            </div>

            <div className="why-diagnostic__list why-diagnostic__list--right">
              {whyDiagnosticItems.slice(3).map((item) => (
                <article key={item.title} className="why-diagnostic__item">
                  <span className="why-diagnostic__icon">{item.icon}</span>
                  <div className="why-diagnostic__copy">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Patient Journey ── */}
      <section className="section patient-journey reveal">
        <div className="container">
          <div className="patient-journey__header">
            <span className="section-label">Your Experience</span>
            <h2 className="section-title">The <span>Patient Journey</span></h2>
          </div>
          <div className="patient-journey__steps">
            {patientJourney.map((item, i) => (
              <div key={item.step} className="journey-step">
                <div className="journey-step__number">{item.step}</div>
                <div className="journey-step__content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
                {i < patientJourney.length - 1 && (
                  <div className="journey-step__arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story Strip ── */}
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
              <img src="/story-hallway.jpeg" alt="The Tusk clinic hallway" className="story-strip__image" loading="lazy" />
              <div className="story-strip__quote">
                <p>"Every detail in the clinic is designed to make treatment feel clearer and more comfortable."</p>
                <span>The Tusk Dental Clinic</span>
              </div>
            </div>
          </div>

          <div className="story-strip__details">
            <div className="story-strip__top-image">
              <img src="/story-reception.jpeg" alt="The Tusk consultation area" className="story-strip__image" loading="lazy" />
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

      {/* ── Testimonials ── */}
      <section id="testimonials" className="section testimonials-strip reveal">
        <div className="container">
          <div className="testimonials-strip__header">
            <h2 className="testimonials-strip__title">
              What our patients <span>say.</span>
            </h2>

            <div className="testimonials-strip__rating">
              <div className="testimonials-strip__stars">★★★★★</div>
              <div className="testimonials-strip__score">4.9 <span>(2,100 reviews)</span></div>
              <div className="testimonials-strip__avatars">
                <img src="/doctor-female-2.jpeg" alt="Patient" loading="lazy" />
                <img src="/doctor-male-1.jpeg" alt="Patient" loading="lazy" />
                <img src="/transform-doctor-male.jpeg" alt="Patient" loading="lazy" />
                <img src="/transform-doctor-female.jpeg" alt="Patient" loading="lazy" />
                <img src="/tusk-logo.jpeg" alt="The Tusk" loading="lazy" />
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

      {/* ── Consultation CTA ── */}
      <section className="consultation-strip-dark reveal">
        <div className="container consultation-strip-dark__inner">
          <div className="consultation-strip-dark__image-panel">
            <img
              src="/story-reception.jpeg"
              alt="The Tusk consultation space"
              className="consultation-strip-dark__image"
              loading="lazy"
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
              <input type="text" placeholder="Your Name *" aria-label="Your Name" />
              <input type="tel" placeholder="Phone Number *" aria-label="Phone Number" />
              <input type="email" placeholder="Email Address (optional)" aria-label="Email Address" />
              <select defaultValue="" aria-label="Select Service">
                <option value="" disabled>Select Service (optional)</option>
                <option>Aesthetic Dentistry</option>
                <option>Invisalign &amp; Orthodontics</option>
                <option>Implantology</option>
                <option>Preventive Care</option>
              </select>
              <textarea placeholder="Message (optional)" rows="5" aria-label="Message" />
              <button type="submit" className="btn-gold consultation-form__button">
                <span>Request Consultation</span>
              </button>
              <p className="consultation-form__note">We respect your privacy. No spam, ever.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
