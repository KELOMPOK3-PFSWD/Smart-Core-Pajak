"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Data Wajib Pajak", href: "/tax" },
    { name: "Pelaporan SPT", href: "/reports" },
    { name: "Validasi NPWP", href: "/services" },
    { name: "Monitoring Pajak", href: "/monitoring" },
  ];

  return (
    <aside className="min-h-screen bg-slate-950 p-8 text-white">
      {/* Logo Section */}
      <div>
        <h1 className="text-3xl font-black">
          Smart Core <span className="text-cyan-400">Pajak</span>
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Directorate General of Taxes
        </p>
      </div>

      {/* Navigation Section */}
      <nav className="mt-12 space-y-3">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-2xl px-5 py-4 font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-cyan-500 text-slate-950"
                  : "text-slate-300 hover:bg-slate-900 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* System Status Card */}
      <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm text-slate-400 font-medium">System Status</p>
        <h3 className="mt-2 text-2xl font-black text-emerald-400">Active</h3>
        
        {/* Progress/Health Bar */}
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
          <div 
            className="h-full rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" 
            style={{ width: '92%' }}
          ></div>
        </div>
        
        <p className="mt-3 text-xs leading-relaxed text-slate-500">
          Tax monitoring system running normally.
        </p>
      </div>
    </aside>
  );
}