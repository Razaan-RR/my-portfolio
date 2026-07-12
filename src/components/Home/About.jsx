import React from 'react'
import profile from '../../assets/profile.png'

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 bg-gradient-to-b from-[#050816] via-[#0B1120] to-[#050816]"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow */}
            <div className="absolute h-80 w-80 rounded-full bg-gradient-to-r from-cyan-500/40 via-blue-500/30 to-purple-500/40 blur-[90px] animate-pulse-slow" />

            {/* Card */}
            <div className="relative h-72 w-72 rounded-3xl bg-slate-900/70 backdrop-blur-2xl border border-cyan-500/20 p-3 shadow-[0_0_60px_rgba(6,182,212,0.2)]">
              <img
                src={profile}
                alt="Razaan Reza"
                className="h-full w-full rounded-2xl object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-5 right-2 rounded-full border border-cyan-500/20 bg-slate-900/80 backdrop-blur-xl px-4 py-2 text-sm font-semibold text-cyan-300 shadow-lg">
              👋 Nice to meet you
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="text-slate-300 text-base leading-8 max-w-2xl mx-auto lg:mx-0 animate-slide-in-left">
              I am{' '}
              <span className="font-semibold text-cyan-400">Razaan Reza</span>,
              a passionate Full Stack Developer dedicated to building modern,
              scalable, and user-friendly web applications. My primary expertise
              lies in{' '}
              <span className="font-semibold text-cyan-400">Laravel</span>,
              where I develop secure backend systems following the{' '}
              <span className="font-semibold text-cyan-400">
                MVC architecture
              </span>
              , integrate{' '}
              <span className="font-semibold text-cyan-400">RESTful APIs</span>,
              and implement features such as{' '}
              <span className="font-semibold text-cyan-400">
                authentication
              </span>
              ,{' '}
              <span className="font-semibold text-cyan-400">
                role-based access control
              </span>
              , and{' '}
              <span className="font-semibold text-cyan-400">
                CRUD operations
              </span>
              . On the frontend, I build responsive interfaces using{' '}
              <span className="font-semibold text-cyan-400">
                Blade Templates
              </span>
              ,{' '}
              <span className="font-semibold text-cyan-400">Tailwind CSS</span>,{' '}
              <span className="font-semibold text-cyan-400">React</span>,{' '}
              <span className="font-semibold text-cyan-400">Next.js</span>,{' '}
              <span className="font-semibold text-cyan-400">TypeScript</span>,
              and <span className="font-semibold text-cyan-400">Node.js</span>,
              ensuring every application is clean, maintainable, performant, and
              production-ready.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 font-semibold text-white shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="rounded-full border border-cyan-500/20 bg-slate-900/70 backdrop-blur-xl px-8 py-3 font-semibold text-slate-200 transition-all duration-300 hover:bg-slate-800 hover:border-cyan-400"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
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

          @keyframes slideInLeft{
            from{
              opacity:0;
              transform:translateX(-20px);
            }
            to{
              opacity:1;
              transform:translateX(0);
            }
          }

          .animate-slide-in-left{
            animation:slideInLeft 1s ease forwards;
          }
        `}
      </style>
    </section>
  )
}

export default About
