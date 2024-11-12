// .js
import React, { createContext, useState } from "react";

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  // const [location, setLocation] = useState(["-34.60", "-58.43"]);
  const [location, setLocation] = useState(null);
  const [cityContext, setCityContext] = useState(null);
  const updateLocation = (lat, lon) => {
    setLocation([lat, lon]);
  };
  const updateCity = (cityString) => {
    setCityContext(cityString);
  };

  return (
    <LocationContext.Provider
      value={{ location, updateLocation, cityContext, updateCity }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export { LocationProvider, LocationContext };
