'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  SiNextdotjs, SiFastapi, SiTypescript, SiDocker, SiPostgresql, 
  SiReact, SiTailwindcss, SiFramer, SiHtml5, SiCss, SiNodedotjs, 
  SiExpress, SiPython, SiMongodb, SiMysql, SiRedis, SiGit, SiGithub, 
  SiVercel, SiNetlify, SiPostman, SiOpenai
} from 'react-icons/si'
import { FaAws, FaJava, FaChartBar, FaChartLine, FaKey, FaNetworkWired, FaPlug } from 'react-icons/fa'
import { useProfileStore } from '../store/useProfileStore'
import { software_data } from '../data/techstack'

// Helper function to map tech names to premium icons
const getIconForTech = (name: string, fallback: any) => {
  const iconMap: Record<string, any> = {
    'React.js': <SiReact />,
    'Next.js': <SiNextdotjs />,
    'TypeScript': <SiTypescript />,
    'Tailwind CSS': <SiTailwindcss />,
    'Framer Motion': <SiFramer />,
    'HTML5': <SiHtml5 />,
    'CSS3': <SiCss />,
    'Node.js': <SiNodedotjs />,
    'Express.js': <SiExpress />,
    'Java': <FaJava />,
    'Python': <SiPython />,
    'MongoDB': <SiMongodb />,
    'MySQL': <SiMysql />,
    'Redis': <SiRedis />,
    'Git': <SiGit />,
    'GitHub': <SiGithub />,
    'Docker': <SiDocker />,
    'Vercel': <SiVercel />,
    'Netlify': <SiNetlify />,
    'AWS': <FaAws />,
    'Chart.js': <FaChartBar />,
    'D3.js': <FaChartLine />,
    'JWT': <FaKey />,
    'REST APIs': <FaNetworkWired />,
    'WebSocket': <FaPlug />,
    'Postman': <SiPostman />,
  };
  return iconMap[name] || <span>{fallback}</span>;
}

const softwareBentoItems = [
  { name: 'Next.js 16', icon: <SiNextdotjs size="100%" />, colSpan: 'col-span-12 md:col-span-6 lg:col-span-4', rowSpan: 'row-span-1 md:row-span-2 lg:row-span-2', color: 'from-gray-800 to-black text-white dark:border-gray-700' },
  { name: 'FastAPI', icon: <SiFastapi size="100%" />, colSpan: 'col-span-12 md:col-span-6 lg:col-span-4', rowSpan: 'row-span-1 md:row-span-1 lg:row-span-1', color: 'from-teal-500/10 to-emerald-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20' },
  { name: 'AWS Architecture', icon: <FaAws size="100%" />, colSpan: 'col-span-12 md:col-span-12 lg:col-span-4', rowSpan: 'row-span-1 md:row-span-1 lg:row-span-2', color: 'from-orange-500/10 to-amber-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20' },
  { name: 'TypeScript', icon: <SiTypescript size="100%" />, colSpan: 'col-span-6 md:col-span-3 lg:col-span-2', rowSpan: 'row-span-1', color: 'from-blue-500/10 to-cyan-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
  { name: 'PostgreSQL', icon: <SiPostgresql size="100%" />, colSpan: 'col-span-6 md:col-span-3 lg:col-span-2', rowSpan: 'row-span-1', color: 'from-sky-500/10 to-blue-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20' },
  { name: 'Docker', icon: <SiDocker size="100%" />, colSpan: 'col-span-12 lg:col-span-8', rowSpan: 'row-span-1', color: 'bg-white dark:bg-[#0a0f18] text-blue-500 border-gray-200 dark:border-gray-800' },
  { name: 'Agentic RAG / AI', icon: <SiOpenai size="100%" />, colSpan: 'col-span-12 lg:col-span-4', rowSpan: 'row-span-1', color: 'from-green-500/10 to-emerald-500/10 text-green-600 dark:text-green-400 border-green-500/20' }
]

const explorerBentoItems = [
  { name: 'JSON-LD', icon: <span className="text-5xl drop-shadow-sm">📊</span>, colSpan: 'col-span-12 lg:col-span-4', rowSpan: 'row-span-1 lg:row-span-2', color: 'from-[#fdfbf7] to-[#f4f0e6] dark:from-[#3a322b] dark:to-[#2e2620] text-amber-900 dark:text-amber-200 border-amber-200/50 dark:border-amber-900/40' },
  { name: 'Semantic Analysis', icon: <span className="text-5xl drop-shadow-sm">🧠</span>, colSpan: 'col-span-12 md:col-span-6 lg:col-span-4', rowSpan: 'row-span-1 lg:row-span-1', color: 'from-[#fefefe] to-[#f5f5f5] dark:from-[#2e2e2e] dark:to-[#242424] text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700' },
  { name: 'Technical Writing', icon: <span className="text-5xl drop-shadow-sm">✍️</span>, colSpan: 'col-span-12 md:col-span-6 lg:col-span-4', rowSpan: 'row-span-1 lg:row-span-2', color: 'from-[#fefbfb] to-[#fceeee] dark:from-[#382a2a] dark:to-[#2c1f1f] text-rose-900 dark:text-rose-200 border-rose-200/50 dark:border-rose-900/40' },
  { name: 'Knowledge Graphs', icon: <span className="text-5xl drop-shadow-sm">🕸️</span>, colSpan: 'col-span-12 md:col-span-12 lg:col-span-4', rowSpan: 'row-span-1', color: 'from-[#fdfdfdf] to-[#f0f4f8] dark:from-[#24303c] dark:to-[#1a232c] text-blue-900 dark:text-blue-200 border-blue-200/50 dark:border-blue-900/40' },
]

const CORE_FILTER = 'Core'
const filters = [CORE_FILTER, ...software_data.map(d => d.name)]

const TechStackSection = () => {
  const mode = useProfileStore((state) => state.mode)
  const [activeFilter, setActiveFilter] = useState(CORE_FILTER)

  const activeCategoryData = software_data.find(c => c.name === activeFilter)

  return (
    <section id="tech-stack" className="py-24 scroll-mt-20 overflow-hidden">
      <div className="container-max px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          {mode === 'software' ? (
            <>
              <motion.h2 layout="position" className="text-4xl font-bold font-sans text-gray-900 dark:text-gray-100 tracking-tight">System Core</motion.h2>
              <motion.p layout="position" className="text-gray-500 dark:text-gray-400 mt-2 font-mono text-sm max-w-xl">
                [runtime dependencies & structural foundation]
              </motion.p>
            </>
          ) : (
            <>
              <motion.h2 layout="position" className="text-4xl font-bold font-serif text-[#4a3f35] dark:text-[#e8dccb] tracking-tight">Ecosystem Architecture</motion.h2>
              <motion.p layout="position" className="text-[#8c7a6b] dark:text-[#a89c8f] mt-2 font-serif text-lg italic max-w-xl">
                The semantic foundations and editorial mechanisms for modern answer engines.
              </motion.p>
            </>
          )}
        </div>

        <AnimatePresence mode="popLayout">
          {mode === 'software' && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              {/* Filter Pills */}
              <motion.div layout className="flex flex-wrap gap-2 items-center">
                {filters.map(f => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === f
                        ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </motion.div>

              <AnimatePresence mode="popLayout">
                {activeFilter === CORE_FILTER ? (
                  <motion.div
                    key="core-bento"
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                    className="grid grid-cols-12 auto-rows-[minmax(120px,auto)] gap-4 md:gap-6"
                  >
                    {softwareBentoItems.map((item, idx) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05, duration: 0.4 }}
                        className={`relative overflow-hidden border bg-gradient-to-br ${item.color} ${item.colSpan} ${item.rowSpan} group p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 rounded-[2rem] shadow-sm hover:shadow-lg`}
                      >
                        <div className="w-10 h-10 md:w-12 md:h-12 opacity-80 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-300 origin-bottom-left flex items-center justify-center">
                          {item.icon}
                        </div>
                        <div className="mt-8 z-10">
                          <h3 className="font-bold text-lg md:text-xl tracking-tight">{item.name}</h3>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  activeCategoryData && (
                    <motion.div
                      key={activeCategoryData.name}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="border-b border-gray-200 dark:border-gray-800 pb-2">
                        <h3 className="text-2xl font-bold font-sans text-gray-900 dark:text-gray-100 tracking-tight">{activeCategoryData.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400 mt-1 font-mono text-xs uppercase tracking-widest">{activeCategoryData.description}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        <AnimatePresence mode="popLayout">
                          {activeCategoryData.technologies.map((tech) => (
                            <motion.div
                              layout
                              key={tech.name}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.2 }}
                              className="flex flex-col p-4 rounded-xl border bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-gray-200 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors group"
                            >
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-2xl drop-shadow-sm group-hover:scale-110 transition-transform text-gray-700 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400">
                                  {getIconForTech(tech.name, tech.icon)}
                                </span>
                                <span className={`text-[9px] uppercase font-bold tracking-wider px-2 py-1 rounded-full ${
                                  tech.proficiency === 'Expert' 
                                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' 
                                    : tech.proficiency === 'Advanced' 
                                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                                      : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                                }`}>
                                  {tech.proficiency}
                                </span>
                              </div>
                              <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100">{tech.name}</h4>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </motion.div>
          )}

        {mode === 'explorer' && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-12 auto-rows-[minmax(140px,auto)] gap-4 md:gap-6"
          >
            {explorerBentoItems.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: 'easeOut' }}
                className={`relative overflow-hidden border bg-gradient-to-br ${item.color} ${item.colSpan} ${item.rowSpan} group p-8 flex flex-col justify-between rounded-none shadow-sm hover:shadow-md transition-shadow duration-300`}
              >
                <div className="opacity-90 group-hover:scale-105 transition-transform duration-500 origin-bottom-left">
                  {item.icon}
                </div>
                <div className="mt-8">
                  <h3 className="font-serif font-semibold text-xl md:text-2xl tracking-tight">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default TechStackSection