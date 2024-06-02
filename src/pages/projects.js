import React from 'react';
import { Front3DCard } from '../components/Front3DCard';
import { Rotated3DCard } from '../components/Rotate3DCard';

const Projects = () => {
  return (
    <div className="min-h-screen bg-custom-pattern flex flex-col items-center justify-center">
      <h1 className="md:text-7xl font-bold text-neutral-800 dark:text-white mb-32 text-center">
        Recent <span className="text-blue-600">Projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <Front3DCard
          title="Android Booking Template"
          description="A template that can be changed to any Studio for booking management"
          imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          linkUrl="https://github.com/SergeyM96/NailsBookingApp"
          linkText="GitHub →"
          buttonText="Live"
        />
        <Rotated3DCard
          title="HR-Pulse"
          description="HRMIS app that will give you more control over your business"
          imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          linkText="GitHub →"
          linkUrl="https://github.com/SergeyM96/Hr-Pulse"
          buttonText="Live"
        />
        <Front3DCard
          title="E-commerce Website"
          description="In Progress"
          imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          linkUrl="#"
          linkText="GitHub →"
          buttonText="Live"
        />
        <Rotated3DCard
          title="Python Scripts"
          description="Different scripts and automated tests with python for daily use"
          imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          linkText="GitHub →"
          linkUrl="https://github.com/SergeyM96/Python-Scripts"
          buttonText="Live"
        />
      </div>
    </div>
  );
};

export default Projects;
