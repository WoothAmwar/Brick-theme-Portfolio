import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { StatsGrid } from '../components/StatsGrid';
import { ProjectsSection } from '../components/ProjectsSection';
import { AboutSection } from '../components/AboutSection';
import { Footer } from '../components/Footer';
import { getBasicInfo, getSkills, getProjects, getExperience } from '../lib/data';
import { StatItem } from '../types';

export default function Home() {
  const basicInfo = getBasicInfo();
  const skills = getSkills();
  const projects = getProjects();
  const experience = getExperience();

  // Calculate stats
  const projectsCount = projects.length;
  // Calculate years of experience from earliest job
  const yearsExp = experience.length > 0 
    ? new Date().getFullYear() - parseInt(experience[experience.length - 1].years.split(' ')[1] || '2024') + 1
    : 1;

  const stats: StatItem[] = [
    { value: `${projectsCount}+`, label: 'Sets Built', color: 'red', textColor: 'white' },
    { value: '12k', label: 'Bricks Moved', color: 'blue', textColor: 'white' },
    { value: `${yearsExp}`, label: 'Years Exp', color: 'yellow', textColor: 'black' },
    { value: '100%', label: 'Original Pieces', color: 'green', textColor: 'white' },
  ];

  return (
    <div className="baseplate-texture min-h-screen p-4 md:p-8 flex flex-col items-center overflow-x-hidden">
      <Navbar logoText={basicInfo.name?.toUpperCase()} />
      <Hero 
        name={basicInfo.name} 
        titles={basicInfo.titles} 
        description={basicInfo.description} 
        social={basicInfo.social} 
      />
      {/* <StatsGrid stats={stats} /> */}
      <ProjectsSection projects={projects} />
      <AboutSection skills={skills} experience={experience} profileImage={basicInfo.image} />
      <Footer social={basicInfo.social} />
    </div>
  );
}
