export function Header({ isDark, setIsDark, showMenu, setShowMenu, scrolled }) {
  return (
    <header className={`apple-nav-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <nav className="apple-nav">
        <a href="#home" className="apple-logo">
          <span className="apple-symbol"></span>
          <span className="apple-brand">Kranthi Bachali</span>
        </a>

        <ul className={`apple-links ${showMenu ? 'mobile-open' : ''}`}>
          <li><a href="#home" onClick={() => setShowMenu(false)}>Overview</a></li>
          <li><a href="#experience" onClick={() => setShowMenu(false)}>Experience</a></li>
          <li><a href="#skills" onClick={() => setShowMenu(false)}>Capabilities</a></li>
          <li><a href="#projects" onClick={() => setShowMenu(false)}>Repositories</a></li>
          <li><a href="#education" onClick={() => setShowMenu(false)}>Education</a></li>
          <li><a href="#contact" onClick={() => setShowMenu(false)}>Contact</a></li>
        </ul>

        <div className="nav-right">
          {/* Theme Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={() => setIsDark(!isDark)}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            <i className={isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}></i>
          </button>

          <a href="mailto:kranthikumarss28@gmail.com" className="apple-btn-pill">Get in Touch</a>

          <button
            className={`apple-burger ${showMenu ? 'open' : ''}`}
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  )
}
