'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 z-50 w-full px-4 pt-4 md:pt-6 pb-2 pointer-events-none">
        <header className="pointer-events-auto mx-auto max-w-7xl h-16 md:h-[72px] bg-white/95 backdrop-blur-md border border-pp-border shadow-[var(--clay-card)] rounded-2xl md:rounded-full px-4 md:px-8 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/logoconnombre.png"
              alt="Poppy Paws Mobile Grooming"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>

          {/* LINKS (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-pp-dark hover:text-pp-red transition-colors">Home</Link>
            <Link href="/services" className="text-sm font-medium text-pp-dark hover:text-pp-red transition-colors">Services</Link>
            <Link href="/about" className="text-sm font-medium text-pp-dark hover:text-pp-red transition-colors">About</Link>
            <Link href="/gallery" className="text-sm font-medium text-pp-dark hover:text-pp-red transition-colors">Gallery</Link>
            <Link href="/faq" className="text-sm font-medium text-pp-dark hover:text-pp-red transition-colors">FAQ</Link>
            <Link href="/service-area" className="text-sm font-medium text-pp-dark hover:text-pp-red transition-colors">Areas</Link>
          </nav>

          {/* ACCIONES (Desktop & Mobile Burger) */}
          <div className="flex items-center gap-4 md:gap-6">
            <span className="text-xs text-pp-muted cursor-pointer font-dm-sans">EN | ES</span>
            <a href="tel:5126770703" className="hidden sm:block text-sm font-medium text-pp-dark hover:text-pp-red transition-colors">(512) 677-0703</a>
            <Link
              href="/book"
              className="hidden md:inline-flex items-center justify-center bg-pp-red text-white rounded-full px-6 py-2.5 text-sm font-bold shadow-[var(--clay-btn-primary)] hover:bg-pp-red-dark hover:-translate-y-[2px] transition-transform"
            >
              Book Now
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 text-pp-dark"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </header>
      </div>

      {/* MOBILE DRAWER */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-pp-dark/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          {/* Drawer */}
          <div className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl flex flex-col p-6 animate-fade-up">
            <div className="flex items-center justify-between mb-8">
              <img
                src="/logoconnombre.png"
                alt="Poppy Paws Mobile Grooming"
                className="h-8 w-auto object-contain mx-auto"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute right-6 top-6 text-pp-dark p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col mb-8">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-pp-dark py-4 border-b border-pp-border">Home</Link>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-pp-dark py-4 border-b border-pp-border">Services</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-pp-dark py-4 border-b border-pp-border">About</Link>
              <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-pp-dark py-4 border-b border-pp-border">Gallery</Link>
              <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-pp-dark py-4 border-b border-pp-border">FAQ</Link>
              <Link href="/service-area" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-pp-dark py-4 border-b border-pp-border">Areas</Link>
            </nav>
            <div className="mt-auto flex flex-col items-center gap-4">
              <span className="text-sm font-medium text-pp-muted cursor-pointer">EN | ES</span>
              <a href="tel:5126770703" className="text-xl font-bold text-pp-red block mx-auto">(512) 677-0703</a>
              <p className="text-sm text-pp-muted text-center leading-relaxed">Mon–Fri 8am–5pm<br />Sat 8am–1pm</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
