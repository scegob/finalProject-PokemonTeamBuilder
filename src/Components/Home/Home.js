import React from "react";
import "./Home.css";
import { useState } from "react";
import Axios from "axios";
import CreateTeamName from "../TeamName/CreateTeamName";


function Home() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState([]);

  const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  // I want to add this code in the future so that the background of the the pokemon sprite will have a color associated with a type

  // /* An object that contains the hex color codes for each pokemon type. */
  // const typeColor = {
  //   bug: "#26de81",
  //   dragon: "#ffeaa7",
  //   electric: "#fed330",
  //   fairy: "#FF0069",
  //   fighting: "#30336b",
  //   fire: "#f0932b",
  //   flying: "#81ecec",
  //   grass: "#00b894",
  //   ground: "#EFB549",
  //   ghost: "#a55eea",
  //   ice: "#74b9ff",
  //   normal: "#95afc0",
  //   poison: "#6c5ce7",
  //   psychic: "#a29bfe",
  //   rock: "#2d3436",
  //   water: "#0190FF",
  // };

  // const card = document.getElementById("card");

  // const btn = document.getElementById("btn");

  // let styleCard = (color) => {
  //   card.style.background = `radial-gradient(circle at 50% 
  //       0%, ${color} 36%, #ffffff 36%)`;
  //   card.querySelectorAll(".types span").forEach((typeColor) => {
  //     typeColor.style.background = color;
  //   });
  // };

  const searchPokemon = () => {
    Axios.get(API_URL)
      .then((response) => {
        let copyPokemon = [...pokemon];
        let tempPokemon = {
          name: pokemonName,
          img: response?.data?.sprites?.front_default,
          type: response?.data?.types?.[0]?.type?.name,
          hp: response?.data?.stats?.[0]?.base_stat,
          attack: response?.data?.stats?.[1]?.base_stat,
          special_attack: response?.data?.stats?.[3]?.base_stat,
          defense: response?.data?.stats?.[2]?.base_stat,
          speed: response?.data?.stats?.[5]?.base_stat,
          ability: response?.data?.abilities?.[0]?.ability.name,
        };
        console.log(response.data);
        // const themeColor = typeColor[data.types[0].type.name];

        copyPokemon.push(tempPokemon);

        setPokemon(copyPokemon);

        // styleCard(themeColor);
      })
      .catch((error) => {
        alert(`${error.message ? error.message : "An error occurred."}`);
      });
  };

  const deletePokemon = () => {};

  return (
    <body>
      <div>
        <div>
          <span className="Home">
            <div className="TitleSection">
              <h1 className="header">Pokemon Team Builder</h1>
              {pokemon.length === 0 ? <h2>Please Choose a Pokemon</h2> : <></>}
              <input
                type="text"
                onChange={(event) => {
                  setPokemonName(event.target.value.toLowerCase());
                }}
              />
              <button variant="primary" onClick={() => searchPokemon()}>
                Search Pokemon
              </button>
            </div>
            <div>
              <CreateTeamName />
            </div>
            <div>
              <div className="Card">
                {pokemon.length === 0
                  ? ""
                  : pokemon.map((data) => {
                      return (
                        <>
                          <h1>
                            {data.name[0].toUpperCase() + data.name.slice(1)}{" "}
                          </h1>
                          <img src={data.img} />
                          <h3>Type: {data.type}</h3>
                          <h4>Ability: {data.ability}</h4>
                          <h4>Hp: {data.hp}</h4>
                          <h4>Attack: {data.attack}</h4>
                          <h4>Special Attack: {data.special_attack}</h4>
                          <h4>Defense: {data.defense}</h4>
                          <h4>Special Defense: {data.special_defense}</h4>
                          <h4>Speed: {data.speed}</h4>
                          {/* <button>Delete Pokemon</button> */}
                        </>
                      );
                    })}
              </div>
            </div>
          </span>
        </div>
      </div>
    </body>
  );
}

export default Home;

// 1. Find pokemon to updaTE in pokemon array (use .find(), .indexOf())
// 2. Use that index to update the nickname field. Create copy of that object to update(... operator).
// 3. Set updated object to pokemon temp Array.
// 4. Set pokemon array to updated pokemon array.
