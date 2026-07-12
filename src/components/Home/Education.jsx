import React from 'react'
import { MdSchool } from 'react-icons/md'

function Education() {
  const education = [
    {
      degree: 'Master of Engineering (M.Engg)',
      institution: 'BRAC University',
      period: 'May 2025 - Present',
      cgpa: 'Ongoing',
      points: [
        'Currently pursuing a Master of Engineering degree.',
        'Focused on advanced software engineering, AI, cyber security and modern computing technologies.',
      ],
    },
    {
      degree: 'Bachelor of Science (B.Sc.)',
      institution: 'University of Liberal Arts Bangladesh (ULAB)',
      period: 'Febrauary 2020 - October 2024',
      cgpa: 'CGPA: 3.68 / 4.00',
      points: [
        'Completed Bachelor of Science with a CGPA of 3.68.',
        'Built a strong foundation in software engineering, databases, algorithms, and web development.',
        'Participated and placed in several inter-university competitive programming contests.',
      ],
    },
  ]

  return (
    <section
      id="education"
      className="relative flex items-center justify-center overflow-hidden px-6 py-10 bg-gradient-to-b from-[#050816] via-[#0B1120] to-[#050816]"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px] animate-pulse-slow" />
      <div className="absolute -bottom-32 right-10 h-96 w-96 rounded-full bg-purple-500/20 blur-[140px] animate-pulse-slow" />

      <div className="relative z-10 w-full max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="space-y-10">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(6,182,212,0.08)] transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.18)]"
            >
              {/* Left Gradient Border */}
              <div className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500" />

              {/* Right Gradient Border */}
              <div className="absolute right-0 top-0 h-full w-[4px] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400" />

              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {edu.degree}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-cyan-400 font-medium">
                    <MdSchool className="text-xl" />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                <span className="text-sm text-slate-400">{edu.period}</span>
              </div>

              {/* CGPA */}
              <div className="mt-5">
                <span className="inline-flex px-4 py-1.5 rounded-full text-sm font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
                  {edu.cgpa}
                </span>
              </div>

              {/* Highlights */}
              <ul className="mt-7 space-y-3 text-sm text-slate-300">
                {edu.points.map((point, i) => (
                  <li key={i} className="flex gap-3 leading-relaxed">
                    <span className="text-cyan-400 text-lg">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
        @keyframes pulseSlow {
          0%,100% {
            transform: scale(1);
            opacity: .35;
          }
          50% {
            transform: scale(1.08);
            opacity: .6;
          }
        }

        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
      `}
      </style>
    </section>
  )
}

export default Education
