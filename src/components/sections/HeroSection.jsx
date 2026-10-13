import { profile } from '../../data/portfolioData'
import { Button } from '../ui/Button'
import { Arrow } from '../ui/Arrow'
import './HeroSection.css'

export function HeroSection() {
  return (
    <header className="hero-section" id="home">
      <div className="hero-topline"><p className="eyebrow">{profile.name} / Software developer</p><a className="availability" href="#contact"><i/>Open to opportunities</a></div>
      <div className="hero-title"><h1 aria-label="Mobile. Web. Backend. Built to work together."><span className="hero-line" aria-hidden="true">{['Mobile.', 'Web.', 'Backend.'].map(word => <span className="hero-word-mask" key={word}><span className="hero-word">{word}</span></span>)}</span><span className="hero-line hero-line--accent" aria-hidden="true">{['Built', 'to', 'work', 'together.'].map(word => <span className="hero-word-mask" key={word}><span className="hero-word">{word}</span></span>)}</span></h1><button className="hero-spark-button" aria-label="Give the star a spin" title="Give it a spin"><svg className="hero-spark" viewBox="0 0 80 80" aria-hidden="true"><path d="M40 2C40 30 30 40 2 40c28 0 38 10 38 38 0-28 10-38 38-38C50 40 40 30 40 2Z"/></svg></button></div>
      <div className="hero-bottom">
        <div className="hero-copy">
          <p>I’m Christian, a full-stack developer working with Flutter, React, and Python APIs. I build the interfaces people use and the services that make them work—from guided pet-health assessments to team workspaces and online storefronts.</p>
          <div className="hero-actions"><Button href="#projects">Explore my work</Button><a className="resume-link" href="/Christian-Paul-Gelera-Resume.pdf" download>Download résumé <Arrow direction="down" size={14}/></a></div>
        </div>
        <div className="hero-note"><span>BASED IN THE PHILIPPINES</span><p>From the first interface<br/>to the final deployment.</p><a href={profile.github} target="_blank" rel="noreferrer">Find me on GitHub ↗</a></div>
      </div>
      <a className="hero-scroll" href="#projects"><span>Scroll to explore</span><span aria-hidden="true">↓</span></a>
    </header>
  )
}
