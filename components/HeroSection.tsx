'use client'

import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa'
import { useEffect, useState, useRef } from 'react'

import { useProfileStore } from '../store/useProfileStore'
import Image from 'next/image'

const softwareWords = [
  'Full-Stack Architect',
  'AI-Native Developer',
  'System Orchestrator',
  'EX-Founder @ WEBORTEX',
  'Cloud Infrastructure Expert',
]

const explorerWords = [
  'AEO Strategist',
  'Thought Leader',
  'Ecosystem Architect',
  'Technical Writer',
  'System Orchestrator',
]

const MorphingWord = ({ words, interval = 2000, align = 'center' }: { words: string[]; interval?: number; align?: 'left' | 'center' }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), interval)
    return () => clearInterval(t)
  }, [words.length, interval])

  return (
    <span className={`relative flex w-full min-w-[28ch] ${align === 'left' ? 'justify-start text-left' : 'justify-center text-center'}`} style={{ minHeight: '1.5em' }}>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: 'blur(8px)', scale: 0.95 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          exit={{ opacity: 0, filter: 'blur(8px)', scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className={`absolute w-full morphing-word ${align === 'left' ? 'text-left origin-left' : 'text-center'}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

const HeroSection = () => {
  const mode = useProfileStore((state) => state.mode)
  const morphWords = mode === 'software' ? softwareWords : explorerWords

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const mouseOp = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 })
  const springOp = useSpring(mouseOp, { stiffness: 100, damping: 20 })

  const backgroundInfo = useMotionTemplate`radial-gradient(200px circle at ${springX}px ${springY}px, rgba(0,201,255,0.10), transparent 70%)`

  const sectionRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
      mouseOp.set(1)
    }
  }

  const handleMouseLeave = () => {
    mouseOp.set(0)
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className={`w-full relative overflow-hidden pt-20 pb-8 lg:pt-24 lg:pb-12 scroll-mt-16 transition-colors duration-700 ${
        mode === 'software' ? 'hero-bg' : 'bg-gradient-to-b from-[#fdfbf7] to-[#f4efe9] dark:from-[#2a241f] dark:to-[#1a1512]'
      }`}
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative' }}
    >
      {/* Radial gradient following mouse (Software only) */}
      {mode === 'software' && (
        <motion.div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1,
            background: backgroundInfo as any,
            opacity: springOp,
          }}
        />
      )}
      
      <div className={`container-max px-4 sm:px-6 lg:px-8 z-10 w-full flex gap-8 lg:gap-12 items-center ${mode === 'software' ? 'flex-col lg:flex-row text-left justify-between' : 'flex-col text-center justify-center'}`}>

        {/* Left/Center Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`space-y-6 w-full ${mode === 'software' ? 'lg:w-3/5 xl:w-[65%] flex flex-col items-start' : 'max-w-4xl flex flex-col items-center justify-center mx-auto'}`}
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`text-4xl sm:text-6xl lg:text-7xl ${mode === 'software'
              ? 'font-black tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(31,41,55,1)] dark:[-webkit-text-stroke:1px_rgba(255,255,255,0.9)]'
              : 'font-bold font-serif text-[#4a3f35] dark:text-[#e8dccb] tracking-tight'
              } text-balance leading-tight`}
          >
            {mode === 'explorer' ? 'The Agent Architect: Pioneering the AEO Frontier' : 'Yaswanth Sai Sandeep Kalagatla'}
          </motion.h1>

          {/* Morphing Word Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={`text-xl sm:text-2xl lg:text-3xl font-medium min-h-[2.5em] pt-4 pb-2 ${
              mode === 'software' 
                ? 'text-left text-gray-600 dark:text-gray-300' 
                : 'text-center text-[#8c7a6b] dark:text-[#d4c8bf] font-serif italic'
              }`}
          >
            <span className={`block w-full min-w-[28ch] max-w-full ${mode === 'software' ? 'text-left' : 'text-center'}`}>
              <MorphingWord words={morphWords} interval={3500} align={mode === 'software' ? 'left' : 'center'} />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className={`text-lg max-w-3xl leading-relaxed ${
              mode === 'software' 
                ? 'mx-0 text-left text-gray-500 dark:text-gray-400 font-sans' 
                : 'mx-auto text-center text-[#6e5d4f] dark:text-[#a89c8f] font-serif'
            }`}
          >
            {mode === 'software' ? (
              <>
                <strong className="text-gray-700 dark:text-gray-200">Architecting Agentic RAG & AI-Native Ecosystems | Ex-Founder Mindset</strong><br />
                Driving a 60% acceleration in development cycles via LLM-workflow automation and delivering elite front-end architectures with strict 99.9% uptime and sub-200ms latency parameters scaling across AWS and Vercel Edge.
              </>
            ) : (
              <>
                Mapping the blueprint for <strong className="text-[#4a3f35] dark:text-[#e8dccb] font-semibold">Answer Engine Optimization</strong>. I distill complex Knowledge Graphs, multi-agent frameworks, and autonomous RAG architectures into production-ready insights that define the post-search paradigm.
              </>
            )}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className={`flex flex-wrap gap-4 items-center pt-8 w-full ${mode === 'software' ? 'justify-start' : 'justify-center'}`}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projects')}
              className={`px-8 py-4 font-semibold rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto ${
                mode === 'software' 
                  ? 'bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 shadow-blue-500/20' 
                  : 'bg-gradient-to-r from-[#8c7a6b] to-[#4a3f35] dark:from-[#d4c8bf] dark:to-[#8c7a6b] text-[#fdfbf7] dark:text-[#25201b] font-serif tracking-wide shadow-[#4a3f35]/20'
              }`}
            >
              {mode === 'software' ? 'Deploy Projects' : 'Explore My Work'}
              <ArrowDown className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className={`px-8 py-4 border-2 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto ${
                mode === 'software' 
                  ? 'border-gray-900 text-gray-900 hover:bg-gray-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900' 
                  : 'border-[#e6ded8] hover:border-[#8c7a6b] dark:border-[#4a3f35] dark:hover:border-[#d4c8bf] text-[#4a3f35] dark:text-[#e8dccb] hover:bg-[#f4efe9] dark:hover:bg-[#352c26] font-serif tracking-wide'
              }`}
            >
              <Mail className="w-5 h-5" />
              {mode === 'software' ? 'Initialize Contact' : 'Get in Touch'}
            </motion.button>

            <motion.a
              href="https://drive.google.com/file/d/16MMExhs3ib2WTPm_BZJI3O_56sLrVc04/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 border-2 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto ${
                mode === 'software'
                  ? 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white'
                  : 'border-[#e6ded8] hover:border-[#8c7a6b] dark:border-[#4a3f35] dark:hover:border-[#d4c8bf] text-[#4a3f35] dark:text-[#e8dccb] hover:bg-[#f4efe9] dark:hover:bg-[#352c26] font-serif tracking-wide'
              }`}
            >
              <Download className="w-5 h-5" />
              {mode === 'software' ? 'System Resume' : 'View Curriculum Vitae'}
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className={`flex flex-row flex-wrap items-center gap-4 pt-4 w-full ${mode === 'software' ? 'justify-start mt-4' : 'justify-center border-t border-[#e6ded8] dark:border-[#352c26] mt-8 pt-6'}`}
          >
            <motion.a
              href="https://github.com/Sandeep010-hub"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-full transition-colors shadow-lg ${
                mode === 'software' 
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                  : 'bg-[#f4efe9] dark:bg-[#352c26] text-[#4a3f35] dark:text-[#e8dccb] hover:bg-[#e6ded8] dark:hover:bg-[#4a3f35]'
              }`}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yaswanth-sai-sandeep-kalagatla-655416243/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-full transition-colors shadow-lg ${
                 mode === 'software'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-[#8c7a6b] dark:bg-[#d4c8bf] text-white dark:text-[#25201b] hover:bg-[#6e5d4f] dark:hover:bg-[#e8dccb]'
              }`}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.8, type: 'spring', stiffness: 100 }}
          className={`relative ${mode === 'software' ? 'w-full lg:w-2/5 xl:w-[35%] lg:-mt-12 lg:-translate-y-4' : 'w-full max-w-sm mx-auto -mt-4 lg:mt-0'}`}
        >
          <div className={`relative aspect-square w-full max-w-md mx-auto overflow-hidden group transition-all duration-700 ${
            mode === 'software' 
              ? 'rounded-[2rem] glass-card border-2 border-white/20 dark:border-gray-800/40 shadow-2xl'
              : 'rounded-full shadow-2xl shadow-[#4a3f35]/20 border-8 border-[#fdfbf7] dark:border-[#201a16]'
          }`}>
            {/* Decorative glow behind image */}
            {mode === 'software' && (
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 dark:from-cyan-500/10 dark:to-blue-600/10 z-0"></div>
            )}

            <Image
              src={mode === 'software' ? "/profile.png" : "/explorer.png"}
              alt="Yaswanth Sai Sandeep Profile"
              fill
              className="object-cover z-10 relative group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />

            {/* Inner decorative overlay */}
            <div className={`absolute inset-0 z-20 pointer-events-none border ${
              mode === 'software' ? 'rounded-[2rem] border-white/30 dark:border-white/10' : 'rounded-full border-[#e6ded8]/50 dark:border-[#352c26]/50'
            }`}></div>
          </div>

          {/* Subtle Decorative Elements Software Mode Only */}
          {mode === 'software' && (
            <>
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 border border-gray-200 dark:border-gray-800 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-8 h-8 bg-cyan-500/20 rounded-full blur-md"
              />
            </>
          )}
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
          animation: smooth-grid 20s linear infinite;
        }
        @keyframes smooth-grid {
          0% { background-position: 0 0; }
          100% { background-position: -48px -48px; }
        }
        .morphing-word {
          font-family: inherit;
          font-weight: 700;
          color: inherit;
          font-size: 1.2em;
          letter-spacing: 0.01em;
        }
        .morphing-word.text-left {
          color: #3b82f6; /* Blue for Software Mode */
        }
      `}</style>
    </section>
  )
}

export default HeroSection 
