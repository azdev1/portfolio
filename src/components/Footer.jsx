import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="relative w-full py-10 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
           animate={{ opacity: [0.1, 0.3, 0.1] }}
           transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
           className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_1px)]"
           style={{ backgroundSize: '10px 10px' }}
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
        <p className="font-space text-gray-400 text-sm mb-4">Designed & Built by Ali Zafir Hussain</p>
        <div className="inline-block px-6 py-2 border border-neon-blue/30 rounded-full bg-neon-blue/5 box-glow-blue">
            <p className="font-space text-neon-blue uppercase tracking-[0.3em] text-xs animate-[pulse-glow_3s_ease-in-out_infinite]">
            End of Transmission 
            </p>
        </div>
      </div>
    </footer>
  );
};
