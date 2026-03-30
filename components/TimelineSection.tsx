'use client'

import { motion } from 'framer-motion'
import { software_data, explorer_data } from '../data/timeline'
import { useProfileStore } from '../store/useProfileStore'

const TimelineSection = () => {
  const mode = useProfileStore((state) => state.mode)
  const activeTimeline = mode === 'software' ? software_data : explorer_data

  if (mode === 'software') {
    return (
      <section id="experience" className="py-24 bg-transparent scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 font-mono"
          >
            <span className="text-green-500 font-bold">$</span><span className="text-gray-800 dark:text-gray-200 ml-2">git log --pretty=oneline --abbrev-commit</span>
          </motion.div>
          
          <div className="font-mono text-sm border-l border-gray-300 dark:border-gray-700 ml-2 py-4">
            {activeTimeline.map((item, idx: number) => {
              // Deterministic fake hash instead of Math.random
              const hash = (parseInt(item.id || idx.toString()) * 1234567).toString(16).substring(0, 7) || '7a9e3b1';
              return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative pl-10 pb-16 group"
              >
                {/* Node Dot */}
                <div className="absolute left-[-4px] top-1.5 w-[7px] h-[7px] bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-green-500 transition-colors shadow-[0_0_0_4px_var(--bg-color)]" style={{ '--bg-color': 'oklch(var(--background))' } as any} />
                
                <div className="text-gray-400 dark:text-gray-500 mb-2 text-xs flex items-center gap-3">
                  <span className="text-yellow-600 dark:text-yellow-400">commit {hash}</span>
                  <span>|</span>
                  <span>{item.start} - {item.end}</span>
                </div>
                
                <div className="font-bold text-gray-900 dark:text-gray-100 text-lg sm:text-xl mb-1">{item.title}</div>
                <div className="text-gray-500 dark:text-gray-400 mb-4">{item.organization} @ {item.location}</div>
                
                <div className="text-gray-600 dark:text-gray-300 border-l-2 border-gray-200 dark:border-gray-800 pl-4 py-2 bg-gray-50/50 dark:bg-gray-900/50 rounded-r-md leading-relaxed whitespace-pre-line">
                  {item.description}
                </div>
              </motion.div>
            )})}
          </div>
        </div>
      </section>
    )
  }

  // Explorer Mode (original timeline view)
  return (
    <section id="experience" className="py-16 unified-bg scroll-mt-20">
      <svg className="w-full h-12 mb-8" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 Q720,80 1440,40 L1440,60 L0,60Z" fill="#3b82f6" fillOpacity="0.08" />
      </svg>
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Timeline</h2>
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute left-6 top-0 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 dark:from-blue-700 dark:via-blue-500 dark:to-blue-400 rounded-full z-0"
          style={{ minHeight: '100%', height: '100%' }}
        />
        <div className="pl-16 space-y-16 relative z-10">
          {activeTimeline.map((item, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 + 0.2, type: 'spring', stiffness: 300 }}
                className="absolute -left-10 top-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-400 dark:from-blue-700 dark:to-blue-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg border-4 border-white dark:border-gray-900"
              >
                {item.icon}
              </motion.div>
              <div className="glass-card bg-white/60 dark:bg-gray-800/60 rounded-xl shadow-lg p-6 backdrop-blur-md border border-white/30 dark:border-gray-700/40">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-bold">{item.start} - {item.end}</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium mb-1">{item.organization}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{item.location}</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .glass-card {
          background: rgba(255,255,255,0.25);
          box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .unified-bg {
          background: linear-gradient(120deg, #10141c 0%, #151a23 100%) !important;
        }
      `}</style>
    </section>
  )
}

export default TimelineSection