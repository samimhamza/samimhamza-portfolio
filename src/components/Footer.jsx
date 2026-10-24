import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({ href, target, rel, children }) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <nav aria-label="Footer Navigation">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/projects">Projects</NavLink>
                  <NavLink href="/skills">Skills</NavLink>
                  <NavLink href="/cv" target="_blank">CV</NavLink>
                  <NavLink
                    href="https://www.linkedin.com/in/ahmadsamimhamza/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </NavLink>
                  <NavLink
                    href="https://github.com/samimhamza"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </NavLink>
                  <NavLink href="mailto:samim.hamza7@gmail.com">Email</NavLink>
                </div>
              </nav>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Ahmad Samim Hamza. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
