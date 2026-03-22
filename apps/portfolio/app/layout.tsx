import type { Metadata } from 'next'
import './globals.css'
import { I18nProvider } from '@/lib/I18nProvider'

export const metadata: Metadata = {
  title: 'AllBitsEqual — Senior Front-End Architect',
  description:
    'Portfolio of a Senior Front-End Architect & Full-Stack Developer with 20+ years of experience in React and React Native.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
