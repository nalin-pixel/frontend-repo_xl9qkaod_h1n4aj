import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import Header from './components/Header';
import StatsOverview from './components/StatsOverview';
import DecisionFeed from './components/DecisionFeed';

// Lazy-load heavier visualizations to make initial paint faster
const ChartsPanel = lazy(() => import('./components/ChartsPanel'));

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle gradient vignette that doesn't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50/60 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Left: Copy and primary actions */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900"
            >
              Enterprise AI Transparency & Compliance
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="mt-4 text-slate-600 text-lg"
            >
              Capture every AI decision, explain model behavior, detect bias, and generate audit-ready reports — all in one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <button className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-blue-700 active:translate-y-0">
                Start Audit Sandbox
              </button>
              <button className="rounded-md border border-slate-200 bg-white px-4 py-2 text-slate-800 shadow-sm transition hover:bg-slate-50">
                View API Docs
              </button>
            </motion.div>

            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
              className="mt-6 grid gap-2 text-sm text-slate-600"
            >
              {[
                'Real-time decision logging with versioning',
                'Explainability: feature importance, decision paths, counterfactuals',
                'Bias detection with automated risk scoring and alerts',
                'Compliance: GDPR, SOC2, HIPAA templates and reporting',
              ].map((item) => (
                <motion.li key={item} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right: Interactive Spline scene */}
          <div className="relative h-72 sm:h-96 lg:h-[520px]">
            <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 bg-gradient-to-br from-indigo-50 via-white to-blue-50" />
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Spline
                scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            {/* Soft light bloom that does not block interactions */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/30 via-transparent to-transparent" />
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

      {/* Defer heavy charts until needed for faster initial load */}
      <Suspense
        fallback={
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="h-64 w-full animate-pulse rounded-xl bg-white shadow-sm ring-1 ring-black/5" />
          </div>
        }
      >
        <ChartsPanel />
      </Suspense>

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
