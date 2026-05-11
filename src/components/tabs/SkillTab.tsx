import { motion } from 'framer-motion'
import StatBar from '../ui/StatBar'
import { character } from '../../data/character'

const groupColors: Record<string, string> = {
  Languages: 'text-int bar-int',
  Frontend:  'text-atk bar-atk',
  Backend:   'text-def bar-def',
  Database:  'text-mag bar-mag',
  Tools:     'text-spd bar-spd',
}

const groupBg: Record<string, string> = {
  Languages: 'border-int/30',
  Frontend:  'border-atk/30',
  Backend:   'border-def/30',
  Database:  'border-mag/30',
  Tools:     'border-spd/30',
}

export default function SkillTab() {
  return (
    <div className="h-full overflow-y-auto pr-1 flex flex-col gap-4">
      {Object.entries(character.skills).map(([group, skills], gi) => {
        const [textColor, barColor] = groupColors[group].split(' ')
        return (
          <motion.div
            key={group}
            className={`game-panel rounded p-3 border ${groupBg[group]}`}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: gi * 0.1 }}
          >
            <div className={`text-xs uppercase tracking-widest mb-2 font-game ${textColor}`}>
              ◆ {group}
            </div>
            <div className="flex flex-col gap-2">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-2 group"
                  initial={{ x: -8, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: gi * 0.1 + i * 0.06 + 0.1 }}
                >
                  <span className="text-xs font-game text-muted w-28 truncate group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <div className="flex-1">
                    <StatBar
                      value={skill.value}
                      max={100}
                      colorClass={barColor}
                      delay={gi * 0.1 + i * 0.06 + 0.1}
                      height="h-1.5"
                    />
                  </div>
                  <span className={`text-xs font-game tabular-nums w-8 text-right ${textColor}`}>
                    {skill.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
