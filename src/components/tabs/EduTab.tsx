import { motion } from 'framer-motion'
import GameIcon from '../ui/GameIcon'
import { character } from '../../data/character'

export default function EduTab() {
  return (
    <div className="h-full overflow-y-auto pr-1 flex flex-col gap-4">
      <div className="text-[10px] text-cyan/50 uppercase tracking-widest font-game mb-2">
        ◆ Education Milestones
      </div>

      {/* Education timeline */}
      <div className="flex flex-col gap-4 relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-cyan/10" />
        {character.education.map((e, i) => (
          <motion.div
            key={e.title}
            className="flex gap-4 items-start"
            initial={{ x: -16, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded border border-cyan/30 bg-cyan/5 flex items-center justify-center z-10">
              <GameIcon name="edu" size={14} className="text-cyan" />
            </div>
            <div className="game-panel rounded p-3 flex-1 border border-cyan/10 hover:border-cyan/30 transition-colors">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-game text-primary leading-tight">{e.title}</span>
                <span className="text-[10px] font-game text-exp border border-exp/40 px-1.5 rounded flex-shrink-0">
                  +{e.xp} XP
                </span>
              </div>
              <div className="text-[11px] text-cyan/60 font-game">{e.institution}</div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[10px] text-muted">{e.year}</span>
                <span className="text-[10px] text-green/70">{e.note}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Experience section */}
      <div className="text-[10px] text-cyan/50 uppercase tracking-widest font-game mt-2 mb-2">
        ◆ Work Experience
      </div>
      {character.experience.map((exp, i) => (
        <motion.div
          key={exp.role}
          className="game-panel rounded p-3 border border-cyan/10 hover:border-cyan/30 transition-colors"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 + i * 0.15 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <GameIcon name="party" size={14} className="text-cyan" />
            <span className="text-sm font-game text-primary">{exp.role}</span>
            <span className="text-[10px] text-muted border border-muted/30 px-1.5 rounded">{exp.type}</span>
          </div>
          <div className="text-[11px] text-cyan/60 font-game mb-2">{exp.company}</div>
          <p className="text-[10px] text-muted leading-relaxed mb-2">{exp.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {exp.traits.map(t => (
              <span key={t} className="text-[9px] font-game px-1.5 py-0.5 rounded bg-cyan/5 border border-cyan/20 text-cyan/70">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
