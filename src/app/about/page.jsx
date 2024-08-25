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
import samimhamzaImage from '@/images/samimhamza.jpg'

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
    'I’m Ahmad Samim Hamza. A Futurestic Software Engineer',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={samimhamzaImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Ahmad Samim Hamza. A Futurestic Software Engineer
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I am an accomplished Software Engineer with five years of industry
              experience. I am driven by the pursuit of challenging
              opportunities where I can leverage my expertise to contribute to
              the success of both the organization and myself. With a passion
              for innovation and a dedication to excellence, I am eager to
              tackle new challenges and make meaningful contributions to
              projects that push boundaries and drive growth.
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
              Work Experience
            </h2>
            <ul className="mb-4 list-inside list-disc space-y-4 text-base text-zinc-600 dark:text-zinc-400">
              <li>
                <strong>Senior Software Engineer</strong> at Ramaki Group of
                Companies (05/2024 – Present): Responsible for database analysis
                and design, developing GraphQL APIs, and frontend design and
                development.
              </li>
              <li>
                <strong>Team Leader and Software Engineer</strong> at Peace
                Global Logistics (24/09/2022 – 30/04/2024): Managed a team,
                designed reusable frontend components, developed RESTful APIs,
                added real-time functionality to web applications, designed
                databases, and handled hosting and server maintenance.
              </li>
              <li>
                <strong>Full Stack Developer</strong> at Smart Friqi (26/07/2021
                – 20/09/2022): Designed reusable frontend components, developed
                RESTful APIs, added real-time functionality to web applications,
                designed databases, and handled hosting and server maintenance.
              </li>
              <li>
                <strong>Web Developer</strong> at TwistedBits ICT (01/05/2021 –
                15/07/2021): Built two management information systems using PHP,
                JavaScript, Laravel, and Vue.js.
              </li>
              <li>
                <strong>Web and Mobile Application Developer</strong> at
                Code9ine Tech Company (01/04/2019 – 20/04/2021): Worked on
                various web applications, mobile applications, and websites for
                clients.
              </li>
            </ul>

            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
              Education
            </h2>
            <ul className="mb-4 list-inside list-disc space-y-4 text-base text-zinc-600 dark:text-zinc-400">
              <li>
                <strong>Bachelor in Software Engineering</strong> from Kabul
                University (2017 – 2021)
              </li>
              <li>
                <strong>Secondary School</strong> at Sayed Ismail Balkhi (2004 –
                2016)
              </li>
            </ul>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
              Skills
            </h2>
            <p className="mb-4 text-base text-zinc-600 dark:text-zinc-400">
              <strong>Frontend Development:</strong> HTML, CSS, JavaScript,
              TailwindCSS, Bootstrap, jQuery, React, Next.js, Vue, Nuxt.js
            </p>
            <p className="mb-4 text-base text-zinc-600 dark:text-zinc-400">
              <strong>Backend Development:</strong> PHP, Laravel, Python,
              Django, NestJS, Java
            </p>
            <p className="mb-4 text-base text-zinc-600 dark:text-zinc-400">
              <strong>Database Development:</strong> MySQL, PostgreSQL, MongoDB,
              SQLite
            </p>
            <p className="mb-4 text-base text-zinc-600 dark:text-zinc-400">
              <strong>Mobile App Development:</strong> Dart, Flutter
            </p>
            <p className="mb-4 text-base text-zinc-600 dark:text-zinc-400">
              <strong>General Skills:</strong> Git, GitHub, Linux, Docker,
              Kubernetes, Firebase
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.linkedin.com/in/ahmad-samim-hamza-115463211"
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
          </ul>
        </div>
      </div>
    </Container>
  )
}
