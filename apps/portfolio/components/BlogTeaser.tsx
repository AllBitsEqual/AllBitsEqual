'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export function BlogTeaser() {
  const { t } = useTranslation('common')

  return (
    <section className="border-t border-border py-20 bg-surface">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="mb-8 font-mono text-xs tracking-[0.2em] text-accent-purple">
          {t('blog.label')}
        </p>

        <div className="clip-corners border border-border bg-background p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-text-faint mb-3">
            <span className="text-accent-purple">{t('blog.post.category')}</span>
            <span>·</span>
            <span>{t('blog.post.date')}</span>
          </div>
          <h3 className="text-lg font-bold text-text-primary md:text-xl leading-snug mb-3">
            {t('blog.post.title')}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed mb-6">
            {t('blog.post.excerpt')}
          </p>
          <Link
            href="/blog"
            className="font-mono text-sm text-accent-purple hover:opacity-80 transition-opacity"
          >
            {t('blog.post.cta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
