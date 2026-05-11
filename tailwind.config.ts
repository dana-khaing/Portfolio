import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0d0a1a',
        panel: '#130f1f',
        border: 'rgba(168,85,247,0.25)',
        primary: '#ede9fe',
        muted: '#8b72a8',
        cyan: '#a855f7',
        green: '#c084fc',
        hp: '#a855f7',
        mp: '#06b6d4',
        sp: '#ec4899',
        exp: '#f59e0b',
        atk: '#f87171',
        def: '#818cf8',
        mag: '#e879f9',
        spd: '#34d399',
        int: '#c084fc',
      },
      fontFamily: {
        game: ['"Share Tech Mono"', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 5s infinite',
        'scanline': 'scanline 8s linear infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 90%, 100%': { clipPath: 'inset(0 0 0 0)', transform: 'translate(0)' },
          '91%': { clipPath: 'inset(20% 0 30% 0)', transform: 'translate(-2px, 1px)' },
          '92%': { clipPath: 'inset(60% 0 10% 0)', transform: 'translate(2px, -1px)' },
          '93%': { clipPath: 'inset(40% 0 50% 0)', transform: 'translate(-1px, 2px)' },
          '94%': { clipPath: 'inset(0 0 0 0)', transform: 'translate(0)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 4px rgba(168,85,247,0.4)' },
          '50%': { boxShadow: '0 0 12px rgba(168,85,247,0.8), 0 0 20px rgba(168,85,247,0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
