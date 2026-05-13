import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <div className={`mb-16 text-center ${className}`}>
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
        {children}
      </h2>
      <div className="mt-6 flex justify-center">
        <div className="flex space-x-1">
          <div className="w-8 h-1 bg-indigo-600 rounded-full"></div>
          <div className="w-2 h-1 bg-indigo-400 rounded-full"></div>
          <div className="w-1 h-1 bg-indigo-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}