import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  active: boolean
}

export default function GlitchOverlay({ active }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!active) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const start = performance.now()
    const CANVAS_DURATION = 3_100
    let raf: number

    const draw = () => {
      const elapsed = performance.now() - start
      if (elapsed > CANVAS_DURATION) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Intensity rises in the middle, fades at end
      const progress = elapsed / CANVAS_DURATION
      const intensity = progress < 0.5
        ? progress * 2
        : 1 - (progress - 0.5) * 1.4

      // Horizontal glitch slices
      const slices = Math.floor((6 + Math.random() * 10) * (0.5 + intensity))
      for (let i = 0; i < slices; i++) {
        const y = Math.random() * canvas.height
        const h = 2 + Math.random() * 18 * intensity
        const shift = (Math.random() - 0.5) * 60 * intensity
        ctx.fillStyle = `rgba(168,85,247,${(0.04 + Math.random() * 0.08) * intensity})`
        ctx.fillRect(shift, y, canvas.width, h)
      }

      // RGB aberration bands — more frequent at peak
      if (Math.random() > 0.3 - intensity * 0.2) {
        const bandY = Math.random() * canvas.height
        const bandH = 4 + Math.random() * 28 * intensity
        ctx.fillStyle = `rgba(255,0,100,${0.05 + intensity * 0.07})`
        ctx.fillRect(-6 * intensity, bandY, canvas.width, bandH)
        ctx.fillStyle = `rgba(0,200,255,${0.05 + intensity * 0.07})`
        ctx.fillRect(6 * intensity, bandY, canvas.width, bandH)
      }

      // Wide full-screen static flash
      if (Math.random() > 0.85) {
        ctx.fillStyle = `rgba(168,85,247,${0.015 * intensity})`
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      // Noise dots — density scales with intensity
      const dots = Math.floor(60 + 120 * intensity)
      for (let i = 0; i < dots; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        ctx.fillStyle = `rgba(168,85,247,${(0.25 + Math.random() * 0.55) * intensity})`
        ctx.fillRect(x, y, 2, 1)
      }

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [active])

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 99998 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.08 }}
        >
          {/* Canvas noise layer */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          {/* Full-screen viewport shake — multiple bursts over 3.2s */}
          <motion.div
            className="absolute inset-0"
            animate={{
              x:     [0, -7, 5, -3, 0, 4, -6, 2, 0, -5, 3, -2, 0],
              skewX: [0,  2, -1.5, 1, 0, -1, 2, -0.5, 0, 1.5, -1, 0.5, 0],
            }}
            transition={{
              duration: 3.2,
              times: [0, 0.06, 0.13, 0.2, 0.28, 0.38, 0.48, 0.57, 0.65, 0.75, 0.85, 0.93, 1],
              ease: 'easeInOut',
            }}
            style={{
              background: 'linear-gradient(180deg, rgba(168,85,247,0.04) 0%, transparent 40%, rgba(0,200,255,0.04) 100%)',
              mixBlendMode: 'screen',
            }}
          />

          {/* First sweep — fast, top to bottom */}
          <motion.div
            className="absolute left-0 right-0 h-[3px]"
            style={{ background: 'rgba(168,85,247,0.5)', filter: 'blur(1px)' }}
            initial={{ top: '-1%' }}
            animate={{ top: '101%' }}
            transition={{ duration: 1.1, ease: 'linear' }}
          />

          {/* Second sweep — slower, appears mid-glitch */}
          <motion.div
            className="absolute left-0 right-0 h-[2px]"
            style={{ background: 'rgba(0,200,255,0.35)', filter: 'blur(1px)' }}
            initial={{ top: '-1%', opacity: 0 }}
            animate={{ top: '101%', opacity: [0, 0, 0.8, 0.8, 0] }}
            transition={{ duration: 1.6, delay: 1.2, ease: 'linear' }}
          />

          {/* Vignette — pulses 3 times over the burst */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 35%, rgba(100,0,180,0.3) 100%)',
            }}
            animate={{ opacity: [0, 1, 0.3, 0.9, 0.2, 0.8, 0.1, 0] }}
            transition={{
              duration: 3.5,
              times: [0, 0.1, 0.25, 0.42, 0.58, 0.72, 0.88, 1],
            }}
          />

          {/* Horizontal static bar — flashes twice */}
          <motion.div
            className="absolute left-0 right-0"
            style={{
              top: '30%',
              height: '2px',
              background: 'rgba(168,85,247,0.6)',
              filter: 'blur(2px)',
            }}
            animate={{ opacity: [0, 1, 0, 0, 1, 0], scaleX: [1, 1.02, 1, 1, 1.01, 1] }}
            transition={{ duration: 3.5, times: [0, 0.08, 0.16, 0.55, 0.62, 0.72] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
