import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import unitedLogo from '@/images/logos/united_logo.png'
import logoGPF from '@/images/logos/gpf_logo.png'
import logPGL from '@/images/logos/pgl_logo.png'
import logoTeebAlhoor from '@/images/logos/teebalhoor.svg'
import logoTglSupplies from '@/images/logos/tglsupplies.png'
import logoPGT from '@/images/logos/pgt.png'

export const projects = [
  {
    name: 'United Used Cars Website and MIS',
    description:
      'Technologies that used in this projects are Laravel, Next.js, Material UI, and MySQL.',
    link: {
      href: 'https://unitedtradingcars.com/',
      label: 'unitedtradingcars.com',
    },
    logo: unitedLogo,
  },
  {
    name: 'PGL ERP System',
    description: 'ERP System for Peace Global Logistics.',
    link: { href: 'https://pglsystem.com/', label: 'pglsystem.com' },
    logo: logPGL,
  },
  {
    name: 'TGL Supplies System',
    description: `High performance website and MIS. This Project was built with technologies such as Node.js and Express.js for the backend,
       React.js for the frontend, and PostgreSQL for the database.`,
    link: {
      href: 'https://tglsupplies.com/',
      label: 'tglsupplies.com',
    },
    logo: logoTglSupplies,
  },
  {
    name: 'Charity Management System',
    description:
      'I built this Management System For a charity based on Afghanistan.',
    link: {
      href: 'https://github.com/samimhamza/gpf_frontend_mantine',
      label: 'github.com',
    },
    logo: logoGPF,
  },
  {
    name: 'TeebAlhoor ERP System',
    description: 'Complex ERP system for a TeebAlhoor Company base on UAE.',
    link: {
      href: 'https://github.com/samimhamza/teebalhoorfrontend',
      label: 'github.com',
    },
    logo: logoTeebAlhoor,
  },
  {
    name: 'Peace Global Tech Website',
    description: 'Our Department Website on Peace Global Logistics Company.',
    link: {
      href: 'https://peaceglobaltech.com/',
      label: 'peaceglobaltech.com',
    },
    logo: logoPGT,
  },
]

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

export const metadata = {
  title: 'Projects',
  description: 'Project That I have built and contributed.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Project That I have built and contributed ."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              {project.link.label === 'unitedtradingcars.com' ? (
                <Image
                  src={project.logo}
                  alt=""
                  className="h-5 w-10"
                  unoptimized
                />
              ) : project.link.label === 'pglsystem.com' ? (
                <Image
                  src={project.logo}
                  alt=""
                  className="h-4 w-10"
                  unoptimized
                />
              ) : project.link.label === 'pglsystem.com' ? (
                <Image
                  src={project.logo}
                  alt=""
                  className="h-4 w-10"
                  unoptimized
                />
              ) : (
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              )}
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
