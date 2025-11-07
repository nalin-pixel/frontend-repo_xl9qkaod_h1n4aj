import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const riskData = [
  { name: 'Low', value: 68 },
  { name: 'Medium', value: 24 },
  { name: 'High', value: 8 },
];

const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

const domainData = [
  { name: 'Finance', flags: 24 },
  { name: 'Healthcare', flags: 18 },
  { name: 'HR', flags: 9 },
  { name: 'Retail', flags: 7 },
];

export default function ChartsPanel() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 grid gap-6 lg:grid-cols-2">
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="text-sm font-semibold text-slate-800">Risk Distribution</h3>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={riskData} cx="50%" cy="50%" outerRadius={90} fill="#8884d8" dataKey="value" label>
                {riskData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="text-sm font-semibold text-slate-800">Flags by Domain</h3>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={domainData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="flags" fill="#3b82f6" radius={[6,6,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
