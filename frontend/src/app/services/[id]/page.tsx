import Link from "next/link";
import { services } from "@/data/data";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const service = services.find((item) => String(item.id) === id);

  if (!service) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
        <div className="rounded-[40px] border border-slate-200 bg-white p-16 text-center shadow-xl">
          <span className="mb-6 block text-7xl">⚠️</span>
          <h1 className="text-4xl font-black text-slate-900">Service Not Found</h1>
          <p className="mt-4 text-lg text-slate-500">The requested tax service could not be found.</p>
          <Link
            href="/services"
            className="mt-8 inline-block rounded-2xl bg-slate-950 px-8 py-4 text-sm font-black text-white transition hover:bg-cyan-500 hover:text-slate-950"
          >
            Back to Services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-100 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        
        {/* Navigation */}
        <Link
          href="/services"
          className="group inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-black text-slate-700 shadow-sm transition hover:bg-slate-950 hover:text-white"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Back to Services
        </Link>

        {/* Main Card */}
        <div className="mt-8 overflow-hidden rounded-[48px] border border-white bg-white shadow-xl shadow-slate-200/50">
          
          {/* Hero Header */}
          <div className="relative overflow-hidden bg-slate-950 px-10 py-16 text-white">
            <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]"></div>
            
            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                  Core Tax Module
                </div>
                <div className="mt-8 flex h-28 w-28 items-center justify-center rounded-[32px] bg-white/10 text-6xl backdrop-blur-xl">
                  {service.icon}
                </div>
                <h1 className="mt-8 text-5xl font-black tracking-tight">{service.title}</h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{service.description}</p>
              </div>

              {/* Service Status Badge */}
              <div className="rounded-[40px] border border-white/10 bg-white/5 px-10 py-10 text-center backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-50">Current Status</p>
                <h2 className="mt-4 text-5xl font-black tracking-tighter text-emerald-400">Active</h2>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid gap-6 p-10 md:grid-cols-3">
            {[
              { label: "Availability", value: "24/7 Online", color: "text-emerald-500" },
              { label: "Security", value: "AES-256", color: "text-cyan-500" },
              { label: "Integration", value: "National API", color: "text-slate-900" },
            ].map((metric, i) => (
              <div key={i} className="rounded-[32px] border border-slate-100 bg-slate-50 p-8 transition hover:bg-white hover:shadow-md">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">{metric.label}</p>
                <h3 className={`mt-4 text-3xl font-black ${metric.color}`}>{metric.value}</h3>
              </div>
            ))}
          </div>

          {/* Technical Overview Section */}
          <div className="px-10 pb-6">
            <div className="rounded-[40px] bg-slate-950 p-12 text-white shadow-2xl shadow-slate-950/20">
              <h2 className="text-3xl font-black tracking-tight">Technical Overview</h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-400">
                <p>
                  Modul <span className="font-bold text-white">{service.title}</span> merupakan bagian fundamental dari ekosistem 
                  Smart Core Pajak yang dirancang untuk menangani beban administrasi perpajakan digital nasional secara realtime.
                </p>
                <p>
                  Sistem ini dilengkapi dengan <span className="text-cyan-400">validasi otomatis</span> dan enkripsi mutakhir untuk 
                  menjamin keamanan data wajib pajak, transparansi pelaporan, serta integrasi tanpa hambatan ke basis data pusat.
                </p>
              </div>
            </div>
          </div>

          {/* Activity Logs Section */}
          <div className="border-t border-slate-100 px-10 py-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-3xl font-black text-slate-900">Recent Activities</h2>
                <p className="mt-2 text-slate-500">Latest system monitoring and sync events.</p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl border border-emerald-100 bg-emerald-50 px-6 py-3 text-xs font-black uppercase tracking-widest text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                System Healthy
              </div>
            </div>

            <div className="mt-10 space-y-4">
              {[
                { title: "System validation completed", time: "5 mins ago", status: "Success", color: "bg-emerald-50 text-emerald-600" },
                { title: "National API synchronization", time: "20 mins ago", status: "Synced", color: "bg-cyan-50 text-cyan-600" },
                { title: "Realtime monitoring check", time: "1 hour ago", status: "Active", color: "bg-yellow-50 text-yellow-600" },
              ].map((log, index) => (
                <div key={index} className="group flex items-center justify-between rounded-3xl border border-slate-100 p-6 transition hover:bg-slate-50">
                  <div>
                    <h3 className="font-black text-slate-900 group-hover:text-cyan-600 transition-colors">{log.title}</h3>
                    <p className="mt-1 text-sm font-bold text-slate-400">{log.time}</p>
                  </div>
                  <span className={`rounded-xl px-4 py-2 text-xs font-black uppercase ${log.color}`}>
                    {log.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="flex flex-col gap-6 border-t border-slate-100 px-10 py-12 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-black text-slate-900">Service Documentation</h3>
              <p className="mt-2 text-slate-500">Access comprehensive technical manuals and integration guides.</p>
            </div>
            <button className="rounded-2xl bg-slate-950 px-10 py-5 text-sm font-black text-white transition hover:bg-cyan-500 hover:text-slate-950 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95">
              Download Docs (PDF)
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}