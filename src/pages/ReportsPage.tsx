import type { ReactElement } from 'react';
import { useState } from 'react';
import { BarChart3, LineChart, PieChart, TrendingUp, Zap, Cpu, Activity, FileText, Database, Radio } from 'lucide-react';
import { Layout } from '../layouts/Layout';
import { Card } from '../components/Card';

type Vertical = 'GIM' | 'CIS' | 'AMI';

const verticalData: Record<Vertical, { label: string; description: string; color: string; reports: { icon: ReactElement; title: string; description: string; date: string }[] }> = {
  GIM: {
    label: 'GIM',
    description: '',
    color: 'from-blue-500/20 to-cyan-500/20',
    reports: [
      {
        icon: <BarChart3 size={28} />,
        title: '',
        description: '',
        date: '',
      },
      {
        icon: <Activity size={28} />,
        title: '',
        description: '',
        date: '',
      },
      {
        icon: <TrendingUp size={28} />,
        title: '',
        description: '',
        date: '',
      },
      {
        icon: <LineChart size={28} />,
        title: '',
        description: '',
        date: '',
      },
    ],
  },
  CIS: {
    label: 'CIS',
    description: '',
    color: 'from-purple-500/20 to-pink-500/20',
    reports: [
      {
        icon: <FileText size={28} />,
        title: '',
        description: '',
        date: '',
      },
      {
        icon: <PieChart size={28} />,
        title: '',
        description: '',
        date: '',
      },
      {
        icon: <TrendingUp size={28} />,
        title: '',
        description: '',
        date: '',
      },
      {
        icon: <BarChart3 size={28} />,
        title: '',
        description: '',
        date: '',
      },
    ],
  },
  AMI: {
    label: 'AMI',
    description: '',
    color: 'from-emerald-500/20 to-teal-500/20',
    reports: [
      {
        icon: <Radio size={28} />,
        title: '',
        description: '',
        date: '',
      },
      {
        icon: <Zap size={28} />,
        title: '',
        description: '',
        date: '',
      },
      {
        icon: <Database size={28} />,
        title: '',
        description: '',
        date: '',
      },
      {
        icon: <Cpu size={28} />,
        title: '',
        description: '',
        date: '',
      },
    ],
  },
};

export const ReportsPage = () => {
  const [activeVertical, setActiveVertical] = useState<Vertical>('GIM');
  const current = verticalData[activeVertical];

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-200 mb-4 drop-shadow-[0_2px_12px_rgba(96,165,250,0.22)]">
            FG Test Report
          </h1>
          <p className="text-xl text-blue-100/95 drop-shadow-[0_1px_8px_rgba(30,64,175,0.2)]">
            Select a vertical to view its reports and analytics.
          </p>
        </div>
      </section>

      {/* Vertical Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 pb-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 border-b border-gray-200 dark:border-blue-500/20">
            {(Object.keys(verticalData) as Vertical[]).map((v) => (
              <button
                key={v}
                onClick={() => setActiveVertical(v)}
                className={`px-8 py-3 text-lg font-bold rounded-t-lg transition-all border-b-2 -mb-px ${
                  activeVertical === v
                    ? 'border-blue-500 text-blue-600 dark:text-blue-300 bg-blue-500/10'
                    : 'border-transparent text-gray-500 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 hover:bg-blue-500/5'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical Description Banner */}
      <section className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className={`rounded-xl p-5 bg-gradient-to-r ${current.color} border border-white/20 dark:border-blue-400/20 backdrop-blur`}>
            {current.description && (
              <p className="text-gray-700 dark:text-blue-100 font-medium">{current.description}</p>
            )}
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {current.reports.map((report, index) => (
              <Card key={`${activeVertical}-${index}`} className="space-y-6 flex flex-col h-full">
                <div>
                  <div className="inline-block p-3 rounded-lg bg-blue-500/20 text-blue-500 dark:text-blue-300 mb-4">
                    {report.icon}
                  </div>
                  {report.title && (
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-blue-50 mb-2">
                      {report.title}
                    </h3>
                  )}
                  {report.description && (
                    <p className="text-gray-600 dark:text-blue-200">
                      {report.description}
                    </p>
                  )}
                </div>
                {report.date && (
                  <div className="mt-auto space-y-4">
                    <p className="text-sm text-gray-500 dark:text-blue-300">{report.date}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
