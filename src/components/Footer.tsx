export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/60 dark:bg-blue-950/60 backdrop-blur-xl border-t border-white/40 dark:border-blue-400/20 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border-t border-gray-200 dark:border-dark-700 pt-8">
          <div className="flex justify-center items-center">
            <p className="text-gray-600 dark:text-blue-200 text-sm">
              © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
