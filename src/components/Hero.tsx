'use client'
import React from 'react';
import { SocialLink } from '../types/data';

interface HeroProps {
  name?: string;
  titles?: string[];
  description?: string;
  social?: SocialLink[];
}

export const Hero: React.FC<HeroProps> = ({ name, titles, description, social }) => {
  const firstName = name?.split(' ')[0] || 'ALEX';
  
  const [displayText, setDisplayText] = React.useState('');
  const [titleIndex, setTitleIndex] = React.useState(0);
  const [phase, setPhase] = React.useState<'typing' | 'waiting' | 'deleting'>('typing');

  React.useEffect(() => {
    if (!titles || titles.length === 0) {
      setDisplayText('ARCHITECT');
      return;
    }

    const currentTitle = titles[titleIndex];

    if (phase === 'typing') {
      if (displayText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        }, 90);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setPhase('waiting');
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else if (phase === 'waiting') {
       setPhase('deleting');
    } else if (phase === 'deleting') {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          // Removes them from the back to the front (right to left)
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        setPhase('typing');
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }
  }, [displayText, phase, titleIndex, titles]);

  return (
    <div id="home" className="w-full max-w-6xl flex flex-col items-center text-center">
      <div className="relative bg-white/95 dark:bg-background-dark/95 p-12 rounded-xl border-b-8 border-gray-300 dark:border-black shadow-2xl mb-12 max-w-4xl w-full">
        {/* Decorative Studs */}
        <div className="absolute -top-3 left-10 flex gap-4">
          <div className="w-8 h-3 bg-primary rounded-t-lg shadow-inner"></div>
          <div className="w-8 h-3 bg-lego-red rounded-t-lg shadow-inner"></div>
          <div className="w-8 h-3 bg-lego-blue rounded-t-lg shadow-inner"></div>
        </div>

        {/* Status Badge */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-1 bg-lego-gray/20 rounded-full mb-6 text-sm font-bold text-lego-gray">
          <span className="w-2 h-2 rounded-full bg-lego-red animate-pulse"></span>
          BUILD IN PROGRESS
        </div> */}

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
          HELLO, I'M <span className="text-lego-blue uppercase">{firstName}</span>
          <br />
          <span className="bg-primary px-4 py-1 inline-block transform -rotate-2 uppercase min-h-[1.2em]">
            {displayText}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
          {description || 'Snapping ideas together to create digital experiences that stick.'}
        </p>

        {/* Dynamic Social Links */}
        <div className="flex flex-wrap gap-4 justify-center">
          {social?.map((link) => (
             <a
               key={link.name}
               href={link.url}
               target="_blank"
               rel="noopener noreferrer"
               className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-lg font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 border-b-4 border-slate-200 dark:border-slate-900 active:border-b-0 active:translate-y-1 capitalize"
             >
               <i className={link.class}></i>
               {link.name}
             </a>
          ))}
        </div>
      </div>
    </div>
  );
};

