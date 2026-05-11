import { motion } from 'framer-motion'
import StatBar from './StatBar'
import CountUp from './CountUp'
import GameIcon from './GameIcon'
import { character } from '../../data/character'

interface AvatarStatusBarsProps {
  avatarUrl: string
  compact?: boolean
  onClick?: () => void
}

const bars = [
  { key: 'hp', label: 'HP', icon: 'hp' as const, color: 'bar-hp', data: character.hp, delay: 0 },
  { key: 'mp', label: 'MP', icon: 'mp' as const, color: 'bar-mp', data: character.mp, delay: 0.2 },
  { key: 'exp', label: 'EXP', icon: 'exp' as const, color: 'bar-exp', data: character.exp, delay: 0.4 },
]

export default function AvatarStatusBars({ avatarUrl, compact = false, onClick }: AvatarStatusBarsProps) {
  return (
    <motion.div
      className={`game-panel-bright rounded p-3 cursor-pointer group transition-all duration-300 hover:border-cyan/60
        ${compact ? 'flex items-center gap-3' : ''}`}
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
    >
      <div className={`flex ${compact ? 'gap-3 items-center' : 'flex-col gap-2'}`}>
        {/* Avatar + name row */}
        <div className="flex items-center gap-2">
          <div className="relative flex-shrink-0">
            <div className="w-12 h-12 rounded overflow-hidden border border-cyan/40 group-hover:border-cyan/80 transition-colors animate-pulse-glow">
              <img src={avatarUrl} alt="Dana Khaing" className="w-full h-full object-cover" />
            </div>
            {/* Rotating glow ring */}
            <div className="absolute inset-0 rounded border border-cyan/20 animate-pulse-glow" style={{ animationDelay: '1s' }} />
          </div>
          <div className="min-w-0">
            <div className="text-sm font-game text-primary truncate">{character.name}</div>
            <div className="text-xs text-cyan/70 truncate">{character.class}</div>
            <div className="text-xs text-muted">Lv. {character.level}</div>
          </div>
        </div>

        {/* HP / MP / EXP bars */}
        <div className={`flex flex-col gap-1.5 ${compact ? 'min-w-[140px]' : ''}`}>
          {bars.map(({ key, label, icon, color, data, delay }) => (
            <div key={key} className="flex items-center gap-1.5">
              <GameIcon name={icon} size={12} className={
                key === 'hp' ? 'text-hp' : key === 'mp' ? 'text-mp' : 'text-exp'
              } />
              <span className="text-xs text-muted w-7">{label}</span>
              <div className="flex-1">
                <StatBar
                  value={data.current}
                  max={data.max}
                  colorClass={color}
                  delay={delay}
                  height="h-1.5"
                  showShimmer={key === 'exp'}
                />
              </div>
              <span className="text-xs text-muted w-16 text-right tabular-nums">
                <CountUp target={data.current} delay={delay} duration={1200} />/{data.max}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
