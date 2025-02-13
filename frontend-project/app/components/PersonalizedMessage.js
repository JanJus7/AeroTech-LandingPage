import { useScrollPosition } from "../hooks/useScrollPosition";
import { FaPlane } from "react-icons/fa";

export default function PersonalizedMessage() {
  const scrollY = useScrollPosition();

  const flightTracker = document.getElementById("most-tracked-flights");
  const flightTrackerTop = flightTracker?.offsetTop ?? 0;
  const flightTrackerHeight = flightTracker?.offsetHeight ?? 0;

  const isFlightTrackerVisible =
    scrollY >= flightTrackerTop - window.innerHeight / 2 &&
    scrollY <= flightTrackerTop + flightTrackerHeight;

  return (
    <div
      className={`fixed bottom-20 right-6 bg-blue-600 text-white px-3 py-2 rounded-lg shadow-md flex items-center gap-2 transition-opacity duration-500 ${
        isFlightTrackerVisible ? "opacity-100" : "opacity-0"
      } sm:right-4 sm:bottom-1/3 text-xs sm:text-sm md:text-base`}
    >
      <FaPlane className="text-white" />
      <span>
        Interested in flights?{" "}
        <a href="#contact" className="underline hover:text-blue-200">
          Contact us!
        </a>
      </span>
    </div>
  );
}
