import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Skills',
  description:
    'AI/ML, full-stack, and software engineering skills for building production AI systems and enterprise applications.',
}

export default function Skills() {
  const skills = {
    ai_ml: [
      'RAG Architectures & Vector Search',
      'LangChain / LangGraph',
      'AWS Bedrock (Agents, AgentCore, Knowledge Bases, MCP/tools)',
      'ChromaDB',
      'Prompt Engineering',
      'Multi-Agent Orchestration',
      'Conversational UI Design',
      'PyTorch',
      'TensorFlow / Keras',
      'scikit-learn',
      'NumPy, Pandas & Matplotlib',
      'Feature Engineering & Hyperparameter Tuning',
    ],
    ai_coding: ['Claude Code', 'GitHub Copilot', 'Cursor'],
    backend: [
      'Python (FastAPI, Django)',
      'Node.js / TypeScript (NestJS, Express)',
      'PHP (Laravel)',
      'REST APIs, Auth & RBAC',
    ],
    frontend: ['React', 'Next.js', 'Vue.js', 'Nuxt.js', 'Livewire', 'Alpine.js', 'TailwindCSS'],
    database: ['PostgreSQL', 'MySQL', 'SQLite'],
    cloud: [
      'AWS (Bedrock, Amplify, ECS, ECR, RDS, S3, Lambda, API Gateway)',
      'Azure (Foundational / AI Services)',
    ],
    tools: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'Linux', 'CI/CD', 'Logging & Monitoring'],
  }

  return (
    <SimpleLayout
      title="My Skills"
      intro="From enterprise RAG pipelines and multi-agent orchestration to full-stack ERP and e-commerce platforms — the skills behind production AI systems and the software that ships them."
    >
      <div className="space-y-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
              AI &amp; Machine Learning
            </h2>
            <ul className="list-inside list-disc">
              {skills.ai_ml.map(skill => (
                <li key={skill} className="text-zinc-600 dark:text-zinc-400">
                  {skill}
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
              AI-Assisted Coding
            </h2>
            <ul className="list-inside list-disc">
              {skills.ai_coding.map((skill) => (
                <li key={skill} className="text-zinc-600 dark:text-zinc-400">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
              Backend Development Skills
            </h2>
            <ul className="list-inside list-disc">
              {skills.backend.map((skill) => (
                <li key={skill} className="text-zinc-600 dark:text-zinc-400">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
              Frontend Development Skills
            </h2>
            <ul className="list-inside list-disc">
              {skills.frontend.map((skill) => (
                <li key={skill} className="text-zinc-600 dark:text-zinc-400">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
              Cloud
            </h2>
            <ul className="list-inside list-disc">
              {skills.cloud.map((skill) => (
                <li key={skill} className="text-zinc-600 dark:text-zinc-400">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
              Database Development Skills
            </h2>
            <ul className="list-inside list-disc">
              {skills.database.map((skill) => (
                <li key={skill} className="text-zinc-600 dark:text-zinc-400">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
              Tools
            </h2>
            <ul className="list-inside list-disc">
              {skills.tools.map((skill) => (
                <li key={skill} className="text-zinc-600 dark:text-zinc-400">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
            I was using an Intel-based 16” MacBook Pro prior to this and the
            difference is night and day. I’ve never heard the fans turn on a
            single time, even under the incredibly heavy loads I put it through
            with our various launch simulations.
          </Tool>
          <Tool title="Apple Pro Display XDR (Standard Glass)">
            The only display on the market if you want something HiDPI and
            bigger than 27”. When you’re working at planetary scale, every pixel
            you can get counts.
          </Tool>
          <Tool title="IBM Model M SSK Industrial Keyboard">
            They don’t make keyboards the way they used to. I buy these any time
            I see them go up for sale and keep them in storage in case I need
            parts or need to retire my main.
          </Tool>
          <Tool title="Apple Magic Trackpad">
            Something about all the gestures makes me feel like a wizard with
            special powers. I really like feeling like a wizard with special
            powers.
          </Tool>
          <Tool title="Herman Miller Aeron Chair">
            If I’m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in an expensive chair.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Sublime Text 4">
            I don’t care if it’s missing all of the fancy IDE features everyone
            else relies on, Sublime Text is still the best text editor ever
            made.
          </Tool>
          <Tool title="iTerm2">
            I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use.
          </Tool>
          <Tool title="TablePlus">
            Great software for working with databases. Has saved me from
            building about a thousand admin interfaces for my various projects
            over the years.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Alfred">
            It’s not the newest kid on the block but it’s still the fastest. The
            Sublime Text of the application launcher world.
          </Tool>
          <Tool title="Reflect">
            Using a daily notes system instead of trying to keep things
            organized by topics has been super powerful for me. And with
            Reflect, it’s still easy for me to keep all of that stuff
            discoverable by topic even though all of my writing happens in the
            daily note.
          </Tool>
          <Tool title="SavvyCal">
            Great tool for scheduling meetings while protecting my calendar and
            making sure I still have lots of time for deep work during the week.
          </Tool>
          <Tool title="Focus">
            Simple tool for blocking distracting websites when I need to just do
            the work and get some momentum going.
          </Tool>
        </ToolsSection> */}
      </div>
    </SimpleLayout>
  )
}
