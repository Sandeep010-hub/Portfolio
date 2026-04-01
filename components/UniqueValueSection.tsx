'use client'

import { motion } from 'framer-motion'
import { Zap, Target, Sparkles, Lightbulb, TrendingUp, Cpu, Globe, Scale } from 'lucide-react'
import { useProfileStore } from '../store/useProfileStore'

const UniqueValueSection = () => {
  const mode = useProfileStore((state) => state.mode)
  
  if (mode !== 'explorer') return null

  return (
    <section id="unique-value" className="py-24 relative overflow-hidden bg-[#fdfbf7] dark:bg-[#1a1512]">
      <div className="container-max px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        
        <div className="max-w-4xl mb-20 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 px-4 py-2 rounded-full mb-6"
          >
            <Scale className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-xs font-serif font-bold text-amber-800 dark:text-amber-300 uppercase tracking-widest">The Strategic Delta</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#4a3f35] dark:text-[#e8dccb] tracking-tight mb-6"
          >
            Engineering the <span className="italic">Symmetric</span> Advantage
          </motion.h2>
          <p className="text-xl font-serif italic text-[#8c7a6b] dark:text-[#a89c8f] max-w-2xl mx-auto">
            Where high-concurrency architecture meets product-led growth strategy.
          </p>
        </div>

        {/* The Bento Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
          
          {/* Main Pillar: AEO Blueprint */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#fcfbf9] to-[#f4efe9] dark:from-[#2e2621] dark:to-[#25201b] border border-[#e6ded8] dark:border-[#3a322b] p-10 flex flex-col justify-end"
          >
            <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe className="w-48 h-48 text-[#8c7a6b] dark:text-[#d4c8bf]" />
            </div>
            <div className="relative z-10">
              <Target className="w-10 h-10 text-amber-600 mb-6" />
              <h3 className="text-3xl font-bold font-serif text-[#4a3f35] dark:text-[#e8dccb] mb-4">AEO-Native Architecture</h3>
              <p className="max-w-xl text-lg font-serif text-[#6e5d4f] dark:text-[#a89c8f] leading-relaxed">
                The post-search era doesn't just mean LLMs. It means architecting data silos into <span className="font-bold underline decoration-amber-500/30">Semantic Knowledge Graphs</span> that Answer Engines can actually digest.
              </p>
              <div className="mt-8 flex gap-4 text-[10px] font-mono font-bold tracking-widest text-[#8c7a6b]">
                <span className="px-3 py-1 bg-amber-50 dark:bg-amber-900/30 rounded-full">SEMANTIC_INDEXING</span>
                <span className="px-3 py-1 bg-amber-50 dark:bg-amber-900/30 rounded-full">GRAPH_RAG</span>
              </div>
            </div>
          </motion.div>

          {/* Sub-Pillar: Speed as a Feature */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-1 rounded-[2.5rem] bg-white dark:bg-[#1a1512] border border-[#e6ded8] dark:border-[#3a322b] p-8 flex flex-col"
          >
            <TrendingUp className="w-8 h-8 text-emerald-500 mb-4" />
            <h3 className="text-xl font-bold font-serif text-[#4a3f35] dark:text-[#e8dccb] mb-2">Performance Perception</h3>
            <p className="text-sm font-serif text-[#6e5d4f] dark:text-[#a89c8f]">
              Architecting for sub-200ms user perception via Edge-side rendering and preemptive caching.
            </p>
            <div className="mt-auto pt-4 flex items-end justify-between">
              <span className="text-2xl font-black font-mono text-emerald-500">-60%</span>
              <span className="text-[10px] font-mono text-gray-400">LATENCY_REDUCTION</span>
            </div>
          </motion.div>

          {/* Sub-Pillar: Agentic Workflows */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-1 border-2 border-amber-500/20 rounded-[2.5rem] bg-[#fdfbf7] dark:bg-[#1a1512] p-8"
          >
            <Sparkles className="w-8 h-8 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold font-serif text-[#4a3f35] dark:text-[#e8dccb] mb-2">Agentic Core</h3>
            <p className="text-sm font-serif text-[#6e5d4f] dark:text-[#a89c8f]">
              Building beyond deterministic code into self-correcting agentic patterns.
            </p>
          </motion.div>

          {/* Sub-Pillar: Product ROI */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-1 rounded-[2.5rem] bg-[#25201b] dark:bg-[#4a3f35] p-8 text-white"
          >
            <Lightbulb className="w-8 h-8 text-amber-400 mb-4" />
            <h3 className="text-xl font-bold font-serif mb-2">Unit Economics</h3>
            <p className="text-sm font-serif opacity-80 italic">
              "Code is a cost. Solutions are assets."
            </p>
            <p className="mt-2 text-sm font-serif opacity-80 leading-relaxed">
              Every architectural decision is vetted against product-market resonance.
            </p>
          </motion.div>

          {/* Sub-Pillar: System Design */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 md:row-span-1 rounded-[2.5rem] bg-[#f4efe9] dark:bg-[#2e2621] border border-[#e6ded8] dark:border-[#3a322b] p-10 flex items-center gap-8"
          >
            <div className="hidden sm:flex w-24 h-24 bg-white dark:bg-[#1a1512] rounded-3xl items-center justify-center shrink-0 shadow-lg">
              <Cpu className="w-12 h-12 text-[#4a3f35] dark:text-[#e8dccb]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-serif text-[#4a3f35] dark:text-[#e8dccb] mb-2">High-Concurrency Logic</h3>
              <p className="text-base font-serif text-[#6e5d4f] dark:text-[#a89c8f] leading-relaxed">
                Experience in scaling real-time AI data visualizations and distributed knowledge engines using FastAPI and LangGraph.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default UniqueValueSection
