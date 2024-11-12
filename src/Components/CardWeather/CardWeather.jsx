import React, { useEffect, useState } from "react";
import { weatherData } from "../../Utils/apiFetch";
import { FaTemperatureHigh, FaCloudSun, FaTint, FaWind } from 'react-icons/fa'; // Importa los iconos que necesitas
import "./CardWeatherStyles.css";

export default function CardWeather({ coordenadas, city }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const result = await weatherData(coordenadas[0], coordenadas[1]);
        setData(result);
        setLoading(false);
      } catch (err) {
        setError("Error al obtener los datos del clima");
        setLoading(false);
      }
    };

    fetchWeather();
  }, coordenadas); 

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {data && (
        <div className="cardWeather">
          <h2>{city}</h2>
          <h3><FaCloudSun /> {data.weather[0].main}</h3>
          <p><FaTemperatureHigh /> Temperatura: {data.main.temp} K</p>
          <p><FaCloudSun /> Descripción: {data.weather[0].description}</p>
          <p><FaTint /> Humedad: {data.main.humidity}%</p>
          <p><FaWind /> Viento: {data.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}