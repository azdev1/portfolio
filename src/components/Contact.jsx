import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { FaLinkedin, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_ab2vcur',
      'template_t8ivv6e',
      form.current,
      'a6Hz7_1AwUa_pCx1N'
    ).then((result) => {
      setStatus('success');
      form.current.reset();
      setTimeout(() => setStatus(''), 5000);
    }, (error) => {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    });
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 flex flex-col items-center justify-center overflow-hidden">
      <div className="z-10 max-w-5xl mx-auto px-6 w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-5xl font-space font-bold mb-16 text-center text-glow-blue"
        >
          <span className="text-neon-blue font-light">04.</span> Mission Control
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-left"
          >
            <h3 className="text-3xl font-space font-bold mb-6 text-white text-glow-blue">Establish Connection</h3>
            <p className="text-gray-400 font-light mb-8 text-lg leading-relaxed">
              My comms channel is always open for new opportunities to build stellar web applications. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6 mb-12">
              <a href="https://www.linkedin.com/in/ali-zafir-hussain-80a685343" target="_blank" rel="noreferrer" className="p-4 border border-white/10 glass-panel rounded-xl hover:border-blue-500 hover:bg-blue-500/10 transition-all group hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-2">
                <FaLinkedin size={26} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
              </a>
              <a href="https://leetcode.com/u/AliZafir/" target="_blank" rel="noreferrer" className="p-4 border border-white/10 glass-panel rounded-xl hover:border-orange-500 hover:bg-orange-500/10 transition-all group hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:-translate-y-2">
                <SiLeetcode size={26} className="text-gray-300 group-hover:text-orange-500 transition-colors" />
              </a>
              <a href="https://codolio.com/profile/zaifaly01" target="_blank" rel="noreferrer" className="p-4 border border-white/10 glass-panel rounded-xl hover:border-neon-purple hover:bg-neon-purple/10 transition-all group hover:shadow-[0_0_20px_rgba(176,38,255,0.4)] hover:-translate-y-2">
                <FaCode size={26} className="text-gray-300 group-hover:text-neon-purple transition-colors" />
              </a>
              <a href="mailto:zaifaly01@gmail.com" className="p-4 border border-white/10 glass-panel rounded-xl hover:border-neon-pink hover:bg-neon-pink/10 transition-all group hover:shadow-[0_0_20px_rgba(255,0,127,0.4)] hover:-translate-y-2">
                <Mail size={26} className="text-gray-300 group-hover:text-neon-pink transition-colors" />
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass-panel p-6 md:p-8 rounded-[2rem] border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 transition-opacity group-hover:opacity-100 opacity-50" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-purple/10 rounded-full blur-[40px] translate-y-1/2 -translate-x-1/2 transition-opacity group-hover:opacity-100 opacity-50" />

            <div className="mb-6 relative z-10">
              <label htmlFor="name" className="block text-sm font-space text-neon-blue mb-2 uppercase tracking-widest font-medium">Operator Name</label>
              <input type="text" id="name" name="user_name" required className="w-full bg-space-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:bg-space-900 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all font-light" placeholder="Enter your Name" />
            </div>

            <div className="mb-6 relative z-10">
              <label htmlFor="email" className="block text-sm font-space text-neon-purple mb-2 uppercase tracking-widest font-medium">Operator Email</label>
              <input type="email" id="email" name="user_email" required className="w-full bg-space-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:bg-space-900 focus:shadow-[0_0_15px_rgba(176,38,255,0.3)] transition-all font-light" placeholder="abc@example.com" />
            </div>

            <div className="mb-8 relative z-10">
              <label htmlFor="message" className="block text-sm font-space text-neon-pink mb-2 uppercase tracking-widest font-medium">Message</label>
              <textarea id="message" name="message" required rows="4" className="w-full bg-space-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-pink focus:bg-space-900 focus:shadow-[0_0_15px_rgba(255,0,127,0.3)] transition-all font-light resize-none flex-grow" placeholder="Your message here..." />
            </div>

            <button disabled={status === 'sending'} type="submit" className="group/btn relative w-full flex items-center justify-center gap-3 px-8 py-4 font-space font-bold text-white bg-space-800 border box-glow-blue border-neon-blue rounded-xl overflow-hidden transition-all hover:scale-[1.02] disabled:opacity-75 disabled:hover:scale-100">
              <span className="relative z-10">
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Transmission Sent!' : status === 'error' ? 'Transmission Failed' : 'Send Transmission '}
              </span>

              {status === 'sending' ? (
                <Loader2 size={18} className="relative z-10 animate-spin" />
              ) : status === 'success' ? (
                <CheckCircle size={18} className="relative z-10 text-green-400" />
              ) : status === 'error' ? (
                <XCircle size={18} className="relative z-10 text-red-400" />
              ) : (
                <Send size={18} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              )}

              <div className="absolute inset-0 bg-neon-blue/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};