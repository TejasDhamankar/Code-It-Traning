'use client';
import React from 'react';
import Link from 'next/link'; // Import Link for client-side navigation

const Navbar = () => {
  // Define links with their respective routes
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Placement', href: '/placement' },
    { name: 'Tie-Ups', href: '/tie-ups' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Points to Home */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#4f46e5] to-[#9333ea] bg-clip-text text-transparent">
              CODE IT
            </Link>
          </div>

          {/* Updated Navigation Links using Link component */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-gray-600 hover:text-[#9333ea] transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Gupshup Style CTA */}
          <div className="flex items-center">
            <button className="bg-gradient-to-r from-[#4f46e5] to-[#9333ea] text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-200 transition-all flex items-center gap-2">
              Book Free Demo
              <span className="bg-white/20 rounded-full p-1">→</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;