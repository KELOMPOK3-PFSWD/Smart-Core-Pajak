import Link from "next/link";
import { services, type Service } from "@/data/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports | Smart Core Pajak",
  description: "Digital tax reports and analytics.",
};

export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-slate-100 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex rounded-full bg-cyan-100 px-5 py-2 text-xs font-black uppercase tracking-widest text-cyan-700">
              Smart Core Pajak
            </div>

            <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 lg:text-6xl">
              Core Tax Services
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
              Sistem layanan perpajakan digital modern untuk validasi,
              monitoring, administrasi, dan integrasi pajak nasional secara realtime.
            </p>
          </div>

          {/* System Status */}
          <div className="inline-flex items-center gap-4 rounded-[24px] border border-white bg-white/50 px-8 py-5 text-sm font-black text-slate-900 shadow-sm backdrop-blur-sm">
            <div className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
            </div>
            All Systems Operational
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { label: "Total Services", value: services.length, color: "text-cyan-500" },
            { label: "System Uptime", value: "99.9%", color: "text-emerald-500" },
            { label: "Active Users", value: "12K+", color: "text-slate-900" },
          ].map((stat, i) => (
            <div key={i} className="rounded-[40px] border border-white bg-white/40 p-10 shadow-sm transition-all hover:bg-white">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                {stat.label}
              </p>
              <h2 className={`mt-5 text-6xl font-black tracking-tighter ${stat.color}`}>
                {stat.value}
              </h2>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service: Service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[48px] border border-white bg-white p-10 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-200/40"
            >
              {/* Decorative background element on hover */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div>
                <div className="flex items-start justify-between">
                  <div className="flex h-24 w-24 items-center justify-center rounded-[32px] bg-slate-50 text-5xl transition-all duration-500 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-cyan-500/30">
                    {service.icon}
                  </div>
                  <div className="rounded-2xl bg-emerald-50 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-emerald-600">
                    Active
                  </div>
                </div>

                <div className="mt-12">
                  <h2 className="text-3xl font-black tracking-tight text-slate-900 transition-colors group-hover:text-cyan-600">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-slate-500">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action Area */}
              <div className="mt-12 flex items-center justify-between border-t border-slate-50 pt-8">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    Availability
                  </p>
                  <h4 className="mt-1 text-sm font-black text-emerald-500">High Reliability</h4>
                </div>
                
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white transition-all duration-300 group-hover:w-32 group-hover:bg-cyan-500 group-hover:text-slate-950">
                  <span className="hidden text-xs font-black uppercase group-hover:block">Open</span>
                  <span className="text-xl group-hover:hidden">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}