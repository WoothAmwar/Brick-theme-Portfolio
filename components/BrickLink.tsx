import React from 'react';

interface BrickLinkProps {
  label: string;
  href: string;
  color: 'red' | 'blue' | 'yellow' | 'green';
}

const colorClasses = {
  red: 'bg-lego-red text-white',
  blue: 'bg-lego-blue text-white',
  yellow: 'bg-primary text-black',
  green: 'bg-lego-green text-white',
};

export const BrickLink: React.FC<BrickLinkProps> = ({ label, href, color }) => {
  return (
    <a
      href={href}
      className={`${colorClasses[color]} brick-nav-item transition-all relative px-6 py-3 rounded font-bold uppercase tracking-wide brick-shadow group hover:-translate-y-1 block`}
    >
      <div className="brick-stud"></div>
      {label}
    </a>
  );
};
