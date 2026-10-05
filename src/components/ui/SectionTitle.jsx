import './SectionTitle.css'

export function SectionTitle({ children, compact = false }) {
  return (
    <h2 className={`section-title${compact ? ' section-title--compact' : ''}`}>
      <span className="section-title__dot" />
      {children}
    </h2>
  )
}
