import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const AnimatedLogo = ({ isAnimationComplete }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isAnimationComplete) {
      controls.start({
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
          duration: 4,
          ease: 'easeInOut',
        },
      });
    }
  }, [isAnimationComplete, controls]);

  return (
    <motion.div
      className="w-1/2 -mt-20 relative"
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={controls}
    >
      <Image
        src="/images/profile/Portfolio.png"
        alt="serjo"
        width={500}
        height={500}
        className="w-11/12 h-auto rounded-3xl shadow-2xl mt-32"
        style={{
          mixBlendMode: 'multiply',
          filter: 'drop-shadow(0 0 1rem rgba(0, 0, 0, 0.3))',
        }}
      />
    </motion.div>
  );
};

export default AnimatedLogo;