import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { SkillsStrip } from '@/components/SkillsStrip'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SkillsStrip />
        <FeaturedProjects />
      </main>
      <Footer />
    </>
  )
}
