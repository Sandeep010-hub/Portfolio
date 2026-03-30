'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const insights = [
  {
    category: 'Architecture',
    title: 'Notebooks vs Production',
    date: 'Mar 15, 2026',
    likes: '1.2k',
    content: 'Jupyter is for proving it works. Next.js + FastAPI + AWS is for proving it scales. Stop presenting fragile prototypes to investors when they ask for a product.',
    link: 'https://www.linkedin.com/posts/yaswanth-sai-sandeep-kalagatla-655416243_ai-engineersinfluencing-in-2026-i-built-activity-7441462112901636096-G3o6?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxlXSEBaEPOFY8SEA0iJwgbZud-A1NxwNI'
  },
  {
    category: 'Strategy',
    title: 'The AEO Paradigm Shift',
    date: 'Feb 28, 2026',
    likes: '850',
    content: 'If your site relies purely on keywords, Perplexity will never cite you. You need structured entity maps, extremely dense semantic HTML, and rapid time-to-value.',
    link: 'https://www.linkedin.com/posts/yaswanth-sai-sandeep-kalagatla-655416243_aisearch-seoevolution-geo-activity-7388832633679564800-H2UP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxlXSEBaEPOFY8SEA0iJwgbZud-A1NxwNI'
  },
  {
    category: 'AI Agents',
    title: 'Stop arguing over Python vs. Java',
    date: 'MAR 14, 2026',
    likes: '2.4k',
    content: 'In 2026, choosing a tech stack is not about finding the "best" language anymore. Honestly? AI can write decent code in almost any language now.',
    link: 'https://www.linkedin.com/posts/yaswanth-sai-sandeep-kalagatla-655416243_systemarchitecture-fullstack-nodejs-activity-7438450600260055041-DR6H?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxlXSEBaEPOFY8SEA0iJwgbZud-A1NxwNI'
  }
]

const LinkedInInsights = () => {
  return (
    <section id="insights" className="py-24 bg-[oklch(15%_0.01_250)] relative z-10 border-t border-white/5">
      <div className="container-max px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-4">
              LinkedIn <span className="font-semibold text-blue-500">Insights</span>
            </h2>
            <p className="text-gray-400 max-w-lg font-light tracking-wide">
              Selected essays on modern architecture, agentic AI, and scaling engineering orgs.
            </p>
          </div>
          <motion.a
            href="https://www.linkedin.com/in/yaswanth-sai-sandeep-kalagatla-655416243/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="hidden md:flex items-center gap-2 text-sm font-semibold tracking-widest text-blue-500 uppercase hover:text-blue-400 transition-colors"
          >
            Deploy Full Feed <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((post, idx) => (
            <motion.a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors shadow-2xl relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-4">{post.category}</div>
              <h3 className="text-2xl font-light text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow">
                {post.content}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500 font-mono mt-auto">
                <span>{post.date}</span>
                <span className="flex items-center gap-1 group-hover:text-blue-400 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg>
                  {post.likes}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <motion.a
            href="https://www.linkedin.com/in/yaswanth-sai-sandeep-kalagatla-655416243/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-blue-500 uppercase hover:text-blue-400 transition-colors"
          >
            Deploy Full Feed <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default LinkedInInsights
