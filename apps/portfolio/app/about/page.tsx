'use client'

import { useTranslation } from 'react-i18next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

const sectionAccents = ['amber', 'teal', 'purple'] as const

const accentClasses = {
  amber: 'text-accent-amber',
  teal: 'text-accent-teal',
  purple: 'text-accent-purple',
}

interface AboutSection {
  label: string
  title: string
  body: string[]
}

export default function About() {
  const { t } = useTranslation('common')
  const sections = t('about.sections', { returnObjects: true }) as AboutSection[]

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden grid-bg border-b border-border">
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #4ecdc4 0%, transparent 70%)', filter: 'blur(60px)' }}
          />
          <div className="mx-auto max-w-3xl px-4 py-20 md:px-8 md:py-28">
            <p className="mb-4 font-mono text-xs tracking-[0.2em] text-accent-teal">
              {t('about.pageLabel')}
            </p>
            <h1 className="mb-1 text-3xl font-bold text-text-primary md:text-5xl">
              {t('about.title')}
            </h1>
            <p className="mb-8 font-mono text-sm text-text-muted">
              {t('about.subtitle')}
            </p>
            <p className="text-lg leading-relaxed text-text-muted max-w-2xl">
              {t('about.intro')}
            </p>
          </div>
        </section>

        {/* Content sections */}
        <div className="divide-y divide-border">
          {sections.map((section, index) => {
            const accent = sectionAccents[index % sectionAccents.length]
            const cls = accentClasses[accent]
            return (
              <section key={index} className="py-16">
                <div className="mx-auto max-w-3xl px-4 md:px-8">
                  <p className={`mb-3 font-mono text-xs tracking-[0.15em] ${cls}`}>
                    {section.label}
                  </p>
                  <h2 className="mb-8 text-2xl font-bold text-text-primary md:text-3xl">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.body.map((paragraph, i) => (
                      <p key={i} className="leading-relaxed text-text-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </section>
            )
          })}
        </div>
      </main>
      <Footer />
    </>
  )
}
