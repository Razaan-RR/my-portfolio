import React from 'react'
import { SiReact, SiNextdotjs, SiLaravel } from 'react-icons/si'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import vscodeImg from '../../assets/vscode.png'
import postmanImg from '../../assets/postman.png'
import prisma from '../../assets/prisma.png'
import erDiagram from '../../assets/ERD.png'

function Hero() {
  const slides = [vscodeImg, postmanImg, prisma, erDiagram]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#050816] via-[#0B1120] to-[#050816]">
      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute top-1/3 -right-32 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-pink-500/20 blur-3xl" />

      {/* Floating Icons */}
      <div className="absolute top-12 left-6 sm:left-20 text-4xl sm:text-6xl text-cyan-400/10">
        <SiReact />
      </div>

      <div className="absolute top-1/3 right-8 sm:right-24 text-4xl sm:text-5xl text-red-500/10">
        <SiLaravel />
      </div>

      <div className="absolute bottom-24 left-1/2 text-4xl sm:text-5xl text-white/5">
        <SiNextdotjs />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">
          {/* Left Side */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <span className="inline-block rounded-full border border-cyan-500/30 bg-slate-900/70 px-5 py-2 text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-cyan-400 backdrop-blur">
              FULL STACK DEVELOPER
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
              Building{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                dynamic
              </span>
              <br />
              digital experiences
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
              Crafting modern, scalable, and high-performance web applications
              with React, Laravel, Next.js, TypeScript, Node.js, MongoDB, and
              Prisma while focusing on clean UI, maintainable architecture, and
              great user experiences.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 text-center font-semibold text-white shadow-xl shadow-cyan-500/20 transition duration-300 hover:scale-105"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-slate-700 bg-slate-900/60 px-8 py-3 text-center font-semibold text-slate-200 backdrop-blur transition duration-300 hover:bg-slate-800"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg">
              {/* Glow */}
              <div className="absolute inset-0 scale-110 rounded-[40px] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-[90px]" />

              <Swiper
                modules={[Autoplay, Pagination]}
                loop
                slidesPerView={1}
                speed={700}
                autoplay={{
                  delay: 2200,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                className="heroSwiper rounded-3xl"
              >
                {slides.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/70 shadow-2xl backdrop-blur">
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="
                          h-[220px]
                          w-full
                          object-cover
                          transition duration-500
                          hover:scale-105
                          sm:h-[280px]
                          md:h-[360px]
                          lg:h-[430px]
                        "
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
