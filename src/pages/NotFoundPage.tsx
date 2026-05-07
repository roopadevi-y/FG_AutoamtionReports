import { Link } from 'react-router-dom';
import { Layout } from '../layouts/Layout';
import { Button } from '../components/Button';

export const NotFoundPage = () => {
  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Oops! The page you're looking for doesn't exist.
            </p>
          </div>
          <Link to="/">
            <Button size="lg">Back to Home</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};
