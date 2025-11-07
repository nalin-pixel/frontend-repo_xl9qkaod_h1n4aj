import { Bell, Settings, Shield, Activity } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 grid place-items-center text-white shadow">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-slate-800">Trust & Fairness Platform</h1>
            <p className="text-xs text-slate-500">Transparency • Explainability • Compliance</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
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
        </div>
      </div>
    </header>
  );
}
