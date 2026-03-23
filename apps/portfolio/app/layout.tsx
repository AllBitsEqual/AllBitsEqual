import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/lib/I18nProvider'
import type { ReactNode } from 'react'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | AllBitsEqual',
    default: 'AllBitsEqual — Senior Front-End Architect',
  },
  description:
    'Portfolio of Konrad Abe — Senior Front-End Architect with 20+ years on the web and deep expertise in React and React Native.',
  metadataBase: new URL('https://allbitsequal.com'),
  openGraph: {
    type: 'website',
    siteName: 'AllBitsEqual',
    title: 'AllBitsEqual — Senior Front-End Architect',
    description:
      'Portfolio of Konrad Abe — Senior Front-End Architect with 20+ years on the web and deep expertise in React and React Native.',
    url: 'https://allbitsequal.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AllBitsEqual — Senior Front-End Architect',
    description:
      'Portfolio of Konrad Abe — Senior Front-End Architect with 20+ years on the web and deep expertise in React and React Native.',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
