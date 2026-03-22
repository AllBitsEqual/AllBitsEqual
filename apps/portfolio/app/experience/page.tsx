'use client'

import { useTranslation } from 'react-i18next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export default function Experience() {
  const { t, i18n } = useTranslation('common')
  const lang = i18n.language

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-20 md:px-8">
        <p className="mb-2 font-mono text-xs tracking-[0.2em] text-accent-amber">
          // EXPERIENCE
        </p>
        <h1 className="text-3xl font-bold text-text-primary md:text-4xl">
          {t('pages.experience.title')}
        </h1>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/cv/konrad-cv-en-2026.pdf"
            download
            className="clip-corners border border-accent-amber px-6 py-3 font-semibold text-accent-amber transition-colors hover:bg-accent-amber hover:text-background"
          >
            {t('cv.downloadEN')}
          </a>
          <a
            href="/cv/konrad-cv-de-2026.pdf"
            download
            className="clip-corners border border-accent-teal px-6 py-3 font-semibold text-accent-teal transition-colors hover:bg-accent-teal hover:text-background"
          >
            {t('cv.downloadDE')}
          </a>
        </div>

        <p className="mt-12 text-text-muted">{t('pages.experience.comingSoon')}</p>
      </main>
      <Footer />
    </>
  )
}
