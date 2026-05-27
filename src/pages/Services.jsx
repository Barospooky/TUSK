import React from 'react'
import { Link } from 'react-router-dom'
import './PageCommon.css'

const featuredServices = [
  {
    eyebrow: 'Smile Designing',
    title: 'Smile & Aesthetics',
    copy: 'Personalised smile enhancement planning with veneers, laminates, caps, and aesthetic fillings tailored to facial balance and dental harmony.',
    image: '/service-smile-designing.png',
  },
  {
    eyebrow: 'Facial Aesthetics',
    title: 'Facial Aesthetics',
    copy: 'Non-surgical facial aesthetic support including Botox and fillers when indicated for balanced, refreshed results with a refined, natural finish.',
    image: '/service-facial-aesthetics.png',
  },
  {
    eyebrow: 'Teeth Whitening & Bleaching',
    title: 'Teeth Whitening & Bleaching',
    copy: 'Management of discoloured teeth with professional bleaching, polishing, and tooth-coloured aesthetic finishing.',
    image: '/service-teeth-whitening.png',
  },
  {
    eyebrow: 'Tooth-Coloured Cosmetic Fillings',
    title: 'Tooth-Coloured Cosmetic Fillings',
    copy: 'Natural-looking restorations used to rebuild decayed, chipped, or discoloured teeth without compromising aesthetics.',
    image: '/service-tooth-coloured-fillings.png',
  },
  {
    eyebrow: 'Root Canal Treatment',
    title: 'Root Canal Treatment',
    copy: 'Treatment for toothache and deep long-standing cavities by removing infection and preserving the natural tooth whenever possible.',
    image: '/service-root-canal-treatment.png',
  },
  {
    eyebrow: 'Severe Dental Pain Due To Infection',
    title: 'Severe Dental Pain Due To Infection',
    copy: 'Treatment of teeth that are severely painful due to infection of teeth, with immediate relief planning and stabilising care.',
    image: '/service-emergency-dental-pain-care.png',
  },
  {
    eyebrow: 'Dental Swelling & Infection Management',
    title: 'Dental Swelling & Infection Management',
    copy: 'Focused treatment for facial swelling and oral infections caused by dental disease, with stabilisation and follow-up care.',
    image: '/service-dental-swelling-infection.png',
  },
  {
    eyebrow: 'Broken & Traumatic Tooth Care',
    title: 'Broken & Traumatic Tooth Care',
    copy: 'Restoration planning for fractured teeth caused by sports injuries, accidents, or sudden dental trauma.',
    image: '/service-broken-traumatic-tooth-care.png',
  },
  {
    eyebrow: 'Metal Braces',
    title: 'Metal Braces',
    copy: 'Reliable correction for crooked, crowded, or malaligned teeth using durable fixed orthodontic appliances.',
    image: '/service-metal-braces.png',
  },
  {
    eyebrow: 'Ceramic Braces',
    title: 'Ceramic Braces',
    copy: 'Aesthetic brace systems that blend more discreetly with natural teeth while correcting alignment effectively.',
    image: '/service-ceramic-braces.png',
  },
  {
    eyebrow: 'Invisible Aligners',
    title: 'Invisible Aligners',
    copy: 'Clear aligner therapy for modern, low-visibility smile correction with guided treatment sequencing.',
    image: '/service-invisible-aligners.png',
  },
  {
    eyebrow: 'Orthodontic Consultation & Diagnosis',
    title: 'Orthodontic Consultation & Diagnosis',
    copy: 'Comprehensive assessment and treatment planning for bite correction, smile alignment, and dentofacial harmony.',
    image: '/service-orthodontic-consultation.png',
  },
  {
    eyebrow: 'Dental Implants',
    title: 'Dental Implants',
    copy: 'Long-term replacement of missing teeth with implant-supported restorations for function, stability, and a natural look.',
    image: '/service-dental-implants.png',
  },
  {
    eyebrow: 'Removable Complete & Partial Dentures',
    title: 'Removable Complete & Partial Dentures',
    copy: 'Custom dentures for single or multiple missing teeth, designed for comfort, appearance, and practical daily use.',
    image: '/service-dentures.png',
  },
  {
    eyebrow: 'Fixed Bridges & Crowns',
    title: 'Fixed Bridges & Crowns',
    copy: 'Replacement and reinforcement solutions including fixed bridges, tooth-coloured caps, and metal caps.',
    image: '/service-fixed-bridges-crowns.png',
  },
  {
    eyebrow: 'Broken Tooth Reconstruction',
    title: 'Broken Tooth Reconstruction',
    copy: 'Management of severely broken teeth with restorative options aimed at preserving teeth when extraction can be avoided.',
    image: '/service-broken-tooth-reconstruction.png',
  },
  {
    eyebrow: 'Professional Cleaning & Scaling',
    title: 'Professional Cleaning & Scaling',
    copy: 'Regular clean-up and scaling to remove deposits, improve gum health, and support fresher breath.',
    image: '/service-cleaning-scaling.png',
  },
  {
    eyebrow: 'Bad Breath Management',
    title: 'Bad Breath Management',
    copy: 'Diagnosis-led care for bad breath, combining professional cleaning, cause assessment, and practical counselling.',
    image: '/service-bad-breath-management.png',
  },
]

const treatments = [
  {
    category: 'Smile & Aesthetics',
    items: [
      {
        name: 'Smile Designing',
        desc: 'Personalised smile enhancement planning with veneers, laminates, caps, and aesthetic fillings tailored to facial balance and dental harmony.',
        duration: 'Custom',
        sessions: 'Planned in stages',
      },
      {
        name: 'Facial Aesthetics',
        desc: 'Non-surgical facial aesthetic support including Botox and fillers when indicated for balanced, refreshed results.',
        duration: '30-60 min',
        sessions: 'As advised',
      },
      {
        name: 'Teeth Whitening & Bleaching',
        desc: 'Management of discoloured teeth with professional bleaching, polishing, and tooth-coloured aesthetic finishing.',
        duration: '45-90 min',
        sessions: '1-2',
      },
      {
        name: 'Tooth-Coloured Cosmetic Fillings',
        desc: 'Natural-looking restorations used to rebuild decayed, chipped, or discoloured teeth without compromising aesthetics.',
        duration: '30-60 min',
        sessions: '1',
      },
    ],
  },
  {
    category: 'Root Canal & Pain Relief',
    items: [
      {
        name: 'Root Canal Treatment',
        desc: 'Treatment for toothache and deep long-standing cavities by removing infection and preserving the natural tooth whenever possible.',
        duration: '60-90 min',
        sessions: '1-2',
      },
      {
        name: 'Severe Dental Pain Due To Infection',
        desc: 'Treatment of teeth that are severely painful due to infection of teeth, with immediate relief planning and stabilising care.',
        duration: '30-60 min',
        sessions: 'As needed',
      },
      {
        name: 'Dental Swelling & Infection Management',
        desc: 'Focused treatment for facial swelling and oral infections caused by dental disease, with stabilisation and follow-up care.',
        duration: '30-90 min',
        sessions: 'Case-based',
      },
      {
        name: 'Broken & Traumatic Tooth Care',
        desc: 'Restoration planning for fractured teeth caused by sports injuries, accidents, or sudden dental trauma.',
        duration: '45-90 min',
        sessions: 'Case-based',
      },
    ],
  },
  {
    category: 'Orthodontics',
    items: [
      {
        name: 'Metal Braces',
        desc: 'Reliable correction for crooked, crowded, or malaligned teeth using durable fixed orthodontic appliances.',
        duration: '12-24 months',
        sessions: 'Monthly reviews',
      },
      {
        name: 'Ceramic Braces',
        desc: 'Aesthetic brace systems that blend more discreetly with natural teeth while correcting alignment effectively.',
        duration: '12-24 months',
        sessions: 'Monthly reviews',
      },
      {
        name: 'Invisible Aligners',
        desc: 'Clear aligner therapy for modern, low-visibility smile correction with guided treatment sequencing.',
        duration: '6-18 months',
        sessions: 'Planned refinements',
      },
      {
        name: 'Orthodontic Consultation & Diagnosis',
        desc: 'Comprehensive assessment and treatment planning for bite correction, smile alignment, and dentofacial harmony.',
        duration: '30-45 min',
        sessions: 'Initial + follow-up',
      },
    ],
  },
  {
    category: 'Replacement & Restoration',
    items: [
      {
        name: 'Dental Implants',
        desc: 'Long-term replacement of missing teeth with implant-supported restorations for function, stability, and a natural look.',
        duration: '3-6 months',
        sessions: 'Multi-stage',
      },
      {
        name: 'Removable Complete & Partial Dentures',
        desc: 'Custom dentures for single or multiple missing teeth, designed for comfort, appearance, and practical daily use.',
        duration: '2-4 visits',
        sessions: '1 treatment plan',
      },
      {
        name: 'Fixed Bridges & Crowns',
        desc: 'Replacement and reinforcement solutions including fixed bridges, tooth-coloured caps, and metal caps.',
        duration: '2-3 visits',
        sessions: '1 treatment plan',
      },
      {
        name: 'Broken Tooth Reconstruction',
        desc: 'Management of severely broken teeth with restorative options aimed at preserving teeth when extraction can be avoided.',
        duration: 'Case-based',
        sessions: 'Case-based',
      },
    ],
  },
  {
    category: 'General & Surgical Care',
    items: [
      {
        name: 'Professional Cleaning & Scaling',
        desc: 'Regular clean-up and scaling to remove deposits, improve gum health, and support fresher breath.',
        duration: '30-60 min',
        sessions: 'Every 6 months',
      },
      {
        name: 'Bad Breath Management',
        desc: 'Diagnosis-led care for bad breath, combining professional cleaning, cause assessment, and practical counselling.',
        duration: '30-45 min',
        sessions: 'As needed',
      },
      {
        name: 'Tooth Extraction / Surgical Removal',
        desc: 'Tooth extraction or surgical removal for teeth that are severely damaged, infected, or badly broken, including wisdom tooth extraction when needed.',
        duration: '30-60 min',
        sessions: '1',
      },
      {
        name: 'Oral & Facial Pain Management',
        desc: 'Evaluation and management of pain in the mouth and facial region with referral-aware, multidisciplinary planning when required.',
        duration: '30-45 min',
        sessions: 'Case-based',
      },
    ],
  },
]

export default function Services() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__inner">
          <span className="section-label">What We Offer</span>
          <h1 className="page-hero__title">Our <span className="gold-shimmer">Services</span></h1>
          <p className="page-hero__subtitle">Comprehensive dental care delivered with precision, artistry, and genuine compassion.</p>
        </div>
      </div>

      <div className="container services-page__body">
        {featuredServices.map((service) => (
          <section key={service.eyebrow} className="services-feature">
            <div className="services-feature__content">
              <span className="section-label">{service.eyebrow}</span>
              <h2 className="services-feature__title">{service.title}</h2>
              <p className="services-feature__copy">{service.copy}</p>
              <Link to="/contact" className="btn-gold services-feature__cta">
                <span>Book This Treatment</span>
              </Link>
            </div>

            <div className="services-feature__media">
              <img
                src={service.image}
                alt={`${service.title} service visual`}
                className="services-feature__image"
              />
            </div>
          </section>
        ))}

        {treatments.map((cat, ci) => (
          <div key={ci} className="services-category">
            <div className="services-category__header">
              <span className="section-label">{cat.category}</span>
              <div className="divider">
                <div className="divider-line" />
                <span className="divider-icon">◆</span>
                <div className="divider-line" />
              </div>
            </div>
            <div className="treatments-grid">
              {cat.items.map((item, ii) => (
                <div key={ii} className="treatment-card">
                  <div className="treatment-card__header">
                    <h3 className="treatment-card__name">{item.name}</h3>
                    <span className="treatment-card__cat">{cat.category}</span>
                  </div>
                  <p className="treatment-card__desc">{item.desc}</p>
                  <div className="treatment-card__meta">
                    <div className="treatment-card__meta-item">
                      <span className="treatment-card__meta-label">Duration</span>
                      <span className="treatment-card__meta-val">{item.duration}</span>
                    </div>
                    <div className="treatment-card__meta-item">
                      <span className="treatment-card__meta-label">Sessions</span>
                      <span className="treatment-card__meta-val">{item.sessions}</span>
                    </div>
                  </div>
                  <Link to="/contact" className="treatment-card__link">Book This Treatment →</Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="page-cta">
        <div className="container page-cta__inner">
          <h2 className="section-title">Not Sure Which <span>Treatment</span> You Need?</h2>
          <p className="page-cta__sub">Book a free consultation and our specialists will create a personalised treatment plan for you.</p>
          <Link to="/contact" className="btn-gold"><span>Book Free Consultation</span></Link>
        </div>
      </div>
    </div>
  )
}
