'use client'

import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="relative overflow-hidden grid-bg">
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #f5a623 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center md:px-8">
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-accent-amber">// 404</p>
          <h1 className="mb-4 text-6xl font-bold text-text-primary md:text-8xl">404</h1>
          <p className="mb-2 text-xl font-bold text-text-primary">Page not found</p>
          <p className="mb-10 text-text-muted">
            This bit doesn't exist — or it did and now it doesn't.
          </p>
          <Link
            href="/"
            className="clip-corners bg-accent-amber px-6 py-3 font-semibold text-background transition-opacity hover:opacity-90"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
