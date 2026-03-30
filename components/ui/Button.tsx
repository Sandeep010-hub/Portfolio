'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  className?: string;
}

export const Button = ({ children, className = '', ...props }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
