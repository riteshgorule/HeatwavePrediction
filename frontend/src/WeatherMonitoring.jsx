import React, { useState } from 'react';
import { Search, Filter, Flame, ArrowUpRight } from 'lucide-react';

const WeatherMonitoring = () => {
  const [activeTab, setActiveTab] = useState('hotspots');

  // Module 6: Hotspot Data
  const hotspots = [
    { rank: 1, district: "Nagpur", state: "Maharashtra", temp: "45.2°C", riskScore: 94, severity: "Severe (Red)" },
    { rank: 2, district: "Wardha", state: "Maharashtra", temp: "44.8°C", riskScore: 89, severity: "Severe (Red)" },
    { rank: 3, district: "Chandrapur", state: "Maharashtra", temp: "44.1°C", riskScore: 85, severity: "Orange" },
    { rank: 4, district: "Ahmednagar", state: "Maharashtra", temp: "43.5°C", riskScore: 78, severity: "Orange" },
    { rank: 5, district: "Jaipur", state: "Rajasthan", temp: "43.0°C", riskScore: 72, severity: "Yellow" },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Regional Monitoring</h1>
          <p className="text-slate-500">Track hotspots, analyze district data, and manage IMD datasets.</p>
        </div>
        
        {/* Module 2: Filters */}
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search district..." 
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-slate-700 text-sm font-medium hover:bg-slate-50">
            <Filter size={16} /> Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Module 6: Hotspot Detection List */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
            <h2 className="font-bold text-slate-800 flex items-center gap-2">
              <Flame className="text-orange-500" size={20} /> Top Hotspots
            </h2>
          </div>
          <div className="divide-y divide-slate-100">
            {hotspots.map((spot) => (
              <div key={spot.rank} className="p-4 hover:bg-slate-50 transition cursor-pointer flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 text-sm">
                    #{spot.rank}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{spot.district}</h3>
                    <p className="text-xs text-slate-500">{spot.state}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-slate-900">{spot.temp}</div>
                  <div className={`text-xs font-semibold px-2 py-1 rounded-full mt-1 
                    ${spot.severity.includes('Red') ? 'bg-red-100 text-red-700' : 
                      spot.severity.includes('Orange') ? 'bg-orange-100 text-orange-700' : 
                      'bg-yellow-100 text-yellow-700'}`}>
                    {spot.severity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Module 5: GIS / Map Placeholder & Detailed Data */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-96 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-slate-900">GIS Heat Map</h2>
              <button className="text-sm text-orange-600 font-medium flex items-center gap-1 hover:underline">
                Expand Map <ArrowUpRight size={16} />
              </button>
            </div>
            <div className="flex-1 bg-slate-100 rounded-lg flex items-center justify-center border-2 border-slate-200 border-dashed relative">
              {/* Map Legend Mockup */}
              <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-sm border border-slate-200 text-xs font-medium flex flex-col gap-2">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500"></span> Severe</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-orange-500"></span> Heatwave</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-yellow-400"></span> Warm</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500"></span> Normal</div>
              </div>
              <p className="text-slate-500 font-medium text-center px-4">
                Integrate Leaflet.js, Mapbox, or Google Maps here.<br/>
                Map state bound polygons colored by `riskScore`.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherMonitoring;