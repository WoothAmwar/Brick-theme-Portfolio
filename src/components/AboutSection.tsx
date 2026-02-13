import React from 'react';
import { Skills, ExperienceData } from '../types/data';

interface AboutSectionProps {
  skills: Skills;
  experience: ExperienceData[];
  profileImage?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ skills, experience, profileImage }) => {
  return (
    <section id="experience" className="w-full max-w-5xl flex flex-col gap-12 mb-24">
      {/* Bio & Skills Card */}
      <div className="w-full bg-lego-blue p-8 md:p-16 rounded-3xl brick-shadow flex flex-col md:flex-row items-center gap-12 relative">

        {/* Profile Image Container */}
        <div className="w-64 h-64 bg-white rounded-full flex-shrink-0 border-8 border-lego-blue stud-shadow flex items-center justify-center overflow-hidden relative">
          <img
            className="w-full h-full object-cover"
            src={profileImage || "https://lh3.googleusercontent.com/aida-public/AB6AXuBiyHfGw-37s2ZbEHCFxQo3IUKDaBupksrIniL-tVXbLnCneHq6ZaCD7U1BRRpSJmTK9xBeTLAQemQrih6fMfrrd-RFSZQRGeoMT-Mfyyx855IGVZdEZGE_81d7Wk6HxyhaFZUebRCAv6Xcrq5WZOKqSd9JRPaVJN9Mqv0XVEOQUcasEPYFtGd-JGyxoDgeIp6pmM-SNsSYFr_UpxbK3QbFor-yOHHKRELl3UQTn-ToT1jYRBOR7hPL5VMTZuZAyK2mfW4XZNYAm9kc"}
            alt="Profile"
          />
        </div>

        {/* Text Content */}
        <div className="text-left text-white">
          <h2 className="text-4xl font-black mb-6 uppercase">The Architect Behind the Bricks</h2>
          <p className="text-lg leading-relaxed mb-8 opacity-90">
            Experienced with the following technologies
          </p>
          
          {/* Skill Tags */}
          <div className="flex flex-wrap gap-3">
            {skills.icons.map((skill) => (
              <span key={skill.name} className="px-4 py-2 bg-white/20 rounded-lg text-sm font-bold border border-white/30 backdrop-blur-sm flex items-center gap-2">
                <i className={skill.class}></i>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="w-full">
         {/* <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8 border-l-8 border-lego-red pl-4 uppercase">Experience Manual</h3> */}
         <h2 className="text-4xl font-black text-white drop-shadow-md shrink-0 uppercase">Experience Manual</h2>
         {/* Decorative Progress Bar */}
        <div className="h-4 w-full bg-lego-gray/30 rounded-full flex gap-1 p-1 mb-10">
          <div className="h-full w-24 bg-primary rounded-full"></div>
        </div>
         <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white dark:bg-background-dark p-8 rounded-xl brick-shadow border-l-8 border-lego-yellow relative ml-4">
                  {/* Connector line */}
                  {/* {index !== experience.length - 1 && (
                      <div className="absolute left-[-36px] top-16 bottom-[-40px] w-1 bg-lego-gray/30"></div>
                  )} */}
                  {/* Dot */}
                  {/* <div className="absolute left-[-43px] top-8 w-4 h-4 rounded-full bg-lego-red ring-4 ring-white dark:ring-background-dark"></div> */}

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                          <h4 className="text-2xl font-bold text-slate-900 dark:text-white">{job.title}</h4>
                          <div className="text-lego-blue font-bold">{job.company}</div>
                      </div>
                      <div className="bg-lego-gray/10 px-4 py-1 rounded-full text-sm font-bold text-slate-600 dark:text-slate-400 mt-2 md:mt-0">
                          {job.years}
                      </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                      {job.tools.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                              <span className="text-lego-red font-bold mt-1">›</span>
                              {desc}
                          </li>
                      ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                      {job.mainTool.map((tool) => (
                          <span key={tool} className="text-xs font-bold px-2 py-1 bg-lego-gray/10 rounded text-slate-500 uppercase">
                              {tool}
                          </span>
                      ))}
                  </div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};
