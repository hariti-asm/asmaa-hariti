import React from 'react';
import { Menu, Linkedin } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gray-900">Hariti Asmaa</div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#skills" className="text-gray-700 hover:text-gray-900">Skills</a>
            <a href="#education" className="text-gray-700 hover:text-gray-900">Education</a>
            <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/asmaa-hariti" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-gray-900"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}