import React, { useContext } from "react";
import "./WeatherSearchedStyles.css";
import CardWeather from "../../Components/CardWeather/CardWeather";
import { LocationContext } from "../../Context/LocationContext";

export default function WeatherSearched() {
  const { location, cityContext } = useContext(LocationContext);

  return (
    <div style={{ marginTop: "100px" }}>
      {location == null ? (
        <p>Busque ciudad de interes</p>
      ) : (
        <CardWeather coordenadas={location} city={cityContext} />
      )}
    </div>
  );
}
