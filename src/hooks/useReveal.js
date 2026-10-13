import { useLayoutEffect, useRef } from 'react'
import { gsap, motionQuery } from '../lib/motion'

export function useReveal() {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return
    const media = gsap.matchMedia()
    media.add(motionQuery, () => {
      const cards = element.querySelectorAll('.experience-card, .approach-card, .stack-card, .education-card, .about-copy, .contact-content')
      const targets = cards.length ? [...cards] : [element]
      const animations = targets.map((target, index) => gsap.from(target, {
        y: 38, opacity: 0, duration: .85,
        delay: index % 4 * .07, ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: { trigger: target, start: 'top 94%', once: true },
      }))
      // Keyboard navigation must never land in an invisible card.
      const revealFocused = () => animations.forEach(animation => animation.progress(1))
      element.addEventListener('focusin', revealFocused)
      return () => element.removeEventListener('focusin', revealFocused)
    })
    return () => media.revert()
  }, [])
  return ref
}
