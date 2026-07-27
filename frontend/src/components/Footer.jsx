import React from 'react';
import { Flame, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-auto bg-[#1C1B1A] text-stone-400 py-6 px-6 md:px-8 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 text-amber-500 flex items-center justify-center font-bold">
            <Flame size={16} />
          </div>
          <div>
            <p className="font-bold text-stone-200">National Heatwave Early Warning Platform</p>
            <p className="text-[11px] text-stone-500">In Partnership with India Meteorological Department (IMD)</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-stone-400">
          <Link to="/about" className="hover:text-stone-200 transition">About</Link>
          <Link to="/reports" className="hover:text-stone-200 transition">Reports</Link>
          <Link to="/alerts" className="hover:text-stone-200 transition">Active Alerts</Link>
          <a href="https://mausam.imd.gov.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-stone-200 transition">
            IMD Official Portal <ExternalLink size={12} />
          </a>
        </div>

        {/* Right status */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[11px] text-stone-300">INSAT-3D Telemetry: Live</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
