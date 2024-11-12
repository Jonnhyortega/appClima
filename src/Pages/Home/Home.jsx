import React from "react";
import MainCitys from "../../Components/MainCitys/MainCitys";
import WeatherSearched from "../WeatherSearched/WeatherSearched";

export default function Home() {
  return (
    <div>
      <MainCitys />
      <WeatherSearched />
    </div>
  );
}
