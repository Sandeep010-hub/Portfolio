'use client'

import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa'
import { useProfileStore } from '../../store/useProfileStore'

const Footer = () => {
  const mode = useProfileStore((state) => state.mode)

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Sandeep010-hub',
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yaswanth-sai-sandeep-kalagatla-655416243/',
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: 'Twitter',
      url: 'https://x.com/SaiSandeep0241',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M22.46 5.924c-.793.352-1.645.59-2.54.697a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.014-4.49 4.5 0 .353.04.697.116 1.025C7.728 9.37 4.1 7.6 1.67 4.905c-.388.67-.61 1.45-.61 2.28 0 1.573.8 2.96 2.02 3.77-.74-.024-1.44-.23-2.05-.57v.057c0 2.197 1.56 4.03 3.63 4.45-.38.104-.78.16-1.19.16-.29 0-.57-.027-.84-.08.57 1.78 2.23 3.08 4.2 3.12A8.98 8.98 0 0 1 2 19.54a12.67 12.67 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.77 0-.19-.01-.38-.02-.57.88-.64 1.64-1.44 2.24-2.35z" />
        </svg>
      ),
    },
    {
      name: 'Resume',
      url: 'https://drive.google.com/file/d/1SCXCrOGL5U_E9WpBBGp_2lPd5AQEuB0N/view?usp=sharing',
      icon: <FileText className="w-5 h-5" />,
    },
  ]

  return (
    <footer className={`mt-0 py-12 border-t transition-colors duration-500 ${mode === 'software'
      ? 'border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0f18]'
      : 'border-[#e6ded8] dark:border-[#352c26] bg-[#fdfbf7] dark:bg-[#201a16]'
      }`}>
      <div className="container-max px-4 sm:px-6 lg:px-8 mx-auto flex flex-col items-center justify-between gap-8 md:flex-row">

        {/* Left Side Metadata */}
        <div className={`text-center md:text-left ${mode === 'software' ? 'font-mono text-gray-500 dark:text-gray-400' : 'font-serif text-[#a89c8f] dark:text-[#8c7a6b]'
          }`}>
          {mode === 'software' ? (
            <div className="flex flex-col space-y-1">
              <span className="text-xs tracking-widest uppercase font-bold text-gray-800 dark:text-gray-200">System Core v2.0</span>
              <span className="text-[10px] tracking-wider uppercase opacity-70">Built with Next.js 16 & Framer Motion</span>
            </div>
          ) : (
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-semibold text-[#4a3f35] dark:text-[#e8dccb]">The Agent Architect</span>
              <span className="text-xs italic opacity-80">Crafting the Answer Engine Ecosystem</span>
            </div>
          )}
        </div>

        {/* Social Links */}
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              aria-label={link.name}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-xl transition-all duration-300 ${mode === 'software'
                ? 'bg-gray-100 text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/30 border border-transparent hover:border-blue-200 dark:hover:border-blue-800'
                : 'bg-[#f4efe9] text-[#7a6b5d] hover:text-[#4a3f35] hover:bg-[#e6ded8] dark:bg-[#2e2621] dark:text-[#a89c8f] dark:hover:text-[#e8dccb] dark:hover:bg-[#3a322b] border border-transparent blur-0'
                }`}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Right Side Copyright */}
        <div className={`text-center md:text-right ${mode === 'software' ? 'font-mono text-[10px] text-gray-500 dark:text-gray-500 tracking-wider uppercase' : 'font-serif text-xs text-[#a89c8f]'
          }`}>
          © 2026 Yaswanth Sai Sandeep Kalagatla<br className="hidden md:block" />
          <span className="md:inline hidden"> | </span>All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer 
