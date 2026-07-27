import React from 'react';

const ChartCard = ({ title, subtitle, children, actionButton }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
        <div>
          <h2 className="text-base font-bold text-stone-900">{title}</h2>
          {subtitle && <p className="text-xs text-stone-500 mt-0.5">{subtitle}</p>}
        </div>
        {actionButton}
      </div>
      <div className="w-full flex-1 min-h-[260px]">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;
