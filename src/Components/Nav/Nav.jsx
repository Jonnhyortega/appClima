import React, { useState, useRef } from "react";
import "./Nav.css";
import { searchCountry } from "../../Utils/apiFetch";

export const Nav = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const debounceTimeout = useRef(null);

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
          console.log(result);
          setError(null);
        } else {
          setError(result);
          setData([]);
        }
      } return
    }, 300);
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
                  <a key={item.id}>
                    {item.name},{item.state}
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
