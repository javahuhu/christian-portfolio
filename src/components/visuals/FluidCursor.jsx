import { useEffect, useRef } from 'react'
import { createFluidSimulation } from '../../lib/fluidSimulation'
import './FluidCursor.css'

export function FluidCursor() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d', { alpha: true })
    if (!context) return
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = window.matchMedia('(pointer: fine)')
    let simulation, pixels, previous, pending, frame = 0, lastFrame = 0, lastMove = 0
    let width, height
    const enabled = () => !preference.matches && finePointer.matches && !document.hidden
    const stop = () => { cancelAnimationFrame(frame); frame = 0; previous = null; pending = null }
    const resize = () => {
      stop()
      const aspect = window.innerWidth / window.innerHeight
      width = Math.round(180 * Math.min(1, aspect))
      height = Math.round(180 / Math.max(1, aspect))
      canvas.width = Math.max(32, width); canvas.height = Math.max(32, height)
      width = canvas.width; height = canvas.height
      simulation = createFluidSimulation(width, height)
      pixels = context.createImageData(width, height)
    }
    const render = now => {
      if (!enabled()) { stop(); return }
      if (pending) {
        const { x, y, dx, dy } = pending
        const hue = now * .00024
        const color = [0, 2.1, 4.2].map(offset => .5 + .5 * Math.sin(hue + offset))
        const steps = Math.min(12, Math.max(1, Math.ceil(Math.hypot(dx, dy) / 4)))
        for (let i = 1; i <= steps; i++) simulation.splat(x - dx * (1 - i / steps), y - dy * (1 - i / steps), dx / steps, dy / steps, color)
        pending = null
      }
      simulation.step(Math.min((now - lastFrame) / 1000 || 1 / 60, 1 / 30))
      simulation.paint(pixels.data)
      context.putImageData(pixels, 0, 0)
      lastFrame = now
      if (now - lastMove < 11000) frame = requestAnimationFrame(render)
      else { context.clearRect(0, 0, width, height); stop() }
    }
    const move = event => {
      if (!enabled() || event.pointerType === 'touch') return
      const x = event.clientX / window.innerWidth * width
      const y = event.clientY / window.innerHeight * height
      if (previous) {
        pending = { x, y, dx: x - previous.x + (pending?.dx ?? 0), dy: y - previous.y + (pending?.dy ?? 0) }
        lastMove = performance.now()
        if (!frame) { lastFrame = lastMove; frame = requestAnimationFrame(render) }
      }
      previous = { x, y }
    }
    const resetPointer = () => { previous = null }
    const onPreference = () => { stop(); context.clearRect(0, 0, width, height) }
    resize()
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('resize', resize)
    document.documentElement.addEventListener('pointerleave', resetPointer)
    document.addEventListener('visibilitychange', onPreference)
    preference.addEventListener('change', onPreference)
    finePointer.addEventListener('change', onPreference)
    return () => {
      stop()
      window.removeEventListener('pointermove', move)
      window.removeEventListener('resize', resize)
      document.documentElement.removeEventListener('pointerleave', resetPointer)
      document.removeEventListener('visibilitychange', onPreference)
      preference.removeEventListener('change', onPreference)
      finePointer.removeEventListener('change', onPreference)
    }
  }, [])
  return <canvas ref={canvasRef} className="fluid-cursor" aria-hidden="true" />
}
