"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const randomizeArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        const randomTestimonials = randomizeArray(response.data).slice(0, 6);
        setTestimonials(randomTestimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setError("Failed to load testimonials.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">Loading testimonials...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">What Our Clients Say</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
              <div>
                <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
                <p className="text-gray-700 mb-4">{testimonial.body}</p>
              </div>
              
              <div className="flex items-center mt-4">
                <FaUserCircle className="text-3xl text-gray-500 mr-3" />
                <div>
                  <p className="text-gray-900 font-bold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
