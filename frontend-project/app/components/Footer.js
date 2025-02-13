"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:justify-between sm:flex-wrap gap-8">
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p>666 AeroTech Road</p>
          <p>AeroTech City, ATC 7700</p>
          <p>Email: info@aerotech.com</p>
          <p>Phone: +1 (666) 666-7700</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaXTwitter size={20} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Sitemap</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="#most-tracked-flights" className="hover:text-white">
                Most Tracked Flights
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="hover:text-white">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#case-studies" className="hover:text-white">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Aviation Company. All rights reserved.
      </div>
    </footer>
  );
}
