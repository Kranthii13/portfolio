export function SkillsSection({ skillCategories }) {
  return (
    <section id="skills" className="section-wrap">
      <div className="container">
        <div className="section-title-wrap animate-on-scroll">
          <span className="eyebrow">Technical Mastery</span>
          <h2 className="section-heading">Capabilities & Tooling</h2>
          <p className="section-subheading">
            Comprehensive expertise spanning distributed systems, language model agents, and modern full-stack web platforms.
          </p>
        </div>

        <div className="skills-category-grid">
          {skillCategories.map((cat, idx) => (
            <div key={cat.title} className={`apple-card skill-cat-card animate-on-scroll delay-${(idx % 3) + 1}`}>
              <div className="skill-cat-header">
                <div className="cat-icon-circle"><i className={cat.icon}></i></div>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-tags-wrap">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
