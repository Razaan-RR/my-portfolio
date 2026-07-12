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
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#050816] via-[#0B1120] to-[#050816] flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      <div className="absolute -top-24 -left-24 h-72 w-72 md:h-96 md:w-96 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="absolute top-1/3 -right-24 h-72 w-72 md:h-96 md:w-96 rounded-full bg-purple-300/30 blur-3xl" />

      <div className="absolute top-5 left-1/4 text-6xl text-cyan-400/20">
        <SiReact />
      </div>

      <div className="absolute bottom-52 right-1/2 text-5xl text-white/10">
        <SiNextdotjs />
      </div>

      <div className="absolute top-1/3 right-1/2 text-5xl text-red-500/20">
        <SiLaravel />
      </div>

      <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-slate-900/70 backdrop-blur px-4 py-1 text-xs tracking-widest font-semibold text-cyan-400 mb-4">
            FULL STACK DEVELOPER
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white mb-4">
            Building{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              dynamic
            </span>{' '}
            digital experiences
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Crafting cutting-edge web applications that are fast, scalable, and
            user-friendly. Explore projects built with React, Laravel,
            TypeScript, Next.js, Node.js, and MongoDB.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 font-semibold text-white shadow-2xl shadow-cyan-500/20 hover:scale-105 transition-all duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-700 bg-slate-900/60 backdrop-blur px-8 py-3 font-semibold text-slate-200 hover:bg-slate-800 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="absolute h-[450px] w-[450px] rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-[120px]" />

          <div className="w-full max-w-lg">
            <Swiper
              className="heroSwiper"
              modules={[Autoplay, Pagination]}
              loop
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              speed={700}
              slidesPerView={1}
            >
              {slides.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[350px] w-full overflow-hidden rounded-3xl">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="h-full w-full rounded-3xl object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 h-40 w-40 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 opacity-50 blur-2xl" />
    </section>
  )
}

export default Hero
