import React from 'react';

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-4 md:p-16 lg:p-32 ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
