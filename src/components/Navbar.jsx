import React, { useState } from 'react'
import { Link } from 'react-scroll'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    'Home',
    'About',
    'Skills',
    'Experience',
    'Education',
    'Projects',
    'Contact',
  ]

  return (
    <>
      <nav
        className="fixed top-5 left-1/2 z-[9999] w-[92%] max-w-6xl -translate-x-1/2
rounded-2xl border border-cyan-500/20
bg-slate-900/70 backdrop-blur-2xl
shadow-[0_0_35px_rgba(6,182,212,0.15)]"
      >
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-extrabold tracking-wide">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Razaan
            </span>
            <span className="text-white">Reza</span>
          </h1>

          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {links.map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={800}
                  offset={-100}
                  className="relative cursor-pointer transition-all duration-300 hover:text-cyan-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="contact"
            smooth={true}
            duration={800}
            offset={-100}
            className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 cursor-pointer"
          >
            Contact
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white focus:outline-none"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transition ${open ? 'opacity-0' : ''}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transition ${open ? '-translate-y-2 -rotate-45' : ''}`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-24 left-1/2 z-[9998] w-[92%] max-w-6xl -translate-x-1/2 rounded-2xl border border-cyan-500/20 bg-slate-900/90 backdrop-blur-2xl shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 md:hidden ${
          open
            ? 'opacity-100 scale-100'
            : 'pointer-events-none opacity-0 scale-95'
        }`}
      >
        <ul className="flex flex-col gap-6 px-6 py-8 text-center text-white">
          {links.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={800}
                offset={-100}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-slate-300 transition hover:text-cyan-400 cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}

          <Link
            to="contact"
            smooth={true}
            duration={800}
            offset={-100}
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-105 cursor-pointer"
          >
            Contact
          </Link>
        </ul>
      </div>
    </>
  )
}

export default Navbar
