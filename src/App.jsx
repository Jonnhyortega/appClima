import React from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Nav from "./Components/Nav/Nav";
import CardWeather from "./Components/CardWeather/CardWeather";
import Routes from "./Routes/Routes";

function App() {
  return (
    <Layout>
      <Nav />
      <Routes />
    </Layout>
  );
}

export default App;
