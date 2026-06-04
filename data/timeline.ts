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
    title: 'Freelance Full Stack Software Developer',
    organization: 'Independent Client Work',
    location: 'Remote',
    type: 'Experience',
    start: 'Jan 2026',
    end: 'Present',
    description: 'Engaged across all phases of the SDLC — design, development, testing, release, and production support — for full-stack React and Node.js web applications.\n• Prototyped a LangGraph document Q&A tool in a 2-week sprint, iterating to meet latency and accuracy targets.\n• Configured GitHub Actions CI/CD and Docker containerisation, replacing manual deploys with single git push.',
    icon: '🔮',
  },
  {
    id: 'webortex-cto',
    title: 'Technical Co-Founder & Lead Software Developer',
    organization: 'WEBORTEX',
    location: 'Remote',
    type: 'Startup',
    start: 'Jul 2024',
    end: 'Dec 2025',
    description: 'Collaborated with stakeholders to ship full-stack Node.js + Express back-ends and React 18 front-ends for B2B clients.\n• Integrated Gemini API and Amazon Bedrock in serverless back-ends, automating content workflows.\n• Built micro-frontend architecture using React 18 + Module Federation, reducing deployment cycle times by 40%.\n• Automated delivery pipeline reducing project delivery cycles from ~10 weeks to ~4 weeks.',
    icon: '🚀',
  },
  {
    id: 'synxa-developer',
    title: 'Backend Software Developer',
    organization: 'Synxa IT Pvt Ltd',
    location: 'Remote',
    type: 'Experience',
    start: 'Jan 2024',
    end: 'Jul 2024',
    description: 'Owned backend systems and RBAC security modules for flagship enterprise EMS product.\n• Profiled and rewrote 4 endpoints using EXPLAIN ANALYZE, reducing PostgreSQL response time from 420ms to 210ms (50% improvement).\n• Maintained code quality via SonarQube static analysis and JUnit (80%+ branch coverage).',
    icon: '💻',
  },
  {
    id: 'synxa-intern',
    title: 'Web Developer Intern',
    organization: 'Synxa IT Pvt Ltd',
    location: 'Remote',
    type: 'Internship',
    start: 'May 2023',
    end: 'Jan 2024',
    description: 'Contributed to design, code implementation, and testing of MERN-stack applications.\n• Delivered 8 React UI components from Figma specs (UX/UI design handoff) with 6 of 8 passing design review on first submission.\n• Built RESTful APIs with schema-validation middleware, maintaining 99.9% uptime by intercepting invalid payloads.',
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
    description: 'Pursuing B.Tech in Computer Science & Engineering (2026 batch, CGPA: 8.22/10). Available to join immediately upon graduation.',
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
    description: 'Completed diploma in Computer Science & Technology with distinction (CGPA: 8.9/10).',
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
    description: 'Pioneering the Answer Engine Optimization (AEO) frontier. Structured a 10-chapter architectural guide on how large language models parse semantic web components.',
    icon: '✍️',
  }
];