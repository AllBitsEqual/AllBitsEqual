'use client'

import { useTranslation } from 'react-i18next'

export function LanguageToggle() {
  const { i18n } = useTranslation()
  const current = i18n.language

  return (
    <div className="flex items-center gap-1 font-mono text-xs">
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`px-1.5 py-0.5 transition-colors ${
          current === 'en'
            ? 'text-accent-amber'
            : 'text-text-muted hover:text-text-primary'
        }`}
      >
        EN
      </button>
      <span className="text-text-faint">|</span>
      <button
        onClick={() => i18n.changeLanguage('de')}
        className={`px-1.5 py-0.5 transition-colors ${
          current === 'de'
            ? 'text-accent-amber'
            : 'text-text-muted hover:text-text-primary'
        }`}
      >
        DE
      </button>
    </div>
  )
}
