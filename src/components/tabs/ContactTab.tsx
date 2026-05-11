import { motion } from 'framer-motion'
import GameIcon from '../ui/GameIcon'
import { character } from '../../data/character'

const links = [
  { label: 'GitHub', icon: 'github' as const, value: 'dana-khaing', href: character.contact.github, color: 'text-primary' },
  { label: 'Email', icon: 'mail' as const, value: character.contact.email, href: `mailto:${character.contact.email}`, color: 'text-cyan' },
  { label: 'Location', icon: 'location' as const, value: character.contact.location, href: null, color: 'text-green' },
]

export default function ContactTab() {
  return (
    <div className="h-full flex flex-col gap-3">
      <div className="text-xs text-cyan/50 uppercase tracking-widest font-game mb-2">
        ◆ Contact & Links
      </div>
      {links.map((link, i) => (
        <motion.div
          key={link.label}
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          {link.href ? (
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 game-panel rounded p-3 border border-cyan/10 hover:border-cyan/40 hover:glow-cyan transition-all duration-200 group"
            >
              <div className={`${link.color} group-hover:scale-110 transition-transform`}>
                <GameIcon name={link.icon} size={18} />
              </div>
              <div>
                <div className="text-xs text-muted font-game">{link.label}</div>
                <div className={`text-sm font-game ${link.color} group-hover:text-cyan transition-colors`}>{link.value}</div>
              </div>
              <span className="ml-auto text-muted/40 group-hover:text-cyan/50 transition-colors text-xs">↗</span>
            </a>
          ) : (
            <div className="flex items-center gap-3 game-panel rounded p-3 border border-cyan/10">
              <div className={link.color}>
                <GameIcon name={link.icon} size={18} />
              </div>
              <div>
                <div className="text-xs text-muted font-game">{link.label}</div>
                <div className={`text-sm font-game ${link.color}`}>{link.value}</div>
              </div>
            </div>
          )}
        </motion.div>
      ))}

      {/* Availability badge */}
      <motion.div
        className="mt-4 game-panel rounded p-4 border border-green/20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
          <span className="text-sm font-game text-green">Available for Hire</span>
        </div>
        <p className="text-xs text-muted">
          Open to Junior Software Engineering roles — London, UK
        </p>
      </motion.div>
    </div>
  )
}
