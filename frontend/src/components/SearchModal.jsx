import React, { useState, useEffect } from 'react';
import { Search, X, MapPin, Flame, AlertTriangle, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockCitiesWeather, mockAlerts } from '../data/mockData';

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredCities = mockCitiesWeather.filter(c => 
    c.city.toLowerCase().includes(query.toLowerCase()) || 
    c.state.toLowerCase().includes(query.toLowerCase())
  );

  const filteredAlerts = mockAlerts.filter(a =>
    a.city.toLowerCase().includes(query.toLowerCase()) ||
    a.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 flex justify-center">
      <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-150">
        
        {/* Search Header */}
        <div className="p-4 border-b border-stone-200 flex items-center gap-3 bg-stone-50">
          <Search size={20} className="text-stone-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search cities, alerts, or system pages... (e.g. 'Nagpur')"
            className="w-full bg-transparent text-stone-900 placeholder-stone-400 focus:outline-none text-sm font-medium"
            autoFocus
          />
          <button onClick={onClose} className="p-1 text-stone-400 hover:text-stone-700 rounded-lg">
            <X size={18} />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5">
          {query.trim() === '' ? (
            <div>
              <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: 'Dashboard Overview', path: '/dashboard', icon: Flame },
                  { name: 'Weather Data Monitoring', path: '/monitoring', icon: MapPin },
                  { name: 'Interactive India Map', path: '/map', icon: MapPin },
                  { name: 'Hotspots Ranking', path: '/hotspots', icon: Flame },
                  { name: 'Alerts & Early Warnings', path: '/alerts', icon: AlertTriangle },
                  { name: 'AI Advisory Generator', path: '/ai-advisory', icon: FileText }
                ].map(item => (
                  <button
                    key={item.path}
                    onClick={() => handleNavigate(item.path)}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-50 hover:bg-stone-100 text-left border border-stone-200 transition"
                  >
                    <item.icon size={16} className="text-amber-800" />
                    <span className="text-xs font-semibold text-stone-800">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Cities */}
              {filteredCities.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Matching Cities</h4>
                  <div className="space-y-1">
                    {filteredCities.slice(0, 4).map((city) => (
                      <div
                        key={city.id}
                        onClick={() => handleNavigate('/monitoring')}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-stone-100 cursor-pointer border border-transparent hover:border-stone-200 transition"
                      >
                        <div className="flex items-center gap-2.5">
                          <MapPin size={16} className="text-stone-400" />
                          <div>
                            <span className="font-bold text-xs text-stone-900">{city.city}</span>
                            <span className="text-[11px] text-stone-500 ml-2">({city.state})</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-stone-900 text-xs">{city.temp}°C</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            city.statusColor === 'red' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-900'
                          }`}>
                            {city.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Alerts */}
              {filteredAlerts.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Matching Alerts</h4>
                  <div className="space-y-1">
                    {filteredAlerts.slice(0, 3).map((alert) => (
                      <div
                        key={alert.id}
                        onClick={() => handleNavigate('/alerts')}
                        className="flex items-start justify-between p-2.5 rounded-xl hover:bg-stone-100 cursor-pointer border border-transparent hover:border-stone-200 transition"
                      >
                        <div className="flex items-start gap-2.5">
                          <AlertTriangle size={16} className="text-rose-600 mt-0.5" />
                          <div>
                            <div className="font-bold text-xs text-stone-900">{alert.title}</div>
                            <div className="text-[11px] text-stone-500">{alert.city}, {alert.state}</div>
                          </div>
                        </div>
                        <span className="text-xs text-rose-600 font-bold">{alert.temp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Hint */}
        <div className="p-3 bg-stone-50 border-t border-stone-200 text-center text-xs text-stone-400">
          Press <kbd className="px-1.5 py-0.5 bg-white rounded border border-stone-300 font-mono text-[10px] text-stone-700">Esc</kbd> to close
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
