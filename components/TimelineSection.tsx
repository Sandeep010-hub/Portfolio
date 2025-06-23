'use client'

import { motion } from 'framer-motion'

const timeline = [
  {
    id: 1,
    title: 'Co-Founder & CTO',
    organization: 'WEBORTEX',
    start: 'Aug 2024',
    end: 'Present',
    location: 'Gudur, Andhra Pradesh (Remote/Hybrid)',
    description: 'Spearheaded development of company platform. Led team of 3–5 developers. Implemented admin dashboards, APIs, and SEO. Collaborated with clients using Agile methodology.',
    icon: '💼',
  },
  {
    id: 2,
    title: 'Web Developer Intern',
    organization: 'SYNXA IT Pvt Ltd',
    start: 'Jan 2023',
    end: 'July 2024',
    location: 'Remote',
    description: 'Developed backend using Node.js, Express.js, MongoDB. Integrated with React frontend. Implemented RBAC and API-level security.',
    icon: '🖥️',
  },
  {
    id: 3,
    title: 'B.Tech in Computer Science & Engineering',
    organization: 'Bapatla Engineering College',
    start: '2023',
    end: 'Present',
    location: 'Andhra Pradesh, India',
    description: 'Currently pursuing undergraduate studies with focus on full-stack development, cloud computing, and scalable web architecture. Engaged in leadership roles through clubs and startup initiatives.',
    icon: '🎓',
  },
  {
    id: 4,
    title: 'Diploma in Computer Science and Technology',
    organization: 'Sri Venkateswara Government Polytechnic',
    start: '2020',
    end: '2023',
    location: 'Tirupati, Andhra Pradesh, India',
    description: 'Built a solid foundation in programming, data structures, and application development. Participated in project-based learning, culminating in hands-on software development experiences.',
    icon: '🎓',
  },
]

const TimelineSection = () => {
  return (
    <section id="experience" className="py-16 unified-bg scroll-mt-20">
      {/* SVG Section Divider */}
      <svg className="w-full h-12 mb-8" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 Q720,80 1440,40 L1440,60 L0,60Z" fill="#3b82f6" fillOpacity="0.08" />
      </svg>
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Timeline</h2>
      <div className="relative max-w-3xl mx-auto">
        {/* Animated vertical line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute left-6 top-0 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 dark:from-blue-700 dark:via-blue-500 dark:to-blue-400 rounded-full z-0"
          style={{ minHeight: '100%', height: '100%' }}
        />
        <div className="pl-16 space-y-16 relative z-10">
          {timeline.map((item, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Animated dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 + 0.2, type: 'spring', stiffness: 300 }}
                className="absolute -left-10 top-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-400 dark:from-blue-700 dark:to-blue-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg border-4 border-white dark:border-gray-900"
              >
                {item.icon}
              </motion.div>
              {/* Glassmorphic/gradient card */}
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