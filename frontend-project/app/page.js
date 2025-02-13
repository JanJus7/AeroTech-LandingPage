"use client";

import { useLayoutEffect, lazy, Suspense } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useScrollPosition } from "./hooks/useScrollPosition";
import { PersonalizationProvider } from "./context/PersonalizationContext";

const About = lazy(() => import("./components/About"));
const CaseStudies = lazy(() => import("./components/CaseStudies"));
const ContactForm = lazy(() => import("./components/ContactForm"));
const FlightTracker = lazy(() => import("./components/FlightTracker"));
const Footer = lazy(() => import("./components/Footer"));
const Header = lazy(() => import("./components/Header"));
const HeroSection = lazy(() => import("./components/HeroSection"));
const Services = lazy(() => import("./components/Services"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const TimeOnSite = lazy(() => import("./components/TimeOnSite"));
const PersonalizedMessage = lazy(
  () => import("./components/PersonalizedMessage")
);

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
        <Suspense
          fallback={
            <p className="text-center text-gray-600">Loading Header...</p>
          }
        >
          <Header />
        </Suspense>

        <Suspense
          fallback={
            <p className="text-center text-gray-600">Loading Hero Section...</p>
          }
        >
          <HeroSection />
        </Suspense>

        <Suspense
          fallback={
            <p className="text-center text-gray-600">Loading About...</p>
          }
        >
          <About />
        </Suspense>

        <Suspense
          fallback={
            <p className="text-center text-gray-600">Loading Services...</p>
          }
        >
          <Services />
        </Suspense>

        <Suspense
          fallback={
            <p className="text-center text-gray-600">
              Loading Flight Tracker...
            </p>
          }
        >
          <FlightTracker />
        </Suspense>

        <Suspense
          fallback={
            <p className="text-center text-gray-600">Loading Testimonials...</p>
          }
        >
          <Testimonials />
        </Suspense>

        <Suspense
          fallback={
            <p className="text-center text-gray-600">Loading Case Studies...</p>
          }
        >
          <CaseStudies />
        </Suspense>

        <Suspense
          fallback={
            <p className="text-center text-gray-600">Loading Contact Form...</p>
          }
        >
          <ContactForm />
        </Suspense>

        <Suspense
          fallback={
            <p className="text-center text-gray-600">Loading Time On Site...</p>
          }
        >
          <TimeOnSite />
        </Suspense>

        <Suspense
          fallback={
            <p className="text-center text-gray-600">Loading Footer...</p>
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

        <Suspense
          fallback={
            <p className="text-center text-gray-600">
              Loading Personalized Message...
            </p>
          }
        >
          <PersonalizedMessage />
        </Suspense>
      </div>
    </PersonalizationProvider>
  );
}
