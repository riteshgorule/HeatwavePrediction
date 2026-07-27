import React, { useState, useMemo } from 'react';
import { Flame, Search, RefreshCw } from 'lucide-react';
import { mockHotspots } from '../data/mockData';
import HotspotCard from '../components/HotspotCard';
import EmptyState from '../components/EmptyState';

const HeatwaveHotspots = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColor, setSelectedColor] = useState('All');
  const [selectedState, setSelectedState] = useState('All');
  const [sortBy, setSortBy] = useState('riskScore');

  const states = useMemo(() => ['All', ...new Set(mockHotspots.map(h => h.state))], []);

  const filteredHotspots = useMemo(() => {
    return mockHotspots
      .filter(item => {
        const matchesSearch = item.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              item.state.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesColor = selectedColor === 'All' || item.riskColor === selectedColor;
        const matchesState = selectedState === 'All' || item.state === selectedState;
        return matchesSearch && matchesColor && matchesState;
      })
      .sort((a, b) => {
        if (sortBy === 'riskScore') return b.riskScore - a.riskScore;
        if (sortBy === 'temp') return b.temp - a.temp;
        if (sortBy === 'confidence') return b.confidence - a.confidence;
        return a.city.localeCompare(b.city);
      });
  }, [searchTerm, selectedColor, selectedState, sortBy]);

  const handleReset = () => {
    setSearchTerm('');
    setSelectedColor('All');
    setSelectedState('All');
    setSortBy('riskScore');
  };

  return (
    <div className="space-y-6">
      
      {/* Title */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl border border-stone-200 shadow-xs">
        <div>
          <h1 className="text-2xl font-extrabold text-stone-900 flex items-center gap-2">
            <Flame className="text-rose-700" size={24} /> Heatwave Hotspots
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Vulnerability ranking calculated by risk score algorithms and surface temperature metrics.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-stone-100 text-stone-700 text-xs font-semibold hover:bg-stone-200 transition"
        >
          <RefreshCw size={14} /> Reset View
        </button>
      </div>

      {/* CONTROLS BAR */}
      <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-stone-400" size={16} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search hotspot city..."
            className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium focus:outline-none"
          />
        </div>

        {/* Filter Color */}
        <div>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="w-full py-2 px-3 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium focus:outline-none"
          >
            <option value="All">All Risk Colors</option>
            <option value="red">Red (Severe)</option>
            <option value="orange">Orange (Heatwave)</option>
            <option value="yellow">Yellow (Warning)</option>
            <option value="green">Green (Normal)</option>
          </select>
        </div>

        {/* Filter State */}
        <div>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full py-2 px-3 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium focus:outline-none"
          >
            {states.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {/* Sort By */}
        <div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full py-2 px-3 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium focus:outline-none"
          >
            <option value="riskScore">Sort by Risk Score</option>
            <option value="temp">Sort by Temperature</option>
            <option value="confidence">Sort by AI Confidence</option>
            <option value="city">Sort by City Name</option>
          </select>
        </div>

      </div>

      {/* HOTSPOTS GRID LAYOUT */}
      {filteredHotspots.length === 0 ? (
        <EmptyState onReset={handleReset} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredHotspots.map((hotspot) => (
            <HotspotCard key={hotspot.id} hotspot={hotspot} />
          ))}
        </div>
      )}

    </div>
  );
};

export default HeatwaveHotspots;
