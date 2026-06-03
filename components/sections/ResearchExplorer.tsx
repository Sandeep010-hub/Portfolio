'use client'

import { motion } from 'framer-motion'

const chapters = [
  { id: 1, title: 'Chapter 1: The AI Paradigm Shift', snippet: 'Understanding why traditional SEO is dying and how Answer Engines are rewriting the rules of intent.', link: 'https://drive.google.com/file/d/14v7ROVlaFHQS3K3yW9qxJ4ghFACtY2js/view?usp=sharing' },
  { id: 2, title: 'Chapter 2: Anatomy of an Answer Engine', snippet: 'Deconstructing Perplexity and SearchGPT. How LLMs synthesize context vs merely retrieving links.', link: 'https://drive.google.com/file/d/1B1oFgHtCFbaW5A-Mso0TWuJWYmghOX-O/view?usp=sharing' },
  { id: 3, title: 'Chapter 3: Structuring for Agents', snippet: 'The critical role of Knowledge Graphs and deep semantic HTML in feeding autonomous scrapers.', link: 'https://drive.google.com/file/d/1GvDkQiWJUgYkRb4FMsAHBrEpaA9hpWd3/view?usp=sharing' },
  { id: 4, title: 'Chapter 4: The Trust Layer', snippet: 'Why citation engineering and verifiable authority are the new backlinks in the AEO frontier.', link: 'https://drive.google.com/file/d/1fft-oc74VFnRWtixhiwF7yCXQGBfEq08/view?usp=sharing' },
  { id: 5, title: 'Chapter 5: Multi-Agent RAG', snippet: 'Architecting your dataset to be seamlessly ingested by federated agent networks.', link: 'https://drive.google.com/file/d/11gn3ekWNqVcPAzHtVdrxvGaKc8Mfz14b/view?usp=sharing' },
  { id: 6, title: 'Chapter 6: AEO vs SEO Metrics', snippet: 'Throwing away click-through rates. Measuring zero-click dominance and brand entity sentiment.', link: 'https://drive.google.com/file/d/1015VRgjA3gUqJMVooa39ctX9y8IA2bfN/view?usp=sharing' },
  { id: 7, title: 'Chapter 7: Production Prototypes', snippet: 'Moving from Jupyter notebooks to highly available, low-latency agentic APIs.', link: 'https://drive.google.com/file/d/1rUkFUPuxC5tzYy555xDJqrGPI-N0juag/view?usp=sharing' },
  { id: 8, title: 'Chapter 8: Conversational UX', snippet: 'Designing interfaces where the user talks to your data rather than scrolling through it.', link: 'https://drive.google.com/file/d/1dhHHYf5ANLvYgnrqEy6g6z--bXxVW-0x/view?usp=sharing' },
  { id: 9, title: 'Chapter 9: Edge Optimization', snippet: 'Running lightweight embedding models directly on Vercel Edge for sub-100ms vector search.', link: 'https://drive.google.com/file/d/1ajy94VkH2vaoDiW_YQhyDUKRBp6_XLON/view?usp=sharing' },
  { id: 10, title: 'Chapter 10: The 2026 Blueprint', snippet: 'Synthesizing the entire architectural pivot required to survive the Answer Engine era.', link: 'https://drive.google.com/file/d/1xd96qZz43VX2lnqDf1c_q3ZbOGXxFgrt/view?usp=sharing' },
  { id: 11, title: 'AEO Complete Doc', snippet: 'The entire AEO research in one document.', link: 'https://drive.google.com/file/d/1g_iLDh9Y4arSfHud16X9TtHWYQbfxqHt/view?usp=sharing' },
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {chapters.map((chapter, index) => {
          const isCompleteDoc = chapter.id === 11;
          return (
            <motion.a
              href={chapter.link}
              target="_blank"
              rel="noopener noreferrer"
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
              className={`block glass-card rounded-2xl p-8 border hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col h-full ${
                isCompleteDoc 
                  ? 'md:col-span-2 lg:col-span-3 border-amber-500/40 bg-gradient-to-br from-amber-500/10 to-transparent' 
                  : 'border-white/5 hover:border-amber-500/30'
              }`}
            >
              {isCompleteDoc && (
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                   <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
              )}
              <div className="text-amber-500/60 text-xs font-mono mb-4 tracking-[0.2em] font-bold">
                {isCompleteDoc ? 'MANIFESTO' : `VOL. ${chapter.id < 10 ? `0${chapter.id}` : chapter.id}`}
              </div>
              <h3 className={`${isCompleteDoc ? 'text-3xl md:text-4xl' : 'text-2xl'} font-serif font-light text-gray-100 mb-4 group-hover:text-amber-400 transition-colors leading-snug`}>
                {chapter.title.includes(': ') ? chapter.title.split(': ')[1] : chapter.title}
              </h3>
              <p className={`text-gray-400 leading-relaxed font-serif italic flex-grow ${isCompleteDoc ? 'text-lg max-w-2xl' : 'text-sm'}`}>
                {chapter.snippet}
              </p>
              <div className="mt-8 flex items-center text-xs tracking-widest text-amber-500 font-bold uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {isCompleteDoc ? 'Download Full Manifest' : 'Explore Chapter'} <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.a>
          );
        })}
      </div>
      <style jsx>{`
        .editorial-text {
          letter-spacing: 0.02em;
        }
        .glass-card {
          background: rgba(43, 34, 25, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>
    </section>
  )
}

export default ResearchExplorer
