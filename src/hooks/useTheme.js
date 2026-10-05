import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const previewTheme = new URLSearchParams(window.location.search).get('theme')
    if (previewTheme === 'light' || previewTheme === 'dark') return previewTheme
    try {
      const savedTheme = localStorage.getItem('portfolio-theme')
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
    } catch { /* Theme switching also works when storage is unavailable. */ }
    return 'light'
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#171b18' : '#f8f7f4')
    try { localStorage.setItem('portfolio-theme', theme) } catch { /* Storage is optional. */ }
  }, [theme])
  return { theme, toggleTheme: () => setTheme((current) => current === 'dark' ? 'light' : 'dark') }
}
