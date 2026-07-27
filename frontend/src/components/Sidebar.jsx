import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CloudSun, 
  Map, 
  Flame, 
  AlertTriangle, 
  Bot, 
  BarChart3, 
  FileText, 
  Info, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Weather Monitoring', path: '/monitoring', icon: CloudSun },
  { name: 'Heat Map', path: '/map', icon: Map },
  { name: 'Hotspots', path: '/hotspots', icon: Flame },
  { name: 'Alerts', path: '/alerts', icon: AlertTriangle },
  { name: 'AI Advisory', path: '/ai-advisory', icon: Bot },
  { name: 'Analytics', path: '/analytics', icon: BarChart3 },
  { name: 'Reports', path: '/reports', icon: FileText },
  { name: 'Settings', path: '/settings', icon: Settings },
];

const Sidebar = ({ isCollapsed, toggleSidebar, mobileOpen, closeMobileSidebar }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={closeMobileSidebar}
        />
      )}

      <aside className={`
        fixed lg:static top-0 bottom-0 left-0 z-50
        flex flex-col justify-between
        bg-[#1C1B1A] text-stone-300
        border-r border-stone-800
        transition-all duration-300 ease-in-out shadow-lg
        ${isCollapsed ? 'w-20' : 'w-64'}
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Top Brand */}
        <div>
          <div className="flex items-center justify-between h-20 px-5 border-b border-stone-800">
            <NavLink to="/dashboard" className="flex items-center gap-3 overflow-hidden" onClick={closeMobileSidebar}>
              <div className="w-9 h-9 rounded-xl bg-stone-900 flex items-center justify-center text-amber-500 border border-stone-800 shrink-0">
                <Flame size={20} className="text-amber-500" />
              </div>
              {!isCollapsed && (
                <div className="flex flex-col">
                  <span className="font-extrabold text-base tracking-tight text-white">
                    HEATGUARD<span className="text-amber-500 font-medium ml-1">AI</span>
                  </span>
                  <span className="text-[10px] text-stone-400 font-mono tracking-wider uppercase">
                    Heatwave Warning
                  </span>
                </div>
              )}
            </NavLink>
            <button 
              onClick={toggleSidebar} 
              className="hidden lg:flex p-1.5 rounded-lg bg-stone-800 text-stone-400 hover:text-white transition"
              title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1 mt-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={closeMobileSidebar}
                  className={({ isActive }) => `
                    flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all group relative
                    ${isActive 
                      ? 'bg-stone-800 text-amber-400 font-semibold shadow-sm' 
                      : 'text-stone-400 hover:bg-stone-800/60 hover:text-stone-200'}
                  `}
                >
                  <Icon size={18} className={`shrink-0 ${isActive ? 'text-amber-400' : 'text-stone-400 group-hover:text-stone-200'}`} />
                  
                  {!isCollapsed && (
                    <span className="truncate">{item.name}</span>
                  )}

                  {/* Tooltip for Collapsed view */}
                  {isCollapsed && (
                    <div className="absolute left-full ml-3 px-3 py-1.5 bg-stone-900 text-stone-200 text-xs font-semibold rounded-md shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition z-50 border border-stone-800">
                      {item.name}
                    </div>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Footer Minimal Indicator */}
        {!isCollapsed && (
          <div className="p-4 m-3 rounded-xl bg-stone-900/80 border border-stone-800 text-xs space-y-1">
            <div className="flex items-center gap-2 text-stone-200 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>IMD Data Sync Active</span>
            </div>
            <p className="text-[11px] text-stone-500">72h predictive ML engine online.</p>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
