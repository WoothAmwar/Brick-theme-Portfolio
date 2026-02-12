import React from 'react';
import { PROJECTS } from '../constants';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="builds" className="w-full max-w-6xl mb-24">
      {/* Portfolio Header */}
      <div className="flex items-center gap-6 w-full mb-10">
        <h2 className="text-4xl font-black text-white drop-shadow-md shrink-0 uppercase">Latest Kits</h2>
        {/* Decorative Progress Bar */}
        <div className="h-4 w-full bg-lego-gray/30 rounded-full flex gap-1 p-1">
          <div className="h-full w-24 bg-primary rounded-full"></div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
