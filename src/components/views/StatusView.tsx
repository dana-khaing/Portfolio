import { motion, AnimatePresence } from 'framer-motion'
import AvatarStatusBars from '../ui/AvatarStatusBars'
import StatBlock from '../status/StatBlock'
import StatsGrid from '../status/StatsGrid'
import BottomNav, { type TabKey } from '../BottomNav'
import SkillTab from '../tabs/SkillTab'
import QuestTab from '../tabs/QuestTab'
import EduTab from '../tabs/EduTab'
import ContactTab from '../tabs/ContactTab'
import { character } from '../../data/character'

interface StatusViewProps {
  avatarUrl: string
  followers: number
  activeTab: TabKey
  onTabSelect: (tab: TabKey) => void
  onBack: () => void
}

const tabComponents: Record<TabKey, JSX.Element> = {
  status: <></>,
  skill:   <SkillTab />,
  quest:   <QuestTab />,
  edu:     <EduTab />,
  party:   <EduTab />,
  contact: <ContactTab />,
}

export default function StatusView({ avatarUrl, followers, activeTab, onTabSelect, onBack }: StatusViewProps) {
  const showStatusMain = activeTab === 'status'

  return (
    <motion.div
      className="flex flex-col h-full"
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 py-2 border-b border-cyan/10">
        <button
          onClick={onBack}
          className="text-[10px] text-muted hover:text-cyan transition-colors font-game"
        >
          ← BACK
        </button>
        <div className="text-[10px] text-cyan/50 font-game tracking-widest uppercase">
          ステータス &nbsp; STATUS
        </div>
        <div className="ml-auto text-[10px] text-muted font-game">
          {character.location}
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 gap-4 p-4 overflow-hidden">
        {/* Left: avatar + vitals */}
        <div className="w-56 flex-shrink-0 flex flex-col gap-3">
          <AvatarStatusBars avatarUrl={avatarUrl} onClick={onBack} />
          <div className="game-panel rounded p-3 text-[10px] font-game flex flex-col gap-1.5 text-muted">
            <div className="flex justify-between">
              <span>Followers</span>
              <span className="text-cyan">{followers}</span>
            </div>
            <div className="flex justify-between">
              <span>Guild</span>
              <span className="text-primary text-right max-w-[120px] leading-tight">RHUL</span>
            </div>
            <div className="flex justify-between">
              <span>Status</span>
              <span className="text-green">Hireable</span>
            </div>
          </div>
        </div>

        {/* Right: tab content */}
        <div className="flex-1 flex flex-col gap-3 overflow-hidden">
          <AnimatePresence mode="wait">
            {showStatusMain ? (
              <motion.div
                key="status-main"
                className="flex flex-col gap-4 h-full overflow-y-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {/* Character header */}
                <div className="flex items-baseline gap-3">
                  <span className="text-lg font-game text-primary">{character.name}</span>
                  <span className="text-sm text-cyan/60 font-game">{character.class}</span>
                  <span className="text-xs text-muted font-game ml-auto">Lv. {character.level}</span>
                </div>

                {/* Vital bars */}
                <div className="game-panel-bright rounded p-3">
                  <StatBlock />
                </div>

                {/* Stats / Attributes / Equipment */}
                <div className="game-panel rounded p-3 flex-1">
                  <StatsGrid />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={activeTab}
                className="flex-1 overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {tabComponents[activeTab]}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="border-t border-cyan/10">
        <BottomNav active={activeTab} onSelect={onTabSelect} />
      </div>
    </motion.div>
  )
}
