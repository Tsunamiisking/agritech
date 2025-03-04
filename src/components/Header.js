"use client";
import React, { useState } from "react";
import Image from "next/image";
import NavItem from "./NavItem";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed z-50 p-4 bg-primary shadow-md w-full lg:px-30">
      <section className="flex justify-between items-center ">
        <div className="logo">
          <Image
            src="/Images/logo-header.png"
            alt="header logo"
            width={150}
            height={300}
            priority
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={toggleMobileMenu}>
          <button className="text-primary-700 focus:outline-none">
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-9">
          <NavItem href={"/dashboard"}>Home</NavItem>
          <NavItem href={"/favorite"}>About</NavItem>
          <NavItem href="/">Contact</NavItem>
          <button onClick={() => router.push("/login")}>Get-started</button>
        </nav>
      </section>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="flex items-end flex-col mt-4 space-y-4 md:hidden">
          <NavItem href="/dashboard">Home</NavItem>
          <NavItem href="/favorite">About</NavItem>
          <NavItem href="/">Contact</NavItem>
          <NavItem href="/login">Get-started</NavItem>
        </nav>
      )}
    </header>
  );
};

export default Header;
