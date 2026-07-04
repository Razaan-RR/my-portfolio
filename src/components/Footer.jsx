import React from 'react'

function Footer() {
  return (
    <footer className="relative mt-24">
      {/* top glow line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#22d3ee] via-[#04a8c1] to-[#0ea5e9] opacity-70" />

      {/* main footer */}
      <div className="relative bg-gradient-to-b from-[#c8e9f2] via-[#b4e8f6] to-[#92d0e1] border-t border-[#04a8c1]/20">
        <div className="mx-auto max-w-6xl px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* LEFT */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <span className="rounded-full border border-[#04a8c1]/30 bg-[#04181d] px-4 py-1 text-xs font-semibold tracking-widest text-[#22d3ee]">
              PORTFOLIO
            </span>

            <h2 className="text-xl font-bold bg-gradient-to-r from-[#22d3ee] to-[#04a8c1] bg-clip-text text-transparent">
              Razaan<span className="text-black"> Reza</span>
            </h2>

            <p className="max-w-xs text-sm text-black leading-relaxed">
              Crafting clean, modern, and scalable web experiences with a focus
              on design and performance.
            </p>
          </div>

          {/* CENTER LINKS */}
          <div className="flex justify-center">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-4 text-sm text-black font-semibold">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="relative transition hover:text-[#22d3ee]
                    after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
                    after:bg-gradient-to-r after:from-[#22d3ee] after:to-[#04a8c1]
                    after:transition-all hover:after:w-full"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <span className="text-xs uppercase tracking-widest text-black font-semibold">
              Availability
            </span>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#22d3ee] animate-pulse shadow-[0_0_10px_#22d3ee]" />
              <span className="text-sm text-black font-semibold">
                Open to opportunities
              </span>
            </div>

            <p className="text-xs text-black font-semibold">
              © {new Date().getFullYear()} Razaan Reza. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
