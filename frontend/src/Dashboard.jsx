import React from 'react';
import { ThermometerSun, AlertTriangle, MapPin, Activity, Bell } from 'lucide-react';

const Dashboard = () => {
  // Mock data based on your requirements
  const stats = [
    { title: "Current Avg Temp", value: "38°C", trend: "+2°C from yesterday", icon: ThermometerSun, color: "text-orange-500", bg: "bg-orange-100" },
    { title: "Active Alerts", value: "12", trend: "4 Severe, 8 Orange", icon: AlertTriangle, color: "text-red-500", bg: "bg-red-100" },
    { title: "Highest Recorded", value: "45°C", trend: "Nagpur, Maharashtra", icon: Activity, color: "text-red-600", bg: "bg-red-50" },
    { title: "Active Heatwave Regions", value: "5", trend: "Across 3 states", icon: MapPin, color: "text-yellow-600", bg: "bg-yellow-100" },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Heatwave Overview</h1>
          <p className="text-slate-500">Live monitoring and AI predictions for today.</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-50">
          <Bell size={18} /> View Notifications
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
            </div>
            <h3 className="text-slate-500 text-sm font-medium mb-1">{stat.title}</h3>
            <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
            <p className="text-xs text-slate-500 font-medium">{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Forecast Analytics Placeholder */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">7-Day Temperature Trend</h2>
          <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100 border-dashed">
            <p className="text-slate-400 font-medium">Chart.js / Recharts Component Goes Here</p>
          </div>
        </div>

        {/* AI Advisory Panel */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="text-red-500" size={24} />
            <h2 className="text-xl font-bold text-slate-900">Severe Alert: Nagpur</h2>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold text-red-900">Predicted Max</span>
              <span className="font-bold text-red-700">44°C</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold text-red-900">Probability</span>
              <span className="font-bold text-red-700">93%</span>
            </div>
            <div className="w-full bg-red-200 rounded-full h-2 mt-2">
              <div className="bg-red-600 h-2 rounded-full" style={{ width: '93%' }}></div>
            </div>
          </div>
          
          <h3 className="font-bold text-slate-800 text-sm mb-2">AI Generated Advisory</h3>
          <ul className="space-y-3">
            <li className="text-sm text-slate-600"><span className="font-bold text-slate-800">Citizens:</span> Avoid outdoor activities between 12 PM - 4 PM.</li>
            <li className="text-sm text-slate-600"><span className="font-bold text-slate-800">Hospitals:</span> Prepare emergency wards for heatstroke cases.</li>
            <li className="text-sm text-slate-600"><span className="font-bold text-slate-800">Farmers:</span> Increase irrigation. Avoid afternoon field work.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;