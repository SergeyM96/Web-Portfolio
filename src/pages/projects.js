// pages/projects.jsx
import React from 'react';
import { Front3DCard } from '../components/Front3DCard';
import { Rotated3DCard } from '../components/Rotate3DCard';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-10 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-60">
        <Front3DCard
          title="Android Booking Template"
          description="A template that can be changed to any Studio for booking managment"
          imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          linkUrl="https://twitter.com/mannupaaji"
          linkText="Try now →"
          buttonText="Sign up"
        />
        <Rotated3DCard
          title="HR-Pulse"
          description="HRMIS app that will give you more control over your buisness"
          imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          linkText="Try now →"
          buttonText="Sign up"
        />
        <Front3DCard
          title="E-commerce website"
          description="An E-commerce site of a computers shop"
          imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          linkUrl="https://example.com"
          linkText="Learn more →"
          buttonText="Join now"
        />
        <Rotated3DCard
          title="Python proj"
          description="Different text, images, and styles for each card"
          imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          linkText="Explore now →"
          buttonText="Get started"
        />
      </div>
    </div>
  );
};

export default Projects;
