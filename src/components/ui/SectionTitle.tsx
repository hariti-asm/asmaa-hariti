import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 ${className}`}>
        {children}
      </h2>
      <div className="mt-4 flex justify-center">
        <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
      </div>
    </div>
  );
}