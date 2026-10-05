import { profile } from '../../data/portfolioData'
import { Button } from '../ui/Button'
import { Arrow } from '../ui/Arrow'
import './HeroSection.css'

export function HeroSection() {
  return (
    <header className="hero-section" id="home">
      <div className="hero-topline"><p className="eyebrow">{profile.name} / Software developer</p><a className="availability" href="#contact"><i/>Open to opportunities</a></div>
      <h1>Thoughtful software.<br/><span>Built for real life.</span></h1>
      <div className="hero-bottom">
        <div className="hero-copy">
          <p>I’m Christian, a full-stack developer turning complex problems into simple, reliable mobile and web experiences.</p>
          <div className="hero-actions"><Button href="#projects">Explore my work</Button><a className="resume-link" href="/Christian-Paul-Gelera-Resume.pdf" download>Download résumé <Arrow direction="down" size={14}/></a></div>
        </div>
        <div className="hero-note"><span>BASED IN THE PHILIPPINES</span><p>From the first interface<br/>to the final deployment.</p><a href={profile.github} target="_blank" rel="noreferrer">Find me on GitHub ↗</a></div>
      </div>
    </header>
  )
}
