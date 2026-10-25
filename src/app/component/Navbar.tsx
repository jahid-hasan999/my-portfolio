'use client';

import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="relative flex items-center justify-between px-5 py-6 sm:px-8">
      {/* Logo */}
      <a href="#home" className="text-2xl font-bold text-blue-400">
        Jahid.dev
      </a>

      {/* Desktop Menu */}
      <div className="hidden items-center gap-6 text-sm md:flex">
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            className="transition-colors hover:text-blue-400"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="rounded-lg border border-slate-700 px-3 py-2 text-xl text-white transition hover:border-blue-400 md:hidden"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute right-5 top-full z-50 flex min-w-44 flex-col gap-1 rounded-xl border border-slate-700 bg-slate-950 p-3 shadow-xl md:hidden">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-sm text-white transition hover:bg-slate-800 hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
