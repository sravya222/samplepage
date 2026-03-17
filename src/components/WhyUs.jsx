import './WhyUs.css'
import useReveal from '../hooks/useReveal'

const reasons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
        <circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4 4-4"/>
      </svg>
    ),
    title: 'Precision & Quality',
    desc: 'Every project is executed with meticulous attention to detail, meeting tight tolerances and industry standards.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Fast Turnaround',
    desc: 'Rapid prototyping and quick delivery cycles so your projects stay on schedule without compromising quality.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Cost Effective',
    desc: 'Affordable engineering solutions for students, startups, and industries without sacrificing quality.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Expert Team',
    desc: 'Founded by B.Tech Mechanical Engineering graduates with 1.5+ years of hands-on industry experience.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'End-to-End Solutions',
    desc: 'From initial concept and 2D/3D design right through to fabrication, printing, finishing, and electronics.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: 'Dedicated Support',
    desc: 'Direct communication with our team throughout your project — no middlemen, no delays.',
  },
]

export default function WhyUs() {
  const ref = useReveal()
  return (
    <section className="why-us" id="why-us">
      <div ref={ref} className="why-us-container reveal">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="about-divider" />
        <p className="why-us-subtitle">
          We bring together engineering expertise, modern technology, and a passion for precision to
          deliver results that exceed expectations.
        </p>
        <div className="why-us-grid stagger">
          {reasons.map((r) => (
            <div className="why-card" key={r.title}>
              <div className="why-card-icon">{r.icon}</div>
              <h3 className="why-card-title">{r.title}</h3>
              <p className="why-card-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
