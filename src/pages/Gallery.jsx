import React from 'react'
import './PageCommon.css'

const clinicGallery = [
  { image: '/clinic-treatment-room.jpeg', title: 'Treatment Suite' },
  { image: '/clinic-consultation-room.jpeg', title: 'Consultation Room' },
  { image: '/clinic-awards-hallway.jpeg', title: 'Clinic Interior' },
  { image: '/story-reception.jpeg', title: 'Reception Space' },
  { image: '/story-hallway.jpeg', title: 'Clinic Hallway' },
]

export default function Gallery() {
  return (
    <div className="page">
      <section className="section clinic-gallery-section">
        <div className="container">
          <div className="clinic-gallery__header">
            <span className="section-label">Our Clinic</span>
            <h2 className="section-title">Designed For Comfort. <span>Built For Care.</span></h2>
            <p>
              Explore the calm, carefully planned clinic spaces that support comfortable consultations,
              precise treatment, and confident visits at The Tusk Dental Clinic.
            </p>
          </div>

          <div className="clinic-gallery__grid">
            {clinicGallery.map((item, index) => (
              <figure key={item.title} className={`clinic-gallery__item clinic-gallery__item--${index + 1}`}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
