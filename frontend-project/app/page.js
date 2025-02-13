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
import { useLayoutEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useScrollPosition } from "./hooks/useScrollPosition";
import PersonalizedMessage from "./components/PersonalizedMessage";
import TimeOnSite from "./components/TimeOnSite";
import { PersonalizationProvider } from "./context/PersonalizationContext";

export default function Home() {
  useLayoutEffect(() => {
    document.title = "AeroTech";
  }, []);

  const scrollY = useScrollPosition();

  const showButton = scrollY > 300;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <PersonalizationProvider>
      <div>
        <Header />
        <HeroSection />
        <About />
        <Services />
        <FlightTracker />
        <Testimonials />
        <CaseStudies />
        <ContactForm />
        <TimeOnSite />
        <Footer />
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition duration-300 z-50"
          >
            <FaArrowUp size={20} />
          </button>
        )}
        <PersonalizedMessage />
      </div>
    </PersonalizationProvider>
  );
}
