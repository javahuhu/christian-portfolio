import './TechLogo.css'

export function TechLogo({ src, name }) {
  return (
    <span className={`tech-logo${['Flask', 'GitHub'].includes(name) ? ' tech-logo--monochrome' : ''}`}>
      <img src={src} alt="" loading="lazy" />
    </span>
  )
}
