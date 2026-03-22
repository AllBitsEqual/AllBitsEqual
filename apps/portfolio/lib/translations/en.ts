const en = {
  nav: {
    brand: 'allbitsequal',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    blog: 'Blog',
    hire: 'Hire Me',
  },
  hero: {
    label: 'SENIOR FRONT-END ARCHITECT',
    headline: 'I build apps that live in your pocket and worlds that live in your head.',
    body: 'As a Senior Front-End Architect & Full-Stack Developer with 20+ years of experience, I deliver high-performance applications within the React and React Native ecosystems — bridging two decades of foundational engineering with modern, AI-augmented workflows. Rigorous architectural standards ensure scalable, production-ready codebases and seamless end-to-end deployment via Expo EAS and similar systems. I love building things.',
    ctaProjects: 'View Projects',
    ctaCV: 'Download CV',
    stats: '20+ Years Experience · 3 Platforms Targeted · ∞ Lines of Craft',
  },
  skills: {
    label: '// TECH STACK',
    items: [
      'React Native',
      'Expo',
      'TypeScript',
      'Next.js',
      'iOS & Android',
      'Expo Web',
      'Mobile Architecture',
      'Game Systems Design',
      'Supabase',
      'REST & GraphQL',
    ],
  },
  featuredProjects: {
    label: '// FEATURED WORK',
    tagline: 'Projects worth your attention.',
    cta: 'All Projects →',
    projects: [
      {
        id: '01',
        name: 'TopFit App',
        tags: ['Corporate Health', 'Mobile', 'iOS & Android'],
        description:
          'Developed and continuously improved over 3 years for client TopFit GmbH — a digital corporate health management (BGM) platform that helps employees build healthier habits at work. Features curated content on nutrition, sleep, and active workplace breaks, plus company-wide tools for articles, videos, and event booking.',
        links: {
          appStore: 'https://apps.apple.com/de/app/topfit-app/id1612613416',
          googlePlay: 'https://play.google.com/store/apps/details?id=app.topfit',
        },
        accent: '#4ecdc4',
      },
      {
        id: '02',
        name: 'ScrapWars',
        tags: ['Game Dev', 'Mobile', '4X MMO'],
        description:
          'A SolarPunk 4X MMO built with React Native & Expo. Nomadic survival across post-collapse deserts, deep crafting systems, and living player economies.',
        links: {
          web: 'https://scrapwars.allbitsequal.com',
        },
        accent: '#f5a623',
      },
      {
        id: '03',
        name: 'Interactive Fiction',
        tags: ['Mobile', 'Narrative', 'Expo'],
        description:
          'A branching narrative app powered by Yarn Spinner and Expo, with story written by a co-author — showcasing Expo Web\'s cross-platform reach.',
        links: {},
        accent: '#a78bfa',
      },
    ],
  },
  blog: {
    label: '// LATEST FROM THE BLOG',
    post: {
      category: 'DEV LOG',
      date: 'MARCH 2026',
      title: "Designing ScrapWars' living materials system — a three-tier biological production chain",
      excerpt:
        'How we built a self-sustaining ecosystem inside a spaceship Bio Bay, from Biomass Pulp up to refined biological outputs...',
      cta: 'Read Post →',
    },
  },
  footer: {
    built: 'Built with Next.js & Expo',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
  },
  cv: {
    downloadEN: 'Download CV (EN)',
    downloadDE: 'Lebenslauf (DE)',
  },
  pages: {
    about: {
      title: 'About',
      comingSoon: 'Coming soon.',
    },
    experience: {
      title: 'Experience',
      comingSoon: 'Coming soon.',
    },
    projects: {
      title: 'Projects',
      comingSoon: 'Coming soon.',
    },
    blog: {
      title: 'Blog',
      comingSoon: 'Coming soon.',
    },
  },
} as const

export default en
