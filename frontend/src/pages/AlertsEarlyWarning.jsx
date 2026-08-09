import React, { useState, useMemo } from 'react';
import { 
  AlertTriangle, 
  Clock, 
  LayoutGrid, 
  ListOrdered
} from 'lucide-react';
import { mockAlerts } from '../data/mockData';
import AlertCard from '../components/AlertCard';
import EmptyState from '../components/EmptyState';
import { filterAlerts } from '../utils/alertFilters';

const AlertsEarlyWarning = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAlerts = useMemo(() => {
    return filterAlerts(mockAlerts, activeTab, searchTerm);
  }, [activeTab, searchTerm]);

  return (
    <div className="space-y-6">
      
      {/* Title Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl border border-stone-200 shadow-xs">
        <div>
          <h1 className="text-2xl font-extrabold text-stone-900 flex items-center gap-2">
            <AlertTriangle className="text-rose-700" size={24} /> Alerts & Early Warning
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            IMD & NDMA operational early warning broadcasts with safety guidelines.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-lg border border-stone-200">
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold transition ${
              viewMode === 'grid' 
                ? 'bg-stone-900 text-white shadow-xs' 
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <LayoutGrid size={14} /> Cards
          </button>
          <button
            onClick={() => setViewMode('timeline')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold transition ${
              viewMode === 'timeline' 
                ? 'bg-stone-900 text-white shadow-xs' 
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <ListOrdered size={14} /> Timeline
          </button>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs flex flex-col md:flex-row justify-between items-center gap-3">
        
        {/* Severity Color Tabs */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {[
            { id: 'all', label: 'All Alerts', color: 'bg-stone-900 text-white' },
            { id: 'red', label: 'Red (Severe)', color: 'bg-rose-900/80 text-rose-100 border border-rose-700/50' },
            { id: 'orange', label: 'Orange (Heatwave)', color: 'bg-amber-900/80 text-amber-100 border border-amber-700/50' },
            { id: 'yellow', label: 'Yellow (Warning)', color: 'bg-stone-800 text-amber-300 border border-stone-700' },
            { id: 'green', label: 'Green (Normal)', color: 'bg-emerald-800 text-emerald-100' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded text-xs font-bold transition ${
                activeTab === tab.id 
                  ? tab.color 
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="w-full md:w-64">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search alerts..."
            className="w-full px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium focus:outline-none"
          />
        </div>

      </div>

      {/* CARDS OR TIMELINE */}
      {filteredAlerts.length === 0 ? (
        <EmptyState onReset={() => { setActiveTab('all'); setSearchTerm(''); }} />
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredAlerts.map(alert => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs relative">
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-stone-200 hidden md:block" />

          <div className="space-y-6 relative">
            {filteredAlerts.map((alert) => (
              <div key={alert.id} className="flex flex-col md:flex-row items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-amber-800 flex items-center justify-center text-amber-800 shrink-0 z-10">
                  <Clock size={14} />
                </div>
                <div className="flex-1 w-full">
                  <AlertCard alert={alert} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default AlertsEarlyWarning;
