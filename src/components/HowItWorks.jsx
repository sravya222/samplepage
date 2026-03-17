import './HowItWorks.css'
import useReveal from '../hooks/useReveal'

const steps = [
  {
    num: '01',
    title: 'Share Your Requirement',
    desc: 'Contact us with your project idea, reference files, or specifications via phone or email.',
  },
  {
    num: '02',
    title: 'Get a Quote',
    desc: "We review your requirements and provide a transparent cost estimate and timeline.",
  },
  {
    num: '03',
    title: 'Design & Approval',
    desc: 'Our team creates 2D/3D designs and shares them with you for review and approval before production.',
  },
  {
    num: '04',
    title: 'Manufacturing',
    desc: 'We proceed with printing, fabrication, or electronics as per the approved design with quality checks.',
  },
  {
    num: '05',
    title: 'Delivery',
    desc: 'Final product is post-processed, quality inspected, and delivered to you on time.',
  },
]

export default function HowItWorks() {
  const ref = useReveal()
  return (
    <section className="how-it-works" id="how-it-works">
      <div ref={ref} className="hiw-container reveal">
        <h2 className="section-title">How It Works</h2>
        <div className="about-divider" />
        <p className="hiw-subtitle">
          A simple, transparent process from your idea to the finished product.
        </p>
        <div className="hiw-steps stagger">
          {steps.map((s, i) => (
            <div className="hiw-step" key={s.num}>
              <div className="hiw-step-num">{s.num}</div>
              {i < steps.length - 1 && <div className="hiw-connector" />}
              <h3 className="hiw-step-title">{s.title}</h3>
              <p className="hiw-step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
