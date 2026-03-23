'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { LanguageToggle } from './LanguageToggle'

export function Nav() {
  const { t } = useTranslation('common')
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/about', label: t('nav.about') },
    { href: '/experience', label: t('nav.experience') },
    { href: '/projects', label: t('nav.projects') },
    { href: '/augmented', label: t('nav.augmented') },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-widest text-accent-amber hover:opacity-80 transition-opacity"
        >
          {t('nav.brand')}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            aria-label="Home"
            className={`transition-colors ${
              pathname === '/' ? 'text-accent-amber' : 'text-text-muted hover:text-text-primary'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </Link>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? 'text-text-primary border-b border-accent-amber pb-0.5'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/experience"
            className="clip-corners bg-accent-amber px-4 py-1.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            {t('nav.hire')}
          </Link>
          <LanguageToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-5 bg-text-primary transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 bg-text-primary transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 bg-text-primary transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border bg-surface md:hidden">
          <div className="flex flex-col px-4 py-4 gap-4">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2 text-sm transition-colors ${
                pathname === '/' ? 'text-accent-amber font-medium' : 'text-text-muted hover:text-text-primary'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              Home
            </Link>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? 'text-text-primary font-medium'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/experience"
              onClick={() => setMenuOpen(false)}
              className="clip-corners inline-block bg-accent-amber px-4 py-2 text-sm font-semibold text-background text-center"
            >
              {t('nav.hire')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
