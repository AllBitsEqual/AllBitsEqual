import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Two decades of craft across finance, e-commerce, automotive, health, and more.',
  openGraph: {
    title: 'Projects | AllBitsEqual',
    description: 'Two decades of craft across finance, e-commerce, automotive, health, and more.',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
