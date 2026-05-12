import { motion } from 'framer-motion'
import { character } from '../../data/character'

const statusColors: Record<string, string> = {
  COMPLETED: 'text-green/70',
  ACTIVE: 'text-exp animate-pulse',
}

const rankColors: Record<string, string> = {
  S: 'text-exp border-exp/60 bg-exp/10 shadow-[0_0_8px_rgba(245,158,11,0.4)]',
  A: 'text-cyan border-cyan/60 bg-cyan/10 shadow-[0_0_8px_rgba(0,255,255,0.3)]',
  B: 'text-green border-green/60 bg-green/10 shadow-[0_0_8px_rgba(74,222,128,0.3)]',
  C: 'text-muted border-muted/40 bg-muted/5 shadow-none',
}

export default function QuestTab() {
  return (
    <div className="h-full overflow-y-auto pr-1 grid grid-cols-1 gap-3">
      {character.quests.map((q, i) => (
        <motion.div
          key={q.name}
          className="game-panel rounded p-3 border border-cyan/10 hover:border-cyan/40 transition-all duration-300 hover:shadow-[0_0_12px_rgba(168,85,247,0.1)] group"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -2 }}
        >
          <div className="flex items-start gap-3">
            {/* Rank badge */}
            <div className={`flex-shrink-0 flex flex-col items-center justify-center rounded border px-2 py-1 font-game font-bold ${rankColors[q.rank]}`}>
              <span className="text-[8px] tracking-widest opacity-70">RANK</span>
              <span className="text-lg leading-none">{q.rank}</span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-sm font-game text-primary group-hover:text-cyan transition-colors">{q.name}</span>
                <span className="text-xs text-muted border border-muted/30 px-1.5 rounded">{q.type}</span>
                <span className={`ml-auto text-xs ${statusColors[q.status] ?? 'text-green/70'}`}>{q.status}</span>
              </div>
              <div className="text-[11px] text-cyan/60 font-game mb-1">{q.subtitle}</div>
              <p className="text-xs text-muted leading-relaxed mb-2">{q.description}</p>

              <div className="flex items-center gap-2 flex-wrap">
                {q.tech.map(t => (
                  <span key={t} className="text-[11px] font-game px-1.5 py-0.5 rounded bg-cyan/5 border border-cyan/20 text-cyan/70">
                    {t}
                  </span>
                ))}
                <a
                  href={q.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-xs font-game text-cyan/50 hover:text-cyan transition-colors flex items-center gap-1"
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
