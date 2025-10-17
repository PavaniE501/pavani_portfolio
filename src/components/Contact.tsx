"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_tj7h5qm", // ✅ your service ID
        "template_93624ek", // ✅ your updated template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        "pioNQMk782JvEOADP" // ✅ your public key
      )
      .then(
        () => {
          setIsLoading(false);
          setSent(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setSent(false), 3000);
        },
        (error) => {
          console.error("Email error:", error);
          setIsLoading(false);
        }
      );
  };

  const socialLinks = [
    {
      icon: <FaGithubSquare />,
      href: "https://github.com/PavaniE501/",
      color: "from-pink-500 to-orange-400",
      delay: 0,
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/pavani-enjamoori-61b2a41a2/",
      color: "from-cyan-500 to-blue-500",
      delay: 0.2,
    },
  ];

  return (
    <section className="relative min-h-screen py-24 px-6 md:px-20 text-gray-200 overflow-hidden bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-[#050510]">
      {/* Glowing Backgrounds */}
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-emerald-500 rounded-full blur-[180px] opacity-30 animate-[pulse_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500 via-blue-600 to-cyan-400 rounded-full blur-[160px] opacity-30 animate-[pulse_6s_ease-in-out_infinite]"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 animate-shine">
            Let’s Connect
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            Have an idea, opportunity, or collaboration in mind? I’m always open
            to discussing exciting projects or innovations. Let’s create
            something amazing together.
          </p>

          <div className="mt-10 space-y-5 text-gray-300">
            <div className="flex items-center gap-4">
              <Mail className="text-cyan-400 w-6 h-6" />
              <span className="text-lg">pavanienjamoori@gmail.com</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 mt-10">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 0 }}
                animate={{
                  y: [0, -6, 0],
                  boxShadow: [
                    "0 0 10px rgba(0,0,0,0.1)",
                    "0 0 20px rgba(0,0,0,0.2)",
                    "0 0 10px rgba(0,0,0,0.1)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: social.delay,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.25, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-full bg-gradient-to-tr ${social.color} shadow-lg shadow-emerald-400/30 text-white text-2xl transition-transform`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl space-y-6"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-emerald-500/10 pointer-events-none"></div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message..."
              className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 h-32 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 py-3 px-5 text-lg font-semibold rounded-lg text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 shadow-md hover:shadow-cyan-400/40 transition-all duration-300"
          >
            {isLoading ? "Sending..." : "Send Message"}
            {!isLoading && <Send className="w-5 h-5" />}
          </motion.button>

          {sent && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-emerald-400 text-center font-medium mt-4"
            >
              ✅ Message Sent Successfully!
            </motion.p>
          )}
        </motion.form>
      </div>

      {/* Animations */}
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

export default Contact;
