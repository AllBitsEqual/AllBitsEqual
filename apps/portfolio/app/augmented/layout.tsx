import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Augmented',
  description: 'How I work with AI — not as a shortcut, but as a force multiplier for senior engineering.',
  openGraph: {
    title: 'Augmented | AllBitsEqual',
    description: 'How I work with AI — not as a shortcut, but as a force multiplier for senior engineering.',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
