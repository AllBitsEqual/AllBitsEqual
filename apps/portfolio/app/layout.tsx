import type { Metadata } from 'next'
import './globals.css'
import { I18nProvider } from '@/lib/I18nProvider'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: {
    template: '%s | AllBitsEqual',
    default: 'AllBitsEqual — Senior Front-End Architect',
  },
  description:
    'Portfolio of Konrad Abe — Senior Front-End Architect & Full-Stack Developer with 20+ years of experience in React and React Native.',
  metadataBase: new URL('https://allbitsequal.com'),
  openGraph: {
    type: 'website',
    siteName: 'AllBitsEqual',
    title: 'AllBitsEqual — Senior Front-End Architect',
    description:
      'Portfolio of Konrad Abe — Senior Front-End Architect & Full-Stack Developer with 20+ years of experience in React and React Native.',
    url: 'https://allbitsequal.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AllBitsEqual — Senior Front-End Architect',
    description:
      'Portfolio of Konrad Abe — Senior Front-End Architect & Full-Stack Developer with 20+ years of experience in React and React Native.',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
