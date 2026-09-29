export function RecruiterOverview({ highlights, metrics }) {
  return (
    <section className="section-wrap recruiter-snapshot-section">
      <div className="container">
        <div className="section-title-wrap animate-on-scroll">
          <span className="eyebrow">At A Glance</span>
          <h2 className="section-heading">Recruiter & Engineering Snapshot</h2>
          <p className="section-subheading">
            Key professional details, availability status, core competencies, and verified production metrics.
          </p>
        </div>

        {/* Quick Highlights Grid */}
        <div className="recruiter-pill-grid animate-on-scroll">
          {highlights.map((item, idx) => (
            <div key={idx} className="apple-card recruiter-stat-card">
              <div className="rec-card-icon"><i className={item.icon}></i></div>
              <div className="rec-card-content">
                <span className="rec-card-title">{item.title}</span>
                <span className="rec-card-val">{item.val}</span>
                <span className="rec-card-sub" dangerouslySetInnerHTML={{ __html: item.sub }}></span>
              </div>
            </div>
          ))}
        </div>

        {/* Production Impact Metrics Bento */}
        <div className="impact-metrics-grid animate-on-scroll delay-1">
          {metrics.map((m, idx) => (
            <div key={idx} className="apple-card impact-metric-card">
              <div className="metric-number-wrap">
                <span className="metric-number">{m.metric}</span>
                <span className="metric-label">{m.label}</span>
              </div>
              <p className="metric-detail">{m.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
