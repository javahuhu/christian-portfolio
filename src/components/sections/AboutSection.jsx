import { metrics, profile } from '../../data/portfolioData'
import './AboutSection.css'
import { education } from '../../data/experience'

export function AboutSection() {
  return (
    <section className="about-section page-section" id="about" aria-labelledby="about-title">
      <p className="eyebrow">02 / A little about me</p>
      <div className="about-grid">
        <div className="about-copy"><h2 id="about-title">Curious by nature.<br/>An engineer by practice.</h2><p>I’m {profile.name}, a developer based in {profile.location}. I enjoy making software that feels straightforward to use and stays reliable behind the scenes.</p><p>{profile.about}</p>
          <div className="stats">{metrics.map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}</div>
        </div>
        <aside className="education-card"><p className="eyebrow">Education</p><h3>{education.degree}</h3><p>{education.school}</p><p className="education-location">{education.location}</p><p className="education-date">{education.date}</p><span className="education-honors">{education.honors}</span></aside>
      </div>
    </section>
  )
}
