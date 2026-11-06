import { SimpleLayout } from '@/components/SimpleLayout'
import { ProjectList } from '@/components/ProjectList'
import { projects } from '@/data/portfolio'

export { projects }

export const metadata = {
  title: 'Projects',
  description:
    'Applied AI, RAG & multi-agent systems, backend services, and full-stack web applications built by Ahmad Samim Hamza.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects"
      intro="A collection of projects I've built, including enterprise RAG and multi-agent systems, open-source retrieval libraries, and full-stack web applications."
    >
      <ProjectList projects={projects} />
    </SimpleLayout>
  )
}
