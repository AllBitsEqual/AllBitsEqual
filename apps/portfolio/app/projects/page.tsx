'use client'

import { useTranslation } from 'react-i18next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

const accentClasses = {
  amber: {
    label: 'text-accent-amber',
    border: 'border-accent-amber',
    tag: 'border-accent-amber/40 text-accent-amber',
    line: 'bg-accent-amber',
    placeholder: 'from-accent-amber/10 to-accent-amber/5 border-accent-amber/20',
    id: 'text-accent-amber/40',
  },
  teal: {
    label: 'text-accent-teal',
    border: 'border-accent-teal',
    tag: 'border-accent-teal/40 text-accent-teal',
    line: 'bg-accent-teal',
    placeholder: 'from-accent-teal/10 to-accent-teal/5 border-accent-teal/20',
    id: 'text-accent-teal/40',
  },
  purple: {
    label: 'text-accent-purple',
    border: 'border-accent-purple',
    tag: 'border-accent-purple/40 text-accent-purple',
    line: 'bg-accent-purple',
    placeholder: 'from-accent-purple/10 to-accent-purple/5 border-accent-purple/20',
    id: 'text-accent-purple/40',
  },
}

interface ProjectItem {
  id: string
  field: string
  company: string
  period: string
  partners: string[]
  title: string
  teaser: string
  accent: 'amber' | 'teal' | 'purple'
  visible: boolean
}

export default function Projects() {
  const { t } = useTranslation('common')
  const allItems = t('projectsPage.items', { returnObjects: true }) as ProjectItem[]
  const items = allItems.filter((item) => item.visible)

  return (
    <>
      <Nav />
      <main>
        {/* Page header */}
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-accent-amber">
              {t('projectsPage.pageLabel')}
            </p>
            <h1 className="text-3xl font-bold text-text-primary md:text-4xl">
              {t('projectsPage.title')}
            </h1>
            <p className="mt-3 font-mono text-sm text-text-muted">
              {t('projectsPage.intro')}
            </p>
          </div>
        </section>

        {/* Story entries */}
        <div className="divide-y divide-border">
          {items.map((item, index) => {
            const cls = accentClasses[item.accent]
            const isEven = index % 2 === 1

            return (
              <section key={item.id} className="py-0">
                <div
                  className={`mx-auto flex max-w-6xl flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <div
                      className={`relative aspect-square w-full border-b border-border bg-gradient-to-br md:border-b-0 ${
                        isEven ? 'md:border-l' : 'md:border-r'
                      } ${cls.placeholder}`}
                    >
                      {/* Placeholder grid */}
                      <div className="absolute inset-0 grid-bg opacity-60" />
                      {/* ID watermark */}
                      <span
                        className={`absolute bottom-6 right-6 font-mono text-8xl font-bold leading-none select-none ${cls.id}`}
                      >
                        {item.id}
                      </span>
                      {/* Field label centred */}
                      <div className="absolute inset-0 flex items-center justify-center px-8">
                        <p className={`font-mono text-xs tracking-[0.2em] uppercase text-center ${cls.label}`}>
                          {item.field}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex w-full flex-col justify-center px-6 py-12 md:w-1/2 md:px-12">
                    {/* Accent line */}
                    <div className={`mb-6 h-px w-12 ${cls.line}`} />

                    {/* Field + period */}
                    <p className={`mb-1 font-mono text-xs tracking-[0.15em] uppercase ${cls.label}`}>
                      {item.field}
                    </p>
                    <p className="mb-4 font-mono text-xs text-text-faint">{item.period}</p>

                    {/* Title */}
                    <h2 className="mb-4 text-2xl font-bold leading-tight text-text-primary md:text-3xl">
                      {item.title}
                    </h2>

                    {/* Teaser */}
                    <p className="mb-6 leading-relaxed text-text-muted">{item.teaser}</p>

                    {/* Company + clients */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs text-text-faint">// employer</span>
                        <span
                          className={`clip-corners border px-2 py-0.5 font-mono text-xs ${cls.tag}`}
                        >
                          {item.company}
                        </span>
                      </div>
                      {item.partners.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs text-text-faint">// partners</span>
                          {item.partners.map((partner) => (
                            <span
                              key={partner}
                              className="border border-border px-2 py-0.5 font-mono text-xs text-text-muted"
                            >
                              {partner}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
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
