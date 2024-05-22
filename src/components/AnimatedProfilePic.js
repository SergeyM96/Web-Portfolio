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
      className="w-1/2 -mt-20"
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={controls}
    >
      <Image
        src="/images/profile/Portfolio.png"
        alt="serjo"
        width={500}
        height={500}
        className="w-11/12 h-auto"
        style={{ borderRadius: '30%', mixBlendMode: 'multiply' }}
      />
    </motion.div>
  );
};

export default AnimatedLogo;