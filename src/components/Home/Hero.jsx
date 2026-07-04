import React from 'react'
import { SiReact, SiNextdotjs, SiNodedotjs, SiLaravel } from 'react-icons/si'

function Hero() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      {/* background blobs */}
      <div className="absolute -top-24 -left-24 h-72 w-72 md:h-96 md:w-96 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="absolute top-1/3 -right-24 h-72 w-72 md:h-96 md:w-96 rounded-full bg-purple-300/30 blur-3xl" />

      {/* floating icons (static now) */}
      <div className="absolute top-5 left-1/4 text-6xl text-blue-200">
        <SiReact />
      </div>

      <div className="absolute bottom-52 right-1/4 text-5xl text-orange-200">
        <SiNextdotjs />
      </div>

      <div className="absolute top-1/3 right-1/6 text-5xl text-red-200">
        <SiLaravel />
      </div>


      {/* main content */}
      <div className="relative z-10 text-center md:text-left max-w-3xl">
        <span className="inline-block rounded-full bg-white/60 backdrop-blur px-4 py-1 text-xs tracking-widest font-semibold text-slate-700 mb-4">
          FULL STACK DEVELOPER
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
          user-friendly. Explore projects built with React, Laravel, Typescript,
          Next.js, Node.js, and MongoDB.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
          <a
            href="#projects"
            className="relative rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-3 font-semibold text-white shadow-lg"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-slate-400/40 bg-white/40 backdrop-blur px-8 py-3 font-semibold text-slate-800"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* bottom glow */}
      <div className="absolute bottom-10 left-1/2 h-40 w-40 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 opacity-50 blur-2xl" />
    </section>
  )
}

export default Hero
