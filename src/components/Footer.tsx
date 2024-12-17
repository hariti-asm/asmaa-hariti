import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-gray-400">Building digital experiences</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com" className="hover:text-blue-400 transition">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-400 transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" className="hover:text-blue-400 transition">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="mailto:john.doe@example.com" className="hover:text-blue-400 transition">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}