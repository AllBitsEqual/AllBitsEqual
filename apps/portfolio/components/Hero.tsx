'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export function Hero() {
  const { t, i18n } = useTranslation('common')
  const lang = i18n.language

  return (
    <section className="relative overflow-hidden grid-bg">
      {/* Glow orbs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #f5a623 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-16 h-80 w-80 rounded-full opacity-8"
        style={{
          background: 'radial-gradient(circle, #4ecdc4 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-32">
        {/* Label */}
        <p className="mb-6 font-mono text-xs tracking-[0.2em] text-accent-amber">
          {t('hero.label')}
        </p>

        {/* Headline */}
        <h1 className="mb-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-5xl lg:text-6xl">
          {t('hero.headline')}
        </h1>

        {/* Body */}
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
          {t('hero.body')}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="clip-corners bg-accent-amber px-6 py-3 font-semibold text-background transition-opacity hover:opacity-90"
          >
            {t('hero.ctaProjects')}
          </Link>
          <a
            href={`/cv/konrad-cv-${lang === 'de' ? 'de' : 'en'}-2026.pdf`}
            download
            className="clip-corners border border-accent-teal px-6 py-3 font-semibold text-accent-teal transition-colors hover:bg-accent-teal hover:text-background"
          >
            {t('hero.ctaCV')}
          </a>
        </div>

        {/* Stats */}
        <p className="mt-12 font-mono text-xs tracking-wider text-text-faint">
          {t('hero.stats')}
        </p>
      </div>
    </section>
  )
}
