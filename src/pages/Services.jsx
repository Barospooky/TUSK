import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './PageCommon.css'

const treatments = [
  {
    category: 'Cosmetic Dentistry',
    items: [
      { title: 'Smile Designing', copy: 'Personalised smile enhancement planning with veneers, laminates, caps, and aesthetic fillings tailored to facial balance and dental harmony.', image: '/service-smile-designing.png', duration: 'Custom', sessions: 'Planned in stages', bestFor: 'Customized smile transformation for a confident, natural-looking smile.' },
      { title: 'Facial Aesthetics', copy: 'Non-surgical facial aesthetic support including Botox and fillers when indicated for balanced, refreshed results.', image: '/service-facial-aesthetics.png', duration: '30-60 min', sessions: 'As advised', bestFor: 'Subtle facial refinement that supports the overall smile and profile.' },
      { title: 'Teeth Whitening & Bleaching', copy: 'Professional bleaching, polishing, and tooth-coloured aesthetic finishing for discoloured teeth.', image: '/service-teeth-whitening.png', duration: '45-90 min', sessions: '1-2', bestFor: 'Professional whitening treatment for a brighter smile.' },
      { title: 'Tooth-Coloured Cosmetic Fillings', copy: 'Natural-looking restorations used to rebuild decayed, chipped, or discoloured teeth.', image: '/service-tooth-coloured-fillings.png', duration: '30-60 min', sessions: '1', bestFor: 'Small cavities, chips, or visible restorations that need a natural finish.' },
    ],
  },
  {
    category: 'Endodontics',
    items: [
      { title: 'Root Canal Treatment', copy: 'Treatment for toothache and deep cavities by removing infection and preserving the natural tooth whenever possible.', image: '/service-root-canal-treatment.png', duration: '60-90 min', sessions: '1-2', bestFor: 'Pain-free root canal treatment focused on saving the natural tooth.' },
      { title: 'Severe Dental Pain Due To Infection', copy: 'Immediate relief planning and stabilising care for teeth that are severely painful due to infection.', image: '/service-emergency-dental-pain-care.png', duration: '30-60 min', sessions: 'As needed', bestFor: 'Urgent pain relief when infection causes sensitivity, throbbing, or swelling.' },
      { title: 'Dental Swelling & Infection Management', copy: 'Focused treatment for facial swelling and oral infections caused by dental disease.', image: '/service-dental-swelling-infection.png', duration: '30-90 min', sessions: 'Case-based', bestFor: 'Stabilising dental infections and preventing spread of swelling.' },
      { title: 'Broken & Traumatic Tooth Care', copy: 'Restoration planning for fractured teeth caused by sports injuries, accidents, or sudden dental trauma.', image: '/service-broken-traumatic-tooth-care.png', duration: '45-90 min', sessions: 'Case-based', bestFor: 'Chipped, fractured, or injured teeth that need quick assessment.' },
    ],
  },
  {
    category: 'Orthodontics',
    items: [
      { title: 'Invisible Aligners', copy: 'Clear aligner therapy for modern, low-visibility smile correction with guided treatment sequencing.', image: '/service-invisible-aligners.png', duration: '6-18 months', sessions: 'Planned refinements', bestFor: 'Clear aligners for discreet teeth straightening.' },
      { title: 'Metal Braces', copy: 'Reliable correction for crooked, crowded, or malaligned teeth using durable fixed orthodontic appliances.', image: '/service-metal-braces.png', duration: '12-24 months', sessions: 'Monthly reviews', bestFor: 'Traditional reliable orthodontic treatment.' },
      { title: 'Ceramic Braces', copy: 'Aesthetic brace systems that blend more discreetly with natural teeth while correcting alignment effectively.', image: '/service-ceramic-braces.png', duration: '12-24 months', sessions: 'Monthly reviews', bestFor: 'Tooth-coloured brackets for a discreet look.' },
      { title: 'Orthodontic Consultation & Diagnosis', copy: 'Assessment and treatment planning for bite correction, smile alignment, and dentofacial harmony.', image: '/service-orthodontic-consultation.png', duration: '30-45 min', sessions: 'Initial + follow-up', bestFor: 'Understanding whether braces, aligners, or monitoring is right for you.' },
    ],
  },
  {
    category: 'Restorative Care',
    items: [
      { title: 'Dental Implants', copy: 'Long-term replacement of missing teeth with implant-supported restorations for function, stability, and a natural look.', image: '/service-dental-implants.png', duration: '3-6 months', sessions: 'Multi-stage', bestFor: 'Permanent tooth replacement for confident smile and chewing support.' },
      { title: 'Removable Complete & Partial Dentures', copy: 'Custom dentures for single or multiple missing teeth, designed for comfort, appearance, and daily use.', image: '/service-dentures.png', duration: '2-4 visits', sessions: '1 treatment plan', bestFor: 'Comfortable full or partial removable denture replacement.' },
      { title: 'Fixed Bridges & Crowns', copy: 'Replacement and reinforcement solutions including fixed bridges, tooth-coloured caps, and metal caps.', image: '/service-fixed-bridges-crowns.png', duration: '2-3 visits', sessions: '1 treatment plan', bestFor: 'Natural-looking restoration and seamless gap replacement.' },
      { title: 'Broken Tooth Reconstruction', copy: 'Restorative options for severely broken teeth aimed at preserving teeth when extraction can be avoided.', image: '/service-broken-tooth-reconstruction.png', duration: 'Case-based', sessions: 'Case-based', bestFor: 'Rebuilding badly damaged teeth when preservation is possible.' },
    ],
  },
  {
    category: 'General Dentistry',
    items: [
      { title: 'Professional Cleaning & Scaling', copy: 'Regular clean-up and scaling to remove deposits, improve gum health, and support fresher breath.', image: '/service-cleaning-scaling.png', duration: '30-60 min', sessions: 'Every 6 months', bestFor: 'Deep cleaning for a healthier smile.' },
      { title: 'Bad Breath Management', copy: 'Diagnosis-led care for bad breath, combining professional cleaning, cause assessment, and practical counselling.', image: '/service-bad-breath-management.png', duration: '30-45 min', sessions: 'As needed', bestFor: 'Identifying and treating the cause of persistent bad breath.' },
      { title: 'Tooth Extraction / Surgical Removal', copy: 'Tooth extraction or surgical removal for teeth that are severely damaged, infected, or badly broken.', image: '/service-broken-traumatic-tooth-care.png', duration: '30-60 min', sessions: '1', bestFor: 'When a tooth cannot be predictably restored or causes repeated infection.' },
      { title: 'Oral & Facial Pain Management', copy: 'Evaluation and management of pain in the mouth and facial region with multidisciplinary planning when required.', image: '/service-emergency-dental-pain-care.png', duration: '30-45 min', sessions: 'Case-based', bestFor: 'Unclear mouth, jaw, or facial pain needing careful diagnosis.' },
    ],
  },
]

const categoryFlow = {
  'Cosmetic Dentistry': ['Smile goals, shade, facial balance, and tooth condition are assessed.', 'Aesthetic options are planned according to your smile goals.', 'Finishing, polishing, and review are completed for a natural-looking result.'],
  Endodontics: ['Pain source, infection level, and tooth restorability are diagnosed first.', 'The infected portion is cleaned, shaped, disinfected, and sealed carefully.', 'A filling or crown is planned to protect the tooth for long-term function.'],
  Orthodontics: ['Teeth alignment, bite, smile line, and jaw relationship are examined.', 'Braces or aligners are planned with a timeline and regular review schedule.', 'Retainers help maintain the corrected smile after active treatment.'],
  'Restorative Care': ['Missing or damaged teeth are assessed with function, bone support, and bite in mind.', 'A replacement or reconstruction plan is designed for stability and aesthetics.', 'Final restorations are adjusted for comfort, chewing, and natural appearance.'],
  'General Dentistry': ['A complete oral check identifies gum health, deposits, pain points, or infection.', 'The immediate concern is treated with cleaning, extraction, medication, or review care.', 'Follow-up advice helps prevent recurrence and maintain everyday oral health.'],
}

const categoryBenefits = {
  'Cosmetic Dentistry': ['Natural smile enhancement', 'Improved colour and shape', 'Confidence-focused planning', 'Minimally invasive options'],
  Endodontics: ['Pain relief', 'Preserves natural teeth', 'Controls infection', 'Restores chewing comfort'],
  Orthodontics: ['Better alignment', 'Improved bite function', 'Cleaner smile aesthetics', 'Retention planning'],
  'Restorative Care': ['Restores missing structure', 'Improves chewing support', 'Natural-looking replacement', 'Protects bite balance'],
  'General Dentistry': ['Prevents dental problems', 'Supports gum health', 'Improves daily comfort', 'Early diagnosis and care'],
}

const getFaqs = (treatment) => [
  { question: `Is ${treatment.title.toLowerCase()} painful?`, answer: 'We prioritise comfort with careful planning, gentle technique, and appropriate anaesthesia whenever needed.' },
  { question: `How long does ${treatment.title.toLowerCase()} take?`, answer: `Most cases are planned around ${treatment.duration.toLowerCase()} and may need ${treatment.sessions.toLowerCase()}, depending on diagnosis.` },
  { question: 'Will I know the steps before treatment starts?', answer: 'Yes. We explain the diagnosis, available options, timeline, cost, and after-care before beginning treatment.' },
]

const categoryIcons = {
  'Cosmetic Dentistry': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20.5c3.9 0 7-2.9 7-6.5 0-1-.8-1.8-1.8-1.8H6.8C5.8 12.2 5 13 5 14c0 3.6 3.1 6.5 7 6.5Z" />
      <path d="M8.2 9.2c.7.6 1.5.9 2.4.9s1.8-.3 2.4-.9c.7.6 1.5.9 2.4.9 1.4 0 2.6-.8 3.1-2.1" />
      <path d="M7.4 5.7h.01M16.6 5.7h.01" />
    </svg>
  ),
  Endodontics: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.3 3.7c1.2-.8 2.5.1 3.7.1s2.5-.9 3.7-.1c1.7 1.1 1.5 4.5.5 7.1-.7 1.9-1.2 3.8-1.5 5.8-.3 2.1-.8 4-2.2 4s-1.2-3.8-2.5-3.8-1.1 3.8-2.5 3.8-1.9-1.9-2.2-4c-.3-2-.8-3.9-1.5-5.8-1-2.6-1.2-6 .5-7.1Z" />
      <path d="M13.8 5.1 8.7 12h3.1l-1.6 5.1 5.1-6.9h-3.1l1.6-5.1Z" />
    </svg>
  ),
  Orthodontics: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 9.5h14" />
      <path d="M7 7h2.8v5H7zM14.2 7H17v5h-2.8z" />
      <path d="M8.4 15.4c2.3 1.4 4.9 1.4 7.2 0" />
      <path d="M4.7 5.8c1.2-1 2.9-.8 4.3-.3 1.9.7 4.1.7 6 0 1.4-.5 3.1-.7 4.3.3" />
    </svg>
  ),
  'Restorative Care': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.5 7.8c.9-2.3 2.4-3.5 4.5-3.5s3.6 1.2 4.5 3.5l1.2 3.1c.4 1.1-.4 2.3-1.6 2.3H7.9c-1.2 0-2-1.2-1.6-2.3l1.2-3.1Z" />
      <path d="M8 13.2v5.2c0 .9.7 1.6 1.6 1.6h4.8c.9 0 1.6-.7 1.6-1.6v-5.2" />
      <path d="M9.5 9.2h5" />
    </svg>
  ),
  'General Dentistry': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.3 3.7c1.2-.8 2.5.1 3.7.1s2.5-.9 3.7-.1c1.7 1.1 1.5 4.5.5 7.1-.7 1.9-1.2 3.8-1.5 5.8-.3 2.1-.8 4-2.2 4s-1.2-3.8-2.5-3.8-1.1 3.8-2.5 3.8-1.9-1.9-2.2-4c-.3-2-.8-3.9-1.5-5.8-1-2.6-1.2-6 .5-7.1Z" />
      <path d="M12 7.5v6M9 10.5h6" />
    </svg>
  ),
}

export default function Services() {
  const [activeTreatment, setActiveTreatment] = useState(null)

  const openTreatment = (treatment) => {
    setActiveTreatment(treatment)
    window.setTimeout(() => {
      document.querySelector('#selected-treatment')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 60)
  }

  const renderTreatmentDetail = (treatment) => {
    const flow = categoryFlow[treatment.category]
    const benefits = categoryBenefits[treatment.category]
    const faqs = getFaqs(treatment)

    return (
      <section id="selected-treatment" className="treatment-detail treatment-detail--expanded">
        <div className="treatment-detail__hero">
          <div className="treatment-detail__intro">
            <span className="section-label">{treatment.category}</span>
            <h2 className="treatment-detail__title">{treatment.title}</h2>
            <p>{treatment.copy}</p>
            <div className="treatment-detail__actions">
              <Link to="/contact" className="btn-gold"><span>Book Appointment</span></Link>
              <a href="tel:+919876543210" className="treatment-detail__call">Call Now</a>
            </div>
          </div>
          <div className="treatment-detail__media">
            <img src={treatment.image} alt={`${treatment.title} treatment`} loading="lazy" />
            <div className="treatment-detail__badge">
              <strong>{treatment.duration}</strong>
              <span>{treatment.sessions}</span>
            </div>
          </div>
        </div>

        <div className="treatment-detail__overview">
          <div className="treatment-detail__image-card">
            <img src={treatment.image} alt="" loading="lazy" />
          </div>
          <div>
            <h3>What is {treatment.title}?</h3>
            <p>{treatment.copy}</p>
            <p>{treatment.bestFor}</p>
            <div className="treatment-detail__meta">
              <span><strong>Duration</strong>{treatment.duration}</span>
              <span><strong>Sessions</strong>{treatment.sessions}</span>
            </div>
          </div>
        </div>

        <div className="treatment-detail__block">
          <div className="treatment-detail__section-head">
            <h3>Benefits of <span>{treatment.title}</span></h3>
            <p>Designed to improve comfort, confidence, and long-term oral health.</p>
          </div>
          <div className="treatment-benefits">
            {benefits.map((benefit) => (
              <article key={benefit} className="treatment-benefit">
                <span aria-hidden="true">◆</span>
                <h4>{benefit}</h4>
              </article>
            ))}
          </div>
        </div>

        <div className="treatment-detail__block">
          <div className="treatment-detail__section-head">
            <h3>The Treatment <span>Procedure</span></h3>
            <p>Simple, predictable, and clearly explained before we begin.</p>
          </div>
          <div className="treatment-procedure">
            {flow.map((step, stepIndex) => (
              <article key={step} className="treatment-procedure__step">
                <span>{String(stepIndex + 1).padStart(2, '0')}</span>
                <h4>{['Consultation', 'Treatment', 'Review'][stepIndex]}</h4>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="treatment-detail__faq">
          <div className="treatment-detail__section-head">
            <h3>Frequently Asked <span>Questions</span></h3>
          </div>
          <div className="treatment-faq-list">
            {faqs.map((faq) => (
              <details key={faq.question} className="treatment-faq">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__inner">
          <span className="section-label">What We Offer</span>
          <h1 className="page-hero__title">Our <span className="gold-shimmer">Treatments</span></h1>
          <p className="page-hero__subtitle">Comprehensive dental care explained clearly, planned carefully, and delivered with comfort.</p>
        </div>
      </div>

      <div className="container services-page__body">
        <section id="all-treatments" className="treatment-catalog">
          {treatments.map((category) => (
            <div key={category.category} className="treatment-catalog__group">
              <div className="treatment-catalog__group-title">
                <span>{categoryIcons[category.category]}</span>
                <h3>{category.category}</h3>
              </div>
              <div className="treatment-catalog__grid">
                {category.items.map((treatment) => {
                  const hydratedTreatment = { ...treatment, category: category.category }
                  return (
                    <button
                      key={treatment.title}
                      type="button"
                      className={`treatment-catalog__card ${activeTreatment?.title === treatment.title ? 'active' : ''}`}
                      onClick={() => openTreatment(hydratedTreatment)}
                    >
                      <img src={treatment.image} alt="" loading="lazy" />
                      <span>{treatment.title}</span>
                      <small>{treatment.bestFor}</small>
                      <em>→</em>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </section>

        {activeTreatment && renderTreatmentDetail(activeTreatment)}
      </div>

      <div className="page-cta">
        <div className="container page-cta__inner">
          <h2 className="section-title">Not Sure Which <span>Treatment</span> You Need?</h2>
          <p className="page-cta__sub">Book a consultation and our specialists will create a personalised treatment plan for you.</p>
          <Link to="/contact" className="btn-gold"><span>Book Consultation</span></Link>
        </div>
      </div>
    </div>
  )
}
