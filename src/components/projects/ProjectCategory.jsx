import './ProjectCategory.css'

export function ProjectCategory({ eyebrow, title, description, count, variant, children }) {
  return (
    <section className={`project-category project-category--${variant}`} aria-labelledby={`${variant}-projects-title`}>
      <div className="project-category__heading">
        <div>
          <span>{eyebrow}</span>
          <h3 id={`${variant}-projects-title`}>{title}</h3>
          <p>{description}</p>
        </div>
        <b>{String(count).padStart(2, '0')} projects</b>
      </div>
      {children}
    </section>
  )
}
