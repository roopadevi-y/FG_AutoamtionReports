import { Mail, User } from 'lucide-react';
import { Layout } from '../layouts/Layout';
import { Card } from '../components/Card';

export const ContactPage = () => {
  const teamContacts = [
    {
      name: 'Suryam Mangalampalli',
      email: 'suryam.m@fluentgrid.com',
    },
    {
      name: 'Roopa Devi Yellati',
      email: 'roopadevi.y@fluentgrid.com',
    },
  ];

  return (
    <Layout>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-100 mb-4 drop-shadow-[0_2px_12px_rgba(96,165,250,0.22)]">
            Contact
          </h1>
          <p className="text-xl text-blue-200/90">
            Reach out to the report owners below.
          </p>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            {teamContacts.map((person) => (
              <a key={person.email} href={`mailto:${person.email}`} className="group w-full max-w-3xl">
                <Card className="flex items-center gap-4 h-24 border border-slate-300/80 bg-slate-100/90 shadow-md shadow-slate-900/20">
                  <div className="p-3 rounded-full bg-slate-200 text-slate-500 group-hover:scale-110 transition-transform shrink-0">
                    <User size={22} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-800 text-lg truncate">
                      {person.name}
                    </p>
                    <p className="text-sm text-cyan-700 font-semibold truncate flex items-center gap-2">
                      <Mail size={14} />
                      {person.email}
                    </p>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
