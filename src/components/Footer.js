import React from 'react';
import Layout from './Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full bg-[#EDF9FE] text-[#2C3E50] font-sans mt-4 py-2 z-20 relative">
      <Layout className="flex flex-col sm:flex-row items-center justify-between px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center sm:text-left mb-4 sm:mb-0 sm:absolute sm:bottom-2 sm:left-8"
        >
          <span className="text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center sm:items-start text-center sm:text-left mb-4 sm:mb-0 sm:absolute sm:bottom-2 sm:right-1/2 sm:transform sm:translate-x-1/2"
        >
          <Link
            href="/"
            className="text-xl sm:text-2xl md:text-3xl font-bold hover:text-[#ee8e68] transition-colors duration-300 mb-1 sm:mb-2"
          >
            Eudaimon
          </Link>
          <span className="text-xs sm:text-sm">Web &amp; Software Development</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center text-center sm:text-right sm:absolute sm:bottom-2 sm:right-8"
        >
          <span className="text-xs sm:text-sm mr-1 sm:mr-2">Designed &amp; Developed</span>
          <span className="text-yellow-500 text-xl sm:text-2xl mx-1 sm:mx-2">&#9670;</span>
          <span className="text-xs sm:text-sm">by S. Morozov</span>
        </motion.div>
      </Layout>
    </footer>
  );
};

export default Footer;
