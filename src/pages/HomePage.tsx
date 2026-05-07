import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, BarChart3, PieChart } from 'lucide-react';
import { Layout } from '../layouts/Layout';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const HomePage = () => {
  const features = [
    {
      icon: <BarChart3 size={32} />,
      title: 'Advanced Analytics',
      description: 'Get deep insights into your data with powerful visualization tools.',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Real-Time Reports',
      description: 'Monitor your metrics in real-time with live dashboards.',
    },
    {
      icon: <PieChart size={32} />,
      title: 'Custom Metrics',
      description: 'Create custom reports tailored to your business needs.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                FG <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Reports</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Transform your data into actionable insights with our modern reporting platform.
              </p>
              <div className="flex gap-4 pt-6">
                <Link to="/reports">
                  <Button className="flex items-center gap-2">
                    Explore Reports
                    <ArrowRight size={20} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline">Contact Us</Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Hero Image Placeholder */}
            <div className="relative">
              <Card hover={false} className="h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 size={64} className="mx-auto mb-4 text-blue-500 opacity-50" />
                  <p className="text-gray-500 dark:text-gray-400">Dashboard Preview</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-blue-50 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-blue-200">
              Everything you need to succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="space-y-4">
                <div className="text-blue-500 dark:text-blue-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-blue-50">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-blue-200">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card hover={false} className="text-center space-y-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join thousands of users who trust FG Test Report for their data insights.
            </p>
            <Link to="/contact">
              <Button size="lg">Get Started Now</Button>
            </Link>
          </Card>
        </div>
      </section>
    </Layout>
  );
};
