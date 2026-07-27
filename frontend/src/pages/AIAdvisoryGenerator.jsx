import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Copy, 
  Check, 
  Download, 
  Users, 
  Tractor, 
  Building2, 
  Hospital, 
  RefreshCw,
  CheckCircle2
} from 'lucide-react';
import { mockAIAdvisoryPresets } from '../data/mockData';

const AIAdvisoryGenerator = () => {
  const [city, setCity] = useState('Nagpur');
  const [temp, setTemp] = useState('45.2°C');
  const [severity, setSeverity] = useState('Severe (Red)');
  const [audience, setAudience] = useState('Citizen');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const [advisoryText, setAdvisoryText] = useState(mockAIAdvisoryPresets[0].text);

  const handleGenerate = (e) => {
    e?.preventDefault();
    setIsGenerating(true);

    setTimeout(() => {
      const preset = mockAIAdvisoryPresets.find(p => p.audience === audience);
      if (preset) {
        setAdvisoryText(preset.text.replace('NAGPUR', city.toUpperCase()).replace('45.2°C', temp));
      } else {
        setAdvisoryText(`🔥 AI PUBLIC SAFETY ADVISORY - ${city.toUpperCase()} (${temp})
        
• Target Group: ${audience}
• Warning Level: ${severity}
• Key Protocol: Enforce mandatory rest intervals between 12 PM - 4 PM. Keep hydration centers active across high-density hubs.
• Medical Emergency: Keep IV cooling fluids ready and dial 108 for emergency transport.`);
      }
      setIsGenerating(false);
    }, 600);
  };

  const handlePresetSelect = (preset) => {
    setCity(preset.city);
    setTemp(preset.temp);
    setSeverity(preset.severity);
    setAudience(preset.audience);
    setAdvisoryText(preset.text);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(advisoryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Title */}
      <div className="bg-[#1C1B1A] text-stone-200 p-6 rounded-xl border border-stone-800 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-500 text-xs font-mono mb-1">
            <Sparkles size={14} /> AI GENERATIVE ADVISORY MODEL
          </div>
          <h1 className="text-2xl font-extrabold text-white">AI Advisory Generator</h1>
          <p className="text-stone-400 text-xs mt-1">
            Synthesize domain-specific advisories for Citizens, Farmers, Hospitals, and Municipalities.
          </p>
        </div>
      </div>

      {/* CHAT / GENERATOR LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT FORM (5 Cols) */}
        <div className="lg:col-span-5 bg-white rounded-xl p-6 border border-stone-200 shadow-xs space-y-4">
          <h2 className="text-base font-extrabold text-stone-900 flex items-center gap-2">
            <Bot className="text-amber-800" size={20} /> Input Parameters
          </h2>

          <form onSubmit={handleGenerate} className="space-y-3.5">
            
            {/* City */}
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">City / District</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Nagpur"
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium focus:outline-none"
              />
            </div>

            {/* Temp & Severity */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">Max Temp (°C)</label>
                <input
                  type="text"
                  value={temp}
                  onChange={(e) => setTemp(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">Severity</label>
                <select
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)}
                  className="w-full py-2 px-3 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium focus:outline-none"
                >
                  <option value="Severe (Red)">Severe (Red)</option>
                  <option value="Heatwave (Orange)">Heatwave (Orange)</option>
                  <option value="Warning (Yellow)">Warning (Yellow)</option>
                  <option value="Normal (Green)">Normal (Green)</option>
                </select>
              </div>
            </div>

            {/* Target Audience */}
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1.5">Target Audience</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'Citizen', icon: Users, label: 'Citizen' },
                  { id: 'Farmer', icon: Tractor, label: 'Farmer' },
                  { id: 'Hospital', icon: Hospital, label: 'Hospital' },
                  { id: 'Municipality', icon: Building2, label: 'Municipality' },
                ].map(aud => {
                  const IconComp = aud.icon;
                  const isSelected = audience === aud.id;
                  return (
                    <button
                      type="button"
                      key={aud.id}
                      onClick={() => setAudience(aud.id)}
                      className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs font-bold transition ${
                        isSelected 
                          ? 'bg-stone-900 text-white border-stone-900' 
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      <IconComp size={15} /> {aud.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isGenerating}
              className="w-full py-2.5 px-4 rounded-lg bg-stone-900 hover:bg-amber-900 text-white font-bold text-xs flex items-center justify-center gap-2 transition disabled:opacity-50 shadow-xs"
            >
              {isGenerating ? (
                <>
                  <RefreshCw size={15} className="animate-spin" /> Generating...
                </>
              ) : (
                <>
                  <Sparkles size={15} className="text-amber-400" /> Generate Advisory
                </>
              )}
            </button>

          </form>

          {/* Quick Presets */}
          <div className="pt-3 border-t border-stone-100">
            <span className="text-[10px] font-bold uppercase text-stone-400 block mb-1.5">Quick Presets</span>
            <div className="flex flex-wrap gap-1.5">
              {mockAIAdvisoryPresets.map((preset, i) => (
                <button
                  key={i}
                  onClick={() => handlePresetSelect(preset)}
                  className="px-2 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-[11px] font-semibold transition border border-stone-200"
                >
                  {preset.city} ({preset.audience})
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT DISPLAY (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-xl p-6 border border-stone-200 shadow-xs space-y-4 min-h-[400px] flex flex-col justify-between">
          
          <div>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-stone-900 text-amber-500 flex items-center justify-center border border-stone-800">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-extrabold text-stone-900 text-sm">Generated Advisory Card</h3>
                  <span className="text-[11px] text-stone-500 flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-emerald-600" /> Neural Rules Verified
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 py-1 px-2.5 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition border border-stone-200"
                >
                  {copied ? <Check size={13} className="text-emerald-700" /> : <Copy size={13} />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <button
                  onClick={() => alert(`Downloading Advisory PDF for ${city}`)}
                  className="flex items-center gap-1 py-1 px-2.5 rounded bg-stone-900 hover:bg-amber-900 text-white text-xs font-bold transition"
                >
                  <Download size={13} /> PDF
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 rounded-lg bg-stone-50 border border-stone-200/80 whitespace-pre-wrap font-sans text-xs text-stone-800 leading-relaxed">
              {advisoryText}
            </div>
          </div>

          <div className="text-[11px] text-stone-400 text-center pt-2">
            Advisory generated for operational municipal dispatch.
          </div>

        </div>

      </div>

    </div>
  );
};

export default AIAdvisoryGenerator;
