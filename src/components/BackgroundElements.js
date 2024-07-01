import React, { useState, useEffect } from 'react';

const BackgroundElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Rings Component */}
        <div className="absolute top-1/2 left-1/3 w-[70rem] aspect-square border-8  border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
        <div className="absolute top-1/2 left-1/3 w-[60rem] aspect-square border-6 border-n-4/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[45rem] aspect-square border-4 border-dashed border-n-6/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[30rem] aspect-square border-2 border-dotted border-n-8/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        
      </div>
   

      {/* BackgroundCircles Component with Mouse Movement */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/4 -translate-y-1/4">
        <div
          className="absolute w-10 h-10 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full shadow-lg shadow-[#DD734F]/50 animate-pulse-slow blur-sm"
          style={{
            top: `${mousePosition.y * 0.17}px`,
            left: `${mousePosition.x * 0.17}px`,
          }}
        ></div>
        <div
          className="absolute w-8 h-8 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full shadow-lg shadow-[#B9AEDF]/50 animate-pulse-slow brightness-125"
          style={{
            top: `${mousePosition.y * -0.17}px`,
            left: `${mousePosition.x * -0.17}px`,
          }}
        ></div>
        <div
          className="absolute w-14 h-14 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full shadow-lg shadow-[#88E5BE]/50 animate-pulse-slow contrast-125"
          style={{
            top: `${mousePosition.y * 0.10}px`,
            left: `${mousePosition.x * 0.10}px`,
          }}
        ></div>
        <div
          className="absolute w-6 h-6 bg-gradient-to-b from-[#F9DB6D] to-[#1A1A32] rounded-full shadow-lg shadow-[#F9DB6D]/50 animate-pulse-slow saturate-150"
          style={{
            top: `${mousePosition.y * -0.25}px`,
            left: `${mousePosition.x * 0.13}px`,
          }}
        ></div>
        <div
          className="absolute w-4 h-4 bg-gradient-to-b from-[#87CFEB] to-[#1A1A32] rounded-full shadow-lg shadow-[#87CFEB]/50 animate-pulse-slow hue-rotate-90"
          style={{
            top: `${mousePosition.y * 0.20}px`,
            left: `${mousePosition.x * -0.15}px`,
          }}
        ></div>
        <div
          className="absolute w-12 h-12 bg-gradient-to-b from-[#F2B8A2] to-[#1A1A32] rounded-full shadow-lg shadow-[#F2B8A2]/50 animate-pulse-slow blur-sm"
          style={{
            top: `${mousePosition.y * -0.13}px`,
            left: `${mousePosition.x * 0.19}px`,
          }}
        ></div>
        <div
          className="absolute w-5 h-5 bg-gradient-to-b from-[#E586B1] to-[#1A1A32] rounded-full shadow-lg shadow-[#E586B1]/50 animate-pulse-slow brightness-125"
          style={{
            top: `${mousePosition.y * 0.15}px`,
            left: `${mousePosition.x * -0.15}px`,
          }}
        ></div>
        <div
          className="absolute w-9 h-9 bg-gradient-to-b from-[#9BC7D9] to-[#1A1A32] rounded-full shadow-lg shadow-[#9BC7D9]/50 animate-pulse-slow contrast-125"
          style={{
            top: `${mousePosition.y * -0.24}px`,
            left: `${mousePosition.x * -0.24}px`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default BackgroundElements;