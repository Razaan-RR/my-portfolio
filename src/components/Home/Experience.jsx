import React from 'react'
import { MdLocationOn } from 'react-icons/md'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import demo1 from '../../assets/demo-1.png'
import demo2 from '../../assets/demo-2.png'
import demo3 from '../../assets/demo-3.png'
import demo4 from '../../assets/demo-4.png'
import attendance from '../../assets/attendance.png'

function Experience() {
  const [preview, setPreview] = React.useState(null)
  const experiences = [
    {
      role: 'Assistant Engineer (Software Development)',
      period: 'March 2026 - Present',
      company: 'WBSoftwares',
      location: 'Mohakhali-DOHS, Dhaka, Bangladesh',
      workType: 'Remote',
      points: [
        'Developed modules for a Learning Management System (LMS) including school management and exam management features',
        'Built and optimized Blade-based UI components for dashboards, forms, and management panels',
        'Developed core features such as student enrollment, class management, attendance tracking, and exam scheduling',
        'Designed and implemented CRUD operations with role-based access control (admin, teacher, student, librarian)',
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

  const projectImages = [
    {
      image: demo1,
      title: 'Student Result',
    },
    {
      image: demo2,
      title: 'Student Result',
    },
    {
      image: demo3,
      title: 'Question create for exams',
    },
    {
      image: demo4,
      title: 'Question create for exams',
    },
    {
      image: attendance,
      title: 'Teacher attendance',
    },
  ]

  return (
    <section
      id="experience"
      className="relative flex items-center justify-center overflow-hidden px-6 py-10 bg-gradient-to-b from-[#050816] via-[#0B1120] to-[#050816]"
    >
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px] animate-pulse-slow" />
      <div className="absolute -bottom-32 right-10 h-96 w-96 rounded-full bg-purple-500/20 blur-[140px] animate-pulse-slow" />

      <div className="relative z-10 w-full max-w-5xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Professional Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <React.Fragment key={index}>
              <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(6,182,212,0.08)] transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.18)]">
                <div className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500" />
                <div className="absolute right-0 top-0 h-full w-[4px] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400" />

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {exp.role}
                  </h3>

                  <span className="text-sm text-slate-400">{exp.period}</span>
                </div>

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

                <ul className="mt-8 space-y-3 text-sm text-slate-300">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed">
                      <span className="text-cyan-400 text-lg">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {index === 0 && (
                <div className="py-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent whitespace-nowrap">
                      Work Samples
                    </h3>

                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                  </div>

                  <Swiper
                    modules={[Autoplay, Pagination]}
                    loop
                    centeredSlides
                    spaceBetween={20}
                    slidesPerView={1.15}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1.5,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      1024: {
                        slidesPerView: 2.5,
                      },
                    }}
                    className="pb-12"
                  >
                    {projectImages.map((project, i) => (
                      <SwiperSlide key={i}>
                        <div className="group overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#0b1220] transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.25)]">
                          <div
                            onClick={() => setPreview(project.image)}
                            className="relative overflow-hidden cursor-zoom-in"
                          >
                            <img
                              src={project.image}
                              alt={project.title}
                              className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                                Click to Preview
                              </span>
                            </div>
                          </div>

                          <div className="bg-gradient-to-t from-[#050816] to-[#101827] p-5">
                            <h4 className="text-lg font-bold text-white">
                              {project.title}
                            </h4>

                            <p className="mt-2 text-sm text-slate-400">
                              Click image to view full size
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {preview && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
            onClick={() => setPreview(null)}
          >
            <button
              onClick={() => setPreview(null)}
              className="absolute top-6 right-6 text-5xl text-white hover:text-cyan-400 transition"
            >
              ×
            </button>

            <img
              src={preview}
              alt="Preview"
              onClick={(e) => e.stopPropagation()}
              className="max-h-[92vh] max-w-[92vw] rounded-2xl object-contain shadow-[0_0_60px_rgba(0,0,0,.8)] animate-[zoomIn_.25s_ease]"
            />
          </div>
        )}
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

        .swiper-pagination-bullet{
          background:#64748b;
          opacity:1;
        }

        .swiper-pagination-bullet-active{
          background:#22d3ee;
        }
          @keyframes zoomIn {
            from {
              opacity: 0;
              transform: scale(.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
      `}
      </style>
    </section>
  )
}

export default Experience
