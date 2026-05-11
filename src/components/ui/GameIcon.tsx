type IconName = 'sword' | 'shield' | 'magic' | 'wind' | 'star' | 'exp' | 'hp' | 'mp' | 'sp' |
  'status' | 'skill' | 'quest' | 'edu' | 'party' | 'contact' | 'github' | 'mail' | 'location' |
  'facebook' | 'instagram' | 'whatsapp' | 'linkedin'

interface GameIconProps {
  name: IconName
  size?: number
  className?: string
}

export default function GameIcon({ name, size = 16, className = '' }: GameIconProps) {
  const icons: Record<IconName, JSX.Element> = {
    sword: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
        <path d="M12 2L14 4L7 11L5 9L12 2Z" fill="currentColor"/>
        <path d="M5 9L3 14L8 12L5 9Z" fill="currentColor" opacity="0.7"/>
        <path d="M10 6L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    shield: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
        <path d="M8 2L13 4V8C13 11 8 14 8 14C8 14 3 11 3 8V4L8 2Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.2"/>
        <path d="M8 5V11M5.5 8H10.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    magic: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M8 1V3M8 13V15M1 8H3M13 8H15M3.5 3.5L5 5M11 11L12.5 12.5M3.5 12.5L5 11M11 5L12.5 3.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    wind: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
        <path d="M2 6C2 6 5 5 8 6C11 7 14 6 14 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M2 9C2 9 4 8 7 9C10 10 12 9 13 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M2 12C2 12 5 11 7 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    star: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
        <path d="M8 2L9.5 6H14L10.5 8.5L12 12.5L8 10L4 12.5L5.5 8.5L2 6H6.5L8 2Z" fill="currentColor" opacity="0.9"/>
      </svg>
    ),
    exp: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
        <path d="M8 2L10 6L14 7L11 10L12 14L8 12L4 14L5 10L2 7L6 6L8 2Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.3"/>
        <path d="M8 5V11M5 8H11" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    hp: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
        <path d="M8 13C8 13 3 10 3 6.5C3 4.5 4.5 3 6.5 3C7.3 3 8 3.5 8 3.5C8 3.5 8.7 3 9.5 3C11.5 3 13 4.5 13 6.5C13 10 8 13 8 13Z" fill="currentColor" opacity="0.8"/>
      </svg>
    ),
    mp: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
        <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.8"/>
        <path d="M8 3V5M8 11V13M3 8H5M11 8H13" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    sp: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
        <path d="M10 2L4 9H8L6 14L12 7H8L10 2Z" fill="currentColor" opacity="0.9"/>
      </svg>
    ),
    status: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
        <rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M5 8H11M5 5H9M5 11H7" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    skill: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
        <path d="M8 2L10 6L14 7L11 10L12 14L8 12L4 14L5 10L2 7L6 6L8 2Z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1"/>
      </svg>
    ),
    quest: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
        <path d="M8 2L12 5V11L8 14L4 11V5L8 2Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15"/>
        <path d="M8 6V10M8 11V11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    edu: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
        <path d="M8 3L14 6L8 9L2 6L8 3Z" fill="currentColor" opacity="0.7"/>
        <path d="M5 7.5V11C5 11 6 13 8 13C10 13 11 11 11 11V7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M14 6V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    party: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
        <circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1"/>
        <path d="M2 13C2 11 3.5 10 6 10C8.5 10 10 11 10 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="11" cy="6" r="2" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
        <path d="M9 13C9 11.5 9.8 11 11 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
    contact: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
        <rect x="2" y="4" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M2 5L8 9L14 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    github: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    ),
    mail: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
        <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M1 4L8 9L15 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    location: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
        <path d="M8 2C5.8 2 4 3.8 4 6C4 9 8 14 8 14C8 14 12 9 12 6C12 3.8 10.2 2 8 2Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.2"/>
        <circle cx="8" cy="6" r="1.5" fill="currentColor"/>
      </svg>
    ),
    facebook: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
        <path d="M16 8.05C16 3.6 12.42 0 8 0S0 3.6 0 8.05c0 4.02 2.93 7.35 6.75 7.95V10.4H4.72V8.05h2.03V6.3c0-2.02 1.2-3.13 3.02-3.13.87 0 1.79.16 1.79.16v1.98h-1c-.99 0-1.3.62-1.3 1.25v1.49h2.22l-.35 2.35H9.25V16C13.07 15.4 16 12.07 16 8.05z"/>
      </svg>
    ),
    instagram: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
        <path d="M8 0C5.83 0 5.56 0 4.7 0.04 3.85 0.08 3.27 0.22 2.76 0.42 2.24 0.63 1.8 0.9 1.36 1.36 0.9 1.8 0.63 2.24 0.42 2.76 0.22 3.27 0.08 3.85 0.04 4.7 0 5.56 0 5.83 0 8s0 2.44 0.04 3.3c0.04 0.85 0.18 1.43 0.38 1.94 0.21 0.52 0.48 0.96 0.94 1.4 0.44 0.46 0.88 0.73 1.4 0.94 0.51 0.2 1.09 0.34 1.94 0.38C5.56 16 5.83 16 8 16s2.44 0 3.3-0.04c0.85-0.04 1.43-0.18 1.94-0.38 0.52-0.21 0.96-0.48 1.4-0.94 0.46-0.44 0.73-0.88 0.94-1.4 0.2-0.51 0.34-1.09 0.38-1.94C16 10.44 16 10.17 16 8s0-2.44-0.04-3.3c-0.04-0.85-0.18-1.43-0.38-1.94-0.21-0.52-0.48-0.96-0.94-1.4-0.44-0.46-0.88-0.73-1.4-0.94-0.51-0.2-1.09-0.34-1.94-0.38C10.44 0 10.17 0 8 0zm0 1.44c2.14 0 2.39 0 3.23 0.05 0.78 0.04 1.2 0.17 1.48 0.28 0.37 0.14 0.64 0.32 0.92 0.6 0.28 0.28 0.46 0.55 0.6 0.92 0.11 0.28 0.24 0.7 0.28 1.48C15.56 5.61 15.56 5.86 15.56 8s0 2.39-0.05 3.23c-0.04 0.78-0.17 1.2-0.28 1.48-0.14 0.37-0.32 0.64-0.6 0.92-0.28 0.28-0.55 0.46-0.92 0.6-0.28 0.11-0.7 0.24-1.48 0.28-0.84 0.04-1.09 0.05-3.23 0.05s-2.39 0-3.23-0.05c-0.78-0.04-1.2-0.17-1.48-0.28-0.37-0.14-0.64-0.32-0.92-0.6-0.28-0.28-0.46-0.55-0.6-0.92-0.11-0.28-0.24-0.7-0.28-1.48C0.44 10.39 0.44 10.14 0.44 8s0-2.39 0.05-3.23c0.04-0.78 0.17-1.2 0.28-1.48 0.14-0.37 0.32-0.64 0.6-0.92 0.28-0.28 0.55-0.46 0.92-0.6 0.28-0.11 0.7-0.24 1.48-0.28C5.61 1.44 5.86 1.44 8 1.44zm0 2.45a4.11 4.11 0 100 8.22 4.11 4.11 0 000-8.22zm0 6.78a2.67 2.67 0 110-5.34 2.67 2.67 0 010 5.34zm5.23-6.94a0.96 0.96 0 11-1.92 0 0.96 0.96 0 011.92 0z"/>
      </svg>
    ),
    whatsapp: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
        <path d="M8 0C3.58 0 0 3.58 0 8c0 1.41.37 2.74 1.01 3.89L0 16l4.24-1.11A7.94 7.94 0 008 16c4.42 0 8-3.58 8-8s-3.58-8-8-8zm0 14.55a6.56 6.56 0 01-3.34-.92l-.24-.14-2.48.65.66-2.42-.16-.25A6.55 6.55 0 011.45 8C1.45 4.38 4.38 1.45 8 1.45S14.55 4.38 14.55 8 11.62 14.55 8 14.55zm3.6-4.91c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.44.1-.13.2-.5.64-.62.77-.11.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.1-1.38-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.33h-.38c-.13 0-.33.05-.5.25-.18.2-.68.66-.68 1.61s.7 1.87.8 2c.1.13 1.37 2.1 3.33 2.94.46.2.83.32 1.11.41.47.15.89.13 1.23.08.37-.06 1.17-.48 1.33-.94.16-.46.16-.86.11-.94-.05-.08-.18-.13-.38-.23z"/>
      </svg>
    ),
    linkedin: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
      </svg>
    ),
  }

  return icons[name] ?? null
}
