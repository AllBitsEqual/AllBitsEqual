'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { LanguageToggle } from './LanguageToggle'
import Image from 'next/image'

export function Nav() {
  const { t } = useTranslation('common')
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/about', label: t('nav.about') },
    { href: '/experience', label: t('nav.experience') },
    { href: '/projects', label: t('nav.projects') },
    { href: '/augmented', label: t('nav.augmented') },
    { href: '/contact', label: t('nav.contact') },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Image src="/logo-header.png" alt="AllBitsEqual Logo" width={36} height={36} className="rounded-sm" />
          <span className="font-mono text-sm font-bold tracking-widest text-accent-amber mt-1">
            {t('nav.brand')}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
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
            href="/contact"
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
              href="/contact"
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
