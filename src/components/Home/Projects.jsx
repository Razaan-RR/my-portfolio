import React from 'react'
import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'

const frontendProjects = [
  {
    name: 'AI Call Management System',
    thumbnail: '/ai-call-management.png',
    tech: ['React', 'React Router', 'Tailwind CSS', 'Lucide Icons', 'Figma'],
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
      'User-specific watchlist management with real-time tracking',
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
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10"
    >
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl leading-[2] font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-7xl">
        {[backendProjects, frontendProjects].map((projects, colIndex) => (
          <motion.div
            key={colIndex}
            className="space-y-6"
            initial={{ opacity: 0, x: colIndex === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3
              className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${
                colIndex === 0 ? 'text-purple-500' : 'text-cyan-500'
              }`}
            >
              {colIndex === 0 ? 'Full-Stack Projects' : 'Frontend Projects'}
            </h3>

            {projects.map((proj, index) => (
              <motion.div
                key={index}
                className="rounded-2xl bg-white/50 backdrop-blur-xl p-6 shadow-2xl flex flex-col h-[520px]"
              >
                <img
                  src={proj.thumbnail}
                  alt={proj.name}
                  className="rounded-xl mb-4 w-full h-48 object-cover"
                />

                <h4 className="font-semibold text-xl mb-2">{proj.name}</h4>

                <div className="flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {proj.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white text-xs font-semibold animate-bounce-slow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="list-disc list-inside text-slate-700 text-sm sm:text-base">
                    {proj.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap justify-end gap-2 sm:gap-4">
                  <motion.a
                    href={proj.github}
                    target="_blank"
                    className="inline-flex flex-1 sm:flex-auto items-center justify-center gap-2 px-4 sm:px-5 py-2 rounded-full text-sm font-semibold bg-slate-800 text-white shadow-lg min-w-[120px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SiGithub size={18} /> GitHub
                  </motion.a>

                  <motion.a
                    href={proj.link}
                    target="_blank"
                    className="inline-flex flex-1 sm:flex-auto items-center justify-center gap-2 px-4 sm:px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-lg min-w-[120px]"
                    whileHover={{ scale: 1.05 }}
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
          @keyframes bounceSlow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .animate-bounce-slow {
            animation: bounceSlow 2.5s infinite;
          }
        `}
      </style>
    </section>
  )
}

export default Projects
