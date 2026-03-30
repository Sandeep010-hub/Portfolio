'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Project, software_data, explorer_data } from '../data/projects'
import { useProfileStore } from '../store/useProfileStore'
import { ProjectCard } from './ui/ProjectCard'

const ProjectShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const mode = useProfileStore((state) => state.mode)
  const activeProjects = mode === 'software' ? software_data : explorer_data

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <>
      <section id="projects" className="py-16 unified-bg pb-2 scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating full-stack development skills and problem-solving abilities
            </p>
          </motion.div>

          {/* Projects Grid (no filters) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto pb-24"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key="all-projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {activeProjects.map((project, index) => (
                  <ProjectCard 
                    key={project.id}
                    project={project}
                    index={index}
                    setHoveredProject={setHoveredProject}
                    setSelectedProject={setSelectedProject}
                  />
                ))}
                
                {/* Explore All Card */}
                {mode === 'software' && (
                  <motion.div
                    whileHover={{ y: -5 }}
                    onClick={() => window.open('https://github.com/Sandeep010-hub', '_blank')}
                    className="flex flex-col items-center justify-center p-8 bg-black/5 dark:bg-white/5 border-2 border-dashed border-gray-300 dark:border-gray-700/50 rounded-2xl cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 group min-h-[350px] shadow-sm glass-card"
                  >
                    <div className="w-16 h-16 mb-4 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                      <svg className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Explore All Repos</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center group-hover:text-gray-700 dark:group-hover:text-gray-300 px-4">
                      Discover 40+ engineering projects, prototypes, and open-source contributions.
                    </p>
                    <div className="mt-6 flex items-center justify-center space-x-2 text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                      <span>View GitHub</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
        {/* Modal for project details */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-lg w-full p-8 relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:underline text-sm font-medium"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <div className="pointer-events-none w-full h-16 -mt-16" style={{
        background: 'linear-gradient(to bottom, rgba(16,20,28,0) 0%, #10141c 100%)'
      }} />
      <style jsx global>{`
        .unified-bg {
          background: linear-gradient(120deg, #10141c 0%, #151a23 100%) !important;
        }
      `}</style>
    </>
  )
}

export default ProjectShowcase 