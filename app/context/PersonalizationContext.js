"use client";

import { createContext, useState, useContext } from "react";

const PersonalizationContext = createContext();

export const usePersonalization = () => useContext(PersonalizationContext);

export const PersonalizationProvider = ({ children }) => {
  const [showFeatures, setShowFeatures] = useState(true);

  const toggleFeatures = () => setShowFeatures((prev) => !prev);

  const value = { showFeatures, toggleFeatures };

  return (
    <PersonalizationContext.Provider value={value}>
      {children}
    </PersonalizationContext.Provider>
  );
};
