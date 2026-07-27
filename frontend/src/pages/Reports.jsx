import React, { useState } from 'react';
import { FileText, Download, Eye, Search, X } from 'lucide-react';
import { mockReportsList } from '../data/mockData';
import ReportCard from '../components/ReportCard';

const Reports = () => {
  const [selectedReportPreview, setSelectedReportPreview] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const filteredHistory = mockReportsList.filter(rep => {
    const matchesSearch = rep.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          rep.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || rep.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      
      {/* Title */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl border border-stone-200 shadow-xs">
        <div>
          <h1 className="text-2xl font-extrabold text-stone-900 flex items-center gap-2">
            <FileText className="text-amber-800" size={24} /> Reports & Downloads
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Certified daily risk bulletins, weekly climate summaries, and CSV data exports.
          </p>
        </div>
      </div>

      {/* FEATURED REPORT CARDS */}
      <div>
        <h2 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">
          Featured Reports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {mockReportsList.slice(0, 3).map((report) => (
            <ReportCard 
              key={report.id} 
              report={report} 
              onPreview={(rep) => setSelectedReportPreview(rep)} 
            />
          ))}
        </div>
      </div>

      {/* HISTORICAL REPORTS TABLE */}
      <div className="bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden p-6 space-y-4">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 border-b border-stone-100 pb-3">
          <div>
            <h3 className="text-base font-bold text-stone-900">Archive History</h3>
            <p className="text-xs text-stone-500">Historical dataset releases and official climate reports.</p>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-56">
              <Search className="absolute left-3 top-2.5 text-stone-400" size={15} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search history..."
                className="w-full pl-8 pr-3 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium focus:outline-none"
              />
            </div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="py-1.5 px-2.5 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium focus:outline-none"
            >
              <option value="All">All Types</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-500">
                <th className="p-3.5">Report Title</th>
                <th className="p-3.5">Period</th>
                <th className="p-3.5">Size</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredHistory.map((rep) => (
                <tr key={rep.id} className="hover:bg-stone-50 transition">
                  <td className="p-3.5 font-bold text-stone-900">
                    <div>
                      <span className="font-bold text-xs">{rep.title}</span>
                      <span className="text-[11px] text-stone-400 font-mono block mt-0.5">{rep.id} • {rep.date}</span>
                    </div>
                  </td>
                  <td className="p-3.5 text-stone-600 font-medium">{rep.period}</td>
                  <td className="p-3.5 text-stone-600 font-mono text-[11px]">{rep.size}</td>
                  <td className="p-3.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-200">
                      {rep.status}
                    </span>
                  </td>
                  <td className="p-3.5 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => setSelectedReportPreview(rep)}
                        className="p-1.5 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs transition"
                        title="Preview"
                      >
                        <Eye size={13} />
                      </button>
                      <button
                        onClick={() => alert(`Downloading PDF: ${rep.title}`)}
                        className="p-1.5 rounded bg-stone-900 hover:bg-amber-900 text-white font-bold text-xs transition"
                        title="Download PDF"
                      >
                        <Download size={13} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* PREVIEW MODAL */}
      {selectedReportPreview && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 md:p-10 flex justify-center items-center">
          <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs" onClick={() => setSelectedReportPreview(null)} />
          
          <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden z-10 p-6 space-y-4 animate-in zoom-in-95 duration-150">
            <div className="flex justify-between items-start border-b border-stone-200 pb-3">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-700 uppercase">
                  {selectedReportPreview.type} Preview
                </span>
                <h3 className="text-lg font-extrabold text-stone-900 mt-1">{selectedReportPreview.title}</h3>
                <span className="text-xs text-stone-400 font-mono">{selectedReportPreview.id}</span>
              </div>
              <button onClick={() => setSelectedReportPreview(null)} className="p-1 text-stone-400 hover:text-stone-700 rounded">
                <X size={18} />
              </button>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3 text-xs leading-relaxed text-stone-700">
              <h4 className="font-bold text-stone-900 text-xs">Summary</h4>
              <p>
                During <strong>{selectedReportPreview.date}</strong>, thermal sensors recorded maximum temperature peaks reaching 46.2°C in Phalodi, Rajasthan, with Vidarbha registering 3 consecutive severe heatwave days.
              </p>
              <p>
                Ground station validation confirmed AI model accuracy at 95.4%. Public safety advisories were dispatched to 14 municipal bodies.
              </p>
              <div className="p-2.5 bg-white rounded border border-stone-200 font-mono text-[11px] text-stone-500">
                Size: {selectedReportPreview.size} • Verified IMD Node
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setSelectedReportPreview(null)}
                className="py-2 px-3.5 rounded-lg bg-stone-100 text-stone-700 text-xs font-bold hover:bg-stone-200 transition"
              >
                Close
              </button>
              <button
                onClick={() => alert(`Downloading ${selectedReportPreview.title}`)}
                className="py-2 px-4 rounded-lg bg-stone-900 hover:bg-amber-900 text-white text-xs font-bold transition flex items-center gap-1.5"
              >
                <Download size={13} /> Download PDF
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Reports;
