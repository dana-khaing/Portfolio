import { motion } from 'framer-motion'
import AvatarStatusBars from '../ui/AvatarStatusBars'
import CharacterStage from '../home/CharacterStage'
import NotificationLog from '../home/NotificationLog'
import BottomNav, { type TabKey } from '../BottomNav'

interface HomeViewProps {
  avatarUrl: string
  repos: number
  followers: number
  activeTab: TabKey
  onTabSelect: (tab: TabKey) => void
  onAvatarClick: () => void
}

export default function HomeView({
  avatarUrl,
  repos,
  followers,
  activeTab,
  onTabSelect,
  onAvatarClick,
}: HomeViewProps) {
  return (
    <motion.div
      className="flex flex-col h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-cyan/10">
        <div className="text-[10px] text-muted font-game tracking-widest uppercase">
          ◆ Dana Khaing / Portfolio
        </div>
        <div className="text-[10px] text-cyan/50 font-game">Lv. 22</div>
      </div>

      {/* Main area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left column: avatar HUD + quest log below */}
        <div className="w-64 flex-shrink-0 flex flex-col gap-3 p-3 border-r border-cyan/10 overflow-hidden">
          <AvatarStatusBars avatarUrl={avatarUrl} onClick={onAvatarClick} />
          {/* Quest log fills the rest of the left column */}
          <div className="flex-1 overflow-hidden">
            <NotificationLog />
          </div>
        </div>

        {/* Center: Character stage */}
        <CharacterStage repos={repos} followers={followers} />
      </div>

      {/* Bottom nav — full width */}
      <div className="border-t border-cyan/10">
        <BottomNav active={activeTab} onSelect={onTabSelect} />
      </div>
    </motion.div>
  )
}
