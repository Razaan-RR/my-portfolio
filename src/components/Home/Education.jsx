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
        'Participated and placed in several inter-university competitive programming contests.'
      ],
    },
  ]

  return (
    <section
      id="education"
      className="relative flex items-center justify-center px-6 py-20 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-28 right-10 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl animate-pulse-slow" />

      <div className="relative z-10 w-full max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="space-y-10">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative bg-white/50 backdrop-blur-xl rounded-xl shadow-lg p-6 overflow-hidden border border-white/40"
            >
              {/* Left Border */}
              <div className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500" />

              {/* Right Border */}
              <div className="absolute right-0 top-0 h-full w-[4px] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400" />

              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    {edu.degree}
                  </h3>

                  <div className="mt-1 flex items-center gap-2 text-cyan-600 font-medium">
                    <MdSchool className="text-xl" />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                <span className="text-sm text-slate-500">{edu.period}</span>
              </div>

              {/* CGPA */}
              <div className="mt-4">
                <span className="inline-flex px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 border border-blue-200">
                  {edu.cgpa}
                </span>
              </div>

              {/* Highlights */}
              <ul className="mt-6 space-y-2 text-slate-600 text-sm">
                {edu.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-black">•</span>
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
            0%, 100% {
              transform: scale(1);
              opacity: 0.3;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.6;
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
