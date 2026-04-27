"use client";

import { Award, Heart, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const countStartYear = new Date(1776872711704).getFullYear();
  const currentYear = new Date().getFullYear();
  const elapsedYears = currentYear - countStartYear + 6; //
  const stats = [
    { label: "Projects Completed", value: "120+" },
    { label: "Years Experience", value: elapsedYears },
    { label: "Happy Clients", value: "50+" },
  ];

  const services = [
    {
      icon: Heart,
      title: "Wedding Films",
      description:
        "Cinematic coverage of your special day, capturing every emotion and moment.",
    },
    {
      icon: Zap,
      title: "Commercial Production",
      description:
        "Compelling brand stories and promotional content that converts viewers.",
    },
    {
      icon: Award,
      title: "Corporate Videos",
      description:
        "Professional company profiles, events, and training content tailored to your needs.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-[#1A1A1A] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 overflow-hidden">
        {/* Section Title */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="mb-16 text-center"
        >
          <h2 className="section-title mb-4 text-slate-200">
            About FilmbyTony
          </h2>
          <p className="text-lg text-gray-400">
            Bringing stories to life through cinematic excellence
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Image */}
          <div>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              className="relative rounded-lg overflow-hidden"
            >
              <img
                src="/eyoAnthony.jpg"
                alt="Videographer"
                className="w-full h-full object-cover aspect-square rounded-lg"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0F0F0F]/50 to-transparent rounded-lg"></div>
            </motion.div>
          </div>

          {/* Bio */}
          <div className="">
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white dark:text-white light:text-gray-900 mb-4">
                  Creative Vision.{" "}
                  <span className="gradient-text">Flawless Execution.</span>
                </h3>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-lg leading-relaxed mb-4">
                  FilmbyTony focuses on delivering unique and impactful visual
                  work by blending creative innovation with a deep commitment to
                  storytelling. The team works to capture the essence of a
                  client's vision through a cinematic lens, ensuring every frame
                  resonates with purposes.
                </p>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-lg leading-relaxed">
                  My approach combines technical expertise with artistic vision,
                  ensuring every frame tells a story worth watching. From
                  intimate weddings to large-scale commercial productions, I
                  deliver cinema-quality content that resonates.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-dark dark:bg-dark light:bg-light-bg rounded-lg p-4 text-center border border-dark-card dark:border-dark-card light:border-gray-200"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-gold dark:text-gold light:text-navy mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div>
          <h3 className="text-3xl font-bold text-white dark:text-white light:text-gray-900 mb-12 text-center">
            What I Offer
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-dark dark:bg-dark light:bg-light-bg rounded-lg p-8 border border-dark-card dark:border-dark-card light:border-gray-200 hover:border-gold dark:hover:border-gold light:hover:border-navy transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gold/10 dark:bg-gold/10 light:bg-navy/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 dark:group-hover:bg-gold/20 light:group-hover:bg-navy/20 transition-colors">
                    <Icon className="w-6 h-6 text-gold dark:text-gold light:text-navy" />
                  </div>
                  <h4 className="text-xl font-bold text-white dark:text-white light:text-gray-900 mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
