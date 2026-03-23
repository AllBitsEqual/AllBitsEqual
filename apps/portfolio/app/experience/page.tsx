'use client'

import { useTranslation } from 'react-i18next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

const accentClasses = {
  amber: {
    border: 'border-accent-amber',
    text: 'text-accent-amber',
    tag: 'border-accent-amber/30 text-accent-amber/80',
    dot: 'bg-accent-amber',
    ring: 'ring-accent-amber/30',
  },
  teal: {
    border: 'border-accent-teal',
    text: 'text-accent-teal',
    tag: 'border-accent-teal/30 text-accent-teal/80',
    dot: 'bg-accent-teal',
    ring: 'ring-accent-teal/30',
  },
  purple: {
    border: 'border-accent-purple',
    text: 'text-accent-purple',
    tag: 'border-accent-purple/30 text-accent-purple/80',
    dot: 'bg-accent-purple',
    ring: 'ring-accent-purple/30',
  },
}

interface SkillGroup {
  name: string
  items: readonly string[]
}

interface SkillCategory {
  title: string
  accent: 'amber' | 'teal' | 'purple'
  groups: readonly SkillGroup[]
}

interface Position {
  period: string
  company: string
  role: string
  current: boolean
  bullets: readonly string[]
}

interface EducationItem {
  period: string
  institution: string
  qualification: string
  detail: string
  type: string
}

export default function Experience() {
  const { t, i18n } = useTranslation('common')
  const isDE = i18n.language === 'de'

  const skillCategories = t('experience.skillCategories', { returnObjects: true }) as SkillCategory[]
  const positions = t('experience.positions', { returnObjects: true }) as Position[]
  const prior = t('experience.prior', { returnObjects: true }) as string[]
  const education = t('experience.education', { returnObjects: true }) as EducationItem[]

  return (
    <>
      <Nav />
      <main>
        {/* Page header */}
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-accent-amber">
              {t('experience.pageLabel')}
            </p>
            <h1 className="mb-8 text-3xl font-bold text-text-primary md:text-4xl">
              {t('pages.experience.title')}
            </h1>
            <div className="flex flex-wrap gap-4">
              <a
                href={isDE ? '/cv/konrad-cv-de-2026.pdf' : '/cv/konrad-cv-en-2026.pdf'}
                download
                className="clip-corners border border-accent-amber px-6 py-3 font-semibold text-accent-amber transition-colors hover:bg-accent-amber hover:text-background"
              >
                {t('cv.download')}
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <p className="mb-8 font-mono text-xs tracking-[0.2em] text-accent-teal">
              {t('experience.skillsLabel')}
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {skillCategories.map((cat) => {
                const cls = accentClasses[cat.accent]
                return (
                  <div
                    key={cat.title}
                    className={`clip-corners border bg-surface p-6 ${cls.border}`}
                  >
                    <h2 className={`mb-4 font-mono text-xs font-bold tracking-widest uppercase ${cls.text}`}>
                      {cat.title}
                    </h2>
                    <div className="space-y-4">
                      {cat.groups.map((group) => (
                        <div key={group.name}>
                          <p className="mb-2 text-xs font-semibold text-text-muted">{group.name}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {group.items.map((item) => (
                              <span
                                key={item}
                                className={`border px-2 py-0.5 font-mono text-[10px] ${cls.tag}`}
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Work timeline */}
        <section className="border-t border-border py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <p className="mb-12 font-mono text-xs tracking-[0.2em] text-accent-amber">
              {t('experience.timelineLabel')}
            </p>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-3 top-0 bottom-0 hidden w-px bg-border md:block md:left-4" />

              <div className="space-y-8">
                {positions.map((pos, i) => (
                  <div key={i} className="relative md:pl-12">
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-0 top-1.5 hidden h-7 w-7 items-center justify-center rounded-sm ring-2 md:flex ${
                        pos.current
                          ? 'bg-accent-amber ring-accent-amber/30'
                          : 'bg-surface ring-border'
                      }`}
                    >
                      <div
                        className={`h-2 w-2 rounded-sm ${pos.current ? 'bg-background' : 'bg-text-faint'}`}
                      />
                    </div>

                    <div className="clip-corners border border-border bg-surface p-6">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-bold text-text-primary">{pos.company}</h3>
                          <p className="text-sm text-accent-amber">{pos.role}</p>
                        </div>
                        <span
                          className={`font-mono text-xs whitespace-nowrap ${
                            pos.current ? 'text-accent-amber' : 'text-text-muted'
                          }`}
                        >
                          {pos.period}
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {pos.bullets.map((bullet, j) => (
                          <li key={j} className="flex gap-2 text-sm text-text-muted">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-text-faint" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}

                {/* Prior experience */}
                <div className="relative md:pl-12">
                  <div className="absolute left-0 top-1.5 hidden h-7 w-7 items-center justify-center rounded-sm ring-2 bg-surface ring-border md:flex">
                    <div className="h-2 w-2 rounded-sm bg-text-faint" />
                  </div>
                  <div className="clip-corners border border-border bg-surface p-6">
                    <h3 className="mb-4 font-mono text-xs font-bold tracking-widest text-text-muted uppercase">
                      {t('experience.priorLabel')}
                    </h3>
                    <ul className="space-y-2">
                      {prior.map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-text-muted">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-text-faint" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="border-t border-border py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <p className="mb-8 font-mono text-xs tracking-[0.2em] text-accent-purple">
              {t('experience.educationLabel')}
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {education.map((item, i) => (
                <div key={i} className="clip-corners border border-border bg-surface p-6">
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-text-faint">
                    {item.type}
                  </p>
                  <p className="mb-3 font-mono text-xs text-accent-purple">{item.period}</p>
                  <h3 className="font-bold text-text-primary">{item.qualification}</h3>
                  <p className="mt-1 text-sm text-text-muted">{item.institution}</p>
                  <p className="mt-1 font-mono text-xs text-text-faint">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
