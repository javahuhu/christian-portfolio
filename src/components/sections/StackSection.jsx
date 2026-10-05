import { additionalSkills, stackGroups } from '../../data/portfolioData'
import { SectionTitle } from '../ui/SectionTitle'
import { TechLogo } from '../ui/TechLogo'
import './StackSection.css'

export function StackSection() {
  return (
    <section className="stack-section page-section" id="stack">
      <SectionTitle>Tech Stack</SectionTitle>
      <div className="stack-grid">
        {stackGroups.map((group) => (
          <article className="stack-card" key={group.title}>
            <h3 className={group.tone}>{group.title}</h3>
            <ul>
              {group.items.map(([logo, name]) => (
                <li key={name}><TechLogo src={logo} name={name}/><span>{name}</span></li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="additional-skills" aria-label="Additional skills">
        <span>Also experienced with</span>
        {additionalSkills.map((skill) => <b key={skill}>{skill}</b>)}
      </div>
    </section>
  )
}
