import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: "#work", label: "EXPERIENCE" },
    { href: "#certifications", label: "CERTIFICATIONS" },
    { href: "#education", label: "EDUCATION" },
    { href: "#projects", label: "PROJECTS" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="section-container flex justify-between items-center">
        <a href="#home" className="text-2xl font-black tracking-tighter text-white group">
          Asmaa<span className="text-blue-500 group-hover:text-purple-500 transition-colors">.</span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[10px] font-black tracking-[0.3em] text-slate-500 hover:text-blue-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button className="lg:hidden text-slate-400 hover:text-white transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}