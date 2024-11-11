import React from "react";
import CardWeather from "../CardWeather/CardWeather";
import "./MainCitysStyles.css"
export default function MainCitys() {
  return (
    <section className="main-citys">
      <CardWeather coordenadas={["-34.60", "-58.43"]} city={"Buenos Aires, Arg"} />
      <CardWeather coordenadas={["51.50", "-0.12"]} city={"Londres, Ing"} />
      <CardWeather coordenadas={["21.16", "-86.85"]} city={"Cancún, Mex"} />
      <CardWeather coordenadas={["25.77", "-80.19"]} city={"Miami, EE.UU"} />
      <CardWeather coordenadas={["-31.41", "-64.18"]} city={"Cordoba, Arg"} />
    </section>
  );
}
