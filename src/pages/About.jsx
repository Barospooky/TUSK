import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './PageCommon.css'

const specialists = [
  {
    name: 'Dr. Bala Subramanian',
    role: 'Founder & Chief Dental Surgeon',
    focus: 'Micro-Endodontics, Smile Designing & Advanced Restorative Dentistry',
    qualification: 'MDS – Conservative Dentistry & Endodontics',
    experience: '15+ Years',
    city: 'Chembur, Mumbai',
    languages: 'English, Hindi, Tamil',
    image: '/dr-balasubramaniam-shankar.jpeg',
    isFounder: true,
    bio: 'Dr. Bala Subramanian is the Founder of The Tusk Dental Clinic and its Chief Dental Surgeon. An MDS specialist in Conservative Dentistry and Endodontics, he trained at the prestigious Government Dental College and Hospital, Mumbai, and served as an Assistant Professor before establishing The Tusk.',
    overview: 'He built this clinic around a simple belief: dental care should feel calm, precise, and deeply personal. His expertise spans micro-endodontics, smile designing, cosmetic restorations, and complex case planning. He routinely uses rubber dam isolation and magnification-assisted techniques for accuracy and long-term outcomes.',
    education: [
      'MDS – Conservative Dentistry & Endodontics, Government Dental College, Mumbai',
      'Former Assistant Professor – Government Dental College and Hospital, Mumbai',
      'Founder & Chief Dental Surgeon – The Tusk Dental Clinic, Chembur',
    ],
    expertise: [
      'Root canal treatment using microscope & latest instruments',
      'Endodontic retreatment & complex case management',
      'Management of iatrogenic errors and procedural mishaps',
      'Smile designing, post & core restorations',
      'Composite restoration & aesthetic dentistry',
      'Rubber dam dentistry & magnification-assisted endodontics',
      'Restoration of badly broken down teeth',
    ],
    value: [
      'Predictable outcomes with quality-focused care',
      'Reduced chair time through efficient treatment mechanics',
      'Evidence-based, ethical clinical practice',
      'Dedicated long-term patient follow-up',
    ],
  },
  {
    name: 'Dr. Swapnil Yelmar',
    role: 'Consultant Orthodontist',
    focus: 'Advanced Smile Correction & Dentofacial Orthopaedics',
    qualification: 'BDS, MDS – Orthodontics & Dentofacial Orthopaedics',
    experience: '4 Years',
    city: 'Mumbai',
    languages: 'English, Hindi, Marathi',
    image: '/dr-swapnil-yelmar.jpeg',
    isFounder: false,
    bio: 'Dr. Swapnil Yelmar is a dedicated Consultant Orthodontist specialising in advanced smile corrections and dentofacial orthopaedics. With an academic foundation from the prestigious Government Dental College, Mumbai, where he earned both his BDS and MDS, he combines clinical precision with a patient-centric approach.',
    overview: 'He is committed to delivering functional, aesthetic results that enhance both confidence and oral health through modern orthodontic techniques.',
    education: [
      'BDS – Government Dental College, Mumbai',
      'MDS – Orthodontics & Dentofacial Orthopaedics, Government Dental College, Mumbai',
    ],
    expertise: [
      'Metal braces and ceramic braces',
      'Invisible aligner treatment planning',
      'Advanced smile correction',
      'Bite correction and alignment',
      'Dentofacial orthopaedic planning',
    ],
    value: [
      'Patient-centric orthodontic care',
      'Functional and aesthetic smile goals',
      'Clear treatment communication',
    ],
  },
  {
    name: 'Dr. Heti Sunil Kacha',
    role: 'Consultant Oral and Maxillofacial Surgeon',
    focus: 'Oral Surgery, Facial Esthetic & Cosmetology',
    qualification: 'BDS, MDS – Oral and Maxillofacial Surgery',
    experience: '2+ Years of Consultant Practice',
    city: 'Mumbai',
    languages: 'English, Hindi, Gujarati',
    image: '/dr-heti-kacha.jpeg',
    isFounder: false,
    bio: 'Dr. Heti Sunil Kacha is skilled in surgical care and critical care management. She focuses on developing tailored treatment care plans and fostering interdisciplinary teamwork whenever required.',
    overview: 'Her clinical approach combines careful diagnosis, surgical precision, patient comfort, and facial aesthetic awareness for oral and maxillofacial procedures.',
    education: [
      'Bachelor of Dental Surgery – Mumbai, 2020',
      'MDS Oral and Maxillofacial Surgery – Nair Hospital, 2024',
      'Fellowship in Facial Esthetic and Cosmetology – Mumbai, 2026',
    ],
    expertise: [
      'Oral and maxillofacial surgical care',
      'Tooth extraction and surgical removal',
      'Facial swelling and infection management',
      'Critical care-aware surgical planning',
      'Facial esthetic and cosmetology support',
    ],
    value: [
      'Tailored surgical treatment plans',
      'Interdisciplinary teamwork when needed',
      'Calm and comfort-focused surgical care',
    ],
  },
]

const values = [
  { icon: '◆', title: 'Accurate Diagnosis', desc: 'We begin with understanding the concern and identifying the real cause before planning treatment.' },
  { icon: '●', title: 'Clear Communication', desc: 'Patients are guided through options, timelines, and next steps in simple language.' },
  { icon: '✦', title: 'Comfort-First Care', desc: 'Treatment is planned with attention to anxiety, comfort, hygiene, and a calm clinic experience.' },
  { icon: '✺', title: 'Ethical Planning', desc: 'We recommend what is needed and preserve natural teeth whenever clinically possible.' },
]

export default function About() {
  const [activeDoctorIndex, setActiveDoctorIndex] = useState(0)
  const activeDoctor = specialists[activeDoctorIndex]

  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__inner">
          <span className="section-label">Our Story</span>
          <h1 className="page-hero__title">About <span className="gold-shimmer">The Tusk</span></h1>
          <p className="page-hero__subtitle">A modern dental clinic focused on careful diagnosis, comfortable treatment, and confident smiles.</p>
        </div>
      </div>

      <section id="our-approach" className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story__left">
              <span className="section-label">Our Approach</span>
              <h2 className="section-title">Dentistry That Feels <span>Clear, Calm, And Personal</span></h2>
              <div className="divider">
                <div className="divider-line" />
                <span className="divider-icon">◆</span>
                <div className="divider-line" />
              </div>
              <p style={{ color: 'var(--gray-light)', marginBottom: '1.2rem', lineHeight: 1.9 }}>
                The Tusk Dental Clinic is designed for patients who want more than quick dental treatment. We focus on understanding your concern, explaining the diagnosis, and building a treatment plan that is practical, transparent, and comfortable.
              </p>
              <p style={{ color: 'var(--gray-light)', marginBottom: '1.2rem', lineHeight: 1.9 }}>
                Our care covers preventive dentistry, root canal treatment, smile designing, braces and aligners, implants, crowns, dentures, extractions, and oral or facial pain management. Whether the visit is routine or urgent, the goal is to make the next step feel clear.
              </p>
              <p style={{ color: 'var(--gray-light)', lineHeight: 1.9 }}>
                Every specialist brings a focused clinical skill set, allowing treatment to be planned with the right expertise from the first consultation.
              </p>
            </div>
            <div className="about-story__right">
              <div className="about-values">
                {values.map((value) => (
                  <div key={value.title} className="about-value">
                    <div className="about-value__icon">{value.icon}</div>
                    <div>
                      <h4 className="about-value__title">{value.title}</h4>
                      <p className="about-value__desc">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-team" className="section specialists-section">
        <div className="container">
          <div className="specialists-header">
            <span className="section-label">Professional Dentists</span>
            <h2 className="section-title">Meet Our <span>Specialists</span></h2>
            <p>
              Select a doctor to view qualifications, clinical focus, professional overview, and key expertise.
            </p>
          </div>

          <div className="specialist-showcase">
            <article className={`specialist-profile${activeDoctor.isFounder ? ' specialist-profile--founder' : ''}`}>
              {activeDoctor.isFounder && (
                <span className="specialist-founder-badge">Founder &amp; Chief Dental Surgeon</span>
              )}
              <span className="specialist-profile__role">{activeDoctor.role}</span>
              <h3 className="specialist-profile__name">{activeDoctor.name}</h3>
              <p className="specialist-profile__focus">{activeDoctor.focus}</p>

              <div className="specialist-profile__meta">
                <span>🎓 {activeDoctor.qualification}</span>
                <span>⏱ {activeDoctor.experience}</span>
                <span>📍 {activeDoctor.city}</span>
                {activeDoctor.languages && <span>🗣 {activeDoctor.languages}</span>}
              </div>

              <p className="specialist-profile__bio">{activeDoctor.bio}</p>
              <p className="specialist-profile__overview">{activeDoctor.overview}</p>

              <div className="specialist-profile__details">
                <div>
                  <h4>Education &amp; Professional Details</h4>
                  <ul>
                    {activeDoctor.education.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4>Clinical Expertise</h4>
                  <ul>
                    {activeDoctor.expertise.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="specialist-profile__value">
                <h4>The Value Add</h4>
                <div className="specialist-profile__chips">
                  {activeDoctor.value.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="btn-gold specialist-profile__cta">
                <span>Book Consultation</span>
              </Link>
            </article>

            <div className="specialist-profile__photo-frame">
              <img src={activeDoctor.image} alt={activeDoctor.name} className="specialist-profile__photo" loading="lazy" />
            </div>

            <div className="specialist-selector" aria-label="Select specialist">
              {specialists.map((doctor, index) => (
                <button
                  key={doctor.name}
                  type="button"
                  className={`specialist-selector__item ${index === activeDoctorIndex ? 'active' : ''}${doctor.isFounder ? ' specialist-selector__item--founder' : ''}`}
                  onClick={() => setActiveDoctorIndex(index)}
                  aria-label={`View profile of ${doctor.name}`}
                >
                  {doctor.isFounder && <span className="specialist-selector__founder-tag">Founder</span>}
                  <img src={doctor.image} alt={doctor.name} loading="lazy" />
                  <span>{doctor.name.replace('Dr. ', '')}</span>
                  <small>{doctor.role}</small>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="page-cta">
        <div className="container page-cta__inner">
          <h2 className="section-title">Ready To Plan <span>Your Visit?</span></h2>
          <p className="page-cta__sub">Tell us your concern and our team will help you choose the right consultation or treatment.</p>
          <Link to="/contact" className="btn-gold"><span>Book Your Visit</span></Link>
        </div>
      </div>
    </div>
  )
}
