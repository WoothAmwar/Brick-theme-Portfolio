import React from 'react';
import { NAV_ITEMS } from '../lib/data';
import { BrickLink } from './BrickLink';

interface NavbarProps {
  logoText?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ logoText = 'BRICK_PORTFOLIO' }) => {
  return (
    <nav className="w-full max-w-6xl flex flex-wrap justify-between items-center gap-6 mb-16">
      {/* Logo Brick */}
      <div className="relative bg-lego-red px-8 py-4 rounded-xl brick-shadow flex items-center gap-3">
        {/* Decorative studs on top of the logo brick */}
        <div className="absolute -top-1.5 left-8 w-6 h-1.5 bg-lego-red rounded-t-sm brightness-110"></div>
        <div className="absolute -top-1.5 left-16 w-6 h-1.5 bg-lego-red rounded-t-sm brightness-110"></div>
        <div className="absolute -top-1.5 right-8 w-6 h-1.5 bg-lego-red rounded-t-sm brightness-110"></div>
        <span className="text-white font-extrabold text-2xl uppercase">
          {logoText}
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-4">
        {NAV_ITEMS.map((item) => (
          <BrickLink 
            key={item.label}
            label={item.label}
            href={item.href}
            color={item.color}
          />
        ))}
      </div>
    </nav>
  );
};
