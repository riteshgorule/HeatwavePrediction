import React, { useState } from 'react';
import { 
  Target, 
  GitBranch, 
  Users, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Flame, 
  CheckCircle2, 
  Layers
} from 'lucide-react';
import { mockTeamMembers, mockFaqs } from '../data/mockData';

const AboutProject = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="space-y-8">
      
      {/* HERO BANNER */}
      <div className="bg-[#1C1B1A] text-stone-200 p-8 md:p-10 rounded-2xl border border-stone-800 shadow-xs relative overflow-hidden">
        <div className="max-w-3xl space-y-3 z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-800 text-amber-400 text-xs font-mono border border-stone-700">
            <Flame size={14} className="text-amber-500" /> NATIONAL CLIMATE INITIATIVE
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            AI-Driven Heatwave Detection & Early Advisory System
          </h1>
          <p className="text-stone-400 text-xs md:text-sm leading-relaxed">
            Combining satellite remote sensing, ground station telemetry, and deep learning models to predict heatwaves and dispatch targeted public safety advisories across India.
          </p>
        </div>
      </div>

      {/* PROBLEM & OBJECTIVES (2 Cols) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Problem */}
        <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-3">
          <div className="p-2.5 rounded-lg bg-stone-100 text-stone-900 border border-stone-200 w-fit">
            <Flame size={20} className="text-rose-700" />
          </div>
          <h2 className="text-lg font-extrabold text-stone-900">Problem Statement</h2>
          <p className="text-xs text-stone-600 leading-relaxed">
            Heatwaves represent one of the fastest-growing climate hazards in South Asia, causing severe heatstroke mortality, power grid stress, and agricultural yield loss. Traditional forecasts lack hyper-local resolution and automated persona-targeted advisories.
          </p>
        </div>

        {/* Objectives */}
        <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-3">
          <div className="p-2.5 rounded-lg bg-amber-100 text-amber-900 border border-amber-200 w-fit">
            <Target size={20} />
          </div>
          <h2 className="text-lg font-extrabold text-stone-900">Project Objectives</h2>
          <ul className="space-y-2 text-xs text-stone-600">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={15} className="text-amber-800 shrink-0 mt-0.5" />
              <span>Deliver 72-hour hyper-local land surface temperature predictions with &gt;95% confidence.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={15} className="text-amber-800 shrink-0 mt-0.5" />
              <span>Automate persona-targeted advisories for Farmers, Citizens, Hospitals, and Municipalities.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={15} className="text-amber-800 shrink-0 mt-0.5" />
              <span>Visualize real-time GIS heat distribution across all Indian states and districts.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* WORKFLOW DIAGRAM */}
      <div className="bg-white p-6 md:p-8 rounded-xl border border-stone-200 shadow-xs space-y-5">
        <div>
          <h2 className="text-lg font-extrabold text-stone-900 flex items-center gap-2">
            <GitBranch className="text-amber-800" size={22} /> System Workflow Architecture
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">End-to-end data pipeline from satellite telemetry to public dispatch.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: '01', title: 'IMD Telemetry Ingestion', desc: 'INSAT-3D thermal radiometer data & ground weather station feeds.' },
            { step: '02', title: 'LSTM Deep Learning', desc: 'Neural spatial-temporal model computes 72-hour temperature forecasts.' },
            { step: '03', title: 'Risk Score Matrix', desc: 'Combines temperature, humidity index, and vulnerability scores (Red/Orange/Yellow/Green).' },
            { step: '04', title: 'Automated Advisory', desc: 'Generates persona advisories and dispatches alerts to municipal disaster hubs.' },
          ].map((wf, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-xs font-mono font-bold text-amber-800 block mb-1">STEP {wf.step}</span>
              <h3 className="font-bold text-xs text-stone-900 mb-1">{wf.title}</h3>
              <p className="text-[11px] text-stone-500 leading-normal">{wf.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TECHNOLOGY STACK */}
      <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-4">
        <div>
          <h2 className="text-lg font-extrabold text-stone-900 flex items-center gap-2">
            <Layers className="text-amber-800" size={22} /> Technology Stack
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { category: 'Frontend Interface', tech: 'React 19 + Vite + Tailwind CSS' },
            { category: 'Data Visualization', tech: 'Recharts + SVG GIS Map Engine' },
            { category: 'UI Components', tech: 'Lucide Icons + Framer Motion' },
            { category: 'Predictive ML', tech: 'Python PyTorch + LSTM Neural Nets' },
          ].map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-lg bg-stone-50 border border-stone-200">
              <span className="text-[10px] font-bold uppercase text-stone-400 block mb-0.5">{item.category}</span>
              <span className="text-xs font-bold text-stone-900">{item.tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* TEAM */}
      <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-5">
        <div>
          <h2 className="text-lg font-extrabold text-stone-900 flex items-center gap-2">
            <Users className="text-amber-800" size={22} /> Research & Implementation Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {mockTeamMembers.map((member, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-center space-y-2">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-16 h-16 rounded-full mx-auto object-cover border border-stone-300"
              />
              <div>
                <h3 className="font-bold text-xs text-stone-900">{member.name}</h3>
                <p className="text-[11px] text-amber-800 font-semibold">{member.role}</p>
                <span className="text-[10px] text-stone-400 block mt-0.5">{member.institute}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQS */}
      <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-4">
        <div>
          <h2 className="text-lg font-extrabold text-stone-900 flex items-center gap-2">
            <HelpCircle className="text-amber-800" size={22} /> Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-2">
          {mockFaqs.map((faq, idx) => (
            <div key={idx} className="border border-stone-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="w-full p-3.5 bg-stone-50 text-left font-bold text-xs text-stone-900 flex justify-between items-center"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openFaq === idx && (
                <div className="p-3.5 bg-white text-xs text-stone-600 leading-relaxed border-t border-stone-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AboutProject;
