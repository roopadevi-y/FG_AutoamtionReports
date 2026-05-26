import type { ReactElement } from 'react';
import { useState } from 'react';
import { BarChart3, LineChart, PieChart, TrendingUp, Zap, Cpu, Activity, FileText, Database, Radio } from 'lucide-react';
import { Layout } from '../layouts/Layout';

type Vertical = 'GIM' | 'CIS' | 'AMI';

const gimReports = [
  {
    label: 'ICCCEvent-V1',
    href: '/ICCCEvent-V1/index.html',
  },
  {
    label: 'VC-JoinCall',
    href: '/VC-JoinCall/index.html',
  },
  {
    label: 'VC-Start Call',
    href: '/VC-Start%20Call/index.html',
  },
  {
    label: 'KPI-Alert',
    href: '/KPI-Alert/KPI-Alert.html',
  },
  {
    label: 'MassNotification',
    href: '/GIS%20Vertical/MassNotification.html',
  },
];

const cisReports = [
    {
      label: 'WithOutSCNoTC',
      href: '/WithOutSCNoTC/index.html',
    },
  {
    label: 'DuplicateComplaint',
    href: '/DuplicateComplaint/index.html',
  },
  {
    label: 'RegistrationTC',
    href: '/RegistrationTC/index.html',
  },
  {
    label: 'WorkFlow-RectClosed',
    href: '/WorkFlow-RectClosed/index.html',
  },
  {
    label: 'WorkFlow-Rectified',
    href: '/WorkFlow-Rectified/index.html',
  },
  {
    label: 'WorkFlow -rejectedInvalid',
    href: '/WorkFlow%20-rejectedInvalid/index.html',
  },
  {
    label: 'ViewStatusAll',
    href: '/ViewStatusAll/index.html',
  },
];

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
  const [selectedGimReport, setSelectedGimReport] = useState('');
  const [selectedCisReport, setSelectedCisReport] = useState('');
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-200 mb-4 drop-shadow-[0_2px_12px_rgba(96,165,250,0.22)]">
            FG Test Reports
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

      {/* GIM vertical: show View Detailed Report button only */}
      {activeVertical === 'GIM' && (
        <section className="py-8 px-4 sm:px-6 lg:px-8 pb-20">
          <div className="mx-auto mt-6 flex flex-col items-center">
            <select
              id="gim-report-select"
              aria-label="Report"
              value={selectedGimReport}
              onChange={(event) => setSelectedGimReport(event.target.value)}
              className="w-fit min-w-[210px] rounded-lg border border-blue-700 px-4 py-3 bg-blue-900 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="" disabled hidden>
                Choose a Report
              </option>
              {gimReports.map((report) => (
                <option key={report.label} value={report.href}>
                  {report.label}
                </option>
              ))}
            </select>

            {selectedGimReport && (
              <div className="flex justify-center mt-8">
                <a
                  href={selectedGimReport}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 rounded-lg bg-blue-600 text-white font-bold text-lg shadow-lg hover:bg-blue-700 transition-colors"
                >
                  View Detailed Report
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CIS vertical: show View Detailed Report button only */}
      {activeVertical === 'CIS' && (
        <section className="py-8 px-4 sm:px-6 lg:px-8 pb-20">
          <div className="mx-auto mt-6 flex flex-col items-center">
            <select
              id="cis-report-select"
              aria-label="Report"
              value={selectedCisReport}
              onChange={(event) => setSelectedCisReport(event.target.value)}
              className="w-fit min-w-[210px] rounded-lg border border-blue-700 px-4 py-3 bg-blue-900 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="" disabled hidden>
                Choose a Report
              </option>
              {cisReports.map((report) => (
                <option key={report.label} value={report.href}>
                  {report.label}
                </option>
              ))}
            </select>

            {selectedCisReport && (
              <div className="flex justify-center mt-8">
                <a
                  href={selectedCisReport}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 rounded-lg bg-blue-600 text-white font-bold text-lg shadow-lg hover:bg-blue-700 transition-colors"
                >
                  View Detailed Report
                </a>
              </div>
            )}
          </div>
        </section>
      )}
    </Layout>
  );
};
