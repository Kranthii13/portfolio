export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content-wrap animate-on-scroll visible">
        <div className="apple-tag-pill">
          <span className="tag-dot"></span>
          <span>Full Stack Engineer &bull; AI Systems & Data Platforms</span>
        </div>

        <h1 className="hero-headline">
          Kranthi Bachali <br />
          <span className="apple-gradient-text">Architecting intelligent systems & data platforms.</span>
        </h1>

        <p className="hero-description">
          Specialized in engineering end-to-end RAG pipelines, autonomous LangChain agents, high-speed Trino + Apache Iceberg lakehouses, and high-concurrency microservices architectures.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="apple-button-primary">
            Explore Top Repositories <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href="https://github.com/Kranthii13" target="_blank" rel="noopener noreferrer" className="apple-button-glass">
            <i className="fa-brands fa-github"></i> GitHub: @Kranthii13
          </a>
          <a href="https://linkedin.com/in/kranthi-bachali13" target="_blank" rel="noopener noreferrer" className="apple-button-glass">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </div>

        {/* Apple 3D Interactive Console Box */}
        <div className="apple-device-mockup">
          <div className="device-header">
            <div className="window-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="device-address">github.com/Kranthii13 &bull; production systems</div>
            <div className="device-status">
              <span className="pulse-live"></span> Operational
            </div>
          </div>
          <div className="device-screen">
            <div className="screen-grid">
              <div className="screen-card">
                <span className="sc-label">Lakehouse Execution</span>
                <span className="sc-val">Sub-second Latency</span>
                <div className="sc-bar"><div className="sc-bar-fill w-100"></div></div>
              </div>
              <div className="screen-card">
                <span className="sc-label">RAG Retrieval Precision</span>
                <span className="sc-val">Context Vector Search</span>
                <div className="sc-bar"><div className="sc-bar-fill w-95"></div></div>
              </div>
              <div className="screen-card">
                <span className="sc-label">Microservices Uptime</span>
                <span className="sc-val">99.9% Reliability</span>
                <div className="sc-bar"><div className="sc-bar-fill w-100"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
