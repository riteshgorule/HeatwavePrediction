import React from 'react';

const StatisticCard = ({ title, value, subtitle, icon: Icon, colorClass, bgClass, trend, badge }) => {
  return (
    <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className={`p-2.5 rounded-lg ${bgClass || 'bg-amber-100/80'} ${colorClass || 'text-amber-900'}`}>
            <Icon size={20} />
          </div>
          {badge && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase bg-stone-100 text-stone-700 border border-stone-200">
              {badge}
            </span>
          )}
        </div>
        <h3 className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1">{title}</h3>
        <div className="text-2xl font-extrabold text-stone-900 tracking-tight mb-1">{value}</div>
      </div>
      {subtitle && (
        <div className="pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
          <span>{subtitle}</span>
          {trend && <span className="font-semibold text-stone-700">{trend}</span>}
        </div>
      )}
    </div>
  );
};

export default StatisticCard;
