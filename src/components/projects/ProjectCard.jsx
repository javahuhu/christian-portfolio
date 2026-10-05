import { Tag, TagRow } from '../ui/Tag'
import { ProjectGallery } from './ProjectGallery'
import { useReveal } from '../../hooks/useReveal'
import './ProjectCard.css'

export function ProjectCard({ project, index, onOpen }) {
  const ref = useReveal()
  return (
    <article ref={ref} className={`project-card reveal project-card--${project.id}`} style={{ '--reveal-delay': `${index % 2 * 90}ms` }}>
      <ProjectGallery project={project} onOpen={onOpen}/>
      <div className="project-meta"><span>{String(index + 1).padStart(2, '0')} / {project.category} application</span></div>
      <h3><button onClick={() => onOpen(project)}>{project.title}<span aria-hidden="true">↗</span></button></h3>
      <p>{project.story.summary}</p>
      <button className="project-card__story" onClick={() => onOpen(project)}>Explore the project <span aria-hidden="true">↗</span></button>
      {project.repositoryUrl && <a className="project-card__repository" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>View on GitHub ↗</a>}
      <TagRow>{project.tags.slice(0, 3).map(([tag]) => <Tag key={tag}>{tag}</Tag>)}</TagRow>
    </article>
  )
}
