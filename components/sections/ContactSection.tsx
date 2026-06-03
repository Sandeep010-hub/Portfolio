'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { useProfileStore } from '../../store/useProfileStore'

const ContactSection = () => {
  const mode = useProfileStore((state) => state.mode)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  const contactDetails = [
    { label: 'Secure Transmission', value: 'saisandeepkalagatla@gmail.com', href: 'mailto:saisandeepkalagatla@gmail.com', icon: Mail },
    { label: 'Direct Line', value: '+91 8688221981', href: 'tel:+918688221981', icon: Phone },
    { label: 'Base Operations', value: 'Remote / Global', href: '#', icon: MapPin },
  ]

  const explorerDetails = [
    { label: 'Email Inquiries', value: 'saisandeepkalagatla@gmail.com', href: 'mailto:saisandeepkalagatla@gmail.com', icon: Mail },
    { label: 'Phone Consult', value: '+91 8688221981', href: 'tel:+918688221981', icon: Phone },
    { label: 'Availability', value: 'Open for Engagements', href: '#', icon: MapPin },
  ]

  const activeDetails = mode === 'software' ? contactDetails : explorerDetails

  return (
    <section id="contact" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="container-max px-4 sm:px-6 lg:px-8 mx-auto relative z-10">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          {mode === 'software' ? (
            <>
              <motion.h2 layout="position" className="text-4xl font-bold font-sans text-gray-900 dark:text-gray-100 tracking-tight">Initialize Connection</motion.h2>
              <motion.p layout="position" className="text-gray-500 dark:text-gray-400 mt-2 font-mono text-sm">
                [awaiting secure handshake protocols]
              </motion.p>
            </>
          ) : (
            <>
              <motion.h2 layout="position" className="text-4xl font-bold font-serif text-[#4a3f35] dark:text-[#e8dccb] tracking-tight">Start a Conversation</motion.h2>
              <motion.p layout="position" className="text-[#8c7a6b] dark:text-[#a89c8f] mt-3 font-serif text-lg italic">
                Whether you need a strategic partner or an architectural consultation, I'm ready to listen.
              </motion.p>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            {activeDetails.map((contact, index) => {
              const Icon = contact.icon
              return (
                <motion.a
                  href={contact.href}
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`group flex items-center p-6 rounded-2xl border transition-all duration-300 ${mode === 'software'
                    ? 'border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-[#0a0f18]/50 backdrop-blur-md hover:border-blue-500/50 hover:bg-white dark:hover:bg-[#0f172a]'
                    : 'border-[#e6ded8] dark:border-[#3a322b] bg-[#fcfbf9]/60 dark:bg-[#2a241f]/60 backdrop-blur-md hover:border-[#d4c8bf] dark:hover:border-[#4a3f35] hover:shadow-xl'
                    }`}
                >
                  <div className={`p-4 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0 ${mode === 'software'
                    ? 'bg-gray-100 dark:bg-gray-800/80 text-gray-900 dark:text-gray-300 group-hover:text-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20'
                    : 'bg-[#f4efe9] dark:bg-[#383029] text-[#7a6b5d] dark:text-[#d1c8c0]'
                    }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="ml-4 sm:ml-6 min-w-0 flex-1 overflow-hidden">
                    <h4 className={`text-sm font-semibold tracking-wide ${mode === 'software' ? 'font-mono text-gray-500 dark:text-gray-400 uppercase' : 'font-serif text-[#a89c8f] dark:text-[#8c7a6b]'
                      }`}>
                      {contact.label}
                    </h4>
                    <p className={`mt-1 font-medium text-base sm:text-lg break-all sm:break-normal ${mode === 'software' ? 'text-gray-900 dark:text-gray-100' : 'text-[#4a3f35] dark:text-[#e8dccb]'
                      }`}>
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              )
            })}
          </div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`lg:col-span-7 p-8 md:p-10 rounded-3xl border relative overflow-hidden ${mode === 'software'
              ? 'bg-white dark:bg-[#0b1120] border-gray-200 dark:border-gray-800 shadow-2xl shadow-blue-900/5'
              : 'bg-[#fcfbf9] dark:bg-[#25201b] border-[#e6ded8] dark:border-[#352c26] shadow-xl'
              }`}
          >
            {/* Soft decorative glow background */}
            {mode === 'software' && (
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Name */}
                <div className="relative group">
                  <label className={`block text-xs font-semibold mb-2 ml-1 ${mode === 'software' ? 'font-mono uppercase text-gray-500 dark:text-gray-400' : 'font-serif text-[#8c7a6b]'
                    }`}>
                    Identity [Name]
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-5 py-4 rounded-xl border transition-all duration-300 focus:outline-none ${mode === 'software'
                      ? 'bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 hover:border-blue-400 dark:hover:border-blue-500/50 focus:border-blue-500 focus:bg-white dark:focus:bg-[#0f172a] focus:ring-4 focus:ring-blue-500/10'
                      : 'bg-white dark:bg-[#2e2621] border-[#e6ded8] dark:border-[#4a3f35] text-[#4a3f35] dark:text-[#e8dccb] placeholder-[#a89c8f] hover:border-[#8c7a6b] dark:hover:border-[#a89c8f] focus:border-[#4a3f35] dark:focus:border-[#e8dccb] focus:ring-4 focus:ring-[#8c7a6b]/5'
                      }`}
                    placeholder={mode === 'software' ? 'sys.admin_01' : 'Jane Doe'}
                  />
                </div>

                {/* Email */}
                <div className="relative group">
                  <label className={`block text-xs font-semibold mb-2 ml-1 ${mode === 'software' ? 'font-mono uppercase text-gray-500 dark:text-gray-400' : 'font-serif text-[#8c7a6b]'
                    }`}>
                    Return Address [Email]
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-5 py-4 rounded-xl border transition-all duration-300 focus:outline-none ${mode === 'software'
                      ? 'bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 hover:border-blue-400 dark:hover:border-blue-500/50 focus:border-blue-500 focus:bg-white dark:focus:bg-[#0f172a] focus:ring-4 focus:ring-blue-500/10'
                      : 'bg-white dark:bg-[#2e2621] border-[#e6ded8] dark:border-[#4a3f35] text-[#4a3f35] dark:text-[#e8dccb] placeholder-[#a89c8f] hover:border-[#8c7a6b] dark:hover:border-[#a89c8f] focus:border-[#4a3f35] dark:focus:border-[#e8dccb] focus:ring-4 focus:ring-[#8c7a6b]/5'
                      }`}
                    placeholder={mode === 'software' ? 'router@domain.com' : 'jane@example.com'}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="relative group">
                <label className={`block text-xs font-semibold mb-2 ml-1 ${mode === 'software' ? 'font-mono uppercase text-gray-500 dark:text-gray-400' : 'font-serif text-[#8c7a6b]'
                  }`}>
                  Packet Header [Subject]
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-5 py-4 rounded-xl border transition-all duration-300 focus:outline-none ${mode === 'software'
                    ? 'bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 hover:border-blue-400 dark:hover:border-blue-500/50 focus:border-blue-500 focus:bg-white dark:focus:bg-[#0f172a] focus:ring-4 focus:ring-blue-500/10'
                    : 'bg-white dark:bg-[#2e2621] border-[#e6ded8] dark:border-[#4a3f35] text-[#4a3f35] dark:text-[#e8dccb] placeholder-[#a89c8f] hover:border-[#8c7a6b] dark:hover:border-[#a89c8f] focus:border-[#4a3f35] dark:focus:border-[#e8dccb] focus:ring-4 focus:ring-[#8c7a6b]/5'
                    }`}
                  placeholder={mode === 'software' ? 'Architecture Consultation Request' : 'Collaboration Inquiry'}
                />
              </div>

              {/* Message */}
              <div className="relative group">
                <label className={`block text-xs font-semibold mb-2 ml-1 ${mode === 'software' ? 'font-mono uppercase text-gray-500 dark:text-gray-400' : 'font-serif text-[#8c7a6b]'
                  }`}>
                  Payload [Message]
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={5}
                  className={`w-full px-5 py-4 rounded-xl border transition-all duration-300 focus:outline-none resize-none ${mode === 'software'
                    ? 'bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 hover:border-blue-400 dark:hover:border-blue-500/50 focus:border-blue-500 focus:bg-white dark:focus:bg-[#0f172a] focus:ring-4 focus:ring-blue-500/10'
                    : 'bg-white dark:bg-[#2e2621] border-[#e6ded8] dark:border-[#4a3f35] text-[#4a3f35] dark:text-[#e8dccb] placeholder-[#a89c8f] hover:border-[#8c7a6b] dark:hover:border-[#a89c8f] focus:border-[#4a3f35] dark:focus:border-[#e8dccb] focus:ring-4 focus:ring-[#8c7a6b]/5'
                    }`}
                  placeholder={mode === 'software' ? 'Entering secure payload parameters...' : 'Briefly describe your objectives...'}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-bold transition-all duration-300 disabled:opacity-80 disabled:cursor-not-allowed ${mode === 'software'
                  ? status === 'success'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-[1.01] hover:shadow-xl hover:shadow-gray-900/10'
                  : status === 'success'
                    ? 'bg-green-600 text-white'
                    : 'bg-[#4a3f35] dark:bg-[#e8dccb] text-[#fdfbf7] dark:text-[#26201b] hover:bg-[#352c26] dark:hover:bg-white hover:shadow-lg'
                  }`}
              >
                <AnimatePresence mode="popLayout">
                  {status === 'idle' && (
                    <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      <span>{mode === 'software' ? 'Execute Transmission' : 'Send Message'}</span>
                    </motion.div>
                  )}
                  {status === 'submitting' && (
                    <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-5 h-5 border-2 border-current border-t-transparent rounded-full" />
                      <span>{mode === 'software' ? 'Encrypting & Routing...' : 'Sending...'}</span>
                    </motion.div>
                  )}
                  {status === 'success' && (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>{mode === 'software' ? 'Transmission Verified' : 'Message Delivered'}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection