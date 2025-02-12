// app/page.js
import About from './components/About';
import FlightTracker from './components/FlightTracker';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Services />
      <FlightTracker />
    </div>
  );
}
