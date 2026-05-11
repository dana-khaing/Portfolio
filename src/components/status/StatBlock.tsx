import StatBar from '../ui/StatBar'
import CountUp from '../ui/CountUp'
import GameIcon from '../ui/GameIcon'
import { character } from '../../data/character'

const vitals = [
  { label: 'Max HP', icon: 'hp' as const, data: character.hp, color: 'bar-hp', textColor: 'text-hp', delay: 0 },
  { label: 'Max MP', icon: 'mp' as const, data: character.mp, color: 'bar-mp', textColor: 'text-mp', delay: 0.15 },
  { label: 'Max SP', icon: 'sp' as const, data: character.sp, color: 'bar-sp', textColor: 'text-sp', delay: 0.30 },
]

export default function StatBlock() {
  return (
    <div className="flex flex-col gap-3">
      {/* HP / MP / SP */}
      {vitals.map(({ label, icon, data, color, textColor, delay }) => (
        <div key={label} className="flex items-center gap-2">
          <GameIcon name={icon} size={14} className={textColor} />
          <span className="text-xs text-muted w-14 font-game">{label}</span>
          <div className="flex-1">
            <StatBar value={data.current} max={data.max} colorClass={color} delay={delay} height="h-2.5" />
          </div>
          <span className={`text-sm font-game ${textColor} w-10 text-right tabular-nums`}>
            <CountUp target={data.current} delay={delay} duration={1200} />
          </span>
        </div>
      ))}

      {/* EXP */}
      <div className="mt-1">
        <div className="flex items-center justify-between text-xs text-muted font-game mb-1">
          <div className="flex items-center gap-1">
            <GameIcon name="exp" size={12} className="text-exp" />
            <span>Exp</span>
          </div>
          <span className="tabular-nums">
            <CountUp target={character.exp.current} delay={0.5} duration={1400} />
            {' / '}{character.exp.max}
          </span>
        </div>
        <StatBar
          value={character.exp.current}
          max={character.exp.max}
          colorClass="bar-exp"
          delay={0.5}
          height="h-2"
          showShimmer
        />
      </div>
    </div>
  )
}
