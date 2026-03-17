import './Services.css'
import useReveal from '../hooks/useReveal'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
        <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/><line x1="13" y1="13" x2="17" y2="13"/>
        <line x1="13" y1="17" x2="15" y2="17"/>
      </svg>
    ),
    title: '2D Design Services',
    desc: 'Expert 2D drafting and design services tailored for engineering and manufacturing. We transform concepts into precise technical drawings, ensuring every detail meets industry standards for production readiness.',
    features: [
      'CAD software expertise & precision drafting',
      'Technical blueprints & schematics',
      'Design optimization & DFM analysis',
      'Manufacturing process compatibility',
    ],
    img: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80',
    imgAlt: '2D Design',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: '3D Design Services',
    desc: 'Comprehensive 3D modeling solutions that bring your ideas to life. From initial concept to complex assembly, we create high-fidelity models ready for visualization, prototyping, and final manufacturing.',
    features: [
      'Advanced 3D modeling & CAD visualization',
      'Complex geometry & assembly design',
      'Rendering & presentation capabilities',
      'Seamless 3D printing integration',
    ],
    img: 'https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=800&q=80',
    imgAlt: '3D Design',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>
        <path d="M7 8h10"/><path d="M7 12h6"/>
      </svg>
    ),
    title: '3D Printing Services',
    desc: 'Rapid prototyping and production using cutting-edge 3D printing technology. We offer a wide range of materials to suit functional testing, aesthetic models, and end-use parts with superior finish and accuracy.',
    features: [
      'Multi-material support (PLA, ABS, PETG, Resin)',
      'High-precision rapid prototyping',
      'Custom part production & post-processing',
      'Material selection guidance',
    ],
    img: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&q=80',
    imgAlt: '3D Printing',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Fabrication',
    desc: 'Custom metal and mechanical fabrication built to exact specifications. From structural frames to intricate components, our fabrication services deliver strength, precision, and reliability.',
    features: [
      'Machine frames & structural assemblies',
      'Custom mechanical parts & brackets',
      'Welding, cutting & forming',
      'Material selection & sourcing support',
    ],
    img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
    imgAlt: 'Fabrication',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
        <circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/>
      </svg>
    ),
    title: 'Post Processing',
    desc: 'Finishing services that elevate your parts from raw output to polished, professional results. We handle everything from surface refinement to protective coatings.',
    features: [
      'Sanding, filing & surface smoothing',
      'Painting & colour matching',
      'Protective coatings & sealing',
      'Assembly & quality inspection',
    ],
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
    imgAlt: 'Post Processing',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: 'Electronic Microcontroller Boards',
    desc: 'End-to-end electronic solutions for IoT and automation. We design, program, and integrate microcontroller systems, providing custom hardware and software tailored to your specific project requirements.',
    features: [
      'Microcontroller programming & PCB design',
      'Arduino, ESP32 & embedded systems',
      'IoT solutions & sensor integration',
      'Custom electronics development',
    ],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    imgAlt: 'Electronics',
  },
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" width="16" height="16" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="10" cy="10" r="9" stroke="#00cfff" strokeWidth="1.5"/>
      <path d="M6.5 10.5l2.5 2.5 4.5-5" stroke="#00cfff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Services() {
  const ref = useReveal()
  return (
    <section className="services" id="services">
      <div ref={ref} className="services-container reveal">
        <h2 className="section-title">Our Services</h2>
        <p className="services-subtitle">
          From digital concepts to physical reality, we provide comprehensive engineering and
          manufacturing solutions to accelerate your innovation.
        </p>
        <div className="services-grid stagger">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-card-img">
                <img src={s.img} alt={s.imgAlt} className="service-img" loading="lazy" />
                <div className="service-card-icon-badge">{s.icon}</div>
              </div>
              <div className="service-card-body">
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <p className="service-features-label">KEY FEATURES</p>
                <ul className="service-features">
                  {s.features.map((f) => (
                    <li key={f}>
                      <CheckIcon />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
