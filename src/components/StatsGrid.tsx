import React from 'react';
import { StatItem } from '../types';

interface StatsGridProps {
  stats: StatItem[];
}

const colorMap = {
  red: 'bg-lego-red',
  blue: 'bg-lego-blue',
  yellow: 'bg-primary',
  green: 'bg-lego-green',
};

const textColorMap = {
  white: 'text-white',
  black: 'text-black',
};

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mb-20">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`${colorMap[stat.color]} ${textColorMap[stat.textColor]} p-6 rounded-xl brick-shadow`}
        >
          <div className="text-4xl font-black">{stat.value}</div>
          <div className="text-xs font-bold uppercase opacity-80">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

