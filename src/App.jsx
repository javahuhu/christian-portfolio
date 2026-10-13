import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { EngineeringSection } from './components/sections/EngineeringSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { StackSection } from './components/sections/StackSection'
import { useTheme } from './hooks/useTheme'
import { Reveal } from './components/ui/Reveal'
import './App.css'
import { FluidCursor } from './components/visuals/FluidCursor'
import { ExperienceSection } from './components/sections/ExperienceSection'
import './glass.css'
import './motion.css'
import { usePortfolioMotion } from './hooks/usePortfolioMotion'

function App() {
  const motionRef = usePortfolioMotion()
  const { theme, toggleTheme } = useTheme()
  return (
    <div ref={motionRef} className="portfolio-shell">
      <FluidCursor />
      <div className="reading-progress" aria-hidden="true"/>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="site-content" id="main">
        <HeroSection />
        <ProjectsSection />
        <Reveal><AboutSection /></Reveal>
        <Reveal><ExperienceSection /></Reveal>
        <Reveal><EngineeringSection /></Reveal>
        <Reveal><StackSection /></Reveal>
        <Reveal><ContactSection /></Reveal>
      </main>
      <Footer />
    </div>
  )
}
export default App
