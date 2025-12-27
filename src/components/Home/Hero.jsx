import React from 'react'
import profile from '../../assets/profile.png'

function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100 flex items-center
      px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24"
    >
      {/* Floating pastel blobs */}
      <div className="absolute -top-24 -left-24 h-72 w-72 md:h-96 md:w-96 rounded-full bg-cyan-300/30 blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-24 h-72 w-72 md:h-96 md:w-96 rounded-full bg-purple-300/30 blur-3xl animate-pulse delay-700" />

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div className="space-y-6 text-center md:text-left">
            <span className="inline-block rounded-full bg-white/60 backdrop-blur px-4 py-1 text-xs tracking-widest font-semibold text-slate-700">
              MERN STACK DEVELOPER
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight text-slate-900">
              Crafting{' '}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                scalable
              </span>{' '}
              digital products
            </h1>

            <p className="max-w-xl mx-auto md:mx-0 text-slate-600 text-base sm:text-lg leading-relaxed">
              I build high-performance full-stack applications using MongoDB,
              Express, React, and Node.js with clean architecture and modern UI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a
                href="#projects"
                className="relative rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-3 font-semibold text-white shadow-lg transition-transform hover:-translate-y-1"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-slate-400/40 bg-white/40 backdrop-blur px-8 py-3 font-semibold text-slate-800 transition hover:bg-white/70"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative flex justify-center mt-10 md:mt-0">
            {/* Rotating glow */}
            <div className="absolute h-72 w-72 sm:h-80 sm:w-80 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-xl opacity-70 animate-spin-slow" />

            {/* Glass frame */}
            <div className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-3xl bg-white/50 backdrop-blur-xl p-2 shadow-2xl">
              <img
                src={profile}
                alt="Razaan Reza"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 right-4 rounded-full bg-white/70 backdrop-blur px-4 py-2 text-xs font-semibold text-slate-700 shadow-md animate-bounce">
              🚀 Open to Work
            </div>
          </div>
        </div>
      </div>

      {/* Custom animation via Tailwind arbitrary value */}
      <style>
        {`
          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spinSlow 18s linear infinite;
          }
        `}
      </style>
    </section>
  )
}

export default Hero
