import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const quickStats = [
  { value: '5,000+', label: 'Happy Patients' },
  { value: '18', label: 'Years in Practice' },
  { value: '4', label: 'Specialist Doctors' },
]

const brandMarks = ['Invisalign', 'Nobel Biocare', 'Straumann', 'Dentsply Sirona', 'CEREC']

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

const transformations = [
  // {
  //   category: 'Aesthetic Dentistry',
  //   title: 'Full Smile Reconstruction',
  //   image: '/transform-case.jpeg',
  //   variant: 'wide',
  // },
  // {
  //   category: 'Orthodontics',
  //   title: 'Invisalign Alignment',
  //   image: '/transform-doctor-female.jpeg',
  //   variant: 'tall',
  // },
  // {
  //   category: 'Implantology',
  //   title: 'Single Tooth Implant',
  //   image: '/transform-doctor-male.jpeg',
  //   variant: 'small',
  // },
  {
    category: 'Clinical Design',
    title: 'Refined Treatment Space',
    image: '/transform-clinic-room.jpeg',
    variant: 'small',
  },
]

// Dr. Bala Subramanian must appear FIRST — Founder & Chief Dental Surgeon
const doctors = [
  {
    name: 'Dr. Bala Subramanian',
    role: 'Founder & Chief Dental Surgeon',
    experience: '15+ years of clinical excellence',
    bio: 'Dr. Bala Subramanian is the founder of The Tusk Dental Clinic and its Chief Dental Surgeon. An MDS specialist in Conservative Dentistry and Endodontics, he built the clinic around a belief that every patient deserves calm, precise, and transparent dental care. His expertise spans micro-endodontics, smile designing, and advanced restorative care.',
    image: '/dr-balasubramaniam-shankar.jpeg',
    isFounder: true,
  },
  {
    name: 'Dr. Swapnil Yelmar',
    role: 'Consultant Orthodontist',
    experience: '4 years of experience',
    bio: 'Dr. Swapnil Yelmar is a dedicated Consultant Orthodontist specializing in advanced smile corrections and dentofacial orthopaedics. Trained at Government Dental College, Mumbai, he combines clinical precision with a patient-centric approach to deliver functional, aesthetic results.',
    image: '/dr-swapnil-yelmar.jpeg',
    isFounder: false,
  },
  {
    name: 'Dr. Heti Sunil Kacha',
    role: 'Consultant Oral and Maxillofacial Surgeon',
    experience: '2+ years of consultant practice',
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
  { icon: '◆', title: 'Personalised Treatment Plans', desc: 'Every case is uniquely planned based on your diagnosis, goals, and comfort preferences.' },
  { icon: '●', title: 'Advanced Technology', desc: 'Modern equipment and magnification-assisted techniques for precision and safety.' },
  { icon: '✦', title: 'Experienced Specialists', desc: 'A team of focused specialists across all dental disciplines, led by our founder.' },
  { icon: '◇', title: 'Comfortable Environment', desc: 'A calm, thoughtfully designed space that takes the stress out of dental visits.' },
  { icon: '✺', title: 'Transparent Pricing', desc: 'Clear treatment timelines and cost breakdowns before you commit to anything.' },
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
      {/* ── Standard Strip ── */}
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

      {/* ── Services Panel ── */}
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
                    <img src={service.image} alt={service.title} className="service-tile__image" loading="lazy" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Transformations ── */}
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
                <img src={item.image} alt={item.title} className="transformation-card__image" loading="lazy" />
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
                    <p>{doctor.bio}</p>
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
          <div className="why-choose-us__grid">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="why-card">
                <div className="why-card__icon">{item.icon}</div>
                <h4 className="why-card__title">{item.title}</h4>
                <p className="why-card__desc">{item.desc}</p>
              </div>
            ))}
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
