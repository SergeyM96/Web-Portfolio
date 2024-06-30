import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './SMLogo';
import styles from '../styles/navbar.module.css';
import { useRouter } from 'next/router';
import { LinkedinIcon, GithubIcon, LeetcodeIcon, EmailIcon } from './Icons';
import { motion } from 'framer-motion';

export const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const showArrow = href === '/projects';
  return (
    <Link href={href} className={`${className} relative group`}>
      <span className="flex items-center">
        {title}
        {showArrow && <span className="ml-2 transform transition-transform group-hover:translate-x-2">&rarr;</span>}
      </span>
      <span className={` 
        h-[1.5px] inline-block bg-dark absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
      `}>&nbsp;</span>
    </Link>
  );
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`w-full px-4 sm:px-8 md:px-16 lg:px-32 py-4 md:py-6 lg:py-8 font-medium flex items-center justify-between relative z-50 bg-white`}>
      <Logo />

      <button 
        className="md:hidden" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 ${styles.navLinks}`}>
        <CustomLink href="/" title="Home" className='mr-0 md:mr-4 mb-2 md:mb-0' />
        <CustomLink href="/aboutUs" title="About" className='mr-0 md:mr-4 mb-2 md:mb-0' />
      </nav>

      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex ${styles.navLinks}`}>
        <motion.a
          href="https://www.linkedin.com/in/sergey-morozov-26043a240/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mr-3'
        >
          <LinkedinIcon />
        </motion.a>

        <motion.a
          href="https://github.com/SergeyM96"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-3'
        >
          <GithubIcon />
        </motion.a>

        <motion.a
          href="https://leetcode.com/u/SerjM/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-3'
        >
          <LeetcodeIcon />
        </motion.a>

        <motion.a
          href="mailto:globaldevsm@gmail.com"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 ml-3'
        >
          <EmailIcon />
        </motion.a>
      </nav>
    </header>
  );
};

export default NavBar;