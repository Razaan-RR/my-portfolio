import React from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function Contact() {
  const contactInfo = [
    { icon: <MdLocationOn />, label: "Dhaka, Bangladesh" },
    { icon: <MdPhone />, label: "(+880)1876865021" },
    { icon: <MdEmail />, label: "razaanreza0705@gmail.com" },
  ];

  const socialLinks = [
    { icon: <SiGithub />, link: "https://github.com/Razaan-RR" },
    { icon: <SiLinkedin />, link: "https://www.linkedin.com/in/razaan-reza" },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-20 overflow-hidden"
    >
      {/* Floating background icons */}
      <motion.div
        className="absolute top-10 left-10 text-6xl text-blue-400 opacity-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <MdEmail />
      </motion.div>
      <motion.div
        className="absolute top-1/4 right-1/5 text-5xl text-green-400 opacity-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <MdPhone />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-1/3 text-5xl text-purple-500 opacity-10"
        animate={{ y: [0, 15, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <MdLocationOn />
      </motion.div>

      {/* Section Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* Contact Info */}
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="text-3xl text-cyan-500">{info.icon}</div>
              <div className="text-slate-700 font-medium">{info.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center justify-center gap-6">
          <motion.h3 className="text-xl font-semibold text-purple-500 mb-4">
            Connect With Me
          </motion.h3>
          <div className="flex gap-8">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-white p-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg hover:scale-110 hover:shadow-2xl transition-transform"
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Custom animations */}
      <style>
        {`
          @keyframes bounceSlow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
        `}
      </style>
    </section>
  );
}

export default Contact;
