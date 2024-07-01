import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import AnimatedLogo from '@/components/AnimatedProfilePic';
import { motion, useAnimation } from 'framer-motion';
import SkillIcon from '@/components/SkillIcon';
import {
  ReactIcon, NodeIcon, NextIcon, TailwindIcon,
  HtmlIcon, CssIcon, JsIcon, BootstrapIcon, JavaIcon,
  SceneBuilderIcon, AndroidIcon, PythonIcon, SeleniumIcon,
  AWSIcon, DockerIcon, JenkinsIcon, LinkArrow
} from '@/components/Icons';
import Link from 'next/link';
import { CustomLink } from '@/components/NavBar';
import HireMe from '@/components/HireMe';
import Image from 'next/image';
import BackgroundElements from '@/components/BackgroundElements';
import { LampComp } from '@/components/LampComponent';
import { BentoGridCards } from '@/components/BentoGridCards';

export default function Home() {
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);
  const [developerTextAnimationComplete, setDeveloperTextAnimationComplete] = useState(false);
  const [showHireMe, setShowHireMe] = useState(false);
  const [showGif, setShowGif] = useState(true);
  const skillIconsAnimation = useAnimation();
  const [showLinks, setShowLinks] = useState(false);

  const handleTitleAnimationComplete = () => {
    setTitleAnimationComplete(true);
  };

  const handleDeveloperTextAnimationComplete = () => {
    setDeveloperTextAnimationComplete(true);
  };
  
  useEffect(() => {
    if (developerTextAnimationComplete) {
      skillIconsAnimation.start({
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.2,
          staggerChildren: 0.1,
        },
      }).then(() => setShowLinks(true));
    }
  }, [developerTextAnimationComplete, skillIconsAnimation]);

  const skills = [
    { icon: <ReactIcon /> },
    { icon: <NodeIcon /> },
    { icon: <NextIcon /> },
    { icon: <JsIcon /> },
    { icon: <HtmlIcon /> },
    { icon: <CssIcon /> },
    { icon: <BootstrapIcon /> },
    { icon: <TailwindIcon /> },
    { icon: <JavaIcon /> },
    { icon: <SceneBuilderIcon /> },
    { icon: <AndroidIcon /> },
    { icon: <PythonIcon /> },
    { icon: <SeleniumIcon /> },
    { icon: <AWSIcon /> },
    { icon: <DockerIcon /> },
    { icon: <JenkinsIcon /> }
  ];

  useEffect(() => {
    if (showLinks) {
      setTimeout(() => setShowHireMe(true), 500);
    }
  }, [showLinks]);

  useEffect(() => {
    if (showHireMe) {
      const timer = setTimeout(() => {
        setShowGif(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showHireMe]);
 
  return (
    <>
      <Head>
        <title>Sergey Morozov - Web & Software Developer</title>
        <meta name="description" content="Sergey Morozov, a web and software developer specializing in modern web technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex flex-col items-center w-full min-h-screen"> 
        <Layout className="pt-8 sm:pt-12 md:pt-16 lg:pt-24 px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="relative w-full">
            <BackgroundElements className="absolute top-0 left-0 z-0" /> 
            <div className="flex flex-col md:flex-row items-center justify-between w-full relative z-10">
              <AnimatedLogo isAnimationComplete={titleAnimationComplete} className="w-full md:w-1/2 mb-4 md:mb-0 md:-mt-16 lg:-mt-24" />
              <div className="w-full md:w-1/2 flex flex-col items-start self-center md:-mt-40 lg:-mt-48"> 
                <AnimatedText
                  text="Welcome!"
                  textSize="text-4xl sm:text-5xl md:text-7xl lg:text-9xl"
                  textColor="text-[#06B6D4]"
                  className="!text-center font-bold transition-transform duration-500 ease-in-out transform hover:scale-105"
                  style={{
                    textShadow: '0 0 10px rgba(6, 182, 212, 0.8), 0 0 20px rgba(6, 182, 212, 0.6), 0 0 30px rgba(6, 182, 212, 0.4)',
                  }}
                  onAnimationComplete={handleTitleAnimationComplete}
                />
                <AnimatedText
                  text="Sergey Morozov - Web & Software Developer."
                  textSize="text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
                  textColor="text-[#06B6D4]"
                  className="!text-center font-bold transition-transform duration-500 ease-in-out transform hover:scale-105 mt-4"
                  style={{
                    textShadow: '0 0 10px rgba(6, 182, 212, 0.8), 0 0 20px rgba(6, 182, 212, 0.6), 0 0 30px rgba(6, 182, 212, 0.4)',
                  }}
                  onAnimationComplete={handleDeveloperTextAnimationComplete}
                />
                <div className="w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mt-3 sm:mt-4 md:mt-5 relative overflow-hidden">
                  <span className="absolute inset-0 bg-white opacity-0 animate-pulse"></span>
                </div>
                <div className="flex flex-col md:flex-row items-start mt-8 md:mt-16 space-y-8 md:space-y-0 md:space-x-8 w-full">
                <motion.div
                    className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full md:w-2/3" 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={skillIconsAnimation}
                  >
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={skillIconsAnimation}
                      >
                        <SkillIcon icon={skill.icon} />
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={showLinks ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-start space-y-8 md:space-y-24 w-full md:w-1/3"
                  >
                    <CustomLink
                      href="/projects"
                      title="Projects"
                      className="text-xl md:text-2xl font-bold text-[#002B5B] hover:text-[#ee8e68]"
                    >
                      <span>Projects</span>
                    </CustomLink>
                    <Link
                      href="/Sergey Morozov CV.pdf"
                      target="_blank"
                      className='flex items-center bg-dark text-light p-2.5 px-6
                        rounded-lg text-base md:text-lg font-semibold hover:bg-light hover:text-dark border-4 border-solid border-transparent
                        hover:border-dark'
                      onClick={() => setShowHireMe(true)}
                    >
                      Resume <LinkArrow className={"w-4 md:w-6 ml-1"} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Layout>

        <div className='hidden 2xl:block absolute right-4 bottom-4 2xl:right-8 2xl:bottom-8 w-64 overflow-hidden rounded-lg shadow-lg z-50'>
          {showGif ? (
            <motion.div
              className="relative flex flex-col items-center bg-white"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 6, delay: 2 }}
            >
              <span className="text-xl font-bold mb-2 text-[#002B5B]">CODING . . .</span>
              <Image
                src="/coding-person.gif"
                alt="Coding"
                width={300}
                height={200}
                layout="responsive"
              />
            </motion.div>
          ) : (
            <motion.div
              className="relative flex flex-col items-center bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 4, delay: 0 }}
            >
              <span className="text-xl font-bold mb-2 text-[#ee8e68]">Let&apos;s GO!</span>
              <Image
                src="/rocket.png"
                alt="Rocket"
                width={300}
                height={200}
                layout="responsive"
              />
            </motion.div>
          )}
        </div>
      </main>

      <section className="w-full flex flex-col items-center pt-16 pb-16">
        <LampComp />
      </section>

      <section className="w-full flex flex-col pt-16 pb-16 relative px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="w-full" style={{ height: 'auto' }}>
          <BentoGridCards />
        </div>
      </section>

      {showHireMe && <HireMe />}
    </>
  );
}

