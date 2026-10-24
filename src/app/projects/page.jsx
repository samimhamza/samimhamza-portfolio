import { SimpleLayout } from '@/components/SimpleLayout'
import { ProjectList } from '@/components/ProjectList'
import { projects } from '@/data/portfolio'

export { projects }

export const metadata = {
  title: 'Projects',
  description:
    'Applied AI, enterprise RAG, backend services, and full-stack platforms built by Ahmad Samim Hamza.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects that I have built and contributed to."
      intro="Applied AI, enterprise RAG, backend services, and full-stack business systems. From internal enterprise knowledge assistants and multi-agent orchestration to e-commerce and logistics platforms."
    >
      <ProjectList projects={projects} />
    </SimpleLayout>
  )
}
