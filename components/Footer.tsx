import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="w-full max-w-6xl mt-auto">
      <div className="bg-slate-800 p-8 rounded-t-3xl brick-shadow flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side: Social & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex gap-2 mb-4">
            <button className="w-10 h-10 bg-lego-red rounded-full stud-shadow flex items-center justify-center text-white hover:scale-110 transition-transform">
              <span className="material-icons text-sm">share</span>
            </button>
            <button className="w-10 h-10 bg-lego-blue rounded-full stud-shadow flex items-center justify-center text-white hover:scale-110 transition-transform">
              <span className="material-icons text-sm">alternate_email</span>
            </button>
            <button className="w-10 h-10 bg-primary rounded-full stud-shadow flex items-center justify-center text-black hover:scale-110 transition-transform">
              <span className="material-icons text-sm">smart_toy</span>
            </button>
          </div>
          <p className="text-slate-400 text-sm font-bold">© 2024 BRICK PORTFOLIO. ALL PIECES INCLUDED.</p>
        </div>

        {/* Right Side: Links */}
        <div className="flex gap-8">
          <div className="text-left">
            <h4 className="text-white font-black text-xs uppercase mb-3 opacity-50 tracking-widest">Inventory</h4>
            <ul className="text-slate-300 text-sm font-bold space-y-1">
              <li><a href="#" className="hover:text-primary transition-colors">Instruction Books</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Missing Pieces</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Storage Bin</a></li>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="text-white font-black text-xs uppercase mb-3 opacity-50 tracking-widest">Warehouse</h4>
            <ul className="text-slate-300 text-sm font-bold space-y-1">
              <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dribbble</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom decorative overhang */}
      <div className="h-8 w-full bg-[#1e8c35] rounded-b-xl stud-shadow"></div>
    </footer>
  );
};
