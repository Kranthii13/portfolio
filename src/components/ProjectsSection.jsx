import { useState } from 'react'

export function ProjectsSection({ projects }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [copiedId, setCopiedId] = useState(null)

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  const handleCopyLink = (url, id) => {
    navigator.clipboard.writeText(url)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <section id="projects" className="section-wrap">
      <div className="container">
        <div className="section-title-wrap animate-on-scroll">
          <span className="eyebrow">Technical Portfolio</span>
          <h2 className="section-heading">Featured Systems & Architecture</h2>
          <p className="section-subheading">
            Detailed breakdown of production microservices, full-stack platforms, and AI engines with key architectural features.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="filter-pills animate-on-scroll visible">
          <button
            type="button"
            className={`filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Systems ({projects.length})
          </button>
          <button
            type="button"
            className={`filter-pill ${activeFilter === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ai')}
          >
            AI & Lakehouse ({projects.filter(p => p.category === 'ai').length})
          </button>
          <button
            type="button"
            className={`filter-pill ${activeFilter === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveFilter('backend')}
          >
            Backend & Microservices ({projects.filter(p => p.category === 'backend').length})
          </button>
          <button
            type="button"
            className={`filter-pill ${activeFilter === 'web' ? 'active' : ''}`}
            onClick={() => setActiveFilter('web')}
          >
            Frontend & Platforms ({projects.filter(p => p.category === 'web').length})
          </button>
        </div>

        {/* Projects Grid */}
        <div className="showcase-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="showcase-card apple-card">
              <div className="showcase-banner" style={{ background: project.gradient }}>
                <span className="banner-badge">{project.badge}</span>
                <div className="banner-actions">
                  <button
                    type="button"
                    className="banner-copy-btn"
                    onClick={() => handleCopyLink(project.repoUrl, project.id)}
                    title="Copy repository link"
                    aria-label="Copy repository link"
                  >
                    <i className={copiedId === project.id ? 'fa-solid fa-check' : 'fa-regular fa-clone'}></i>
                    {copiedId === project.id ? ' Copied' : ''}
                  </button>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="banner-github-btn"
                    title="Open GitHub Repository"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <i className="fa-brands fa-github"></i> Repository
                  </a>
                </div>
              </div>

              <div className="showcase-body">
                <div className="showcase-meta">
                  <span className="showcase-tag">{project.tag}</span>
                </div>

                <h3 className="showcase-title">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-title-link"
                    title="Click to view repository on GitHub"
                  >
                    {project.title} <i className="fa-solid fa-arrow-up-right-from-square title-ext-icon"></i>
                  </a>
                </h3>

                {/* Architecture Subtitle */}
                {project.architecture && (
                  <div className="project-arch-pill" dangerouslySetInnerHTML={{ __html: project.architecture }} />
                )}

                <p className="showcase-desc">{project.description}</p>

                {/* Recruiter-Focused Key Features List */}
                {project.keyFeatures && (
                  <div className="project-key-features">
                    <span className="feat-header"><i className="fa-solid fa-microchip"></i> Key Architectural Features:</span>
                    <ul className="feat-list">
                      {project.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="showcase-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                <div className="showcase-footer">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link"
                  >
                    <i className="fa-brands fa-github"></i> Inspect Code & README <i className="fa-solid fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
