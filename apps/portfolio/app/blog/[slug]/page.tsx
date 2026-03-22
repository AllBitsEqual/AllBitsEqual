export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 md:px-8">
      <p className="font-mono text-xs text-text-muted">Post: {params.slug}</p>
      <p className="mt-4 text-text-muted">Coming soon.</p>
    </main>
  )
}
