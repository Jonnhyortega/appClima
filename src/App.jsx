import React from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Nav from "./Components/Nav/Nav";
import Routes from "./Routes/Routes";
import { LocationProvider } from "./Context/LocationContext";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <LocationProvider>
      <Layout>
        <Nav />
        <Routes />
        <Footer />
      </Layout>
    </LocationProvider>
  );
}

export default App;
