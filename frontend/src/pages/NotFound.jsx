import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 space-y-5">
      <div className="w-16 h-16 rounded-2xl bg-stone-100 text-stone-700 flex items-center justify-center border border-stone-200">
        <ShieldAlert size={36} />
      </div>
      <div>
        <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-widest block mb-1">Error 404</span>
        <h1 className="text-3xl font-extrabold text-stone-900">Page Not Found</h1>
        <p className="text-xs text-stone-500 max-w-sm mx-auto mt-1 leading-relaxed">
          The telemetry route or section you are looking for does not exist.
        </p>
      </div>

      <div>
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 py-2.5 px-5 rounded-lg bg-stone-900 hover:bg-amber-900 text-white font-bold text-xs transition shadow-xs"
        >
          <Home size={15} /> Return to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
