import './Contact.css'
import useReveal from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()
  return (
    <section className="contact" id="contact">
      <div ref={ref} className="contact-container reveal">
        <h2 className="section-title">Contact Us</h2>
        <div className="about-divider" />
        <p className="contact-subtitle">Get in touch for queries, quotes, or project discussions</p>

        <div className="contact-info stagger">
          <div className="contact-card">
            <div className="contact-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <span className="contact-label">Mobile</span>
              <a href="tel:8978510399" className="contact-value">8978510399</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <span className="contact-label">Email</span>
              <a href="mailto:fabtronix26@gmail.com" className="contact-value">fabtronix26@gmail.com</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <span className="contact-label">Working Hours</span>
              <span className="contact-value">Available 24/7</span>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <span className="contact-label">Location</span>
              <span className="contact-value">Hyderabad, Telangana</span>
            </div>
          </div>
        </div>

        <div className="contact-services-tag">
          <p className="contact-serves-title">We Serve</p>
          <div className="contact-tags">
            {['Students','Startups','Industries','Research Projects','Freelancers'].map(t => (
              <span key={t} className="contact-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
