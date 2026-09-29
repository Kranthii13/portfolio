export const recruiterHighlights = [
  {
    icon: 'fa-solid fa-briefcase',
    title: 'Current Role',
    val: 'Software Engineer I @ GrowthAxl',
    sub: 'Full-time &bull; Aug 2024 – Present'
  },
  {
    icon: 'fa-solid fa-location-dot',
    title: 'Work Authorization & Location',
    val: 'Hyderabad, India',
    sub: 'Open to Relocation / Remote'
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Notice Period & Availability',
    val: 'Immediate to 30 Days',
    sub: 'Active for Full Stack & AI Roles'
  },
  {
    icon: 'fa-solid fa-code-commit',
    title: 'Production Tech Core',
    val: 'FastAPI, LangChain, React, Trino',
    sub: 'Python, TypeScript, Node.js'
  }
]

export const keyImpactMetrics = [
  {
    metric: '99.9%',
    label: 'FastAPI Uptime',
    detail: 'High-concurrency async microservices orchestrating AI workflows & distributed queries.'
  },
  {
    metric: '< 1.0s',
    label: 'Lakehouse Query Latency',
    detail: 'Sub-second natural language SQL queries using Trino federation over Apache Iceberg.'
  },
  {
    metric: '30%',
    label: 'Conflict Reduction',
    detail: 'Engineered automated appointment & notification dispatch algorithms for Telehealth.'
  },
  {
    metric: '8.5 / 10',
    label: 'B.Tech CGPA (AI & ML)',
    detail: 'Computer Science specializing in AI & Machine Learning from VNR VJIET.'
  }
]

export const skillCategories = [
  {
    title: 'AI Systems & Data Infrastructure',
    icon: 'fa-solid fa-brain',
    skills: [
      'RAG Architectures',
      'LangChain Agents',
      'Vector Search & Embeddings',
      'OpenAI APIs',
      'NLP',
      'Trino Query Engine',
      'Apache Iceberg',
      'PostgreSQL',
      'MySQL',
      'Data Modeling'
    ]
  },
  {
    title: 'Backend Engineering & Distributed Systems',
    icon: 'fa-solid fa-server',
    skills: [
      'FastAPI',
      'Node.js',
      'Express.js',
      'Microservices Architecture',
      'REST APIs',
      'High-Concurrency Workflows',
      'API Gateway'
    ]
  },
  {
    title: 'Frontend Architecture & Interfaces',
    icon: 'fa-solid fa-layer-group',
    skills: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'JavaScript (ESNext)',
      'HTML5 & Modern CSS3'
    ]
  },
  {
    title: 'Programming Languages & Cloud DevOps',
    icon: 'fa-solid fa-terminal',
    skills: [
      'Python',
      'TypeScript',
      'JavaScript',
      'Java',
      'C++',
      'Docker',
      'Git & GitHub',
      'CI/CD Pipelines',
      'Vercel',
      'Linux'
    ]
  }
]

export const experiences = [
  {
    role: 'Software Engineer I',
    company: 'GrowthAxl',
    period: '08/2024 – Present',
    location: 'Hyderabad, India',
    highlights: [
      {
        project: 'DataAxl — AI-Powered Lakehouse Analytics Platform',
        points: [
          'Architected an end-to-end AI analytics platform enabling non-technical stakeholders to query petabyte-scale lakehouses using natural language.',
          'Engineered a high-precision RAG pipeline with LangChain semantic retrieval and vector embeddings to deliver verified, hallucination-free answers.',
          'Integrated Trino query federation with Apache Iceberg tables to achieve sub-second execution speeds over massive lakehouse datasets.',
          'Built high-concurrency FastAPI microservices with 99.9% uptime and reactive Next.js dashboards featuring streaming AI chat.'
        ]
      },
      {
        project: 'Telehealth Communication & Consultation Platform',
        points: [
          'Engineered a HIPAA-compliant virtual healthcare platform with encrypted communication channels utilizing Node.js, React.js, and PostgreSQL.',
          'Designed an automated scheduling and dispatch engine that lowered booking collisions and calendar deadlocks by 30%.'
        ]
      },
      {
        project: 'Mobile Application Operations & Analytics Dashboard',
        points: [
          'Delivered an operational telemetry dashboard in React.js for high-volume consumer apps, giving engineering teams real-time visibility into mission-critical metrics.'
        ]
      }
    ]
  }
]

export const projects = [
  {
    id: 1,
    category: 'web',
    title: 'LifeFlow-FE — Emergency Blood & Medical Platform',
    tag: 'Frontend Platform & Real-Time Dispatch',
    badge: 'Active Project',
    repoUrl: 'https://github.com/Kranthii13/LifeFlow-FE',
    demoUrl: null,
    architecture: 'Microservices Frontend &bull; WebSocket Live Feed &bull; Geolocation Matrix',
    keyFeatures: [
      'Real-time emergency blood request dispatch and donor proximity mapping.',
      'Automated donor response tracking with sub-second WebSocket updates.',
      'Accessible, mobile-optimized hospital dashboard with blood bank inventory tracking.'
    ],
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'REST APIs'],
    gradient: 'linear-gradient(135deg, #ff2d55 0%, #ff9500 100%)'
  },
  {
    id: 2,
    category: 'ai',
    title: 'AI-Service — LLM & Autonomous Workflow Engine',
    tag: 'AI Architecture & LangChain',
    badge: 'Core AI',
    repoUrl: 'https://github.com/Kranthii13/AI-Service',
    demoUrl: null,
    architecture: 'FastAPI Microservice &bull; Vector Embeddings Index &bull; OpenAI / LangChain',
    keyFeatures: [
      'Semantic retrieval and vector search pipeline eliminating LLM hallucinations.',
      'Autonomous query planning agents converting natural language questions into structured queries.',
      'Async high-concurrency pipeline with streaming responses and token budgeting.'
    ],
    tech: ['Python', 'FastAPI', 'LangChain', 'OpenAI APIs', 'Vector Embeddings', 'Docker'],
    gradient: 'linear-gradient(135deg, #0071e3 0%, #af52de 100%)'
  },
  {
    id: 3,
    category: 'backend',
    title: 'Api-Gateway — Unified Routing & Auth Layer',
    tag: 'Distributed Backend Infrastructure',
    badge: 'Infrastructure',
    repoUrl: 'https://github.com/Kranthii13/Api-Gateway',
    demoUrl: null,
    architecture: 'Reverse Proxy &bull; Token Bucket Rate Limiter &bull; JWT Validation',
    keyFeatures: [
      'Centralized authentication with stateless JWT token verification and user context injection.',
      'Dynamic rate limiting and DDoS protection per client IP/API token.',
      'Unified request routing and telemetry across internal microservice endpoints.'
    ],
    tech: ['Node.js', 'Express.js', 'JWT', 'Reverse Proxy', 'Security Headers'],
    gradient: 'linear-gradient(135deg, #5856d6 0%, #0071e3 100%)'
  },
  {
    id: 4,
    category: 'backend',
    title: 'User-Service & Auth Management',
    tag: 'Identity & Access Architecture',
    badge: 'Microservice',
    repoUrl: 'https://github.com/Kranthii13/User-Service',
    demoUrl: null,
    architecture: 'PostgreSQL Relational Storage &bull; Bcrypt Hashing &bull; RBAC Policies',
    keyFeatures: [
      'Role-based access control (RBAC) with granular permission trees.',
      'Secure password hashing with salted Bcrypt and session refresh rotation.',
      'RESTful identity management APIs with comprehensive validation layers.'
    ],
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Bcrypt', 'Docker'],
    gradient: 'linear-gradient(135deg, #34c759 0%, #30b0c7 100%)'
  },
  {
    id: 5,
    category: 'backend',
    title: 'Finance-Service & Ledger-Service',
    tag: 'Financial Data & Double-Entry Accounting',
    badge: 'FinTech',
    repoUrl: 'https://github.com/Kranthii13/Finance-Service',
    demoUrl: null,
    architecture: 'Double-Entry Accounting &bull; ACID Transactions &bull; Prisma ORM',
    keyFeatures: [
      'Strict double-entry ledger architecture ensuring zero discrepancy in transaction balances.',
      'Idempotent payment webhook consumers preventing duplicate charges.',
      'Audit log trail with immutable historical transaction snapshots.'
    ],
    tech: ['Node.js', 'PostgreSQL', 'Prisma', 'REST API', 'Data Integrity'],
    gradient: 'linear-gradient(135deg, #ff9500 0%, #ff3b30 100%)'
  },
  {
    id: 6,
    category: 'web',
    title: 'Finance-pro-dashboard',
    tag: 'Analytics & Financial Telemetry',
    badge: 'Dashboard',
    repoUrl: 'https://github.com/Kranthii13/Finance-pro-dashboard',
    demoUrl: null,
    architecture: 'Reactive SPA &bull; Chart.js Canvas &bull; Modular State Store',
    keyFeatures: [
      'Interactive financial forecasting, burn rate charts, and revenue projections.',
      'Real-time transaction filtering, sorting, and CSV export capabilities.',
      'Adaptive light/dark mode UI with zero layout shift during asynchronous data fetches.'
    ],
    tech: ['React.js', 'Chart.js', 'Tailwind CSS', 'Vite', 'Financial APIs'],
    gradient: 'linear-gradient(135deg, #0071e3 0%, #5ac8fa 100%)'
  },
  {
    id: 7,
    category: 'backend',
    title: 'Communication-Service & Task-Service',
    tag: 'Event-Driven Messaging & Queues',
    badge: 'Cloud Services',
    repoUrl: 'https://github.com/Kranthii13/Communication-Service',
    demoUrl: null,
    architecture: 'Event-Driven Message Bus &bull; WebSocket Hub &bull; Background Workers',
    keyFeatures: [
      'Multi-channel notification engine (HTML email, push alerts, in-app notifications).',
      'Asynchronous task worker handling retries with exponential backoff.',
      'High-throughput WebSocket connection pool with automatic heartbeat and reconnection.'
    ],
    tech: ['Node.js', 'WebSockets', 'Nodemailer', 'Redis/Queues', 'REST API'],
    gradient: 'linear-gradient(135deg, #af52de 0%, #ff2d55 100%)'
  },
  {
    id: 8,
    category: 'ai',
    title: 'Data-Extraction-Service',
    tag: 'Automated Ingestion & ETL Pipeline',
    badge: 'Data Platform',
    repoUrl: 'https://github.com/Kranthii13/data-extraction-service',
    demoUrl: null,
    architecture: 'High-Throughput ETL &bull; Regex & NLP Parsers &bull; Pandas Processing',
    keyFeatures: [
      'Automated extraction of structured tables and key-value entities from raw unstructured docs.',
      'High-speed batch processing pipeline with validation against strict Pydantic schemas.',
      'Seamless database loading layer supporting PostgreSQL and cloud object stores.'
    ],
    tech: ['Python', 'FastAPI', 'Pandas', 'NLP', 'ETL Pipelines'],
    gradient: 'linear-gradient(135deg, #30b0c7 0%, #34c759 100%)'
  }
]

export const educations = [
  {
    degree: 'Bachelor of Technology',
    major: 'Computer Science (AI & ML)',
    period: '2021 – 2024',
    institution: 'VNR VJIET, Hyderabad',
    grade: 'CGPA 8.5 / 10'
  },
  {
    degree: 'Diploma',
    major: 'Computer Engineering',
    period: '2018 – 2021',
    institution: 'GPT, Hyderabad',
    grade: 'CGPA 8.23 / 10'
  }
]

export const certifications = [
  { name: 'Google UX Design Professional Certificate', issuer: 'Coursera' },
  { name: 'Full Stack Web Development', issuer: 'Udemy' },
  { name: 'Python for Data Science and AI', issuer: 'Pixel Quest Solutions' }
]
