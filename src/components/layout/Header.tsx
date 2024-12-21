import React from 'react';
import { Menu, Linkedin, Download } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gray-900">Hariti Asmaa</div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
            <a href="#skills" className="text-gray-700 hover:text-gray-900 transition-colors">Skills</a>
            <a href="#education" className="text-gray-700 hover:text-gray-900 transition-colors">Education</a>
            <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="/Asmaa_Hariti_CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              download
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Download className="w-4 h-4" />
              CV
            </a>
            <a 
              href="https://www.linkedin.com/in/asmaa-hariti" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}