"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] text-[#0A3161] py-12 mt-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-4">
            <div className="h-20 w-20 relative">
              <Image
                src="/LogoFinal/ONLY LOGO svgs/Only_Logo_High.svg"
                alt="Fermi Energy Logo"
                width={80}
                height={80}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="h-14 w-auto relative">
              <Image
                src="/LogoFinal/TextLogo/text_logo_mid.svg"
                alt="Fermi Energy Text Logo"
                width={240}
                height={60}
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
          <p className="font-inter text-sm leading-relaxed text-center md:text-left">
            &copy; {new Date().getFullYear()} Fermi Energy, Inc.
          </p>
        </div>

        
        <nav className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8 mt-8 md:mt-0">
          <a href="#home" className="font-montserrat font-semibold text-base ">
            Home
          </a>
          <a href="#about" className="font-montserrat font-semibold text-base ">
            About
          </a>
          <a href="#team" className="font-montserrat font-semibold text-base ">
           Team
          </a>
          <a href="#news" className="font-montserrat font-semibold text-base ">
            News
          </a>
          <a href="#contact" className="font-montserrat font-semibold text-base ">
            Contact Us
          </a>
        </nav>

        
        <div className="mt-8 md:mt-0">
          <a
            href="https://www.linkedin.com/company/fermienergy/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A3161] hover:text-blue-700 transition-colors"
            aria-label="Fermi Energy LinkedIn"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
}
