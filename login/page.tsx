import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Core Pajak - Tax Modules",
  description: "Integrated national tax administration system.",
};

export default function LoginPage() {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-20">

      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[40px] bg-white shadow-2xl lg:grid-cols-2">

        {/* Left */}
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-700 p-14 lg:flex lg:flex-col lg:justify-between">

          <div>

            <div className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur">
              Smart Core Pajak
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white">

              Digital Tax
              <span className="block">
                Administration
              </span>

            </h1>

            <p className="mt-6 max-w-md leading-8 text-cyan-100">

              Platform modern untuk pengelolaan perpajakan,
              validasi data, dan monitoring realtime.

            </p>

          </div>

          {/* Bottom Card */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">

            <p className="text-sm text-cyan-100">
              System Status
            </p>

            <h3 className="mt-3 text-3xl font-black text-white">
              Stable & Secure
            </h3>

          </div>

        </div>

        {/* Right */}
        <div className="p-10 md:p-16">

          <div className="mx-auto max-w-md">

            <h2 className="text-4xl font-black text-slate-900">
              Login Account
            </h2>

            <p className="mt-3 text-slate-500">
              Access Smart Core Pajak dashboard system.
            </p>

            {/* Form */}
            <form className="mt-10 space-y-6">

              {/* Email */}
              <div>

                <label className="text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-3 w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-cyan-500"
                />

              </div>

              {/* Password */}
              <div>

                <label className="text-sm font-semibold text-slate-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-3 w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-cyan-500"
                />

              </div>

              {/* Remember */}
              <div className="flex items-center justify-between">

                <label className="flex items-center gap-3 text-sm text-slate-600">

                  <input type="checkbox" />

                  Remember me

                </label>

                <a
                  href="#"
                  className="text-sm font-medium text-cyan-600"
                >
                  Forgot Password?
                </a>

              </div>

              {/* Button */}
              <button
                type="submit"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-500"
              >
                Login System
              </button>

            </form>

            {/* Bottom */}
            <p className="mt-8 text-center text-sm text-slate-500">

              Don't have an account?

              <a
                href="/register"
                className="ml-2 font-semibold text-cyan-600"
              >
                Register
              </a>

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}