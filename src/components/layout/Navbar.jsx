import { useRef, useState } from 'react'
import { navigationItems } from '../../data/portfolioData'
import { Icon } from '../ui/Icon'
import './Navbar.css'

export function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef(null)
  function handleKeyDown(event) {
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false)
      menuButton.current?.focus()
    }
  }
  return (
    <div className="nav-wrap" onKeyDown={handleKeyDown}>
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>christian<span>.</span></a>
        <div id="navigation-links" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {navigationItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </div>
        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}><Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18}/></button>
          <button ref={menuButton} className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="navigation-links" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}><Icon name={menuOpen ? 'close' : 'menu'} size={22}/></button>
        </div>
      </nav>
    </div>
  )
}
