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
    description: 'Multi-Agent RAG System over ~8,000 unstructured documents with LangGraph orchestration.',
    longDescription: 'Designed and developed a production-grade intelligent search system end-to-end. Leverages a LangGraph ReAct multi-actor orchestration flow to perform document ingestion, chunk embedding, pgvector ANN search, LLM synthesis, and source-cited response generation.',
    image: '/RAGLens-ai.png',
    technologies: ['Python', 'Node.js', 'FastAPI', 'PostgreSQL (pgvector)', 'Redis', 'React 18'],
    category: 'AI Integration',
    role: 'Lead Full-Stack Developer',
    duration: 'Jan 2026 - Present',
    githubUrl: 'https://github.com/Sandeep010-hub/RAGLens_AI',
    features: [
      'LangGraph ReAct multi-agent orchestration',
      'pgvector ANN similarity search over ~8,000 documents',
      'Harness evaluating 50 semantic query pairs'
    ],
    challenges: [
      'Mitigating retrieval precision@3 failures',
      'Scaling concurrent request latencies'
    ],
    results: [
      'Redis cache-hit rate of 73%, cutting latency from 1.8s to 0.4s',
      'Retrieval precision@3 improved from 0.64 to 0.81'
    ],
    featured: true,
    tags: ['LangGraph', 'Agentic RAG', 'FastAPI', 'pgvector']
  },
  {
    id: 'promptcraft-fusion',
    title: 'PromptCraft Fusion',
    description: 'AI-Enabled SaaS platform utilizing serverless Edge Functions for prompt benchmarking.',
    longDescription: 'Full-stack SaaS platform built for LLM prompt versioning, A/B testing, and performance benchmarking. Optimized latency-critical routes via Vercel Edge Functions vs Node.js serverless comparison.',
    image: '/prompt-craft.png',
    technologies: ['Next.js 15', 'TypeScript', 'Supabase', 'Vercel Edge Functions', 'Node.js'],
    category: 'AI Integration',
    role: 'Full-Stack Architect',
    duration: 'Aug 2025 - Present',
    githubUrl: 'https://github.com/Sandeep010-hub/promptcraft-fusion',
    liveUrl: 'https://promptcraft-fusion.netlify.app/',
    features: [
      'LLM prompt versioning and A/B benchmarking',
      'Supabase row-level security and JWT user isolation',
      'Edge Functions vs Node.js serverless benchmarking'
    ],
    challenges: [
      'Diagnosing browser-side performance bottlenecks',
      'Managing cold start constraints'
    ],
    results: [
      'Vercel Edge cold-starts reduced to ~180ms vs 1.1s',
      'Lighthouse score improved from 61 to 94 via route-level code-splitting',
      'Zero runtime type errors across 3 months of production'
    ],
    featured: true,
    tags: ['Next.js', 'Vercel Edge', 'Supabase', 'SaaS']
  },
  {
    id: 'elite-construction',
    title: 'Elite Construction & Design',
    description: 'High-performance responsive platform built from Figma specs with 90+ Lighthouse scores.',
    longDescription: 'Designed and built a high-performance web application in React 18 + TypeScript, collaborating from Figma specs (UX/UI design handoff) through the full product feature development lifecycle to production. Implemented object-oriented component architecture.',
    image: '/elite.png',
    technologies: ['React 18', 'TypeScript', 'Node.js', 'Tailwind CSS', 'GitHub Actions'],
    category: 'Frontend',
    role: 'Lead Front-end Architect',
    duration: 'Aug 2025 - Present',
    githubUrl: 'https://github.com/Sandeep010-hub/eliteConstructer',
    liveUrl: 'https://eliteconstruct.netlify.app',
    features: [
      'UI/UX design handoff from Figma specifications',
      'WCAG 2.1 compliance (ARIA, focus state management)',
      'GitHub Actions automated lint & compile testing'
    ],
    challenges: [
      'Enforcing strict cross-browser compatibility',
      'Handling responsive layout structures'
    ],
    results: [
      'Lighthouse scores of 90+ across Performance, Accessibility, and SEO',
      'Zero manual deploy steps from git commit to Netlify production',
      'Unit & integration testing verified via Vitest and Testing Library'
    ],
    featured: true,
    tags: ['React 18', 'TypeScript', 'Figma Handoff', 'CI/CD']
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
    description: 'Advanced Semantic Analysis platform with an interactive Physics-based UI.',
    longDescription: 'Leverages a Semantic Analysis Engine to detect idea-level duplication and assess project novelty. Features a dynamic Particle Canvas Hero and Bento Grid explorer.',
    image: '/parallax.png',
    technologies: ['React 18', 'TypeScript', 'Python', 'NLP', 'Canvas API'],
    category: 'Research',
    role: 'Senior Front-end Architect',
    duration: '2025 - 2026',
    liveUrl: 'https://parallax-thread.vercel.app',
    githubUrl: 'https://github.com/Sandeep010-hub/archive-insight',
    features: ['Semantic Layer Analysis', 'Particle Physics UI', 'Originality Scoring'],
    challenges: ['Idea-level duplication detection', 'Canvas performance'],
    results: ['Transparent audit experience', 'Explainable AI scoring'],
    featured: true,
    tags: ['Data Viz', 'Academic Tech', 'Semantic UI']
  },
  {
    id: '64framez',
    title: '64Framez Portfolio',
    description: 'High-performance creative agency presence with 70% load speed improvement.',
    longDescription: 'Architected a visually striking presence for a media agency using lazy loading and Intersection Observer API to maximize engagement.',
    image: '/64Framez.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Intersection Observer'],
    category: 'Client Project',
    role: 'Lead Front-end Architect',
    duration: '2024',
    liveUrl: 'https://64frames.com',
    features: ['Lazy loading optimization', 'Intersection Observer animations', '95+ Lighthouse score'],
    challenges: ['High-res media balancing'],
    results: ['70% load speed improvement', 'Premium brand reputation'],
    featured: true,
    tags: ['Creative Agency', 'Performance', 'SEO']
  },
  {
    id: 'webortex-official',
    title: 'Webortex Official',
    description: 'Corporate sales engine driving a 200% increase in inbound acquisition.',
    longDescription: 'The primary digital presence for Webortex, built with a laser focus on technical SEO and inbound lead generation.',
    image: '/webortex.png',
    technologies: ['Next.js', 'Node.js', 'Headless CMS'],
    category: 'Full Stack',
    role: 'Lead Product Engineer',
    duration: '2024 - 2025',
    liveUrl: 'https://webortex.com',
    features: ['Technical SEO architecture', 'SSR performance', 'Headless CMS'],
    challenges: ['Scaling inbound conversion'],
    results: ['200% acquisition growth', 'Market leader positioning'],
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