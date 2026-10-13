import { experience } from '../../data/experience'
import './ExperienceSection.css'

export function ExperienceSection() {
  return (
    <section className="experience-section page-section" id="experience" aria-labelledby="experience-title">
      <p className="eyebrow">Experience / From interface to infrastructure</p>
      <div className="experience-heading">
        <h2 id="experience-title">Where I’ve put it into practice.</h2>
        <a className="resume-link" href="/Christian-Paul-Gelera-Resume.pdf" download>Download full résumé ↗</a>
      </div>
      <div className="experience-list">
        {experience.map(job => (
          <article className="experience-card" key={job.company}>
            <header className="experience-card__header">
              <p className="experience-period">{job.period}{job.current && <span className="experience-current">Current</span>}</p>
              <h3>{job.role}</h3>
              <p className="experience-company">{job.company}</p>
              <p className="experience-location">{job.location}</p>
            </header>
            <div className="experience-details">
              {job.groups.map(group => (
                <div className="experience-group" key={group.title}>
                  <h4>{group.title}</h4>
                  <ul>{group.responsibilities.map(text => <li key={text}>{text}</li>)}</ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
