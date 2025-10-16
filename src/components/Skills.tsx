"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// ✅ Dynamically import icons to avoid SSR issues
const SiJavascript = dynamic(() => import("react-icons/si").then(mod => mod.SiJavascript), { ssr: false });
const SiTypescript = dynamic(() => import("react-icons/si").then(mod => mod.SiTypescript), { ssr: false });
const SiReact = dynamic(() => import("react-icons/si").then(mod => mod.SiReact), { ssr: false });
const SiRedux = dynamic(() => import("react-icons/si").then(mod => mod.SiRedux), { ssr: false });
const SiNodedotjs = dynamic(() => import("react-icons/si").then(mod => mod.SiNodedotjs), { ssr: false });
const SiFirebase = dynamic(
  () => import("react-icons/si").then((mod) => mod.SiFirebase),
  { ssr: false }
);
const SiKotlin = dynamic(
  () => import("react-icons/si").then((mod) => mod.SiKotlin),
  { ssr: false }
);
const SiCss3 = dynamic(
  () => import("react-icons/si").then((mod) => mod.SiCss3),
  { ssr: false }
);
const SiPython = dynamic(
  () => import("react-icons/si").then((mod) => mod.SiPython),
  { ssr: false }
);
const SiOpencv = dynamic(
  () => import("react-icons/si").then((mod) => mod.SiOpencv),
  { ssr: false }
);
const SiTensorflow = dynamic(
  () => import("react-icons/si").then((mod) => mod.SiTensorflow),
  { ssr: false }
);
const SiPytorch = dynamic(
  () => import("react-icons/si").then((mod) => mod.SiPytorch),
  { ssr: false }
);
const SiNumpy = dynamic(
  () => import("react-icons/si").then((mod) => mod.SiNumpy),
  { ssr: false }
);
const SiPandas = dynamic(
  () => import("react-icons/si").then((mod) => mod.SiPandas),
  { ssr: false }
);
const SiMysql = dynamic(
  () => import("react-icons/si").then((mod) => mod.SiMysql),
  { ssr: false }
);
const SiMongodb = dynamic(
  () => import("react-icons/si").then((mod) => mod.SiMongodb),
  { ssr: false }
);
const SiJest = dynamic(
  () => import("react-icons/si").then((mod) => mod.SiJest),
  { ssr: false }
);
const SiGit = dynamic(() => import("react-icons/si").then((mod) => mod.SiGit), {
  ssr: false,
});
const FaJava = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaJava),
  { ssr: false }
);
const VscVscode = dynamic(
  () => import("react-icons/vsc").then((mod) => mod.VscVscode),
  { ssr: false }
);
const SiTailwindcss = dynamic(
  () => import("react-icons/si").then((mod) => mod.SiTailwindcss),
  { ssr: false }
);
const SiHtml5 = dynamic(
  () => import("react-icons/si").then((mod) => mod.SiHtml5),
  { ssr: false }
);

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "React Native", icon: <SiReact className="text-cyan-400" /> },
  { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Jest", icon: <SiJest className="text-red-500" /> },
  { name: "Python", icon: <SiPython className="text-blue-400" /> },
  { name: "Java", icon: <FaJava className="text-orange-500" /> },
  { name: "Kotlin", icon: <SiKotlin className="text-purple-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-amber-400" /> },
  { name: "MySQL / SQLite", icon: <SiMysql className="text-sky-400" /> },
  { name: "Git / GitHub", icon: <SiGit className="text-orange-500" /> },
  { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
];

const AnimatedSkill: React.FC<{ skill: any; index: number }> = ({
  skill,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ scale: 1.1, rotate: 2 }}
    className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md backdrop-blur-md 
    hover:border-green-400/60 hover:shadow-[0_0_20px_rgba(0,255,170,0.4)] transition-all duration-300"
  >
    <div className="text-4xl mb-3">{skill.icon}</div>
    <p className="font-medium text-gray-300">{skill.name}</p>
  </motion.div>
);

const Skills: React.FC = () => {
  return (
    <section className="relative py-24 px-6 md:px-20 text-gray-200 overflow-hidden bg-[#010d0c]">
      {/* 🌌 Neon Glow Background */}
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,255,170,0.45)_0%,transparent_70%)] blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.35)_0%,transparent_70%)] blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-green-400 to-cyan-400"
        >
          Tech Stack & Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg"
        >
          Experienced in mobile app development with React Native, complemented
          by strong skills in Redux, MongoDB, RESTful APIs, Jest testing, and
          modern cloud technologies — delivering scalable and high-performance
          applications.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-10">
          {skills.map((skill, index) => (
            <AnimatedSkill key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
