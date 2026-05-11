import { motion } from 'framer-motion'
import { character } from '../../data/character'

const rankColors: Record<string, string> = {
  S: 'text-exp border-exp/60 bg-exp/10',
  A: 'text-cyan border-cyan/60 bg-cyan/10',
}

export default function QuestTab() {
  return (
    <div className="h-full overflow-y-auto pr-1 grid grid-cols-1 gap-3">
      {character.quests.map((q, i) => (
        <motion.div
          key={q.name}
          className="game-panel rounded p-3 border border-cyan/10 hover:border-cyan/40 transition-all duration-300 hover:shadow-[0_0_12px_rgba(0,255,200,0.1)] group"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -2 }}
        >
          <div className="flex items-start gap-3">
            {/* Rank badge */}
            <div className={`flex-shrink-0 w-8 h-8 rounded border flex items-center justify-center text-sm font-game font-bold ${rankColors[q.rank]}`}>
              {q.rank}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-sm font-game text-primary group-hover:text-cyan transition-colors">{q.name}</span>
                <span className="text-[10px] text-muted border border-muted/30 px-1.5 rounded">{q.type}</span>
                <span className="ml-auto text-[10px] text-green/70">{q.status}</span>
              </div>
              <div className="text-[11px] text-cyan/60 font-game mb-1">{q.subtitle}</div>
              <p className="text-[10px] text-muted leading-relaxed mb-2">{q.description}</p>

              <div className="flex items-center gap-2 flex-wrap">
                {q.tech.map(t => (
                  <span key={t} className="text-[9px] font-game px-1.5 py-0.5 rounded bg-cyan/5 border border-cyan/20 text-cyan/70">
                    {t}
                  </span>
                ))}
                <a
                  href={q.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-[10px] font-game text-cyan/50 hover:text-cyan transition-colors flex items-center gap-1"
                  onClick={e => e.stopPropagation()}
                >
                  ↗ GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
