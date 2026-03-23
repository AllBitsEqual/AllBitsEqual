'use client'

import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation('common')

  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-xs text-text-muted md:justify-start">
            <span className="text-accent-amber font-bold">allbitsequal</span>
            <span className="text-text-faint">·</span>
            <span>© 2026</span>
            <span className="text-text-faint">·</span>
            <span>{t('footer.built')}</span>
          </div>
          <div className="flex items-center gap-4 font-mono text-xs">
            <a
              href="https://github.com/AllBitsEqual"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-teal transition-colors"
            >
              {t('footer.github')}
            </a>
            <a
              href="https://linkedin.com/in/konrad-abe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-teal transition-colors"
            >
              {t('footer.linkedin')}
            </a>
            <a
              href="mailto:info@allbitsequal.com"
              className="text-text-muted hover:text-accent-teal transition-colors"
            >
              {t('footer.email')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
