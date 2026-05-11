import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0f0a',
        panel: '#0d1a0d',
        border: 'rgba(0,255,180,0.2)',
        primary: '#e2f0e8',
        muted: '#6b8f72',
        cyan: '#00ffc8',
        green: '#22c55e',
        hp: '#00d4aa',
        mp: '#06b6d4',
        sp: '#22c55e',
        exp: '#f59e0b',
        atk: '#f87171',
        def: '#60a5fa',
        mag: '#a78bfa',
        spd: '#fbbf24',
        int: '#34d399',
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
          '0%, 100%': { boxShadow: '0 0 4px rgba(0,255,200,0.4)' },
          '50%': { boxShadow: '0 0 12px rgba(0,255,200,0.8), 0 0 20px rgba(0,255,200,0.3)' },
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
