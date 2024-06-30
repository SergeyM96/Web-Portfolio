import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedText = ({ text, className = '', textSize = '', textColor = '', onAnimationComplete }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);

  useEffect(() => {
    if (inView && !titleAnimationComplete) {
      controls.start('visible').then(onAnimationComplete);
      setTitleAnimationComplete(true);
    }
  }, [controls, inView, titleAnimationComplete, onAnimationComplete]);

  const wordAnimation = {
    hidden: { opacity: 0, y: '100%' },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const charAnimation = {
    hidden: { opacity: 0, y: '100%' },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden ${className}`}>
      <motion.h1
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={wordAnimation}
        aria-label={text}
        className={`inline-block w-full font-bold ${textSize} ${textColor}`}
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={index}
            variants={wordAnimation}
            className="inline-block mx-4"
          >
            {word.split('').map((char, charIndex) => (
              <motion.span key={charIndex} variants={charAnimation} className="inline-block">
                {char}
              </motion.span>
            ))}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
