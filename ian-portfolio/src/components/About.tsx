'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-gray-800 py-20 px-4 md:px-20 text-center">
      <motion.img src="/profile.jpg" alt="Ian Mwaura Kimani" className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-teal-400" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} />
      <motion.h2 className="text-3xl font-bold mb-4 text-teal-400" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>About Me</motion.h2>
      <motion.p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>Results-driven Systems Analyst with expertise in Finacle Core Banking, Treasury, AML, and SWIFT systems, passionate about cloud solutions and automation.</motion.p>
    </section>
  );
}