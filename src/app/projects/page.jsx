import { SimpleLayout } from '@/components/SimpleLayout'
import { ProjectList } from '@/components/ProjectList'
import { projects } from '@/data/portfolio'

export { projects }

export const metadata = {
  title: 'Projects',
  description:
    'Projects built by Ahmad Samim Hamza, spanning applied AI, search systems, internal business tools, and web applications.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects"
      intro="A collection of projects I've built, including internal knowledge tools, open-source libraries, and full-stack web applications."
    >
      <ProjectList projects={projects} />
    </SimpleLayout>
  )
}
