import React from 'react'
import { motion } from 'framer-motion'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

function Contact() {
  const contactInfo = [
    { icon: <MdLocationOn />, label: 'Dhaka, Bangladesh' },
    { icon: <MdEmail />, label: 'razaanreza0705@gmail.com' },
  ]

  const socialLinks = [
    { icon: <SiGithub />, link: 'https://github.com/Razaan-RR' },
    { icon: <SiLinkedin />, link: 'https://www.linkedin.com/in/razaan-reza' },
  ]

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-10 bg-gradient-to-b from-[#050816] via-[#0B1120] to-[#050816] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px] animate-pulse-slow" />
      <div className="absolute -bottom-32 right-10 h-96 w-96 rounded-full bg-purple-500/20 blur-[140px] animate-pulse-slow" />

      {/* Floating Icons */}
      <motion.div
        className="absolute top-10 left-10 text-6xl text-cyan-500/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        <MdEmail />
      </motion.div>

      <motion.div
        className="absolute top-1/4 right-1/5 text-5xl text-green-400/10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <MdPhone />
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-1/3 text-5xl text-purple-500/10"
        animate={{ y: [0, 20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <MdLocationOn />
      </motion.div>

      {/* Title */}
      <motion.h2
        className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>

      {/* Content */}
      <motion.div
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Contact Info */}
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-5 rounded-2xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-xl p-5 shadow-[0_0_30px_rgba(6,182,212,0.08)] hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.18)] transition-all duration-300 cursor-pointer"
            >
              <div className="text-3xl text-cyan-400">{info.icon}</div>

              <div>
                <p className="text-sm text-slate-400">{info.title}</p>

                <p className="text-white font-medium break-all">{info.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-col justify-center items-center rounded-2xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-xl p-8 shadow-[0_0_30px_rgba(6,182,212,0.08)]">
          <h3 className="text-2xl font-bold text-white mb-3">
            Connect With Me
          </h3>

          <p className="text-slate-400 text-center mb-8">
            Let's build something amazing together.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.15,
                  rotate: 8,
                }}
                whileTap={{ scale: 0.95 }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-3xl text-white shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_35px_rgba(6,182,212,0.45)] transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      <style>
        {`
        @keyframes pulseSlow {
          0%,100%{
            transform:scale(1);
            opacity:.35;
          }
          50%{
            transform:scale(1.08);
            opacity:.6;
          }
        }

        .animate-pulse-slow{
          animation:pulseSlow 6s ease-in-out infinite;
        }
      `}
      </style>
    </section>
  )
}

export default Contact
