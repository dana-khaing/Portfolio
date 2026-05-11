import { useState, useEffect } from 'react'

interface CountUpProps {
  target: number
  duration?: number
  delay?: number
  className?: string
}

export default function CountUp({ target, duration = 1200, delay = 0, className = '' }: CountUpProps) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const start = performance.now()
      const step = (now: number) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(Math.round(eased * target))
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, delay * 1000)
    return () => clearTimeout(timeout)
  }, [target, duration, delay])

  return <span className={className}>{value}</span>
}
