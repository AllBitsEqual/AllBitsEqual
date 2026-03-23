'use client'

import { useTranslation } from 'react-i18next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

const accentClasses = {
  amber: {
    label: 'text-accent-amber',
    border: 'border-l-accent-amber',
    insight: 'border-accent-amber/30 bg-accent-amber/5 text-accent-amber',
    id: 'text-accent-amber',
  },
  teal: {
    label: 'text-accent-teal',
    border: 'border-l-accent-teal',
    insight: 'border-accent-teal/30 bg-accent-teal/5 text-accent-teal',
    id: 'text-accent-teal',
  },
  purple: {
    label: 'text-accent-purple',
    border: 'border-l-accent-purple',
    insight: 'border-accent-purple/30 bg-accent-purple/5 text-accent-purple',
    id: 'text-accent-purple',
  },
}

interface Section {
  id: string
  label: string
  title: string
  accent: 'amber' | 'teal' | 'purple'
  insight: string
  body: string[]
}

export default function Augmented() {
  const { t } = useTranslation('common')
  const sections = t('augmented.sections', { returnObjects: true }) as Section[]

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden grid-bg border-b border-border">
          <div
            className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #f5a623 0%, transparent 70%)', filter: 'blur(60px)' }}
          />
          <div className="mx-auto max-w-3xl px-4 py-20 md:px-8 md:py-28">
            <p className="mb-4 font-mono text-xs tracking-[0.2em] text-accent-amber">
              {t('augmented.pageLabel')}
            </p>
            <h1 className="mb-6 text-3xl font-bold leading-tight text-text-primary md:text-5xl">
              {t('augmented.title')}
            </h1>
            <p className="text-lg leading-relaxed text-text-muted">
              {t('augmented.intro')}
            </p>
          </div>
        </section>

        {/* Sections */}
        <div className="divide-y divide-border">
          {sections.map((section) => {
            const cls = accentClasses[section.accent]
            return (
              <section key={section.id} className="py-16">
                <div className="mx-auto max-w-3xl px-4 md:px-8">
                  <div className="mb-2 flex items-center gap-4">
                    <span className={`font-mono text-xs ${cls.id}`}>{section.id}</span>
                    <span className={`font-mono text-xs tracking-[0.15em] ${cls.label}`}>
                      {section.label}
                    </span>
                  </div>
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

                  {/* Key insight callout */}
                  <blockquote
                    className={`mt-8 clip-corners border-l-2 border px-6 py-4 font-mono text-sm italic ${cls.insight}`}
                  >
                    "{section.insight}"
                  </blockquote>
                </div>
              </section>
            )
          })}
        </div>

        {/* Closing */}
        <section className="border-t border-border bg-surface py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <p className={`mb-4 font-mono text-xs tracking-[0.2em] text-accent-teal`}>
              {t('augmented.closingLabel')}
            </p>
            <p className="text-xl font-bold leading-snug text-text-primary md:text-2xl">
              {t('augmented.closing')}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
