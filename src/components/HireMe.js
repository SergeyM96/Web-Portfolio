import React, { useEffect, useRef } from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  const hireMeRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this value to control when the styles change
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          hireMeRef.current.classList.add('hire-me-hover');
        } else {
          hireMeRef.current.classList.remove('hire-me-hover');
        }
      });
    }, observerOptions);

    const lampComp = document.querySelector('.lamp-comp');
    if (lampComp) {
      observer.observe(lampComp);
    }

    return () => {
      if (lampComp) {
        observer.unobserve(lampComp);
      }
    };
  }, []);

  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden" ref={hireMeRef}>
      <div className="relative w-48 h-48 flex items-center justify-center">
        <CircularText className="fill-cyan absolute animate-spin-slow" />
        <Link
          href="mailto:globaldevsm@gmail.com"
          className="flex items-center justify-center absolute bg-cyan-500 text-white shadow-md border-2 border-solid border-white w-20 h-20 rounded-full font-semibold hover:bg-white hover:text-cyan-500 z-10 transition-all duration-300"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;