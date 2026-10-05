import { profile } from '../../data/portfolioData'
import './Footer.css'

export function Footer() {
  return <footer className="footer"><p>© {new Date().getFullYear()} {profile.shortName}</p><span>Built with care. Always learning.</span><a href="#home">Back to top ↑</a></footer>
}
