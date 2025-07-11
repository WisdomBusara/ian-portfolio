'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white px-4 pt-20">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-5xl md:text-7xl font-bold mb-4">Ian Mwaura Kimani</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} className="text-teal-400 text-xl mb-6">Systems Analyst | Core Banking & SWIFT | Cloud & Automation</motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} className="space-x-4">
        <a href="/Ian_Mwaura_CV.pdf" download className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition">Download CV</a>
        <a href="#contact" className="bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition">Contact Me</a>
      </motion.div>
    </section>
  );
}