import { useState } from 'react';
import { Send, User } from 'lucide-react';
import { Layout } from '../layouts/Layout';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

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
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-transparent dark:from-dark-800 dark:to-dark-900">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-blue-50">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-blue-200">
            Have a question? We'd love to hear from you. Send us a message!
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Team Contacts */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-50 mb-6 text-center">
              Team Contacts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {teamContacts.map((person, index) => (
                <a key={index} href={`mailto:${person.email}`} className="group">
                  <Card className="flex items-center gap-4 h-full">
                    <div className="p-3 rounded-full bg-blue-500/20 text-blue-500 dark:text-blue-300 group-hover:scale-110 transition-transform shrink-0">
                      <User size={22} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 dark:text-blue-50 truncate">
                        {person.name}
                      </p>
                      <p className="text-sm text-blue-600 dark:text-blue-300 truncate">
                        {person.email}
                      </p>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card hover={false} className="space-y-8">
            {submitted && (
              <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-700 dark:text-green-300">
                ✓ Thank you! We've received your message and will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-600 text-gray-900 dark:text-blue-50 placeholder-gray-500 dark:placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-600 text-gray-900 dark:text-blue-50 placeholder-gray-500 dark:placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-600 text-gray-900 dark:text-blue-50 placeholder-gray-500 dark:placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full flex items-center justify-center gap-2">
                <Send size={20} />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </Layout>
  );
};
