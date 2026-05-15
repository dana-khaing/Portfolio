import { motion } from 'framer-motion'
import AvatarStatusBars from '../ui/AvatarStatusBars'
import CharacterStage from '../home/CharacterStage'
import NotificationLog from '../home/NotificationLog'
import BottomNav, { type TabKey } from '../BottomNav'

interface HomeViewProps {
  avatarUrl: string
  name: string
  repos: number
  followers: number
  level: number
  activeTab: TabKey
  onTabSelect: (tab: TabKey) => void
  onAvatarClick: () => void
}

export default function HomeView({
  avatarUrl,
  name,
  repos,
  followers,
  level,
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
        <div className="text-[10px] text-cyan/50 font-game">Lv. {level}</div>
      </div>

      {/* Main area */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Left column: avatar HUD + quest log below */}
        <div className="w-full md:w-64 flex-shrink-0 flex flex-col gap-3 p-3 border-b border-cyan/10 md:border-b-0 md:border-r overflow-hidden">
          <AvatarStatusBars avatarUrl={avatarUrl} level={level} onClick={onAvatarClick} />
          {/* Quest log — desktop only */}
          <div className="hidden md:block flex-1 overflow-hidden">
            <NotificationLog />
          </div>
        </div>

        {/* Center: Character stage */}
        <CharacterStage name={name} repos={repos} followers={followers} />
      </div>

      {/* Bottom nav — full width */}
      <div className="border-t border-cyan/10">
        <BottomNav active={activeTab} onSelect={onTabSelect} />
      </div>
    </motion.div>
  )
}
