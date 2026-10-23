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
    'I’m Ahmad Samim Hamza, an AI & Senior Software Engineer turning complex problems into production systems.',
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
            Samim Hamza. AI &amp; Senior Software Engineer turning complex problems into production systems.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              AI &amp; Senior Software Engineer and Master&apos;s student in Artificial Intelligence at the University of Jyväskylä, with 5+ years of experience delivering production systems across AI, full-stack, and distributed architectures. I turn complex, ambiguous business problems into reliable software and intelligent systems.
            </p>

            <p>
              At Konecranes, I designed, built, evaluated, and deployed enterprise RAG and agentic applications on AWS Bedrock (Agents, AgentCore), LangChain, and LangGraph. I took the system from exploration over 100+ heterogeneous enterprise documents (XML, PDF, XLSX) to a unified Next.js + FastAPI application. I implemented a PostgreSQL feedback loop to evaluate retrieval quality and latency across multiple RAG backends, deployed on AWS Amplify, ECS, and RDS, and monitored health with CloudWatch before internal handover. I build natively with Claude Code and Cursor to accelerate development while maintaining strict testing and code quality.
            </p>

            <p>
              Prior to specializing in AI systems, I spent several years delivering mission-critical ERP, logistics, and e-commerce platforms. As Senior Software Engineer at Ramaki Group, I led an 8-engineer team delivering{' '}
              <a
                href="https://dara.af/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline decoration-teal-600/30 underline-offset-2 hover:decoration-teal-600 dark:text-teal-400 dark:decoration-teal-400/30 dark:hover:decoration-teal-400"
              >
                Dara.af
              </a>
              , handling high-volume transactions and relational database architecture. At Peace Global Logistics, I translated logistics operations into resilient NestJS/PostgreSQL systems serving 200+ daily business users.
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
              Work Experience
            </h2>
            <ul className="mb-4 list-inside list-disc space-y-4 text-base text-zinc-600 dark:text-zinc-400">
              <li>
                <strong>
                  Software Development Specialist (AI/ML) – Fixed-Term Summer Contract
                </strong>{' '}
                at Konecranes (05/2026 – 08/2026): Built multiple production-ready RAG applications on AWS Bedrock using Agents and AgentCore, processing 100+ internal XML, PDF, and XLSX documents indexed in an S3-based vector store. Implemented RAG variants with AWS Bedrock, Bedrock AgentCore, LangChain, and LangGraph in a unified Next.js + FastAPI application with a shared conversational UI — developed primarily with Claude Code and Cursor. Architected a multi-agent system with a supervisor agent orchestrating collaborator agents. Used PostgreSQL for user accounts, session data, and feedback storage to evaluate three RAG variants. Deployed on AWS Amplify, ECS, and RDS; established CloudWatch monitoring and error tracking to resolve retrieval accuracy and latency bottlenecks; collaborated with domain stakeholders, documented the system, and handed it over to the internal team.
              </li>
              <li>
                <strong>Senior Software Engineer</strong> at Ramaki Group of
                Companies (05/2024 – 07/2025): Led and coordinated a team of
                eight engineers on{' '}
                <a
                  href="https://dara.af/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 underline decoration-teal-600/30 underline-offset-2 hover:decoration-teal-600 dark:text-teal-400 dark:decoration-teal-400/30 dark:hover:decoration-teal-400"
                >
                  Dara.af
                </a>
                , an e-commerce platform supporting hundreds of product listings
                and daily customer orders. Designed and optimized PostgreSQL
                schemas, built RESTful APIs, wrote unit, integration, and
                feature tests, and conducted code reviews while mentoring junior
                developers — using Laravel, React, and Next.js.
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
                <strong>Instructor (Python &amp; Machine Learning)</strong> at
                Kabul University (04/2022 – 10/2022): Taught Python programming
                and Machine Learning fundamentals to freshman and sophomore
                students, covering data analysis, model training and evaluation,
                and practical ML tooling.
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
                <ul className="mt-1 list-inside list-disc pl-5 text-sm text-zinc-500 dark:text-zinc-400">
                  <li>
                    <em>Master&apos;s Thesis (In Progress):</em> Exploring
                    LLM-assisted validation for multi-objective optimization in
                    Finnish forest planning.
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  Bachelor of Computer Science (Software Engineering)
                </strong>{' '}
                from Kabul University (2017 – 2021)
              </li>
            </ul>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
              Languages
            </h2>
            <ul className="mb-4 list-inside list-disc text-base text-zinc-600 dark:text-zinc-400">
              <li>
                <strong>English</strong>
              </li>
              <li>
                <strong>Persian</strong>
              </li>
              <li>
                <strong>Finnish</strong>
              </li>
            </ul>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
              Top Skills
            </h2>
            <ul className="mb-4 list-inside list-disc text-base text-zinc-600 dark:text-zinc-400">
              <li>
                <strong>LangGraph &amp; LangChain, Multi-Agent Systems &amp; RAG Architectures</strong>
              </li>
              <li>
                <strong>AWS Bedrock (Agents &amp; AgentCore)</strong>
              </li>
              <li>
                <strong>Claude Code &amp; Cursor (AI-Assisted Engineering)</strong>
              </li>
              <li>
                <strong>Python, FastAPI &amp; TypeScript/NestJS</strong>
              </li>
              <li>
                <strong>Next.js, React &amp; PostgreSQL</strong>
              </li>
              <li>
                <strong>Docker, Kubernetes &amp; AWS Cloud</strong>
              </li>
              <li>
                <strong>PyTorch, scikit-learn &amp; Multi-Objective Optimization</strong>
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
