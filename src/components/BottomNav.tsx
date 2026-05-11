import { motion } from 'framer-motion'
import GameIcon from './ui/GameIcon'

export type TabKey = 'status' | 'skill' | 'quest' | 'edu' | 'party' | 'contact'

interface Tab {
  key: TabKey
  label: string
  icon: Parameters<typeof GameIcon>[0]['name']
}

const TABS: Tab[] = [
  { key: 'status',  label: 'STATUS',  icon: 'status' },
  { key: 'skill',   label: 'SKILL',   icon: 'skill' },
  { key: 'quest',   label: 'QUEST',   icon: 'quest' },
  { key: 'edu',     label: 'EDU',     icon: 'edu' },
  { key: 'party',   label: 'PARTY',   icon: 'party' },
  { key: 'contact', label: 'CONTACT', icon: 'contact' },
]

interface BottomNavProps {
  active: TabKey
  onSelect: (tab: TabKey) => void
}

export default function BottomNav({ active, onSelect }: BottomNavProps) {
  return (
    <div className="flex items-center justify-center gap-1 px-4 py-2 border-t border-cyan/10">
      {TABS.map((tab, i) => {
        const isActive = tab.key === active
        return (
          <motion.button
            key={tab.key}
            onClick={() => onSelect(tab.key)}
            className={`flex flex-col items-center gap-0.5 px-4 py-2 rounded transition-all duration-200 group
              ${isActive
                ? 'text-cyan border-b-2 border-cyan bg-cyan/5'
                : 'text-muted hover:text-cyan/70 border-b-2 border-transparent'
              }`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.06 + 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`transition-all duration-200 ${isActive ? 'drop-shadow-[0_0_6px_rgba(0,255,200,0.8)]' : 'group-hover:drop-shadow-[0_0_4px_rgba(0,255,200,0.4)]'}`}>
              <GameIcon name={tab.icon} size={22} />
            </div>
            <span className="text-[11px] font-game tracking-wider">{tab.label}</span>
          </motion.button>
        )
      })}
    </div>
  )
}
