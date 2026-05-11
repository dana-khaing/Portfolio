import { motion } from 'framer-motion'
import GameIcon from '../ui/GameIcon'
import StatBar from '../ui/StatBar'
import { character } from '../../data/character'

const statIcons: Record<string, Parameters<typeof GameIcon>[0]['name']> = {
  ATK: 'sword',
  DEF: 'shield',
  MAG: 'magic',
  SPD: 'wind',
  INT: 'star',
}

const statBarColors: Record<string, string> = {
  atk: 'bar-atk',
  def: 'bar-def',
  mag: 'bar-mag',
  spd: 'bar-spd',
  int: 'bar-int',
}

const statTextColors: Record<string, string> = {
  atk: 'text-atk',
  def: 'text-def',
  mag: 'text-mag',
  spd: 'text-spd',
  int: 'text-int',
}

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-3 gap-3 text-xs font-game">
      {/* Stats column */}
      <div className="flex flex-col gap-1.5">
        <div className="text-xs text-cyan/50 uppercase tracking-widest mb-1">◆ Stats</div>
        {character.stats.map((s, i) => (
          <motion.div
            key={s.key}
            className="flex items-center gap-1.5 hover:bg-cyan/5 rounded px-1 transition-colors group"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.08 + 0.3 }}
          >
            <GameIcon name={statIcons[s.key]} size={12} className={statTextColors[s.color]} />
            <span className="text-muted w-8">{s.key}</span>
            <span className={`ml-auto font-game ${statTextColors[s.color]} group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]`}>
              {s.value}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Attributes column */}
      <div className="flex flex-col gap-1.5">
        <div className="text-xs text-cyan/50 uppercase tracking-widest mb-1">◆ Attributes</div>
        {character.attributes.map((a, i) => (
          <motion.div
            key={a.name}
            className="flex flex-col gap-0.5"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.08 + 0.4 }}
          >
            <div className="flex justify-between items-center">
              <span className="text-muted text-xs">{a.name}</span>
              <span className="text-xs" style={{ color: a.color }}>{a.value}</span>
            </div>
            <StatBar
              value={a.value}
              max={100}
              colorClass={statBarColors[character.stats.find(s => s.label.includes(a.name.split(' ')[0]))?.color ?? 'atk']}
              delay={i * 0.08 + 0.4}
              height="h-1.5"
            />
          </motion.div>
        ))}
      </div>

      {/* Equipment column */}
      <div className="flex flex-col gap-1.5">
        <div className="text-xs text-cyan/50 uppercase tracking-widest mb-1">◆ Equipment</div>
        {character.equipment.map((e, i) => (
          <motion.div
            key={e.slot}
            className="flex flex-col group cursor-default hover:bg-cyan/5 rounded px-1 py-0.5 transition-colors"
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.08 + 0.5 }}
          >
            <span className="text-[11px] text-muted/60">{e.slot}</span>
            <span className="text-[11px] text-primary/90 group-hover:text-cyan transition-colors group-hover:translate-x-0.5 transform duration-150">
              {e.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
