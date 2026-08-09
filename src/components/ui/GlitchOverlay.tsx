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

    let frame = 0
    let raf: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Horizontal glitch slices
      const slices = 6 + Math.floor(Math.random() * 8)
      for (let i = 0; i < slices; i++) {
        const y = Math.random() * canvas.height
        const h = 2 + Math.random() * 14
        const shift = (Math.random() - 0.5) * 40
        ctx.fillStyle = `rgba(168,85,247,${0.04 + Math.random() * 0.06})`
        ctx.fillRect(shift, y, canvas.width, h)
      }

      // RGB aberration bands
      if (Math.random() > 0.4) {
        const bandY = Math.random() * canvas.height
        const bandH = 4 + Math.random() * 20
        ctx.fillStyle = `rgba(255,0,100,0.06)`
        ctx.fillRect(-4, bandY, canvas.width, bandH)
        ctx.fillStyle = `rgba(0,200,255,0.06)`
        ctx.fillRect(4, bandY, canvas.width, bandH)
      }

      // Noise dots
      for (let i = 0; i < 60; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        ctx.fillStyle = `rgba(168,85,247,${0.3 + Math.random() * 0.5})`
        ctx.fillRect(x, y, 2, 1)
      }

      frame++
      if (frame < 28) raf = requestAnimationFrame(draw)
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
          transition={{ duration: 0.05 }}
        >
          {/* Canvas noise layer */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          {/* Full-screen RGB shift via mix-blend-mode */}
          <motion.div
            className="absolute inset-0"
            animate={{
              x: [0, -6, 4, -2, 0, 3, -4, 0],
              skewX: [0, 1.5, -1, 0.5, 0],
            }}
            transition={{ duration: 0.5, times: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.85, 1] }}
            style={{
              background: 'linear-gradient(180deg, rgba(168,85,247,0.03) 0%, transparent 40%, rgba(0,200,255,0.03) 100%)',
              mixBlendMode: 'screen',
            }}
          />

          {/* Sweep scan band */}
          <motion.div
            className="absolute left-0 right-0 h-[3px]"
            style={{ background: 'rgba(168,85,247,0.4)', filter: 'blur(1px)' }}
            initial={{ top: '-1%' }}
            animate={{ top: '101%' }}
            transition={{ duration: 0.6, ease: 'linear' }}
          />

          {/* Vignette flash */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 40%, rgba(100,0,180,0.25) 100%)',
            }}
            animate={{ opacity: [0, 1, 0.4, 1, 0] }}
            transition={{ duration: 0.9, times: [0, 0.15, 0.4, 0.7, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
