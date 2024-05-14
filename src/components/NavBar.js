import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import styles from '../styles/navbar.module.css';
import { useRouter } from 'next/router';

const CustomLink = ({href, title, className=" "}) => {
  const router = useRouter();
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={` 
        h-[2px] inline-block bg-dark absolute left-0 top-7 
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

        <div className='absolut left-[-50%] top-2 translate-x-[-50%]'>
        <Logo />
        </div>

        <nav className={styles.navLinks}>

            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>

        </nav>

        
    
    </header>
  )
}

export default NavBar