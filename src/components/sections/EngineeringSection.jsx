import { approachCards } from '../../data/portfolioData'
import { Icon } from '../ui/Icon'
import { SectionTitle } from '../ui/SectionTitle'
import './EngineeringSection.css'

export function EngineeringSection() {
  return (
    <section className="engineering-section page-section" id="engineering">
      <SectionTitle>Engineering Approach</SectionTitle>
      <div className="approach-grid">
        {approachCards.map((card) => (
          <article className="approach-card" key={card.title}>
            <div className="approach-card__icon"><Icon name={card.icon} size={22}/></div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
