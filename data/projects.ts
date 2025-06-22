export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile' | 'Client Project'
  role: string
  duration: string
  liveUrl?: string
  githubUrl?: string
  features: string[]
  challenges: string[]
  results: string[]
  featured: boolean
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'webortex-website',
    title: 'WEBORTEX Official Website',
    description: 'Official company website with SEO optimization and team onboarding features',
    longDescription: 'A comprehensive company website built for WEBORTEX, featuring modern design, SEO optimization, and integrated team management tools. As Founder & CTO, I led the technical development and deployment.',
    image: 'https://picsum.photos/400/300?random=1',
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'MongoDB'],
    category: 'Full Stack',
    role: 'Founder & CTO',
    duration: 'Aug 2023 - Present',
    liveUrl: 'https://webortex.com',
    githubUrl: 'https://github.com/webortex/website',
    features: [
      'SEO-optimized landing page with 98+ Lighthouse score',
      'Team onboarding and management system',
      'Client project showcase and portfolio',
      'Responsive design across all devices',
      'Admin dashboard for content management'
    ],
    challenges: [
      'Optimizing for search engines while maintaining design quality',
      'Implementing scalable team management features',
      'Ensuring fast load times with rich animations'
    ],
    results: [
      '50% increase in visitor retention',
      'Improved search engine rankings',
      'Streamlined client onboarding process'
    ],
    featured: true,
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'SEO', 'Team Management']
  },
  {
    id: '64-frames',
    title: '64 Frames Landing Page',
    description: 'High-conversion landing page for creative agency with smooth animations',
    longDescription: 'A high-conversion landing page designed for 64 Frames creative agency. Features smooth UX animations, responsive layouts, and optimized conversion elements to increase client engagement.',
    image: 'https://picsum.photos/400/300?random=2',
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    category: 'Frontend',
    role: 'Frontend Developer',
    duration: '1 month',
    liveUrl: 'https://64framez.com',
    githubUrl: 'https://github.com/yourusername/64-frames',
    features: [
      'High-conversion landing page design',
      'Smooth UX animations and transitions',
      'Mobile-first responsive design',
      'Performance optimized for fast loading',
      'Contact form and lead generation tools'
    ],
    challenges: [
      'Creating engaging animations without affecting performance',
      'Optimizing for mobile usability',
      'Implementing effective conversion elements'
    ],
    results: [
      'Increased client engagement and inquiries',
      'Improved mobile usability across devices',
      'Enhanced brand perception and professionalism'
    ],
    featured: true,
    tags: ['React', 'Tailwind CSS', 'Animation', 'Mobile-First', 'Conversion']
  },
  {
    id: 'restaurant-management',
    title: 'Restaurant Management System',
    description: 'Full-stack MERN application for restaurant operations with role-based access',
    longDescription: 'A comprehensive restaurant management system that enables customers to browse menus, place orders, and track delivery status. Features role-based access for admins and chefs with real-time order management.',
    image: 'https://picsum.photos/400/300?random=3',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    category: 'Full Stack',
    role: 'Full Stack Developer',
    duration: '3 months',
    liveUrl: 'https://restaurant-app-demo.vercel.app',
    githubUrl: 'https://github.com/yourusername/restaurant-management',
    features: [
      'Customer menu browsing and ordering system',
      'Real-time order tracking and notifications',
      'Role-based access control (Admin, Chef, Customer)',
      'Payment integration and order history',
      'Inventory management and analytics dashboard'
    ],
    challenges: [
      'Implementing real-time order updates',
      'Managing complex role-based permissions',
      'Optimizing database queries for performance'
    ],
    results: [
      'Reduced order processing time by 40%',
      'Improved customer satisfaction scores',
      'Streamlined kitchen operations'
    ],
    featured: true,
    tags: ['MERN Stack', 'Real-time', 'RBAC', 'Payment Integration', 'Analytics']
  },
  {
    id: 'ems-system',
    title: 'Employee Management System (EMS)',
    description: 'Spring Boot backend with React frontend for comprehensive employee management',
    longDescription: 'A complete employee management system built with Spring Boot backend and React frontend. Features CRUD operations, role-based access control, and secure authentication for managing employee records.',
    image: 'https://picsum.photos/400/300?random=4',
    technologies: ['Spring Boot', 'Java', 'React.js', 'MySQL', 'JWT'],
    category: 'Full Stack',
    role: 'Full Stack Developer',
    duration: '4 months',
    githubUrl: 'https://github.com/yourusername/employee-management',
    features: [
      'Complete employee CRUD operations',
      'Role-based access control (RBAC)',
      'Secure token-based authentication',
      'Employee performance tracking',
      'Department and hierarchy management'
    ],
    challenges: [
      'Implementing secure authentication system',
      'Designing efficient database schema',
      'Creating responsive admin interface'
    ],
    results: [
      'Reduced unauthorized access issues by 40%',
      'Improved data management efficiency',
      'Enhanced user experience for administrators'
    ],
    featured: false,
    tags: ['Spring Boot', 'Java', 'React', 'MySQL', 'Security']
  },
  {
    id: 'koinx-dashboard',
    title: 'Koinx Stock Analysis Dashboard',
    description: 'Real-time stock analysis dashboard with technical indicators and data visualization',
    longDescription: 'A comprehensive stock analysis dashboard that displays real-time market data with technical indicators. Built with modern charting libraries and external APIs for investment decision-making.',
    image: 'https://picsum.photos/400/300?random=5',
    technologies: ['React.js', 'Chart.js', 'Node.js', 'External APIs', 'WebSocket'],
    category: 'Frontend',
    role: 'Frontend Developer',
    duration: '2 months',
    githubUrl: 'https://github.com/yourusername/koinx-dashboard',
    features: [
      'Real-time stock price tracking',
      'Technical indicators and analysis tools',
      'Interactive charts and data visualization',
      'Portfolio tracking and performance metrics',
      'Market news and alerts integration'
    ],
    challenges: [
      'Integrating multiple external APIs',
      'Optimizing chart performance with large datasets',
      'Implementing real-time data updates'
    ],
    results: [
      'Provided valuable insights for investment decisions',
      'Improved data visualization and user experience',
      'Enhanced market analysis capabilities'
    ],
    featured: false,
    tags: ['React', 'Chart.js', 'Real-time', 'APIs', 'Data Visualization']
  },
  {
    id: 'inside-journal',
    title: 'Inside Journal – Client Project',
    description: 'Client project for journal publishing platform with custom UI and blog management',
    longDescription: 'A custom journal publishing platform built for a client with specific requirements. Features responsive design, blog management capabilities, and SEO optimizations for better content discovery.',
    image: 'https://picsum.photos/400/300?random=6',
    technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'SEO'],
    category: 'Client Project',
    role: 'Lead Developer',
    duration: '3 months',
    liveUrl: 'https://insidejournal.netlify.app',
    githubUrl: 'https://github.com/yourusername/inside-journal',
    features: [
      'Custom journal publishing interface',
      'Blog management and content creation tools',
      'SEO optimization for better search visibility',
      'Responsive design for all devices',
      'Author management and collaboration features'
    ],
    challenges: [
      'Meeting specific client requirements and design preferences',
      'Implementing SEO best practices',
      'Ensuring responsive design across devices'
    ],
    results: [
      'Successfully delivered client project on time',
      'Improved search engine visibility',
      'Enhanced user engagement and content discovery'
    ],
    featured: false,
    tags: ['Client Project', 'React', 'Tailwind CSS', 'SEO', 'Content Management']
  },
  {
    id: 'job-bridge',
    title: 'Job Bridge – Career Platform',
    description: 'Student portfolio platform bridging education-to-employment gap with AI guidance',
    longDescription: 'A full-stack platform designed to help students showcase their projects and receive AI-based career guidance. The platform bridges the gap between education and employment through project portfolios and personalized recommendations.',
    image: 'https://picsum.photos/400/300?random=7',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'AI Integration'],
    category: 'Full Stack',
    role: 'Lead Developer',
    duration: 'Ongoing',
    githubUrl: 'https://github.com/yourusername/job-bridge',
    features: [
      'Student project portfolio creation and management',
      'AI-powered career guidance and recommendations',
      'Project timeline tracking and progress visualization',
      'Employer-student matching system',
      'Skill assessment and learning path recommendations'
    ],
    challenges: [
      'Integrating AI services for career guidance',
      'Designing scalable user authentication system',
      'Creating intuitive project management interface'
    ],
    results: [
      'Helped 100+ students create professional portfolios',
      'Improved student-employer matching efficiency',
      'Enhanced career readiness for participants'
    ],
    featured: true,
    tags: ['Next.js', 'TypeScript', 'AI', 'Career Platform', 'Education']
  }
]

export const featuredProjects = projects.filter(project => project.featured)
export const allProjects = projects

// Get unique tags for filtering
export const allTags = Array.from(new Set(projects.flatMap(project => project.tags))) 