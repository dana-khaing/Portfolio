import { motion } from 'framer-motion'
import StatBar from '../ui/StatBar'
import CountUp from '../ui/CountUp'
import GameIcon from '../ui/GameIcon'
import { character } from '../../data/character'

const groupMeta: Record<string, {
  textColor: string
  barColor: string
  borderColor: string
  bgGlow: string
  icon: Parameters<typeof GameIcon>[0]['name']
}> = {
  Languages: { textColor: 'text-int',  barColor: 'bar-int',  borderColor: 'border-int/30',  bgGlow: 'from-int/5',   icon: 'star'   },
  Frontend:  { textColor: 'text-atk',  barColor: 'bar-atk',  borderColor: 'border-atk/30',  bgGlow: 'from-atk/5',   icon: 'sword'  },
  Backend:   { textColor: 'text-def',  barColor: 'bar-def',  borderColor: 'border-def/30',  bgGlow: 'from-def/5',   icon: 'shield' },
  Database:  { textColor: 'text-mag',  barColor: 'bar-mag',  borderColor: 'border-mag/30',  bgGlow: 'from-mag/5',   icon: 'magic'  },
  Tools:     { textColor: 'text-spd',  barColor: 'bar-spd',  borderColor: 'border-spd/30',  bgGlow: 'from-spd/5',   icon: 'wind'   },
}

const tierColors: Record<string, string> = {
  MASTER:  'text-exp  border-exp/50  bg-exp/10',
  EXPERT:  'text-cyan border-cyan/50 bg-cyan/10',
  SKILLED: 'text-green border-green/50 bg-green/10',
  ADEPT:   'text-muted border-muted/30 bg-white/5',
}

function getTier(value: number) {
  if (value >= 90) return 'MASTER'
  if (value >= 80) return 'EXPERT'
  if (value >= 70) return 'SKILLED'
  return 'ADEPT'
}

const groups = Object.entries(character.skills)

export default function SkillTab() {
  return (
    <div className="h-full overflow-y-auto pr-1">
      {/* 2-column grid: Languages+Frontend, Backend+Database, Tools full-width */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        {groups.slice(0, 4).map(([group, skills], gi) => {
          const meta = groupMeta[group]
          return (
            <SkillGroup
              key={group}
              group={group}
              skills={skills as readonly { readonly name: string; readonly value: number }[]}
              meta={meta}
              gi={gi}
            />
          )
        })}
      </div>
      {/* Tools spans full width */}
      {groups.slice(4).map(([group, skills], gi) => {
        const meta = groupMeta[group]
        return (
          <SkillGroup
            key={group}
            group={group}
            skills={skills as readonly { readonly name: string; readonly value: number }[]}
            meta={meta}
            gi={gi + 4}
            wide
          />
        )
      })}
    </div>
  )
}

function SkillGroup({
  group,
  skills,
  meta,
  gi,
  wide = false,
}: {
  group: string
  skills: readonly { readonly name: string; readonly value: number }[]
  meta: typeof groupMeta[string]
  gi: number
  wide?: boolean
}) {
  return (
    <motion.div
      className={`game-panel rounded-lg border ${meta.borderColor} bg-gradient-to-b ${meta.bgGlow} to-transparent overflow-hidden`}
      initial={{ y: 16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: gi * 0.08, duration: 0.4 }}
    >
      {/* Header */}
      <div className={`flex items-center gap-2 px-3 pt-3 pb-2 border-b ${meta.borderColor}`}>
        <span className={meta.textColor}>
          <GameIcon name={meta.icon} size={14} />
        </span>
        <span className={`text-xs font-game uppercase tracking-widest ${meta.textColor}`}>
          {group}
        </span>
        <span className={`ml-auto text-[9px] font-game px-1.5 py-0.5 rounded border ${meta.textColor} ${meta.borderColor} opacity-60`}>
          {skills.length} skills
        </span>
      </div>

      {/* Skill rows */}
      <div className={`flex flex-col gap-0 p-2 ${wide ? 'grid grid-cols-2 gap-x-4' : ''}`}>
        {skills.map((skill, i) => {
          const tier = getTier(skill.value)
          const delay = gi * 0.08 + i * 0.07 + 0.15
          return (
            <motion.div
              key={skill.name}
              className="group flex flex-col gap-1 px-1 py-1.5 rounded hover:bg-white/[0.03] transition-colors relative"
              initial={{ x: -12, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay, duration: 0.35 }}
            >
              {/* Left accent on hover */}
              <div className={`absolute left-0 top-1 bottom-1 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${meta.textColor} bg-current`} />

              <div className="flex items-center gap-2 pl-1">
                <span className={`text-xs font-game text-muted group-hover:${meta.textColor} transition-colors flex-1 truncate`}>
                  {skill.name}
                </span>
                {/* Tier badge */}
                <span className={`text-[8px] font-game px-1 py-0.5 rounded border tracking-wider flex-shrink-0 ${tierColors[tier]}`}>
                  {tier}
                </span>
                {/* Animated value */}
                <span className={`text-xs font-game tabular-nums w-6 text-right ${meta.textColor}`}>
                  <CountUp target={skill.value} delay={delay} duration={1000} />
                </span>
              </div>

              {/* Bar */}
              <div className="pl-1">
                <StatBar
                  value={skill.value}
                  max={100}
                  colorClass={meta.barColor}
                  delay={delay}
                  height="h-2"
                  showShimmer={skill.value >= 85}
                />
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
