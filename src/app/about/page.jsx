import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import { ArrowDownIcon } from '@/app/page'
import {
  education,
  experience,
  languages,
  personalInfo,
  skillCategories,
} from '@/data/portfolio'
import samimhamzaImage from '@/images/ahmadsamimhamza.jpg'

function SocialLink({ className, href, target, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target={target}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500 dark:fill-zinc-400 dark:group-hover:fill-teal-400" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'Ahmad Samim Hamza — AI Engineer & Senior Software Engineer building intelligent applications and reliable software systems.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={samimhamzaImage}
              alt="Portrait of Ahmad Samim Hamza"
              sizes="(min-width: 1024px) 32rem, 20rem"
              priority
              className="aspect-square rounded-2xl bg-zinc-100 object-cover shadow-lg dark:bg-zinc-800"
            />
          </div>
        </div>

        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {personalInfo.aboutHeading}
          </h1>

          <div className="mt-6 space-y-6 text-base text-zinc-600 dark:text-zinc-400">
            {personalInfo.aboutIntroParagraphs.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="my-8 rounded-xl border border-zinc-100 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                AI-Assisted Development
              </h2>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {personalInfo.aiAssistedStatement}
              </p>
            </div>

            <h2 className="pt-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Work Experience
            </h2>

            <div className="space-y-8">
              {experience.map((job) => (
                <div
                  key={`${job.company}-${job.period}`}
                  className="rounded-xl border border-zinc-100 p-5 dark:border-zinc-800/80 dark:bg-zinc-900/20"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                      {job.role}
                    </h3>
                    <span className="text-xs font-medium text-teal-600 dark:text-teal-400">
                      {job.period}
                    </span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-2 text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">
                      {job.company}
                    </span>
                    {job.location && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{job.location}</span>
                      </>
                    )}
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {job.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="pt-8 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((item) => (
                <div
                  key={item.degree}
                  className="rounded-xl border border-zinc-100 p-5 dark:border-zinc-800/80"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                      {item.degree}
                    </h3>
                    <span className="text-xs font-medium text-teal-600 dark:text-teal-400">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 flex flex-wrap items-center gap-x-2 text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">
                      {item.institution}
                    </span>
                    {item.location && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{item.location}</span>
                      </>
                    )}
                    {item.status && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="font-medium text-teal-600 dark:text-teal-400">
                          {item.status}
                        </span>
                      </>
                    )}
                  </p>
                  {item.thesis && (
                    <p className="mt-2 text-sm italic text-zinc-600 dark:text-zinc-300">
                      <span className="font-medium not-italic text-zinc-700 dark:text-zinc-200">
                        Thesis (In progress):{' '}
                      </span>
                      {item.thesis}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <h2 className="pt-8 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Languages
            </h2>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="rounded-lg border border-zinc-100 bg-zinc-50/50 p-3 text-sm dark:border-zinc-800 dark:bg-zinc-900/30"
                >
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {lang.name}
                  </span>
                  <span className="ml-1 text-xs text-zinc-500 dark:text-zinc-400">
                    ({lang.level})
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="pt-8 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Skills Overview
            </h2>
            <div className="space-y-3">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="text-sm">
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                    {cat.title}:{' '}
                  </span>
                  <span className="text-zinc-600 dark:text-zinc-400">
                    {cat.skills.join(', ')}
                  </span>
                </div>
              ))}
              <div className="pt-2">
                <Link
                  href="/skills"
                  className="text-sm font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
                >
                  View full skills &amp; capability breakdown &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pl-20">
          <ul role="list" className="space-y-4">
            <SocialLink
              href={personalInfo.links.linkedin}
              icon={LinkedInIcon}
              target="_blank"
            >
              LinkedIn (ahmadsamimhamza)
            </SocialLink>
            <SocialLink
              href={personalInfo.links.github}
              icon={GitHubIcon}
              target="_blank"
            >
              GitHub (@samimhamza)
            </SocialLink>
            <SocialLink
              href={personalInfo.links.email}
              icon={MailIcon}
              target="_blank"
            >
              samim.hamza7@gmail.com
            </SocialLink>
            <li className="pt-2">
              <Button
                href="/cv"
                target="_blank"
                variant="secondary"
                className="group w-full"
              >
                Download CV
                <ArrowDownIcon className="ml-2 h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
              </Button>
            </li>
            <li className="border-t border-zinc-100 pt-6 dark:border-zinc-700/40">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Other Profiles
              </p>
            </li>
            <SocialLink
              href={personalInfo.links.x}
              icon={XIcon}
              target="_blank"
            >
              X (@SamimHamza1)
            </SocialLink>
            <SocialLink
              href={personalInfo.links.facebook}
              icon={FacebookIcon}
              target="_blank"
            >
              Facebook
            </SocialLink>
            <SocialLink
              href={personalInfo.links.instagram}
              icon={InstagramIcon}
              target="_blank"
            >
              Instagram
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
