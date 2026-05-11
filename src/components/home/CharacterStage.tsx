import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ParticleCanvas from '../ui/ParticleCanvas'
import GlitchText from '../ui/GlitchText'
import { character } from '../../data/character'

const TAGLINES = [
  'Full-Stack Developer',
  'React & Next.js Engineer',
  'API & Systems Builder',
  'First Class CS Graduate',
]

export default function CharacterStage({ repos, followers }: { repos: number; followers: number }) {
  const [taglineIdx, setTaglineIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = TAGLINES[taglineIdx]
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
        return () => clearTimeout(t)
      } else {
        setTaglineIdx(i => (i + 1) % TAGLINES.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, taglineIdx])

  return (
    <div className="relative flex-1 flex flex-col items-center justify-center overflow-hidden">
      <ParticleCanvas />

      {/* Character portrait placeholder — centered art area */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-6"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        {/* Decorative circle / portrait frame */}
        <div className="relative">
          <div className="w-48 h-48 rounded-full border-2 border-cyan/30 flex items-center justify-center
            bg-gradient-to-b from-cyan/5 to-transparent animate-pulse-glow">
            <div className="w-40 h-40 rounded-full border border-cyan/20 flex items-center justify-center
              bg-gradient-to-b from-green/5 to-transparent">
              <span className="text-6xl select-none">✦</span>
            </div>
          </div>
          {/* Orbit ring */}
          <div className="absolute inset-[-16px] rounded-full border border-cyan/10 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute inset-[-8px] rounded-full border border-cyan/5 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
        </div>

        {/* Name */}
        <div className="text-center">
          <h1 className="text-4xl font-game text-primary tracking-widest">
            <GlitchText text={character.name} />
          </h1>
          <div className="text-sm text-cyan/80 mt-1 tracking-[0.3em] uppercase">
            {character.class}
          </div>
          <div className="text-xs text-muted/70 tracking-widest uppercase mt-0.5">
            {character.subclass}
          </div>
        </div>

        {/* Typewriter tagline */}
        <div className="text-center font-game text-muted text-base h-7">
          <span className="text-green/80">&gt; </span>
          <span>{displayed}</span>
          <span className="animate-pulse text-cyan">|</span>
        </div>

        {/* Live stats row */}
        <motion.div
          className="flex items-center gap-6 text-xs text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center gap-1">
            <span className="text-cyan">{repos}</span>
            <span>Repositories</span>
          </div>
          <div className="w-px h-3 bg-cyan/20" />
          <div className="flex items-center gap-1">
            <span className="text-cyan">{followers}</span>
            <span>Followers</span>
          </div>
          <div className="w-px h-3 bg-cyan/20" />
          <div className="flex items-center gap-1">
            <span className="text-cyan">1st</span>
            <span>Class Honours</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative corner brackets */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-cyan/30" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-cyan/30" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-cyan/30" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-cyan/30" />
    </div>
  )
}
