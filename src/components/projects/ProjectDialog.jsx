import { useEffect, useRef } from 'react'
import { Tag, TagRow } from '../ui/Tag'
import { Icon } from '../ui/Icon'
import { ProjectGallery } from './ProjectGallery'
import { ProjectStory } from './ProjectStory'
import './ProjectDialog.css'
import { gsap, motionQuery } from '../../lib/motion'

export function ProjectDialog({ project, initialIndex, onClose }) {
  const dialogRef = useRef(null)
  useEffect(() => {
    const dialog = dialogRef.current
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    const media = gsap.matchMedia()
    media.add(motionQuery, () => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .fromTo(dialog, { y: 32, scale: .97, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: .55, clearProps: 'transform,opacity' })
        .from(dialog.querySelectorAll('.project-dialog__gallery, .project-dialog__overview'), { y: 20, opacity: 0, stagger: .09, duration: .55, clearProps: 'transform,opacity' }, .12)
    }, dialog)
    return () => {
      media.revert()
      document.body.style.overflow = previousOverflow
      dialog.close()
    }
  }, [])
  return (
    <dialog ref={dialogRef} className="project-dialog" aria-labelledby="project-dialog-title" onClose={(event) => { if (!event.currentTarget.open) onClose() }} onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <div className="project-dialog__content">
        <header className="project-dialog__heading">
          <div><p className="eyebrow">{project.story.domain}</p><h2 id="project-dialog-title">{project.title}</h2></div>
          <button autoFocus className="dialog-close" aria-label="Close project details" onClick={onClose}><Icon name="close" size={22}/></button>
        </header>
        <div className="project-dialog__columns">
          <section className="project-dialog__gallery" aria-label="Project screenshots">
            <p className="eyebrow">A closer look / {project.images.length} screens</p>
            <ProjectGallery project={project} initialIndex={initialIndex}/>
          </section>
          <section className="project-dialog__overview" aria-labelledby="project-overview-title" tabIndex={0}>
            <h3 id="project-overview-title">Overview</h3>
            <p className="project-dialog__description">{project.description}</p>
            <div className="project-dialog__tools">
              <TagRow>{project.tags.map(([tag]) => <Tag key={tag}>{tag}</Tag>)}</TagRow>
              {project.repositoryUrl && <a className="project-dialog__repository" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">View on GitHub ↗</a>}
            </div>
            <ProjectStory story={project.story}/>
          </section>
        </div>
      </div>
    </dialog>
  )
}
