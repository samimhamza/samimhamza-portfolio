import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Skills',
  description:
    'AI/ML, agentic architectures, and full-stack engineering skills for building production AI systems and scalable enterprise applications.',
}

export default function Skills() {
  const skillCategories = [
    {
      title: 'AI, Machine Learning & Agentic Systems',
      skills: [
        'LangGraph & LangChain',
        'AWS Bedrock (Agents & AgentCore)',
        'Multi-Agent Systems & Supervisor Orchestration',
        'RAG Architectures & Vector Search (S3 Vector Store, ChromaDB)',
        'Model Evaluation, Guardrails & LLMOps',
        'Multi-Objective Optimization',
        'PyTorch, scikit-learn, NumPy & Pandas',
        'Traditional ML & Computer Vision Fundamentals',
      ],
    },
    {
      title: 'AI-Assisted Engineering',
      skills: [
        'Claude Code',
        'Cursor',
        'GitHub Copilot',
        'Prompt & Spec Engineering',
      ],
    },
    {
      title: 'Backend & Data Engineering',
      skills: [
        'Python (FastAPI, AsyncIO, Django)',
        'TypeScript & JavaScript (NestJS, Node.js, Express.js)',
        'PHP (Laravel)',
        'REST API Design & Microservices',
        'PostgreSQL (Schema Design, Query Optimization, pgvector)',
        'MySQL, SQLite, Redis',
      ],
    },
    {
      title: 'Cloud, Platforms & DevOps',
      skills: [
        'AWS (Bedrock, ECS, Amplify, RDS, S3, Lambda, CloudWatch, ECR)',
        'Azure (AI Foundry, AI Search)',
        'Docker & Kubernetes',
        'CI/CD Pipelines & GitHub Actions',
        'Linux & Shell Scripting',
      ],
    },
    {
      title: 'Frontend Engineering',
      skills: [
        'Next.js & React',
        'TypeScript',
        'Tailwind CSS & Material UI',
        'Vue.js & Nuxt.js',
      ],
    },
  ]

  return (
    <SimpleLayout
      title="My Skills"
      intro="From enterprise RAG pipelines and multi-agent orchestration to full-stack platforms — combining applied AI and agentic systems with disciplined AI-assisted engineering (Claude Code, Cursor) and robust backend foundations."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
          >
            <h2 className="flex items-center text-base font-semibold text-zinc-900 dark:text-zinc-100">
              <span className="mr-3 h-2 w-2 rounded-full bg-teal-500" />
              {category.title}
            </h2>
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
          </div>
        ))}
      </div>
    </SimpleLayout>
  )
}
