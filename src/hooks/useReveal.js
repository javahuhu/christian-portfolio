import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const element = ref.current
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!element || preference.matches || !('IntersectionObserver' in window)) return
    const reveal = () => {
      element.dataset.reveal = 'visible'
      observer.disconnect()
    }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) reveal()
    }, { threshold: 0.06 })
    element.dataset.reveal = 'pending'
    observer.observe(element)
    element.addEventListener('focusin', reveal)
    preference.addEventListener('change', reveal)
    return () => {
      observer.disconnect()
      element.removeEventListener('focusin', reveal)
      preference.removeEventListener('change', reveal)
      delete element.dataset.reveal
    }
  }, [])
  return ref
}
