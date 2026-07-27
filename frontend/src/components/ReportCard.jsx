import React from 'react';
import { FileText, Download, Eye, Calendar, HardDrive, CheckCircle2 } from 'lucide-react';

const ReportCard = ({ report, onPreview }) => {
  return (
    <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-3">
          <div className="p-2.5 rounded-lg bg-stone-100 text-stone-700 border border-stone-200">
            <FileText size={20} />
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase bg-stone-100 text-stone-700 border border-stone-200">
            {report.type}
          </span>
        </div>

        <h3 className="text-sm font-bold text-stone-900 mb-2 leading-snug">
          {report.title}
        </h3>

        <div className="space-y-1 text-xs text-stone-500 mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar size={13} className="text-amber-800" />
            <span>{report.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <HardDrive size={13} />
            <span>Size: {report.size}</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="pt-3 border-t border-stone-100 grid grid-cols-3 gap-2">
        <button
          onClick={() => onPreview(report)}
          className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition"
        >
          <Eye size={13} /> Preview
        </button>
        <button
          onClick={() => alert(`Downloading PDF report: ${report.title}`)}
          className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-stone-900 hover:bg-amber-900 text-white text-xs font-bold transition"
        >
          <Download size={13} /> PDF
        </button>
        <button
          onClick={() => alert(`Exporting CSV dataset for ${report.title}`)}
          className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition"
        >
          CSV
        </button>
      </div>
    </div>
  );
};

export default ReportCard;
