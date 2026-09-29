export function ContactSection() {
  return (
    <section id="contact" className="section-wrap">
      <div className="container">
        <div className="contact-glass-box animate-on-scroll">
          <div className="contact-badge"><span className="tag-dot"></span> Available for Engineering Roles</div>
          <h2 className="contact-title">Let's build groundbreaking software together.</h2>
          <p className="contact-desc">
            Open to discussions around AI systems, data platforms, and full stack engineering roles in Hyderabad, Bengaluru, or remote.
          </p>

          <div className="contact-buttons">
            <a href="mailto:kranthikumarss28@gmail.com" className="apple-button-primary email-btn">
              <i className="fa-regular fa-envelope"></i> kranthikumarss28@gmail.com
            </a>
            <a href="tel:+916304273921" className="apple-button-glass">
              <i className="fa-solid fa-phone"></i> +91 6304273921
            </a>
          </div>

          <div className="social-pill-group">
            <a href="https://github.com/Kranthii13" target="_blank" rel="noopener noreferrer" className="social-pill">
              <i className="fa-brands fa-github"></i> <span>GitHub (@Kranthii13)</span>
            </a>
            <a href="https://linkedin.com/in/kranthi-bachali13" target="_blank" rel="noopener noreferrer" className="social-pill">
              <i className="fa-brands fa-linkedin"></i> <span>LinkedIn</span>
            </a>
            <a href="mailto:kranthikumarss28@gmail.com" className="social-pill">
              <i className="fa-regular fa-envelope"></i> <span>Email</span>
            </a>
            <span className="social-pill info-pill">
              <i className="fa-solid fa-location-dot"></i> <span>Hyderabad, India</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="apple-footer">
      <div className="container footer-row">
        <div className="footer-left">
          <span className="footer-logo"> Kranthi Bachali</span>
          <p>Full Stack Engineer (AI Systems & Data Platforms) &bull; Hyderabad, India</p>
        </div>
        <div className="footer-right">
          <span>&copy; 2026 Kranthi Bachali. Engineered with React + Vite & Apple Design Standards.</span>
        </div>
      </div>
    </footer>
  )
}
