import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, FileJson, Atom, Server, Database, CloudSnow, GitBranch, Code } from 'lucide-react';

const skills = [
  { name: 'Java', icon: <Coffee size={40} />, color: 'text-orange-500', shadow: 'shadow-[0_0_20px_rgba(249,115,22,0.4)]', delay: 0 },
  { name: 'JavaScript', icon: <FileJson size={40} />, color: 'text-yellow-400', shadow: 'shadow-[0_0_20px_rgba(250,204,21,0.4)]', delay: 0.2 },
  { name: 'React', icon: <Atom size={40} />, color: 'text-neon-blue', shadow: 'shadow-[0_0_20px_rgba(0,240,255,0.4)]', delay: 0.4 },
  { name: 'Node.js', icon: <Server size={40} />, color: 'text-green-500', shadow: 'shadow-[0_0_20px_rgba(34,197,94,0.4)]', delay: 0.1 },
  { name: 'MongoDB', icon: <Database size={40} />, color: 'text-green-600', shadow: 'shadow-[0_0_20px_rgba(22,163,74,0.4)]', delay: 0.5 },
  { name: 'Firebase', icon: <CloudSnow size={40} />, color: 'text-orange-400', shadow: 'shadow-[0_0_20px_rgba(251,146,60,0.4)]', delay: 0.3 },
  { name: 'Git', icon: <GitBranch size={40} />, color: 'text-red-500', shadow: 'shadow-[0_0_20px_rgba(239,68,68,0.4)]', delay: 0.6 },
  { name: 'GitHub', icon: <Code size={40} />, color: 'text-white', shadow: 'shadow-[0_0_20px_rgba(255,255,255,0.4)]', delay: 0.2 },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative min-h-[80vh] py-20 flex flex-col items-center justify-center overflow-hidden">
      <div className="z-10 max-w-5xl mx-auto px-6 w-full text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-5xl font-space font-bold mb-20 inline-flex items-center gap-4 text-glow-blue"
        >
          <span className="text-neon-blue font-light">02.</span> Tech Stack
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: skill.delay * 0.5 }}
              className="group"
            >
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 4 + skill.delay, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="flex flex-col items-center gap-4 cursor-pointer"
              >
                <div 
                  className={`w-28 h-28 md:w-36 md:h-36 rounded-full glass-panel flex items-center justify-center ${skill.color} ${skill.shadow} transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/50 bg-space-800/80 backdrop-blur-md relative`}
                >
                  <div className="absolute inset-0 rounded-full bg-current opacity-10 blur-md group-hover:opacity-30 transition-opacity duration-500" />
                  {skill.icon}
                </div>
                <span className="font-space font-medium tracking-wide text-gray-400 group-hover:text-white transition-colors group-hover:text-glow-blue">
                  {skill.name}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
