import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 active:scale-95';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/50 dark:from-blue-600 dark:to-blue-700 dark:hover:shadow-blue-400/60',
    secondary: 'bg-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/50 dark:bg-purple-600 dark:hover:shadow-purple-400/60',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white dark:text-blue-300 dark:border-blue-400 dark:hover:bg-blue-600 dark:hover:shadow-blue-400/50',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
