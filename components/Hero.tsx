import React from 'react';

export const Hero: React.FC = () => {
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
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-lego-gray/20 rounded-full mb-6 text-sm font-bold text-lego-gray">
          <span className="w-2 h-2 rounded-full bg-lego-red animate-pulse"></span>
          BUILD IN PROGRESS
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
          HELLO, I'M <span className="text-lego-blue">ALEX</span>
          <br />
          <span className="bg-primary px-4 py-1 inline-block transform -rotate-2">
            ARCHITECT
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
          Snapping ideas together to create digital experiences that stick. Specialized in UX/UI design and creative engineering.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-primary text-black text-lg font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1">
            <span className="material-icons">architecture</span>
            START BUILDING
          </button>
          <button className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-lg font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 border-b-4 border-slate-200 dark:border-slate-900 active:border-b-0 active:translate-y-1">
            <span className="material-icons">menu_book</span>
            VIEW MANUAL
          </button>
        </div>
      </div>
    </div>
  );
};
