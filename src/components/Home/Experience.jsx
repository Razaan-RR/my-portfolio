import React from 'react'
import { MdLocationOn } from 'react-icons/md'

function Experience() {
  const experiences = [
    {
      role: 'Assistant Engineer (Software Development)',
      period: 'March 2026 - Present',
      company: 'WBSoftwares',
      location: 'Mohakhali-DOHS, Dhaka, Bangladesh',
      workType: 'Remote',
      points: [
        'Developed and maintained modules for a Learning Management System (LMS) including school management and exam management features',
        'Built and optimized Blade-based UI components for dashboards, forms, and management panels',
        'Developed core features such as student enrollment, class management, attendance tracking, and exam scheduling',
        'Designed and implemented CRUD operations with role-based access control for different user roles (admin, teacher, student, librarian)',
        'Collaborated with team members to ensure smooth integration of LMS modules and consistent system functionality',
      ],
    },
    {
      role: 'Teaching Assistant (TA)',
      period: 'November 2024 - January 2026',
      company: 'Department of Computer Science & Engineering, ULAB',
      location: 'Dhaka, Bangladesh',
      workType: 'On-site',
      points: [
        'Assisted faculty members in conducting undergraduate laboratory and tutorial sessions.',
        'Guided students in programming, algorithms, data structures, and software engineering courses.',
        'Provided academic support by answering questions, reviewing assignments, and mentoring students.',
        'Evaluated lab assignments, quizzes, and programming tasks while ensuring timely feedback.',
        'Collaborated with faculty to prepare course materials and maintain a productive learning environment.',
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="relative flex items-center justify-center overflow-hidden px-6 py-10 bg-gradient-to-b from-[#050816] via-[#0B1120] to-[#050816]"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px] animate-pulse-slow" />
      <div className="absolute -bottom-32 right-10 h-96 w-96 rounded-full bg-purple-500/20 blur-[140px] animate-pulse-slow" />

      <div className="relative z-10 w-full max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Professional Experience
        </h2>

        {/* Timeline Cards */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
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
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {exp.role}
                </h3>

                <span className="text-sm text-slate-400">{exp.period}</span>
              </div>

              {/* Meta Info */}
              <div className="mt-3 flex flex-wrap items-center gap-4">
                <span className="text-[15px] font-semibold text-cyan-400">
                  {exp.company}
                </span>

                {exp.location && (
                  <span className="flex items-center gap-1 text-sm text-slate-400">
                    <MdLocationOn className="text-red-400 text-base" />
                    {exp.location}
                  </span>
                )}

                {exp.workType && (
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/10 text-green-400 border border-green-400/20">
                    {exp.workType}
                  </span>
                )}
              </div>

              {/* Points */}
              <ul className="mt-8 space-y-3 text-sm text-slate-300">
                {exp.points.map((point, i) => (
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

      {/* Animation */}
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

export default Experience
