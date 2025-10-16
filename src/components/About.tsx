"use client";

import { motion } from "framer-motion";

const About: React.FC = () => {
  const imageUrl =
    "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg";

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 lg:px-20 bg-[#0A0A0A] text-gray-300 overflow-hidden"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/95"></div>
      </div>

      {/* Floating Gradient Blobs */}
      <div className="absolute -top-40 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-green-400 via-emerald-500 to-cyan-600 rounded-full blur-3xl opacity-25 animate-pulse"></div>
      <div className="absolute bottom-[-150px] right-[-120px] w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500 via-blue-600 to-emerald-700 rounded-full blur-3xl opacity-25 animate-pulse"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center md:text-left">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        {/* Paragraph Content */}
        <motion.p
          className="text-lg md:text-xl text-gray-100 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I’m <span className="font-semibold text-white">Enjamoori Pavani</span>
          , a frontend developer with over{" "}
          <span className="text-cyan-400 font-medium">3 years</span> of
          experience building mobile and web apps using{" "}
          <span className="text-cyan-400 font-medium">React Native</span> and{" "}
          <span className="text-cyan-400 font-medium">React JS</span>. I’ve
          worked on end-to-end app development for both Android and iOS,
          including{" "}
          <span className="text-cyan-400 font-medium">OTT platforms</span>, push
          notifications, and API integration. I’m proficient with tools like{" "}
          <span className="text-cyan-400 font-medium">VSCode</span>,{" "}
          <span className="text-cyan-400 font-medium">Android Studio</span>,{" "}
          <span className="text-cyan-400 font-medium">Git</span>, and
          experienced in{" "}
          <span className="text-cyan-400 font-medium">JavaScript</span>,{" "}
          <span className="text-cyan-400 font-medium">TypeScript</span>,{" "}
          <span className="text-cyan-400 font-medium">HTML5</span>, and{" "}
          <span className="text-cyan-400 font-medium">CSS</span>. I’m passionate
          about building high-quality, user-friendly apps and constantly
          exploring new challenges.
        </motion.p>

        {/* Accent Divider */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-10 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 rounded-full"
        ></motion.div>
      </div>
    </section>
  );
};

export default About;
