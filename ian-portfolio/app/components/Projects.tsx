'use client';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 py-20 px-4 md:px-20">
      <motion.h2 className="text-3xl font-bold mb-8 text-teal-400 text-center" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Projects</motion.h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[{ title: 'Finacle Script Automation', desc: 'Automated EOD processes, reduced manual interventions, and prevented income leakage.' }, { title: 'SWIFT Regional Support', desc: 'Managed regional SWIFT infrastructure ensuring secure messaging for multiple banks.' }, { title: 'Hybrid IT Infrastructure Upgrade', desc: 'Migrated on-premise systems to hybrid cloud, improving scalability and business continuity.' }, { title: 'ERP Implementation & Integration', desc: 'Deployed ERP systems integrating with existing IT infrastructure for operational efficiency.' }].map((proj, index) => (
          <motion.div key={proj.title} className="bg-gray-700 p-6 rounded-lg" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
            <h3 className="text-xl font-semibold mb-2 text-white">{proj.title}</h3>
            <p className="text-gray-300">{proj.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}