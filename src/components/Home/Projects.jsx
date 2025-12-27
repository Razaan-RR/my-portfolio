import React from 'react'
import { motion } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
} from 'react-icons/si'

// Frontend Projects
const frontendProjects = [
  {
    name: 'Artify – Online Art Learning Site',
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
    features: [
      'Firebase Email/Password and Google authentication',
      'Login, Signup, and Forgot Password pages',
      'Protected routes (only logged-in users can view skill details)',
      'Update profile (name and photo)',
      'Responsive design for mobile, tablet, and desktop',
      'Hero slider, skill cards, and provider sections',
      'Toast notifications using react-hot-toast',
      'Animations using AOS and Swiper',
      'JSON data used for skill listings',
      'Environment variables used for Firebase configuration',
    ],
  },
  {
    name: 'Significo',
    tech: ['React', 'GSAP', 'Framer Motion', 'Swiper', 'Tailwind CSS'],
    link: 'https://razaan-rr.github.io/Significo_clone/',
    features: [
      'Highly interactive UI animations with GSAP and Framer Motion',
      'Responsive carousel using Swiper',
      'Modern and clean design with Tailwind CSS',
    ],
  },
]

// Backend Projects
const backendProjects = [
  {
    name: 'BookHive – A Book Courier App',
    tech: [
      'react',
      'react-dom',
      'react-router-dom',
      'axios',
      'firebase',
      'react-query',
      'react-icons',
      'tailwindcss',
      'react-hook-form',
    ],
    link: 'https://sage-bubblegum-e870ed.netlify.app/',
    features: [
      'Users can browse, wishlist, review, and pay for books; track order and payment status',
      'Librarians manage books, update orders, and handle publishing',
      'Admins control all users, books, and have full system-wide oversight',
      'Wishlist & Reviews: Users can add books to a wishlist and leave ratings/reviews',
      'Search & Sort: Search books by name and sort by price',
      'JWT Protected Routes: Only authenticated users can access protected routes',
      'Animated & Responsive UI: Engaging banners, cards, and dashboards',
      'Users can pay for their orders online',
      'Orders track both order status (pending → shipped → delivered) and payment status (unpaid → paid)',
      'Role-Based Features for Users, Librarians, and Admins',
    ],
  },
  {
    name: 'Trackify – Habit Tracking Web App',
    tech: [
      'MongoDB',
      'Express',
      'Node.js',
      'React',
      'Tailwind CSS',
      'DaisyUI',
      'firebase',
      'axios',
      'react-tooltip',
      'framer-motion',
      'sweetalert2',
      'react-icons',
      'prop-types',
    ],
    link: 'https://trackify-habit-tracker.netlify.app/',
    features: [
      'Create your own personalized and secured account',
      'Track your habits daily and mark completed tasks to keep yourself motivated',
      'Discover others with similar habits and daily achievements to boost confidence',
      'Add new habits whenever inspired',
      'Update or delete your habits as needed',
      'User-friendly UI',
    ],
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-20"
    >
      {/* Floating Tech Badges */}
      <motion.div
        className="absolute top-10 left-10 text-6xl text-blue-400 opacity-20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        <SiReact />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-1/4 text-5xl text-green-400 opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <SiNextdotjs />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-1/3 text-5xl text-yellow-500 opacity-20"
        animate={{ y: [0, 15, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <SiNodedotjs />
      </motion.div>

      {/* Section Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Full-Stack Portfolio
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-7xl">
        {/* Frontend Projects */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-cyan-500 mb-4">
            Frontend Projects
          </h3>
          {frontendProjects.map((proj, index) => (
            <motion.a
              key={index}
              href={proj.link}
              className="relative block rounded-2xl bg-white/50 backdrop-blur-xl p-6 shadow-2xl hover:scale-105 hover:shadow-3xl transition-transform"
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <h4 className="font-semibold text-xl mb-2">{proj.name}</h4>
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
            </motion.a>
          ))}
        </motion.div>

        {/* Backend Projects */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-purple-500 mb-4">
            Backend Projects
          </h3>
          {backendProjects.map((proj, index) => (
            <motion.a
              key={index}
              href={proj.link}
              className="relative block rounded-2xl bg-white/50 backdrop-blur-xl p-6 shadow-2xl hover:scale-105 hover:shadow-3xl transition-transform"
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <h4 className="font-semibold text-xl mb-2">{proj.name}</h4>
              <div className="flex flex-wrap gap-2 mb-2">
                {proj.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-md border border-purple-400 text-purple-300 text-xs font-semibold animate-bounce-slow shadow-lg"
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
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Custom animations */}
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
