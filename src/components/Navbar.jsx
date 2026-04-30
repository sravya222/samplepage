import { useState, useEffect } from 'react'
import logo from '../assets/logo.jpeg'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-brand">
        <img src={logo} alt="Fabtronix" className="navbar-logo-img" />
        <span className="navbar-brand-name">FABTRONIX</span>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-contact">
        <span className="nav-phone">📞 8978510399</span>
        <span className="nav-email">✉ fabtronix26@gmail.com</span>
      </div>
    </nav>
  )
}
