import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'About',
  description: 'The person behind AllBitsEqual — and why the name means what it means.',
  openGraph: {
    title: 'About | AllBitsEqual',
    description: 'The person behind AllBitsEqual — and why the name means what it means.',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
