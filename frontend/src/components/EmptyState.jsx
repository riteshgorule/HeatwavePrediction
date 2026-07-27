import React from 'react';
import { SearchX, RefreshCw } from 'lucide-react';

const EmptyState = ({ title = 'No results found', description = 'Try adjusting your search terms or filter criteria.', onReset }) => {
  return (
    <div className="bg-white rounded-xl p-10 text-center border border-stone-200 flex flex-col items-center justify-center my-4">
      <div className="p-3.5 rounded-full bg-stone-100 text-stone-500 mb-3">
        <SearchX size={30} />
      </div>
      <h3 className="text-sm font-bold text-stone-900 mb-1">{title}</h3>
      <p className="text-xs text-stone-500 max-w-xs mb-4 leading-relaxed">{description}</p>
      {onReset && (
        <button
          onClick={onReset}
          className="flex items-center gap-1.5 py-2 px-4 rounded-lg bg-stone-900 hover:bg-amber-900 text-white text-xs font-semibold transition"
        >
          <RefreshCw size={13} /> Reset Filters
        </button>
      )}
    </div>
  );
};

export default EmptyState;
