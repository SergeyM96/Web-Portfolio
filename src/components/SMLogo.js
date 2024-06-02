import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const MotionLink = motion.a;

const SMLogo = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MotionLink
      href="/"
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-dark text-light text-2xl flex items-center justify-center rounded-full font-bold z-50"
      whileHover={{
        backgroundColor: [
          "#121212",
          "rgba(131,58,180,1)",
          "rgba(253,29,29,1)",
          "rgba(252,176,69,1)",
          "rgba(131,58,180,1)",
          "#121212"
        ],
        scale: 1.5,
        x: 0, // Ensure no horizontal translation on hover
        transition: { duration: 1.5, repeat: Infinity }
      }}
      style={{ opacity: isHovered ? 1 : Math.max(0.7, 1 - scrollY / 500) }} // Adjust opacity based on hover state and scroll position
      initial={{ x: 0, y: 0 }} // Set initial position to prevent shifting on first render
      onClick={handleScrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      SM
    </MotionLink>
  );
};

export default SMLogo;
