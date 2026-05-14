import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="text-[#8b949e] text-[13px]">
            Built with React & Tailwind
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/hariti-asm" target="_blank" className="text-[#8b949e] hover:text-white transition-colors flex items-center gap-2 text-[13px]">
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/asmaa-hariti" target="_blank" className="text-[#8b949e] hover:text-white transition-colors flex items-center gap-2 text-[13px]">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="https://github.com/hariti-asm/asmaa-hariti" target="_blank" className="text-[#8b949e] hover:text-white transition-colors flex items-center gap-2 text-[13px]">
              <Code className="w-4 h-4" />
              Source
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}