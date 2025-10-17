"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Apple, Github } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);

  const projects = [
    {
      id: 1,
      title: "OTT Streaming APP",
      description:
        "Contributing to the development of ETV Win, a leading Telugu OTT platform. Building high-performance mobile interfaces with React Native, integrating HLS streaming, offline downloads, push notifications, and adaptive multi-quality playback to enhance user engagement and streaming experience.",
      tech: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Kotlin",
        "Java",
        "Swift",
        "Objective-C",
        "Firebase",
      ],
      android:
        "https://play.google.com/store/apps/details?id=com.etvwin.mobile",
      ios: "https://apps.apple.com/us/app/etv-win/id1245077673",
      image:
        "https://cdn.dribbble.com/userupload/10727581/file/original-558a95aea9d61c46a3f6e9b1c683d776.png",
    },
    {
      id: 2,
      title: "Music Player App",
      description:
        "A feature-rich mobile music player built with React Native CLI, enabling users to play, pause, skip, and loop songs, along with interactive song sliders and Android notifications for seamless playback control.",
      tech: ["React Native CLI", "Redux", "JavaScript"],
      github: "https://github.com/PavaniE501/Music_Player_React_Native",
      image:
        "https://i.pinimg.com/originals/a0/f9/9b/a0f99b1771e05f82c37d641324a3b1a8.gif",
    },

    {
      id: 3,
      title: "AI Voice Assistant",
      description:
        "An intelligent AI-powered voice assistant app built using React Native and OpenAI API. Supports natural voice interaction, task automation, and real-time speech recognition with dynamic UI feedback.",
      tech: [
        "React Native",
        "OpenAI API",
        "Speech Recognition",
        "Tailwind CSS",
      ],
      github:
        "https://github.com/PavaniE501/VoiceAssistant/tree/main/VoiceAssistant",
      image: "https://i.ytimg.com/vi/Q_pz4xFow3Q/maxresdefault.jpg",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 md:px-20 text-gray-200 overflow-hidden bg-[#000000]"
    >
      {/* Glowing Orbs (Teal–Blue Gradient Theme) */}
      <div className="absolute -top-40 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_left,_#00ffcc,_#00111f_80%)] rounded-full blur-3xl opacity-25 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_right,_#00bfff,_#00111f_80%)] rounded-full blur-3xl opacity-25 animate-pulse"></div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-24 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500"
      >
        Featured Projects
      </motion.h2>

      {/* Project List */}
      <div className="flex flex-col gap-24 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className={`relative flex flex-col lg:flex-row ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-12 md:gap-20`}
          >
            {/* Project Image */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              transition={{ type: "spring", stiffness: 160 }}
              className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl shadow-2xl hover:shadow-cyan-400/40"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-[500px] h-[300px] object-cover rounded-3xl transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </motion.div>

            {/* Text Content */}
            <div className="max-w-xl">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {project.title}
              </h3>
              <p className="text-gray-300 text-lg mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-4 py-1.5 rounded-full font-medium text-white bg-gradient-to-r from-cyan-600 to-teal-500 shadow-md shadow-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-6">
                {project.android && (
                  <motion.a
                    href={project.android}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white px-6 py-2.5 rounded-full shadow-lg hover:shadow-teal-400/30 transition-all"
                  >
                    <Smartphone className="w-5 h-5" /> Android
                  </motion.a>
                )}
                {project.ios && (
                  <motion.a
                    href={project.ios}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-gray-700 via-slate-600 to-gray-500 text-white px-6 py-2.5 rounded-full shadow-lg hover:shadow-slate-400/30 transition-all"
                  >
                    <Apple className="w-5 h-5" /> iOS
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-600 text-white px-6 py-2.5 rounded-full shadow-lg hover:shadow-cyan-400/30 transition-all"
                  >
                    <Github className="w-5 h-5" /> GitHub
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
