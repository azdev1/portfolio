import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'ProjectFlow',
    subtitle: 'SaaS Project Management Tool (Jira Clone)',
    description: '',
    bullets: [
      'Developed a scalable full-stack project management platform with Kanban boards and sprint workflows.',
      'Implemented authentication and role-based access control using JWT.',
      'Designed REST APIs for project, task, and user management.',
      'Integrated real-time updates using Socket.io for collaboration.'
    ],
    tech: ['React', 'Node.js', 'Socket.io', 'JWT', 'MongoDB'],
    github: '#',
    link: '#',
    color: 'from-neon-blue to-neon-purple',
    glow: 'rgba(0, 240, 255, 0.3)',
    shadowClass: 'hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]',
    delay: 0,
  },
  {
    title: 'Hotel OS',
    subtitle: 'Smart Hotel Management System',
    description: 'A comprehensive management system built to operate futuristic hotels. Handles bookings, smart-room controls, and guest planetary logs.',
    bullets: [],
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    github: '#',
    link: 'https://hotel-os-rpvw.vercel.app/',
    color: 'from-neon-purple to-neon-pink',
    glow: 'rgba(176, 38, 255, 0.3)',
    shadowClass: 'hover:shadow-[0_0_30px_rgba(176,38,255,0.3)]',
    delay: 0.2,
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="relative min-h-[90vh] py-20 flex flex-col items-center justify-center overflow-hidden">
      <div className="z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-5xl font-space font-bold mb-16 inline-flex items-center gap-4 text-glow-blue border-b border-white/5 pb-4 md:w-auto"
        >
          <span className="text-neon-pink font-light text-glow-purple">03.</span> Space Stations
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: project.delay }}
              whileHover={{ scale: 1.02, rotateY: 3, rotateX: 2 }}
              style={{ perspective: 1000 }}
              className="relative group"
            >
              <div className={`glass-panel p-8 md:p-12 rounded-[2rem] relative overflow-hidden transition-all duration-500 border border-white/10 hover:border-white/30 h-full ${project.shadowClass}`}>
                <div className={`absolute top-0 right-0 w-full h-1 bg-gradient-to-r ${project.color}`} />
                
                <div 
                  className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[50px] transition-colors opacity-30 group-hover:opacity-60" 
                  style={{ backgroundColor: project.glow }}
                />

                <div className="relative z-10">
                  <h3 className="text-3xl font-space font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all delay-100">
                    {project.title}
                  </h3>
                  <h4 className="text-neon-blue mb-6 font-medium tracking-wide">
                    {project.subtitle}
                  </h4>
                  
                  {project.description && (
                    <p className="text-gray-400 mb-8 leading-relaxed font-light text-lg">
                      {project.description}
                    </p>
                  )}

                  {project.bullets.length > 0 && (
                    <ul className="text-gray-400 mb-8 leading-relaxed font-light text-base list-disc list-inside space-y-2">
                      {project.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-3 mb-10 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="px-4 py-1.5 bg-black/40 border border-white/5 rounded-full text-sm font-space text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a href={project.github} className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all" aria-label="GitHub">
                      <FaGithub size={22} />
                    </a>
                    <a href={project.link} className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all" aria-label="External Link">
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
