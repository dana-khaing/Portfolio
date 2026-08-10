import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  swayAmp: number
  swaySpeed: number
  swayPhase: number
}

const PARTICLE_COUNT = 60

function spawnParticle(canvas: HTMLCanvasElement, y = canvas.height + Math.random() * 10): Particle {
  return {
    x: Math.random() * canvas.width,
    y,
    size: Math.random() * 1.8 + 0.4,
    speed: Math.random() * 0.5 + 0.25,
    opacity: Math.random() * 0.5 + 0.3,
    swayAmp: Math.random() * 10 + 3,
    swaySpeed: Math.random() * 0.02 + 0.01,
    swayPhase: Math.random() * Math.PI * 2,
  }
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Spread the initial batch across the full height so the rise already looks
    // in progress on load; every respawn after that originates from the bottom.
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () =>
      spawnParticle(canvas, Math.random() * canvas.height)
    )

    let frame = 0
    let animId: number
    const draw = () => {
      frame++
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles) {
        // Fades in as it lifts off the bottom, fades out again near the top —
        // an ember arc rather than a flat, ever-present drift.
        const riseProgress = Math.min(Math.max(1 - p.y / canvas.height, 0), 1)
        const fade = Math.sin(riseProgress * Math.PI)
        const sway = Math.sin(frame * p.swaySpeed + p.swayPhase) * p.swayAmp

        ctx.beginPath()
        ctx.arc(p.x + sway, p.y, p.size, 0, Math.PI * 2)
        // Alternate between purple and fuchsia particles
        const [r, g, b] = p.size > 1.2 ? [232, 121, 249] : [168, 85, 247]
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity * fade})`
        ctx.fill()

        p.y -= p.speed
        if (p.y < -5) Object.assign(p, spawnParticle(canvas))
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  )
}
