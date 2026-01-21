import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <>
      <nav className="fixed top-5 left-1/2 z-[9999] w-[92%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/40 bg-slate-100/50 backdrop-blur-xl shadow-lg">
        <div className="flex items-center justify-between px-6 py-4">
          
          <h1 className="text-xl font-bold tracking-wide bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Razaan<span className="text-slate-700">Reza</span>
          </h1>

          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            {links.map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={800}
                  offset={-100} 
                  className="relative cursor-pointer transition hover:text-slate-900 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500 after:transition-all hover:after:w-full"
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
            className="hidden md:inline-block rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-cyan-500/40 cursor-pointer"
          >
            Contact
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-800 focus:outline-none"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-slate-800 transition ${open ? "translate-y-2 rotate-45" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-slate-800 transition ${open ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-slate-800 transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-24 left-1/2 z-[9998] w-[92%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/40 bg-slate-100/70 backdrop-blur-xl shadow-lg transition-all duration-300 md:hidden ${
          open ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-95"
        }`}
      >
        <ul className="flex flex-col gap-6 px-6 py-8 text-center text-slate-800">
          {links.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={800}
                offset={-100}
                onClick={() => setOpen(false)}
                className="text-lg font-medium transition hover:text-cyan-600 cursor-pointer"
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
            className="mt-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg cursor-pointer"
          >
            Contact
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
