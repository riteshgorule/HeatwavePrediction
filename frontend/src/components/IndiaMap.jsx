import React, { useState } from 'react';
import { mockIndiaStatesMapData } from '../data/mockData';
import { MapPin, Info, ArrowUpRight, Flame, ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';

const statePaths = {
  RJ: { name: "Rajasthan", path: "M 130 140 L 190 120 L 220 160 L 210 220 L 140 240 L 110 190 Z" },
  MH: { name: "Maharashtra", path: "M 150 290 L 240 280 L 260 340 L 190 370 L 140 330 Z" },
  UP: { name: "Uttar Pradesh", path: "M 220 160 L 310 150 L 330 210 L 250 220 L 220 190 Z" },
  GJ: { name: "Gujarat", path: "M 90 230 L 150 240 L 160 290 L 100 310 L 80 270 Z" },
  DL: { name: "Delhi", path: "M 225 175 L 235 175 L 235 185 L 225 185 Z" },
  MP: { name: "Madhya Pradesh", path: "M 190 220 L 280 220 L 270 280 L 170 280 Z" },
  TS: { name: "Telangana", path: "M 220 330 L 280 320 L 270 370 L 220 370 Z" },
  AP: { name: "Andhra Pradesh", path: "M 220 370 L 290 360 L 270 440 L 210 430 Z" },
  BR: { name: "Bihar", path: "M 330 180 L 390 180 L 380 230 L 320 220 Z" },
  OR: { name: "Odisha", path: "M 280 280 L 350 270 L 340 330 L 270 330 Z" },
  KA: { name: "Karnataka", path: "M 170 370 L 220 370 L 210 440 L 160 420 Z" },
  TN: { name: "Tamil Nadu", path: "M 200 440 L 260 440 L 230 500 L 180 480 Z" },
  WB: { name: "West Bengal", path: "M 360 220 L 400 210 L 390 270 L 350 260 Z" }
};

const IndiaMap = ({ onSelectState, selectedStateId }) => {
  const [hoveredState, setHoveredState] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const getSeverityColor = (code) => {
    switch (code) {
      case 'red':
        return '#F43F5E'; // rose-500
      case 'orange':
        return '#FB923C'; // orange-400
      case 'yellow':
        return '#FBBF24'; // amber-400
      case 'green':
        return '#34D399'; // emerald-400
      default:
        return '#9CA3AF';
    }
  };

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 2));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div className="relative w-full h-[520px] bg-slate-900/90 dark:bg-slate-950 rounded-2xl p-4 overflow-hidden border border-slate-800 shadow-2xl flex flex-col justify-between">
      {/* Map Header Controls */}
      <div className="flex justify-between items-center z-10">
        <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-700">
          <Flame className="text-rose-500 animate-pulse" size={18} />
          <span className="text-xs font-bold text-slate-100">Live Thermal Satellite Overlay</span>
        </div>

        <div className="flex items-center gap-1 bg-slate-800/80 backdrop-blur p-1 rounded-lg border border-slate-700">
          <button onClick={handleZoomIn} className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition" title="Zoom In">
            <ZoomIn size={16} />
          </button>
          <button onClick={handleZoomOut} className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition" title="Zoom Out">
            <ZoomOut size={16} />
          </button>
          <button onClick={handleResetZoom} className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition" title="Reset View">
            <RefreshCw size={16} />
          </button>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 500 540"
          className="w-full h-full max-h-[460px] transition-transform duration-300 ease-out"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* Outline Glow Filter */}
          <defs>
            <filter id="glow-red" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Render States */}
          {mockIndiaStatesMapData.map((state) => {
            const pathInfo = statePaths[state.id];
            if (!pathInfo) return null;
            const isSelected = selectedStateId === state.id;
            const isHovered = hoveredState?.id === state.id;
            const fillColor = getSeverityColor(state.code);

            return (
              <g key={state.id}>
                <path
                  d={pathInfo.path}
                  fill={fillColor}
                  fillOpacity={isSelected ? 0.95 : isHovered ? 0.85 : 0.65}
                  stroke={isSelected ? '#FFFFFF' : '#1E293B'}
                  strokeWidth={isSelected ? 3 : 1.5}
                  className="cursor-pointer transition-all duration-200 hover:stroke-white hover:stroke-2"
                  onClick={() => onSelectState(state)}
                  onMouseEnter={() => setHoveredState(state)}
                  onMouseLeave={() => setHoveredState(null)}
                />
                <text
                  x={getPathCenter(pathInfo.path).x}
                  y={getPathCenter(pathInfo.path).y}
                  fill="#FFFFFF"
                  fontSize="11"
                  fontWeight="bold"
                  textAnchor="middle"
                  pointerEvents="none"
                  className="drop-shadow-md select-none"
                >
                  {state.id}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Floating Tooltip */}
        {hoveredState && (
          <div className="absolute top-4 left-4 bg-slate-950/90 text-white px-4 py-2.5 rounded-xl border border-slate-700 shadow-xl backdrop-blur z-20 animate-in fade-in duration-150">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-sm">{hoveredState.name}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                hoveredState.code === 'red' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' :
                hoveredState.code === 'orange' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                hoveredState.code === 'yellow' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
              }`}>
                {hoveredState.severity}
              </span>
            </div>
            <div className="text-xs text-slate-300 flex items-center gap-3">
              <span>Temp: <strong className="text-white">{hoveredState.temp}</strong></span>
              <span>Risk Prob: <strong className="text-amber-400">{hoveredState.heatwaveProb}%</strong></span>
            </div>
          </div>
        )}
      </div>

      {/* Legend Bar */}
      <div className="z-10 bg-slate-800/80 backdrop-blur p-2.5 rounded-xl border border-slate-700 flex flex-wrap justify-between items-center text-xs text-slate-300">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-slate-400">Severity Level:</span>
          <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-rose-500"></span> Severe (Red)</div>
          <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-orange-400"></span> Heatwave (Orange)</div>
          <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-amber-400"></span> Warning (Yellow)</div>
          <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-emerald-400"></span> Normal (Green)</div>
        </div>
        <span className="text-[11px] text-slate-400 hidden md:inline">Click any state path to open regional insights</span>
      </div>
    </div>
  );
};

// Simple helper function to estimate polygon center for text label
function getPathCenter(pathStr) {
  const coords = pathStr.match(/(-?\d+(\.\d+)?)/g);
  if (!coords || coords.length < 2) return { x: 250, y: 250 };
  let sumX = 0, sumY = 0, count = 0;
  for (let i = 0; i < coords.length - 1; i += 2) {
    sumX += parseFloat(coords[i]);
    sumY += parseFloat(coords[i + 1]);
    count++;
  }
  return { x: sumX / count, y: sumY / count };
}

export default IndiaMap;
