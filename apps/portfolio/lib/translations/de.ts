const de = {
  nav: {
    brand: 'allbitsequal',
    about: 'Über mich',
    experience: 'Erfahrung',
    projects: 'Projekte',
    blog: 'Blog',
    hire: 'Kontakt',
  },
  hero: {
    label: 'SENIOR FRONT-END ARCHITEKT',
    headline: 'Ich entwickle Apps, die in deiner Tasche leben, und Welten, die in deinem Kopf entstehen.',
    body: 'Als Senior Front-End Architekt & Full-Stack Entwickler mit über 20 Jahren Erfahrung liefere ich leistungsstarke Anwendungen im React- und React-Native-Ökosystem — und verbinde zwei Jahrzehnte solider Ingenieursarbeit mit modernen, KI-gestützten Workflows. Durch konsequente Architekturstandards entstehen skalierbare, produktionsreife Codebasen und reibungslose End-to-End-Deployments via Expo EAS. Ich baue Dinge mit Leidenschaft.',
    ctaProjects: 'Projekte ansehen',
    ctaCV: 'Lebenslauf herunterladen',
    stats: '20+ Jahre Erfahrung · 3 Zielplattformen · ∞ Zeilen Handwerk',
  },
  skills: {
    label: '// TECHNOLOGIE-STACK',
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
    label: '// AUSGEWÄHLTE PROJEKTE',
    tagline: 'Projekte, die für sich sprechen.',
    cta: 'Alle Projekte →',
    projects: [
      {
        id: '01',
        name: 'TopFit App',
        tags: ['Betriebliches Gesundheitsmanagement', 'Mobile', 'iOS & Android'],
        description:
          'Seit 3 Jahren entwickelt und kontinuierlich verbessert für den Kunden TopFit GmbH — eine digitale BGM-Plattform, die Mitarbeitenden hilft, gesündere Gewohnheiten im Arbeitsalltag zu etablieren. Inhalte zu Ernährung, Schlaf und aktiven Pausen sowie Kommunikationswerkzeuge für Artikel, Videos und Eventbuchungen.',
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
          'Ein SolarPunk-4X-MMO, entwickelt mit React Native & Expo. Nomadisches Überleben in post-apokalyptischen Wüsten, tiefe Crafting-Systeme und lebendige Spielerökonomien.',
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
          'Eine verzweigte Erzähl-App auf Basis von Yarn Spinner und Expo, mit Story einer Co-Autorin — als Showcase für Expo Webs plattformübergreifende Reichweite.',
        links: {},
        accent: '#a78bfa',
      },
    ],
  },
  blog: {
    label: '// NEUESTES AUS DEM BLOG',
    post: {
      category: 'DEV LOG',
      date: 'MÄRZ 2026',
      title: 'Das lebende Materialsystem von ScrapWars — eine dreistufige biologische Produktionskette',
      excerpt:
        'Wie wir ein sich selbst erhaltendes Ökosystem in einer Schiffs-Bio-Bucht aufgebaut haben — von Biomasse-Pulp bis zu veredelten biologischen Outputs...',
      cta: 'Beitrag lesen →',
    },
  },
  footer: {
    built: 'Erstellt mit Next.js & Expo',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'E-Mail',
  },
  cv: {
    downloadEN: 'CV (EN)',
    downloadDE: 'Lebenslauf (DE)',
  },
  pages: {
    about: {
      title: 'Über mich',
      comingSoon: 'Kommt bald.',
    },
    experience: {
      title: 'Erfahrung',
      comingSoon: 'Kommt bald.',
    },
    projects: {
      title: 'Projekte',
      comingSoon: 'Kommt bald.',
    },
    blog: {
      title: 'Blog',
      comingSoon: 'Kommt bald.',
    },
  },
} as const

export default de
