"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-700">
            <GraduationCap className="w-7 h-7" />
            Scholarvia
          </Link>

          {/* Center menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <Link href="/scholarships" className="hover:text-blue-700 transition-colors">Scholarships</Link>
            <Link href="/universities" className="hover:text-blue-700 transition-colors">Universities</Link>
            <Link href="/about" className="hover:text-blue-700 transition-colors">About</Link>
          </div>

          {/* Right menu */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-blue-700">Login</Link>
            <Link href="/register" className="text-sm font-medium text-gray-600 hover:text-blue-700">Register</Link>
            <Link href="/scholarships" className="bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
              Apply Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 px-4 py-4 flex flex-col gap-4 bg-white">
          <Link href="/" className="text-gray-700 font-medium">Home</Link>
          <Link href="/scholarships" className="text-gray-700 font-medium">Scholarships</Link>
          <Link href="/universities" className="text-gray-700 font-medium">Universities</Link>
          <Link href="/about" className="text-gray-700 font-medium">About</Link>
          <Link href="/login" className="text-gray-700 font-medium">Login</Link>
          <Link href="/register" className="bg-blue-700 text-white text-center py-2 rounded-lg font-semibold">Apply Now</Link>
        </div>
      )}
    </nav>
  );
}
