'use client';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="fixed top-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur z-50 px-8 py-4 flex justify-between items-center">
      <h1 className="text-white font-bold text-lg">Ian Mwaura Kimani</h1>
      <div className="space-x-6">
        {['about', 'projects', 'skills', 'contact'].map((item) => (
          <a key={item} href={`#${item}`} className="text-gray-300 hover:text-teal-400 capitalize">{item}</a>
        ))}
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition">{theme === 'dark' ? 'Light' : 'Dark'} Mode</button>
      </div>
    </motion.nav>
  );
}