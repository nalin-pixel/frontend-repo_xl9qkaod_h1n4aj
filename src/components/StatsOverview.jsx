import { ShieldCheck, AlertTriangle, FileCheck2, Gauge } from "lucide-react";

const StatCard = ({ icon: Icon, label, value, sub }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="mt-1 text-2xl font-semibold text-slate-800">{value}</p>
      </div>
      <div className="h-11 w-11 rounded-lg bg-slate-50 grid place-items-center">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
    </div>
    {sub && <p className="mt-3 text-xs text-slate-500">{sub}</p>}
  </div>
);

export default function StatsOverview() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard icon={ShieldCheck} label="Compliance Rate" value="98.7%" sub="GDPR • SOC2 • HIPAA" />
      <StatCard icon={AlertTriangle} label="High-Risk Flags" value="12" sub="Last 24 hours" />
      <StatCard icon={FileCheck2} label="Decisions Logged" value="1,248,930" sub="All services" />
      <StatCard icon={Gauge} label="Avg. Confidence" value="91.3%" sub="Rolling 7 days" />
    </section>
  );
}
