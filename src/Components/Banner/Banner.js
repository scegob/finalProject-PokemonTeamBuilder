import React from "react";
import PokeBanner from "../images/pokemonBanner.jpg";
import "./Banner.css";

function Banner() {
  return (
    <div>
      <img src={PokeBanner} alt="A banner with pokemon" className="banner" />
    </div>
  );
}

export default Banner;
