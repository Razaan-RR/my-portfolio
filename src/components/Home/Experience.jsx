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
      className="relative flex items-center justify-center px-6 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100"
    >
      {/* background glow */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-28 right-10 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl animate-pulse-slow" />

      <div className="relative z-10 w-full max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
          Professional Experience
        </h2>

        {/* Timeline cards */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white/50 backdrop-blur-xl rounded-xl shadow-lg p-6 overflow-hidden border border-white/40"
            >
              {/* left gradient border */}
              <div className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500" />

              {/* right gradient border */}
              <div className="absolute right-0 top-0 h-full w-[4px] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400" />
              {/* header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <h3 className="text-lg font-semibold text-slate-800">
                  {exp.role}
                </h3>

                <span className="text-sm text-slate-500">{exp.period}</span>
              </div>

              {/* meta info */}
              <div className="mt-1 flex flex-wrap items-center gap-3">
                <span className="text-[15px] font-medium text-cyan-600">
                  {exp.company}
                </span>

                {exp.location && (
                  <span className="text-sm flex items-center gap-1 text-slate-500">
                    <MdLocationOn className="text-red-500 text-base" />
                    {exp.location}
                  </span>
                )}

                {exp.workType && (
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-green-100 text-green-600 border border-green-200">
                    {exp.workType}
                  </span>
                )}
              </div>

              {/* points */}
              <ul className="mt-8 space-y-2 text-slate-600 text-sm">
                {exp.points.map((point, i) => (
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

      {/* background animation */}
      <style>
        {`
          @keyframes pulseSlow {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.1); opacity: 0.6; }
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
