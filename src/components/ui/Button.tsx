import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  as?: any;
  href?: string;
  target?: string;
}

export function Button({ variant = 'primary', children, className = '', as: Component = 'button', ...props }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-xl transition-all duration-300 inline-flex items-center justify-center font-bold text-sm tracking-wide uppercase';
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0'
  };

  return (
    <Component 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}