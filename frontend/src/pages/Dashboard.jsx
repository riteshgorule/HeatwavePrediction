import React, { useState } from 'react';
import { 
  ThermometerSun, 
  AlertTriangle, 
  MapPin, 
  Flame, 
  Target, 
  Clock, 
  ChevronRight, 
  Wind,
  Droplets
} from 'lucide-react';
import StatisticCard from '../components/StatisticCard';
import AlertCard from '../components/AlertCard';
import { 
  mockDashboardStats, 
  mockWeeklyForecast, 
  mockRecentActivities, 
  mockHotspots, 
  mockAlerts, 
  mockAnalyticsData 
} from '../data/mockData';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [selectedCityTrend, setSelectedCityTrend] = useState('Nagpur');

  return (
    <div className="space-y-8">
      
      {/* Clean Minimalist Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-2 border-b border-stone-200/60">
        <div>
          <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-xs text-stone-500 mt-0.5">
            Real-time heatwave telemetry and 72-hour AI model predictions.
          </p>
        </div>
        <Link 
          to="/ai-advisory"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-stone-900 hover:bg-amber-900 text-white text-xs font-semibold transition shadow-xs"
        >
          <span>AI Advisory Generator</span>
          <ChevronRight size={14} />
        </Link>
      </div>

      {/* TOP CARDS (5 Minimalist KPIs) */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        
        <div className="bg-white p-5 rounded-xl border border-stone-200/80 shadow-xs flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-[11px] font-medium uppercase tracking-wider text-stone-500">Avg Temperature</span>
            <ThermometerSun size={18} className="text-amber-700" />
          </div>
          <div className="text-2xl font-extrabold text-stone-900">{mockDashboardStats.currentAvgTemp}</div>
          <p className="text-[11px] text-stone-400 truncate">{mockDashboardStats.avgTempTrend}</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200/80 shadow-xs flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-[11px] font-medium uppercase tracking-wider text-stone-500">Active Alerts</span>
            <AlertTriangle size={18} className="text-rose-700" />
          </div>
          <div className="text-2xl font-extrabold text-stone-900">{mockDashboardStats.activeAlertsCount}</div>
          <p className="text-[11px] text-stone-400 truncate">{mockDashboardStats.alertsBreakdown}</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200/80 shadow-xs flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-[11px] font-medium uppercase tracking-wider text-stone-500">Affected Regions</span>
            <MapPin size={18} className="text-amber-800" />
          </div>
          <div className="text-2xl font-extrabold text-stone-900">{mockDashboardStats.affectedRegionsCount}</div>
          <p className="text-[11px] text-stone-400 truncate">{mockDashboardStats.affectedRegionsDetail}</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200/80 shadow-xs flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-[11px] font-medium uppercase tracking-wider text-stone-500">Highest Recorded</span>
            <Flame size={18} className="text-rose-800" />
          </div>
          <div className="text-2xl font-extrabold text-stone-900">{mockDashboardStats.highestRecordedTemp}</div>
          <p className="text-[11px] text-stone-400 truncate">{mockDashboardStats.highestLocation}</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200/80 shadow-xs flex flex-col justify-between space-y-2 col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-[11px] font-medium uppercase tracking-wider text-stone-500">Prediction Accuracy</span>
            <Target size={18} className="text-emerald-700" />
          </div>
          <div className="text-2xl font-extrabold text-stone-900">{mockDashboardStats.predictionAccuracy}</div>
          <p className="text-[11px] text-stone-400 truncate">{mockDashboardStats.accuracyDetail}</p>
        </div>

      </div>

      {/* MIDDLE SECTION: Temperature Trend Chart & Weekly Forecast */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 7-Day Temperature Trend (2 Cols) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-stone-200/80 shadow-xs flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
            <div>
              <h2 className="text-base font-bold text-stone-900">7-Day Temperature Trend</h2>
              <p className="text-xs text-stone-500">Max daytime temperature readings (°C)</p>
            </div>
            <div className="flex gap-1">
              {['Nagpur', 'Jaipur', 'Delhi', 'Ahmedabad'].map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCityTrend(city)}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition ${
                    selectedCityTrend === city 
                      ? 'bg-stone-900 text-white font-semibold' 
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockAnalyticsData.tempTrend7Days}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f4" />
                <XAxis dataKey="date" stroke="#a8a29e" fontSize={11} />
                <YAxis domain={[35, 48]} stroke="#a8a29e" fontSize={11} unit="°" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '6px', color: '#fff', fontSize: '11px' }}
                />
                <Line 
                  type="monotone" 
                  dataKey={selectedCityTrend} 
                  stroke="#b45309" 
                  strokeWidth={2} 
                  dot={{ r: 3, fill: '#b45309' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weekly Forecast (1 Col) */}
        <div className="bg-white p-6 rounded-xl border border-stone-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-bold text-stone-900">Weekly Forecast</h2>
              <span className="text-[10px] font-mono text-stone-400">7 Days</span>
            </div>

            <div className="space-y-2">
              {mockWeeklyForecast.map((fc, idx) => (
                <div key={idx} className="flex items-center justify-between py-1.5 border-b border-stone-100 last:border-0 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-stone-900 w-8">{fc.day}</span>
                    <span className="text-stone-400 text-[11px]">{fc.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${
                      fc.code === 'red' ? 'bg-rose-50 text-rose-800' :
                      fc.code === 'orange' ? 'bg-amber-50 text-amber-900' :
                      fc.code === 'yellow' ? 'bg-stone-100 text-stone-700' :
                      'bg-emerald-50 text-emerald-800'
                    }`}>
                      {fc.status}
                    </span>
                    <div className="text-right w-12 font-mono text-[11px]">
                      <span className="font-bold text-stone-900">{fc.maxTemp}°</span>
                      <span className="text-stone-400 ml-1">{fc.minTemp}°</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* LOWER SECTION: Hotspots, Alert Highlight, Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Top Hotspots Mini List */}
        <div className="bg-white p-6 rounded-xl border border-stone-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-bold text-stone-900">Top Hotspots</h2>
              <Link to="/hotspots" className="text-xs text-stone-500 hover:text-stone-900 transition">
                View All →
              </Link>
            </div>

            <div className="divide-y divide-stone-100">
              {mockHotspots.slice(0, 4).map((spot) => (
                <div key={spot.id} className="py-2.5 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-stone-900">{spot.city}</span>
                    <span className="text-stone-400 ml-1 text-[11px]">({spot.state})</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="font-extrabold text-stone-900">{spot.temp}°C</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      spot.riskColor === 'red' ? 'bg-rose-50 text-rose-800' : 'bg-amber-50 text-amber-900'
                    }`}>
                      Risk {spot.riskScore}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Latest Critical Alert Highlight */}
        <div className="bg-white p-6 rounded-xl border border-stone-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-base font-bold text-stone-900">Latest Active Alert</h2>
              <Link to="/alerts" className="text-xs text-stone-500 hover:text-stone-900 transition">
                All Alerts →
              </Link>
            </div>
            
            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200/60 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-900 uppercase">
                  {mockAlerts[0].level}
                </span>
                <span className="font-bold text-stone-900 text-sm">{mockAlerts[0].temp}</span>
              </div>
              <h3 className="font-bold text-xs text-stone-900">{mockAlerts[0].title}</h3>
              <p className="text-[11px] text-stone-600 leading-relaxed">{mockAlerts[0].description}</p>
              <div className="text-[10px] text-stone-400 font-mono pt-1">
                Location: {mockAlerts[0].city}, {mockAlerts[0].state}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-xl border border-stone-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-stone-900 mb-4">Recent System Log</h2>
            <div className="space-y-3">
              {mockRecentActivities.slice(0, 4).map((act) => (
                <div key={act.id} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-1.5 shrink-0" />
                  <div className="flex-1 pb-2 border-b border-stone-100 last:border-0">
                    <h4 className="font-semibold text-xs text-stone-900">{act.title}</h4>
                    <p className="text-[11px] text-stone-500">{act.target}</p>
                    <span className="text-[10px] text-stone-400 font-mono block mt-0.5">
                      {act.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
