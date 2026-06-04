export interface TechItem {
  name: string
  icon: string
  category: string
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  description: string
}

export interface TechCategory {
  name: string
  description: string
  technologies: TechItem[]
}

export const software_data: TechCategory[] = [
  {
    name: 'Programming Languages',
    description: 'Core programming and scripting languages',
    technologies: [
      {
        name: 'TypeScript',
        icon: '📘',
        category: 'Languages',
        proficiency: 'Advanced',
        description: 'Typed superset of JavaScript for scalable app development'
      },
      {
        name: 'JavaScript',
        icon: '💛',
        category: 'Languages',
        proficiency: 'Expert',
        description: 'Modern ES6+ web scripting and scripting paradigms'
      },
      {
        name: 'Java',
        icon: '☕',
        category: 'Languages',
        proficiency: 'Advanced',
        description: 'Object-oriented programming, Collections, and Streams API'
      },
      {
        name: 'Python',
        icon: '🐍',
        category: 'Languages',
        proficiency: 'Advanced',
        description: 'Scripting, backend service development, and AI prototyping'
      },
      {
        name: 'C++',
        icon: '🔵',
        category: 'Languages',
        proficiency: 'Intermediate',
        description: 'Systems programming and object-oriented foundations'
      },
      {
        name: 'SQL',
        icon: '🗄️',
        category: 'Languages',
        proficiency: 'Advanced',
        description: 'Relational query design and transactional scripting'
      }
    ]
  },
  {
    name: 'Frontend Development',
    description: 'Modern frontend frameworks and libraries',
    technologies: [
      {
        name: 'React.js',
        icon: '⚛️',
        category: 'Frontend',
        proficiency: 'Expert',
        description: 'Component-based UI library (React 18) for high-performance apps'
      },
      {
        name: 'Next.js',
        icon: '▲',
        category: 'Frontend',
        proficiency: 'Advanced',
        description: 'React framework for SSR, SSG, Edge routing, and code-splitting'
      },
      {
        name: 'Tailwind CSS',
        icon: '🎨',
        category: 'Frontend',
        proficiency: 'Expert',
        description: 'Utility-first styling for responsive cross-browser layouts'
      },
      {
        name: 'Redux Toolkit',
        icon: '🔄',
        category: 'Frontend',
        proficiency: 'Advanced',
        description: 'State management and query caching for complex UIs'
      },
      {
        name: 'Framer Motion',
        icon: '✨',
        category: 'Frontend',
        proficiency: 'Advanced',
        description: 'Production-ready motion library for fluid interactive elements'
      },
      {
        name: 'Headless UI',
        icon: '🧩',
        category: 'Frontend',
        proficiency: 'Advanced',
        description: 'Unstyled, fully accessible UI components matching WCAG ARIA specifications'
      }
    ]
  },
  {
    name: 'Backend & APIs',
    description: 'Server-side runtimes, frameworks, and API protocols',
    technologies: [
      {
        name: 'Node.js',
        icon: '🟢',
        category: 'Backend',
        proficiency: 'Advanced',
        description: 'Server-side JavaScript runtime for highly concurrent architectures'
      },
      {
        name: 'Express.js',
        icon: '🚂',
        category: 'Backend',
        proficiency: 'Advanced',
        description: 'Minimalist web application framework for Node.js APIs'
      },
      {
        name: 'FastAPI',
        icon: '⚡',
        category: 'Backend',
        proficiency: 'Advanced',
        description: 'Modern, high-performance Python framework for building RESTful APIs'
      },
      {
        name: 'REST APIs',
        icon: '🔗',
        category: 'Backend',
        proficiency: 'Expert',
        description: 'Resource-oriented API design with schema validations and JWT/RBAC auth'
      },
      {
        name: 'Microservices',
        icon: '🧱',
        category: 'Backend',
        proficiency: 'Advanced',
        description: 'Distributed services architecture using module federation and decoupled APIs'
      }
    ]
  },
  {
    name: 'Databases & Storage',
    description: 'Data persistence, search engines, and query optimization',
    technologies: [
      {
        name: 'PostgreSQL',
        icon: '🐬',
        category: 'Database',
        proficiency: 'Advanced',
        description: 'Relational database profiled with EXPLAIN ANALYZE composite indexes'
      },
      {
        name: 'MongoDB',
        icon: '🍃',
        category: 'Database',
        proficiency: 'Advanced',
        description: 'NoSQL document database, certified in Schema Design Patterns'
      },
      {
        name: 'Redis',
        icon: '🔴',
        category: 'Database',
        proficiency: 'Advanced',
        description: 'In-memory caching layer for concurrent query latency cuts'
      },
      {
        name: 'Supabase',
        icon: '⚡',
        category: 'Database',
        proficiency: 'Advanced',
        description: 'BaaS database utilizing Row-Level Security policies and JWT'
      }
    ]
  },
  {
    name: 'AI & Agentic Systems',
    description: 'Generative AI frameworks, vector databases, and multi-agent RAG',
    technologies: [
      {
        name: 'LangGraph',
        icon: '🦜',
        category: 'AI',
        proficiency: 'Advanced',
        description: 'Stateful, multi-actor orchestration framework for ReAct agents'
      },
      {
        name: 'Agentic RAG',
        icon: '🧠',
        category: 'AI',
        proficiency: 'Advanced',
        description: 'Self-correcting document ingestion, embedding search, and LLM synthesis'
      },
      {
        name: 'pgvector',
        icon: '🗄️',
        category: 'AI',
        proficiency: 'Advanced',
        description: 'Vector similarity search and ANN indexing inside PostgreSQL'
      },
      {
        name: 'OpenAI API',
        icon: '🤖',
        category: 'AI',
        proficiency: 'Advanced',
        description: 'Integration of GPT text, embedding, and reasoning LLMs'
      }
    ]
  },
  {
    name: 'DevOps & Cloud',
    description: 'Cloud deployment, containerization, and automated pipelines',
    technologies: [
      {
        name: 'Docker',
        icon: '🐳',
        category: 'DevOps',
        proficiency: 'Advanced',
        description: 'Application containerization for reproducible environments'
      },
      {
        name: 'GitHub Actions',
        icon: '🐙',
        category: 'DevOps',
        proficiency: 'Advanced',
        description: 'CI/CD pipeline workflows implementing strict linters, tests, and deploys'
      },
      {
        name: 'AWS',
        icon: '☁️',
        category: 'DevOps',
        proficiency: 'Intermediate',
        description: 'Cloud computing infrastructure (Lambda, S3, EC2)'
      },
      {
        name: 'Vercel Edge',
        icon: '▲',
        category: 'DevOps',
        proficiency: 'Advanced',
        description: 'Global serverless Edge Runtime deployment for sub-200ms cold starts'
      },
      {
        name: 'Kubernetes',
        icon: '☸️',
        category: 'DevOps',
        proficiency: 'Intermediate',
        description: 'Orchestrating container deployment, scaling, and operations'
      }
    ]
  },
  {
    name: 'Quality & Testing',
    description: 'Code quality enforcement and testing suites',
    technologies: [
      {
        name: 'SonarQube',
        icon: '🛡️',
        category: 'Quality',
        proficiency: 'Advanced',
        description: 'Static analysis quality gates checking code smells and security hotspots'
      },
      {
        name: 'JUnit',
        icon: '☕',
        category: 'Quality',
        proficiency: 'Advanced',
        description: 'Java unit testing library targeting 80%+ path and branch coverage'
      },
      {
        name: 'Vitest',
        icon: '🧪',
        category: 'Quality',
        proficiency: 'Advanced',
        description: 'Blazing fast Vite-native testing framework for React components'
      },
      {
        name: 'React Testing Library',
        icon: '🐙',
        category: 'Quality',
        proficiency: 'Advanced',
        description: 'Testing React UI components from browser/user perspective'
      }
    ]
  }
]

export const explorer_data: TechCategory[] = [
  {
    name: 'AEO & Ecosystem Architecture',
    description: 'Modern Answer Engine Optimization and agentic mapping',
    technologies: [
      {
        name: 'JSON-LD',
        icon: '📊',
        category: 'AEO',
        proficiency: 'Expert',
        description: 'Structuring knowledge graph inputs.'
      },
      {
        name: 'Technical Writing',
        icon: '✍️',
        category: 'Thought Leadership',
        proficiency: 'Advanced',
        description: 'Building deep technical discourses.'
      }
    ]
  }
];

export const techCategories = [...software_data, ...explorer_data]
// Flatten all technologies for backward compatibility
export const allTechnologies = techCategories.flatMap(category => category.technologies)

// Get unique categories
export const categories = software_data.map(cat => cat.name)
