import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`
        rounded-2xl backdrop-blur-lg
        bg-white/60 dark:bg-blue-950/40
        border border-white/60 dark:border-blue-400/20
        shadow-sm dark:shadow-blue-900/30
        p-6 transition-all duration-300
        ${hover ? 'hover:bg-white/75 dark:hover:bg-blue-900/50 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20 hover:-translate-y-1 cursor-pointer dark:hover:border-blue-400/40' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
