"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#09090B]/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-wider text-white">
          SHOHEFA JANNAT JEMI<span className="text-indigo-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-400">
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-400 hover:text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#09090B] border-b border-zinc-800 px-6 py-4 space-y-3">
          <Link href="#about" onClick={() => setIsOpen(false)} className="block text-zinc-400 hover:text-white">About</Link>
          <Link href="#skills" onClick={() => setIsOpen(false)} className="block text-zinc-400 hover:text-white">Skills</Link>
          <Link href="#projects" onClick={() => setIsOpen(false)} className="block text-zinc-400 hover:text-white">Projects</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="block text-zinc-400 hover:text-white">Contact</Link>
        </div>
      )}
    </header>
  );
}