import { FiGlobe, FiMap, FiSettings, FiAirplay } from "react-icons/fi";

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
            <FiGlobe className="text-5xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              Global Logistics
            </h3>
            <p className="text-gray-600 mt-2">
              Managing international air transport with guaranteed on-time
              delivery.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
            <FiMap className="text-5xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              Satellite Navigation
            </h3>
            <p className="text-gray-600 mt-2">
              Modern navigation systems ensuring precise flights in all
              conditions.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
            <FiSettings className="text-5xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              Technical Maintenance
            </h3>
            <p className="text-gray-600 mt-2">
              Comprehensive technical support and maintenance for aircraft
              fleets.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
            <FiAirplay className="text-5xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              Real-Time Flight Tracking
            </h3>
            <p className="text-gray-600 mt-2">
              Monitor live aircraft positions worldwide with our advanced
              tracking system powered by Flightradar24.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
