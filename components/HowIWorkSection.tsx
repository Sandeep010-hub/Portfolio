'use client'

import { motion } from 'framer-motion'

const philosophies = [
  {
    title: 'Clean Code & Modularity',
    icon: '🧹',
    description: 'I believe in writing clean, maintainable code with a focus on modularity and reusability. Every component and function should have a single responsibility.'
  },
  {
    title: 'UI/UX First',
    icon: '🎨',
    description: 'User experience is at the heart of my development process. I prioritize intuitive interfaces, accessibility, and delightful interactions.'
  },
  {
    title: 'Agile & Collaboration',
    icon: '🤝',
    description: 'I thrive in agile teams, value open communication, and embrace feedback. Iterative development and collaboration drive better results.'
  },
  {
    title: 'Performance & Security',
    icon: '⚡',
    description: 'Optimizing for speed and security is non-negotiable. I use best practices to ensure fast load times and robust protection.'
  },
  {
    title: 'Continuous Learning',
    icon: '📚',
    description: 'Tech evolves fast. I stay updated with the latest tools, frameworks, and patterns to deliver modern, future-proof solutions.'
  },
]

const HowIWorkSection = () => {
  return (
    <section id="how-i-work" className="section-padding container-max">
      <h2 className="text-3xl font-bold mb-8 gradient-text text-center">How I Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {philosophies.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center text-center card-hover"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HowIWorkSection 