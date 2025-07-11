'use client';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = ['Finacle Core', 'Treasury', 'AML', 'SWIFT Systems', 'SQL', 'NoSQL', 'C#', 'Java', 'REST APIs', 'JasperReports', 'Microsoft Azure', 'VMware', 'Hyper-V', 'React.js', 'Vue.js'];

  return (
    <section id="skills" className="bg-gray-800 py-20 px-4 md:px-20">
      <motion.h2 className="text-3xl font-bold mb-8 text-teal-400 text-center" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Skills</motion.h2>
      <motion.div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
        {skills.map((skill) => (
          <span key={skill} className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-sm hover:bg-teal-500 hover:text-white transition">{skill}</span>
        ))}
      </motion.div>
    </section>
  );
}