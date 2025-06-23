'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { projects as oldProjects, Project } from '../data/projects'

const projects: Project[] = [
  {
    id: 'webortex',
    title: 'WEBORTEX Official Website',
    description: 'Official website of WEBORTEX showcasing digital solutions and company info.',
    longDescription: '',
    image: '/webortex.png',
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    category: 'Full Stack',
    role: 'Co-Founder & CTO',
    duration: 'Aug 2023 - Present',
    liveUrl: 'https://webortex.com',
    githubUrl: '',
    features: [],
    challenges: [],
    results: [],
    featured: true,
    tags: [],
  },
  {
    id: '64frames',
    title: '64 Frames Landing Page',
    description: 'Creative agency landing page with animations and responsive layout.',
    longDescription: '',
    image: '/64Framez.png',
    technologies: ['React.js', 'Tailwind CSS'],
    category: 'Frontend',
    role: 'Frontend Developer',
    duration: '',
    liveUrl: 'https://64framez.com',
    githubUrl: '',
    features: [],
    challenges: [],
    results: [],
    featured: false,
    tags: [],
  },
  {
    id: 'restaurant-app',
    title: 'Restaurant Management App',
    description: 'Role-based restaurant app with customer, chef, and admin views.',
    longDescription: '',
    image: '/restuarant.jpeg',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    category: 'Full Stack',
    role: 'Full Stack Developer',
    duration: '',
    githubUrl: 'https://github.com/Sandeep010-hub/Restaurant-application',
    features: [],
    challenges: [],
    results: [],
    featured: false,
    tags: [],
  },
  {
    id: 'ems',
    title: 'Employee Management System (EMS)',
    description: 'EMS with secure CRUD and RBAC using Java stack.',
    longDescription: '',
    image: '/ems.png',
    technologies: ['Java Spring Boot', 'MySQL', 'React.js'],
    category: 'Full Stack',
    role: 'Full Stack Developer',
    duration: '',
    githubUrl: 'https://github.com/SynxaIt/EMS_UI',
    features: [],
    challenges: [],
    results: [],
    featured: false,
    tags: [],
  },
  {
    id: 'koinx',
    title: 'Koinx Stock Analysis Dashboard',
    description: 'Real-time stock analytics dashboard with visual insights.',
    longDescription: '',
    image: '/konix.jpeg',
    technologies: ['React.js', 'Chart.js/D3.js', 'External APIs'],
    category: 'Frontend',
    role: 'Frontend Developer',
    duration: '',
    githubUrl: 'https://github.com/Sandeep010-hub/koinx',
    features: [],
    challenges: [],
    results: [],
    featured: false,
    tags: [],
  },
  {
    id: 'inside-journal',
    title: 'Inside Journal – Client Project',
    description: 'Blog platform with journal publishing, SEO, and client collaboration.',
    longDescription: '',
    image: '/insideJournal.png',
    technologies: ['React.js', 'Netlify'],
    category: 'Client Project',
    role: 'Lead Developer',
    duration: '',
    liveUrl: 'https://insidejournal.netlify.app',
    githubUrl: 'https://github.com/Sandeep010-hub/insideJournal-Final',
    features: [],
    challenges: [],
    results: [],
    featured: false,
    tags: [],
  },
  {
    id: 'job-bridge',
    title: 'Job Bridge – Career & Portfolio Platform (Ongoing)',
    description: 'Full-stack platform for student projects and AI-based career guidance.',
    longDescription: '',
    image: '/jobBridge.png',
    technologies: ['MERN Stack', 'AI APIs'],
    category: 'Full Stack',
    role: 'Full Stack Developer',
    duration: '',
    liveUrl: 'https://preview--jobbridge-aetherium-ui.lovable.app',
    githubUrl: '',
    features: [],
    challenges: [],
    results: [],
    featured: false,
    tags: [],
  },
]

const ProjectShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    custom={index}
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                    className="group relative cursor-pointer transition-all duration-300 mb-8"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(59,130,246,0.12)]">
                      {/* Project Image */}
                      <div className="relative h-48 rounded-t-xl overflow-hidden bg-white dark:bg-gray-900">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-t from-blue-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        {/* Featured Badge */}
                        {project.featured && (
                          <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium shadow"
                          >
                            Featured
                          </motion.div>
                        )}
                        {/* Category Badge */}
                        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs font-medium shadow">
                          {project.category}
                        </div>
                      </div>
                      {/* Project Content */}
                      <div className="p-6">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                            {project.description}
                          </p>
                          {/* Role and Duration */}
                          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                            <span>{project.role}</span>
                            <span>{project.duration}</span>
                          </div>
                        </div>
                        {/* Technologies */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
                                title={tech}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        {/* Links */}
                        <div className="flex space-x-4">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                            >
                              Live Demo
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 dark:text-gray-300 hover:underline text-sm font-medium"
                            >
                              GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
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