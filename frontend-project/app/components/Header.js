"use client";

import { FaPaperPlane, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center gap-2 text-xl font-bold text-blue-600">
          <FaPaperPlane className="size-6" />
          AeroTech
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-600 hover:text-blue-600">
            About Us
          </a>
          <a href="#services" className="text-gray-600 hover:text-blue-600">
            Services
          </a>
          <a
            href="#most-tracked-flights"
            className="text-gray-600 hover:text-blue-600"
          >
            Most Tracked Flights
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-600">
            Testimonials
          </a>
          <a href="#case-studies" className="text-gray-600 hover:text-blue-600">
            Case Studies
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <a
            href="#about"
            className="block px-4 py-2 text-gray-600 hover:text-blue-600"
          >
            About Us
          </a>
          <a
            href="#services"
            className="block px-4 py-2 text-gray-600 hover:text-blue-600"
          >
            Services
          </a>
          <a
            href="#most-tracked-flights"
            className="block px-4 py-2 text-gray-600 hover:text-blue-600"
          >
            Most Tracked Flights
          </a>
          <a
            href="#testimonials"
            className="block px-4 py-2 text-gray-600 hover:text-blue-600"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-600 hover:text-blue-600"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
