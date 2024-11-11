import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";

export const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route index path="/" element={<Home />} />
    </ReactDomRoutes>
  );
}

export default Routes;
