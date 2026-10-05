import { useState } from 'react'
import { selectedProjects } from '../../data/portfolioData'
import { ProjectCard } from '../projects/ProjectCard'
import { ProjectDialog } from '../projects/ProjectDialog'
import './ProjectsSection.css'

export function ProjectsSection() {
  const [filter, setFilter] = useState('All')
  const [activeProject, setActiveProject] = useState(null)
  const [initialImageIndex, setInitialImageIndex] = useState(0)
  const [initialView, setInitialView] = useState('overview')
  function openProject(project, imageIndex) {
    setInitialImageIndex(imageIndex ?? 0)
    setInitialView(imageIndex === undefined ? 'overview' : 'screens')
    setActiveProject(project)
  }
  const visibleProjects = selectedProjects.filter((project) => filter === 'All' || project.category === filter)
  return (
    <section className="projects-section page-section" id="projects" aria-labelledby="projects-title">
      <div className="projects-heading"><div><p className="eyebrow">01 / Selected work</p><h2 id="projects-title">Projects with a purpose<span>.</span></h2><p>Explore the problem, the workflow, and the screens behind each project.</p></div>
        <div className="project-filters" role="group" aria-label="Filter projects">{['All', 'Web', 'Mobile'].map((category) => <button key={category} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}<span>{category === 'All' ? selectedProjects.length : selectedProjects.filter(p => p.category === category).length}</span></button>)}</div>
      </div>
      <p className="visually-hidden" role="status">Showing {visibleProjects.length} {filter.toLowerCase()} projects</p>
      <div className="project-grid">{visibleProjects.map((project) => <ProjectCard key={project.id} project={project} index={selectedProjects.indexOf(project)} onOpen={openProject}/>)}</div>
      {activeProject && <ProjectDialog project={activeProject} initialIndex={initialImageIndex} initialView={initialView} onClose={() => setActiveProject(null)}/>}
    </section>
  )
}
