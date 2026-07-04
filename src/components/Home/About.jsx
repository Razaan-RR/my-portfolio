import React from 'react'
import profile from '../../assets/profile.png'

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden
      px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100"
    >
      <div className="absolute -top-20 -left-20 h-60 w-60 md:h-80 md:w-80 rounded-full bg-cyan-300/20 blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-28 right-10 h-72 w-72 md:h-96 md:w-96 rounded-full bg-purple-300/20 blur-3xl animate-pulse-slow delay-500" />

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center md:justify-end mt-10 md:mt-0">
            <div className="absolute h-64 w-64 md:h-72 md:w-72 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-2xl opacity-40 animate-spin-slow" />

            <div className="relative h-60 w-60 md:h-64 md:w-64 rounded-3xl bg-white/50 backdrop-blur-xl p-2 shadow-2xl">
              <img
                src={profile}
                alt="Razaan Reza"
                className="h-full w-full object-cover rounded-2xl transform transition-transform hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-4 right-0 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-700 shadow-md animate-bounce">
              👋 Hello!
            </div>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight
              bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              About Me
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto md:mx-0 animate-slide-in-left">
              I am{' '}
              <span className="font-semibold text-cyan-500">Razaan Reza</span>,
              a Full Stack Developer focused on building practical web
              applications using <span className="font-semibold">Laravel</span>{' '}
              on the backend and working extensively with{' '}
              <span className="font-semibold">Blade templates </span>
              to implement UI based on provided controllers and models.
            </p>

            <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto md:mx-0 animate-slide-in-left">
              My work mainly involves integrating{' '}
              <span className="font-semibold">MVC architecture</span>, handling{' '}
              <span className="font-semibold">RESTful APIs</span>, and building
              features such as{' '}
              <span className="font-semibold">authentication systems</span>,
              <span className="font-semibold"> role-based access control</span>,
              and
              <span className="font-semibold"> CRUD modules</span> in Laravel
              applications.
            </p>

            <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto md:mx-0 animate-slide-in-left">
              On the frontend side, I work with{' '}
              <span className="font-semibold">Blade UI</span>, along with modern
              styling using <span className="font-semibold">Tailwind CSS</span>,
              to create responsive and structured interfaces that align with
              backend logic.
            </p>

            <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto md:mx-0 animate-slide-in-left">
              I focus on writing clean, maintainable code while following
              Laravel’s structure. Most of my experience comes from implementing
              backend-driven features into functional, production-style web
              applications.
            </p>

            <div className="flex justify-center md:justify-start gap-4 mt-4 flex-wrap">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 px-6 py-2 font-semibold text-white shadow-lg transition-transform hover:-translate-y-1 animate-fade-in"
              >
                See My Work
              </a>

              <a
                href="/resume.pdf"
                download
                className="rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 px-6 py-2 font-semibold text-white shadow-lg transition-transform hover:-translate-y-1 animate-fade-in"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spinSlow 20s linear infinite;
          }

          @keyframes pulseSlow {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.1); opacity: 0.6; }
          }
          .animate-pulse-slow {
            animation: pulseSlow 6s ease-in-out infinite;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 1.2s ease forwards;
          }

          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-slide-in-left {
            animation: slideInLeft 1.2s ease forwards;
          }

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

export default About
