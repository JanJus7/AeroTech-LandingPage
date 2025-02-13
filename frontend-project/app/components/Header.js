"use client";

import { FaPaperPlane, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollY = useScrollPosition();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isPastHero = scrollY > window.innerHeight;

  return (
    <header
      className={`fixed top-0 left-0 w-full p-4 transition-colors duration-300 z-50 ${
        isPastHero ? "bg-white text-gray-600" : "bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-900 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className={`flex items-center gap-2 text-xl font-bold ${
          isPastHero ? "text-blue-600" : "text-white"
        }`}
        >
          <FaPaperPlane className="size-6" />
          AeroTech
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-blue-600">
            About Us
          </a>
          <a href="#services" className="hover:text-blue-600">
            Services
          </a>
          <a href="#most-tracked-flights" className="hover:text-blue-600">
            Most Tracked Flights
          </a>
          <a href="#testimonials" className="hover:text-blue-600">
            Testimonials
          </a>
          <a href="#case-studies" className="hover:text-blue-600">
            Case Studies
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="text-white w-6 h-6" />
            ) : (
              <FaBars className="text-white w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 md:hidden shadow-md">
          <div className="absolute inset-0 bg-black opacity-50"></div>

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
