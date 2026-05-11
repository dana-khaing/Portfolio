import { motion } from 'framer-motion'

interface StatBarProps {
  value: number
  max: number
  colorClass: string
  delay?: number
  height?: string
  showShimmer?: boolean
}

export default function StatBar({ value, max, colorClass, delay = 0, height = 'h-2', showShimmer = false }: StatBarProps) {
  const pct = Math.min((value / max) * 100, 100)

  return (
    <div className={`w-full ${height} bg-white/5 rounded-sm overflow-hidden relative`}>
      <motion.div
        className={`h-full ${colorClass} rounded-sm relative`}
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {showShimmer && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer bg-[length:200%_100%]" />
        )}
      </motion.div>
      {/* Glow edge */}
      <motion.div
        className="absolute top-0 bottom-0 w-1 bg-white/40 blur-sm"
        initial={{ left: 0 }}
        animate={{ left: `${pct}%` }}
        transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ transform: 'translateX(-50%)' }}
      />
    </div>
  )
}
