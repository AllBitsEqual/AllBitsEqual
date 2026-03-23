'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

interface ProjectLinks {
  appStore?: string
  googlePlay?: string
  web?: string
}

interface Project {
  id: string
  name: string
  tags: string[]
  description: string
  links: ProjectLinks
  accent: string
  visible: boolean
}

export function FeaturedProjects() {
  const { t } = useTranslation('common')
  const allProjects = t('featuredProjects.projects', { returnObjects: true }) as Project[]
  const projects = allProjects.filter((p) => p.visible)

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Section header */}
        <div className="mb-12">
          <p className="font-mono text-xs tracking-[0.2em] text-accent-amber">
            {t('featuredProjects.label')}
          </p>
          <h2 className="mt-1 text-2xl font-bold text-text-primary md:text-3xl">
            {t('featuredProjects.tagline')}
          </h2>
        </div>

        {/* Projects grid */}
        <div className={`grid gap-6 ${
          projects.length === 1 ? 'md:grid-cols-1 max-w-xl' :
          projects.length === 2 ? 'md:grid-cols-2' :
          'md:grid-cols-3'
        }`}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="clip-corners relative border border-border bg-surface p-6 transition-colors hover:border-opacity-80"
              style={{ '--accent': project.accent } as React.CSSProperties}
            >
              {/* Accent top border */}
              <div
                className="absolute left-0 top-0 h-0.5 w-full"
                style={{ backgroundColor: project.accent }}
              />

              {/* ID */}
              <span className="font-mono text-xs text-text-faint">{project.id}</span>

              {/* Name */}
              <h3
                className="mt-2 text-lg font-bold"
                style={{ color: project.accent }}
              >
                {project.name}
              </h3>

              {/* Tags */}
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-text-faint border border-border px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                {project.description}
              </p>

              {/* Links */}
              <div className="mt-4 flex flex-wrap gap-3">
                {project.links.appStore && (
                  <a
                    href={project.links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-text-muted hover:text-text-primary transition-colors"
                  >
                    App Store ↗
                  </a>
                )}
                {project.links.googlePlay && (
                  <a
                    href={project.links.googlePlay}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-text-muted hover:text-text-primary transition-colors"
                  >
                    Google Play ↗
                  </a>
                )}
                {project.links.web && (
                  <a
                    href={project.links.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-text-muted hover:text-text-primary transition-colors"
                  >
                    Web ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-right">
          <Link
            href="/projects"
            className="font-mono text-sm text-accent-amber hover:opacity-80 transition-opacity"
          >
            {t('featuredProjects.cta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
