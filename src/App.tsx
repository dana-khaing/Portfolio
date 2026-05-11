import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import HomeView from './components/views/HomeView'
import StatusView from './components/views/StatusView'
import { useGitHub } from './hooks/useGitHub'
import { type TabKey } from './components/BottomNav'

type View = 'home' | 'status'

export default function App() {
  const [view, setView] = useState<View>('home')
  const [activeTab, setActiveTab] = useState<TabKey>('status')
  const github = useGitHub()

  const handleTabSelect = (tab: TabKey) => {
    if (view === 'home') setView('status')
    setActiveTab(tab)
  }

  return (
    <div className="w-screen h-screen bg-bg flex flex-col relative overflow-hidden">
      {/* CRT scanline overlay */}
      <div className="scanlines" />

      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168,85,247,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <HomeView
              key="home"
              avatarUrl={github.avatar_url}
              repos={github.public_repos}
              followers={github.followers}
              activeTab={activeTab}
              onTabSelect={handleTabSelect}
              onAvatarClick={() => {
                setActiveTab('status')
                setView('status')
              }}
            />
          ) : (
            <StatusView
              key="status"
              avatarUrl={github.avatar_url}
              followers={github.followers}
              activeTab={activeTab}
              onTabSelect={setActiveTab}
              onBack={() => setView('home')}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
