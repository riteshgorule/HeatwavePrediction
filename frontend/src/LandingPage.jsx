import React from 'react';
import { ShieldAlert, Map, Brain, Activity, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white shadow-sm">
        <div className="flex items-center gap-2 text-orange-600 font-bold text-2xl">
          <Activity size={28} />
          <span>HeatGuard AI</span>
        </div>
        <div className="space-x-6">
          <button className="text-slate-600 hover:text-orange-600 font-medium">Features</button>
          <button className="text-slate-600 hover:text-orange-600 font-medium">Live Map</button>
          <button className="px-5 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200">Login</button>
          <button className="px-5 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700">Access Dashboard</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
          Predict, Monitor, and Mitigate <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            Severe Heatwaves
          </span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
          An AI-powered decision support system that predicts temperature anomalies, generates early warnings, and provides actionable advisories to protect communities.
        </p>
        <div className="flex justify-center gap-4">
          <button className="flex items-center gap-2 px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition">
            View Live Dashboard <ArrowRight size={20} />
          </button>
          <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition">
            Read Documentation
          </button>
        </div>
      </header>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
              <Brain size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">AI Prediction Engine</h3>
            <p className="text-slate-600">Analyzes historical IMD data, humidity, and wind speed to predict heatwave probabilities up to 7 days in advance with 95% accuracy.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
              <Map size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">GIS Heat Mapping</h3>
            <p className="text-slate-600">Interactive color-coded maps displaying normal, warm, heatwave, and severe heatwave zones down to the district level.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-6">
              <ShieldAlert size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Early Warning Alerts</h3>
            <p className="text-slate-600">Automated multi-level alerts (Green, Yellow, Orange, Red) and LLM-generated advisories tailored for citizens, farmers, and hospitals.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;