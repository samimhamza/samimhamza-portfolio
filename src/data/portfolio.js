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
import logoCRAG from '@/images/logos/crag.svg'

export const personalInfo = {
  fullName: 'Ahmad Samim Hamza',
  shortName: 'Samim Hamza',
  title: 'Software Engineer | Applied AI',
  supportingDescriptor: 'Full-Stack Development & Applied AI',
  heroHeadline: 'Software Engineer | Applied AI',
  heroSupportingLine:
    'Building practical AI tools, backend services, and web applications.',
  heroIntro:
    "I'm a software engineer based in Finland with 5 years of experience building web applications and backend systems. Recently, my work has focused on applied AI, including enterprise RAG systems, multi-agent workflows, and search pipelines on AWS. My core tools are Python, TypeScript, React, Next.js, PostgreSQL, and FastAPI.",
  aboutHeading:
    'Hi, I’m Samim. I’m a software engineer working with web backends, full-stack apps, and applied AI.',
  aboutIntroParagraphs: [
    "I'm a software engineer with 5 years of practical experience, currently studying for my Master's in Artificial Intelligence at the University of Jyväskylä in Finland. My background is rooted in building web applications, backend APIs, and internal business tools.",
    "During my summer contract at Konecranes, I built an internal assistant to help engineers search through technical manuals and documentation. I tested different RAG setups using AWS Bedrock and LangGraph, hooked the retrieval backend up to a Next.js and FastAPI app, and gathered feedback from real users to tune search relevance and speed.",
    "Before that, I led an 8-person engineering team on Dara.af (an e-commerce platform) and spent several years building ERP systems for logistics companies. I primarily write Python, TypeScript, PHP, and SQL, and I focus on clean architecture, practical tests, and building tools that make daily work easier.",
  ],
  aiAssistedStatement:
    'I use tools like Cursor and Claude Code to speed up routine development, while handling all the system design, code reviews, and testing myself.',
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
    description: 'RAG pipelines, multi-agent workflows, and retrieval evaluation.',
    projectLink: '/projects#enterprise-rag',
    projectLabel: 'Enterprise RAG Assistant',
  },
  {
    title: 'Backend Engineering',
    description: 'REST APIs, relational database design, and business logic.',
    projectLink: '/projects#pgl-erp',
    projectLabel: 'PGL ERP System',
  },
  {
    title: 'Full-Stack Web',
    description: 'Clean user interfaces connected to reliable backend services.',
    projectLink: '/projects#dara-af',
    projectLabel: 'Dara.af Platform',
  },
  {
    title: 'Cloud & Deployment',
    description: 'Containerization, AWS deployment, CI/CD, and basic monitoring.',
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
      'Built and deployed an internal knowledge assistant to help engineers search across 100+ technical documents (PDF, XML, and XLSX).',
      'Tested and compared three RAG approaches using AWS Bedrock, LangChain, and LangGraph, connecting them to a shared Next.js and FastAPI web app.',
      'Set up a multi-agent workflow for handling multi-step queries, with PostgreSQL storing user accounts and feedback.',
      'Deployed the application to AWS (ECS, RDS, Amplify) and monitored query latency and retrieval quality using CloudWatch.',
      'Worked directly with internal users, documented how the system works, and handed it over to the engineering team.',
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
      'Led an 8-person engineering team building Dara.af, an e-commerce platform handling daily orders and product catalogs.',
      'Designed the PostgreSQL database schemas and built backend REST APIs using Laravel.',
      'Built frontend features in React and Next.js, wrote automated unit and integration tests, and reviewed pull requests.',
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
      'Built core modules for an internal ERP system handling logistics, shipments, HR, and finance.',
      'Wrote backend services in NestJS, designed relational database schemas, and optimized SQL queries.',
      'Created reusable frontend components with React, Next.js, and Tailwind CSS, working closely with the operations team to match their daily workflows.',
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
      'Taught introductory Python programming and machine learning basics to first- and second-year undergraduate students.',
      'Prepared practical lab assignments covering data handling, basic model training, and evaluation.',
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
      'Developed ERP features and admin dashboards using Laravel, Nuxt.js, and PostgreSQL.',
      'Added real-time updates using WebSockets for live status tracking.',
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
      'Built two internal management systems using PHP, Laravel, and Vue.js as part of a small team.',
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
  'RAG & Multi-Agent Systems',
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
      {
        name: 'Freight & Logistics ERP',
        href: '/projects#freight-logistics-erp',
      },
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
    title: 'Applied AI & Search',
    skills: [
      'RAG',
      'Corrective RAG (CRAG)',
      'Multi-Agent Systems',
      'LangChain',
      'LangGraph',
      'AWS Bedrock',
      'Vector Stores (ChromaDB, Qdrant)',
      'Reciprocal Rank Fusion (RRF)',
      'Hybrid Search (BM25 + Dense Vectors)',
      'Cross-Encoder Reranking',
      'LLM Evaluation',
    ],
    relatedProjects: [
      { name: 'Enterprise RAG Assistant', href: '/projects#enterprise-rag' },
      {
        name: 'CRAG Hybrid Retriever',
        href: '/projects#crag-hybrid-retriever',
      },
      { name: 'Health Information RAG', href: '/projects#health-rag' },
    ],
  },
  {
    title: 'Cloud & Delivery',
    skills: [
      'AWS (Bedrock, ECS, Amplify, RDS, S3, CloudWatch)',
      'Docker',
      'CI/CD Pipelines (GitHub Actions)',
      'Logging & Monitoring',
    ],
    relatedProjects: [
      { name: 'Enterprise RAG Assistant', href: '/projects#enterprise-rag' },
      {
        name: 'CRAG Hybrid Retriever CI',
        href: '/projects#crag-hybrid-retriever',
      },
    ],
  },
  {
    title: 'AI-Assisted Development',
    skills: ['Claude Code', 'Cursor', 'Antigravity'],
    note: 'Used to speed up boilerplate and routine coding, while I handle system design, reviews, and tests myself.',
    relatedProjects: [
      { name: 'Enterprise RAG Assistant', href: '/projects#enterprise-rag' },
      {
        name: 'Freight & Logistics ERP',
        href: '/projects#freight-logistics-erp',
      },
    ],
  },
  {
    title: 'Academic Coursework & Research',
    skills: [
      'Semantic Web (Ontologies, RDF, OWL, SPARQL)',
      'PyTorch',
      'scikit-learn',
      'Multi-Objective Optimization',
      'Kubernetes',
    ],
    note: 'Studied through university coursework and thesis research, distinct from commercial production experience.',
  },
]

export const projects = [
  {
    id: 'enterprise-rag',
    name: 'Enterprise RAG & Multi-Agent Assistant',
    date: '05/2026 – 08/2026',
    context: 'Konecranes, professional project',
    description:
      'An internal knowledge assistant built for Konecranes to help staff search through 100+ technical documents (PDFs, spreadsheets, and XML files). I compared three different RAG architectures behind a Next.js and FastAPI interface, added a user feedback loop in PostgreSQL, and deployed the stack on AWS.',
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
        'Engineers and operational staff spent too much time manually digging through over 100 internal manuals, spreadsheets, and XML specs to find technical details.',
      role: 'Software Development Specialist (AI/ML). I handled the research, backend implementation, UI integration, deployment, and documentation.',
      architecture:
        'A Next.js chat frontend connected to a FastAPI backend. The retrieval system tested AWS Bedrock, LangChain, and LangGraph pipelines reading from an S3 document store. PostgreSQL handled authentication, chat history, and thumbs up/down user feedback.',
      decisions:
        'Rather than picking one RAG framework blindly, I built a switchable backend to test AWS Bedrock against LangChain and LangGraph directly with users. I also added a supervisor agent to split complex, multi-part questions into simpler search steps.',
      evaluation:
        'Deployed the app to AWS (ECS and RDS) and tracked query times in CloudWatch. Collected user feedback on answer accuracy to tune chunk sizes and retrieval prompts.',
      outcome:
        'Delivered a working internal tool with complete setup documentation, and handed it off to the internal development team at the end of the contract.',
    },
  },
  {
    id: 'crag-hybrid-retriever',
    name: 'CRAG Hybrid Retriever',
    date: '2026',
    context:
      'Open-source library · Master’s Thesis R&D, University of Jyväskylä',
    description:
      'An open-source Python library for hybrid search and retrieval. It combines BM25 keyword search, dense vector embeddings, and cross-encoder reranking to find relevant documents even when queries contain exact codes or uncommon terms. It also includes basic self-check logic to filter out irrelevant passages before passing them to an LLM.',
    link: {
      href: 'https://github.com/samimhamza/crag-hybrid-retriever',
      label: 'github.com/samimhamza/crag-hybrid-retriever',
    },
    logo: logoCRAG,
    tags: [
      'Python',
      'RAG',
      'CRAG',
      'BM25',
      'Vector Search',
      'Reranking',
      'Pydantic',
      'GitHub Actions',
      'Pytest',
    ],
    categories: ['ai', 'backend'],
    featured: true,
    caseStudy: {
      problem:
        'Standard vector search often fails when queries contain exact product numbers, legal codes, or specific abbreviations. At the same time, passing poorly matched documents straight into an LLM often causes hallucinated answers.',
      role: 'Creator and maintainer. I designed and wrote the library in Python, added tests, set up GitHub Actions CI, and published it on GitHub.',
      architecture:
        'Two-stage retrieval: BM25 handles keyword matching and an in-memory vector store handles semantic search. Results are merged using Reciprocal Rank Fusion (RRF) and re-scored with a lightweight cross-encoder (FlashRank). A grading step checks if retrieved passages are actually relevant before final output.',
      decisions:
        'Used Reciprocal Rank Fusion (RRF) so keyword and vector scores could be combined without having to manually tune weight parameters. Kept the library lightweight with minimal heavy dependencies so it can run quickly on CPU without requiring an external service.',
      evaluation:
        'Evaluated retrieval quality using standard metrics (Precision, Recall, MRR, NDCG) against sample test datasets. Automated the test suite with Pytest, Ruff, and Mypy on every GitHub commit.',
      outcome:
        'Published on GitHub with documentation, example notebooks, and automated CI tests.',
    },
  },
  {
    id: 'dara-af',
    name: 'Dara.af E-Commerce Platform',
    date: '05/2024 – 07/2025',
    context: 'Ramaki Group of Companies, professional project',
    description:
      'An e-commerce marketplace built for the Afghan market, supporting hundreds of product listings and daily consumer orders. I led the development team, designed the PostgreSQL database, and built backend APIs and frontend features.',
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
        'Building a reliable local e-commerce store with product catalogs, shopping carts, order tracking, and merchant administration for an emerging retail market.',
      role: 'Senior Software Engineer leading a team of eight engineers; led PostgreSQL schema design, RESTful API development, feature implementation, and developer mentoring.',
      architecture:
        'Laravel RESTful API backend, PostgreSQL relational database, and responsive React / Next.js user interfaces.',
      decisions:
        'Prioritized database constraints and transactions to avoid inventory mismatches during peak order times. Established code review guidelines and automated tests before code was merged to production.',
      evaluation:
        'Tested all checkout and order flows with unit and integration tests, and conducted manual QA before releases.',
      outcome:
        'Successfully launched and ran the store, serving daily orders and regular product updates from local merchants.',
    },
  },
  {
    id: 'pgl-erp',
    name: 'PGL ERP System',
    date: '09/2022 – 04/2024',
    context: 'Peace Global Logistics, professional project',
    description:
      'An internal ERP system for a logistics company, managing international shipments, warehouse inventory, HR, and finance workflows. Built with NestJS, React, Next.js, and PostgreSQL.',
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
        'The company was managing shipments, customs clearances, warehouse stock, and accounting across different spreadsheets and paper forms, leading to lost time and data entry errors.',
      role: 'Software Engineer responsible for API development, database architecture, query optimization, and UI implementation.',
      architecture:
        'NestJS modular backend services, PostgreSQL database, React and Next.js frontend interfaces with Tailwind CSS styling.',
      decisions:
        'Modeled the database around real shipment milestones so staff could trace a container from pickup to delivery, and added indexes on high-traffic tables to keep reporting queries fast.',
      evaluation:
        'Worked directly with warehouse staff and accountants to test new modules on real shipment data before rolling them out across the company.',
      outcome:
        'Replaced disconnected spreadsheets with a central system used daily by operations, logistics, and finance staff.',
    },
  },
  {
    id: 'health-rag',
    name: 'Health Information RAG Chatbot',
    date: '2026',
    context: 'University of Jyväskylä, academic project',
    description:
      'A small academic project exploring RAG on public health articles. I built a scraper to collect articles, indexed them in ChromaDB, and tested how different chunk sizes and similarity thresholds affected answer quality.',
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
    featured: false,
    caseStudy: {
      problem:
        'A coursework experiment to see how well small, local RAG pipelines retrieve accurate context from non-technical medical articles without introducing misleading answers. (Academic project; not for clinical diagnosis or medical advice).',
      role: 'Solo student project. I wrote the scraper, embedding scripts, search logic, and evaluation tests.',
      architecture:
        'Python scripts for scraping and text chunking, ChromaDB for vector storage, and an LLM integration for question answering.',
      decisions:
        'Tested small chunks (300 tokens) versus medium chunks (800 tokens) with overlap to find the best balance between retrieval accuracy and context completeness.',
      evaluation:
        'Created a set of test questions with known answers and evaluated retrieval recall and answer relevance manually and with LLM evaluation prompts.',
      outcome:
        'Completed the coursework project and documented findings on chunk size trade-offs in question-answering systems.',
    },
  },
  {
    id: 'freight-logistics-erp',
    name: 'Freight Forwarding & Logistics ERP System',
    date: '08/2026 – 10/2026',
    context: 'Freelance client project',
    description:
      'A web-based logistics and billing application built for an international freight forwarder. It handles Bills of Lading, container manifests, customer invoicing, and expense tracking.',
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
        'A freight forwarding business needed a simple, unified system to generate Bills of Lading, track cargo containers, and manage invoices without relying on messy Excel sheets.',
      role: 'Solo developer (freelance). I designed the database, implemented the application logic, created PDF invoice templates, and deployed the system to production.',
      architecture:
        'Built with Laravel, Filament, and Livewire on top of a PostgreSQL database. Uses Spatie packages for role permissions and server-side PDF generation for invoices and shipping documents.',
      decisions:
        'Used Filament to build the administration panels quickly so more time could be spent getting the complex shipping and invoicing calculations right. Chose server-side PDF generation so that printed documents always match official customs layouts.',
      evaluation:
        'Wrote PHPUnit tests for the invoicing and balance-tracking logic to ensure currency conversions and totals were accurate. Tested directly with the client before going live.',
      outcome:
        'Deployed to production and actively used by the client for daily shipping documentation and invoicing.',
    },
  },
  {
    id: 'tgl-supplies',
    name: 'TGL Supplies System',
    date: '08/2023 – 12/2023',
    context: 'Peace Global Logistics',
    description:
      'A product catalog and management system for an equipment supplier. Built with Node.js, Express, React, and PostgreSQL.',
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
      'A website and inventory management system for a used car dealership. Built with Laravel, Next.js, Material UI, and MySQL.',
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
      'An open-source administration tool built for a local non-profit organization to track donations and relief distribution. Built with React and Mantine UI.',
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
      'An inventory and sales management tool built for a regional trading company using Laravel, Nuxt.js, and PostgreSQL.',
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
      'A website built for the technology branch of Peace Global Logistics using Next.js, React, and Tailwind CSS.',
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
