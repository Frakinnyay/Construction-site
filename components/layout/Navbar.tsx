import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between text-white">

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <span className="text-2xl">▲</span>
          Vision
        </div>

        {/* Navigation Links */}
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
          <Link
            href="/contacts"
            className="hover:text-lime-400 font-semibold"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <button className="bg-lime-400 text-black px-6 py-3 rounded-full text-sm font-bold tracking-wide hover:bg-lime-300 transition">
          GET IN TOUCH
        </button>
      </div>
    </header>
  );
}
