import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { SkillsStrip } from '@/components/SkillsStrip'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { BlogTeaser } from '@/components/BlogTeaser'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SkillsStrip />
        <FeaturedProjects />
        <BlogTeaser />
      </main>
      <Footer />
    </>
  )
}
