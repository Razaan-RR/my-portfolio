import React from 'react'
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiLaravel,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiRadixui,
} from 'react-icons/si'
import { FaServer } from 'react-icons/fa'

function Skills() {
  const techGroups = [
    {
      group: 'Languages',
      color: 'from-yellow-400 via-orange-400 to-red-500',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript size={26} /> },
        { name: 'TypeScript', icon: <SiTypescript size={26} /> },
        { name: 'PHP', icon: <SiPhp size={26} /> },
      ],
    },
    {
      group: 'Frameworks & Libraries',
      color: 'from-cyan-400 via-blue-500 to-purple-500',
      skills: [
        { name: 'React.js', icon: <SiReact size={26} /> },
        { name: 'Laravel', icon: <SiLaravel size={26} /> },
        { name: 'Next.js', icon: <SiNextdotjs size={26} /> },
        { name: 'Node.js', icon: <SiNodedotjs size={26} /> },
        { name: 'Express.js', icon: <SiExpress size={26} /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={26} /> },
        { name: 'shadcn/ui', icon: <SiRadixui size={26} /> },
        { name: 'Bootstrap', icon: <SiBootstrap size={26} /> },
      ],
    },
    {
      group: 'Databases & Tools',
      color: 'from-emerald-400 via-teal-400 to-cyan-500',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb size={26} /> },
        { name: 'Firebase', icon: <SiFirebase size={26} /> },
        { name: 'MySQL', icon: <SiMysql size={26} /> },
        { name: 'GitHub', icon: <SiGithub size={26} /> },
      ],
    },
    {
      group: 'Deployment',
      color: 'from-pink-500 via-purple-500 to-indigo-500',
      skills: [
        { name: 'Vercel', icon: <SiVercel size={26} /> },
        { name: 'Netlify', icon: <SiNetlify size={26} /> },
        { name: 'cPanel', icon: <FaServer size={26} /> },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-b from-[#050816] via-[#0B1120] to-[#050816] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-purple-500/20 blur-[140px] animate-pulse-slow" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-16">
          Tech Stack
        </h2>

        {/* Groups */}
        <div className="space-y-16">
          {techGroups.map((group) => (
            <div key={group.group}>
              <h3 className="text-xl font-bold text-cyan-300 mb-8">
                {group.group}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]"
                  >
                    {/* Glow */}
                    <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />

                    <div className="relative flex flex-col items-center">
                      <div
                        className={`mb-4 rounded-full bg-gradient-to-r ${group.color} p-4 text-white shadow-lg`}
                      >
                        {skill.icon}
                      </div>

                      <h4 className="text-sm font-semibold text-slate-200 text-center">
                        {skill.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-20 flex justify-center">
          <div className="h-[2px] w-40 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-70" />
        </div>
      </div>

      <style>
        {`
          @keyframes pulseSlow {
            0%,100%{
              transform:scale(1);
              opacity:.35;
            }
            50%{
              transform:scale(1.08);
              opacity:.6;
            }
          }

          .animate-pulse-slow{
            animation:pulseSlow 6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  )
}

export default Skills