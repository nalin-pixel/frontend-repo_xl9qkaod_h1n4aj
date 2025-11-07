import { ArrowRight, ActivitySquare, Clock, Database } from "lucide-react";

const FeedItem = ({ model, domain, risk, time, confidence }) => {
  const riskColor = risk === "High" ? "text-red-600 bg-red-50" : risk === "Medium" ? "text-amber-600 bg-amber-50" : "text-emerald-600 bg-emerald-50";
  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-md bg-slate-50 grid place-items-center">
          <ActivitySquare className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-800">{model} <span className="text-slate-400 font-normal">• {domain}</span></p>
          <div className="mt-1 flex items-center gap-3 text-xs text-slate-500">
            <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 ${riskColor}`}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {risk} risk
            </span>
            <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{time}</span>
            <span className="inline-flex items-center gap-1"><Database className="h-3 w-3" />{confidence}% conf.</span>
          </div>
        </div>
      </div>
      <button className="inline-flex items-center gap-2 text-sm text-blue-700 hover:text-blue-800">
        Inspect
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default function DecisionFeed() {
  const data = [
    { model: "Loan Approval RF", domain: "Finance", risk: "Medium", time: "2m ago", confidence: 88 },
    { model: "Patient Risk GB", domain: "Healthcare", risk: "High", time: "5m ago", confidence: 73 },
    { model: "Candidate Screen LR", domain: "HR", risk: "Low", time: "10m ago", confidence: 95 },
    { model: "Loan Approval RF", domain: "Finance", risk: "Low", time: "16m ago", confidence: 92 },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid gap-4 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-3">
        {data.map((d, i) => (
          <FeedItem key={i} {...d} />
        ))}
      </div>
      <div className="space-y-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-sm font-semibold text-slate-800">Compliance Center</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• GDPR processing basis verified</li>
            <li>• SOC2 control mapping up-to-date</li>
            <li>• HIPAA PHI handling checks passing</li>
          </ul>
          <button className="mt-4 w-full rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-blue-700">Generate Audit Report</button>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-sm font-semibold text-slate-800">Interactive Audit Sandbox</h3>
          <p className="mt-2 text-sm text-slate-600">Simulate a decision and view explainability and compliance before deployment.</p>
          <button className="mt-4 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-700 hover:bg-slate-50">Open Sandbox</button>
        </div>
      </div>
    </section>
  );
}
