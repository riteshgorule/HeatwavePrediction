import React, { useState } from 'react';
import { Settings as SettingsIcon, User, Sliders, Check, Save } from 'lucide-react';

const Settings = () => {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(true);
  const [tempThreshold, setTempThreshold] = useState(42);
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Title */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl border border-stone-200 shadow-xs">
        <div>
          <h1 className="text-2xl font-extrabold text-stone-900 flex items-center gap-2">
            <SettingsIcon className="text-amber-800" size={24} /> System Settings
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Manage user profile, alert dispatch thresholds, and notification settings.
          </p>
        </div>
      </div>

      <div className="max-w-2xl space-y-5">
        
        {/* PROFILE */}
        <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-4">
          <h2 className="text-sm font-bold text-stone-900 flex items-center gap-2">
            <User size={16} className="text-amber-800" /> User Profile Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label className="font-bold text-stone-700 block mb-1">Full Name</label>
              <input
                type="text"
                defaultValue="Dr. Rajesh Sharma"
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg font-medium focus:outline-none"
              />
            </div>
            <div>
              <label className="font-bold text-stone-700 block mb-1">Email Address</label>
              <input
                type="email"
                defaultValue="rajesh.sharma@imd-ai.gov.in"
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg font-medium focus:outline-none"
              />
            </div>
            <div>
              <label className="font-bold text-stone-700 block mb-1">Role</label>
              <input
                type="text"
                defaultValue="Chief Climate ML Lead"
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg font-medium focus:outline-none"
              />
            </div>
            <div>
              <label className="font-bold text-stone-700 block mb-1">Organization</label>
              <input
                type="text"
                defaultValue="IMD Climate Risk Integration Wing"
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg font-medium focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* THRESHOLDS */}
        <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-4">
          <h2 className="text-sm font-bold text-stone-900 flex items-center gap-2">
            <Sliders size={16} className="text-amber-800" /> Alert Threshold Configuration
          </h2>

          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between font-bold mb-1">
                <span className="text-stone-700">Heatwave Trigger Threshold (°C)</span>
                <span className="text-amber-800 font-extrabold text-sm">{tempThreshold}°C</span>
              </div>
              <input
                type="range"
                min="38"
                max="46"
                step="0.5"
                value={tempThreshold}
                onChange={(e) => setTempThreshold(e.target.value)}
                className="w-full accent-stone-900 cursor-pointer"
              />
              <p className="text-[11px] text-stone-400 mt-1">Automatic emergency advisory dispatches when city readings cross this value.</p>
            </div>

            <div className="pt-3 border-t border-stone-100 space-y-2">
              <label className="flex items-center justify-between font-semibold cursor-pointer">
                <span>Instant Email Alerts for Severe (Red) Broadcasts</span>
                <input
                  type="checkbox"
                  checked={emailAlerts}
                  onChange={(e) => setEmailAlerts(e.target.checked)}
                  className="w-4 h-4 accent-stone-900 rounded"
                />
              </label>

              <label className="flex items-center justify-between font-semibold cursor-pointer">
                <span>SMS Gateway Dispatch to District Officers</span>
                <input
                  type="checkbox"
                  checked={smsAlerts}
                  onChange={(e) => setSmsAlerts(e.target.checked)}
                  className="w-4 h-4 accent-stone-900 rounded"
                />
              </label>
            </div>
          </div>
        </div>

        {/* SAVE */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 py-2.5 px-5 rounded-lg bg-stone-900 hover:bg-amber-900 text-white font-bold text-xs shadow-xs transition"
          >
            {saved ? <Check size={15} className="text-emerald-400" /> : <Save size={15} />}
            {saved ? 'Settings Saved!' : 'Save Preferences'}
          </button>
        </div>

      </div>

    </div>
  );
};

export default Settings;
