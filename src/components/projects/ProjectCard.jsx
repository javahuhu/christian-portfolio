import { Tag, TagRow } from '../ui/Tag'
import './ProjectCard.css'

export function ProjectCard({ project, index, onOpen }) {
  return (
    <article className={`project-card project-card--${project.id}`}>
      <button className="project-preview" onClick={() => onOpen(project)} aria-label={`View ${project.title} project`}>
        <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
        <span className="preview-action" aria-hidden="true">View project ↗</span>
      </button>
      <div className="project-meta"><span>{String(index + 1).padStart(2, '0')} / {project.category} application</span></div>
      <h3><button onClick={() => onOpen(project)}>{project.title}<span aria-hidden="true">↗</span></button></h3>
      <p>{project.subtitle}</p>
      {project.repositoryUrl && <a className="project-card__repository" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>View on GitHub ↗</a>}
      <TagRow>{project.tags.slice(0, 3).map(([tag]) => <Tag key={tag}>{tag}</Tag>)}</TagRow>
    </article>
  )
}
