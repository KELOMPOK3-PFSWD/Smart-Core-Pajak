"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Verified", value: 45 },
  { name: "Pending", value: 20 },
  { name: "Approved", value: 25 },
  { name: "Review", value: 10 },
];

const COLORS = [
  "#06b6d4", // Cyan
  "#fbbf24", // Amber
  "#10b981", // Emerald
  "#6366f1", // Indigo
];

export default function StatusChart() {
  return (
    <div className="rounded-[40px] border border-slate-200/60 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">
            Tax Status Overview
          </h3>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Realtime distribution data
          </p>
        </div>
        <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:text-slate-600 transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      <div className="relative h-[320px]">
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-4xl font-black text-slate-900">100%</span>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Validated</span>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={85}   
              outerRadius={115}
              paddingAngle={8}    
              cornerRadius={12}   
              dataKey="value"
              stroke="none"    
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                  className="outline-none"
                />
              ))}
            </Pie>
            
            <Tooltip 
              contentStyle={{ 
                borderRadius: '16px', 
                border: 'none', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                fontWeight: 'bold'
              }} 
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend Grid */}
      <div className="mt-8 grid grid-cols-2 gap-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/50 p-3 transition hover:bg-slate-50"
          >
            <div
              className="h-3 w-3 shrink-0 rounded-full shadow-sm"
              style={{ backgroundColor: COLORS[index] }}
            />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-tight">{item.name}</span>
              <span className="text-sm font-black text-slate-900">{item.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}