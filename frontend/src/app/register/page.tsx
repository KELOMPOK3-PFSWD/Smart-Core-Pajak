import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Smart Core Pajak",
  description: "Daftarkan akun untuk sistem administrasi perpajakan digital.",
};

export default function RegisterPage() {
  return (
    <section className="min-h-screen bg-slate-100 px-6 py-20 flex items-center justify-center">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[48px] bg-white shadow-2xl shadow-slate-200/50 lg:grid-cols-2">
        
        {/* Left Section: Form */}
        <div className="p-10 md:p-20">
          <div className="mx-auto max-w-md">
            <div className="inline-flex rounded-full bg-cyan-50 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-cyan-600 border border-cyan-100">
              Registration System
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-slate-900">
              Create 
              <span className="block text-cyan-500">New Account</span>
            </h1>

            <p className="mt-6 text-lg font-medium leading-relaxed text-slate-500">
              Daftarkan akun untuk mengakses sistem administrasi perpajakan nasional secara digital.
            </p>

            <form className="mt-12 space-y-7" onSubmit={(e) => e.preventDefault()}>
              <div className="group">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-cyan-500">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Nama Lengkap sesuai KTP"
                  className="mt-3 w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-5 font-bold text-slate-900 outline-none transition-all focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                />
              </div>

              <div className="group">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-cyan-500">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="admin@perusahaan.com"
                  className="mt-3 w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-5 font-bold text-slate-900 outline-none transition-all focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                />
              </div>

              <div className="group">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-cyan-500">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="mt-3 w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-5 font-bold text-slate-900 outline-none transition-all focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-slate-950 py-5 text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-slate-900/10 transition-all hover:bg-cyan-500 hover:text-slate-950 active:scale-[0.98]"
              >
                Create Account
              </button>
            </form>

            <p className="mt-10 text-center text-sm font-bold text-slate-400">
              Already have an account?
              <a href="/login" className="ml-2 text-cyan-600 transition hover:text-slate-900">
                Login
              </a>
            </p>
          </div>
        </div>

        {/* Right Section: Branding & Stats */}
        <div className="hidden relative bg-slate-950 p-16 lg:flex lg:flex-col lg:justify-between overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 p-12 text-white/[0.03] font-black text-[180px] leading-none select-none">
            TAX
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex rounded-full bg-cyan-500/10 px-5 py-2 text-xs font-black uppercase tracking-widest text-cyan-300 border border-cyan-500/20">
              Enterprise Ready
            </div>

            <h2 className="mt-10 text-6xl font-black leading-tight tracking-tighter text-white">
              Digital 
              <span className="block text-cyan-400">Tax Core</span>
            </h2>

            <p className="mt-8 max-w-sm text-xl font-medium leading-relaxed text-slate-400">
              Sistem terintegrasi untuk pemantauan dan pelaporan pajak secara real-time dengan enkripsi tingkat tinggi.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-6">
            <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-md">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Verified Users</p>
              <h3 className="mt-4 text-4xl font-black text-white">8.2K</h3>
            </div>

            <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-md">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Annual Reports</p>
              <h3 className="mt-4 text-4xl font-black text-cyan-400">12K+</h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}