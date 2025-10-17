"use client";

import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const services = [
  {
    name: "App Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description:
      "Creating performant mobile applications with React Native and modern front-end technologies.",
  },
  {
    name: "Web Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description:
      "Building responsive, modern, and scalable websites using HTML, CSS, JS, and React.",
  },
  {
    name: "Frontend Frameworks",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description:
      "Creating dynamic and interactive frontends with JavaScript and modern frameworks like React and React Native.",
  },
  {
    name: "State Management",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    description:
      "Implementing efficient state management using Redux, Redux Toolkit, and React Context API for scalable applications.",
  },
  {
    name: "Node.js / Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description:
      "Designing robust backend services and REST APIs using Node.js and Express.",
  },
  {
    name: "Database / MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description:
      "Implementing scalable database solutions using MongoDB for web and mobile apps.",
  },
];


const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-[#050510] text-gray-100 overflow-hidden"
    >
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-emerald-500 rounded-full opacity-25 blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500 via-blue-500 to-cyan-400 rounded-full opacity-25 blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          className={`${poppins.className} text-4xl md:text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 animate-shine`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Services
        </motion.h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 0 40px rgba(16, 185, 129, 0.4)",
              }}
              className="bg-black/60 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center text-center border border-white/10 hover:border-emerald-400/40 transition-all duration-500"
            >
              <div className="w-16 h-16 mb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                <img
                  src={service.icon}
                  alt={service.name}
                  className="relative w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                {service.name}
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tailwind Keyframes */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
        }
        .animate-[pulse_6s_ease-in-out_infinite] {
          animation: pulse 6s ease-in-out infinite;
        }
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
    </section>
  );
};

export default Services;
