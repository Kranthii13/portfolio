export function ExperienceSection({ experiences }) {
  return (
    <section id="experience" className="section-wrap">
      <div className="container">
        <div className="section-title-wrap animate-on-scroll">
          <span className="eyebrow">Track Record</span>
          <h2 className="section-heading">Professional Experience</h2>
          <p className="section-subheading">
            Building scalable AI workflows, distributed data query layers, and robust cloud services.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="apple-card experience-card animate-on-scroll">
              <div className="exp-top">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company"><i className="fa-solid fa-building"></i> {exp.company}</div>
                </div>
                <div className="exp-meta">
                  <span className="exp-badge">{exp.period}</span>
                  <span className="exp-loc"><i className="fa-solid fa-location-dot"></i> {exp.location}</span>
                </div>
              </div>

              <div className="exp-projects">
                {exp.highlights.map((h, pIdx) => (
                  <div key={pIdx} className="exp-proj-block">
                    <h4 className="exp-proj-title">{h.project}</h4>
                    <ul className="exp-bullets">
                      {h.points.map((pt, bIdx) => (
                        <li key={bIdx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
