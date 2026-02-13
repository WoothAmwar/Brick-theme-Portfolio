import React from 'react';
import { SocialLink } from '../types/data';

interface FooterProps {
  social?: SocialLink[];
}

export const Footer: React.FC<FooterProps> = ({ social }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full max-w-6xl mt-auto">
      <div className="bg-slate-800 p-8 rounded-t-3xl brick-shadow flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side: Social & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex gap-2 mb-4">
            {social?.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-lego-blue hover:bg-lego-red rounded-full stud-shadow flex items-center justify-center text-white hover:scale-110 transition-transform"
                title={link.name}
              >
                <i className={`${link.class} text-sm`}></i>
              </a>
            ))}
          </div>
          <p className="text-slate-400 text-sm font-bold">© {currentYear} ANWAR KADER. ALL PIECES INCLUDED.</p>
        </div>

        {/* Right Side: Links */}
        <div className="flex gap-8">
          {/* <div className="text-left">
            <h4 className="text-white font-black text-xs uppercase mb-3 opacity-50 tracking-widest">Inventory</h4>
            <ul className="text-slate-300 text-sm font-bold space-y-1">
              <li><a href="#" className="hover:text-primary transition-colors">Instruction Books</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Missing Pieces</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Storage Bin</a></li>
            </ul>
          </div> */}
          <div className="text-left">
            <h4 className="text-white font-black text-xs uppercase mb-3 opacity-50 tracking-widest">Warehouse</h4>
            <ul className="text-slate-300 text-sm font-bold space-y-1">
              <li><a href="https://github.com/WoothAmwar" target="_blank" className="hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/anwar-kader" target="_blank" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="/Anwar_Kader_Resume.pdf" target="_blank" className="hover:text-primary transition-colors">Resume</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom decorative overhang */}
      <div className="h-8 w-full bg-[#1e8c35] rounded-b-xl stud-shadow"></div>
    </footer>
  );
};
