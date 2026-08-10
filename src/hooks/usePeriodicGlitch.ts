import { useState, useEffect } from 'react'

const INTERVAL_MS = 10_000
const GLITCH_DURATION_MS = 3_500

export function usePeriodicGlitch() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    let offTimeout: ReturnType<typeof setTimeout>

    const trigger = () => {
      setActive(true)
      offTimeout = setTimeout(() => setActive(false), GLITCH_DURATION_MS)
    }

    const id = setInterval(trigger, INTERVAL_MS)
    return () => {
      clearInterval(id)
      clearTimeout(offTimeout)
    }
  }, [])

  return active
}
