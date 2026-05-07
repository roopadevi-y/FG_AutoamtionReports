import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { TechBackground } from '../components/TechBackground';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen transition-colors relative">
      <TechBackground />
      <Navbar />
      <main className="min-h-[calc(100vh-128px)] relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};
