"use client"; 
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="p-4 bg-primary shadow-md">
      <section className="flex justify-between items-center">
        <div className="logo">
          <Image src="/Images/logo-header.png" alt="header logo" width={200} height={300} />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={toggleMobileMenu}>
          <button className="text-primary-700 focus:outline-none">
            {/* Hamburger Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-white text-lg font-bold ">Home</Link>
          <Link href="/" className="hover:text-white text-lg font-bold">About</Link>          
          <Link href="/" className="hover:text-white text-lg font-bold">Contact</Link>        
          <Link href="/" className="hover:text-white text-lg font-bold">Get-started</Link>        
          </nav>
      </section>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="flex items-end flex-col mt-4 space-y-4 md:hidden">
          <Link href="/" className="hover:text-white text-lg font-bold">Home</Link>
          <Link href="/" className="hover:text-white text-lg font-bold">About</Link>
          <Link href="/" className="hover:text-white text-lg font-bold">Contact</Link>
          <Link href="/" className="hover:text-white text-lg font-bold">Get-Started</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
