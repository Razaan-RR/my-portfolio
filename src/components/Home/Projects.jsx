import React from 'react'
import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'

const frontendProjects = [
  {
    name: 'AI Call Management System',
    thumbnail: '/ai-call-management.png',
    tech: ['React', 'React Router', 'Tailwind CSS', 'Lucide Icons'],
    link: 'https://ai-call-management.netlify.app/',
    github: 'https://github.com/Razaan-RR/call-management',
    features: [
      'End-to-end Figma-to-UI conversion across the entire application, delivering almost pixel-perfect layouts, consistent components, and responsive screens',
      'Dark-themed, glassmorphism-inspired UI with gradient stat cards and responsive layout',
    ],
  },
  {
    name: 'Artify - Online Art Learning Site',
    thumbnail: '/artify.png',
    tech: [
      'Node.js',
      'React',
      'Tailwind CSS',
      'DaisyUI',
      'React Router',
      'Firebase',
      'AOS',
      'Swiper',
    ],
    link: 'https://stellar-kitsune-e25f81.netlify.app/',
    github: 'https://github.com/razaan-rr/artify',
    features: [
      'Firebase Email/Password and Google authentication',
      'Responsive design for mobile, tablet, and desktop',
      'Animations using AOS and Swiper',
    ],
  },
  {
    name: 'Significo - Healthcare Innovations',
    thumbnail: '/significo.png',
    tech: ['React', 'GSAP', 'Framer Motion', 'Swiper', 'Tailwind CSS'],
    link: 'https://razaan-rr.github.io/Significo_clone/',
    github: 'https://github.com/razaan-rr/Significo_clone',
    features: [
      'Highly interactive UI animations with GSAP and Framer Motion',
      'Responsive carousel using Swiper',
      'Modern and clean design with Tailwind CSS',
    ],
  },
]

const backendProjects = [
  {
    name: 'BookHive – A Book Courier App',
    thumbnail: '/bookhive.png',
    tech: [
      'react',
      'firebase',
      'tailwindcss',
      'mongodb',
      'express',
      'node',
      'stripe-payment',
    ],
    link: 'https://sage-bubblegum-e870ed.netlify.app/',
    github: 'https://github.com/Razaan-RR/BookHive-MERN',
    features: [
      'Users can browse, wishlist, review, and pay for books; track order and payment status',
      'Librarians manage books, and update orders',
      'Admins control and have full system-wide oversight',
    ],
  },
  {
    name: 'Zarion – Stock Market Tracker',
    thumbnail: '/zarion.png',
    tech: [
      'TypeScript',
      'Next.js',
      'MongoDB',
      'Tailwind CSS',
      'shadcn/ui',
      'Better-Auth',
      'Inngest',
      'Nodemailer',
    ],
    link: 'https://stock-app-typescript-nextjs.vercel.app/',
    github: 'https://github.com/Razaan-RR/stock-app-typescript-nextjs',
    features: [
      'Secure authentication system with protected routes and personalized user sessions',
      'User-specific watchlist with real-time tracking',
      'Live stock price and percentage change updates',
    ],
  },
  {
    name: 'Trackify – Habit Tracking Web App',
    thumbnail: '/trackify.png',
    tech: [
      'MongoDB',
      'Express',
      'Node.js',
      'React',
      'Tailwind CSS',
      'DaisyUI',
      'firebase',
      'axios',
      'framer-motion',
    ],
    link: 'https://trackify-habit-tracker.netlify.app/',
    github: 'https://github.com/Razaan-RR/Habit_Tracker',
    features: [
      'Create your own personalized and secured account',
      'Track your habits daily and discover others with similar habits and daily achievements to boost confidence',
      'Add/Update/Delete new habits whenever inspired',
    ],
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-[#050816] via-[#0B1120] to-[#050816] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10"
    >
      <div className="absolute -top-24 -left-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-cyan-500/20 blur-[120px] animate-pulse-slow" />
      <div className="absolute -bottom-32 right-10 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-purple-500/20 blur-[140px] animate-pulse-slow" />

      <motion.h2
        className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-10 sm:mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Featured Projects
      </motion.h2>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full max-w-7xl">
        {[backendProjects, frontendProjects].map((projects, colIndex) => (
          <motion.div
            key={colIndex}
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: colIndex === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className={`text-xl sm:text-2xl lg:text-3xl font-bold ${
                colIndex === 0 ? 'text-purple-400' : 'text-cyan-400'
              }`}
            >
              {colIndex === 0 ? 'Full-Stack Projects' : 'Frontend Projects'}
            </h3>

            {projects.map((proj, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-xl p-4 sm:p-6 flex flex-col min-h-[520px] lg:h-[560px] shadow-[0_0_40px_rgba(6,182,212,0.08)] hover:border-cyan-400/40 hover:shadow-[0_0_45px_rgba(6,182,212,0.18)] transition-all duration-300"
              >
                <img
                  src={proj.thumbnail}
                  alt={proj.name}
                  className="rounded-xl mb-5 w-full h-48 sm:h-56 lg:h-48 object-cover border border-cyan-500/20"
                />

                <h4 className="font-bold text-lg sm:text-xl text-white mb-4">
                  {proj.name}
                </h4>

                <div className="flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {proj.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-[11px] sm:text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="list-disc list-inside text-slate-300 text-sm leading-6 sm:leading-7 flex-grow">
                    {proj.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
                  <motion.a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full flex-1 items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-700 transition"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SiGithub size={18} />
                    GitHub
                  </motion.a>

                  <motion.a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_35px_rgba(6,182,212,0.45)] transition"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project →
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

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

export default Projects
