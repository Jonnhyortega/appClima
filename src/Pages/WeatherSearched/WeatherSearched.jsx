import React, { useContext, useEffect, useState } from "react";
import "./WeatherSearchedStyles.css";
import { LocationContext } from "../../Context/LocationContext";
import Searcher from "../../Components/Searcher/Searcher";
import { weatherData } from "../../Utils/apiFetch";
import { FaTemperatureHigh, FaCloudSun, FaTint, FaWind } from "react-icons/fa";
import backgroundCloud from "../../imgs/WeaSearchedBackgrounds/nublado2.jpg";
import backgroundSun from "../../imgs/WeaSearchedBackgrounds/soleado.jpg";
import { convertToCelcius, traducir } from "../../Utils/helpers";

export default function WeatherSearched() {
  const { location, cityContext } = useContext(LocationContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (location && location.length > 0) {
        try {
          const result = await weatherData(location[0], location[1]);
          setData(result);
          setLoading(false);
        } catch (err) {
          setError("Error al obtener los datos del clima");
          setLoading(false);
        }
      }
    };

    fetchWeather();
  }, [location]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div
      id="weatherSearched"
      className="container-searched"
      loading="lazy"
      style={{
        backgroundImage: `url(${
          data.weather[0].main === "Clouds" ? backgroundCloud : backgroundSun
        })`,
      }}
    >
      <h2 className="title-section">
        Buscador de pronosticos
      </h2>

      <Searcher />
      {!location || location.length === 0 ? (
        <p>Busque ciudad de interés</p>
      ) : (
        <div className="cardWeathersearched">
          <h2 className="card-sections">{cityContext}</h2>
          <h3 className="card-sections">{traducir(data.weather[0].main)}</h3>
          <p className="card-sections">
            🌡️
            {convertToCelcius(data.main.temp)} C
          </p>
          <p className="card-sections">
            ⛅ {traducir(data.weather[0].description)}
          </p>
          <p className="card-sections">
            💧
            {data.main.humidity}%
          </p>
          <p className="card-sections">💨 {data.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}
