'use client';
import { useState } from 'react';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#work" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full py-4 px-4 sm:px-8 flex justify-between items-center bg-[#1a003a] shadow-lg z-50 sticky top-0">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#7c3aed] font-bold text-xl shadow-lg">
          <span>MG</span>
        </div>
        <span className="text-lg font-semibold text-white">Manasvi Gupta</span>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-8 text-sm font-medium">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-[#a78bfa] transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Mobile/Tablet Menu Button */}
      <div className="lg:hidden">
        <button 
          onClick={toggleMenu}
          className="text-white hover:text-[#a78bfa] transition-colors p-2"
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            {isMenuOpen ? (
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            ) : (
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1a003a] shadow-lg lg:hidden">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="px-6 py-3 text-sm font-medium hover:text-[#a78bfa] hover:bg-[#a78bfa]/10 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
} 