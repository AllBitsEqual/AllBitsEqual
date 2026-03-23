import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Experience',
  description: '20+ years of front-end engineering — skills, work history, and downloadable CV.',
  openGraph: {
    title: 'Experience | AllBitsEqual',
    description: '20+ years of front-end engineering — skills, work history, and downloadable CV.',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
