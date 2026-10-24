'use client'

import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { Card } from '@/components/Card'

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 8l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI & GenAI' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'backend', label: 'Backend & Business Systems' },
]

export function ProjectList({ projects }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [expandedCaseStudies, setExpandedCaseStudies] = useState({})

  const toggleCaseStudy = (id) => {
    setExpandedCaseStudies((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) =>
          project.categories?.includes(activeCategory),
        )

  return (
    <div className="space-y-12">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category.id
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(category.id)}
              className={clsx(
                'rounded-full px-4 py-1.5 text-xs font-medium transition',
                isActive
                  ? 'bg-zinc-800 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800/80 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200',
              )}
            >
              {category.label}
            </button>
          )
        })}
      </div>

      {/* Projects Grid */}
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((project) => {
          const isExpanded = Boolean(expandedCaseStudies[project.id])
          const hasCaseStudy = Boolean(project.caseStudy)

          return (
            <Card
              as="li"
              key={project.id}
              id={project.id}
              className="scroll-mt-24 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-800/80 dark:bg-zinc-900/30 flex flex-col"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                {project.name.includes('Konecranes') ? (
                  <Image
                    src={project.logo}
                    alt=""
                    className="h-7 w-20 object-contain"
                    unoptimized
                  />
                ) : (
                  <Image
                    src={project.logo}
                    alt=""
                    className="h-8 w-8 object-contain"
                    unoptimized
                  />
                )}
              </div>

              <h2 className="mt-5 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {project.link ? (
                  <Card.Link href={project.link.href} target="_blank">
                    {project.name}
                  </Card.Link>
                ) : (
                  project.name
                )}
              </h2>

              <div className="relative z-10 mt-1 flex flex-wrap items-center gap-x-2 text-xs text-zinc-500 dark:text-zinc-400">
                <span className="font-medium text-teal-600 dark:text-teal-400">
                  {project.context}
                </span>
                <span aria-hidden="true">·</span>
                <time>{project.date}</time>
              </div>

              {project.subtitle && (
                <p className="relative z-10 mt-1 text-xs font-medium text-teal-600 dark:text-teal-400">
                  {project.subtitle}
                </p>
              )}

              <Card.Description>{project.description}</Card.Description>

              {project.tags && project.tags.length > 0 && (
                <div className="relative z-10 mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-700 ring-1 ring-inset ring-zinc-500/10 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Case Study Expandable Section */}
              {hasCaseStudy && (
                <div className="relative z-20 mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  <button
                    type="button"
                    onClick={() => toggleCaseStudy(project.id)}
                    aria-expanded={isExpanded}
                    className="inline-flex items-center text-xs font-medium text-teal-600 transition hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    <span>{isExpanded ? 'Hide Case Study' : 'Case Study Details'}</span>
                    <ChevronDownIcon
                      className={clsx(
                        'ml-1.5 h-4 w-4 transition-transform duration-200',
                        isExpanded && 'rotate-180',
                      )}
                    />
                  </button>

                  {isExpanded && (
                    <div className="mt-4 space-y-3.5 text-xs text-zinc-600 dark:text-zinc-400 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                      <div>
                        <strong className="block font-semibold text-zinc-900 dark:text-zinc-200">
                          Problem &amp; Users:
                        </strong>
                        <p className="mt-0.5 leading-relaxed">{project.caseStudy.problem}</p>
                      </div>
                      <div>
                        <strong className="block font-semibold text-zinc-900 dark:text-zinc-200">
                          Role &amp; Responsibilities:
                        </strong>
                        <p className="mt-0.5 leading-relaxed">{project.caseStudy.role}</p>
                      </div>
                      <div>
                        <strong className="block font-semibold text-zinc-900 dark:text-zinc-200">
                          Architecture &amp; Components:
                        </strong>
                        <p className="mt-0.5 leading-relaxed">{project.caseStudy.architecture}</p>
                      </div>
                      <div>
                        <strong className="block font-semibold text-zinc-900 dark:text-zinc-200">
                          Key Decisions &amp; Trade-offs:
                        </strong>
                        <p className="mt-0.5 leading-relaxed">{project.caseStudy.decisions}</p>
                      </div>
                      <div>
                        <strong className="block font-semibold text-zinc-900 dark:text-zinc-200">
                          Evaluation, Testing &amp; Deployment:
                        </strong>
                        <p className="mt-0.5 leading-relaxed">{project.caseStudy.evaluation}</p>
                      </div>
                      <div>
                        <strong className="block font-semibold text-zinc-900 dark:text-zinc-200">
                          Outcome:
                        </strong>
                        <p className="mt-0.5 leading-relaxed">{project.caseStudy.outcome}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {project.link && (
                <div className="relative z-10 mt-auto pt-4">
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-medium text-zinc-500 transition hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
                  >
                    <LinkIcon className="h-4 w-4 flex-none" />
                    <span className="ml-1.5">{project.link.label}</span>
                  </a>
                </div>
              )}
            </Card>
          )
        })}
      </ul>
    </div>
  )
}

