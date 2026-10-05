import { useEffect, useRef } from 'react'
import { Tag, TagRow } from '../ui/Tag'
import { Icon } from '../ui/Icon'
import './ProjectDialog.css'

export function ProjectDialog({ project, onClose }) {
  const dialogRef = useRef(null)
  useEffect(() => {
    const dialog = dialogRef.current
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
      dialog.close()
    }
  }, [])
  return (
    <dialog ref={dialogRef} className="project-dialog" aria-labelledby="project-dialog-title" onClose={(event) => { if (!event.currentTarget.open) onClose() }} onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <div className="project-dialog__content">
        <div className="project-dialog__heading"><div><p className="eyebrow">{project.category} application</p><h2 id="project-dialog-title">{project.title}</h2></div><button autoFocus className="dialog-close" aria-label="Close project details" onClick={onClose}><Icon name="close" size={22}/></button></div>
        <div className={`project-dialog__image ${project.category === 'Mobile' ? 'is-mobile' : ''}`}><img src={project.image} alt={project.imageAlt}/></div>
        <h3>{project.subtitle}</h3>
        <p className="project-dialog__description">{project.description}</p>
        {project.repositoryUrl && <a className="project-dialog__repository" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">View on GitHub ↗</a>}
        <TagRow>{project.tags.map(([tag]) => <Tag key={tag}>{tag}</Tag>)}</TagRow>
      </div>
    </dialog>
  )
}
