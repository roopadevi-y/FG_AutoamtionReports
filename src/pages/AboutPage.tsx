import { Users, Target, Zap } from 'lucide-react';
import { Layout } from '../layouts/Layout';
import { Card } from '../components/Card';

export const AboutPage = () => {
  const values = [
    {
      icon: <Target size={32} />,
      title: 'Mission',
      description: 'To empower businesses with data-driven insights that lead to smarter decisions.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Innovation',
      description: 'We continuously innovate to bring cutting-edge reporting solutions.',
    },
    {
      icon: <Users size={32} />,
      title: 'Community',
      description: 'Building a community of data-driven organizations worldwide.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-transparent dark:from-dark-800 dark:to-dark-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-blue-50">
            About FG Testing
          </h1>
          <p className="text-xl text-gray-600 dark:text-blue-200">
            We're on a mission to transform how businesses analyze and understand their data.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Card hover={false} className="h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              <p className="text-gray-500 dark:text-blue-300 text-center">Company Image</p>
            </Card>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-blue-50">
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-blue-200 text-lg">
                FG Testing was founded with a simple vision: to make data analytics accessible to everyone. We started as a small team of data enthusiasts and have grown into a global platform trusted by thousands of organizations.
              </p>
              <p className="text-gray-600 dark:text-blue-200 text-lg">
                Today, we're committed to providing the most intuitive and powerful reporting tools in the industry, helping businesses unlock the potential of their data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-blue-50 text-center mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center space-y-4">
                <div className="inline-block p-4 rounded-lg bg-blue-500/20 text-blue-500 dark:text-blue-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-blue-50">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-blue-200">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '10K+', label: 'Active Users' },
              { number: '500+', label: 'Enterprise Clients' },
              { number: '99.9%', label: 'Uptime' },
              { number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <Card key={index} hover={false} className="text-center space-y-2">
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="text-gray-600 dark:text-blue-200">
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
