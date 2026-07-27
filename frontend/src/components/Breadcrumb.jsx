import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const pathNameMap = {
  dashboard: 'Dashboard Overview',
  monitoring: 'Weather Monitoring',
  map: 'Interactive Heat Map',
  hotspots: 'Heatwave Hotspots',
  alerts: 'Alerts & Early Warning',
  'ai-advisory': 'AI Advisory Generator',
  analytics: 'Climate Analytics',
  reports: 'Reports & Export',
  about: 'About Project',
  settings: 'System Settings'
};

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="flex items-center text-xs font-medium text-stone-500 py-1">
      <Link to="/dashboard" className="flex items-center gap-1 hover:text-amber-800 transition">
        <Home size={13} />
        <span>Home</span>
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = pathNameMap[name] || name;

        return (
          <React.Fragment key={name}>
            <ChevronRight size={12} className="mx-2 text-stone-400" />
            {isLast ? (
              <span className="font-bold text-stone-900">{displayName}</span>
            ) : (
              <Link to={routeTo} className="hover:text-amber-800 transition">
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
