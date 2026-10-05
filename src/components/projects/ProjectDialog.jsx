import { useEffect, useRef, useState } from 'react'
import { Tag, TagRow } from '../ui/Tag'
import { Icon } from '../ui/Icon'
import { ProjectGallery } from './ProjectGallery'
import { ProjectStory } from './ProjectStory'
import './ProjectDialog.css'

export function ProjectDialog({ project, initialIndex, initialView = 'overview', onClose }) {
  const dialogRef = useRef(null)
  const [activeView, setActiveView] = useState(initialView)
  const overviewTabRef = useRef(null)
  const screensTabRef = useRef(null)
  function handleTabKeyDown(event) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    const next = event.key === 'Home' ? 'overview' : event.key === 'End' ? 'screens' : activeView === 'overview' ? 'screens' : 'overview'
    setActiveView(next)
    const nextTabRef = next === 'overview' ? overviewTabRef : screensTabRef
    nextTabRef.current?.focus()
  }
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
        <div className="project-dialog__heading"><div><p className="eyebrow">{project.story.domain}</p><h2 id="project-dialog-title">{project.title}</h2></div><button autoFocus className="dialog-close" aria-label="Close project details" onClick={onClose}><Icon name="close" size={22}/></button></div>
        <p className="project-dialog__description">{project.description}</p>
        <div className="project-dialog__tools"><TagRow>{project.tags.map(([tag]) => <Tag key={tag}>{tag}</Tag>)}</TagRow>{project.repositoryUrl && <a className="project-dialog__repository" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">View on GitHub ↗</a>}</div>
        <div className="project-tabs" role="tablist" aria-label="Project details" onKeyDown={handleTabKeyDown}>
          <button ref={overviewTabRef} id="project-overview-tab" role="tab" aria-selected={activeView === 'overview'} aria-controls="project-overview-panel" tabIndex={activeView === 'overview' ? 0 : -1} onClick={() => setActiveView('overview')}>Overview</button>
          <button ref={screensTabRef} id="project-screens-tab" role="tab" aria-selected={activeView === 'screens'} aria-controls="project-screens-panel" tabIndex={activeView === 'screens' ? 0 : -1} onClick={() => setActiveView('screens')}>Screens <span>{project.images.length}</span></button>
        </div>
        <div id="project-overview-panel" role="tabpanel" aria-labelledby="project-overview-tab" hidden={activeView !== 'overview'} tabIndex={0}><ProjectStory story={project.story}/><button className="story-view-screens" onClick={() => { setActiveView('screens'); screensTabRef.current?.focus() }}>Explore the {project.images.length} screens <span aria-hidden="true">↗</span></button></div>
        <div id="project-screens-panel" role="tabpanel" aria-labelledby="project-screens-tab" hidden={activeView !== 'screens'} tabIndex={0}><ProjectGallery project={project} initialIndex={initialIndex}/></div>
      </div>
    </dialog>
  )
}
