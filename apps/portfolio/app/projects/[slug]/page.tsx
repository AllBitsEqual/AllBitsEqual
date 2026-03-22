export default function ProjectDetail({ params }: { params: { slug: string } }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-20 md:px-8">
      <p className="font-mono text-xs text-text-muted">Project: {params.slug}</p>
      <p className="mt-4 text-text-muted">Coming soon.</p>
    </main>
  )
}
