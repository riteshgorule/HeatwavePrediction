import React from 'react';
import { MapPin, Cpu } from 'lucide-react';

const HotspotCard = ({ hotspot }) => {
  const getSeverityStyle = (color) => {
    switch (color) {
      case 'red':
        return { bg: 'bg-rose-600', text: 'text-rose-700', badge: 'bg-rose-100 text-rose-900 border-rose-200' };
      case 'orange':
        return { bg: 'bg-amber-600', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-900 border-amber-200' };
      case 'yellow':
        return { bg: 'bg-amber-500', text: 'text-amber-700', badge: 'bg-amber-50 text-amber-800 border-amber-200' };
      default:
        return { bg: 'bg-emerald-600', text: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-900 border-emerald-200' };
    }
  };

  const style = getSeverityStyle(hotspot.riskColor);

  return (
    <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono text-stone-400 font-bold">#{hotspot.rank}</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${style.badge}`}>
                {hotspot.status}
              </span>
            </div>
            <h3 className="text-base font-extrabold text-stone-900">
              {hotspot.city}
            </h3>
            <p className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
              <MapPin size={12} /> {hotspot.state} ({hotspot.region})
            </p>
          </div>

          <div className="text-right">
            <div className="text-xl font-extrabold text-stone-900">{hotspot.temp}°C</div>
            <span className="text-[10px] text-stone-400 font-mono">Max Peak</span>
          </div>
        </div>

        {/* Risk Score Progress Bar */}
        <div className="space-y-1 my-3">
          <div className="flex justify-between text-xs font-bold">
            <span className="text-stone-600">Risk Score</span>
            <span className={style.text}>{hotspot.riskScore} / 100</span>
          </div>
          <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden">
            <div className={`h-full rounded-full ${style.bg}`} style={{ width: `${hotspot.riskScore}%` }} />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-stone-100 text-xs">
        <div className="bg-stone-50 p-2 rounded-lg border border-stone-200/60">
          <span className="text-[10px] text-stone-400 font-medium block">AI Confidence</span>
          <span className="font-bold text-stone-800 flex items-center gap-1 mt-0.5">
            <Cpu size={13} className="text-amber-800" />
            {hotspot.confidence}%
          </span>
        </div>
        <div className="bg-stone-50 p-2 rounded-lg border border-stone-200/60">
          <span className="text-[10px] text-stone-400 font-medium block">Humidity</span>
          <span className="font-bold text-stone-800 mt-0.5 block">
            {hotspot.humidity}% RH
          </span>
        </div>
      </div>
    </div>
  );
};

export default HotspotCard;
