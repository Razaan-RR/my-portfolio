import React from 'react'
import { motion } from 'framer-motion'
import { SiReact, SiNextdotjs, SiNodedotjs } from 'react-icons/si'

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      {/* Floating pastel blobs */}
      <motion.div
        className="absolute -top-24 -left-24 h-72 w-72 md:h-96 md:w-96 rounded-full bg-cyan-300/30 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ type: 'tween', duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 -right-24 h-72 w-72 md:h-96 md:w-96 rounded-full bg-purple-300/30 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ type: 'tween', duration: 10, repeat: Infinity, delay: 2 }}
      />

      {/* Floating skill icons */}
      <motion.div
        className="absolute top-20 left-1/4 text-6xl text-blue-400"
        animate={{ y: [0, -20] }} // only two keyframes for spring
        transition={{
          type: 'spring',
          stiffness: 80,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      >
        <SiReact />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-1/3 text-5xl text-green-400"
        animate={{ y: [0, 15], rotate: [0, 10] }} // two keyframes for spring
        transition={{
          type: 'spring',
          stiffness: 80,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      >
        <SiNextdotjs />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-1/4 text-5xl text-yellow-500"
        animate={{ y: [0, -15], rotate: [0, -10] }} // two keyframes for spring
        transition={{
          type: 'spring',
          stiffness: 80,
          repeat: Infinity,
          repeatType: 'mirror',
          delay: 1,
        }}
      >
        <SiNodedotjs />
      </motion.div>

      {/* Main Hero Text */}
      <motion.div
        className="relative z-10 text-center md:text-left max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="inline-block rounded-full bg-white/60 backdrop-blur px-4 py-1 text-xs tracking-widest font-semibold text-slate-700 mb-4">
          MERN STACK DEVELOPER
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900 mb-4">
          Building{' '}
          <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            dynamic
          </span>{' '}
          digital experiences
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Crafting cutting-edge web applications that are fast, scalable, and
          user-friendly. Explore projects built with React, Next.js, Node.js,
          and MongoDB.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
          <motion.a
            href="#projects"
            className="relative rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-3 font-semibold text-white shadow-lg"
            whileHover={{ scale: 1.05, y: -3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="rounded-full border border-slate-400/40 bg-white/40 backdrop-blur px-8 py-3 font-semibold text-slate-800"
            whileHover={{ scale: 1.05, y: -3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      {/* Custom spin animation */}
      <motion.div
        className="absolute bottom-10 left-1/2 h-40 w-40 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 opacity-50 blur-2xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
    </section>
  )
}

export default Hero
