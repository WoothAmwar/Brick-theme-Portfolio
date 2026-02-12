import React from 'react';
import { ProjectData } from '../types/data';
import { ProjectCard } from './ProjectCard';

interface ProjectsSectionProps {
  projects: ProjectData[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
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
        {projects.map((project, index) => {
          // Map ProjectData to the internal Project interface or pass raw data if ProjectCard is updated.
          // For now, let's map it to match existing ProjectCard explicitly or update ProjectCard.
          // Since I haven't updated ProjectCard yet, I will pass the raw project data and letting ProjectCard handle it is better,
          // BUT ProjectCard expects `project` prop of type `Project`. 
          // I will construct a compatible object here with generated fields.
          const colors: ('red' | 'blue' | 'green' | 'yellow')[] = ['red', 'blue', 'green', 'yellow'];
          const mappedProject = {
             id: index.toString(),
             kitNumber: `KIT #${(index + 1).toString().padStart(3, '0')}`,
             title: project.title,
             description: project.description,
             pieceCount: Math.floor(Math.random() * 500) + 100, // Random piece count for fun
             imageUrl: project.images[0] || '', // Use first image
             themeColor: colors[index % colors.length],
             tools: project.tools, // Pass tools if ProjectCard can handle them (it currently can't, so I'll need to update it)
             url: project.url,
          };
          return <ProjectCard key={index} project={mappedProject} />;
        })}
      </div>
    </section>
  );
};

