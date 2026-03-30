'use client'

import { motion } from 'framer-motion'
import { Project } from '../../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
  setHoveredProject: (id: string | null) => void
  setSelectedProject: (project: Project) => void
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

export const ProjectCard = ({ project, index, setHoveredProject, setSelectedProject }: ProjectCardProps) => {
  return (
    <motion.div
      variants={itemVariants}
      custom={index}
      onHoverStart={() => setHoveredProject(project.id)}
      onHoverEnd={() => setHoveredProject(null)}
      className="group relative cursor-pointer transition-all duration-300 mb-8 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 rounded-xl"
      onClick={() => setSelectedProject(project)}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setSelectedProject(project)
        }
      }}
    >
      <div className="backdrop-blur-md bg-white/40 dark:bg-[#0f172a]/40 rounded-xl shadow-lg border-[1px] border-[oklch(100%_0_0/10%)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(59,130,246,0.12)]">
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
  )
}
