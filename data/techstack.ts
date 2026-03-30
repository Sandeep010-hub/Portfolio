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
    name: 'Frontend Development',
    description: 'Modern frontend technologies and frameworks',
    technologies: [
      {
        name: 'React.js',
        icon: '⚛️',
        category: 'Frontend',
        proficiency: 'Advanced',
        description: 'Component-based UI library for building interactive user interfaces'
      },
      {
        name: 'Next.js',
        icon: '▲',
        category: 'Frontend',
        proficiency: 'Advanced',
        description: 'React framework for production with SSR, SSG, and API routes'
      },
      {
        name: 'TypeScript',
        icon: '📘',
        category: 'Frontend',
        proficiency: 'Advanced',
        description: 'Typed superset of JavaScript for better development experience'
      },
      {
        name: 'Tailwind CSS',
        icon: '🎨',
        category: 'Frontend',
        proficiency: 'Expert',
        description: 'Utility-first CSS framework for rapid UI development'
      },
      {
        name: 'Framer Motion',
        icon: '✨',
        category: 'Frontend',
        proficiency: 'Advanced',
        description: 'Production-ready motion library for React animations'
      },
      {
        name: 'HTML5',
        icon: '🌐',
        category: 'Frontend',
        proficiency: 'Expert',
        description: 'Semantic markup language for web content structure'
      },
      {
        name: 'CSS3',
        icon: '🎯',
        category: 'Frontend',
        proficiency: 'Expert',
        description: 'Advanced styling and layout capabilities for web design'
      }
    ]
  },
  {
    name: 'Backend Development',
    description: 'Server-side technologies and frameworks',
    technologies: [
      {
        name: 'Node.js',
        icon: '🟢',
        category: 'Backend',
        proficiency: 'Advanced',
        description: 'JavaScript runtime for server-side development'
      },
      {
        name: 'Express.js',
        icon: '🚂',
        category: 'Backend',
        proficiency: 'Advanced',
        description: 'Minimal and flexible Node.js web application framework'
      },
      {
        name: 'Java',
        icon: '☕',
        category: 'Backend',
        proficiency: 'Intermediate',
        description: 'Object-oriented programming language for enterprise applications'
      },
      {
        name: 'Python',
        icon: '🐍',
        category: 'Backend',
        proficiency: 'Intermediate',
        description: 'Versatile programming language for web development and automation'
      }
    ]
  },
  {
    name: 'Database & Storage',
    description: 'Data persistence and management solutions',
    technologies: [
      {
        name: 'MongoDB',
        icon: '🍃',
        category: 'Database',
        proficiency: 'Advanced',
        description: 'NoSQL document database for flexible data storage'
      },
      {
        name: 'MySQL',
        icon: '🐬',
        category: 'Database',
        proficiency: 'Intermediate',
        description: 'Relational database management system'
      },
      {
        name: 'Redis',
        icon: '🔴',
        category: 'Database',
        proficiency: 'Intermediate',
        description: 'In-memory data structure store for caching and sessions'
      }
    ]
  },
  {
    name: 'DevOps & Deployment',
    description: 'Development operations and cloud deployment',
    technologies: [
      {
        name: 'Git',
        icon: '📚',
        category: 'DevOps',
        proficiency: 'Advanced',
        description: 'Distributed version control system for code management'
      },
      {
        name: 'GitHub',
        icon: '🐙',
        category: 'DevOps',
        proficiency: 'Advanced',
        description: 'Platform for version control and collaboration'
      },
      {
        name: 'Docker',
        icon: '🐳',
        category: 'DevOps',
        proficiency: 'Intermediate',
        description: 'Containerization platform for application deployment'
      },
      {
        name: 'Vercel',
        icon: '▲',
        category: 'DevOps',
        proficiency: 'Advanced',
        description: 'Platform for deploying frontend applications'
      },
      {
        name: 'Netlify',
        icon: '🌐',
        category: 'DevOps',
        proficiency: 'Advanced',
        description: 'Web development platform for static sites and JAMstack'
      },
      {
        name: 'AWS',
        icon: '☁️',
        category: 'DevOps',
        proficiency: 'Intermediate',
        description: 'Cloud computing platform for scalable infrastructure'
      }
    ]
  },
  {
    name: 'Tools & Libraries',
    description: 'Development tools and utility libraries',
    technologies: [
      {
        name: 'Chart.js',
        icon: '📊',
        category: 'Tools',
        proficiency: 'Advanced',
        description: 'JavaScript charting library for data visualization'
      },
      {
        name: 'D3.js',
        icon: '📈',
        category: 'Tools',
        proficiency: 'Intermediate',
        description: 'Data-driven documents for dynamic data visualization'
      },
      {
        name: 'JWT',
        icon: '🔐',
        category: 'Tools',
        proficiency: 'Advanced',
        description: 'JSON Web Tokens for secure authentication'
      },
      {
        name: 'REST APIs',
        icon: '🔗',
        category: 'Tools',
        proficiency: 'Advanced',
        description: 'Architectural style for designing networked applications'
      },
      {
        name: 'WebSocket',
        icon: '🔌',
        category: 'Tools',
        proficiency: 'Intermediate',
        description: 'Protocol for real-time bidirectional communication'
      },
      {
        name: 'Postman',
        icon: '📮',
        category: 'Tools',
        proficiency: 'Advanced',
        description: 'API development and testing platform'
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
