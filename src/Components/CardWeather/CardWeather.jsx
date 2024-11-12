import React, { useEffect, useState } from "react";
import { weatherData } from "../../Utils/apiFetch";
import { FaTemperatureHigh, FaCloudSun, FaTint, FaWind } from "react-icons/fa";
import "./CardWeatherStyles.css";
import { convertToCelcius, traducir } from "../../Utils/helpers";
import Loader from "../Loader/Loader";

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
    return <Loader/>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {data && (
        <div
          className="cardWeather"
          style={{
            backgroundImage:
              data.weather[0].main == "Clear"
                ? `Url("https://i.pinimg.com/1200x/97/1d/6a/971d6ab00bfc126be0d35359026bd436.jpg")`
                : `Url("https://i.pinimg.com/564x/ec/33/2e/ec332e1d4f783c800bee8f514daf1ca1.jpg")`,
          }}
        >
          <h2>{city}</h2>
          <h3>{data.weather[0].main == "Clouds" ? "Nublado" : "Despejado"}</h3>
          <p>
            <span className="icon">🌡️</span>
            {convertToCelcius(data.main.temp)} C
          </p>
          <p>
            <span className="icon">⛅</span>
            {traducir(data.weather[0].description)}
          </p>
          <p>
            <span className="icon">💧</span>
            {data.main.humidity}%
          </p>
          <p>
            <span className="icon">💨</span>
            {data.wind.speed} m/s
          </p>
        </div>
      )}
    </div>
  );
}
