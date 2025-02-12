import About from "./components/About";
import CaseStudies from "./components/CaseStudies";
import ContactForm from "./components/ContactForm";
import FlightTracker from "./components/FlightTracker";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
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
    </div>
  );
}
