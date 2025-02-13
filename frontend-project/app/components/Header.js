"use client";

import { FaPaperPlane, FaBars, FaTimes, FaCog } from "react-icons/fa";
import { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { usePersonalization } from "../context/PersonalizationContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { showFeatures, toggleFeatures } = usePersonalization();

  const toggleSettings = () => setIsSettingsOpen(!isSettingsOpen);

  const scrollY = useScrollPosition();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isPastHero =
    typeof window !== "undefined" && scrollY > window.innerHeight;

  return (
    <header
      className={`fixed top-0 left-0 w-full p-4 transition-colors duration-300 z-50 ${
        isPastHero
          ? "bg-white text-gray-600"
          : "bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-900 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <a
          href="#hero"
          className={`flex items-center gap-2 text-xl font-bold ${
            isPastHero ? "text-blue-600" : "text-white"
          }`}
        >
          <FaPaperPlane className="size-6" />
          AeroTech
        </a>

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

        <button
          onClick={toggleSettings}
          className="relative hover:text-blue-600 ml-4"
        >
          <FaCog size={24} />
        </button>

        {isSettingsOpen && (
          <div className="absolute top-16 right-4 bg-white border text-black border-gray-300 rounded-lg shadow-lg p-4 z-50">
            <h3 className="font-bold text-lg mb-2">Settings</h3>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="features"
                checked={showFeatures}
                onChange={toggleFeatures}
                className="mr-2"
              />
              <label htmlFor="features" className="cursor-pointer">
                Show Personalization Features
              </label>
            </div>
          </div>
        )}

        <div className="flex items-center justify-center md:hidden">
          <button
            onClick={toggleMenu}
            className="hover:text-blue-600 focus:outline-none"
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
        <nav className="bg-white md:hidden shadow-md">
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
