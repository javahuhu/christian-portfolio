import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }
export const motionQuery = '(prefers-reduced-motion: no-preference)'
export const pointerMotionQuery = '(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)'
