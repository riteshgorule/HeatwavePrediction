import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ArrowUpDown, 
  Flame, 
  Thermometer, 
  Droplets, 
  Wind, 
  RefreshCw, 
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { mockCitiesWeather } from '../data/mockData';
import EmptyState from '../components/EmptyState';

const WeatherMonitoring = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedState, setSelectedState] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedDate, setSelectedDate] = useState('2026-07-26');
  const [sortField, setSortField] = useState('temp');
  const [sortDirection, setSortDirection] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const regions = useMemo(() => ['All', ...new Set(mockCitiesWeather.map(item => item.region))], []);
  const states = useMemo(() => ['All', ...new Set(mockCitiesWeather.map(item => item.state))], []);

  const filteredData = useMemo(() => {
    return mockCitiesWeather.filter(item => {
      const matchesSearch = item.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.state.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = selectedRegion === 'All' || item.region === selectedRegion;
      const matchesState = selectedState === 'All' || item.state === selectedState;
      const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;
      return matchesSearch && matchesRegion && matchesState && matchesStatus;
    }).sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];
      if (typeof aVal === 'string') {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }
      if (sortDirection === 'asc') return aVal > bVal ? 1 : -1;
      return aVal < bVal ? 1 : -1;
    });
  }, [searchTerm, selectedRegion, selectedState, selectedStatus, sortField, sortDirection]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedRegion('All');
    setSelectedState('All');
    setSelectedStatus('All');
    setSortField('temp');
    setSortDirection('desc');
    setCurrentPage(1);
  };

  const getStatusBadge = (color) => {
    switch (color) {
      case 'red':
        return 'bg-rose-100 text-rose-900 border-rose-200';
      case 'orange':
        return 'bg-amber-100 text-amber-900 border-amber-200';
      case 'yellow':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      default:
        return 'bg-emerald-100 text-emerald-900 border-emerald-200';
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Title */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl border border-stone-200 shadow-xs">
        <div>
          <h1 className="text-2xl font-extrabold text-stone-900">Weather Monitoring</h1>
          <p className="text-xs text-stone-500 mt-1">
            Real-time district meteorological readings, station data, and temperature alerts.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-stone-600 flex items-center gap-1.5 bg-stone-50 px-3 py-1.5 rounded-lg border border-stone-200">
            <Calendar size={14} className="text-amber-800" />
            <input 
              type="date" 
              value={selectedDate} 
              onChange={(e) => setSelectedDate(e.target.value)} 
              className="bg-transparent focus:outline-none cursor-pointer"
            />
          </span>
          <button 
            onClick={handleReset} 
            className="p-2 rounded-lg bg-stone-100 text-stone-600 hover:bg-stone-200 transition"
            title="Reset Filters"
          >
            <RefreshCw size={15} />
          </button>
        </div>
      </div>

      {/* FILTERS BAR */}
      <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-stone-400" size={16} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              placeholder="Search city or state..."
              className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium focus:outline-none focus:ring-1 focus:ring-amber-800"
            />
          </div>

          {/* Region */}
          <div>
            <select
              value={selectedRegion}
              onChange={(e) => { setSelectedRegion(e.target.value); setCurrentPage(1); }}
              className="w-full py-2 px-3 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium focus:outline-none"
            >
              <option value="All">All Regions</option>
              {regions.filter(r => r !== 'All').map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>

          {/* State */}
          <div>
            <select
              value={selectedState}
              onChange={(e) => { setSelectedState(e.target.value); setCurrentPage(1); }}
              className="w-full py-2 px-3 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium focus:outline-none"
            >
              <option value="All">All States</option>
              {states.filter(s => s !== 'All').map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          {/* Status */}
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => { setSelectedStatus(e.target.value); setCurrentPage(1); }}
              className="w-full py-2 px-3 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium focus:outline-none"
            >
              <option value="All">All Status Levels</option>
              <option value="Severe">Severe (Red)</option>
              <option value="Heatwave">Heatwave (Orange)</option>
              <option value="Warning">Warning (Yellow)</option>
              <option value="Normal">Normal (Green)</option>
            </select>
          </div>

        </div>
      </div>

      {/* DATA TABLE */}
      <div className="bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden">
        {filteredData.length === 0 ? (
          <EmptyState onReset={handleReset} />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-500">
                  <th className="p-3.5 cursor-pointer hover:text-stone-900" onClick={() => handleSort('city')}>
                    <div className="flex items-center gap-1">City & State <ArrowUpDown size={12} /></div>
                  </th>
                  <th className="p-3.5 cursor-pointer hover:text-stone-900" onClick={() => handleSort('temp')}>
                    <div className="flex items-center gap-1">Temperature <ArrowUpDown size={12} /></div>
                  </th>
                  <th className="p-3.5 cursor-pointer hover:text-stone-900" onClick={() => handleSort('humidity')}>
                    <div className="flex items-center gap-1">Humidity <ArrowUpDown size={12} /></div>
                  </th>
                  <th className="p-3.5 cursor-pointer hover:text-stone-900" onClick={() => handleSort('windSpeed')}>
                    <div className="flex items-center gap-1">Wind Speed <ArrowUpDown size={12} /></div>
                  </th>
                  <th className="p-3.5 cursor-pointer hover:text-stone-900" onClick={() => handleSort('status')}>
                    <div className="flex items-center gap-1">Status Badge <ArrowUpDown size={12} /></div>
                  </th>
                  <th className="p-3.5">Last Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-xs">
                {paginatedData.map((row) => (
                  <tr key={row.id} className="hover:bg-stone-50 transition">
                    
                    <td className="p-3.5 font-bold text-stone-900">
                      <div className="flex items-center gap-2">
                        <MapPin size={15} className="text-amber-800 shrink-0" />
                        <div>
                          <div className="text-xs font-bold">{row.city}</div>
                          <div className="text-[11px] text-stone-400 font-normal">{row.state} • {row.region}</div>
                        </div>
                      </div>
                    </td>

                    <td className="p-3.5">
                      <div className="flex items-center gap-1 font-bold text-stone-900">
                        <Thermometer size={15} className="text-rose-600" />
                        {row.temp}°C
                      </div>
                    </td>

                    <td className="p-3.5 text-stone-600 font-medium">
                      <div className="flex items-center gap-1">
                        <Droplets size={13} className="text-stone-400" />
                        {row.humidity}% RH
                      </div>
                    </td>

                    <td className="p-3.5 text-stone-600 font-medium">
                      <div className="flex items-center gap-1">
                        <Wind size={13} className="text-stone-400" />
                        {row.windSpeed} km/h
                      </div>
                    </td>

                    <td className="p-3.5">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase border ${getStatusBadge(row.statusColor)}`}>
                        <Flame size={11} /> {row.status}
                      </span>
                    </td>

                    <td className="p-3.5 text-stone-400 font-mono text-[11px]">
                      {row.lastUpdated}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination Footer */}
        {filteredData.length > 0 && (
          <div className="p-3.5 bg-stone-50 border-t border-stone-200 flex justify-between items-center text-xs text-stone-500">
            <div>
              Showing <strong>{(currentPage - 1) * itemsPerPage + 1}</strong> to <strong>{Math.min(currentPage * itemsPerPage, filteredData.length)}</strong> of <strong>{filteredData.length}</strong> cities
            </div>
            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
                className="p-1.5 rounded bg-white border border-stone-200 disabled:opacity-40 hover:bg-stone-100 transition"
              >
                <ChevronLeft size={15} />
              </button>
              <span className="font-bold text-stone-900">Page {currentPage} of {totalPages}</span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="p-1.5 rounded bg-white border border-stone-200 disabled:opacity-40 hover:bg-stone-100 transition"
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default WeatherMonitoring;
