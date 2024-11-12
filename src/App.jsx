import React from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Nav from "./Components/Nav/Nav";
import Routes from "./Routes/Routes";
import { LocationProvider } from "./Context/LocationContext";

function App() {
  return (
    <LocationProvider>
      <Layout>
        <Nav />
        <Routes />
      </Layout>
    </LocationProvider>
  );
}

export default App;
