"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import PavaniImage from "../assets/pavani1.jpg";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Hero: React.FC = () => {
  const titles = ["Frontend Developer", "React Native & React JS Specialist"];
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 60 : 120;

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        // Deleting backward
        if (displayText.length > 0) {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
        } else {
          // Switch to next title
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between bg-[#0A0A0A] text-gray-100 px-8 md:px-20 pt-20 md:pt-28 overflow-hidden ">
        {/* === BACKGROUND GRADIENT BLOBS === */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top-left blob (greenish-cyan glow) */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-green-400 via-emerald-500 to-cyan-600 rounded-full blur-3xl opacity-25 animate-pulse"></div>

          {/* Bottom-right blob (cyan-blue glow) */}
          <div className="absolute bottom-[-120px] right-[-100px] w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500 via-blue-600 to-emerald-700 rounded-full blur-3xl opacity-25 animate-pulse"></div>
        </div>

        {/* === LEFT: Text === */}
        <motion.div
          className="z-10 md:w-1/2 space-y-6 md:space-y-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className={`${poppins.className} text-5xl md:text-6xl font-bold leading-tight`}
          >
            <span className="block text-gray-300">Hi There,</span>
            <span className="block bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent transition-transform duration-300 ease-in-out hover:scale-110 animate-shine">
              Enjamoori Pavani
            </span>

            {/* Subtitle with gradient text */}
            <span className="block text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-green-400 to-emerald-500 bg-clip-text text-transparent mt-2 animate-shine">
              {displayText}
              <span className="border-r-2 border-cyan-400 ml-1 animate-pulse"></span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
            Passionate{" "}
            <span className="text-cyan-400 font-semibold">
              React Native & React JS Specialist
            </span>
            . I build seamless, high-performance mobile and web applications.
            With <span className="text-cyan-400 font-semibold">3+ years</span>{" "}
            of hands-on experience, I have worked on OTT platforms, real-time
            tracking, and interactive interfaces.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/Enjamoori_Pavani_Resume.pdf"
              download
              className="px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-cyan-400/30 transition-all hover:scale-105"
            >
              📄 Download CV
            </a>

            <button
              onClick={handleScrollToAbout}
              className="px-6 py-3 rounded-full border border-gray-600 hover:border-cyan-400 text-gray-300 font-semibold hover:text-white hover:bg-gray-800 transition-all"
            >
              Know more about me
            </button>
          </div>
        </motion.div>

        {/* === RIGHT: Profile Image === */}
        <motion.div
          className="relative md:w-1/2 flex justify-center mt-12 md:mt-0 z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-[6px] border-transparent bg-gradient-to-tr from-green-400 via-cyan-500 to-blue-600 p-[3px] shadow-[0_0_50px_rgba(6,182,212,0.5)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
              <Image
                src={PavaniImage}
                alt="Enjamoori Pavani"
                fill
                className="object-cover object-top -translate-y-2"
                priority
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* === Continuous Shine Animation === */}
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
      `}</style>
    </>
  );
};

export default Hero;
