import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import WeatherSearched from "../Pages/WeatherSearched/WeatherSearched";

export const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route index path="/" element={<Home />} />
      <Route index path="/select-weather" element={<WeatherSearched />} />
    </ReactDomRoutes>
  );
}

export default Routes;
