import Header from './components/Header';
import StatsOverview from './components/StatsOverview';
import DecisionFeed from './components/DecisionFeed';
import ChartsPanel from './components/ChartsPanel';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-blue-50/60 via-transparent to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Enterprise AI Transparency & Compliance</h2>
            <p className="mt-4 text-slate-600 text-lg">Capture every AI decision, explain model behavior, detect bias, and generate audit-ready compliance reports — all in one place.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Start Audit Sandbox</button>
              <button className="rounded-md border border-slate-200 bg-white px-4 py-2 text-slate-800 hover:bg-slate-50">View API Docs</button>
            </div>
            <ul className="mt-6 grid gap-2 text-sm text-slate-600">
              <li>• Real-time decision logging with versioning</li>
              <li>• Explainability: feature importance, decision paths, counterfactuals</li>
              <li>• Bias detection with automated risk scoring and alerts</li>
              <li>• Compliance: GDPR, SOC2, HIPAA templates and reporting</li>
            </ul>
          </div>
          <div className="relative h-64 sm:h-80 lg:h-96">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600" />
            <div className="absolute inset-0 m-2 rounded-2xl bg-white/10 backdrop-blur-2xl ring-1 ring-white/20" />
            <div className="absolute inset-0 m-6 rounded-xl bg-white/90 p-5 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-slate-200 p-3">
                <p className="text-xs text-slate-500">Explainability</p>
                <p className="mt-1 text-sm font-medium text-slate-800">Top Features</p>
                <ul className="mt-2 space-y-1 text-xs text-slate-600">
                  <li>• income (0.31)</li>
                  <li>• dti (0.22)</li>
                  <li>• credit_len (0.18)</li>
                  <li>• age (0.12)</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 p-3">
                <p className="text-xs text-slate-500">Compliance</p>
                <p className="mt-1 text-sm font-medium text-slate-800">GDPR Checks</p>
                <ul className="mt-2 space-y-1 text-xs text-slate-600">
                  <li>• Lawful basis: OK</li>
                  <li>• Data minimization: OK</li>
                  <li>• Sensitive attrs masked</li>
                  <li>• Explainability attached</li>
                </ul>
              </div>
              <div className="col-span-2 rounded-lg border border-slate-200 p-3">
                <p className="text-xs text-slate-500">Risk Alerts</p>
                <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                  <span className="rounded-md bg-emerald-50 text-emerald-700 px-2 py-1">Low: 68%</span>
                  <span className="rounded-md bg-amber-50 text-amber-700 px-2 py-1">Medium: 24%</span>
                  <span className="rounded-md bg-red-50 text-red-700 px-2 py-1">High: 8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <Hero />
      <StatsOverview />
      <DecisionFeed />
      <ChartsPanel />
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-500 flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Trust & Fairness Platform</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-slate-700" href="#">Privacy</a>
            <a className="hover:text-slate-700" href="#">Compliance</a>
            <a className="hover:text-slate-700" href="#">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
