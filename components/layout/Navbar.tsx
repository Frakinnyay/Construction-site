"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between text-white">

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <span className="text-2xl">▲</span>
          Vision
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          <Link href="/" className="hover:text-lime-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-lime-400 transition">
            About
          </Link>
          <Link href="/services" className="hover:text-lime-400 transition">
            Services
          </Link>
          <Link href="/projects" className="hover:text-lime-400 transition">
            Projects
          </Link>
          <Link href="/contacts" className="hover:text-lime-400 font-semibold">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        {/* <button className="hidden md:block bg-lime-400 text-black px-6 py-3 rounded-full text-sm font-bold tracking-wide hover:bg-lime-300 transition">
          GET IN TOUCH
        </button> */}

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#063B3B] text-white px-8 pb-6 space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-lime-400 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <button className="mt-4 bg-lime-400 text-black px-6 py-3 rounded-full text-sm font-bold tracking-wide w-full">
            GET IN TOUCH
          </button>
        </div>
      )}
    </header>
  );
}
