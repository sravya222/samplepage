import { useEffect, useRef, useState } from 'react'
import './About.css'
import useReveal from '../hooks/useReveal'

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

function StatCard({ number, suffix, label }) {
  const [started, setStarted] = useState(false)
  const ref = useRef(null)
  const count = useCountUp(number, 1600, started)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="stat-card" ref={ref}>
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function About() {
  const ref = useReveal()
  return (
    <section className="about" id="about">
      <div ref={ref} className="about-container reveal">
        <h2 className="section-title">About Us</h2>
        <div className="about-divider" />
        <p className="about-text">
          <strong>FABTRONIX</strong> is a precision-focused engineering startup founded by Mechanical
          Engineering (B.Tech 2024) graduates with 1.5 years of hands-on experience in design,
          manufacturing, and rapid prototyping.
        </p>
        <p className="about-text">
          We specialize in delivering high-quality engineering solutions including 2D Designing,
          3D Designing, 3D Printing, Fabrication, Post Processing, and Electronics Supply.
        </p>
        <p className="about-text">
          Our mission is to provide innovative, accurate, and cost-effective engineering solutions
          for students, industries, startups, and research projects.
        </p>

        <div className="about-stats">
          <StatCard number={1} suffix=".5+" label="Years Experience" />
          <StatCard number={6} suffix="" label="Core Services" />
          <StatCard number={100} suffix="%" label="Precision Focus" />
        </div>
      </div>
    </section>
  )
}
