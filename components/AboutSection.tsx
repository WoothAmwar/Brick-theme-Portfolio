import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="manual" className="w-full max-w-5xl bg-lego-blue p-8 md:p-16 rounded-3xl brick-shadow flex flex-col md:flex-row items-center gap-12 mb-24 relative">
      {/* Ages 18+ Sticker */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-xl transform rotate-12 border-4 border-white z-10">
        <span className="text-black font-black text-xs text-center leading-none uppercase">
          Ages
          <br />
          <span className="text-2xl">18+</span>
        </span>
      </div>

      {/* Profile Image Container */}
      <div className="w-64 h-64 bg-white rounded-full flex-shrink-0 border-8 border-lego-blue stud-shadow flex items-center justify-center overflow-hidden relative">
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiyHfGw-37s2ZbEHCFxQo3IUKDaBupksrIniL-tVXbLnCneHq6ZaCD7U1BRRpSJmTK9xBeTLAQemQrih6fMfrrd-RFSZQRGeoMT-Mfyyx855IGVZdEZGE_81d7Wk6HxyhaFZUebRCAv6Xcrq5WZOKqSd9JRPaVJN9Mqv0XVEOQUcasEPYFtGd-JGyxoDgeIp6pmM-SNsSYFr_UpxbK3QbFor-yOHHKRELl3UQTn-ToT1jYRBOR7hPL5VMTZuZAyK2mfW4XZNYAm9kc"
          alt="Alex Architect Profile"
        />
      </div>

      {/* Text Content */}
      <div className="text-left text-white">
        <h2 className="text-4xl font-black mb-6 uppercase">The Architect Behind the Bricks</h2>
        <p className="text-lg leading-relaxed mb-8 opacity-90">
          I believe that every great digital product starts with a single brick. My philosophy is modularity: building components that are reusable, scalable, and intuitive. Whether it's a mobile app or a complex web platform, I focus on the "click" – that moment when everything fits together perfectly.
        </p>
        
        {/* Skill Tags */}
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-white/20 rounded-lg text-sm font-bold border border-white/30 backdrop-blur-sm">
            FIGMA EXPERT
          </span>
          <span className="px-4 py-2 bg-white/20 rounded-lg text-sm font-bold border border-white/30 backdrop-blur-sm">
            REACT BUILDER
          </span>
          <span className="px-4 py-2 bg-white/20 rounded-lg text-sm font-bold border border-white/30 backdrop-blur-sm">
            BRAND MASTER
          </span>
        </div>
      </div>
    </section>
  );
};
