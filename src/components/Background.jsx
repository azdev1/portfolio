import React from 'react';
import { motion } from 'framer-motion';

export const Background = () => {
  // Generate random stars
  const stars = Array.from({ length: 70 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 10,
  }));

  return (
    <div className="fixed inset-0 -z-10 bg-space-900 overflow-hidden">
      {/* Deep Space Gradient Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-space-800 via-space-900 to-black opacity-80" />
      
      {/* Nebula Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] md:w-[40%] aspect-square bg-neon-purple/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] md:w-[40%] aspect-square bg-neon-blue/20 rounded-full blur-[120px]" />

      {/* Floating Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.left}%`,
            top: `${star.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
