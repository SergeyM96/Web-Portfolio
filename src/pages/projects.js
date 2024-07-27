// pages/projects.js
import React from 'react';
import { Front3DCard } from '../components/Front3DCard';
import { Rotated3DCard } from '../components/Rotate3DCard';
import hrmis from '/public/images/projects/hrmis.png';
import pdfConverter from '/public/images/projects/pdf-img-conv.png';
import scripts from '/public/images/projects/scripts.jpg';
import nails from '/public/images/projects/nails.png';

const Projects = () => {
  return (
    <div className="min-h-screen bg-custom-pattern flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-neutral-800 dark:text-white mb-64 text-center">
        Recent <span className="text-blue-600">Projects</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        <Front3DCard
          title="HR-Pulse"
          description="HRMIS app that will give you more control over your business"
          imageUrl={hrmis}
          linkUrl="https://github.com/SergeyM96/NailsBookingApp"
          linkText="GitHub →"
        />
        <Rotated3DCard
          title="PDF to image converter"
          description="Converts a pdf file into img source pictures"
          imageUrl={pdfConverter}
          linkUrl="https://github.com/SergeyM96/Hr-Pulse"
          linkText="GitHub →"
        />
        <Front3DCard
          title="Python scripts"
          description="Different scripts and automated tests with python for daily use"
          imageUrl={scripts}
          linkUrl="#"
          linkText="GitHub →"
        />
        <Rotated3DCard
          title="Android booking template"
          description="A template that can be changed to any Studio business for booking management"
          imageUrl={nails}
          linkUrl="https://github.com/SergeyM96/Python-Scripts"
          linkText="GitHub →"
        />
      </div>
    </div>
  );
};

export default Projects;
