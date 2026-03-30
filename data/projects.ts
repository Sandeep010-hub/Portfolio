export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile' | 'Client Project' | 'AI Integration' | 'Research'
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

export const software_data: Project[] = [
  {
    id: 'raglens-ai',
    title: 'RAGLens AI',
    description: 'Enterprise-grade Agentic RAG system for high-concurrency real-time AI data visualization.',
    longDescription: 'Architected a distributed knowledge engine using FastAPI and LangGraph to process unstructured data with 98% accuracy[cite: 134, 181]. Optimized for high availability and fault-tolerant data retrieval in production environments[cite: 107, 157].',
    image: '/RAGLens-ai.png',
    technologies: ['FastAPI', 'Next.js 15', 'LangGraph', 'PostgreSQL', 'Python'],
    category: 'AI Integration',
    role: 'Lead Full-Stack Developer',
    duration: 'Jan 2026 - Present',
    githubUrl: 'https://github.com/Sandeep010-hub/RAGLens_AI',
    features: ['Multi-agent orchestration', 'Sub-200ms latency [cite: 106, 158]', 'Context-aware retrieval'],
    challenges: ['Maintaining 99.9% uptime [cite: 108, 158]', 'Vector search optimization'],
    results: ['98% data accuracy [cite: 134, 181]', 'Sub-200ms real-time interaction [cite: 106, 158]'],
    featured: true,
    tags: ['Agentic RAG', 'AI Architecture', 'FastAPI']
  },
  {
    id: 'promptcraft-fusion',
    title: 'PromptCraft Fusion',
    description: 'Cloud-integrated AI platform utilizing serverless Edge Functions for 5x prompt quality improvement[cite: 126, 177].',
    longDescription: 'Engineered an AI-Native platform using Supabase Edge Functions and Gemini API[cite: 124, 175]. Optimized high-latency retrieval via advanced caching and multimodal storage for sub-second performance[cite: 127, 178].',
    image: '/prompt-craft.png',
    technologies: ['Next.js 15', 'Supabase', 'Gemini API', 'TypeScript', 'Edge Functions'],
    category: 'AI Integration',
    role: 'Full-Stack Architect',
    duration: 'Aug 2025 - Present',
    githubUrl: 'https://github.com/Sandeep010-hub/promptcraft-fusion',
    liveUrl: 'https://promptcraft-fusion.netlify.app/',
    features: ['Automated prompt scoring', 'Multimodal caching [cite: 127, 178]', 'RBAC security [cite: 120, 171]'],
    challenges: ['Mitigating rendering blocks', 'Serverless state scaling'],
    results: ['5x quality improvement [cite: 126, 177]', 'Sub-second performance [cite: 127, 178]'],
    featured: true,
    tags: ['Generative AI', 'Serverless', 'Supabase']
  },
  {
    id: 'elite-construction',
    title: 'Elite Construction & Design',
    description: 'High-performance responsive platform with 95+ Lighthouse scores[cite: 130, 185].',
    longDescription: 'Architected a world-class responsive platform achieving top-tier performance through code-splitting and lazy-loading, reducing initial bundle size by 40%[cite: 131, 186].',
    image: '/elite.png',
    technologies: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS'],
    category: 'Frontend',
    role: 'Lead Front-end Architect',
    duration: 'Aug 2025 - Present',
    githubUrl: 'https://github.com/Sandeep010-hub/eliteConstructer',
    liveUrl: 'https://eliteconstruct.netlify.app',
    features: ['95+ Lighthouse score [cite: 130, 185]', 'Multi-step quote form', 'Accessibility-first (ARIA) [cite: 130, 185]'],
    challenges: ['Bundle size optimization [cite: 131, 186]', 'Complex form state'],
    results: ['40% bundle size reduction [cite: 131, 186]', 'Enhanced lead conversion'],
    featured: true,
    tags: ['Performance', 'Accessibility', 'UI/UX']
  },
  {
    id: 'kiritara-resort',
    title: 'Kiritara Resort',
    description: 'Premium hospitality web presence featuring high-fidelity visual storytelling.',
    longDescription: 'Developed a high-performance hospitality platform focused on luxury aesthetics and seamless user conversion.',
    image: '/kiritara.png',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    category: 'Client Project',
    role: 'Lead UI/UX Designer',
    duration: '2025',
    liveUrl: 'https://kiritararesort.com/',
    features: ['High-fidelity visual gallery', 'SEO-optimized architecture', 'Booking UI integration'],
    challenges: ['High-res image optimization', 'Brand aesthetic maintenance'],
    results: ['Production-ready launch', 'Improved mobile booking flow'],
    featured: true,
    tags: ['Hospitality', 'Client Work', 'Branding']
  },
  {
    id: 'parallax-archive',
    title: 'Archive Insight',
    description: 'Advanced Semantic Analysis platform with an interactive Physics-based UI[cite: 9].',
    longDescription: 'Leverages a Semantic Analysis Engine to detect idea-level duplication and assess project novelty[cite: 4]. Features a dynamic Particle Canvas Hero and Bento Grid explorer[cite: 9, 10].',
    image: '/parallax.png',
    technologies: ['React 18', 'TypeScript', 'Python', 'NLP', 'Canvas API'],
    category: 'Research',
    role: 'Senior Front-end Architect',
    duration: '2025 - 2026',
    liveUrl: 'https://parallax-thread.vercel.app',
    githubUrl: 'https://github.com/Sandeep010-hub/archive-insight',
    features: ['Semantic Layer Analysis [cite: 6]', 'Particle Physics UI [cite: 9]', 'Originality Scoring [cite: 11]'],
    challenges: ['Idea-level duplication detection [cite: 4]', 'Canvas performance'],
    results: ['Transparent audit experience [cite: 5]', 'Explainable AI scoring [cite: 5]'],
    featured: true,
    tags: ['Data Viz', 'Academic Tech', 'Semantic UI']
  },
  {
    id: '64framez',
    title: '64Framez Portfolio',
    description: 'High-performance creative agency presence with 70% load speed improvement[cite: 124].',
    longDescription: 'Architected a visually striking presence for a media agency using lazy loading and Intersection Observer API to maximize engagement[cite: 124].',
    image: '/64Framez.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Intersection Observer'],
    category: 'Client Project',
    role: 'Lead Front-end Architect',
    duration: '2024',
    liveUrl: 'https://64frames.com',
    features: ['Lazy loading optimization [cite: 124]', 'Intersection Observer animations [cite: 124]', '95+ Lighthouse score [cite: 124]'],
    challenges: ['High-res media balancing'],
    results: ['70% load speed improvement [cite: 124]', 'Premium brand reputation'],
    featured: true,
    tags: ['Creative Agency', 'Performance', 'SEO']
  },
  {
    id: 'webortex-official',
    title: 'Webortex Official',
    description: 'Corporate sales engine driving a 200% increase in inbound acquisition[cite: 113, 164].',
    longDescription: 'The primary digital presence for Webortex, built with a laser focus on technical SEO and inbound lead generation[cite: 113, 164].',
    image: '/webortex.png',
    technologies: ['Next.js', 'Node.js', 'Headless CMS'],
    category: 'Full Stack',
    role: 'Lead Product Engineer',
    duration: '2024 - 2025',
    liveUrl: 'https://webortex.com',
    features: ['Technical SEO architecture [cite: 113, 164]', 'SSR performance', 'Headless CMS'],
    challenges: ['Scaling inbound conversion'],
    results: ['200% acquisition growth [cite: 113, 164]', 'Market leader positioning'],
    featured: true,
    tags: ['SaaS', 'Marketing Tech', 'Next.js']
  }
];

export const explorer_data: Project[] = [
  {
    id: 'aeo-research',
    title: 'AEO & GEO Search Engine Optimization',
    description: 'Pioneered contextual Answer Engine Optimization (AEO) strategies shifting traditional paradigms.',
    longDescription: 'Conducted rigorous research into Generative Engine Optimization, structuring a 10-chapter architectural guide on how large language models parse semantic web components. This research dictates how AI-native sites construct their unstructured data.',
    image: '/webortex.png',
    technologies: ['SEO/GEO Analysis', 'Semantic HTML', 'JSON-LD', 'Next.js'],
    category: 'Research',
    role: 'Thought Leader & Architect',
    duration: '2025',
    liveUrl: 'https://webortex.com',
    githubUrl: '',
    features: [
      'Data modeling for Knowledge Graph injection',
      'Structuring multi-step agentic SEO tasks'
    ],
    challenges: [
      'Adapting to constant algorithmic shifts in OpenAI and Gemini scraping methodologies'
    ],
    results: [
      'Positioned Webortex at the absolute forefront of AI-powered search methodologies',
      'Successfully indexed high-priority client pages into top Perplexity and Gemini responses'
    ],
    featured: true,
    tags: ['AEO', 'Semantic Web', 'Research']
  },
  {
    id: 'linkedin-thought-leadership',
    title: 'System Orchestration Discourse',
    description: 'Driving industry debates on Microservices, Agentic workflows, and Notebook-to-Production transitions.',
    longDescription: 'Curating a highly engaged digital community analyzing the transition of AI from Jupyter Notebook prototypes to scalable FastAPI production environments, emphasizing orchestration over raw coding.',
    image: '/insideJournal.png',
    technologies: ['Technical Writing', 'DevOps Advocacy', 'System Design'],
    category: 'Research',
    role: 'Thought Leader',
    duration: 'Ongoing',
    liveUrl: 'https://www.linkedin.com/in/yaswanth-sai-sandeep-kalagatla-655416243/',
    githubUrl: '',
    features: [
      'Analyzing and debating deterministic vs probabilistic system architectures',
      'Publishing The Agent Architect analyses on OpenAI paradigms'
    ],
    challenges: [
      'Bridging the uncomfortable gap between data science prototypes and engineering realities'
    ],
    results: [
      'Cultivated an engaged audience, shifting perspectives toward production-grade engineering',
      'Defined strict frameworks distinguishing true AI Agents from standard software'
    ],
    featured: true,
    tags: ['Thought Leadership', 'Cloud Architecture', 'System Design']
  }
];

export const projects: Project[] = [...software_data, ...explorer_data];

export const featuredProjects = projects.filter(project => project.featured);
export const allProjects = projects;

// Get unique tags for filtering
export const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));