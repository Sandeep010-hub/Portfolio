'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const testimonials = [
  {
    name: 'Gnana',
    role: 'Team Mate',
    quote: 'Gnana: The project was delivered with exceptional quality and attention to detail.'
  },
  {
    name: 'Tharun',
    role: 'Team Mate',
    quote: 'Tharun: Creative solutions and modern UI/UX. Highly recommended!'
  },
  {
    name: 'Jaydeep',
    role: 'Team Mate',
    quote: 'Jaydeep: Reliable, knowledgeable, and always up-to-date with the latest tech.'
  },
  {
    name: 'Sisindri',
    role: 'Team Mate',
    quote: 'Sisindri: Delivered a seamless mobile experience for our users.'
  },
  {
    name: 'Ashok',
    role: 'Team Mate',
    quote: 'Ashok: API integrations were smooth and well-documented.'
  },
  {
    name: '64Frames',
    role: 'Website Client (Journal)',
    quote: '64Frames: Our website for Journal was built with great care and technical expertise.'
  },
]

// Duplicate testimonials for seamless infinite scroll
const loopedTestimonials = [...testimonials, ...testimonials]

const TestimonialsSection = () => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [scrollWidth, setScrollWidth] = useState(0)

  useEffect(() => {
    if (cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth + 24 // 24px for gap (space-x-6)
      setScrollWidth(cardWidth * testimonials.length)
    }
  }, [])

  return (
    <section id="testimonials" className="py-20 unified-bg">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Testimonials
        </motion.h2>
        {/* Auto-scrolling, looped testimonials */}
        <div
          className="overflow-x-hidden pb-4 scrollbar-hide"
        >
          <motion.div
            className="flex space-x-6 min-w-max"
            animate={scrollWidth > 0 ? { x: [0, -scrollWidth] } : {}}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: testimonials.length * 3,
              ease: 'linear',
            }}
            style={{ willChange: 'transform' }}
          >
            {loopedTestimonials.map((t, i) => (
              <div
                key={i}
                ref={i === 0 ? cardRef : undefined}
                className="min-w-[320px] max-w-xs bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg p-8 flex flex-col items-center glass-card snap-center"
              >
                <blockquote className="text-lg text-gray-700 dark:text-gray-200 italic mb-4 text-center">
                  “{t.quote}”
                </blockquote>
                <div className="font-semibold text-blue-600 dark:text-blue-400 text-base">
                  {t.name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  {t.role}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <style jsx global>{`
        .glass-card {
          background: rgba(255,255,255,0.25);
          box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        /* Hide caret except in input/textarea */
        html, body, main, section, div, span, h1, h2, h3, h4, h5, h6, p, a, ul, li, button {
          caret-color: transparent;
        }
        input, textarea, [contenteditable="true"] {
          caret-color: auto;
        }
      `}</style>
    </section>
  )
}

export default TestimonialsSection 