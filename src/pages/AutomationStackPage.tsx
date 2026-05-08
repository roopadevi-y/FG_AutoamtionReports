import { Activity, FileJson, Gauge, MonitorPlay, Workflow } from 'lucide-react';
import { Layout } from '../layouts/Layout';
import { Card } from '../components/Card';

const stackSections = [
  {
    title: 'Playwright',
    subtitle: 'Fast Modern Browser Automation',
    icon: MonitorPlay,
    tools: ['Chromium', 'Firefox', 'WebKit'],
    description:
      'Playwright enables reliable end-to-end automation across Chromium, Firefox, and WebKit browsers with high execution speed and cross-browser compatibility. It supports parallel execution, auto-waiting mechanisms, network interception, and modern UI validation for scalable web application testing.',
  },
  {
    title: 'API Testing',
    subtitle: 'Postman & Swagger OpenAPI',
    icon: Workflow,
    secondaryIcon: FileJson,
    tools: ['Postman', 'Swagger', 'OpenAPI'],
    description:
      'Postman and Swagger are used for validating REST APIs, request/response verification, authentication workflows, schema validation, and automated API regression testing. They help streamline collaboration between development, QA, and backend teams through reusable collections and API documentation.',
  },
  {
    title: 'Performance Testing',
    subtitle: 'Artillery & Apache JMeter',
    icon: Gauge,
    secondaryIcon: Activity,
    tools: ['Artillery', 'Apache JMeter'],
    description:
      'Artillery and JMeter are leveraged for load, stress, and scalability testing to measure application performance under concurrent user traffic. These tools help identify bottlenecks, monitor response times, validate system stability, and ensure production readiness for high-traffic environments.',
  },
];

export const AutomationStackPage = () => {
  return (
    <Layout>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-100 mb-4 drop-shadow-[0_2px_12px_rgba(96,165,250,0.22)]">
            Automation Stack
          </h1>
          <p className="text-lg md:text-xl text-blue-200/90 max-w-3xl mx-auto">
            Core tools and frameworks powering UI, API, and performance quality at scale.
          </p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {stackSections.map((section) => {
            const Icon = section.icon;
            const SecondaryIcon = section.secondaryIcon;

            return (
              <Card
                key={section.title}
                className="border border-slate-300/80 bg-slate-100/90 shadow-md shadow-slate-900/20 rounded-3xl"
              >
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="p-3 rounded-xl bg-slate-200 text-slate-500 border border-slate-300/70">
                      <Icon size={24} />
                    </div>
                    {SecondaryIcon ? (
                      <div className="p-3 rounded-xl bg-slate-200 text-slate-500 border border-slate-300/70">
                        <SecondaryIcon size={20} />
                      </div>
                    ) : null}
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-2xl font-semibold text-slate-800">{section.title}</h2>
                    <p className="text-cyan-700 font-semibold mt-1">{section.subtitle}</p>

                    <div className="flex flex-wrap gap-2 mt-4 mb-4">
                      {section.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-slate-200 text-slate-600 border border-slate-300/80"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <p className="text-slate-700 leading-relaxed text-[15px] md:text-base">
                      {section.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};
