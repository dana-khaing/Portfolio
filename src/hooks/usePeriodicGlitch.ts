import { useState, useEffect } from 'react'

const INTERVAL_MS = 60_000
const GLITCH_DURATION_MS = 900

export function usePeriodicGlitch() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const trigger = () => {
      setActive(true)
      const off = setTimeout(() => setActive(false), GLITCH_DURATION_MS)
      return off
    }

    const id = setInterval(trigger, INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  return active
}
