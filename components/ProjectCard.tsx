import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const borderColors = {
  red: 'border-lego-red',
  blue: 'border-lego-blue',
  green: 'border-lego-green',
  yellow: 'border-primary',
};

const badgeColors = {
  red: 'bg-lego-red',
  blue: 'bg-lego-blue',
  green: 'bg-lego-green',
  yellow: 'bg-primary',
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={`group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-2xl transform transition-all hover:-translate-y-2 border-b-[12px] ${borderColors[project.themeColor]}`}>
      <div className="relative h-64 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={project.imageUrl}
          alt={project.title}
        />
        <div className={`absolute top-4 left-4 ${badgeColors[project.themeColor]} text-white text-[10px] font-black px-2 py-1 rounded-sm shadow-md`}>
          {project.kitNumber}
        </div>
      </div>
      <div className="p-6 text-left">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white uppercase">
            {project.title}
          </h3>
          <span className="text-lego-gray font-bold text-sm">{project.pieceCount} PCS</span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 min-h-[60px]">
          {project.description}
        </p>
        <button className="w-full bg-primary text-black font-black py-3 rounded-full border-b-4 border-yellow-600 hover:brightness-105 active:border-b-0 active:translate-y-1 transition-all uppercase flex items-center justify-center gap-2">
          <span className="material-icons text-lg">build</span>
          Build Project
        </button>
      </div>
    </div>
  );
};
