'use client'

import { useTranslation } from 'react-i18next'

export function SkillsStrip() {
  const { t } = useTranslation('common')
  const items = t('skills.items', { returnObjects: true }) as string[]

  return (
    <section className="border-y border-border bg-surface py-8">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="mb-4 font-mono text-xs tracking-[0.2em] text-accent-teal">
          {t('skills.label')}
        </p>
        <div className="flex flex-wrap gap-2">
          {items.map((skill) => (
            <span
              key={skill}
              className="clip-corners border border-border bg-background px-3 py-1.5 font-mono text-xs text-text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
