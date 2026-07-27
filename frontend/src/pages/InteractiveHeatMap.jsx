import React, { useState } from 'react';
import IndiaMap from '../components/IndiaMap';
import { mockIndiaStatesMapData } from '../data/mockData';
import { MapPin, Thermometer, Flame, Info, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InteractiveHeatMap = () => {
  const [selectedState, setSelectedState] = useState(mockIndiaStatesMapData[0]);

  return (
    <div className="space-y-6">
      
      {/* Title */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl border border-stone-200 shadow-xs">
        <div>
          <h1 className="text-2xl font-extrabold text-stone-900 flex items-center gap-2">
            <MapPin className="text-amber-800" size={24} /> Interactive Heat Map
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Displaying India state temperature distribution. Click any state for localized forecasts.
          </p>
        </div>
      </div>

      {/* MAP & PANEL */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Main Interactive Map (2 Cols) */}
        <div className="lg:col-span-2">
          <IndiaMap 
            selectedStateId={selectedState?.id}
            onSelectState={(st) => setSelectedState(st)}
          />
        </div>

        {/* State Side Panel (1 Col) */}
        <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs space-y-5">
          
          {/* Header */}
          <div className="flex justify-between items-start border-b border-stone-100 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                  selectedState.code === 'red' ? 'bg-rose-100 text-rose-900 border border-rose-200' :
                  selectedState.code === 'orange' ? 'bg-amber-100 text-amber-900 border border-amber-200' :
                  selectedState.code === 'yellow' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                  'bg-emerald-100 text-emerald-900 border border-emerald-200'
                }`}>
                  {selectedState.severity}
                </span>
                <span className="text-xs text-stone-400 font-mono">Code: {selectedState.id}</span>
              </div>
              <h2 className="text-2xl font-extrabold text-stone-900">
                {selectedState.name}
              </h2>
            </div>
            <div className="p-2 rounded-lg bg-stone-100 text-stone-900 font-extrabold text-sm border border-stone-200">
              {selectedState.temp}
            </div>
          </div>

          {/* Forecast & Prob */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
              <span className="text-[10px] text-stone-400 font-semibold block mb-1">Tomorrow Forecast</span>
              <div className="flex items-center gap-1 font-extrabold text-base text-stone-900">
                <Thermometer size={16} className="text-rose-600" />
                {selectedState.forecastTomorrow}
              </div>
            </div>
            <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
              <span className="text-[10px] text-stone-400 font-semibold block mb-1">Heatwave Prob</span>
              <div className="flex items-center gap-1 font-extrabold text-base text-amber-800">
                <Flame size={16} />
                {selectedState.heatwaveProb}%
              </div>
            </div>
          </div>

          {/* Risk Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-stone-600">Risk Severity Exposure</span>
              <span className="text-amber-800">{selectedState.heatwaveProb}%</span>
            </div>
            <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden">
              <div className="bg-amber-700 h-full rounded-full" style={{ width: `${selectedState.heatwaveProb}%` }} />
            </div>
          </div>

          {/* Top Affected Cities */}
          <div>
            <h4 className="text-[10px] font-bold uppercase text-stone-400 mb-2">High-Risk Cities</h4>
            <div className="flex flex-wrap gap-1.5">
              {selectedState.topCities.map(city => (
                <span key={city} className="px-2.5 py-1 bg-stone-100 text-stone-800 rounded text-xs font-semibold border border-stone-200">
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Weather Summary */}
          <div className="p-3.5 rounded-lg bg-amber-50/80 border border-amber-200 text-xs">
            <h4 className="font-bold text-amber-900 flex items-center gap-1 mb-1">
              <Info size={13} /> Weather Summary
            </h4>
            <p className="text-stone-700 leading-relaxed">
              {selectedState.summary}
            </p>
          </div>

          {/* Action Link */}
          <Link
            to="/ai-advisory"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-stone-900 hover:bg-amber-900 text-white font-bold text-xs transition"
          >
            Generate Advisory for {selectedState.name} <ChevronRight size={14} />
          </Link>

        </div>

      </div>

    </div>
  );
};

export default InteractiveHeatMap;
