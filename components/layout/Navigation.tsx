'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useProfileStore } from '../../store/useProfileStore'
import { useTheme } from 'next-themes'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const mode = useProfileStore((state) => state.mode)
  const toggleMode = useProfileStore((state) => state.toggleMode)
  const { theme, setTheme } = useTheme()

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextMode = mode === 'software' ? 'explorer' : 'software'
    const nextTheme = nextMode === 'explorer' ? 'dark' : 'light'

    const x = e.clientX
    const y = e.clientY

    if (document.startViewTransition) {
      document.documentElement.style.setProperty('--x', `${x}px`)
      document.documentElement.style.setProperty('--y', `${y}px`)
      document.startViewTransition(() => {
        toggleMode()
        setTheme(nextTheme)
      })
    } else {
      toggleMode()
      setTheme(nextTheme)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const softwareItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const explorerItems = [
    { name: 'Home', href: '#home' },
    { name: 'LinkedIn / Stats', href: '#insights' },
    { name: 'Research (AEO)', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const navItems = mode === 'software' ? softwareItems : explorerItems

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        mode === 'software'
          ? scrolled || isOpen
            ? 'bg-white/95 dark:bg-[#0a0f18]/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-lg'
            : 'bg-transparent'
          : scrolled || isOpen
            ? 'bg-[#fdfbf7]/95 dark:bg-[#201a16]/95 backdrop-blur-xl border-b border-[#e6ded8] dark:border-[#352c26] shadow-sm'
            : 'bg-transparent'
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`flex items-center space-x-3 z-20 ${mode === 'software' ? 'font-sans' : 'font-serif'}`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
              mode === 'software'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md shadow-blue-500/20'
                : 'bg-gradient-to-br from-[#8c7a6b] to-[#4a3f35] dark:from-[#d4c8bf] dark:to-[#8c7a6b] rounded-full'
            }`}>
              <span className={`text-white font-bold ${mode === 'software' ? 'text-sm' : 'text-lg italic font-serif text-[#fdfbf7] dark:text-[#25201b]'}`}>YS</span>
            </div>
            <button
              onClick={() => scrollToSection('#home')}
              className="bg-transparent border-none outline-none cursor-pointer p-0 m-0 flex flex-col items-start"
              aria-label="Go to home section"
            >
              <span className={`text-lg transition-colors duration-500 ${
                mode === 'software'
                  ? 'font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent tracking-tight'
                  : 'font-bold text-[#4a3f35] dark:text-[#e8dccb] tracking-wide'
              }`}>
                Yaswanth.dev
              </span>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          {mode === 'software' ? (
            <div className="hidden md:flex items-center space-x-6 border border-gray-200 dark:border-gray-800 rounded-full px-6 py-2 bg-white/50 dark:bg-[#0f172a]/50 backdrop-blur-md shadow-lg shadow-blue-900/5">
              <div className="flex items-center space-x-2 mr-4 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-[10px] font-mono font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest">Sys.Online</span>
              </div>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={e => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200 font-semibold tracking-wide"
                >
                  {item.name}
                </a>
              ))}
            </div>
          ) : (
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-8 bg-[#fdfbf7]/60 dark:bg-[#201a16]/60 backdrop-blur-xl border border-[#e6ded8] dark:border-[#352c26] rounded-full px-8 py-3 shadow-lg shadow-[#4a3f35]/5">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={e => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-sm text-[#8c7a6b] dark:text-[#a89c8f] hover:text-[#4a3f35] dark:hover:text-[#e8dccb] transition-colors duration-300 font-serif italic tracking-wider"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}

          {/* Theme Toggle & Mobile Menu Trigger */}
          <div className="flex items-center space-x-2 md:space-x-4 z-20">
            {/* The Edison Bulb Toggle */}
            <motion.button
              onClick={handleToggle}
              className="relative p-2 rounded-full outline-none mr-2 md:mr-0 transition-all duration-500"
              animate={
                mode === 'explorer'
                  ? { opacity: [1, 0.4, 1, 0.2, 1], filter: "drop-shadow(0 0 12px rgba(251, 191, 36, 0.6))" }
                  : { opacity: 1, filter: "drop-shadow(0 0 0px rgba(251, 191, 36, 0))" }
              }
              transition={
                mode === 'explorer'
                  ? { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 1] }
                  : { duration: 0.3 }
              }
              aria-label="Toggle Architect / Explorer Mode"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill={mode === 'explorer' ? "#facc15" : "none"} stroke={mode === 'explorer' ? "#facc15" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={mode === 'software' ? 'text-gray-900 dark:text-white' : 'text-amber-400'}>
                <path d="M9 18h6" />
                <path d="M10 22h4" />
                <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.55.59 2.76 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
              </svg>
              {mode === 'explorer' && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-amber-400 opacity-20"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1.5 }}
                  transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-xl transition-colors duration-300 ${
                mode === 'software'
                  ? 'bg-gray-100 dark:bg-[#0f172a] text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800'
                  : 'bg-[#f4efe9] dark:bg-[#2e2621] text-[#4a3f35] dark:text-[#e8dccb] border border-[#e6ded8] dark:border-[#3a322b]'
              }`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className={`py-4 space-y-2 px-2 mt-2 rounded-2xl shadow-2xl mb-4 border ${
                mode === 'software'
                  ? 'bg-white dark:bg-[#0f172a] border-gray-200 dark:border-gray-800'
                  : 'bg-[#fdfbf7] dark:bg-[#201a16] border-[#e6ded8] dark:border-[#352c26]'
              }`}>
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={e => {
                      e.preventDefault();
                      setIsOpen(false);
                      setTimeout(() => {
                        scrollToSection(item.href);
                      }, 300);
                    }}
                    className={`block w-full text-left px-4 py-4 rounded-xl transition-all duration-300 ${
                      mode === 'software'
                        ? 'text-gray-900 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-blue-600 dark:hover:text-cyan-400'
                        : 'text-[#4a3f35] dark:text-[#e8dccb] font-serif text-lg italic hover:bg-[#f4efe9] dark:hover:bg-[#2e2621] hover:text-[#25201b]'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation 