export function EducationSection({ educations, certifications }) {
  return (
    <section id="education" className="section-wrap">
      <div className="container">
        <div className="section-title-wrap animate-on-scroll">
          <span className="eyebrow">Academic Background</span>
          <h2 className="section-heading">Education & Certifications</h2>
        </div>

        <div className="apple-bento-grid">
          {educations.map((edu, idx) => (
            <div key={edu.degree} className={`bento-card animate-on-scroll ${idx > 0 ? `delay-${idx}` : ''}`}>
              <div className="bento-badge">
                <i className="fa-solid fa-graduation-cap"></i> {edu.degree} ({edu.period})
              </div>
              <h3>{edu.major}</h3>
              <p className="edu-school">{edu.institution}</p>
              <div className="edu-cgpa">Academic Grade: <strong>{edu.grade}</strong></div>
            </div>
          ))}

          <div className="bento-card animate-on-scroll delay-2">
            <div className="bento-badge"><i className="fa-solid fa-certificate"></i> Verified Credentials</div>
            <h3>Industry Certifications</h3>
            <ul className="cert-list">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <strong>{cert.name}</strong> &bull; {cert.issuer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
