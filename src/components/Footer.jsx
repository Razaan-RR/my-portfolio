import React from "react";

function Footer() {
  return (
    <footer className="relative mt-24">
      {/* Gradient Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-70" />

      {/* Glass Footer */}
      <div className="relative bg-slate-200/70 backdrop-blur-xl border-t border-white/40">
        <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">

          {/* Left — Brand Badge */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <span className="inline-block w-fit rounded-full border border-white/60 bg-white/40 px-4 py-1 text-xs font-semibold tracking-wider text-slate-700">
              PORTFOLIO
            </span>

            <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Razaan<span className="text-slate-700">Reza</span>
            </h2>

            <p className="max-w-xs text-sm text-slate-600 leading-relaxed">
              Building clean, scalable, and thoughtful web experiences with
              modern technologies.
            </p>
          </div>

          {/* Center — Navigation */}
          <div className="flex justify-center">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm text-slate-700">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative transition hover:text-slate-900 after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500 after:transition-all hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Meta */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-xs uppercase tracking-widest text-slate-500">
              Available for work
            </span>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-sm font-medium text-slate-700">
                Open to opportunities
              </span>
            </div>

            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>

        {/* Subtle Bottom Glow */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/40 to-transparent" />
      </div>
    </footer>
  );
}

export default Footer;
