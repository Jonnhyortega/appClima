import React from "react";
import CardWeather from "../CardWeather/CardWeather";
import "./MainCitysStyles.css";
export default function MainCitys() {
  return (
    <section className="main-citys">
      <h2>Principales ciudades</h2>
      <CardWeather
        coordenadas={["-34.60", "-58.43"]}
        city={"Buenos Aires"}
      />
      <CardWeather coordenadas={["51.50", "-0.12"]} city={"Londres"} />
      <CardWeather coordenadas={["21.16", "-86.85"]} city={"Cancún"} />
      <CardWeather coordenadas={["25.77", "-80.19"]} city={"Miami"} />
      <CardWeather coordenadas={["-31.41", "-64.18"]} city={"Córdoba"} />
    </section>
  );
}
