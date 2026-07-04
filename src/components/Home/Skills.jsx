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
import {
  FaLightbulb,
  FaUsers,
  FaBrain,
  FaHandshake,
  FaComments,
  FaServer,
} from 'react-icons/fa'

function Skills() {
  // Technical groups
  const techGroups = [
    {
      group: 'Languages',
      color: 'from-yellow-400 via-orange-400 to-red-400',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript size={24} /> },
        { name: 'TypeScript', icon: <SiTypescript size={24} /> },
        { name: 'PHP', icon: <SiPhp size={24} /> },
      ],
    },
    {
      group: 'Frameworks & Libraries',
      color: 'from-cyan-400 via-blue-500 to-purple-500',
      skills: [
        { name: 'React.js', icon: <SiReact size={24} /> },
        { name: 'Laravel', icon: <SiLaravel size={24} /> },
        { name: 'Next.js', icon: <SiNextdotjs size={24} /> },
        { name: 'Node.js', icon: <SiNodedotjs size={24} /> },
        { name: 'Express.js', icon: <SiExpress size={24} /> },
        { name: 'Tailwind', icon: <SiTailwindcss size={24} /> },
        { name: 'shadcn/ui', icon: <SiRadixui size={24} /> },
        { name: 'Bootstrap', icon: <SiBootstrap size={24} /> },
      ],
    },
    {
      group: 'Databases & Tools',
      color: 'from-green-400 via-emerald-400 to-teal-400',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb size={24} /> },
        { name: 'Firebase', icon: <SiFirebase size={24} /> },
        { name: 'SQL', icon: <SiMysql size={24} /> },
        { name: 'Github', icon: <SiGithub size={24} /> },
      ],
    },
    {
      group: 'Deployment',
      color: 'from-pink-400 via-purple-400 to-indigo-400',
      skills: [
        { name: 'Vercel', icon: <SiVercel size={24} /> },
        { name: 'Netlify', icon: <SiNetlify size={24} /> },
        { name: 'cPanel', icon: <FaServer size={24} /> },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center overflow-hidden
      bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 pt-20"
    >
      <div className="absolute -top-28 -left-28 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-32 right-16 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl animate-pulse-slow delay-500" />

      {/* TITLE */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 mb-12">
        Tech & Talents
      </h2>

      {/* TECH GROUPS */}
      <div className="flex flex-col w-full max-w-7xl gap-12 mb-24">
        {techGroups.map((group, index) => (
          <div key={group.group} className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-slate-800">{group.group}</h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/50 backdrop-blur shadow-lg cursor-pointer hover:scale-105 transition-transform"
                >
                  <div
                    className={`bg-linear-to-r ${group.color} p-3 rounded-full text-white mb-2`}
                  >
                    {skill.icon}
                  </div>

                  <span className="text-sm font-semibold text-slate-700 text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>


      {/* ANIMATION KEYFRAMES */}
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

export default Skills
