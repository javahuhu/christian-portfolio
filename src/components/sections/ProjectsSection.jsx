import { useState } from 'react'
import { selectedProjects } from '../../data/portfolioData'
import { ProjectCard } from '../projects/ProjectCard'
import { ProjectDialog } from '../projects/ProjectDialog'
import './ProjectsSection.css'

export function ProjectsSection() {
  const [filter, setFilter] = useState('All')
  const [activeProject, setActiveProject] = useState(null)
  const visibleProjects = selectedProjects.filter((project) => filter === 'All' || project.category === filter)
  return (
    <section className="projects-section page-section" id="projects" aria-labelledby="projects-title">
      <div className="projects-heading"><div><p className="eyebrow">01 / Selected work</p><h2 id="projects-title">A few things I’ve built<span>.</span></h2><p>Different ideas. The same care in every detail.</p></div>
        <div className="project-filters" role="group" aria-label="Filter projects">{['All', 'Web', 'Mobile'].map((category) => <button key={category} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}<span>{category === 'All' ? selectedProjects.length : selectedProjects.filter(p => p.category === category).length}</span></button>)}</div>
      </div>
      <p className="visually-hidden" role="status">Showing {visibleProjects.length} {filter.toLowerCase()} projects</p>
      <div className="project-grid">{visibleProjects.map((project) => <ProjectCard key={project.id} project={project} index={selectedProjects.indexOf(project)} onOpen={setActiveProject}/>)}</div>
      {activeProject && <ProjectDialog project={activeProject} onClose={() => setActiveProject(null)}/>}
    </section>
  )
}
