"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", tax: 400 },
  { month: "Feb", tax: 700 },
  { month: "Mar", tax: 500 },
  { month: "Apr", tax: 900 },
  { month: "May", tax: 1200 },
  { month: "Jun", tax: 950 },
];

export default function TaxChart() {
  return (
    <div className="rounded-[40px] border border-slate-200/60 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-black tracking-tight text-slate-900">
            Monthly Tax Analytics
          </h3>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Realtime revenue monitoring •{" "}
            <span className="text-emerald-500">↑ 12% increase</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-cyan-500"></div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Revenue
          </span>
        </div>
      </div>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <defs>
              {/* Gradient untuk Garis */}
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>

              {/* Gradient untuk Area di Bawah Garis */}
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 600 }}
              dy={15}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 600 }}
              tickFormatter={(value) => `$${value}`}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "16px",
                border: "none",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                padding: "12px",
              }}
              itemStyle={{ fontWeight: "bold", color: "#06b6d4" }}
            />

            <Area
              type="monotone"
              dataKey="tax"
              stroke="url(#lineGradient)"
              strokeWidth={4}
              fillOpacity={1}
              fill="url(#areaGradient)"
              dot={{ r: 6, fill: "#06b6d4", strokeWidth: 3, stroke: "#fff" }}
              activeDot={{ r: 8, strokeWidth: 0 }}
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}