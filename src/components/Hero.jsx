import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
      >
        <source
          src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">FABTRONIX</h1>
        <p className="hero-subtitle">Innovating Tomorrow's Technology Today</p>
        <p className="hero-description">
          Expert 2D/3D Design, Advanced 3D Printing, and Cutting-Edge Electronic Solutions
        </p>
        <a href="#services" className="hero-btn">Explore Our Services</a>
      </div>

      <a href="#about" className="hero-scroll-down" aria-label="Scroll down">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </a>
    </section>
  )
}
