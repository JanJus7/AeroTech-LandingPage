"use client";

import About from "./components/About";
import CaseStudies from "./components/CaseStudies";
import ContactForm from "./components/ContactForm";
import FlightTracker from "./components/FlightTracker";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import { useState, useEffect, useLayoutEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useLayoutEffect(() => {
    document.title = "AeroTech";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Services />
      <FlightTracker />
      <Testimonials />
      <CaseStudies />
      <ContactForm />
      <Footer />
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition duration-300 z-50"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
