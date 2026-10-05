import './Tag.css'

export function Tag({ children, tone = '' }) {
  return <span className={`tag ${tone}`}>{children}</span>
}

export function TagRow({ children }) {
  return <div className="tag-row">{children}</div>
}
