import React from 'react';
import Layout from './Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full bg-[#EDF9FE] text-[#2C3E50] font-sans">
      <Layout className="py-10 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-0 text-center md:text-left"
        >
          <span className="text-sm">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <Link
            href="/"
            className="text-3xl font-bold hover:text-[#ee8e68] transition-colors duration-300 mb-2"
          >
            Eudaimon
          </Link>
          <span className="text-sm">Web &amp; Software Development</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center text-center md:text-right"
        >
          <span className="text-sm mr-2">Designed &amp; Developed</span>
          <span className="text-yellow-500 text-2xl mx-2">&#9670;</span>
          <span className="text-sm">by S. Morozov</span>
        </motion.div>
      </Layout>
    </footer>
  );
};

export default Footer;
