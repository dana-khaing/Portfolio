interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  return (
    <span className={`relative inline-block animate-glitch ${className}`} data-text={text}>
      {text}
    </span>
  )
}
