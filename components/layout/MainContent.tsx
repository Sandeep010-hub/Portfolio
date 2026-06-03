'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useProfileStore } from '../../store/useProfileStore'
import TechStackSection from '../sections/TechStackSection'
import ProjectShowcase from '../sections/ProjectShowcase'
import TimelineSection from '../sections/TimelineSection'
import ResearchExplorer from '../sections/ResearchExplorer'
import LinkedInInsights from '../sections/LinkedInInsights'

export default function MainContent() {
  const mode = useProfileStore((state) => state.mode)

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {mode === 'software' ? (
          <motion.div
            key="software"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full"
          >
            <TechStackSection />
            <ProjectShowcase />
            <TimelineSection />
          </motion.div>
        ) : (
          <motion.div
            key="explorer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full"
          >
            <LinkedInInsights />
            <ResearchExplorer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
