import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldAlert, 
  Map, 
  Brain, 
  Activity, 
  ArrowRight, 
  Thermometer, 
  Radio, 
  Cpu, 
  Satellite, 
  Bell, 
  Building2, 
  CheckCircle2, 
  ChevronRight, 
  Flame, 
  Zap, 
  FileText,
  Layers,
  ArrowUpRight
} from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('heatmap');
  const [activeDistrict, setActiveDistrict] = useState('Nagpur');

  // Simulated live telemetry & risk data with subtle color accents
  const districtData = {
    Nagpur: { temp: '46.2°C', anomaly: '+5.4°C', risk: 'SEVERE HEATWAVE', color: 'bg-rose-900/80 text-rose-200 border border-rose-700/50', alert: 'Red Alert', station: 'IMD Station 42809', humidity: '28%' },
    Ahmedabad: { temp: '44.8°C', anomaly: '+4.1°C', risk: 'HEATWAVE', color: 'bg-amber-900/80 text-amber-200 border border-amber-700/50', alert: 'Orange Alert', station: 'IMD Station 42634', humidity: '34%' },
    Jhansi: { temp: '45.1°C', anomaly: '+4.8°C', risk: 'SEVERE HEATWAVE', color: 'bg-rose-900/80 text-rose-200 border border-rose-700/50', alert: 'Red Alert', station: 'IMD Station 42475', humidity: '22%' },
    Delhi: { temp: '43.5°C', anomaly: '+3.6°C', risk: 'MODERATE HEATWAVE', color: 'bg-stone-800 text-amber-300 border border-stone-700', alert: 'Yellow Alert', station: 'IMD Station 42182', humidity: '31%' }
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  const handleMonitoringClick = () => {
    navigate('/monitoring');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans selection:bg-amber-900 selection:text-white bg-grid-pattern relative overflow-x-hidden">
      
      {/* Top Banner - IMD Official Collaboration Indicator (Subtle Muted Dark Bar) */}
      <div className="bg-[#1C1B1A] text-stone-300 text-xs font-mono py-2.5 px-4 border-b border-stone-800/80 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 max-w-7xl mx-auto w-full justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse"></span>
            <span className="font-semibold text-stone-200 tracking-wide">NATIONAL CLIMATE INITIATIVE</span>
            <span className="text-stone-600">|</span>
            <span className="text-stone-400">In Partnership with India Meteorological Department (IMD)</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-stone-400 text-[11px]">
            <span>INSAT-3D Telemetry: <strong className="text-emerald-400 font-normal">ACTIVE</strong></span>
            <span>AWS Stations: <strong className="text-stone-200 font-normal">3,420 Feed Nodes</strong></span>
            <span>System Status: <strong className="text-emerald-400 font-normal">NORMAL</strong></span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-stone-900 flex items-center justify-center text-amber-500 shadow-sm border border-stone-800">
              <Flame size={20} className="text-amber-500" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-stone-900">HEATGUARD</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-100/80 text-amber-900 font-bold border border-amber-200">AI • IMD</span>
              </div>
              <p className="text-[10px] text-stone-500 uppercase tracking-widest font-mono">Heatwave Early Warning Platform</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700">
            <a href="#features" className="hover:text-amber-800 transition-colors">Features</a>
            <a href="#about" className="hover:text-amber-800 transition-colors">About Project</a>
            <a href="#how-it-works" className="hover:text-amber-800 transition-colors">How It Works</a>
            <a href="#tech-stack" className="hover:text-amber-800 transition-colors">Technologies</a>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={handleMonitoringClick}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-all shadow-sm"
            >
              <Map size={16} className="text-stone-500" />
              <span>GIS Live Map</span>
            </button>
            
            <button 
              onClick={handleDashboardClick}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-stone-900 rounded-lg hover:bg-amber-900 transition-all shadow-sm group"
            >
              <span>View Dashboard</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-amber-400 group-hover:text-white" />
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 max-w-7xl mx-auto px-6">
        
        {/* Subtle Ambient Background Gradient */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-amber-900/5 pointer-events-none rounded-full blur-3xl" />

        <div className="relative text-center max-w-4xl mx-auto">
          
          {/* Partnership Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-stone-200 text-xs font-mono text-stone-700 shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-700 animate-pulse" />
            <span className="font-bold text-amber-900 uppercase tracking-wider">IMD Partnership</span>
            <span className="text-stone-300">•</span>
            <span className="text-stone-600 font-medium">Predictive Spatial Anomaly Intelligence Engine</span>
          </div>

          {/* Main Large Heading requested by user */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-stone-950 tracking-tight leading-[1.08] mb-8">
            AI-Powered Heatwave <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-amber-900 to-stone-800">
              Intelligence System
            </span>
          </h1>

          {/* Subtitle requested by user */}
          <p className="text-lg sm:text-xl md:text-2xl text-stone-600 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            Real-time monitoring, AI-based prediction, hotspot detection and early warning platform.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button 
              onClick={handleDashboardClick}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-xl font-bold text-base hover:bg-amber-900 transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <Activity size={20} className="text-amber-400" />
              <span>View Dashboard</span>
              <ArrowRight size={18} />
            </button>

            <a 
              href="#about"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-stone-800 border border-stone-300 rounded-xl font-bold text-base hover:bg-stone-100 transition-all shadow-sm hover:-translate-y-0.5"
            >
              <span>Learn More</span>
              <ChevronRight size={18} className="text-stone-400" />
            </a>
          </div>

          {/* Key Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-stone-200 shadow-sm text-left">
            <div className="p-4 border-r border-stone-100 last:border-r-0">
              <div className="text-2xl sm:text-3xl font-black text-stone-900 font-mono tracking-tight">96.4%</div>
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mt-1">Prediction Accuracy</div>
              <div className="text-[11px] text-stone-400 mt-0.5">Tested across 36 IMD meteorology sub-divisions</div>
            </div>
            
            <div className="p-4 border-r border-stone-100 last:border-r-0">
              <div className="text-2xl sm:text-3xl font-black text-amber-900 font-mono tracking-tight">7-14 Days</div>
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mt-1">Lead Time Warning</div>
              <div className="text-[11px] text-stone-400 mt-0.5">Advanced neural forecast window before onset</div>
            </div>

            <div className="p-4 border-r border-stone-100 last:border-r-0">
              <div className="text-2xl sm:text-3xl font-black text-stone-900 font-mono tracking-tight">3,400+</div>
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mt-1">Monitored Telemetry Nodes</div>
              <div className="text-[11px] text-stone-400 mt-0.5">AWS & INSAT-3D thermal radiometer streams</div>
            </div>

            <div className="p-4">
              <div className="text-2xl sm:text-3xl font-black text-stone-800 font-mono tracking-tight">4-Tier</div>
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mt-1">Early Warning Pipeline</div>
              <div className="text-[11px] text-stone-400 mt-0.5">Green, Yellow, Orange & Red advisory alerts</div>
            </div>
          </div>

        </div>

        {/* Interactive Showcase Widget (Subtle Obsidian Dark Container) */}
        <div className="mt-16 rounded-2xl bg-[#1C1B1A] border border-stone-800 text-stone-100 p-6 md:p-8 shadow-xl overflow-hidden relative">
          
          {/* Top Bar of Card Widget */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-800">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-bold">LIVE TELEMETRY DEMO</span>
              <span className="text-stone-700">|</span>
              <span className="text-xs text-stone-400 font-mono">IMD Spatial Anomaly Model v2.4</span>
            </div>

            <div className="flex items-center gap-2 bg-stone-900 p-1 rounded-xl border border-stone-800">
              <button 
                onClick={() => setActiveTab('heatmap')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                  activeTab === 'heatmap' ? 'bg-amber-900 text-white shadow-sm' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Hotspot Radar
              </button>
              <button 
                onClick={() => setActiveTab('forecast')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                  activeTab === 'forecast' ? 'bg-amber-900 text-white shadow-sm' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                7-Day Forecast Curve
              </button>
              <button 
                onClick={() => setActiveTab('alerts')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                  activeTab === 'alerts' ? 'bg-amber-900 text-white shadow-sm' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Alert Dispatch Feed
              </button>
            </div>
          </div>

          {/* Interactive Tab Contents */}
          {activeTab === 'heatmap' && (
            <div className="pt-6 grid lg:grid-cols-3 gap-6">
              
              {/* Left Column: District Telemetry Switcher */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">Vulnerability District Telemetry</h4>
                {Object.keys(districtData).map((district) => {
                  const isSelected = activeDistrict === district;
                  const data = districtData[district];
                  return (
                    <button
                      key={district}
                      onClick={() => setActiveDistrict(district)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                        isSelected 
                          ? 'bg-stone-900 border-amber-600/60 text-white shadow-md' 
                          : 'bg-stone-900/50 border-stone-800/80 text-stone-400 hover:border-stone-700 hover:text-stone-200'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm text-stone-100 flex items-center gap-2">
                          <span>{district}</span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${data.color}`}>
                            {data.alert}
                          </span>
                        </div>
                        <div className="text-xs text-stone-400 mt-1 font-mono">{data.station}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-black font-mono text-stone-100">{data.temp}</div>
                        <div className="text-xs font-mono text-amber-400">{data.anomaly} anomaly</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Center & Right Column: Interactive District Detail Visualizer */}
              <div className="lg:col-span-2 bg-stone-900/70 border border-stone-800 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                    <div>
                      <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">SELECTED REGION ANALYSIS</div>
                      <h3 className="text-2xl font-black text-white mt-1">{activeDistrict} District Thermal Matrix</h3>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono bg-stone-800 text-stone-200 border border-stone-700 px-3 py-1 rounded-full font-bold">
                        {districtData[activeDistrict].risk}
                      </span>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    <div className="bg-stone-950 p-4 rounded-xl border border-stone-800">
                      <div className="text-xs text-stone-400 font-mono">Max Surface Temp</div>
                      <div className="text-2xl font-black font-mono text-amber-500 mt-1">{districtData[activeDistrict].temp}</div>
                      <div className="text-[11px] text-stone-500 mt-1">IMD Threshold: 40.0°C</div>
                    </div>
                    <div className="bg-stone-950 p-4 rounded-xl border border-stone-800">
                      <div className="text-xs text-stone-400 font-mono">Wet-Bulb Globe Temp</div>
                      <div className="text-2xl font-black font-mono text-stone-200 mt-1">32.4°C</div>
                      <div className="text-[11px] text-stone-500 mt-1">Elevated Heat Stress</div>
                    </div>
                    <div className="bg-stone-950 p-4 rounded-xl border border-stone-800">
                      <div className="text-xs text-stone-400 font-mono">Relative Humidity</div>
                      <div className="text-2xl font-black font-mono text-amber-400 mt-1">{districtData[activeDistrict].humidity}</div>
                      <div className="text-[11px] text-stone-500 mt-1">Dry Air Mass</div>
                    </div>
                  </div>

                  {/* Thermal Spectrum Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-stone-400">
                      <span>Normal (32°C)</span>
                      <span>Warm (38°C)</span>
                      <span className="text-amber-400">Heatwave (42°C)</span>
                      <span className="text-amber-300 font-bold">Severe Heatwave (&gt;45°C)</span>
                    </div>
                    <div className="h-2.5 w-full bg-gradient-to-r from-emerald-800 via-stone-600 via-amber-700 to-rose-900 rounded-full relative overflow-hidden">
                      <div className="absolute top-0 bottom-0 left-[88%] w-2 bg-white shadow-md animate-pulse" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between text-xs font-mono text-stone-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    <span>Neural Ensemble Model (ConvLSTM + ResNet) active</span>
                  </div>
                  <button 
                    onClick={handleMonitoringClick}
                    className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1"
                  >
                    <span>Open Interactive GIS Map</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>

              </div>

            </div>
          )}

          {activeTab === 'forecast' && (
            <div className="pt-6">
              <div className="bg-stone-900/70 border border-stone-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-white">7-Day AI Thermal Forecast vs IMD Historical Baseline</h3>
                    <p className="text-xs text-stone-400 mt-1">Ensemble prediction combining INSAT-3D radiance and ground telemetry</p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded bg-stone-800 text-amber-400 border border-stone-700">
                    Confidence Interval: ±0.4°C
                  </span>
                </div>

                {/* Chart Bars */}
                <div className="grid grid-cols-7 gap-3 h-48 items-end pt-4 pb-2 border-b border-stone-800">
                  {[
                    { day: 'Mon', temp: 41.2, anomaly: '+2.1°C', high: false },
                    { day: 'Tue', temp: 43.0, anomaly: '+3.5°C', high: true },
                    { day: 'Wed', temp: 45.4, anomaly: '+5.2°C', severe: true },
                    { day: 'Thu', temp: 46.2, anomaly: '+5.8°C', severe: true },
                    { day: 'Fri', temp: 44.8, anomaly: '+4.5°C', high: true },
                    { day: 'Sat', temp: 42.1, anomaly: '+2.8°C', high: false },
                    { day: 'Sun', temp: 40.5, anomaly: '+1.5°C', high: false }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 group h-full justify-end">
                      <span className="text-[11px] font-mono text-stone-400">{item.temp}°C</span>
                      <div 
                        style={{ height: `${(item.temp - 35) * 12}%` }}
                        className={`w-full rounded-t-md transition-all group-hover:brightness-125 ${
                          item.severe ? 'bg-gradient-to-t from-amber-800 to-rose-900 shadow-sm' :
                          item.high ? 'bg-gradient-to-t from-stone-700 to-amber-700' :
                          'bg-gradient-to-t from-stone-800 to-stone-600'
                        }`}
                      />
                      <span className="text-xs font-mono text-stone-300 font-semibold">{item.day}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-stone-400 mt-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-rose-900"></span> Severe Heatwave Zone (&gt;45°C)</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-amber-800"></span> Heatwave Zone (42-44.9°C)</span>
                  </div>
                  <span>IMD Threshold Rule: Temp &gt; 4.5°C over normal baseline</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'alerts' && (
            <div className="pt-6">
              <div className="bg-stone-900/70 border border-stone-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Automated Multi-Channel Alert Pipeline</h3>
                <div className="space-y-3">
                  {[
                    { target: 'District Collector Office (Nagpur)', type: 'RED ALERT DISPATCH', time: '2 mins ago', channel: 'API + Encrypted SMS', status: 'Delivered & Confirmed' },
                    { target: 'State Disaster Management Authority (SDMA Gujarat)', type: 'ORANGE ALERT WARNING', time: '14 mins ago', channel: 'Webhook Telemetry', status: 'Dispatched' },
                    { target: 'Public Health Department (Vidarbha)', type: 'HEAT STRESS ADVISORY', time: '32 mins ago', channel: 'LLM Auto-Advisory Broadcast', status: 'Sent to 12 Hospitals' },
                    { target: 'IMD Central Weather Forecasting HQ', type: 'MODEL ANOMALY CONFIRMATION', time: '1 hour ago', channel: 'Satellite Sync Pipeline', status: 'Validated' }
                  ].map((alert, idx) => (
                    <div key={idx} className="bg-stone-950 p-4 rounded-xl border border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-mono">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        <div>
                          <span className="font-bold text-white text-sm block">{alert.target}</span>
                          <span className="text-amber-400">{alert.type}</span> • <span className="text-stone-400">{alert.channel}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800/60">{alert.status}</span>
                        <div className="text-stone-500 mt-1">{alert.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-amber-900 bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full uppercase tracking-widest">
              SYSTEM CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight mt-4 mb-4">
              Designed for National Scale Heatwave Resilience
            </h2>
            <p className="text-stone-600 text-base sm:text-lg">
              Combining satellite remote sensing, ground telemetry, and ensemble deep learning to predict heatwaves before impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-stone-200/90 hover:border-amber-700/40 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                <Brain size={22} />
              </div>
              <span className="text-[11px] font-mono font-bold text-amber-900 tracking-wider uppercase">01 • AI PREDICTION ENGINE</span>
              <h3 className="text-xl font-bold text-stone-900 mt-1 mb-3">Ensemble Thermal Forecast</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Utilizes ConvLSTM and Spatial Transformer neural networks trained on 40 years of IMD historical gridded dataset to forecast temperatures up to 14 days in advance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-stone-200/90 hover:border-amber-700/40 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                <Map size={22} />
              </div>
              <span className="text-[11px] font-mono font-bold text-stone-700 tracking-wider uppercase">02 • GIS & SPATIAL MAPPING</span>
              <h3 className="text-xl font-bold text-stone-900 mt-1 mb-3">District Hotspot Radar</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                High-resolution interactive heat mapping that isolates urban heat islands, rural heat traps, and micro-climatic anomalies down to sub-district boundaries.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-stone-200/90 hover:border-amber-700/40 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                <ShieldAlert size={22} />
              </div>
              <span className="text-[11px] font-mono font-bold text-amber-900 tracking-wider uppercase">03 • EARLY WARNING PIPELINE</span>
              <h3 className="text-xl font-bold text-stone-900 mt-1 mb-3">Multi-Tier Alert Protocol</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Automated color-coded alerts (Green, Yellow, Orange, Red) adhering strictly to IMD criteria (&gt;4.5°C departure or max temp &ge; 45°C) dispatched instantaneously.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-stone-200/90 hover:border-amber-700/40 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                <Thermometer size={22} />
              </div>
              <span className="text-[11px] font-mono font-bold text-stone-700 tracking-wider uppercase">04 • HEAT STRESS INDEX</span>
              <h3 className="text-xl font-bold text-stone-900 mt-1 mb-3">Wet-Bulb Globe Modeling</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Calculates combined heat-humidity indices (WBGT) to evaluate human physiological tolerance thresholds for outdoor laborers, agricultural workers, and vulnerable populations.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-stone-200/90 hover:border-amber-700/40 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                <FileText size={22} />
              </div>
              <span className="text-[11px] font-mono font-bold text-amber-900 tracking-wider uppercase">05 • LLM ADVISORIES</span>
              <h3 className="text-xl font-bold text-stone-900 mt-1 mb-3">Localized Action Advisories</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Generates sector-specific advisories (Hospitals, Municipal Water Supply, Disaster Response, Schools) translated automatically into regional languages.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-stone-200/90 hover:border-amber-700/40 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                <Satellite size={22} />
              </div>
              <span className="text-[11px] font-mono font-bold text-stone-700 tracking-wider uppercase">06 • TELEMETRY FUSION</span>
              <h3 className="text-xl font-bold text-stone-900 mt-1 mb-3">INSAT & AWS Sensor Fusion</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Real-time data ingestion combining INSAT-3D thermal infrared channels, Copernicus land surface temperature, and over 3,400 ground Automatic Weather Stations (AWS).
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* About the Project Section */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-mono font-bold border border-amber-200/80 mb-6">
              <Building2 size={14} />
              <span>COLLABORATION WITH INDIA METEOROLOGICAL DEPARTMENT</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight mb-6">
              Mitigating Climate Risk Through AI Precision & Early Warnings
            </h2>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-6">
              Heatwaves represent one of the most severe climate threats in South Asia, impacting public health, agriculture, energy grids, and water security. The <strong>AI-Powered Heatwave Intelligence System</strong> was developed in close collaboration with the <strong>India Meteorological Department (IMD)</strong> to transform heatwave management from reactive disaster response to proactive, AI-driven prevention.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">National Heat Action Plan (HAP) Integration</h4>
                  <p className="text-stone-600 text-sm">Directly feeds early warnings into State & District Action Plans for immediate cooling shelter setups and hospital surge prep.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">High Resolution Micro-Climate Radar</h4>
                  <p className="text-stone-600 text-sm">Identifies hyper-local thermal stress zones where urban concrete heat retention exceeds rural baselines by up to 6.2°C.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Protection for Outdoor Workers & Agriculture</h4>
                  <p className="text-stone-600 text-sm">Sends targeted advisories regarding safe work hours, livestock thermal management, and crop hydration schedules.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={handleDashboardClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white font-bold rounded-xl hover:bg-amber-900 transition-all shadow-sm"
            >
              <span>Explore Live Dashboard</span>
              <ArrowRight size={16} />
            </button>

          </div>

          {/* Muted Dark Feature Showcase Card */}
          <div className="bg-[#1C1B1A] rounded-2xl border border-stone-800 p-8 text-stone-100 shadow-xl relative overflow-hidden">
            
            <div className="flex items-center justify-between pb-6 border-b border-stone-800 mb-6">
              <div className="font-mono text-xs text-stone-400">IMD COLLABORATION BENCHMARK</div>
              <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 text-xs font-mono font-bold border border-emerald-800/60">
                ● ACTIVE PILOT
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-4xl font-black font-mono text-white">36 States & UTs</div>
                <div className="text-sm text-stone-400 mt-1">Coverage of high-risk meteorological sub-divisions across India</div>
              </div>

              <div className="h-px bg-stone-800" />

              <div>
                <div className="text-4xl font-black font-mono text-amber-400">7-14 Days</div>
                <div className="text-sm text-stone-400 mt-1">Early prediction window allowed district authorities to issue pre-emptive HAP warnings</div>
              </div>

              <div className="h-px bg-stone-800" />

              <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold mb-2">
                  <Zap size={14} />
                  <span>IMD OFFICIAL COMPLIANCE</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed font-mono">
                  "The AI Heatwave Intelligence system successfully models temperature departures from normal baseline adhering strictly to IMD Operational Guidelines."
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-amber-900 bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full uppercase tracking-widest">
              END-TO-END PIPELINE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight mt-4 mb-4">
              How the Early Warning Platform Works
            </h2>
            <p className="text-stone-600 text-base sm:text-lg">
              From satellite thermal radiometric signals to automated district-level emergency notifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/90 relative">
              <div className="text-3xl font-black font-mono text-amber-900 mb-4">01</div>
              <div className="w-10 h-10 rounded-lg bg-stone-900 text-amber-400 flex items-center justify-center mb-4">
                <Satellite size={20} />
              </div>
              <h3 className="font-bold text-stone-900 text-lg mb-2">Data Ingestion</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Ingests satellite radiance from INSAT-3D, Copernicus ERA5 reanalysis, and live streams from 3,400+ IMD Automatic Weather Stations.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/90 relative">
              <div className="text-3xl font-black font-mono text-amber-900 mb-4">02</div>
              <div className="w-10 h-10 rounded-lg bg-stone-900 text-amber-400 flex items-center justify-center mb-4">
                <Cpu size={20} />
              </div>
              <h3 className="font-bold text-stone-900 text-lg mb-2">Neural Inference</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                ConvLSTM models analyze spatial thermal patterns, humidity, and wind velocity vectors to predict 14-day temperature departure curves.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/90 relative">
              <div className="text-3xl font-black font-mono text-amber-900 mb-4">03</div>
              <div className="w-10 h-10 rounded-lg bg-stone-900 text-amber-400 flex items-center justify-center mb-4">
                <Radio size={20} />
              </div>
              <h3 className="font-bold text-stone-900 text-lg mb-2">Hotspot Evaluation</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Detects districts exceeding IMD heatwave thresholds (&ge;40°C in plains, &ge;30°C in hills, or &ge;4.5°C anomaly above normal).
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/90 relative">
              <div className="text-3xl font-black font-mono text-amber-900 mb-4">04</div>
              <div className="w-10 h-10 rounded-lg bg-stone-900 text-amber-400 flex items-center justify-center mb-4">
                <Bell size={20} />
              </div>
              <h3 className="font-bold text-stone-900 text-lg mb-2">Alert Broadcast</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Dispatches targeted Green/Yellow/Orange/Red alerts with LLM-generated advisories to district magistrates, health services, and citizens.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Technologies Used Section */}
      <section id="tech-stack" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-amber-900 bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full uppercase tracking-widest">
            TECHNICAL ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight mt-4 mb-4">
            Technologies Used
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Powered by modern AI frameworks, geospatial processing engines, and real-time streaming architectures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Tech Box 1 */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-stone-100">
              <Brain className="text-stone-800" size={22} />
              <h3 className="font-bold text-stone-900">AI & ML Engine</h3>
            </div>
            <ul className="space-y-2 text-xs font-mono text-stone-600">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-700"></span> PyTorch / ConvLSTM</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-700"></span> XGBoost Spatial Regressor</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-700"></span> Spatial Transformers</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-700"></span> Llama-3 LLM Advisories</li>
            </ul>
          </div>

          {/* Tech Box 2 */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-stone-100">
              <Satellite className="text-stone-800" size={22} />
              <h3 className="font-bold text-stone-900">Data Sources</h3>
            </div>
            <ul className="space-y-2 text-xs font-mono text-stone-600">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-stone-700"></span> IMD Real-time Weather API</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-stone-700"></span> INSAT-3D Thermal Infrared</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-stone-700"></span> Copernicus Sentinel-3 LST</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-stone-700"></span> ERA5 Reanalysis Datasets</li>
            </ul>
          </div>

          {/* Tech Box 3 */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-stone-100">
              <Layers className="text-stone-800" size={22} />
              <h3 className="font-bold text-stone-900">Geospatial GIS</h3>
            </div>
            <ul className="space-y-2 text-xs font-mono text-stone-600">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-700"></span> Leaflet.js & Mapbox GL</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-700"></span> GeoJSON District Grids</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-700"></span> GDAL / Rasterio Python</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-700"></span> Turf.js Spatial Analysis</li>
            </ul>
          </div>

          {/* Tech Box 4 */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-stone-100">
              <Cpu className="text-stone-800" size={22} />
              <h3 className="font-bold text-stone-900">Application Stack</h3>
            </div>
            <ul className="space-y-2 text-xs font-mono text-stone-600">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span> React 19 & Vite</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span> TailwindCSS v4 Design System</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span> FastAPI / Python Backend</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span> WebSockets Telemetry Stream</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="bg-[#1C1B1A] rounded-3xl p-8 sm:p-12 border border-stone-800 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">

          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">PREVENTATIVE CLIMATE SAFETY</span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2 mb-3 text-stone-100">Ready to Explore Live Heatwave Monitoring?</h2>
            <p className="text-stone-400 text-sm leading-relaxed">
              Access real-time district thermal maps, AI prediction forecasts, and multi-tier early warning advisories.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
            <button 
              onClick={handleDashboardClick}
              className="px-8 py-4 bg-stone-100 text-stone-900 hover:bg-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <span>Launch Dashboard</span>
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={handleMonitoringClick}
              className="px-8 py-4 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
            >
              <span>Open Live GIS Map</span>
            </button>
          </div>

        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#141312] border-t border-stone-800 text-stone-400 pt-16 pb-12 font-sans relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-stone-800">
            
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-stone-800 text-amber-400 flex items-center justify-center">
                  <Flame size={18} />
                </div>
                <span className="font-black text-xl text-white tracking-tight">HEATGUARD AI</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed max-w-sm mb-6 font-sans">
                An AI-Powered Heatwave Intelligence & Early Warning System developed for proactive climate resilience in partnership with the India Meteorological Department (IMD).
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-stone-900 px-3 py-1.5 rounded border border-stone-800 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Telemetry Status: Operational (3,420 AWS Nodes Active)</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono text-stone-200 font-bold uppercase tracking-wider mb-4">Platform</h4>
              <ul className="space-y-2.5 text-xs">
                <li><button onClick={handleDashboardClick} className="hover:text-amber-400 transition-colors">Main Dashboard</button></li>
                <li><button onClick={handleMonitoringClick} className="hover:text-amber-400 transition-colors">GIS & Monitoring</button></li>
                <li><a href="#features" className="hover:text-amber-400 transition-colors">Spatial Radar</a></li>
                <li><a href="#how-it-works" className="hover:text-amber-400 transition-colors">Early Warnings</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono text-stone-200 font-bold uppercase tracking-wider mb-4">IMD Directives</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#about" className="hover:text-amber-400 transition-colors">Heat Action Plans</a></li>
                <li><a href="#features" className="hover:text-amber-400 transition-colors">Wet-Bulb Index</a></li>
                <li><a href="#about" className="hover:text-amber-400 transition-colors">Disaster Advisories</a></li>
                <li><a href="#tech-stack" className="hover:text-amber-400 transition-colors">INSAT Satellite Feed</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono text-stone-200 font-bold uppercase tracking-wider mb-4">System Contact</h4>
              <ul className="space-y-2.5 text-xs">
                <li className="text-stone-400">Emergency NOC Stream</li>
                <li className="text-stone-400">IMD Weather HQ, New Delhi</li>
                <li className="text-amber-400 font-mono">alerts@imd-heatguard.gov.in</li>
              </ul>
            </div>

          </div>

          {/* Giant Brand Typography */}
          <div className="pt-12 text-center border-b border-stone-900 pb-8">
            <span className="text-4xl sm:text-6xl md:text-8xl font-black text-stone-800 tracking-widest font-mono selection:bg-stone-700 selection:text-white uppercase">
              IMD HEATGUARD
            </span>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
            <div>
              © 2026 AI Heatwave Intelligence System • In Collaboration with IMD. All Rights Reserved.
            </div>
            <div className="flex gap-6">
              <span className="hover:text-stone-400 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-stone-400 cursor-pointer">Terms of Service</span>
              <span className="hover:text-stone-400 cursor-pointer">API Compliance</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default LandingPage;
