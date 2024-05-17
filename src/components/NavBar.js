import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import styles from '../styles/navbar.module.css';
import { useRouter } from 'next/router';
import { LinkedinIcon, GithubIcon , LeetcodeIcon, EmailIcon} from './Icons';
import { motion } from 'framer-motion';


const CustomLink = ({href, title, className=" "}) => {
  const router = useRouter();
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={` 
        h-[1.5px] inline-block bg-dark absolute left-0 top-7 
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
      `}>&nbsp;</span>

    </Link>
  )
}

const NavBar = () => {
  return (

    <header
    className={`w-full px-32 py-8 font-medium flex items-center justify-between`}
    >
    
        <nav className={styles.navLinks}>

            <CustomLink href="/" title="Home" className='mr-4' />
            <CustomLink href="/about" title="About" className='mx-4 '/>
            <CustomLink href="/projects" title="Projects" className='mx-4'/>
            <CustomLink href="/articles" title="Articles" className='ml-4'/>

        </nav>

        <div className='absolut left-[-50%] top-2 translate-x-[-100%]'>
        <Logo />
        </div>

        <nav className={styles.navLinks}>

            <motion.a href="https://www.linkedin.com/in/sergey-morozov-26043a240/" target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-6 mr-3'
            >
            <LinkedinIcon />
            </motion.a>

            <motion.a href="https://github.com/SergeyM96" target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-6 mx-3'
            >
            <GithubIcon />
            </motion.a>


            <motion.a href="https://leetcode.com/u/SerjM/" target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-6 mx-3'
            >
            <LeetcodeIcon />
            </motion.a>

            <motion.a href="mailto:globaldevsm@gmail.com" target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-6 ml-3'
            >
            <EmailIcon />
            </motion.a>

        </nav>

        
    
    </header>
  )
}

export default NavBar