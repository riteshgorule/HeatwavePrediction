import React from 'react';
import { AlertTriangle, Flame, CheckCircle2, Clock, MapPin, Download, ShieldAlert } from 'lucide-react';

const AlertCard = ({ alert }) => {
  const getBadgeStyle = (code) => {
    switch (code) {
      case 'red':
        return {
          border: 'border-rose-200',
          bg: 'bg-white',
          badgeBg: 'bg-rose-900/80 text-rose-100 border border-rose-700/50',
          text: 'text-rose-900',
          iconColor: 'text-rose-700'
        };
      case 'orange':
        return {
          border: 'border-amber-200',
          bg: 'bg-white',
          badgeBg: 'bg-amber-900/80 text-amber-100 border border-amber-700/50',
          text: 'text-amber-900',
          iconColor: 'text-amber-700'
        };
      case 'yellow':
        return {
          border: 'border-stone-200',
          bg: 'bg-white',
          badgeBg: 'bg-stone-800 text-amber-300 border border-stone-700',
          text: 'text-stone-900',
          iconColor: 'text-amber-600'
        };
      default:
        return {
          border: 'border-stone-200',
          bg: 'bg-white',
          badgeBg: 'bg-emerald-100 text-emerald-900 border border-emerald-200',
          text: 'text-stone-900',
          iconColor: 'text-emerald-700'
        };
    }
  };

  const style = getBadgeStyle(alert.code);

  return (
    <div className={`p-5 rounded-xl border ${style.border} ${style.bg} shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between`}>
      <div>
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${style.badgeBg}`}>
              {alert.level}
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-stone-700">
              <MapPin size={13} className="text-stone-400" />
              {alert.city}, {alert.state}
            </span>
          </div>
          <span className="text-lg font-extrabold text-stone-900">
            {alert.temp}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold text-stone-900 mb-1.5 flex items-center gap-2">
          <AlertTriangle size={16} className={style.iconColor} />
          {alert.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-stone-600 leading-relaxed mb-3">
          {alert.description}
        </p>

        {/* Recommended Action */}
        <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs">
          <span className="font-bold text-stone-900 block mb-0.5">Recommended Action:</span>
          <span className="text-stone-600 leading-normal">{alert.recommendedAction}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-mono">
        <div className="flex items-center gap-1">
          <Clock size={12} />
          <span>Issued: {alert.timestamp}</span>
        </div>
        <button 
          onClick={() => alert(`Exporting advisory PDF for ${alert.city}`)}
          className="flex items-center gap-1 text-amber-900 font-bold hover:underline"
        >
          <Download size={12} /> PDF
        </button>
      </div>
    </div>
  );
};

export default AlertCard;
