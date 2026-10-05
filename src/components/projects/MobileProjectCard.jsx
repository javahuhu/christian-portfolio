import { Tag, TagRow } from '../ui/Tag'
import './MobileProjectCard.css'

export function MobileProjectCard({ project }) {
  return (
    <article className={`mobile-project-card${project.featured ? ' mobile-project-card--featured' : ''}`}>
      <div className="mobile-project-card__stage">
        <span className="mobile-project-card__orbit" />
        <div className="phone-frame">
          <span className="phone-frame__speaker" />
          <span className="phone-frame__camera" />
          <img src={project.image} alt={`${project.title} mobile interface`} style={{ objectPosition: project.imagePosition }} />
          <span className="phone-frame__home" />
        </div>
      </div>
      <div className="mobile-project-card__content">
        <span className="mobile-project-card__type">{project.featured ? 'Featured mobile project' : 'Mobile application'}</span>
        <h4>{project.title}</h4>
        <h5>{project.subtitle}</h5>
        <p>{project.description}</p>
        <TagRow>{project.tags.map(([tag, tone]) => <Tag tone={tone} key={tag}>{tag}</Tag>)}</TagRow>
      </div>
    </article>
  )
}
