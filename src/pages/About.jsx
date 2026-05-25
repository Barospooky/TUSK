import React from 'react'
import { Link } from 'react-router-dom'
import './PageCommon.css'

const team = [
  { name: 'Dr. Ramesh Subramaniam', role: 'Chief Dental Surgeon', spec: 'Implantology & Oral Surgery', exp: '15+ Years' },
  { name: 'Dr. Kavitha Nair', role: 'Cosmetic Dentist', spec: 'Veneers & Smile Design', exp: '12+ Years' },
  { name: 'Dr. Swapnil Yelmar', role: 'Consultant Orthodontist', spec: 'BDS, MDS (Orthodontics & Dentofacial Orthopaedics)', exp: '4 Years' },
  { name: 'Dr. Priya Menon', role: 'Periodontist', spec: 'Gum Health & Prevention', exp: '8+ Years' },
  { name: 'Dr. Heti Sunil Kacha', role: 'Consultant Oral and Maxillofacial Surgeon', spec: 'BDS, MDS Oral and Maxillofacial Surgery, Fellowship in Facial Esthetic and Cosmetology', exp: '2+ Years' },
  { name: 'Dr. Balasubramaniam Shankar', role: 'Endodontist', spec: 'Conservative Dentistry & Endodontic Care', exp: 'Specialist' },
]

export default function About() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__inner">
          <span className="section-label">Our Story</span>
          <h1 className="page-hero__title">About <span className="gold-shimmer">The Tusk</span></h1>
          <p className="page-hero__subtitle">Born from devotion, built on excellence — a clinic where every smile is treated as sacred.</p>
        </div>
      </div>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story__left">
              <span className="section-label">Our Origin</span>
              <h2 className="section-title">The Spirit Behind <span>The Tusk</span></h2>
              <div className="divider">
                <div className="divider-line" />
                <span className="divider-icon">◆</span>
                <div className="divider-line" />
              </div>
              <p style={{ color: 'var(--gray-light)', marginBottom: '1.2rem', lineHeight: 1.9 }}>
                The Tusk Dental Clinic was founded with a singular vision — to bring world-class dental care to Chennai while honouring the wisdom and grace of our cultural heritage. Our name and logo draw inspiration from Lord Ganesha, the divine remover of obstacles, whose broken tusk symbolises the sacrifice of excellence in pursuit of purpose.
              </p>
              <p style={{ color: 'var(--gray-light)', marginBottom: '1.2rem', lineHeight: 1.9 }}>
                Just as Ganesha used his tusk as a pen to transcribe knowledge, we use our expertise to craft smiles that tell the story of health, beauty, and confidence. Every patient who walks through our doors is met with the reverence they deserve.
              </p>
              <p style={{ color: 'var(--gray-light)', lineHeight: 1.9 }}>
                Over 12 years and 8,000+ treated smiles later, The Tusk stands as Chennai's premier luxury dental destination — where ancient wisdom meets the very forefront of modern dentistry.
              </p>
            </div>
            <div className="about-story__right">
              <div className="about-values">
                {[
                  { icon: '◆', title: 'Precision', desc: 'Every procedure executed with meticulous attention to detail.' },
                  { icon: '◈', title: 'Compassion', desc: 'Your comfort and confidence are at the heart of everything we do.' },
                  { icon: '✦', title: 'Excellence', desc: 'We hold ourselves to the highest clinical and aesthetic standards.' },
                  { icon: '❋', title: 'Trust', desc: 'Transparent communication and honest guidance, always.' },
                ].map((v, i) => (
                  <div key={i} className="about-value">
                    <div className="about-value__icon">{v.icon}</div>
                    <div>
                      <h4 className="about-value__title">{v.title}</h4>
                      <p className="about-value__desc">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: 'var(--navy-mid)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label">Our Experts</span>
            <h2 className="section-title">Meet the <span>Specialists</span></h2>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-card__avatar">
                  {member.name.split(' ').slice(1).map(w => w[0]).join('').slice(0, 2)}
                </div>
                <h3 className="team-card__name">{member.name}</h3>
                <div className="team-card__role">{member.role}</div>
                <div className="team-card__spec">{member.spec}</div>
                <div className="team-card__exp">{member.exp} Experience</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="page-cta">
        <div className="container page-cta__inner">
          <h2 className="section-title">Ready to Experience <span>The Difference?</span></h2>
          <p className="page-cta__sub">Join thousands of patients who trust The Tusk with their most valuable asset — their smile.</p>
          <Link to="/contact" className="btn-gold"><span>Book Your Visit</span></Link>
        </div>
      </div>
    </div>
  )
}
