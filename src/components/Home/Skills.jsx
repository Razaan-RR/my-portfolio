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
  SiApache,
} from 'react-icons/si'

import { FaServer, FaCode, FaDatabase, FaTools } from 'react-icons/fa'

function Skills() {
  const skillTree = [
    {
      title: 'Languages',
      color: 'cyan',
      items: [
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'PHP', icon: <SiPhp /> },
      ],
    },

    {
      title: 'Frameworks',
      color: 'purple',
      items: [
        { name: 'React.js', icon: <SiReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Laravel', icon: <SiLaravel /> },
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Express.js', icon: <SiExpress /> },
      ],
    },

    {
      title: 'Database',
      color: 'cyan',
      items: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'MySQL', icon: <SiMysql /> },
      ],
    },

    {
      title: 'Tools',
      color: 'purple',
      items: [
        { name: 'GitHub', icon: <SiGithub /> },
        { name: 'Vercel', icon: <SiVercel /> },
        { name: 'Netlify', icon: <SiNetlify /> },
        { name: 'cPanel', icon: <FaServer /> },
        { name: "XAMPP", icon: <SiApache /> },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-b from-[#050816] via-[#0B1120] to-[#050816] py-10 px-5"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-purple-500/20 blur-[140px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-10">
          Tech Stack
        </h2>

        {/* Center Icon */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-2 border-purple-500 bg-[#0E1326] flex items-center justify-center shadow-[0_0_35px_rgba(168,85,247,.45)]">
              <FaCode size={42} className="text-purple-400" />
            </div>

            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full h-16 w-[2px] bg-gradient-to-b from-purple-500 to-cyan-500"></div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="relative">
          {/* Horizontal Line (Desktop) */}
          <div className="hidden lg:block absolute -top-14 left-1/2 -translate-x-1/2 w-[78%] h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mt-20">
            {' '}
            {skillTree.map((group, index) => (
              <div key={group.title} className="relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden lg:block absolute -top-14 left-1/2 -translate-x-1/2 w-[2px] h-14 bg-gradient-to-b from-purple-500 to-cyan-500"></div>
                {/* Card */}
                <div
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-300
                  ${
                    group.color === 'cyan'
                      ? 'border-cyan-500/40 hover:border-cyan-400'
                      : 'border-purple-500/40 hover:border-purple-400'
                  }
                  bg-[#0D1224]/80 backdrop-blur-xl`}
                >
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100
                  ${
                    group.color === 'cyan'
                      ? 'bg-cyan-500/10'
                      : 'bg-purple-500/10'
                  }`}
                  />

                  {/* Header */}
                  <div
                    className={`relative px-6 py-5 border-b
                  ${
                    group.color === 'cyan'
                      ? 'border-cyan-500/30'
                      : 'border-purple-500/30'
                  }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-full flex items-center justify-center
                      ${
                        group.color === 'cyan'
                          ? 'bg-cyan-500/20 text-cyan-300'
                          : 'bg-purple-500/20 text-purple-300'
                      }`}
                      >
                        {index === 0 && <FaCode size={18} />}
                        {index === 1 && <SiReact size={18} />}
                        {index === 2 && <FaDatabase size={18} />}
                        {index === 3 && <FaTools size={18} />}
                      </div>

                      <h3
                        className={`text-xl font-bold
                      ${
                        group.color === 'cyan'
                          ? 'text-cyan-300'
                          : 'text-purple-300'
                      }`}
                      >
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="relative py-4">
                    {group.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-4 px-6 py-3 border-b border-white/5 hover:bg-white/5 transition"
                      >
                        <span
                          className={`text-lg
                        ${
                          group.color === 'cyan'
                            ? 'text-cyan-400'
                            : 'text-purple-400'
                        }`}
                        >
                          ❯
                        </span>

                        <span
                          className={`text-xl
                        ${
                          group.color === 'cyan'
                            ? 'text-cyan-300'
                            : 'text-purple-300'
                        }`}
                        >
                          {skill.icon}
                        </span>

                        <span className="text-slate-200 font-medium">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <style>{`
        @keyframes float {
          0%,100%{
            transform:translateY(0px);
          }
          50%{
            transform:translateY(-8px);
          }
        }

        @keyframes glow {

          0%,100%{
            box-shadow:
              0 0 15px rgba(6,182,212,.25),
              0 0 35px rgba(168,85,247,.18);
          }

          50%{
            box-shadow:
              0 0 25px rgba(6,182,212,.45),
              0 0 55px rgba(168,85,247,.35);
          }
        }


        @media (max-width:1024px){

          .group{
            margin-top:0;
          }

        }

        @media (max-width:640px){

          h2{
            line-height:1.2;
          }

        }
      `}</style>
    </section>
  )
}

export default Skills
