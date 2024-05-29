// pages/projects.jsx
import React from 'react';
import { ThreeDCardDemo } from '../components/Front3DCard';
import { RotatedThreeDCardDemo } from '../components/Rotate3DCard';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ThreeDCardDemo />
        <RotatedThreeDCardDemo />
        <ThreeDCardDemo />
        <RotatedThreeDCardDemo />
      </div>
    </div>
  );
};

export default Projects;
