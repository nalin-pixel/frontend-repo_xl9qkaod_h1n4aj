import { useState } from 'react';
import { Shield, FileText, CheckCircle2, Lock, BookOpen } from 'lucide-react';

export default function PrivacyCompliance() {
  const [tab, setTab] = useState('privacy');

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setTab(id)}
      className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm transition border ${
        tab === id
          ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );

  return (
    <section id="compliance" className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 flex items-center gap-3">
              <Shield className="h-6 w-6 text-blue-600" /> Privacy & Compliance
            </h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Centralized controls to keep your AI programs compliant. Review data handling, retention,
              DSRs, and attestations in one place.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <TabButton id="privacy" label="Privacy" icon={Lock} />
            <TabButton id="compliance" label="Compliance" icon={CheckCircle2} />
            <TabButton id="policies" label="Policies" icon={FileText} />
          </div>
        </div>

        {/* Anchor for direct link to Privacy */}
        <div id="privacy" className="sr-only" />

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {tab === 'privacy' && (
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-medium text-slate-900 flex items-center gap-2">
                  <Lock className="h-5 w-5 text-blue-600" /> Data Privacy Overview
                </h3>
                <p className="mt-2 text-slate-600">
                  We minimize personal data, apply purpose limitation, and support user rights including
                  access, portability, rectification, and erasure.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    Encryption in transit (TLS 1.2+) and at rest (AES-256)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    Fine-grained data retention with redaction for logs and prompts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    Regional data residency and audit trails for DSR fulfillment
                  </li>
                </ul>
              </div>
            )}

            {tab === 'compliance' && (
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-medium text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" /> Compliance Controls
                </h3>
                <p className="mt-2 text-slate-600">
                  Map controls to frameworks and generate evidence for audits.
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {["GDPR Readiness","SOC 2 Controls","ISO 27001 Mappings","HIPAA Safeguards"].map((c) => (
                    <div key={c} className="rounded-lg border border-slate-200 p-4">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-slate-900">{c}</p>
                        <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs text-green-700 ring-1 ring-green-200">
                          Passing
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-slate-600">Control coverage: 85% · Last reviewed: 7d ago</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === 'policies' && (
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-medium text-slate-900 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-indigo-600" /> Policy Library
                </h3>
                <p className="mt-2 text-slate-600">
                  Browse and download policy documents used across your AI programs.
                </p>
                <ul className="mt-4 divide-y divide-slate-200 rounded-md border border-slate-200">
                  {[
                    { name: 'Privacy Policy', size: '128 KB' },
                    { name: 'Data Retention Policy', size: '96 KB' },
                    { name: 'Responsible AI Standard', size: '188 KB' },
                  ].map((p) => (
                    <li key={p.name} className="flex items-center justify-between px-4 py-3">
                      <span className="text-slate-800">{p.name}</span>
                      <span className="text-xs text-slate-500">{p.size}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="space-y-4">
            <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-5">
              <p className="text-sm text-slate-700">
                Export an audit-ready report including data flows, control mappings, and evidence.
              </p>
              <button className="mt-3 w-full rounded-md bg-blue-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-blue-700">
                Generate Report (PDF)
              </button>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-slate-900">DSR Queue</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li className="flex items-center justify-between">
                  <span>Access Request · EU</span>
                  <span className="rounded-full bg-amber-50 px-2 py-0.5 text-amber-700 text-xs ring-1 ring-amber-200">Due 2d</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Deletion Request · US</span>
                  <span className="rounded-full bg-green-50 px-2 py-0.5 text-green-700 text-xs ring-1 ring-green-200">Completed</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
