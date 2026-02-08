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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight
              bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 animate-fade-in">
              I am <span className="font-semibold text-cyan-500">Razaan Reza</span>, a MERN Stack Developer with 
              over <span className="font-semibold text-purple-500">1+ years of hands-on experience</span> building 
              high-performance, full-stack web applications. My work involves <span className="font-semibold text-blue-500">RESTful APIs</span>, 
              <span className="font-semibold text-purple-500"> JWT authentication</span>, and <span className="font-semibold text-blue-500">role-based access control</span> to deliver secure and scalable solutions.
            </p>

            <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto md:mx-0 animate-slide-in-left">
              I specialize in <span className="font-semibold">React.js, Next.js, Node.js, Express, MongoDB, Nextjs, Typescript</span> and integrate 
              modern tools like <span className="font-semibold">Axios</span>, <span className="font-semibold">Redux/Context API</span>, and 
              <span className="font-semibold"> Tailwind CSS, Shadcn</span> to create responsive, interactive, and efficient front-end experiences.
            </p>

            <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto md:mx-0 animate-slide-in-left">
              My projects emphasize <span className="font-semibold">clean code architecture</span>, <span className="font-semibold">asynchronous data handling</span>, 
              <span className="font-semibold"> CRUD operations</span>, and <span className="font-semibold">state management</span> best practices. I follow agile development processes to 
              deliver robust, production-ready web applications that scale seamlessly.
            </p>

            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-2 font-semibold text-white shadow-lg transition-transform hover:-translate-y-1 animate-bounce-slow"
              >
                See My Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-400/40 bg-white/40 backdrop-blur px-6 py-2 font-semibold text-slate-800 transition hover:bg-white/70 animate-fade-in"
              >
                Contact Me
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
