import { Tag, TagRow } from '../ui/Tag'
import './WebProjectCard.css'

export function WebProjectCard({ project }) {
  return (
    <article className="web-project-card">
      <div className="browser-frame">
        <div className="browser-frame__bar">
          <span/><span/><span/>
          <i>{project.title.toLowerCase().replaceAll(' ', '')}.app</i>
        </div>
        <div className="browser-frame__viewport">
          <img src={project.image} alt={`${project.title} web interface`} loading="lazy" />
        </div>
      </div>
      <div className="web-project-card__content">
        <span>Web application</span>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <TagRow>{project.tags.map(([tag, tone]) => <Tag tone={tone} key={tag}>{tag}</Tag>)}</TagRow>
      </div>
    </article>
  )
}
