import { useState } from 'react'
import { DeviceFrame } from './DeviceFrame'
import './ProjectGallery.css'

export function ProjectGallery({ project, onOpen, initialIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(initialIndex)
  const images = project.images
  const activeImage = images[activeIndex]
  const hasMultiple = images.length > 1
  function move(direction) {
    setActiveIndex(index => (index + direction + images.length) % images.length)
  }
  function handleKeyDown(event) {
    if (!hasMultiple || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return
    event.preventDefault()
    move(event.key === 'ArrowLeft' ? -1 : 1)
  }
  const frame = <DeviceFrame image={activeImage} category={project.category} title={project.title}/>
  return (
    <div className={`project-gallery project-gallery--${project.id}${onOpen ? ' is-compact' : ''}`} role="region" aria-label={`${project.title} image gallery`} onKeyDown={handleKeyDown}>
      {onOpen ? <button className="gallery-stage" onClick={() => onOpen(project, activeIndex)} aria-label={`View ${project.title}: ${activeImage.caption}`}>
        {frame}<span className="preview-action" aria-hidden="true">Explore project ↗</span>
      </button> : <div className="gallery-stage">{frame}</div>}
      <div className="gallery-toolbar">
        <p className="gallery-caption" aria-live="polite" aria-atomic="true"><span>{String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>{activeImage.caption}</p>
        {hasMultiple && <div className="gallery-arrows"><button onClick={() => move(-1)} aria-label={`Previous ${project.title} image`}>←</button><button onClick={() => move(1)} aria-label={`Next ${project.title} image`}>→</button></div>}
      </div>
      {!onOpen && hasMultiple && <div className="gallery-thumbnails" aria-label="Choose an image">{images.map((image, index) => <button key={image.src} className="gallery-thumbnail" aria-pressed={activeIndex === index} onClick={() => setActiveIndex(index)} aria-label={`Show ${image.caption}`}><span className={`thumbnail-image${image.crop ? ` device-screen--${image.crop}` : ''}`}><img src={image.src} alt="" loading="lazy"/></span><span>{image.caption}</span></button>)}</div>}
    </div>
  )
}
