'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { useProfileStore } from '../../store/useProfileStore'

const ContactSection = () => {
  const mode = useProfileStore((state) => state.mode)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
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
    <section id="contact" className="pt-8 pb-24 relative overflow-hidden scroll-mt-20">
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

        {mode === 'software' ? (
          /* ==================== SOFTWARE ARCHITECT MODE ==================== */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Left Side Info Cards */}
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
                    className="group flex items-center p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-[#0a0f18]/50 backdrop-blur-md hover:border-blue-500/50 hover:bg-white dark:hover:bg-[#0f172a] transition-all duration-300"
                  >
                    <div className="p-4 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0 bg-gray-100 dark:bg-gray-800/80 text-gray-900 dark:text-gray-300 group-hover:text-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="ml-4 sm:ml-6 min-w-0 flex-1 overflow-hidden">
                      <h4 className="text-sm font-semibold tracking-wide font-mono text-gray-500 dark:text-gray-400 uppercase">
                        {contact.label}
                      </h4>
                      <p className="mt-1 font-medium text-base sm:text-lg break-all sm:break-normal text-gray-900 dark:text-gray-100">
                        {contact.value}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Right Side: VSCode-style JSON Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 flex flex-col"
            >
              <form onSubmit={handleSubmit} className="w-full bg-[#181818] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm">
                {/* Window Topbar Controls */}
                <div className="bg-[#1f1f1f] px-4 py-3 flex items-center justify-between border-b border-gray-800/60">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="text-gray-400 text-[11px]">handshake.json — Yaswanth.dev</div>
                  <div className="w-12" />
                </div>
                
                {/* Active File Tab */}
                <div className="bg-[#242424] flex items-center text-xs text-gray-400 border-b border-gray-800/60">
                  <div className="bg-[#181818] text-gray-200 px-4 py-2.5 border-r border-gray-800/60 flex items-center space-x-2 border-t-2 border-cyan-500">
                    <span className="text-yellow-500 font-bold">{}</span>
                    <span>handshake.json</span>
                  </div>
                </div>

                {/* Editor Area */}
                <div className="p-6 text-[#d4d4d4] flex items-stretch">
                  {/* Line Numbers */}
                  <div className="text-gray-600 select-none text-right pr-4 border-r border-gray-800/60 space-y-4 font-mono hidden sm:block">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                  </div>
                  
                  {/* JSON Content */}
                  <div className="pl-0 sm:pl-4 flex-1 space-y-4 font-mono">
                    <div><span className="text-yellow-500">{`{`}</span></div>
                    
                    <div className="flex flex-wrap items-center">
                      <span className="text-[#9cdcfe] ml-4">"identityName"</span>
                      <span className="text-gray-300 mx-1">:</span>
                      <span className="text-[#ce9178]">"</span>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-transparent border-b border-dashed border-gray-700/80 hover:border-cyan-500/60 focus:border-cyan-500 focus:bg-cyan-950/10 hover:bg-cyan-950/5 text-[#ce9178] hover:text-cyan-400 focus:text-cyan-400 px-1 outline-none w-48 font-mono placeholder-gray-700 transition-all duration-300 hover:shadow-[0_0_8px_rgba(6,182,212,0.2)] focus:shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                        placeholder="sys.admin_01"
                      />
                      <span className="text-[#ce9178]">"</span>
                      <span className="text-gray-300">,</span>
                    </div>

                    <div className="flex flex-wrap items-center">
                      <span className="text-[#9cdcfe] ml-4">"returnAddress"</span>
                      <span className="text-gray-300 mx-1">:</span>
                      <span className="text-[#ce9178]">"</span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-transparent border-b border-dashed border-gray-700/80 hover:border-cyan-500/60 focus:border-cyan-500 focus:bg-cyan-950/10 hover:bg-cyan-950/5 text-[#ce9178] hover:text-cyan-400 focus:text-cyan-400 px-1 outline-none w-56 font-mono placeholder-gray-700 transition-all duration-300 hover:shadow-[0_0_8px_rgba(6,182,212,0.2)] focus:shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                        placeholder="router@domain.com"
                      />
                      <span className="text-[#ce9178]">"</span>
                      <span className="text-gray-300">,</span>
                    </div>

                    <div className="flex flex-wrap items-center">
                      <span className="text-[#9cdcfe] ml-4">"packetHeader"</span>
                      <span className="text-gray-300 mx-1">:</span>
                      <span className="text-[#ce9178]">"</span>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-transparent border-b border-dashed border-gray-700/80 hover:border-cyan-500/60 focus:border-cyan-500 focus:bg-cyan-950/10 hover:bg-cyan-950/5 text-[#ce9178] hover:text-cyan-400 focus:text-cyan-400 px-1 outline-none flex-1 min-w-[200px] font-mono placeholder-gray-700 transition-all duration-300 hover:shadow-[0_0_8px_rgba(6,182,212,0.2)] focus:shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                        placeholder="API Consultation Request"
                      />
                      <span className="text-[#ce9178]">"</span>
                      <span className="text-gray-300">,</span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-start">
                      <div className="flex items-center">
                        <span className="text-[#9cdcfe] ml-4">"payloadMessage"</span>
                        <span className="text-gray-300 mx-1">:</span>
                        <span className="text-[#ce9178]">"</span>
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="bg-transparent border-b border-dashed border-gray-700/80 hover:border-cyan-500/60 focus:border-cyan-500 focus:bg-cyan-950/10 hover:bg-cyan-950/5 text-[#ce9178] hover:text-cyan-400 focus:text-cyan-400 px-1 outline-none flex-1 font-mono placeholder-gray-700 resize-none ml-0 sm:ml-2 w-full mt-1 sm:mt-0 transition-all duration-300 hover:shadow-[0_0_8px_rgba(6,182,212,0.2)] focus:shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                        placeholder="Enter secure handshake description..."
                      />
                      <span className="text-[#ce9178]">"</span>
                    </div>

                    <div><span className="text-yellow-500">{`}`}</span></div>
                  </div>
                </div>

                {/* Submit Action Block */}
                <div className="bg-[#1f1f1f] p-4 border-t border-gray-800 flex items-center justify-between">
                  <div className="text-[11px] text-gray-500 font-mono hidden md:block">
                    [Click button to run payload compiler]
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting' || status === 'success'}
                    className={`w-full md:w-auto flex items-center justify-center gap-3 py-3 px-8 rounded-xl font-bold font-mono transition-all duration-300 disabled:opacity-80 disabled:cursor-not-allowed ${
                      status === 'success'
                        ? 'bg-emerald-500 text-white'
                        : 'bg-cyan-600 hover:bg-cyan-500 text-white hover:shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98]'
                    }`}
                  >
                    <AnimatePresence mode="popLayout">
                      {status === 'idle' && (
                        <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          <span>RUN HANDSHAKE</span>
                        </motion.div>
                      )}
                      {status === 'submitting' && (
                        <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                          <span>COMPILING PAYLOAD...</span>
                        </motion.div>
                      )}
                      {status === 'success' && (
                        <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>HANDSHAKE VERIFIED</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        ) : (
          /* ==================== EXPLORER EDITORIAL MODE ==================== */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
            {/* Left Side Call To Action */}
            <div className="lg:col-span-5 space-y-8 font-serif text-[#4a3f35] dark:text-[#e8dccb]">
              <h3 className="text-3xl md:text-5xl font-light italic leading-tight">
                Let's co-author the post-search era.
              </h3>
              <p className="text-lg text-[#6e5d4f] dark:text-[#a89c8f] font-light leading-relaxed">
                Whether you need to audit your digital ecosystem for AI answer engines, model structured knowledge graph inputs, or design low-latency multi-agent API pipelines — let's start the dialogue.
              </p>
              
              <div className="border-t border-[#e6ded8] dark:border-[#352c26] pt-8 space-y-6">
                {activeDetails.map((contact, index) => {
                  const Icon = contact.icon
                  return (
                    <a
                      href={contact.href}
                      key={index}
                      className="flex items-center space-x-4 text-[#8c7a6b] dark:text-[#a89c8f] hover:text-[#4a3f35] dark:hover:text-[#e8dccb] transition-colors group"
                    >
                      <div className="p-3 bg-[#fdfbf7] dark:bg-[#201a16] border border-[#e6ded8] dark:border-[#352c26] rounded-full group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-[#a89c8f]">{contact.label}</span>
                        <span className="text-base font-serif italic">{contact.value}</span>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Right Side: Material Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-[#fcfbf9] dark:bg-[#25201b] border border-[#e6ded8] dark:border-[#352c26] p-8 md:p-12 shadow-sm rounded-none"
            >
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                {/* Name */}
                <div className="relative border-b border-[#e6ded8] dark:border-[#352c26] pb-2 hover:border-[#8c7a6b]/70 dark:hover:border-[#d4c8bf]/70 focus-within:border-[#8c7a6b] dark:focus-within:border-[#d4c8bf] transition-colors">
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#8c7a6b] mb-1">Your Identity</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent font-serif italic text-lg text-[#4a3f35] dark:text-[#e8dccb] outline-none placeholder-[#d1c8c0]/60 dark:placeholder-[#4a3f35]/40"
                    placeholder="e.g. Jane Doe"
                  />
                </div>

                {/* Email */}
                <div className="relative border-b border-[#e6ded8] dark:border-[#352c26] pb-2 hover:border-[#8c7a6b]/70 dark:hover:border-[#d4c8bf]/70 focus-within:border-[#8c7a6b] dark:focus-within:border-[#d4c8bf] transition-colors">
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#8c7a6b] mb-1">Your Return Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent font-serif italic text-lg text-[#4a3f35] dark:text-[#e8dccb] outline-none placeholder-[#d1c8c0]/60 dark:placeholder-[#4a3f35]/40"
                    placeholder="e.g. jane@example.com"
                  />
                </div>

                {/* Subject */}
                <div className="relative border-b border-[#e6ded8] dark:border-[#352c26] pb-2 hover:border-[#8c7a6b]/70 dark:hover:border-[#d4c8bf]/70 focus-within:border-[#8c7a6b] dark:focus-within:border-[#d4c8bf] transition-colors">
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#8c7a6b] mb-1">Topic Header</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent font-serif italic text-lg text-[#4a3f35] dark:text-[#e8dccb] outline-none placeholder-[#d1c8c0]/60 dark:placeholder-[#4a3f35]/40"
                    placeholder="e.g. Strategic AEO Audit Engagement"
                  />
                </div>

                {/* Message */}
                <div className="relative border-b border-[#e6ded8] dark:border-[#352c26] pb-2 hover:border-[#8c7a6b]/70 dark:hover:border-[#d4c8bf]/70 focus-within:border-[#8c7a6b] dark:focus-within:border-[#d4c8bf] transition-colors">
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#8c7a6b] mb-1">Objective Payload</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full bg-transparent font-serif italic text-lg text-[#4a3f35] dark:text-[#e8dccb] outline-none resize-none placeholder-[#d1c8c0]/60 dark:placeholder-[#4a3f35]/40"
                    placeholder="e.g. Share a brief overview of your target objectives..."
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="w-full py-4 px-8 bg-[#4a3f35] dark:bg-[#e8dccb] text-[#fdfbf7] dark:text-[#26201b] hover:bg-[#352c26] dark:hover:bg-white hover:text-white dark:hover:text-[#26201b] transition-all font-serif font-semibold italic rounded-none tracking-wider text-base shadow-sm"
                >
                  <AnimatePresence mode="popLayout">
                    {status === 'idle' && (
                      <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-2">
                        <span>Send Consulting Request</span>
                        <span>→</span>
                      </motion.div>
                    )}
                    {status === 'submitting' && (
                      <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-2">
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
                        <span>Sending Request...</span>
                      </motion.div>
                    )}
                    {status === 'success' && (
                      <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Message Delivered</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ContactSection