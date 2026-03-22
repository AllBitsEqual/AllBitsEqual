'use client'

import { useTranslation } from 'react-i18next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export default function Projects() {
  const { t } = useTranslation('common')

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-20 md:px-8">
        <p className="mb-2 font-mono text-xs tracking-[0.2em] text-accent-purple">
          // PROJECTS
        </p>
        <h1 className="text-3xl font-bold text-text-primary md:text-4xl">
          {t('pages.projects.title')}
        </h1>
        <p className="mt-8 text-text-muted">{t('pages.projects.comingSoon')}</p>
      </main>
      <Footer />
    </>
  )
}
