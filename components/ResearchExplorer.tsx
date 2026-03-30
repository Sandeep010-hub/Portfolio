'use client'

import { motion } from 'framer-motion'

const chapters = [
  { id: 1, title: 'Chapter 1: The AI Paradigm Shift', snippet: 'Understanding why traditional SEO is dying and how Answer Engines are rewriting the rules of intent.', link: 'https://drive.google.com/file/d/1X5u8g_sH8W9' },
  { id: 2, title: 'Chapter 2: Anatomy of an Answer Engine', snippet: 'Deconstructing Perplexity and SearchGPT. How LLMs synthesize context vs merely retrieving links.', link: 'https://drive.google.com/file/d/1X5u8g_sH8W9' },
  { id: 3, title: 'Chapter 3: Structuring for Agents', snippet: 'The critical role of Knowledge Graphs and deep semantic HTML in feeding autonomous scrapers.', link: 'https://drive.google.com/file/d/1X5u8g_sH8W9' },
  { id: 4, title: 'Chapter 4: The Trust Layer', snippet: 'Why citation engineering and verifiable authority are the new backlinks in the AEO frontier.', link: 'https://drive.google.com/file/d/1X5u8g_sH8W9' },
  { id: 5, title: 'Chapter 5: Multi-Agent RAG', snippet: 'Architecting your dataset to be seamlessly ingested by federated agent networks.', link: 'https://drive.google.com/file/d/1X5u8g_sH8W9' },
  { id: 6, title: 'Chapter 6: AEO vs SEO Metrics', snippet: 'Throwing away click-through rates. Measuring zero-click dominance and brand entity sentiment.', link: 'https://drive.google.com/file/d/1X5u8g_sH8W9' },
  { id: 7, title: 'Chapter 7: Production Prototypes', snippet: 'Moving from Jupyter notebooks to highly available, low-latency agentic APIs.', link: 'https://drive.google.com/file/d/1X5u8g_sH8W9' },
  { id: 8, title: 'Chapter 8: Conversational UX', snippet: 'Designing interfaces where the user talks to your data rather than scrolling through it.', link: 'https://drive.google.com/file/d/1X5u8g_sH8W9' },
  { id: 9, title: 'Chapter 9: Edge Optimization', snippet: 'Running lightweight embedding models directly on Vercel Edge for sub-100ms vector search.', link: 'https://drive.google.com/file/d/1X5u8g_sH8W9' },
  { id: 10, title: 'Chapter 10: The 2026 Blueprint', snippet: 'Synthesizing the entire architectural pivot required to survive the Answer Engine era.', link: 'https://drive.google.com/file/d/1X5u8g_sH8W9' }
]

const ResearchExplorer = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="mb-20 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
          <span className="font-semibold text-amber-500">AEO</span> Chapter Archive
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg editorial-text">
          A definitive, 10-part exposition on transitioning from legacy Search Engine operations to Agentic Answer Engine architecture.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 editorial-layout relative z-10">
        {chapters.map((chapter, index) => (
          <motion.a
            href={chapter.link}
            target="_blank"
            rel="noopener noreferrer"
            key={chapter.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 3) * 0.1, duration: 0.7 }}
            className={`block break-inside-avoid glass-card rounded-xl p-8 border border-white/5 hover:border-amber-500/30 transition-all group ${index % 2 === 0 ? 'ml-0 md:-ml-4' : 'ml-0 md:ml-4'}`}
            style={{ marginTop: index % 3 === 1 ? '3rem' : '0' }}
          >
            <div className="text-amber-500/50 text-sm font-mono mb-4 tracking-widest">VOL. {chapter.id < 10 ? `0${chapter.id}` : chapter.id}</div>
            <h3 className="text-2xl font-light text-gray-100 mb-4 group-hover:text-amber-400 transition-colors leading-snug">
              {chapter.title.split(': ')[1] || chapter.title}
            </h3>
            <p className="text-gray-400 leading-relaxed font-light text-sm">
              {chapter.snippet}
            </p>
            <div className="mt-8 flex items-center text-xs tracking-widest text-amber-500 font-semibold uppercase opacity-0 group-hover:opacity-100 transition-opacity">
              Read Chapter <span className="ml-2">→</span>
            </div>
          </motion.a>
        ))}
      </div>
      <style jsx>{`
        .editorial-text {
          letter-spacing: 0.02em;
        }
        .glass-card {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>
    </section>
  )
}

export default ResearchExplorer
