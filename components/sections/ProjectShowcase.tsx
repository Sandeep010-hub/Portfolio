'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FileText, Terminal, X, ExternalLink } from 'lucide-react'
import { FaTerminal } from 'react-icons/fa'
import { Project, software_data, explorer_data } from '../../data/projects'
import { useProfileStore } from '../../store/useProfileStore'
import { ProjectCard } from '../ui/ProjectCard'

const ProjectShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeTab, setActiveTab] = useState<'overview.md' | 'tech-spec.json' | 'metrics.log'>('overview.md')
  const mode = useProfileStore((state) => state.mode)
  const activeProjects = mode === 'software' ? software_data : explorer_data

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project)
    setActiveTab('overview.md')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
            {mode === 'software' ? (
              <>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Engineering Repositories
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Architecting production-ready AI agents, high-concurrency search layers, and optimized browser platforms
                </p>
              </>
            ) : (
              <>
                <h2 className="text-4xl font-bold font-serif text-[#4a3f35] dark:text-[#e8dccb] mb-4">
                  Case Studies & Strategic Work
                </h2>
                <p className="text-xl font-serif italic text-[#8c7a6b] dark:text-[#a89c8f] max-w-3xl mx-auto">
                  Distilling search engine dynamics, agentic pipelines, and original research into production systems
                </p>
              </>
            )}
          </motion.div>

          {/* Projects Grid */}
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
                    setSelectedProject={handleOpenProject}
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
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              {mode === 'software' ? (
                /* ==================== SOFTWARE VSCODE MODAL ==================== */
                <motion.div
                  className="bg-[#181818] border border-gray-800 rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden font-mono text-sm flex flex-col"
                  initial={{ scale: 0.95, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 20 }}
                  onClick={e => e.stopPropagation()}
                >
                  {/* Top Bar window controls */}
                  <div className="bg-[#1f1f1f] px-4 py-3 flex items-center justify-between border-b border-gray-800/60 flex-shrink-0">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => setSelectedProject(null)}
                        className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 flex items-center justify-center text-[7px] text-[#5c0000] hover:text-black transition-colors"
                        aria-label="Close modal"
                      >
                        ✕
                      </button>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="text-gray-400 text-[11px] truncate px-4">{selectedProject.title} — editor workspace</div>
                    <div className="w-12 flex-shrink-0" />
                  </div>

                  {/* Editor File Tabs */}
                  <div className="bg-[#242424] flex items-center text-xs text-gray-400 border-b border-gray-800/60 overflow-x-auto scrollbar-hide flex-shrink-0">
                    {/* Tab 1: overview.md */}
                    <button
                      onClick={() => setActiveTab('overview.md')}
                      className={`px-4 py-2.5 border-r border-gray-800/60 flex items-center space-x-2 transition-all outline-none ${
                        activeTab === 'overview.md'
                          ? 'bg-[#181818] text-gray-100 border-t-2 border-cyan-500'
                          : 'bg-[#242424] hover:bg-[#2d2d2d] text-gray-400 hover:text-gray-200'
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5 text-cyan-400" />
                      <span>overview.md</span>
                    </button>
                    {/* Tab 2: tech-spec.json */}
                    <button
                      onClick={() => setActiveTab('tech-spec.json')}
                      className={`px-4 py-2.5 border-r border-gray-800/60 flex items-center space-x-2 transition-all outline-none ${
                        activeTab === 'tech-spec.json'
                          ? 'bg-[#181818] text-gray-100 border-t-2 border-yellow-500'
                          : 'bg-[#242424] hover:bg-[#2d2d2d] text-gray-400 hover:text-gray-200'
                      }`}
                    >
                      <span className="text-yellow-500 font-bold font-mono text-[10px]">{"{}"}</span>
                      <span>tech-spec.json</span>
                    </button>
                    {/* Tab 3: metrics.log */}
                    <button
                      onClick={() => setActiveTab('metrics.log')}
                      className={`px-4 py-2.5 border-r border-gray-800/60 flex items-center space-x-2 transition-all outline-none ${
                        activeTab === 'metrics.log'
                          ? 'bg-[#181818] text-gray-100 border-t-2 border-emerald-500'
                          : 'bg-[#242424] hover:bg-[#2d2d2d] text-gray-400 hover:text-gray-200'
                      }`}
                    >
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      <span>metrics.log</span>
                    </button>
                  </div>

                  {/* Workspace Content Panel */}
                  <div className="p-6 text-[#d4d4d4] flex overflow-y-auto max-h-[400px] min-h-[300px] bg-[#181818]">
                    {/* Line Numbers */}
                    <div className="text-gray-600 select-none text-right pr-4 border-r border-gray-800/60 space-y-4 font-mono hidden sm:block w-10 flex-shrink-0">
                      {[...Array(12)].map((_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>

                    {/* Tab Contents */}
                    <div className="pl-0 sm:pl-6 flex-1 space-y-4 font-mono select-text">
                      {activeTab === 'overview.md' && (
                        <div className="space-y-4 text-left">
                          <div><span className="text-[#6a9955]">{`<!-- markdown overview -->`}</span></div>
                          <div>
                            <span className="text-cyan-400 font-bold">#</span>{' '}
                            <span className="text-white font-bold text-lg">{selectedProject.title}</span>
                          </div>
                          <div className="text-gray-400 leading-relaxed font-sans">{selectedProject.longDescription}</div>
                          
                          <div className="pt-2">
                            <span className="text-cyan-400 font-bold">##</span>{' '}
                            <span className="text-white font-bold">Core Features</span>
                          </div>
                          <ul className="space-y-2 list-none font-sans text-gray-300 pl-2">
                            {selectedProject.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-cyan-400 mr-2 font-mono">-</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {activeTab === 'tech-spec.json' && (
                        <div className="text-left space-y-2">
                          <div><span className="text-yellow-500">{`{`}</span></div>
                          <div className="pl-4">
                            <span className="text-[#9cdcfe]">"assignedRole"</span>
                            <span className="text-gray-300">:</span>{' '}
                            <span className="text-[#ce9178]">"{selectedProject.role}"</span>
                            <span className="text-gray-300">,</span>
                          </div>
                          <div className="pl-4">
                            <span className="text-[#9cdcfe]">"duration"</span>
                            <span className="text-gray-300">:</span>{' '}
                            <span className="text-[#ce9178]">"{selectedProject.duration}"</span>
                            <span className="text-gray-300">,</span>
                          </div>
                          <div className="pl-4">
                            <span className="text-[#9cdcfe]">"technologiesUsed"</span>
                            <span className="text-gray-300">:</span>{' '}
                            <span className="text-yellow-500">[</span>
                            <div className="pl-4 flex flex-wrap gap-x-2 gap-y-1">
                              {selectedProject.technologies.map((t, i) => (
                                <span key={i} className="text-[#ce9178]">
                                  "{t}"{i < selectedProject.technologies.length - 1 && <span className="text-gray-300">,</span>}
                                </span>
                              ))}
                            </div>
                            <span className="text-yellow-500">]</span>
                            <span className="text-gray-300">,</span>
                          </div>
                          <div className="pl-4">
                            <span className="text-[#9cdcfe]">"criticalChallenges"</span>
                            <span className="text-gray-300">:</span>{' '}
                            <span className="text-yellow-500">[</span>
                            <div className="pl-4 space-y-1">
                              {selectedProject.challenges.map((c, i) => (
                                <div key={i} className="text-[#ce9178]">
                                  "{c}"{i < selectedProject.challenges.length - 1 && <span className="text-gray-300">,</span>}
                                </div>
                              ))}
                            </div>
                            <span className="text-yellow-500">]</span>
                          </div>
                          <div><span className="text-yellow-500">{`}`}</span></div>
                        </div>
                      )}

                      {activeTab === 'metrics.log' && (
                        <div className="text-left space-y-3 font-mono text-xs leading-relaxed">
                          <div className="text-gray-500">{`[${new Date().toISOString().split('T')[0]} 09:00:00] INITIALIZING SYSTEM METRICS RUN...`}</div>
                          <div className="text-blue-400">{`[INFO] Target: ${selectedProject.title}`}</div>
                          <div className="text-cyan-400">{`[TEST] Validated browser compatibility cross-environments.`}</div>
                          
                          <div className="pt-2 border-t border-gray-800/40 space-y-2">
                            <div className="text-[#6a9955]">{`// Performance Outcomes:`}</div>
                            {selectedProject.results.map((result, i) => (
                              <div key={i} className="flex items-start text-emerald-400">
                                <span className="mr-2">[✓ SUCCESS]</span>
                                <span>{result}</span>
                              </div>
                            ))}
                          </div>
                          <div className="text-gray-500 pt-2 border-t border-gray-800/40">{`[STATUS] Execution finished. 0 anomalies detected.`}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Terminal-style execution footer */}
                  <div className="bg-[#1f1f1f] p-4 border-t border-gray-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 flex-shrink-0 font-mono">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <FaTerminal className="w-3.5 h-3.5 text-cyan-500" />
                      <span>sh execution_panel.sh</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 py-2 px-4 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition-all text-xs hover:shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98]"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>sh run_demo.sh</span>
                        </a>
                      )}
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 py-2 px-4 rounded bg-[#333] hover:bg-[#444] text-gray-200 hover:text-white font-bold transition-all text-xs border border-gray-700 active:scale-[0.98]"
                        >
                          <span>git clone repo</span>
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="py-2 px-4 rounded text-xs text-gray-400 hover:text-gray-200 border border-transparent hover:border-gray-800 transition-colors"
                      >
                        exit
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* ==================== EXPLORER EDITORIAL MODAL ==================== */
                <motion.div
                  className="bg-[#fdfbf7] dark:bg-[#25201b] border border-[#e6ded8] dark:border-[#352c26] shadow-2xl max-w-2xl w-full p-8 md:p-10 relative overflow-y-auto max-h-[90vh] flex flex-col font-serif"
                  initial={{ scale: 0.95, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 20 }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute top-4 right-4 text-[#8c7a6b] hover:text-[#4a3f35] dark:text-[#a89c8f] dark:hover:text-[#e8dccb] transition-colors p-2 text-2xl"
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close details"
                  >
                    ✕
                  </button>

                  <div className="text-amber-500/80 text-xs font-mono tracking-[0.2em] font-bold mb-4">
                    CASE SUMMARY
                  </div>

                  <h3 className="text-3xl md:text-4xl font-light text-[#4a3f35] dark:text-[#e8dccb] mb-4 leading-tight">
                    {selectedProject.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-serif italic text-[#8c7a6b] dark:text-[#a89c8f] mb-6 border-b border-[#e6ded8] dark:border-[#352c26] pb-4">
                    <span>Role: {selectedProject.role}</span>
                    <span>•</span>
                    <span>Duration: {selectedProject.duration}</span>
                  </div>

                  <div className="space-y-6 text-left">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-[#a89c8f] font-mono mb-2">Exposition</h4>
                      <p className="text-lg text-[#6e5d4f] dark:text-[#a89c8f] font-light leading-relaxed italic">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#e6ded8] dark:border-[#352c26]">
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-[#a89c8f] font-mono mb-3">Key Features</h4>
                        <ul className="space-y-2 text-sm text-[#6e5d4f] dark:text-[#a89c8f] font-light leading-relaxed">
                          {selectedProject.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-[#8c7a6b] mr-2">✦</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-[#a89c8f] font-mono mb-3">Target Results</h4>
                        <ul className="space-y-2 text-sm text-[#6e5d4f] dark:text-[#a89c8f] font-light leading-relaxed">
                          {selectedProject.results.map((result, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-6 border-t border-[#e6ded8] dark:border-[#352c26] flex flex-wrap items-center gap-6 justify-between">
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="bg-[#f4efe9] dark:bg-[#352c26] text-[#7a6b5d] dark:text-[#d1c8c0] px-3 py-1 rounded-none text-xs font-serif italic"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-6">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#4a3f35] dark:text-[#e8dccb] hover:text-[#8c7a6b] dark:hover:text-[#d4c8bf] font-semibold italic text-sm tracking-wider flex items-center gap-1.5 transition-colors"
                        >
                          <span>Explore Project</span>
                          <span>→</span>
                        </a>
                      )}
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8c7a6b] dark:text-[#a89c8f] hover:text-[#4a3f35] dark:hover:text-[#e8dccb] font-medium text-sm tracking-wider transition-colors"
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
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