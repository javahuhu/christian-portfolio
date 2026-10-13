import { useLayoutEffect, useRef } from 'react'
import { gsap, motionQuery, pointerMotionQuery } from '../lib/motion'

export function useGalleryMotion(activeIndex, compact) {
  const ref = useRef(null)
  const previousIndex = useRef(activeIndex)
  useLayoutEffect(() => {
    const root = ref.current
    const media = gsap.matchMedia()
    media.add(pointerMotionQuery, () => {
      if (!compact) return
      const stage = root.querySelector('.gallery-stage')
      const frame = root.querySelector('.device-frame')
      gsap.set(stage, { perspective: 900 })
      const rotateX = gsap.quickTo(frame, 'rotationX', { duration: .65, ease: 'power3.out' })
      const rotateY = gsap.quickTo(frame, 'rotationY', { duration: .65, ease: 'power3.out' })
      const lift = gsap.quickTo(frame, 'y', { duration: .6, ease: 'power3.out' })
      const move = event => {
        const bounds = stage.getBoundingClientRect()
        rotateX(-(event.clientY - bounds.top - bounds.height / 2) / bounds.height * 7)
        rotateY((event.clientX - bounds.left - bounds.width / 2) / bounds.width * 9)
        lift(-5)
      }
      const leave = () => { rotateX(0); rotateY(0); lift(0) }
      stage.addEventListener('pointermove', move)
      stage.addEventListener('pointerleave', leave)
      return () => { stage.removeEventListener('pointermove', move); stage.removeEventListener('pointerleave', leave) }
    }, root)
    return () => media.revert()
  }, [compact])
  useLayoutEffect(() => {
    const direction = activeIndex >= previousIndex.current ? 1 : -1
    const changed = activeIndex !== previousIndex.current
    previousIndex.current = activeIndex
    if (!changed) return
    const media = gsap.matchMedia()
    media.add(motionQuery, () => {
      gsap.fromTo(ref.current.querySelector('.device-screen'),
        { opacity: .3, x: direction * 12 },
        { opacity: 1, x: 0, duration: .45, ease: 'power3.out', clearProps: 'opacity,transform' })
      gsap.fromTo(ref.current.querySelector('.gallery-caption'),
        { opacity: .2, y: 6 }, { opacity: 1, y: 0, duration: .35, clearProps: 'opacity,transform' })
    }, ref.current)
    return () => media.revert()
  }, [activeIndex])
  return ref
}
