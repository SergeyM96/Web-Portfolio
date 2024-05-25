import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="relative w-48 h-48 flex items-center justify-center">
        <CircularText className="fill-dark absolute animate-spin-slow" />
        <Link
          href="mailto:globaldevsm@gmail.com"
          className="flex items-center justify-center absolute 
                     bg-dark text-light shadow-md border border-solid border-dark
                     w-20 h-20 rounded-full font-semibold 
                     hover:bg-light hover:text-dark z-10"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
