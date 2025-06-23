'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import { useTransition, animated } from '@react-spring/web'

const morphWords = [
  'Full Stack Developer',
  'Co-Founder & CTO at WEBORTEX',
  'API Creator',
  'Startup Leader',
  'React & Node.js Expert',
]

const MorphingWord = ({ words, interval = 2000 }: { words: string[]; interval?: number }) => {
  const [index, setIndex] = useState(0)
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0, filter: 'blur(8px) scale(0.95)' },
    enter: { opacity: 1, filter: 'blur(0px) scale(1)' },
    leave: { opacity: 0, filter: 'blur(8px) scale(1.05)' },
    config: { tension: 120, friction: 20 },
  })

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), interval)
    return () => clearInterval(t)
  }, [words.length, interval])

  return (
    <span
      className="block w-full min-w-[28ch] max-w-full text-center"
    >
      {transitions((style, i) => (
        <animated.span
          style={{ ...style, position: 'absolute', left: 0, right: 0, width: '100%' }}
          className="morphing-word"
        >
          {words[i]}
        </animated.span>
      ))}
    </span>
  )
}

const HeroSection = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden hero-bg pt-20 scroll-mt-16"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative' }}
    >
      {/* Radial gradient following mouse */}
      {mousePos && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1,
            background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,201,255,0.10), transparent 70%)`,
            transition: 'background 0.2s',
          }}
        />
      )}
      {/* Decorative SVG Stars */}
      <svg className="absolute left-1/4 top-1/3 w-8 h-8 opacity-30 z-0" viewBox="0 0 24 24" fill="none"><path d="M12 2L13.09 8.26L19 8.27L14.18 11.97L15.27 18.23L12 14.77L8.73 18.23L9.82 11.97L5 8.27L10.91 8.26L12 2Z" fill="#fff"/></svg>
      <svg className="absolute right-1/4 bottom-1/4 w-6 h-6 opacity-20 z-0" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2" fill="#fff"/></svg>
      <svg className="absolute left-1/2 top-1/5 w-4 h-4 opacity-20 z-0" viewBox="0 0 24 24" fill="none"><rect x="10" y="10" width="4" height="4" fill="#fff"/></svg>
      <div className="container-max text-center px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 dark:text-gray-300 font-medium"
          >
            👋 Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold"
          >
            Yaswanth Sai Sandeep Kalagatla
          </motion.h1>

          {/* Morphing Word Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 dark:text-gray-300 font-medium min-h-[2.5em] pt-6 pb-2"
          >
            <span className="block w-full min-w-[28ch] max-w-full text-center">
              <MorphingWord words={morphWords} interval={3500} />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-gray-400 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Computer Science undergraduate and Full-stack developer with 2+ years of hands-on experience in MERN stack, RESTful APIs, and modern UI/UX. Proven startup leadership as CTO at WEBORTEX. Actively seeking global remote roles where I can deliver impactful, scalable web applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              Explore Projects
              <ArrowDown className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3 border-2 border-green-400 text-green-500 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Hire Me
            </motion.button>

            <motion.a
              href="https://drive.google.com/file/d/1Y6lnpOE8FmLgeBPCkM6HkYXUHhsFcbpX/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-300 dark:text-gray-300 font-semibold rounded-lg hover:border-gray-400 dark:hover:border-gray-500 hover:text-white dark:hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </motion.a>
          </motion.div>

          {/* Social Links - now below buttons for better balance */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-row justify-center items-center gap-4 pt-4"
          >
            <motion.a
              href="https://github.com/Sandeep010-hub"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yaswanth-sai-sandeep-kalagatla-655416243/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      <style jsx global>{`
        .hero-bg {
          background: linear-gradient(120deg, #10141c 0%, #151a23 100%);
          position: relative;
        }
        .hero-bg:before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .gradient-text {
          background: linear-gradient(90deg, #22d3ee 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        .morphing-word {
          font-family: inherit;
          font-weight: 700;
          color: #3b82f6;
          font-size: 1.2em;
          letter-spacing: 0.01em;
        }
      `}</style>
    </section>
  )
}

export default HeroSection 