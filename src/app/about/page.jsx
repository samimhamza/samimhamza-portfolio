import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  FacebookIcon,
} from '@/components/SocialIcons'
import samimhamzaImage from '@/images/ahmadsamimhamza.jpg'
import { Button } from '@/components/Button'
import { ArrowDownIcon } from '../page'

function SocialLink({ className, href, target, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target={target}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
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
    'I’m Ahmad Samim Hamza, a Software Engineer and Backend Developer.',
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
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Samim Hamza. A Software Engineer and Backend Developer.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Experienced Software Engineer with more than 4 years of
              professional experience building enterprise applications, ERP
              systems, MIS systems, and e-commerce solutions. I enjoy solving
              engineering challenges, designing robust system architectures, and
              writing clean, maintainable code. My work spans backend,
              full-stack, and database design, and I’m currently expanding into
              AI and machine learning through my Master&#39;s studies.
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
              Work Experience
            </h2>
            <ul className="mb-4 list-inside list-disc space-y-4 text-base text-zinc-600 dark:text-zinc-400">
              <li>
                <strong>Senior Software Engineer</strong> at Ramaki Group of
                Companies (05/2024 – 07/2025): Guided and coordinated a team of
                8 engineers during the development of an e-commerce platform.
                Responsible for database analysis and design, developing REST
                and GraphQL APIs, implementing backend logic, and writing unit,
                integration, and feature tests.
              </li>
              <li>
                <strong>Software Engineer</strong> at Peace Global Logistics
                (09/2022 – 04/2024): Developed logistics and supply-chain
                modules using NestJS, React, and Next.js; designed PostgreSQL
                databases and optimized complex queries; implemented reusable UI
                components in React + Tailwind; and collaborated with
                cross-functional teams to deliver ERP features for 200+ daily
                users.
              </li>
              <li>
                <strong>Full Stack Developer</strong> at Smart Friqi (26/07/2021
                – 20/09/2022): Built ERP modules using Laravel, Nuxt.js, and
                PostgreSQL; added real-time functionality with WebSockets; and
                developed dashboards and admin interfaces for business
                operations.
              </li>
              <li>
                <strong>Web Developer</strong> at TwistedBits ICT (01/05/2021 –
                15/07/2021): Built two management information systems using PHP,
                JavaScript, Laravel, and Vue.js, delivering projects under tight
                deadlines with a small team.
              </li>
            </ul>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
              Education
            </h2>
            <ul className="mb-4 list-inside list-disc space-y-4 text-base text-zinc-600 dark:text-zinc-400">
              <li>
                <strong>Master’s Degree in Artificial Intelligence</strong> at
                the University of Jyväskylä (08/2025 – Present)
              </li>
              <li>
                <strong>
                  Bachelor of Computer Science (Software Engineering)
                </strong>{' '}
                from Kabul University (2017 – 2021)
              </li>
            </ul>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
              Top Skills
            </h2>
            <ul className="mb-4 list-inside list-disc text-base text-zinc-600 dark:text-zinc-400">
              <li>
                <strong>Laravel</strong>
              </li>
              <li>
                <strong>Spring Boot</strong>
              </li>
              <li>
                <strong>PostgreSQL</strong>
              </li>
              <li>
                <strong>React.js</strong>
              </li>
              <li>
                <strong>Next.js</strong>
              </li>
              <li>
                <strong>Livewire</strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.linkedin.com/in/ahmadsamimhamza"
              icon={LinkedInIcon}
              target="_blank"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://www.facebook.com/ahmadsamim.hamzaei/"
              target="_blank"
              className="mt-4"
              icon={FacebookIcon}
            >
              Follow on Facebook
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/samim.hz/"
              target="_blank"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/samimhamza"
              icon={GitHubIcon}
              target="_blank"
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://x.com/SamimHamza1"
              icon={XIcon}
              target="_blank"
              className="mt-4"
            >
              Follow on X
            </SocialLink>
            <SocialLink
              href="mailto:samim.hamza7@gmail.com"
              icon={MailIcon}
              target="_blank"
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              samim.hamza7@gmail.com
            </SocialLink>
            <Button
              href="/cv"
              target="_blank"
              variant="secondary"
              className="group mt-6 w-full"
            >
              Download CV
              <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
          </ul>
        </div>
      </div>
    </Container>
  )
}
