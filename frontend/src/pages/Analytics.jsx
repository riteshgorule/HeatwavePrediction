import React, { useState } from 'react';
import { BarChart3 } from 'lucide-react';
import ChartCard from '../components/ChartCard';
import { mockAnalyticsData } from '../data/mockData';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  AreaChart, 
  Area, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  CartesianGrid 
} from 'recharts';

const Analytics = () => {
  const [timeframe, setTimeframe] = useState('30D');

  return (
    <div className="space-y-6">
      
      {/* Title */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl border border-stone-200 shadow-xs">
        <div>
          <h1 className="text-2xl font-extrabold text-stone-900 flex items-center gap-2">
            <BarChart3 className="text-amber-800" size={24} /> Analytics & Performance
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Recharts analytics visualizing seasonal heat anomalies, regional distribution, and model confidence.
          </p>
        </div>

        <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-lg border border-stone-200">
          {['7D', '30D', 'YTD'].map(tf => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-3 py-1 rounded text-xs font-bold transition ${
                timeframe === tf 
                  ? 'bg-stone-900 text-white shadow-xs' 
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* CHARTS GRID 1: Multi-City Trend & Region Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <ChartCard
          title="Multi-City Temperature Trend (°C)"
          subtitle="7-day peak temperature progression across observation stations."
        >
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={mockAnalyticsData.tempTrend7Days}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
              <XAxis dataKey="date" stroke="#78716c" fontSize={11} />
              <YAxis domain={[35, 48]} stroke="#78716c" fontSize={11} unit="°C" />
              <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '8px', color: '#fff', fontSize: '12px' }} />
              <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
              <Line type="monotone" dataKey="Nagpur" stroke="#9f1239" strokeWidth={2.5} />
              <Line type="monotone" dataKey="Jaipur" stroke="#c2410c" strokeWidth={2} />
              <Line type="monotone" dataKey="Delhi" stroke="#b45309" strokeWidth={2} />
              <Line type="monotone" dataKey="Ahmedabad" stroke="#0369a1" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Regional Temperature Matrix"
          subtitle="Comparing average vs maximum recorded temperatures by region."
        >
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={mockAnalyticsData.regionComparison}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
              <XAxis dataKey="region" stroke="#78716c" fontSize={11} />
              <YAxis domain={[30, 50]} stroke="#78716c" fontSize={11} unit="°C" />
              <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '8px', color: '#fff', fontSize: '12px' }} />
              <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
              <Bar dataKey="avgTemp" fill="#b45309" radius={[4, 4, 0, 0]} name="Avg Temp (°C)" />
              <Bar dataKey="maxTemp" fill="#9f1239" radius={[4, 4, 0, 0]} name="Max Temp (°C)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

      </div>

      {/* CHARTS GRID 2: Monthly Heatwave Count & Severity Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2">
          <ChartCard
            title="Monthly Heatwave Event Frequency"
            subtitle="Accumulated total heatwave alerts vs severe alerts."
          >
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={mockAnalyticsData.monthlyHeatwaveCounts}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
                <XAxis dataKey="month" stroke="#78716c" fontSize={11} />
                <YAxis stroke="#78716c" fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '8px', color: '#fff', fontSize: '12px' }} />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                <Area type="monotone" dataKey="alerts" stroke="#c2410c" fill="#c2410c" fillOpacity={0.15} name="Total Alerts" />
                <Area type="monotone" dataKey="severeAlerts" stroke="#9f1239" fill="#9f1239" fillOpacity={0.3} name="Severe Alerts" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <div className="lg:col-span-1">
          <ChartCard
            title="Severity Distribution"
            subtitle="Proportional alert level breakdown."
          >
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={mockAnalyticsData.severityDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={75}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {mockAnalyticsData.severityDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '8px', color: '#fff', fontSize: '12px' }} />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

      </div>

      {/* CHARTS GRID 3: Model Accuracy & Confidence */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <ChartCard
          title="Prediction Accuracy Over Time"
          subtitle="Ground station actuals vs AI model predicted curves."
        >
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={mockAnalyticsData.predictionAccuracyHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
              <XAxis dataKey="week" stroke="#78716c" fontSize={11} />
              <YAxis domain={[38, 48]} stroke="#78716c" fontSize={11} unit="°C" />
              <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '8px', color: '#fff', fontSize: '12px' }} />
              <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
              <Line type="monotone" dataKey="actual" stroke="#047857" strokeWidth={2.5} name="Actual Ground Station" />
              <Line type="monotone" dataKey="predicted" stroke="#b45309" strokeWidth={2} strokeDasharray="4 4" name="AI Predicted" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Regional Model Confidence Index (%)"
          subtitle="Model reliability calculated per station cluster."
        >
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={mockAnalyticsData.forecastConfidenceByRegion} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
              <XAxis type="number" domain={[80, 100]} stroke="#78716c" fontSize={11} unit="%" />
              <YAxis dataKey="region" type="category" stroke="#78716c" fontSize={11} width={85} />
              <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '8px', color: '#fff', fontSize: '12px' }} />
              <Bar dataKey="confidence" fill="#047857" radius={[0, 4, 4, 0]} name="Confidence %" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

      </div>

    </div>
  );
};

export default Analytics;
