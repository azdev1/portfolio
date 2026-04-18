import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Orbital Graphic */}
        <div className="relative flex items-center justify-center w-full aspect-square md:order-1 order-2">
          {/* Central Profile/Planet */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-neon-blue bg-[#0A0C1F] shadow-[0_0_40px_rgba(0,240,255,0.2)] flex items-center justify-center z-10 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/10 to-transparent" />
            <span className="text-6xl md:text-8xl relative z-10 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-pulse-glow">👨‍🚀</span>
          </motion.div>

          {/* Orbit Rings */}
          <div className="absolute w-[120%] h-[120%] rounded-full border border-white/10 xl:block" />
          <div className="absolute w-[160%] h-[160%] rounded-full border border-white/5 xl:block hidden" />
          
          {/* Orbiting Elements */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[120%] h-[120%] rounded-full"
          >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-neon-purple rounded-full box-glow-purple shadow-[0_0_15px_#B026FF]" />
          </motion.div>
          
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[160%] h-[160%] rounded-full hidden xl:block"
          >
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-neon-blue rounded-full box-glow-blue shadow-[0_0_15px_#00F0FF]" />
          </motion.div>
        </div>

        {/* Info */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-left md:order-2 order-1"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 flex items-center gap-4">
            <span className="text-neon-purple font-light text-glow-purple">01.</span> 
            <span className="text-glow-blue">About Me</span>
          </h2>
          <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-neon-blue/10 rounded-full blur-[40px] translate-y-1/2 -translate-x-1/2" />
            
            <p className="text-lg md:text-xl text-gray-300 font-light mb-6 leading-relaxed relative z-10">
              I am a <strong className="text-white font-medium">B.Tech Computer Science student</strong> and a passionate Full Stack Developer. I constantly explore the boundaries of code and design to build futuristic applications.
            </p>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed relative z-10">
              My mission is to create visually stunning and highly optimized software that defies gravity—making user interactions feel seamless, dynamic, and out of this world.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 relative z-10">
              <div className="border border-white/5 bg-black/20 p-4 rounded-xl text-center group-hover:bg-black/40 transition-colors">
                <p className="text-neon-blue font-space font-bold text-2xl">B.Tech</p>
                <p className="text-sm text-gray-400 mt-1">Computer Science</p>
              </div>
              <div className="border border-white/5 bg-black/20 p-4 rounded-xl text-center group-hover:bg-black/40 transition-colors">
                <p className="text-neon-purple font-space font-bold text-2xl">Developer</p>
                <p className="text-sm text-gray-400 mt-1">Full Stack</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
