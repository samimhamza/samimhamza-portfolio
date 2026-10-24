import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { skillCategories } from '@/data/portfolio'

export const metadata = {
  title: 'Skills',
  description:
    'Core technical capabilities across backend engineering, applied AI, frontend delivery, data systems, and cloud platforms.',
}

function ArrowUpRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 11L11 5M11 5H6M11 5V10"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Skills() {
  return (
    <SimpleLayout
      title="Skills & Technical Capabilities"
      intro="Organized by engineering capability — combining applied AI and agentic systems with disciplined AI-assisted development (Claude Code, Cursor) and robust backend and full-stack foundations."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="flex flex-col rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 dark:bg-zinc-900/20"
          >
            <h2 className="flex items-center text-base font-semibold text-zinc-900 dark:text-zinc-100">
              <span className="mr-3 h-2 w-2 rounded-full bg-teal-500" />
              {category.title}
            </h2>

            {category.note && (
              <p className="mt-2 text-xs italic text-zinc-500 dark:text-zinc-400">
                {category.note}
              </p>
            )}

            <ul className="mt-4 space-y-2.5">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start text-sm text-zinc-600 dark:text-zinc-400"
                >
                  <span className="mr-2.5 mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>

            {category.relatedProjects && category.relatedProjects.length > 0 && (
              <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800/80">
                <span className="block text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Demonstrated in:
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {category.relatedProjects.map((proj) => (
                    <Link
                      key={proj.name}
                      href={proj.href}
                      className="inline-flex items-center rounded-md bg-zinc-50 px-2 py-1 text-xs font-medium text-teal-600 ring-1 ring-inset ring-zinc-500/10 transition hover:bg-teal-50 dark:bg-zinc-800/60 dark:text-teal-400 dark:ring-zinc-700/50 dark:hover:bg-zinc-800"
                    >
                      <span>{proj.name}</span>
                      <ArrowUpRightIcon className="ml-1 h-3 w-3 stroke-current" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </SimpleLayout>
  )
}
