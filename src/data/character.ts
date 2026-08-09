export function calculateLevel(): number {
  const born = new Date('2000-05-13')
  const today = new Date()
  let age = today.getFullYear() - born.getFullYear()
  const m = today.getMonth() - born.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < born.getDate())) age--
  return age
}

export const character = {
  name: 'Dana Khaing',
  class: 'Code Mage',
  subclass: 'Software Engineer',
  birthday: '2000-05-13',
  location: 'London, UK',
  guild: 'Royal Holloway, University of London',
  hireable: true,
  bio: 'Full-Stack Code Mage conjuring scalable web applications. First Class Honours CS graduate, weaving powerful systems from frontend to backend.',

  // Vitals (displayed as bars on home HUD and status screen)
  hp: { current: 285, max: 285 },   // Problem-solving resilience
  mp: { current: 165, max: 180 },   // Creative design power
  sp: { current: 185, max: 200 },   // Execution speed
  exp: { current: 3500, max: 5000 },// Career progress toward senior role

  // Core stats
  stats: [
    { key: 'ATK', label: 'Frontend ATK', value: 88, color: 'atk' as const },
    { key: 'DEF', label: 'Backend DEF',  value: 82, color: 'def' as const },
    { key: 'MAG', label: 'Database MAG', value: 78, color: 'mag' as const },
    { key: 'SPD', label: 'DevOps SPD',   value: 80, color: 'spd' as const },
    { key: 'INT', label: 'Languages INT',value: 92, color: 'int' as const },
  ],

  // Tech attributes (used in attributes grid)
  attributes: [
    { name: 'Frontend',  value: 90, color: '#f87171' },
    { name: 'Backend',   value: 84, color: '#60a5fa' },
    { name: 'Database',  value: 80, color: '#a78bfa' },
    { name: 'Mobile',    value: 78, color: '#fbbf24' },
    { name: 'Languages', value: 92, color: '#34d399' },
  ],

  // Equipment (primary tools — one per category)
  equipment: [
    { slot: 'Main Weapon', name: 'Next.js' },     // Frontend
    { slot: 'Off-hand',    name: 'Go / Node.js' },// Backend
    { slot: 'Magic Tome',  name: 'Python' },       // Language
    { slot: 'Armor',       name: 'Supabase' },     // Database
    { slot: 'Accessory',   name: 'Git' },          // Tools
  ],

  // Skills (tech stack)
  skills: {
    Languages: [
      { name: 'JavaScript', value: 90 },
      { name: 'TypeScript', value: 88 },
      { name: 'Python',     value: 78 },
      { name: 'Go',         value: 72 },
      { name: 'Dart',       value: 68 },
      { name: 'Java',       value: 70 },
    ],
    Frontend: [
      { name: 'React.js',     value: 90 },
      { name: 'Next.js',      value: 90 },
      { name: 'Tailwind CSS', value: 86 },
      { name: 'React Native', value: 80 },
      { name: 'Flutter',      value: 72 },
    ],
    Backend: [
      { name: 'Node.js',     value: 84 },
      { name: 'Go',          value: 72 },
      { name: 'Express.js',  value: 80 },
      { name: 'FastAPI',     value: 74 },
      { name: 'Django',      value: 72 },
      { name: 'Flask',       value: 70 },
      { name: 'RESTful APIs',value: 88 },
    ],
    Database: [
      { name: 'Supabase',    value: 84 },
      { name: 'PostgreSQL',  value: 80 },
      { name: 'MySQL',       value: 78 },
      { name: 'Prisma',      value: 80 },
      { name: 'Redis',       value: 70 },
    ],
    Tools: [
      { name: 'Git',         value: 88 },
      { name: 'Expo',        value: 78 },
      { name: 'Sentry',      value: 76 },
      { name: 'Clerk Auth',  value: 78 },
      { name: 'Cloudinary',  value: 75 },
    ],
  },

  // Quests (projects) — ranked S → A → B → C
  quests: [
    {
      rank: 'S',
      name: 'KUMA',
      subtitle: 'Social Media Platform',
      type: 'Solo Quest',
      description: 'Full-stack social media platform for Royal Holloway students. Features profiles, follow/unfollow, posts, reactions, and real-time search.',
      tech: ['Next.js', 'Node.js', 'Prisma', 'MySQL', 'Clerk'],
      github: 'https://github.com/dana-khaing/KUMA_SocialMedia',
      status: 'COMPLETED',
    },
    {
      rank: 'S',
      name: 'AniVerse',
      subtitle: 'Anime Streaming Platform',
      type: 'Solo Quest',
      description: 'Creator-first anime streaming platform with adaptive HLS playback, creator publishing tools, community moderation, and full discovery experience. Built with Supabase, Mux, and Sentry.',
      tech: ['Next.js', 'Supabase', 'TypeScript', 'HLS.js', 'Mux', 'Sentry'],
      github: 'https://github.com/dana-khaing/AniVerse',
      status: 'COMPLETED',
    },
    {
      rank: 'S',
      name: 'Foodie',
      subtitle: 'Burmese Food Delivery App',
      type: 'Solo Quest',
      description: 'Burmese-first food delivery platform for Bangkok with a Flutter customer app, Next.js operations portal, and Go API. Supports multilingual (Burmese/Thai/English), cash and PromptPay payments.',
      tech: ['Flutter', 'Go', 'Next.js', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/dana-khaing/Foodie',
      status: 'ACTIVE',
    },
    {
      rank: 'S',
      name: 'FlowBit',
      subtitle: 'Capacity-Based Transaction Engine',
      type: 'Solo Quest',
      description: 'Capacity-based numeric transaction system with prioritisation rules, algorithmic logic, and type-safe full-stack architecture.',
      tech: ['Django', 'Python', 'Next.js', 'TypeScript'],
      github: 'https://github.com/dana-khaing/FlowBit_Capacity-Based-Numeric-Transaction-Management-System',
      status: 'COMPLETED',
    },
    {
      rank: 'S',
      name: 'Portfolio',
      subtitle: 'Living RPG Developer Showcase',
      type: 'Solo Quest',
      description: 'Interactive developer portfolio styled as an RPG character status screen. Live GitHub API data, Framer Motion animations, particle effects, periodic glitch effects, and fully responsive design.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      github: 'https://github.com/dana-khaing/Portfolio',
      status: 'ACTIVE',
    },
    {
      rank: 'A',
      name: 'RecipeShelf',
      subtitle: 'Cross-Platform Recipe App',
      type: 'Solo Quest',
      description: 'Mobile recipe-saving app built with React Native and Expo. Supports offline storage, image picking, Supabase auth, and Sentry monitoring. Available on iOS and Android.',
      tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Sentry'],
      github: 'https://github.com/dana-khaing/RecipeShelf-Mobile',
      status: 'COMPLETED',
    },
    {
      rank: 'A',
      name: 'CafePOS',
      subtitle: 'Offline-First POS System',
      type: 'Solo Quest',
      description: 'Multi-branch point-of-sale system for cafes and restaurants in Myanmar and Thailand. Feature-complete with offline support, Windows branch hub, table service, and release-ready operations.',
      tech: ['TypeScript', 'Turborepo', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/dana-khaing/CafePOS',
      status: 'COMPLETED',
    },
    {
      rank: 'A',
      name: 'Memoir3D',
      subtitle: '3D Event Scene Reconstructor',
      type: 'Research Quest',
      description: 'Transforms crowd-sourced party photos into a navigable 3D Gaussian Splatting scene with a timeline scrubber. Uses COLMAP for SfM, SAM2 for person masking, and OpenSplat for Apple Silicon.',
      tech: ['Python', 'FastAPI', 'React', 'Three.js', 'COLMAP', 'OpenSplat'],
      github: 'https://github.com/dana-khaing/D-Vision-3D-reconstructure',
      status: 'ACTIVE',
    },
    {
      rank: 'A',
      name: 'PhoneSine',
      subtitle: 'Tech Marketplace & Storefront',
      type: 'Party Quest',
      description: 'E-commerce marketplace for mobiles and laptops with product listings, cart, checkout, and RESTful API integration.',
      tech: ['Next.js', 'Node.js', 'REST APIs'],
      github: 'https://github.com/dana-khaing/PhoneSine-MobileEcommerce',
      status: 'COMPLETED',
    },
    {
      rank: 'A',
      name: 'Restaurant OMS',
      subtitle: 'Kitchen-to-Table Order System',
      type: 'Party Quest',
      description: 'Microservices-based restaurant order management system. Contributed as Frontend Developer with real-time order updates.',
      tech: ['Next.js', 'Node.js', 'Microservices', 'Git'],
      github: 'https://github.com/dana-khaing/Restaurant_Order_Management_Web',
      status: 'COMPLETED',
    },
    {
      rank: 'A',
      name: 'ImageProcessing',
      subtitle: 'ART-Powered Vision Engine',
      type: 'Academic Quest',
      description: 'Image processing application built with a custom language using the ART tool and Java plugin. Applies image transformation algorithms via language-defined rules.',
      tech: ['Java', 'ART', 'Image Processing'],
      github: 'https://github.com/dana-khaing/ImageProcessing',
      status: 'COMPLETED',
    },
    {
      rank: 'B',
      name: 'Delta Chat',
      subtitle: 'Gemini-Powered AI Assistant',
      type: 'Solo Quest',
      description: 'Browser-based AI chatbot powered by Google Gemini. Configurable assistant personas, multi-turn conversation history, and a responsive Python/Flask backend.',
      tech: ['Python', 'Flask', 'Gemini API'],
      github: 'https://github.com/dana-khaing/Delta-ChatBot',
      status: 'ACTIVE',
    },
    {
      rank: 'B',
      name: 'ART-Work',
      subtitle: 'Custom Compiler from Scratch',
      type: 'Academic Quest',
      description: 'Designed and implemented a custom programming language using the Ambiguity Retained Translation (ART) tool developed by Dr. Adrian Johnstone at Royal Holloway.',
      tech: ['Java', 'ART', 'Compiler Theory'],
      github: 'https://github.com/dana-khaing/ART-Work',
      status: 'COMPLETED',
    },
    {
      rank: 'B',
      name: 'Airline Reservation',
      subtitle: 'Route & Seat Booking System',
      type: 'Solo Quest',
      description: 'Airline seat reservation system with route browsing including transit connections, interactive seat map selection, and payment processing.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/dana-khaing/Airline_Reservation_Project',
      status: 'COMPLETED',
    },
    {
      rank: 'B',
      name: 'Calculator',
      subtitle: 'Stack-Driven Arithmetic Engine',
      type: 'Training Arc',
      description: 'Calculator application built using a Stack data structure — a foundational exercise in core computer science concepts.',
      tech: ['Java'],
      github: 'https://github.com/dana-khaing/Calculator',
      status: 'COMPLETED',
    },
    {
      rank: 'C',
      name: 'CS50',
      subtitle: 'Harvard Algorithm Challenges',
      type: 'Training Arc',
      description: 'Problem sets from Harvard\'s CS50 course covering algorithms, data structures, memory management, and web fundamentals.',
      tech: ['C', 'Python', 'SQL'],
      github: 'https://github.com/dana-khaing/CS50',
      status: 'COMPLETED',
    },
    {
      rank: 'C',
      name: 'MovieGallery',
      subtitle: 'Curated Film Browser',
      type: 'Side Quest',
      description: 'Frontend movie gallery for browsing and exploring recommended films with detail views.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/dana-khaing/MovieGallery',
      status: 'COMPLETED',
    },
    {
      rank: 'C',
      name: 'Travel Website',
      subtitle: 'Global Destination Explorer',
      type: 'Side Quest',
      description: 'Frontend travel discovery site showcasing amazing tourist destinations around the world.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/dana-khaing/Travel_Website',
      status: 'COMPLETED',
    },
  ],

  // Education milestones
  education: [
    {
      title: 'BSc Computer Science — First Class Honours',
      institution: 'Royal Holloway, University of London',
      year: 'July 2025',
      xp: 5000,
      note: 'Top achievement: First Class',
    },
    {
      title: 'BSc Mathematics (Partial)',
      institution: 'Yangon University',
      year: '2018–2020',
      xp: 1800,
      note: 'Strong analytical foundation',
    },
  ],

  // Work experience
  experience: [
    {
      role: 'Service Manager',
      company: 'Chipotle Mexican Grill',
      type: 'Leadership',
      traits: ['Team Leadership', 'Operations', 'Customer Service', 'Staff Training', 'Food Safety'],
      description: 'Led team operations in a fast-paced environment, ensuring efficient service and high customer satisfaction.',
    },
  ],

  // Contact
  contact: {
    email: 'danakhaing13@gmail.com',
    github: 'https://github.com/dana-khaing',
    linkedin: 'https://www.linkedin.com/in/dana-khaing',
    facebook: 'https://www.facebook.com/profile.php?id=100008858651331',
    instagram: 'https://www.instagram.com/lewis_by_dana/',
    whatsapp: 'https://wa.me/447904101667',
    location: 'Isleworth, London, UK',
  },

  // Notification log messages for home screen
  notifications: [
    '▶  AniVerse Streaming Platform — quest complete',
    '▶  KUMA Social Media Platform — deployed successfully',
    '▶  Foodie Delivery App — building in progress',
    '▶  RecipeShelf Mobile App — shipped on iOS & Android',
    '▶  FlowBit Transaction System — quest complete',
    '▶  CafePOS — feature-complete, release-ready',
    '▶  Memoir3D — 3D scene reconstruction active',
    '▶  BSc Computer Science — First Class Honours achieved',
    '▶  PhoneSine E-Commerce — party quest completed',
    '▶  Royal Holloway University of London — guild joined',
    '▶  Delta Chat — AI assistant in development',
    '▶  Restaurant OMS — microservices mission complete',
  ],
} as const

export type StatColor = 'atk' | 'def' | 'mag' | 'spd' | 'int'
