import logoPGL from '@/images/logos/pgl.png'
import logoSmartFriqi from '@/images/logos/smart_friqi.svg'
import logoRamaki from '@/images/logos/ramaki_logo.png'
import logoKonecranes from '@/images/logos/konecranes_logo.png'
import logoTwistedBits from '@/images/logos/twisted_bits.png'
import logoCosmos from '@/images/logos/cosmos.svg'
import unitedLogo from '@/images/logos/united_logo.png'
import logoGPF from '@/images/logos/gpf_logo.png'
import logoTeebAlhoor from '@/images/logos/teebalhoor.svg'
import logoTglSupplies from '@/images/logos/tglsupplies.png'
import logoPGT from '@/images/logos/pgt.png'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoAmirSahra from '@/images/logos/amirsahra.svg'

export const personalInfo = {
  fullName: 'Ahmad Samim Hamza',
  shortName: 'Samim Hamza',
  title: 'AI Engineer & Senior Software Engineer',
  supportingDescriptor: 'Full-Stack Development & Applied AI',
  heroHeadline: 'AI Engineer & Senior Software Engineer',
  heroSupportingLine:
    'Building enterprise AI applications, backend services, and full-stack business systems.',
  heroIntro:
    'I build intelligent applications and the software systems around them. My experience spans enterprise RAG and multi-agent assistants, backend services, and full-stack platforms for e-commerce, logistics, and business operations. I work with Python, TypeScript, React, Next.js, PostgreSQL, and AWS, combining practical AI engineering with reliable software delivery.',
  aboutHeading:
    'Samim Hamza. AI Engineer & Senior Software Engineer building intelligent applications and reliable software systems.',
  aboutIntroParagraphs: [
    "I'm an AI Engineer and Senior Software Engineer, currently pursuing a Master's degree in Artificial Intelligence at the University of Jyväskylä. I bring 5 years of software engineering experience across enterprise AI applications, backend services, and full-stack business platforms.",
    'At Konecranes, I designed, evaluated, and deployed an enterprise RAG and multi-agent assistant on AWS, integrating AI backends with a Next.js and FastAPI application. I worked with stakeholders, implemented a feedback pipeline, and documented and handed over the system to the internal team.',
    'My broader software engineering experience includes leading a team of eight engineers on Dara.af and developing ERP and logistics systems used by 200+ daily business users. I work with Python, TypeScript, React, Next.js, NestJS, Laravel, PostgreSQL, and AWS, with an emphasis on maintainable architecture, testing, and practical business needs.',
  ],
  aiAssistedStatement:
    'I use Claude Code and Cursor throughout development, while retaining responsibility for architecture, code review, and testing.',
  links: {
    website: 'https://www.samimhamza.com/',
    linkedin: 'https://www.linkedin.com/in/ahmadsamimhamza/',
    github: 'https://github.com/samimhamza',
    email: 'mailto:samim.hamza7@gmail.com',
    cv: '/cv',
    x: 'https://x.com/SamimHamza1',
    facebook: 'https://www.facebook.com/ahmadsamim.hamzaei/',
    instagram: 'https://www.instagram.com/samim.hz/',
  },
}

export const capabilities = [
  {
    title: 'Applied AI',
    description: 'RAG applications, multi-agent workflows, and evaluation.',
    projectLink: '/projects#enterprise-rag',
    projectLabel: 'Enterprise RAG Assistant',
  },
  {
    title: 'Backend Engineering',
    description: 'APIs, relational data models, and business workflows.',
    projectLink: '/projects#pgl-erp',
    projectLabel: 'PGL ERP System',
  },
  {
    title: 'Full-Stack Delivery',
    description: 'User interfaces integrated with backend services.',
    projectLink: '/projects#dara-af',
    projectLabel: 'Dara.af Platform',
  },
  {
    title: 'Cloud Delivery',
    description: 'AWS deployment, monitoring, documentation, and handover.',
    projectLink: '/projects#enterprise-rag',
    projectLabel: 'AWS Cloud Delivery',
  },
]

export const experience = [
  {
    company: 'Konecranes',
    role: 'Software Development Specialist (AI/ML) – Fixed-Term Summer Contract',
    period: '05/2026 – 08/2026',
    start: '05/2026',
    end: '08/2026',
    location: 'Hyvinkää, Finland',
    logo: logoKonecranes,
    bullets: [
      'Designed, built, evaluated, and deployed an enterprise RAG and multi-agent assistant over 100+ internal XML, PDF, and XLSX documents.',
      'Compared three RAG variants using AWS Bedrock, LangChain, and LangGraph, integrated through a shared Next.js and FastAPI application.',
      'Implemented supervisor/collaborator agent orchestration and used PostgreSQL for user accounts, session data, and feedback storage.',
      'Deployed on AWS Amplify, ECS, and RDS; used CloudWatch and application error tracking to investigate issues affecting retrieval quality and response latency.',
      'Worked with domain stakeholders, documented the system, and handed it over to the internal team.',
    ],
  },
  {
    company: 'Ramaki Group of Companies',
    role: 'Senior Software Engineer',
    period: '05/2024 – 07/2025',
    start: '05/2024',
    end: '07/2025',
    location: 'Kabul, Afghanistan',
    logo: logoRamaki,
    bullets: [
      'Led a team of eight engineers delivering Dara.af, an e-commerce platform supporting hundreds of product listings and daily customer orders.',
      'Designed and optimized PostgreSQL schemas and developed RESTful APIs using Laravel.',
      'Delivered application features using React and Next.js, wrote unit, integration, and feature tests, and conducted code reviews and mentoring.',
    ],
  },
  {
    company: 'Peace Global Logistics',
    role: 'Software Engineer',
    period: '09/2022 – 04/2024',
    start: '09/2022',
    end: '04/2024',
    location: 'Kabul, Afghanistan',
    logo: logoPGL,
    bullets: [
      'Developed ERP and logistics features using NestJS, React, Next.js, and PostgreSQL for 200+ daily users.',
      'Designed relational data models, optimized complex queries, and built reusable React and Tailwind components.',
      'Collaborated with logistics, finance, and operations stakeholders to translate business workflows into application features.',
    ],
  },
  {
    company: 'Kabul University',
    role: 'Instructor (Python & Machine Learning)',
    period: '04/2022 – 10/2022',
    start: '04/2022',
    end: '10/2022',
    location: 'Kabul, Afghanistan',
    logo: logoCosmos,
    bullets: [
      'Taught Python programming and machine learning fundamentals to first- and second-year undergraduate students.',
      'Covered data analysis, model training, evaluation, and practical ML tooling.',
    ],
  },
  {
    company: 'Smart Friqi',
    role: 'Full-Stack Developer',
    period: '07/2021 – 09/2022',
    start: '07/2021',
    end: '09/2022',
    location: 'Kabul, Afghanistan',
    logo: logoSmartFriqi,
    bullets: [
      'Built ERP modules using Laravel, Nuxt.js, and PostgreSQL.',
      'Implemented real-time features with WebSockets and developed dashboards and administration interfaces.',
    ],
  },
  {
    company: 'TwistedBits ICT',
    role: 'Web Developer',
    period: '05/2021 – 07/2021',
    start: '05/2021',
    end: '07/2021',
    location: 'Kabul, Afghanistan',
    logo: logoTwistedBits,
    bullets: [
      'Built two management information systems using PHP, JavaScript, Laravel, and Vue.js as part of a small team.',
    ],
  },
]

export const education = [
  {
    degree: "Master's Degree in Artificial Intelligence",
    institution: 'University of Jyväskylä',
    location: 'Jyväskylä, Finland',
    period: '08/2025 – Present',
    status: 'Currently in progress · Expected May 2027',
    thesis:
      'Exploring LLM-assisted validation for multi-objective optimization in Finnish forest planning.',
  },
  {
    degree: 'Bachelor of Computer Science (Software Engineering)',
    institution: 'Kabul University',
    location: 'Kabul, Afghanistan',
    period: '2017 – 2021',
  },
]

export const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Persian', level: 'Native' },
  { name: 'Finnish', level: 'A1, actively learning' },
]

export const compactSkills = [
  'Python',
  'TypeScript',
  'FastAPI',
  'React / Next.js',
  'NestJS',
  'PostgreSQL',
  'AWS',
  'Docker',
  'RAG & Agentic Systems',
]

export const skillCategories = [
  {
    title: 'Backend Engineering',
    skills: [
      'Python',
      'FastAPI',
      'TypeScript',
      'NestJS',
      'Node.js',
      'PHP',
      'Laravel',
      'REST APIs',
    ],
    relatedProjects: [
      { name: 'Enterprise RAG Assistant', href: '/projects#enterprise-rag' },
      { name: 'Freight & Logistics ERP', href: '/projects#freight-logistics-erp' },
      { name: 'PGL ERP System', href: '/projects#pgl-erp' },
      { name: 'Dara.af E-Commerce', href: '/projects#dara-af' },
    ],
  },
  {
    title: 'Frontend Engineering',
    skills: [
      'React',
      'Next.js',
      'Vue.js',
      'Nuxt.js',
      'Tailwind CSS',
      'Material UI',
    ],
    relatedProjects: [
      { name: 'Dara.af E-Commerce', href: '/projects#dara-af' },
      { name: 'PGL ERP System', href: '/projects#pgl-erp' },
      { name: 'Enterprise RAG UI', href: '/projects#enterprise-rag' },
    ],
  },
  {
    title: 'Data, Databases & Caching',
    skills: [
      'PostgreSQL',
      'Relational Schema Design',
      'Query Optimization',
      'MySQL',
      'SQLite',
      'Redis',
    ],
    relatedProjects: [
      { name: 'Enterprise RAG Assistant', href: '/projects#enterprise-rag' },
      { name: 'Dara.af E-Commerce', href: '/projects#dara-af' },
      { name: 'PGL ERP System', href: '/projects#pgl-erp' },
    ],
  },
  {
    title: 'Applied AI & Agentic Systems',
    skills: [
      'RAG',
      'Multi-Agent Systems',
      'LangChain',
      'LangGraph',
      'AWS Bedrock',
      'ChromaDB',
      'LLM Evaluation',
    ],
    relatedProjects: [
      { name: 'Enterprise RAG Assistant', href: '/projects#enterprise-rag' },
      { name: 'Health Information RAG', href: '/projects#health-rag' },
    ],
  },
  {
    title: 'Cloud & Delivery',
    skills: [
      'AWS (Bedrock, ECS, Amplify, RDS, S3, CloudWatch)',
      'Docker',
      'CI/CD Pipelines',
      'Logging & Monitoring',
    ],
    relatedProjects: [
      { name: 'Enterprise RAG Assistant', href: '/projects#enterprise-rag' },
    ],
  },
  {
    title: 'AI-Assisted Development',
    skills: ['Claude Code', 'Cursor', 'Antigravity'],
    note: 'Used throughout development while retaining responsibility for architecture, code review, and testing.',
    relatedProjects: [
      { name: 'Enterprise RAG Assistant', href: '/projects#enterprise-rag' },
      { name: 'Freight & Logistics ERP', href: '/projects#freight-logistics-erp' },
    ],
  },
  {
    title: 'Academic Knowledge & Familiarity',
    skills: [
      'Semantic Web (Ontologies, RDF, OWL, SPARQL)',
      'PyTorch',
      'scikit-learn',
      'Multi-Objective Optimization',
      'Kubernetes',
    ],
    note: 'Academic coursework and thesis research; separated from production implementations.',
  },
]

export const projects = [
  {
    id: 'enterprise-rag',
    name: 'Enterprise RAG & Multi-Agent Assistant',
    date: '05/2026 – 08/2026',
    context: 'Konecranes, professional project',
    description:
      'Designed and deployed an internal enterprise knowledge assistant over 100+ XML, PDF, and XLSX documents. Compared three RAG variants behind a shared Next.js and FastAPI interface, implemented multi-agent orchestration and PostgreSQL feedback storage, and deployed the application on AWS with CloudWatch monitoring.',
    logo: logoKonecranes,
    tags: [
      'Python',
      'FastAPI',
      'Next.js',
      'PostgreSQL',
      'AWS Bedrock',
      'LangChain',
      'LangGraph',
      'RAG',
      'AWS',
    ],
    categories: ['ai', 'backend'],
    featured: true,
    caseStudy: {
      problem:
        'Enterprise internal knowledge discovery across 100+ heterogeneous technical documents (XML, PDF, XLSX) for internal engineering and operations workflows.',
      role: 'Designed, built, evaluated, and deployed the system as Software Development Specialist (AI/ML). Collaborated with domain stakeholders and handed over to the internal team.',
      architecture:
        'Next.js conversational frontend connecting to a FastAPI backend. Backends explored AWS Bedrock (Agents, AgentCore), LangChain, and LangGraph. Documents indexed in an S3-based vector store; relational PostgreSQL handled user accounts, sessions, and evaluation feedback storage.',
      decisions:
        'Benchmarked three RAG variants behind a shared conversational UI to evaluate retrieval latency and response quality. Implemented supervisor/collaborator agent orchestration for task delegation.',
      evaluation:
        'Deployed on AWS Amplify, ECS, and RDS. Implemented a PostgreSQL-backed human evaluation pipeline and used CloudWatch with application error tracking to resolve retrieval quality and latency bottlenecks.',
      outcome:
        'Fully documented the system and handed it over to the internal engineering team.',
    },
  },
  {
    id: 'dara-af',
    name: 'Dara.af E-Commerce Platform',
    date: '05/2024 – 07/2025',
    context: 'Ramaki Group of Companies, professional project',
    description:
      'Led a team of eight engineers delivering a production e-commerce platform supporting hundreds of product listings and daily customer orders. Contributed to PostgreSQL schema design, REST API development, full-stack implementation, testing, and code review.',
    link: {
      href: 'https://dara.af/',
      label: 'dara.af',
    },
    logo: logoRamaki,
    tags: ['Laravel', 'PostgreSQL', 'React', 'Next.js', 'REST APIs'],
    categories: ['fullstack', 'backend'],
    featured: true,
    caseStudy: {
      problem:
        'Delivering a production e-commerce marketplace platform supporting product catalogs, order processing, and merchant administration.',
      role: 'Senior Software Engineer leading a team of eight engineers; led PostgreSQL schema design, RESTful API development, feature implementation, and developer mentoring.',
      architecture:
        'Laravel RESTful API backend, PostgreSQL relational database, and responsive React / Next.js user interfaces.',
      decisions:
        'Designed normalized PostgreSQL schemas for transactional integrity across orders, stock, and listings; established comprehensive automated test requirements.',
      evaluation:
        'Wrote unit, integration, and feature tests; conducted structured code reviews and developer mentorship before production releases.',
      outcome:
        'Successfully delivered and operated production e-commerce platform supporting daily customer transactions.',
    },
  },
  {
    id: 'pgl-erp',
    name: 'PGL ERP System',
    date: '09/2022 – 04/2024',
    context: 'Peace Global Logistics, professional project',
    description:
      'Developed logistics, shipment, HR, finance, and inventory features for an ERP platform serving 200+ daily users. Built APIs, designed PostgreSQL schemas, optimized queries, and implemented interfaces using NestJS, React, and Next.js.',
    link: {
      href: 'https://pglsystem.com/',
      label: 'pglsystem.com',
    },
    logo: logoPGL,
    tags: ['NestJS', 'React', 'Next.js', 'PostgreSQL', 'REST APIs'],
    categories: ['fullstack', 'backend'],
    featured: true,
    caseStudy: {
      problem:
        'Coordinating complex multi-department logistics, shipment handling, HR, inventory, and finance operations for over 200 daily business users.',
      role: 'Software Engineer responsible for API development, database architecture, query optimization, and UI implementation.',
      architecture:
        'NestJS modular backend services, PostgreSQL database, React and Next.js frontend interfaces with Tailwind CSS styling.',
      decisions:
        'Structured relational data models for multi-department workflows and optimized complex SQL queries for operational reporting.',
      evaluation:
        'Collaborated directly with logistics, finance, and operations stakeholders to translate business workflows into tested software features.',
      outcome:
        'Delivered dependable enterprise ERP infrastructure supporting daily business operations across departments.',
    },
  },
  {
    id: 'health-rag',
    name: 'Health Information RAG Chatbot',
    date: '2026',
    context: 'University of Jyväskylä, academic project',
    description:
      'Built a domain-specific RAG application using publicly available health information. Implemented web scraping, document chunking, ChromaDB indexing, and retrieval and answer-quality evaluation.',
    logo: logoPlanetaria,
    tags: [
      'Python',
      'ChromaDB',
      'RAG',
      'Vector Search',
      'Web Scraping',
      'LLM Evaluation',
    ],
    categories: ['ai'],
    featured: true,
    caseStudy: {
      problem:
        'Academic research project exploring conversational retrieval and answer quality over publicly available health information articles. (Academic project; not for clinical diagnosis or medical advice).',
      role: 'Sole engineer responsible for web scraping, embedding pipeline, vector store indexing, and evaluation.',
      architecture:
        'Python scraping and chunking pipeline, ChromaDB vector store, and LLM-powered retrieval interface.',
      decisions:
        'Compared chunking strategies and semantic similarity thresholds to assess answer relevance and hallucination reduction.',
      evaluation:
        'Conducted retrieval accuracy and answer quality evaluation using LLM evaluation techniques against curated test questions.',
      outcome:
        'Demonstrated practical domain-specific RAG pipeline construction and empirical retrieval evaluation in an academic setting.',
    },
  },
  {
    id: 'freight-logistics-erp',
    name: 'Freight Forwarding & Logistics ERP System',
    date: '08/2026 – 10/2026',
    context: 'Freelance, end-to-end ownership',
    description:
      'Architected, developed, and deployed a full-scale cloud ERP for international freight forwarding and customs clearance logistics. Engineered end-to-end Master/House Bill of Lading workflows, multi-container tracking with VIN-level vehicle manifests, automated tax-compliant PDF generation, dual-ledger accounting, and role-based access control.',
    link: {
      href: 'https://amirsahra.com/',
      label: 'amirsahra.com',
    },
    logo: logoAmirSahra,
    tags: [
      'PHP',
      'Laravel',
      'Filament',
      'Livewire',
      'PostgreSQL',
      'Tailwind CSS',
      'PHPUnit',
      'ERP',
    ],
    categories: ['fullstack', 'backend'],
    featured: false,
    caseStudy: {
      problem:
        'International ocean freight forwarders and cargo clearing agencies often rely on fragmented spreadsheets, disconnected accounting software, and manual email notifications, resulting in documentation errors, delayed arrival notices, and poor visibility into shipment profit margins. Primary users include vessel consolidation coordinators, port clearance agents, and finance officers.',
      role: 'Sole Architect & Full-Stack Developer (AI-assisted with Antigravity and Cursor). Owned end-to-end development, deployment, and ongoing maintenance: designed relational data architecture, business logic, automated document rendering engines, and test suites.',
      architecture:
        'Laravel 13, Filament v5, and Livewire v4 reactive operations panel backed by PostgreSQL. Implements Master/House Bill of Lading hierarchies, container allocations, server-side PDF document generation (Spatie PDF/DomPDF), automated transactional emailing via Resend, and dual-ledger accounting.',
      decisions:
        'Adopted unified Filament v5 + Livewire architecture over a detached SPA to eliminate API boilerplate and ensure tight Eloquent database transactions. Implemented server-side PDF rendering for deterministic invoice/B/L generation and linked carrier remittances to client invoices for real-time shipment margin tracking.',
      evaluation:
        'Built comprehensive PHPUnit 11 feature test suite covering invoice lifecycles, payment reconciliations, PDF rendering, and role permissions (Filament Shield / Spatie Permission). Enforced PSR-12 code quality with Laravel Pint and deployed production environment at amirsahra.com.',
      outcome:
        'Delivered, deployed, and maintain a self-contained, enterprise-grade cloud logistics ERP running on amirsahra.com, reducing document issuance time from hours to seconds and providing real-time visibility into operational cash flows.',
    },
  },
  {
    id: 'tgl-supplies',
    name: 'TGL Supplies System',
    date: '08/2023 – 12/2023',
    context: 'Peace Global Logistics',
    description:
      'Built a website and management information system using Node.js and Express for the backend, React for the frontend, and PostgreSQL for data storage.',
    link: {
      href: 'https://tglsupplies.com/',
      label: 'tglsupplies.com',
    },
    logo: logoTglSupplies,
    tags: ['Node.js', 'Express.js', 'React', 'PostgreSQL'],
    categories: ['fullstack', 'backend'],
    featured: false,
  },
  {
    id: 'united-cars',
    name: 'United Used Cars Website and MIS',
    date: '2022 – 2023',
    context: 'Peace Global Logistics',
    description:
      'Full website and management information system for a used car trading company. Built with Laravel, Next.js, Material UI, and MySQL.',
    link: {
      href: 'https://unitedtradingcars.com/',
      label: 'unitedtradingcars.com',
    },
    logo: unitedLogo,
    tags: ['Next.js', 'Laravel', 'Material UI', 'MySQL'],
    categories: ['fullstack', 'backend'],
    featured: false,
  },
  {
    id: 'charity-management',
    name: 'Charity Management System',
    date: '2022',
    context: 'Non-profit client project',
    description:
      'Charity management system built for an Afghanistan-based non-profit organization.',
    link: {
      href: 'https://github.com/samimhamza/gpf_frontend_mantine',
      label: 'github.com',
    },
    logo: logoGPF,
    tags: ['React', 'Mantine', 'REST API'],
    categories: ['fullstack'],
    featured: false,
  },
  {
    id: 'teebalhoor',
    name: 'TeebAlhoor ERP System',
    date: '08/2021 – 05/2022',
    context: 'Smart Friqi',
    description:
      'ERP system for TeebAlhoor, a UAE-based trading company, built with Laravel, Nuxt.js, and PostgreSQL.',
    link: {
      href: 'https://github.com/samimhamza/teebalhoorfrontend',
      label: 'github.com',
    },
    logo: logoTeebAlhoor,
    tags: ['Laravel', 'Nuxt.js', 'Vue.js', 'PostgreSQL'],
    categories: ['fullstack', 'backend'],
    featured: false,
  },
  {
    id: 'peace-global-tech',
    name: 'Peace Global Tech Website',
    date: '2023',
    context: 'Peace Global Logistics',
    description:
      'Department website for the tech division of Peace Global Logistics.',
    link: {
      href: 'https://peaceglobaltech.com/',
      label: 'peaceglobaltech.com',
    },
    logo: logoPGT,
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    categories: ['fullstack'],
    featured: false,
  },
]
