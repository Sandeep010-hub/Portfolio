export interface TimelineItem {
  id: string
  title: string
  organization: string
  location: string
  type: 'Education' | 'Internship' | 'Startup' | 'Club' | 'Experience'
  start: string
  end: string
  description: string
  icon: string
}

export const software_data: TimelineItem[] = [
  {
    id: 'independent-architect',
    title: 'Independent Software Architect',
    organization: 'Agentic Systems',
    location: 'Remote',
    type: 'Experience',
    start: 'Jan 2026',
    end: 'Present',
    description: 'Architecting multi-agent RAG systems with <200ms latency using Next.js 15 & FastAPI. Deploying fault-tolerant state management on AWS & Vercel Edge.',
    icon: '🔮',
  },
  {
    id: 'webortex-cto',
    title: 'Co-Founder & CTO',
    organization: 'WEBORTEX',
    location: 'Remote, India',
    type: 'Startup',
    start: 'Aug 2024',
    end: 'Dec 2025',
    description: 'Pioneered Micro-frontend (Module Federation) architecture, accelerating deployment by 40%. Integrated Gemini & Amazon Bedrock for AI-automated B2B content pipelines.',
    icon: '🚀',
  },
  {
    id: 'synxa-developer',
    title: 'Software Developer',
    organization: 'Synxa IT Pvt Ltd',
    location: 'Remote',
    type: 'Experience',
    start: 'Jan 2024',
    end: 'Jul 2024',
    description: 'Engineered secure user interfaces consuming RESTful APIs, implementing strict RBAC and JWT to protect data hierarchies. Optimized API query efficiency by 50%.',
    icon: '💻',
  },
  {
    id: 'bec-btech',
    title: 'B.Tech in Computer Science & Engineering',
    organization: 'Bapatla Engineering College',
    location: 'Andhra Pradesh, India',
    type: 'Education',
    start: '2023',
    end: '2026',
    description: 'Pursuing Bachelor of Technology in CSE.',
    icon: '🎓',
  },
  {
    id: 'svgp-diploma',
    title: 'Diploma in Computer Science & Technology',
    organization: 'Sri Venkateswara Government Polytechnic',
    location: 'Tirupati, India',
    type: 'Education',
    start: '2020',
    end: '2023',
    description: 'Completed diploma with distinction.',
    icon: '🎓',
  }
];

export const explorer_data: TimelineItem[] = [
  {
    id: 'aeo-researcher',
    title: 'AEO Researcher & Technical Writer',
    organization: 'Self-Directed / LinkedIn',
    location: 'Global',
    type: 'Experience',
    start: '2025',
    end: 'Present',
    description: 'Published 10-chapter AEO guide. Pioneering workflows moving from Jupyter notebooks to production-ready enterprise APIs.',
    icon: '✍️',
  }
];