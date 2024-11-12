import React, { useState, useRef, useContext } from "react";
import "./Nav.css";
import { searchCountry } from "../../Utils/apiFetch";
import { LocationContext } from "../../Context/LocationContext";

export const Nav = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const debounceTimeout = useRef(null);
  const { updateLocation, updateCity } = useContext(LocationContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const closeReferences = () => {
    setData([]);
  };

  const handleChange = (e) => {
    const value = e.target.value;

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(async () => {
      if (value.length > 0) {
        const result = await searchCountry(value);
        if (Array.isArray(result)) {
          setData(result);
          setError(null);
        } else {
          setError(result);
          setData([]);
        }
      }
    }, 300);
  };

  const handleClickItem = (lat, lon, city) => {
    updateLocation(lat, lon);
    updateCity(city);
    console.log("Ciudad seleccionada:", city);
    console.log("Coordenadas:", lat, lon);
    // window.location.href = "/select-weather";
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Clima</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/pronostico">Pronóstico</a>
        </li>
        <li>
          <a href="/acerca">Acerca de</a>
        </li>
        <li>
          <form className="searcher" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              name="search"
              type="search"
              placeholder="Ingresar ciudad"
            />
            <input type="submit" value="🔎" />

            {data.length > 0 && (
              <div className="references">
                <span onClick={closeReferences} className="close">
                  x
                </span>
                {data.map((item) => (
                  <a
                    key={item.id}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); 
                      handleClickItem(item.lat, item.lon, item.name);
                    }}
                  >
                    {item.name}, {item.country}.
                  </a>
                ))}
                {error && <div>{error}</div>}
              </div>
            )}
          </form>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
