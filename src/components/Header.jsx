import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Settings, Shield, Activity, Menu, X, Search } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Overview", href: "#overview" },
    { label: "Decisions", href: "#decisions" },
    { label: "Dashboards", href: "#dashboards" },
    { label: "Reports", href: "#reports" },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* Subtle 3D-ish accents that never block interaction */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 overflow-hidden">
        <motion.span
          initial={{ opacity: 0, y: -6, scale: 0.98 }}
          animate={{ opacity: 0.9, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute left-10 top-2 h-6 w-6 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(59,130,246,0.9), rgba(168,85,247,0.55) 60%, rgba(2,6,23,0.08))",
            filter: "blur(0.4px)",
            boxShadow: "0 8px 20px rgba(59,130,246,0.25)",
          }}
        />
        <motion.span
          initial={{ opacity: 0, y: -4, x: 8 }}
          animate={{ opacity: 0.8, y: 0, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="absolute right-16 top-3 h-8 w-8 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(34,211,238,0.9), rgba(99,102,241,0.55) 60%, rgba(2,6,23,0.08))",
            filter: "blur(0.6px)",
            boxShadow: "0 10px 24px rgba(99,102,241,0.25)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3">
          <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 grid place-items-center text-white shadow">
            <Shield className="h-5 w-5" />
            {/* Tiny highlight ring */}
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/30" />
          </div>
          {/* Removed brand text per request */}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          {navItems.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-slate-900 transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Search input (md+) */}
          <div className="relative hidden md:block">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-3 py-2 text-sm rounded-md border border-slate-200 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/40"
            />
          </div>
          <button className="hidden md:inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
            <Activity className="h-4 w-4 text-blue-600" />
            Live
          </button>
          <button className="relative rounded-md p-2 hover:bg-slate-100">
            <Bell className="h-5 w-5 text-slate-600" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
          </button>
          <button className="rounded-md p-2 hover:bg-slate-100">
            <Settings className="h-5 w-5 text-slate-600" />
          </button>
          {/* CTA (md+) */}
          <a
            href="#sandbox"
            className="hidden md:inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-blue-700 active:translate-y-0"
          >
            Launch Sandbox
          </a>

          {/* Hamburger (mobile) */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex md:hidden items-center justify-center rounded-md p-2 hover:bg-slate-100"
          >
            {open ? <X className="h-6 w-6 text-slate-700" /> : <Menu className="h-6 w-6 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="relative px-4 py-4">
            {/* Decorative 3D-ish band */}
            <div className="pointer-events-none absolute -top-3 left-4 right-4 h-8 rounded-lg bg-gradient-to-r from-indigo-500/15 via-cyan-400/10 to-blue-500/15 blur" />
            <div className="grid gap-2">
              {navItems.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#sandbox"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow-sm"
              >
                Launch Sandbox
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
