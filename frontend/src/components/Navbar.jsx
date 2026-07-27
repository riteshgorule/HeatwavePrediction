import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  Menu, 
  User, 
  LogOut, 
  Settings, 
  ChevronDown
} from 'lucide-react';
import Breadcrumb from './Breadcrumb';

const Navbar = ({ onOpenMobileSidebar, onOpenNotifications, onOpenSearch }) => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="flex items-center justify-between h-16 px-4 md:px-8">
        
        {/* Left Side: Mobile Menu Button & Breadcrumb */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenMobileSidebar}
            className="lg:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-200/50 transition"
          >
            <Menu size={20} />
          </button>

          <div className="hidden sm:block">
            <Breadcrumb />
          </div>
        </div>

        {/* Right Side Tools */}
        <div className="flex items-center gap-3">
          
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 bg-white hover:bg-stone-100 text-stone-600 px-3.5 py-1.5 rounded-lg text-xs font-medium border border-stone-200 shadow-xs transition"
          >
            <Search size={15} className="text-stone-400" />
            <span className="hidden md:inline">Search cities, alerts...</span>
            <kbd className="hidden md:inline px-1.5 py-0.5 bg-stone-100 rounded border border-stone-200 text-[10px] font-mono text-stone-500">
              Ctrl+K
            </kbd>
          </button>

          {/* Notifications Button */}
          <button
            onClick={onOpenNotifications}
            className="relative p-2 rounded-lg text-stone-600 hover:bg-stone-100 border border-stone-200 bg-white transition shadow-xs"
            title="View Notifications"
          >
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-600 rounded-full" />
          </button>

          <div className="h-5 w-[1px] bg-stone-200 mx-1 hidden sm:block" />

          {/* User Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="flex items-center gap-2.5 p-1 rounded-lg hover:bg-stone-100 transition"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="User Avatar"
                className="w-8 h-8 rounded-lg object-cover border border-stone-300"
              />
              <div className="hidden md:flex flex-col text-left">
                <span className="text-xs font-bold text-stone-900 leading-tight">Dr. Rajesh Sharma</span>
                <span className="text-[10px] text-stone-500 font-medium">IMD Climate ML Lead</span>
              </div>
              <ChevronDown size={14} className="text-stone-400 hidden md:block" />
            </button>

            {/* Profile Menu Popup */}
            {profileDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-stone-200 p-2 z-50 animate-in fade-in duration-150"
                onMouseLeave={() => setProfileDropdownOpen(false)}
              >
                <div className="p-3 border-b border-stone-100">
                  <p className="text-xs font-bold text-stone-900">Dr. Rajesh Sharma</p>
                  <p className="text-[11px] text-stone-500 truncate">rajesh.sharma@imd-ai.gov.in</p>
                </div>

                <div className="py-1">
                  <a href="/settings" className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-stone-700 hover:bg-stone-100 rounded-lg transition">
                    <User size={14} /> Profile Settings
                  </a>
                  <a href="/settings" className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-stone-700 hover:bg-stone-100 rounded-lg transition">
                    <Settings size={14} /> Alert Preferences
                  </a>
                </div>

                <div className="pt-1 border-t border-stone-100">
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-lg transition">
                    <LogOut size={14} /> Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
