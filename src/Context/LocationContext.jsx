// .js
import React, { createContext, useState } from "react";

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(["51.50", "-0.12"]);
  const [cityContext, setCityContext] = useState("Buenos Aires, Arg");
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
