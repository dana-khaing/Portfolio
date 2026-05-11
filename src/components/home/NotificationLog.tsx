import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { character } from '../../data/character'

export default function NotificationLog() {
  const [visible, setVisible] = useState<number[]>([])

  useEffect(() => {
    const timers = character.notifications.map((_, i) =>
      setTimeout(() => setVisible(v => [...v, i]), i * 600 + 400)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="game-panel rounded p-3 flex flex-col gap-1 h-full overflow-y-auto">
      <div className="text-xs text-cyan/50 uppercase tracking-widest mb-2 font-game">
        ◆ Quest Log
      </div>
      <AnimatePresence>
        {character.notifications.map((msg, i) =>
          visible.includes(i) ? (
            <motion.div
              key={i}
              className="text-xs text-muted font-game leading-relaxed py-1 border-b border-cyan/5 last:border-0"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {msg}
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>
  )
}
