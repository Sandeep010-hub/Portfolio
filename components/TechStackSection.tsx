'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { techCategories } from '../data/techstack'

// Flatten all techs from all categories
const allTechs = techCategories.flatMap((cat) => cat.technologies)
const allCategories = ['All', ...techCategories.map(cat => cat.name)]

const getProficiencyColor = (proficiency: string) => {
  switch (proficiency) {
    case 'Expert': return 'bg-green-500'
    case 'Advanced': return 'bg-blue-500'
    case 'Intermediate': return 'bg-yellow-500'
    case 'Beginner': return 'bg-gray-400'
    default: return 'bg-gray-300'
  }
}

const TechStackSection = () => {
  const [selectedTech, setSelectedTech] = useState<any | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const filteredTechs = selectedCategory === 'All'
    ? allTechs
    : techCategories.find(cat => cat.name === selectedCategory)?.technologies || []

  return (
    <section id="tech-stack" className="py-20 unified-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of the technologies and tools I use to build modern, scalable applications
          </p>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-8 overflow-x-auto scrollbar-hide">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {filteredTechs.map((tech, i) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.07, boxShadow: '0 8px 32px rgba(59,130,246,0.18)' }}
              whileTap={{ scale: 0.98 }}
              className="relative cursor-pointer rounded-2xl p-6 pb-10 flex flex-col items-center justify-center glass-card transition-all duration-300 border border-white/30 dark:border-gray-700/40 shadow-lg backdrop-blur-md bg-white/40 dark:bg-gray-800/40 hover:ring-2 hover:ring-blue-400"
              onClick={() => setSelectedTech(tech)}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              style={{ minHeight: 180 }}
            >
              <motion.span
                className="text-4xl mb-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.03, type: 'spring', stiffness: 300 }}
              >
                {tech.icon}
              </motion.span>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">
                {tech.name}
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                <div
                  className={`h-2 ${getProficiencyColor(tech.proficiency)}`}
                  style={{ width: tech.proficiency === 'Expert' ? '100%' : tech.proficiency === 'Advanced' ? '80%' : tech.proficiency === 'Intermediate' ? '60%' : '40%' }}
                />
              </div>
              {/* Hover Description */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={hoveredTech === tech.name ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 bottom-2 px-3 text-[11px] text-gray-500 dark:text-gray-300 text-center pointer-events-none select-none"
                style={{ minHeight: 16 }}
              >
                {tech.description && tech.description.length > 60
                  ? tech.description.slice(0, 57) + '...'
                  : tech.description}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Modal for tech details */}
        <AnimatePresence>
          {selectedTech && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTech(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-xs w-full p-8 relative glass-card border border-white/30 dark:border-gray-700/40"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl"
                  onClick={() => setSelectedTech(null)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <div className="flex flex-col items-center">
                  <span className="text-5xl mb-4">{selectedTech.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                    {selectedTech.name}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <style jsx global>{`
        .unified-bg {
          background: linear-gradient(120deg, #10141c 0%, #151a23 100%) !important;
        }
      `}</style>
    </section>
  )
}

export default TechStackSection 