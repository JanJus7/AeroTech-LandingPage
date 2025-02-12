"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { FaPlaneDeparture, FaPlaneArrival, FaPlane, FaUsers } from "react-icons/fa";

export default function MostTrackedFlights() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMostTrackedFlights = async () => {
      const options = {
        method: "GET",
        url: "https://flightradar243.p.rapidapi.com/v1/flights/most-tracked",
        headers: {
          "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "x-rapidapi-host": "flightradar243.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        if (response.data && response.data.data && Array.isArray(response.data.data.data)) {
          setFlights(response.data.data.data);
        } else {
          setError("No flight data available.");
        }
      } catch (error) {
        console.error("Error fetching most tracked flights:", error);
        setError("Failed to load flight data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMostTrackedFlights();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">Loading most tracked flights...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  return (
    <section className="py-16 bg-gray-100" id="most-tracked-flights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Most Tracked Flights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flights.map((flight, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-4 text-center">
                  {flight.callsign || flight.flight || "Unknown Flight"}
                </h3>

                <div className="flex items-center mb-2">
                  <FaPlaneDeparture className="text-blue-500 mr-2" />
                  <span className="text-gray-700">
                    <strong>From:</strong> {flight.from_city || "Unknown"}
                  </span>
                </div>

                <div className="flex items-center mb-2">
                  <FaPlaneArrival className="text-green-500 mr-2" />
                  <span className="text-gray-700">
                    <strong>To:</strong> {flight.to_city || "Unknown"}
                  </span>
                </div>

                <div className="flex items-center mb-2">
                  <FaPlane className="text-gray-500 mr-2" />
                  <span className="text-gray-700">
                    <strong>Aircraft:</strong> {flight.type || flight.model || "N/A"}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-end text-sm text-gray-600">
                <FaUsers className="text-purple-500 mr-2" />
                <span><strong>{flight.clicks || 0}</strong> users tracking</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
