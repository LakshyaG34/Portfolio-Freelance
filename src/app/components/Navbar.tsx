"use client";

import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: "/about", label: "ABOUT ME" },
    { href: "/portfolio", label: "PORTFOLIO" },
    { href: "/skills", label: "SKILLS" },
    { href: "/services", label: "SERVICES" },
    { href: "/testimonials", label: "TESTIMONIALS" },
  ];

  return (
    <nav className="flex items-center justify-center w-full py-4">
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between w-full max-w-[1440px] h-[73px] rounded-[40px] text-white relative bg-transparent">
          <Link href="/" className="text-lg font-semibold tracking-wide">
            ERICA JONES
          </Link>

          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#F9784C] transition-colors text-[#FEFAEE99]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button className="hidden md:flex px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
            Get in Touch
          </button>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-4">
              {menuItems.map((item, index) => (
                <div key={index} onClick={toggleMobileMenu}>
                  <Link 
                    href={item.href} 
                    className="block py-2 hover:text-[#F9784C] transition-colors text-[#FEFAEE99]"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              
              <button 
                className="w-full px-5 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition mt-4"
                onClick={toggleMobileMenu}
              >
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;