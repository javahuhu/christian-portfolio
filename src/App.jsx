import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { EngineeringSection } from './components/sections/EngineeringSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { StackSection } from './components/sections/StackSection'
import { useTheme } from './hooks/useTheme'
import './App.css'

function App() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="site-content" id="main">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <EngineeringSection />
        <StackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
export default App
