"use client";

import { useLayoutEffect, lazy, Suspense } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useScrollPosition } from "./hooks/useScrollPosition";
import Header from "./components/Header";
import PersonalizedMessage from "./components/PersonalizedMessage";
import { PersonalizationProvider } from "./context/PersonalizationContext";

const About = lazy(() => import("./components/About"));
const CaseStudies = lazy(() => import("./components/CaseStudies"));
const ContactForm = lazy(() => import("./components/ContactForm"));
const FlightTracker = lazy(() => import("./components/FlightTracker"));
const Footer = lazy(() => import("./components/Footer"));
const HeroSection = lazy(() => import("./components/HeroSection"));
const Services = lazy(() => import("./components/Services"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const TimeOnSite = lazy(() => import("./components/TimeOnSite"));

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

        <Suspense
          fallback={
            <div className="text-center text-purple-500">
              Loading Hero Section...
            </div>
          }
        >
          <HeroSection />
        </Suspense>

        <Suspense
          fallback={
            <div className="text-center text-blue-500">Loading About...</div>
          }
        >
          <About />
        </Suspense>

        <Suspense
          fallback={
            <div className="text-center text-green-500">
              Loading Services...
            </div>
          }
        >
          <Services />
        </Suspense>

        <Suspense
          fallback={
            <div className="text-center text-yellow-500">
              Loading Flight Tracker...
            </div>
          }
        >
          <FlightTracker />
        </Suspense>

        <Suspense
          fallback={
            <div className="text-center text-pink-500">
              Loading Testimonials...
            </div>
          }
        >
          <Testimonials />
        </Suspense>

        <Suspense
          fallback={
            <div className="text-center text-indigo-500">
              Loading Case Studies...
            </div>
          }
        >
          <CaseStudies />
        </Suspense>

        <Suspense
          fallback={
            <div className="text-center text-orange-500">
              Loading Contact Form...
            </div>
          }
        >
          <ContactForm />
        </Suspense>

        <Suspense
          fallback={
            <div className="text-center text-teal-500">
              Loading Time on Site...
            </div>
          }
        >
          <TimeOnSite />
        </Suspense>

        <Suspense
          fallback={
            <div className="text-center text-red-500">Loading Footer...</div>
          }
        >
          <Footer />
        </Suspense>

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
