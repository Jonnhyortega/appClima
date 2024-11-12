// Nav.jsx
import React from "react";
import "./Nav.css";

export const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>WeatherApp</h1>
      </div>
      {/* <ul className="navbar-links">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/pronostico">Pronóstico</a>
        </li>
        <li>
          <a href="/acerca">Acerca de</a>
        </li>
      </ul> */}
    </nav>
  );
};

export default Nav;