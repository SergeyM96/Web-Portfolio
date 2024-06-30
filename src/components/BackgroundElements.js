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
      <div className="absolute top-1/2 left-1/3 w-[70rem] max-w-full aspect-square border-8 border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
        <div className="absolute top-1/2 left-1/3 w-[60rem] max-w-full aspect-square border-6 border-n-4/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[45rem] max-w-full aspect-square border-4 border-dashed border-n-6/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[30rem] max-w-full aspect-square border-2 border-dotted border-n-8/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* BackgroundCircles Component with Mouse Movement */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/4 -translate-y-1/4 z-0">
        {[...Array(8)].map((_, i) => {
          const sizes = [10, 8, 14, 6, 4, 12, 5, 9];
          const colors = [
            ['#DD734F', '#1A1A32'],
            ['#B9AEDF', '#1A1A32'],
            ['#88E5BE', '#1A1A32'],
            ['#F9DB6D', '#1A1A32'],
            ['#87CFEB', '#1A1A32'],
            ['#F2B8A2', '#1A1A32'],
            ['#E586B1', '#1A1A32'],
            ['#9BC7D9', '#1A1A32'],
          ];
          const topFactor = [0.17, -0.17, 0.10, -0.25, 0.20, -0.13, 0.15, -0.24];
          const leftFactor = [0.17, -0.17, 0.10, 0.13, -0.15, 0.19, -0.15, -0.24];

          return (
            <div
              key={i}
              className={`absolute w-${sizes[i]} h-${sizes[i]} bg-gradient-to-b from-[${colors[i][0]}] to-[${colors[i][1]}] rounded-full shadow-lg shadow-[${colors[i][0]}]/50 animate-pulse-slow`}
              style={{
                top: `${mousePosition.y * topFactor[i]}px`,
                left: `${mousePosition.x * leftFactor[i]}px`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default BackgroundElements;
