import { useEffect, useState } from 'react';
import { Activity, Server, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';

// Mock status data — in a full app this would call the backend
const fetchStatus = async () => {
  // Simulate latency
  await new Promise((r) => setTimeout(r, 350));
  return {
    updatedAt: new Date().toISOString(),
    overall: 'operational',
    services: [
      { name: 'API Gateway', status: 'operational', latency: 123 },
      { name: 'Model Inference', status: 'degraded', latency: 482 },
      { name: 'Vector DB', status: 'operational', latency: 96 },
      { name: 'Logging & Audit', status: 'maintenance', latency: null },
    ],
    incidents: [
      {
        id: 'inc-2481',
        title: 'Elevated latency in Inference region eu-west-1',
        impact: 'degraded',
        started: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
        updates: [
          { t: new Date(Date.now() - 1000 * 60 * 40).toISOString(), msg: 'Investigating elevated latency.' },
          { t: new Date(Date.now() - 1000 * 60 * 20).toISOString(), msg: 'Mitigation deployed, monitoring.' },
        ],
      },
    ],
  };
};

export default function StatusPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetchStatus();
      setData(res);
      setLoading(false);
    })();
  }, []);

  const badge = (s) => {
    const map = {
      operational: 'bg-green-50 text-green-700 ring-green-200',
      degraded: 'bg-amber-50 text-amber-700 ring-amber-200',
      maintenance: 'bg-blue-50 text-blue-700 ring-blue-200',
      outage: 'bg-red-50 text-red-700 ring-red-200',
    };
    return `inline-flex items-center rounded-full px-2 py-0.5 text-xs ring-1 ${map[s] || map.operational}`;
  };

  return (
    <section id="status" className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 flex items-center gap-3">
              <Activity className="h-6 w-6 text-blue-600" /> System Status
            </h2>
            <p className="mt-2 text-slate-600">Live view of platform health and historical incidents.</p>
          </div>
          <div className="text-sm text-slate-600">
            Updated {loading ? '…' : new Date(data.updatedAt).toLocaleString()}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {/* Service grid */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-slate-900 flex items-center gap-2">
                  <Server className="h-5 w-5 text-slate-700" /> Core Services
                </h3>
                {!loading && (
                  <span className={badge(data.overall)}>
                    Overall: {data.overall}
                  </span>
                )}
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {(loading ? new Array(4).fill(null) : data.services).map((s, i) => (
                  <div key={i} className="rounded-lg border border-slate-200 p-4">
                    {loading ? (
                      <div className="h-5 w-40 animate-pulse rounded bg-slate-100" />
                    ) : (
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-slate-900">{s.name}</p>
                        <span className={badge(s.status)}>{s.status}</span>
                      </div>
                    )}
                    <p className="mt-2 text-sm text-slate-600 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-slate-400" />
                      {loading ? (
                        <span className="h-4 w-24 animate-pulse rounded bg-slate-100" />
                      ) : s.latency !== null ? (
                        <span>{s.latency} ms avg latency</span>
                      ) : (
                        <span>Under maintenance</span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Incidents */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-slate-900 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" /> Incidents
              </h3>
              <div className="mt-4 space-y-4">
                {loading && <div className="h-16 w-full animate-pulse rounded bg-slate-100" />}
                {!loading && data.incidents.length === 0 && (
                  <p className="text-sm text-slate-600">No incidents reported.</p>
                )}
                {!loading && data.incidents.map((inc) => (
                  <div key={inc.id} className="rounded-lg border border-slate-200 p-4">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-slate-900">{inc.title}</p>
                      <span className={badge(inc.impact)}>{inc.impact}</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-600">Started {new Date(inc.started).toLocaleString()}</p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {inc.updates.map((u, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span>
                            <span className="text-slate-500 mr-2">{new Date(u.t).toLocaleTimeString()}</span>
                            {u.msg}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar summary */}
          <aside className="space-y-4">
            <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-green-50 via-white to-emerald-50 p-5">
              <p className="text-sm text-slate-700">Real-time status API provides 30s refresh with regional rollups.</p>
              <button className="mt-3 w-full rounded-md bg-slate-900 px-3 py-2 text-sm text-white shadow-sm hover:bg-slate-800">
                Subscribe to Updates
              </button>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-slate-900">Uptime (30 days)</p>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div className="h-full bg-green-500" style={{ width: '99.96%' }} />
              </div>
              <p className="mt-2 text-xs text-slate-500">99.96% · SLO: 99.9%</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
