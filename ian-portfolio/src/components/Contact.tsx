'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 py-20 px-4 md:px-20">
      <motion.h2 className="text-3xl font-bold mb-8 text-teal-400 text-center" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Contact Me</motion.h2>
      <motion.form name="contact" method="POST" data-netlify="true" className="space-y-4 max-w-lg mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="Name" required className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600" />
        <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600" />
        <textarea name="message" placeholder="Message" required className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"></textarea>
        <button type="submit" className="bg-teal-500 text-white px-6 py-3 rounded hover:bg-teal-600 transition w-full">Send</button>
      </motion.form>
    </section>
  );
}