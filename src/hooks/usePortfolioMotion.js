import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger, motionQuery, pointerMotionQuery } from '../lib/motion'

export function usePortfolioMotion() {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const root = ref.current
    const media = gsap.matchMedia()
    media.add(motionQuery, () => {
      const select = gsap.utils.selector(root)
      const entrance = gsap.timeline({ defaults: { ease: 'power3.out', duration: .9 } })
      entrance
        .from(select('.nav-wrap'), { y: -24, opacity: 0, clearProps: 'transform,opacity' })
        .from(select('.hero-topline > *'), { y: 18, opacity: 0, stagger: .12, clearProps: 'all' }, .12)
        .from(select('.hero-word'), { yPercent: 110, rotation: 4, stagger: .075, duration: 1.1, clearProps: 'transform' }, .22)
        .from(select('.hero-copy > p, .hero-actions > *, .hero-note, .hero-scroll'), { y: 24, opacity: 0, stagger: .1, clearProps: 'transform,opacity' }, .65)
        .from(select('.hero-spark-button'), { scale: 0, rotation: -150, duration: 1.3, ease: 'elastic.out(1, .65)', clearProps: 'transform' }, .6)
      const spark = root.querySelector('.hero-spark')
      const spin = gsap.to(spark, { rotation: 160, ease: 'none', scrollTrigger: { trigger: root.querySelector('.hero-section'), start: 'top top', end: 'bottom top', scrub: 1.8 } })
      const sparkButton = root.querySelector('.hero-spark-button')
      const play = () => {
        gsap.timeline({ defaults: { overwrite: 'auto' } })
          .fromTo(sparkButton, { rotation: 0, scale: 1 }, { rotation: 360, scale: 1.18, duration: 1.3, ease: 'elastic.out(1, .55)' })
          .to(sparkButton, { scale: 1, duration: .4 })
      }
      // Context records animations started by interaction as well as on mount.
      const context = gsap.context(() => {})
      context.add('play', play)
      sparkButton?.addEventListener('click', context.play)
      const focus = () => entrance.progress(1)
      root.querySelector('.hero-section')?.addEventListener('focusin', focus)
      const refresh = () => ScrollTrigger.refresh()
      document.fonts?.ready.then(() => { if (root.isConnected) refresh() })
      window.addEventListener('load', refresh)
      return () => {
        context.revert()
        spin.kill()
        sparkButton?.removeEventListener('click', context.play)
        root.querySelector('.hero-section')?.removeEventListener('focusin', focus)
        window.removeEventListener('load', refresh)
      }
    }, root)
    media.add(pointerMotionQuery, () => {
      const cleanups = []
      root.querySelectorAll('.button--primary, .hero-spark-button, .theme-toggle').forEach(button => {
        const xTo = gsap.quickTo(button, 'x', { duration: .45, ease: 'power3.out' })
        const yTo = gsap.quickTo(button, 'y', { duration: .45, ease: 'power3.out' })
        let bounds
        const enter = () => { bounds = button.getBoundingClientRect() }
        const move = event => {
          if (!bounds) enter()
          xTo(gsap.utils.clamp(-7, 7, (event.clientX - bounds.left - bounds.width / 2) * .15))
          yTo(gsap.utils.clamp(-5, 5, (event.clientY - bounds.top - bounds.height / 2) * .15))
        }
        const leave = () => { xTo(0); yTo(0); bounds = null }
        button.addEventListener('pointerenter', enter)
        button.addEventListener('pointermove', move)
        button.addEventListener('pointerleave', leave)
        button.addEventListener('blur', leave)
        cleanups.push(() => {
          button.removeEventListener('pointerenter', enter)
          button.removeEventListener('pointermove', move)
          button.removeEventListener('pointerleave', leave)
          button.removeEventListener('blur', leave)
        })
      })
      return () => cleanups.forEach(cleanup => cleanup())
    }, root)
    return () => media.revert()
  }, [])
  return ref
}
