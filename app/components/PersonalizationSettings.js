"use client";

import { usePersonalization } from "../context/PersonalizationContext";

export default function PersonalizationSettings() {
  const { showTimeOnSite, showFlightMessage, toggleTime, toggleFlightMessage } =
    usePersonalization();

  return (
    <div className="fixed top-6 left-6 bg-gray-100 text-black p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">Customize View</h3>

      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="time"
          checked={showTimeOnSite}
          onChange={toggleTime}
          className="mr-2"
        />
        <label htmlFor="time">Show Time on Site</label>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="flights"
          checked={showFlightMessage}
          onChange={toggleFlightMessage}
          className="mr-2"
        />
        <label htmlFor="flights">Show Interested in Flights</label>
      </div>
    </div>
  );
}
