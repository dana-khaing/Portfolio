# Dana Khaing — Portfolio

> Personal portfolio styled as an RPG character status screen, inspired by *The Rising of the Shield Hero* game UI.

**Live → [dana-khaing.github.io/Portfolio](https://dana-khaing.github.io/Portfolio/)**

---

## Overview

Instead of a traditional portfolio, this site puts you inside a JRPG. Skills are stat bars, projects are S/A-rank quests, education is a level-up timeline, and your GitHub avatar is your character portrait — wrapped in a dark purple mage aesthetic with CRT scanlines and particle effects.

```
┌──────────────────────────────────────────────────────────┐
│ ◆ Dana Khaing / Portfolio                       Lv. 25  │
├──────────────┬───────────────────────────────────────────┤
│ [Avatar]     │                                           │
│  Dana Khaing │             ✦  Dana Khaing               │
│  Code Mage   │         Code Mage · Software Engineer     │
│  HP  ██████  │         > Full-Stack Developer_           │
│  MP  █████   │                                           │
│  EXP ████░   │    13 Repositories · 4 Followers          │
│              │         1st Class Honours                  │
│ ◆ Quest Log  │                                           │
│ ▶ KUMA...    │                                           │
│ ▶ FlowBit... │                                           │
├──────────────┴───────────────────────────────────────────┤
│   STATUS   SKILL   QUEST   EDU   PARTY   CONTACT         │
└──────────────────────────────────────────────────────────┘
```

---

## Features

### Two-View Architecture
| View | Description |
|---|---|
| **Home** | Character portrait, animated HP/MP/EXP bars, live quest log, nav |
| **Status** | Full RPG stat screen — vitals, ATK/DEF/MAG/SPD/INT, equipment, tabs |

### Live Data
| Data | Source |
|---|---|
| Avatar, name, location | GitHub API |
| Repository count | GitHub API |
| Followers | GitHub API |
| Level | Calculated in real-time from birthday — ticks up every year |

### Tabs
| Tab | Content |
|---|---|
| STATUS | Vital bars (HP/MP/SP/EXP), stat grid, tech attributes, equipment |
| SKILL | 2-column skill groups with MASTER / EXPERT / SKILLED / ADEPT tier badges |
| QUEST | Projects as S/A-rank quest cards with tech tags and GitHub links |
| EDU | Education as a level-up milestone timeline + work experience |
| PARTY | Party member cards (work experience) |
| CONTACT | GitHub, LinkedIn, Email, WhatsApp, Instagram, Facebook |

### Animations
- Framer Motion view transitions (slide between Home ↔ Status)
- Stat bars animate from 0 to value on every tab visit
- Count-up numbers synced to bar fill
- Typewriter cycling taglines
- CSS glitch effect on name text (fires every ~5 s)
- Drifting purple/fuchsia particle canvas
- CRT scanline overlay
- Hover glows, scale springs, staggered entrance animations throughout

---

## Tech Stack

| | |
|---|---|
| **Framework** | React 18 + Vite 5 |
| **Language** | TypeScript (strict) |
| **Styling** | Tailwind CSS v3 with custom purple mage palette |
| **Animation** | Framer Motion |
| **Data** | GitHub REST API with static fallbacks |
| **Deploy** | GitHub Pages via GitHub Actions |

---

## Color Palette

```
Background   #0d0a1a    dark purple-black
Panel        #130f1f    elevated surface
Accent       #a855f7    purple  (HP bar, primary glow)
Fuchsia      #c084fc    bright purple (centre dot, shimmer)
HP bar       #a855f7    purple gradient
MP bar       #06b6d4    cyan
EXP bar      #f59e0b    amber
ATK          #f87171    red    (Frontend)
DEF          #818cf8    blue   (Backend)
MAG          #e879f9    fuchsia (Database)
SPD          #34d399    emerald (Tools)
INT          #c084fc    violet  (Languages)
```

---

## Local Development

```bash
# Clone
git clone https://github.com/dana-khaing/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5173/Portfolio/

# Type-check + production build
npm run build
```

---

## Project Structure

```
src/
├── data/
│   └── character.ts           # Single source of truth — all portfolio data
├── hooks/
│   └── useGitHub.ts           # Live GitHub API fetch with static fallbacks
├── components/
│   ├── views/
│   │   ├── HomeView.tsx        # Home layout (avatar HUD + stage + quest log + nav)
│   │   └── StatusView.tsx      # Full status screen layout
│   ├── home/
│   │   ├── CharacterStage.tsx  # Centre portrait + typewriter tagline + particles
│   │   └── NotificationLog.tsx # Staggered quest log entries
│   ├── status/
│   │   ├── StatBlock.tsx       # HP / MP / SP / EXP animated bars
│   │   └── StatsGrid.tsx       # ATK/DEF/MAG/SPD/INT + attributes + equipment
│   ├── tabs/
│   │   ├── SkillTab.tsx        # Tech skills grouped with tier badges
│   │   ├── QuestTab.tsx        # Projects as ranked quest cards
│   │   ├── EduTab.tsx          # Education timeline + work experience
│   │   └── ContactTab.tsx      # Social & contact links
│   ├── ui/
│   │   ├── StatBar.tsx         # Animated progress bar with glow edge
│   │   ├── CountUp.tsx         # Animated number counter
│   │   ├── GameIcon.tsx        # Custom SVG icon set (20+ icons)
│   │   ├── GlitchText.tsx      # CSS glitch keyframe animation
│   │   ├── ParticleCanvas.tsx  # Canvas-based floating particle system
│   │   └── AvatarStatusBars.tsx# Avatar + HP/MP/EXP compact panel
│   └── BottomNav.tsx           # Shared 6-tab navigation bar
└── App.tsx                     # Root — view state, GitHub data, level calc
```

---

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which:
1. Builds the project with `npm run build`
2. Uploads the `dist/` folder as a GitHub Pages artifact
3. Deploys it automatically — no manual steps needed

**Live URL:** https://dana-khaing.github.io/Portfolio/

---

## RPG Stat Mapping

| Game Concept | Real Meaning |
|---|---|
| Level | Current age — calculated live from birthday (13 May 2000) |
| HP 285 | Problem-solving resilience |
| MP 180 | Creative & design power |
| EXP 3500/5000 | Career progress toward senior role |
| ATK 85 | Frontend power (React, Next.js, Tailwind CSS) |
| DEF 80 | Backend robustness (Node.js, Express, Django) |
| MAG 75 | Database mastery (MySQL, Prisma) |
| SPD 78 | DevOps & tooling speed (Git, CI/CD) |
| INT 90 | Language breadth (JS, TS, Python, Java) |
| Rank S Quest | KUMA Social Media Platform, FlowBit Transaction System |
| Rank A Quest | PhoneSine E-Commerce, Restaurant Order Management System |

---

## Author

**Dana Khaing** — Full-Stack Software Engineer, London UK

- GitHub: [github.com/dana-khaing](https://github.com/dana-khaing)
- LinkedIn: [linkedin.com/in/dana-khaing](https://www.linkedin.com/in/dana-khaing)
- Instagram: [@lewis_by_dana](https://www.instagram.com/lewis_by_dana/)

---

## License

MIT — feel free to fork and make it your own.
