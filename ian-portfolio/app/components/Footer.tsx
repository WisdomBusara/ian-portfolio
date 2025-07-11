'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-6 text-center text-gray-500">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        &copy; {new Date().getFullYear()} Ian Mwaura Kimani. All rights reserved.
      </motion.p>
    </footer>
  );
}