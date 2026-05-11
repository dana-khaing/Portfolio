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
    { key: 'ATK', label: 'Frontend ATK', value: 85, color: 'atk' as const },
    { key: 'DEF', label: 'Backend DEF',  value: 80, color: 'def' as const },
    { key: 'MAG', label: 'Database MAG', value: 75, color: 'mag' as const },
    { key: 'SPD', label: 'DevOps SPD',   value: 78, color: 'spd' as const },
    { key: 'INT', label: 'Languages INT',value: 90, color: 'int' as const },
  ],

  // Tech attributes (used in attributes grid)
  attributes: [
    { name: 'Frontend',  value: 88, color: '#f87171' },
    { name: 'Backend',   value: 82, color: '#60a5fa' },
    { name: 'Database',  value: 78, color: '#a78bfa' },
    { name: 'Tools',     value: 85, color: '#fbbf24' },
    { name: 'Languages', value: 90, color: '#34d399' },
  ],

  // Equipment (primary tools — one per category)
  equipment: [
    { slot: 'Main Weapon', name: 'React.js' },     // Frontend
    { slot: 'Off-hand',    name: 'Node.js' },      // Backend
    { slot: 'Magic Tome',  name: 'Python' },       // Language
    { slot: 'Armor',       name: 'MySQL' },        // Database
    { slot: 'Accessory',   name: 'Git' },          // Tools
  ],

  // Skills (tech stack)
  skills: {
    Languages: [
      { name: 'JavaScript', value: 90 },
      { name: 'TypeScript', value: 85 },
      { name: 'Python',     value: 75 },
      { name: 'Java',       value: 70 },
    ],
    Frontend: [
      { name: 'React.js',     value: 88 },
      { name: 'Next.js',      value: 88 },
      { name: 'Tailwind CSS', value: 85 },
    ],
    Backend: [
      { name: 'Node.js',     value: 82 },
      { name: 'Express.js',  value: 80 },
      { name: 'Django',      value: 72 },
      { name: 'RESTful APIs',value: 85 },
    ],
    Database: [
      { name: 'MySQL',  value: 78 },
      { name: 'Prisma', value: 80 },
    ],
    Tools: [
      { name: 'Git',                value: 85 },
      { name: 'Clerk Auth',         value: 78 },
      { name: 'Cloudinary',         value: 75 },
    ],
  },

  // Quests (projects)
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
      name: 'FlowBit',
      subtitle: 'Transaction Management System',
      type: 'Solo Quest',
      description: 'Capacity-based numeric transaction system with prioritisation rules, algorithmic logic, and type-safe full-stack architecture.',
      tech: ['Django', 'Python', 'Next.js', 'TypeScript'],
      github: 'https://github.com/dana-khaing/FlowBit_Capacity-Based-Numeric-Transaction-Management-System',
      status: 'COMPLETED',
    },
    {
      rank: 'A',
      name: 'PhoneSine',
      subtitle: 'Mobile E-Commerce',
      type: 'Party Quest',
      description: 'E-commerce marketplace for mobiles and laptops with product listings, cart, checkout, and RESTful API integration.',
      tech: ['Next.js', 'Node.js', 'REST APIs'],
      github: 'https://github.com/dana-khaing/PhoneSine-MobileEcommerce',
      status: 'COMPLETED',
    },
    {
      rank: 'A',
      name: 'Restaurant OMS',
      subtitle: 'Order Management System',
      type: 'Party Quest',
      description: 'Microservices-based restaurant order management system. Contributed as Frontend Developer with real-time order updates.',
      tech: ['Next.js', 'Node.js', 'Microservices', 'Git'],
      github: 'https://github.com/dana-khaing/Restaurant_Order_Management_Web',
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
    email: 'dana1352000@gmail.com',
    github: 'https://github.com/dana-khaing',
    linkedin: 'https://www.linkedin.com/in/dana-khaing',
    location: 'Isleworth, London, UK',
  },

  // Notification log messages for home screen
  notifications: [
    '▶  KUMA Social Media Platform — deployed successfully',
    '▶  FlowBit Transaction System — quest complete',
    '▶  BSc Computer Science — First Class Honours achieved',
    '▶  PhoneSine E-Commerce — party quest completed',
    '▶  Royal Holloway University of London — guild joined',
    '▶  Restaurant OMS — microservices mission complete',
  ],
} as const

export type StatColor = 'atk' | 'def' | 'mag' | 'spd' | 'int'
