import { motion } from 'framer-motion'
import GameIcon from '../ui/GameIcon'
import { character } from '../../data/character'

const links = [
  { label: 'GitHub',    icon: 'github'    as const, value: 'dana-khaing',       href: character.contact.github,    color: 'text-primary' },
  { label: 'LinkedIn',  icon: 'linkedin'  as const, value: 'Dana Khaing',       href: character.contact.linkedin,  color: 'text-def' },
  { label: 'Email',     icon: 'mail'      as const, value: character.contact.email, href: `mailto:${character.contact.email}`, color: 'text-cyan' },
  { label: 'WhatsApp',  icon: 'whatsapp'  as const, value: '+44 7904 101667',   href: character.contact.whatsapp,  color: 'text-green' },
  { label: 'Instagram', icon: 'instagram' as const, value: '@lewis_by_dana',    href: character.contact.instagram, color: 'text-mag' },
  { label: 'Facebook',  icon: 'facebook'  as const, value: 'Dana Khaing',       href: character.contact.facebook,  color: 'text-def' },
  { label: 'Location',  icon: 'location'  as const, value: character.contact.location, href: null, color: 'text-spd' },
]

export default function ContactTab() {
  return (
    <div className="h-full flex flex-col gap-2 overflow-y-auto pr-1">
      <div className="text-xs text-cyan/50 uppercase tracking-widest font-game mb-2">
        ◆ Contact & Links
      </div>
      {links.map((link, i) => (
        <motion.div
          key={link.label}
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.07 }}
        >
          {link.href ? (
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 game-panel rounded p-3 border border-cyan/10 hover:border-cyan/40 transition-all duration-200 group"
            >
              <div className={`${link.color} group-hover:scale-110 transition-transform flex-shrink-0`}>
                <GameIcon name={link.icon} size={18} />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted font-game">{link.label}</div>
                <div className={`text-sm font-game ${link.color} group-hover:text-cyan transition-colors truncate`}>{link.value}</div>
              </div>
              <span className="ml-auto text-muted/40 group-hover:text-cyan/50 transition-colors text-xs flex-shrink-0">↗</span>
            </a>
          ) : (
            <div className="flex items-center gap-3 game-panel rounded p-3 border border-cyan/10">
              <div className={`${link.color} flex-shrink-0`}>
                <GameIcon name={link.icon} size={18} />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted font-game">{link.label}</div>
                <div className={`text-sm font-game ${link.color} truncate`}>{link.value}</div>
              </div>
            </div>
          )}
        </motion.div>
      ))}

      {/* Availability badge */}
      <motion.div
        className="mt-2 game-panel rounded p-4 border border-green/20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
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
