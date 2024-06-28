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
  const [showGif, setShowGif] = useState(true); // State to manage the GIF visibility
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
      // Wait for a short delay before showing the HireMe component
      setTimeout(() => setShowHireMe(true), 500); // Adjust the delay as needed
    }
  }, [showLinks]);

  useEffect(() => {
    if (showHireMe) {
      // Set a timeout to switch from GIF to image after the HireMe animation
      const timer = setTimeout(() => {
        setShowGif(false);
      }, 2000); // Adjust the delay as needed

      return () => clearTimeout(timer);
    }
  }, [showHireMe]);

  return (
    <>
      <Head>
        <title>Sergey Morozov - Web & Software Developer</title>
        <meta name="description" content="Sergey Morozov, a web and software developer specializing in modern web technologies." />
      </Head>
      <main className="flex flex-col items-center w-full min-h-screen"> 
        <Layout className="pt-0">
          <div className="relative w-full"> {/* Container for absolute positioning */}
            {/* BackgroundElements positioned at the top */}
            <BackgroundElements className="absolute top-0 left-0 z-0" /> 
            <div className="flex items-center justify-between w-full relative z-10">
              <AnimatedLogo isAnimationComplete={titleAnimationComplete} />
              <div className="w-1/2 flex flex-col items-start self-center" style={{ marginTop: '1rem', marginRight: '-5rem' }}>
                <AnimatedText
                  text="Welcome!"
                  textSize="text-9xl"
                  textColor="text-[#06B6D4]"
                  className="!text-center font-bold transition-transform duration-500 ease-in-out transform hover:scale-105"
                  style={{
                    textShadow: '0 0 10px rgba(6, 182, 212, 0.8), 0 0 20px rgba(6, 182, 212, 0.6), 0 0 30px rgba(6, 182, 212, 0.4)',
                  }}
                  onAnimationComplete={handleTitleAnimationComplete}
                />
                <AnimatedText
                  text="Sergey Morozov - Web & Software Developer."
                  textSize="text-6xl"
                  textColor="text-[#06B6D4]"
                  className="!text-center font-bold transition-transform duration-500 ease-in-out transform hover:scale-105"
                  style={{
                    textShadow: '0 0 10px rgba(6, 182, 212, 0.8), 0 0 20px rgba(6, 182, 212, 0.6), 0 0 30px rgba(6, 182, 212, 0.4)',
                  }}
                  onAnimationComplete={handleDeveloperTextAnimationComplete}
                />
                {/* Animated underline */}
                <div className="w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mt-4 relative overflow-hidden">
                  <span className="absolute inset-0 bg-white opacity-0 animate-pulse"></span>
                </div>
                <div className="flex items-start mt-16 space-x-8">
                  <motion.div
                    className="grid grid-cols-4 gap-4"
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
                    className="flex flex-col items-start mt-20 space-y-24"
                    style={{ marginLeft: '8rem' }}
                  >
                    <CustomLink
                      href="/projects"
                      title="Projects"
                      className="text-2xl font-bold text-[#002B5B] hover:text-[#ee8e68]"
                    >
                      <span>Projects</span>
                    </CustomLink>
                    <Link
                      href="/Sergey Morozov CV.pdf"
                      target="_blank"
                      className='flex items-center bg-dark text-light p-2.5 px-6
                        rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-4 border-solid border-transparent
                        hover:border-dark'
                      onClick={() => setShowHireMe(true)}
                    >
                      Resume <LinkArrow className={"w-6 ml-1"} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Layout>

        <div className='absolute right-8 bottom-8 inline-block w-64 overflow-hidden rounded-lg shadow-lg'>
          {showGif ? (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              style={{ color: '#002B5B' }}
              transition={{ duration: 8 }} // Adjust duration for fade out effect
              className="relative flex flex-col items-center"
            >
              <span className="text-xl font-bold mb-2">CODING . . .</span>
              <Image
                src="/coding-person.gif"
                alt="Eudaimon"
                width={300}
                height={200}
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ color: '#ee8e68' }}
              transition={{ duration: 6 }} // Adjust duration for fade in effect
              className="relative flex flex-col items-center"
            >
              <span className="text-xl font-bold mb-2">Let&apos;s GO!</span>
              <Image
                src="/rocket.png" // Replace with your image path
                alt="Replacement Image"
                width={300}
                height={200}
              />
            </motion.div>
          )}
        </div>
      </main>

      <section className="w-full flex flex-col items-center pt-16 pb-16">
        <LampComp />
      </section>

      <section className="w-full flex flex-col pt-16 pb-16 relative" style={{ marginLeft: '70rem', maxWidth: '1200px', zIndex: 50 }}>
        <div className="w-full" style={{ height: 'auto' }}>
          <BentoGridCards />
        </div>
      </section>

      {showHireMe && <HireMe />}
    </>
  );
}

