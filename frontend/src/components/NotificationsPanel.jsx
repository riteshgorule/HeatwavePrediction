import React from 'react';
import { X, Bell, AlertTriangle, Flame, CheckCircle2, Clock } from 'lucide-react';
import { mockRecentActivities } from '../data/mockData';

const NotificationsPanel = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-xs" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl border-l border-stone-200 flex flex-col justify-between animate-in slide-in-from-right duration-200">
          
          {/* Header */}
          <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-100 text-amber-900 border border-amber-200">
                <Bell size={18} />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-sm">Notifications & Alerts</h3>
                <p className="text-[11px] text-stone-500">Real-time system events</p>
              </div>
            </div>
            <button onClick={onClose} className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200/50 transition">
              <X size={18} />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {mockRecentActivities.map((act) => (
              <div key={act.id} className="p-3.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 transition">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg shrink-0 ${
                    act.severity === 'red' ? 'bg-rose-100 text-rose-800 border border-rose-200' :
                    act.severity === 'orange' ? 'bg-amber-100 text-amber-900 border border-amber-200' :
                    'bg-stone-100 text-stone-700 border border-stone-200'
                  }`}>
                    {act.severity === 'red' ? <AlertTriangle size={16} /> :
                     act.severity === 'orange' ? <Flame size={16} /> :
                     <CheckCircle2 size={16} />}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xs text-stone-900">{act.title}</h4>
                    <p className="text-[11px] text-stone-600 mt-0.5">{act.target}</p>
                    <div className="flex items-center gap-1 text-[10px] text-stone-400 font-mono mt-1.5">
                      <Clock size={11} />
                      <span>{act.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-stone-200 bg-stone-50">
            <button onClick={onClose} className="w-full py-2.5 px-4 rounded-lg bg-stone-900 text-white text-xs font-semibold hover:bg-amber-900 transition">
              Dismiss All Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPanel;
