import React from 'react'

function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top Gradient Border */}
      <div className="h-px w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600" />

      {/* Background Glow */}
      <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative bg-[#08101f]">
        <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Left */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold tracking-[0.25em] text-cyan-400">
              PORTFOLIO
            </span>

            <h2 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Razaan
              </span>{' '}
              <span className="text-white">Reza</span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-slate-400 text-center md:text-left">
              Building modern, scalable and responsive web applications with
              Laravel, React, Next.js and TypeScript while focusing on clean UI,
              performance and maintainable architecture.
            </p>
          </div>

          {/* Center */}
          <div className="flex justify-center">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-4">
              {[
                'Home',
                'About',
                'Skills',
                'Experience',
                'Education',
                'Projects',
                'Contact',
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative text-slate-300 transition duration-300 hover:text-cyan-400
                    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                    after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500
                    after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Status
            </span>

            <div className="flex items-center gap-3 rounded-full border border-cyan-500/20 bg-slate-900/70 px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_#22d3ee]" />
              <span className="text-sm font-medium text-slate-200">
                Available for Work
              </span>
            </div>

            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Razaan Reza
            </p>

            <p className="text-xs text-slate-600">
              Designed & Developed with ❤️ using React
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer