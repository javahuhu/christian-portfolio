import './TechLogo.css'

export function TechLogo({ src, name }) {
  return (
    <span className="tech-logo">
      <img src={src} alt="" loading="lazy" />
      <span aria-hidden="true">{name.slice(0, 2)}</span>
    </span>
  )
}
