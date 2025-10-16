"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
 const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    institution:
      "Vardhaman College of Engineering(AUTONOMOUS), Shamshabad",
    duration: "2019 – 2022",
    score: "CGPA: 7.4 / 10",
    description:
      "Graduated with a strong foundation in Computer Science, specializing in Artificial Intelligence, Data Science, and Software Engineering. Developed hands-on expertise through academic and industry projects.",
  },
  {
    id: 2,
    degree: "State Board of Technical Education & Training in Computer Engineering",
    institution: "Kamala Nehru Polytechnic For Women - Hyderabad",
    duration: "2016 – 2019",
    score: "Percentage: 82%",
    description:
      "Graduated with a strong foundation in Computer Engineering. Developed practical skills and hands-on expertise through academic and industry projects.",
  },
];


  return (
    <section
      id="education"
      className="relative py-24 px-6 md:px-20 bg-[#0A0A0A] text-gray-200 overflow-hidden"
    >
      {/* 🌌 Gradient Background Blobs */}
      <div className="absolute -top-40 -left-32 w-[35rem] h-[35rem] bg-gradient-to-tr from-green-400 via-emerald-500 to-cyan-600 rounded-full blur-[150px] opacity-25 -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[38rem] h-[38rem] bg-gradient-to-bl from-cyan-500 via-blue-600 to-emerald-700 rounded-full blur-[150px] opacity-25 -z-10 animate-pulse"></div>

      {/* 🏫 Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 animate-shine"
      >
        Education
      </motion.h2>

      {/* 🎓 Horizontal Scroll Cards */}
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-10 md:gap-14 items-stretch overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="min-w-[300px] md:min-w-[350px] lg:min-w-[380px] snap-center relative p-[2px] rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 hover:shadow-[0_0_50px_rgba(34,197,94,0.3)] transition-all duration-500"
          >
            <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-6 h-full border border-white/10 hover:border-cyan-400/20 transition-all duration-500 flex flex-col">
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] mx-auto animate-pulse">
                <GraduationCap className="text-white w-6 h-6" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-white text-center mb-2">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-400 text-center mb-2">
                {edu.institution}
              </p>

              <div className="text-center mb-3">
                <p className="text-sm text-emerald-400 font-medium">
                  {edu.duration}
                </p>
                <p className="text-sm text-cyan-400 font-medium">{edu.score}</p>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed text-center">
                {edu.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✨ Gradient Shine Animation */}
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-shine {
          background-size: 200% auto;
          animation: shine 3s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Education;
