"use client";

import { motion } from "framer-motion";
import Logo from "./ui/logo";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-black/60 bg-no-repeat bg-cover bg-blend-multiply justify-center bg-linear-to-b from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F] relative overflow-hidden"
      style={{
        backgroundImage: `url(/bgImageEyoAnthony.jpg)`,
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 md:min-w-190  max-w-4xl mx-auto px-4 md:px-8 text-center py-20">
        <div className="space-y-6 animate-fade-in-up">
          <div className="w-full h-[60vh] flex items-center justify-center">
            <div className="hidden md:block">
              <Logo xl />
            </div>
            <div className="md:hidden">
              <Logo />
            </div>
          </div>
          {/* Subtitle */}
          {/*<div className="overflow-hidden">
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="inline-block"
            >
              <span className="text-sm md:text-base font-medium text-yellow-500 uppercase tracking-widest">
                Cinematic Storytelling
              </span>
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
            >
              Visual Stories
              <br />
              <span className="gradient-text">That Move</span>
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed`}
            >
              High-quality visuals, compelling storytelling and attention to
              details. Let's bring your vision to life!
            </motion.p>
          </div>*/}
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 md:py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 transform hover:scale-105"
            >
              Book a Consultation
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="px-8 py-3 md:py-4 border border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500/10 transition-all duration-300"
            >
              View Portfolio
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-yellow-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
