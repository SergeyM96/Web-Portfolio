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
    <div className="fixed top-0 left-0 w-full flex justify-center z-50 pointer-events-none">
      <MotionLink
        href="/"
        className="mt-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-dark text-light text-lg sm:text-xl md:text-2xl flex items-center justify-center rounded-full font-bold pointer-events-auto"
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
          transition: { duration: 1.5, repeat: Infinity }
        }}
        style={{ 
          opacity: isHovered ? 1 : Math.max(0.7, 1 - scrollY / 500),
        }}
        onClick={handleScrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        SM
      </MotionLink>
    </div>
  );
};

export default SMLogo;