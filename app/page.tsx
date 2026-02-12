import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { StatsGrid } from '../components/StatsGrid';
import { ProjectsSection } from '../components/ProjectsSection';
import { AboutSection } from '../components/AboutSection';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="baseplate-texture min-h-screen p-4 md:p-8 flex flex-col items-center overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsGrid />
      <ProjectsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
