"use client";

import { motion } from "framer-motion";

const About: React.FC = () => {
  const skills = ["Python", "Machine Learning", "AI", "OTT Platforms"];
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

        {/* Paragraph */}
        <motion.p
          className="leading-relaxed text-lg md:text-xl text-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I’m{" "}
          <span className="font-semibold text-white">Nikhil Durgesh Katta</span>, a
          passionate and driven developer deeply interested in technology and
          innovation. My expertise lies in{" "}
          {skills.map((skill, index) => (
            <span
              key={index}
              className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 mx-1"
            >
              {skill}
            </span>
          ))}
          . I have{" "}
          <span className="font-medium text-cyan-400">1+ year of experience</span>{" "}
          in front-end mobile application development — particularly{" "}
          <span className="font-medium text-cyan-400">OTT platforms</span> — where
          I focus on creating intuitive, high-performance, and visually engaging
          applications.
          <br />
          <br />
          My approach blends elegant UI/UX design, efficient code architecture,
          and a curiosity for emerging technologies. I constantly learn and evolve
          to build modern, seamless experiences across both web and mobile
          platforms.
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
