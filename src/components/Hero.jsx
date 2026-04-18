import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 inline-block"
        >
          <span className="text-sm md:text-base text-neon-blue uppercase tracking-[0.3em] font-space font-bold border border-neon-blue/30 bg-neon-blue/10 px-4 py-2 rounded-full box-glow-blue">
            Initiating Sequence
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-space font-extrabold mb-6"
        >
          Ali Zafir{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-glow-blue whitespace-nowrap inline-block">
            Hussain
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-3xl text-gray-300 font-light mb-12 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <span>Exploring Code Beyond Gravity</span>
          <motion.span
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block text-3xl md:text-4xl"
          >
            🚀
          </motion.span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#projects" className="group relative px-8 py-4 font-space font-bold text-white bg-space-800 border box-glow-blue border-neon-blue rounded-full overflow-hidden transition-all hover:scale-105">
            <span className="relative z-10">Launch Projects</span>
            <div className="absolute inset-0 bg-neon-blue/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a href="#contact" className="px-8 py-4 font-space font-bold text-gray-300 border border-gray-600 rounded-full hover:border-white hover:text-white transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Contact Mission
          </a>
        </motion.div>
      </div>

      {/* Floating abstract decorative elements */}
      <motion.div
        animate={{
          y: [0, -80, 0],
          x: [0, 30, 0],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 md:left-32 w-32 md:w-64 aspect-square border border-neon-purple/20 rounded-full blur-[2px]"
      />
      <motion.div
        animate={{
          y: [0, 60, 0],
          x: [0, -40, 0],
          rotate: [0, -45, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 md:right-32 w-48 md:w-80 aspect-square border border-neon-blue/10 rounded-full blur-[3px]"
      />
    </section>
  );
};
