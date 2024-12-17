import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Hariti Asmaa</h3>
            <p className="text-gray-400">Java/Angular Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://linkedin.com/in/asmaa-hariti" className="hover:text-blue-400 transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:haritiasmae@gmail.com" className="hover:text-blue-400 transition">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Hariti Asmaa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}