"use client";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "Global Logistics Optimization",
      description:
        "We optimized the global logistics network for a leading airline, reducing fuel consumption by 15% and improving delivery times across international routes.",
      result: "15% Reduction in Fuel Costs",
    },
    {
      id: 2,
      title: "Advanced Satellite Navigation",
      description:
        "Implemented cutting-edge satellite navigation systems for commercial aircraft, resulting in enhanced flight safety and precision landings.",
      result: "Increased Flight Safety by 25%",
    },
    {
      id: 3,
      title: "Fleet Maintenance Automation",
      description:
        "Developed an automated maintenance tracking system, minimizing aircraft downtime and ensuring consistent regulatory compliance.",
      result: "30% Downtime Reduction",
    },
    {
      id: 4,
      title: "Real-Time Flight Tracking Integration",
      description:
        "Integrated real-time flight tracking systems, providing clients with instant updates on aircraft locations and improving route management efficiency.",
      result: "20% Improvement in Route Management",
    },
    {
      id: 5,
      title: "AI-Driven Weather Prediction",
      description:
        "Introduced AI-based weather prediction tools that assist pilots in navigating adverse conditions, reducing weather-related delays and enhancing passenger safety.",
      result: "40% Reduction in Weather-Related Delays",
    },
    {
      id: 6,
      title: "Sustainable Aviation Solutions",
      description:
        "Partnered with eco-friendly fuel providers to develop sustainable aviation solutions, reducing carbon emissions and promoting environmental responsibility.",
      result: "25% Decrease in Carbon Emissions",
    },
  ];

  return (
    <section className="py-16 bg-gray-100" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Our Case Studies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-700 mb-4">{caseStudy.description}</p>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-500 font-semibold">
                  {caseStudy.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
