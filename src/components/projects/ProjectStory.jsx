import './ProjectStory.css'

export function ProjectStory({ story }) {
  return (
    <div className="project-story">
      <dl className="project-facts">
        {story.facts.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
      </dl>
      <section className="story-context" aria-label="Project context">
        <p className="eyebrow">The problem</p>
        <p>{story.challenge}</p>
      </section>
      <section aria-labelledby="project-workflow-title">
        <p className="eyebrow">The experience</p>
        <h3 id="project-workflow-title">How the pieces come together</h3>
        <ol className="story-workflow">{story.workflow.map((step, index) => (
          <li key={step.title}><span className="story-step" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><div><h4>{step.title}</h4><p>{step.text}</p></div></li>
        ))}</ol>
      </section>
      <section className="story-focus" aria-label="Product design">
        <p className="eyebrow">Product design</p>
        <h3>{story.focusTitle}</h3>
        <p>{story.focus}</p>
      </section>
      {story.note && <p className="story-note">{story.note}</p>}
    </div>
  )
}
