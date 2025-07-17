'use client'

import { Github, Linkedin, FileText } from 'lucide-react'

const Footer = () => {
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
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.46 5.924c-.793.352-1.645.59-2.54.697a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.014-4.49 4.5 0 .353.04.697.116 1.025C7.728 9.37 4.1 7.6 1.67 4.905c-.388.67-.61 1.45-.61 2.28 0 1.573.8 2.96 2.02 3.77-.74-.024-1.44-.23-2.05-.57v.057c0 2.197 1.56 4.03 3.63 4.45-.38.104-.78.16-1.19.16-.29 0-.57-.027-.84-.08.57 1.78 2.23 3.08 4.2 3.12A8.98 8.98 0 0 1 2 19.54a12.67 12.67 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.77 0-.19-.01-.38-.02-.57.88-.64 1.64-1.44 2.24-2.35z"/>
        </svg>
      ),
    },
    {
      name: 'Resume',
      url: 'https://drive.google.com/file/d/1l9St2w85iwg6xZwha1DPqnRnnpS7IFaw/view?usp=drive_link',
      icon: <FileText className="w-5 h-5" />,
    },
  ]

  return (
    <footer className="mt-0 py-8 border-t border-gray-200 dark:border-gray-800 unified-bg">
      <div className="container-max flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex gap-4 mb-2">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.url} target="_blank" aria-label={link.name} className="p-2 rounded-full bg-gray-800 hover:bg-primary-500 text-white transition-colors">
              {link.icon}
            </a>
          ))}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Yaswanth Sai Sandeep Kalagatla. All rights reserved.
        </div>
      </div>
      <style jsx global>{`
        .unified-bg {
          background: linear-gradient(120deg, #10141c 0%, #151a23 100%) !important;
        }
      `}</style>
    </footer>
  )
}

export default Footer 
