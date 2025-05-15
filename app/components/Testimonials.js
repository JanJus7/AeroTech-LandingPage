"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { FaQuoteLeft } from "react-icons/fa";
import { Card, CardContent, Typography, Avatar } from "@mui/material";

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
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
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
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} sx={{ minHeight: 180, borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
                <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
                  {testimonial.body}
                </Typography>
                <div className="flex items-center gap-3">
                  <Avatar sx={{ bgcolor: "#3b82f6" }}>{testimonial.name[0]}</Avatar>
                  <div>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {testimonial.email}
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
