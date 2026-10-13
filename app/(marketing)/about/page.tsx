import React from 'react'
import { ExternalLink } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/Card'
import { getDictionary, getLocale } from '@/lib/i18n/server'
import { cv as cvByLocale, type Project } from './cv'

export default async function AboutPage() {
  const locale = await getLocale()
  const t = await getDictionary()
  const cv = cvByLocale[locale]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto space-y-12">
        <header>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {cv.name}
          </h1>
          <p className="mt-1 text-xl text-sky-600 dark:text-sky-400">
            {cv.role}
          </p>
          <p className="mt-6 leading-relaxed text-gray-600 dark:text-gray-300">
            {cv.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-6 text-sm">
            <a
              href={cv.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-sky-600 dark:text-gray-300"
            >
              <ExternalLink size={16} />
              GitHub
            </a>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {cv.stats.map((stat) => (
              <li key={stat.label}>
                <Card className="h-full p-4">
                  <span className="block text-2xl font-bold text-sky-600 dark:text-sky-400">
                    {stat.value}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </span>
                </Card>
              </li>
            ))}
          </ul>
        </header>

        <Section title={t.about.experience}>
          <div className="space-y-6">
            {cv.experience.map((job) => (
              <Card key={`${job.company}-${job.role}`}>
                <CardHeader>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <CardTitle className="font-semibold">{job.role}</CardTitle>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {job.period}
                    </span>
                  </div>
                  <CardDescription>
                    {job.company} · {job.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-300">
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title={t.about.commercialProjects}
          description={t.about.commercialProjectsNote}
        >
          <div className="space-y-6">
            {cv.commercialProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </Section>

        <Section title={t.about.personalProjects}>
          <div className="space-y-6">
            {cv.personalProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
          <a
            href={cv.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-sky-600 dark:text-gray-300"
          >
            {t.about.moreProjects}
            <ExternalLink size={14} />
          </a>
        </Section>

        <Section title={t.about.skills}>
          <div className="space-y-4">
            {cv.skills.map((group) => (
              <div key={group.name}>
                <h3 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {group.name}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-sky-50 px-3 py-1 text-sm text-sky-700 dark:bg-sky-900/30 dark:text-sky-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title={t.about.education}>
          <div className="space-y-4">
            {cv.education.map((item) => (
              <div key={item.degree}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.school}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title={t.about.languages}>
          <ul className="space-y-1 text-gray-600 dark:text-gray-300">
            {cv.languages.map((language) => (
              <li key={language.name}>
                {language.name}
                {language.level && ` (${language.level})`}
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  )
}

function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        {description && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <CardTitle className="font-semibold">{project.name}</CardTitle>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {project.period}
          </span>
        </div>
        <p className="mt-2 leading-relaxed text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-300">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <li
              key={item}
              className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-700 dark:bg-dark-elevated dark:text-gray-300"
            >
              {item}
            </li>
          ))}
        </ul>
        {project.links && (
          <div className="flex flex-wrap gap-4 text-sm">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
              >
                {link.label}
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
