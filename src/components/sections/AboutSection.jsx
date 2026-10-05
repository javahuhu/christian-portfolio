import { experienceTimeline, metrics, profile } from '../../data/portfolioData'
import './AboutSection.css'

export function AboutSection() {
  return (
    <section className="about-section page-section" id="about" aria-labelledby="about-title">
      <p className="eyebrow">02 / A little about me</p>
      <div className="about-grid">
        <div className="about-copy"><h2 id="about-title">Curious by nature.<br/>An engineer by practice.</h2><p>I’m {profile.name}, a developer based in {profile.location}. I enjoy making software that feels straightforward to use and stays reliable behind the scenes.</p><p>{profile.about}</p>
          <div className="stats">{metrics.map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}</div>
        </div>
        <div className="timeline" id="experience"><h3>Along the way</h3>{[...experienceTimeline].reverse().map(([date, title, text]) => <article className="timeline-row" key={title}><p>{date}</p><h4>{title}</h4><span>{text}</span></article>)}</div>
      </div>
    </section>
  )
}
