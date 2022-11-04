import React from "react";
import PokeScarlet from "../images/pokemonScarlet.jpg";
import PokeViolet from "../images/pokemonViolet.jpg";
import ProfSada from "../images/professorSada.jpg";
import ProfTuro from "../images/professorTuro.jpg";
import GrassStarter from "../images/Sprigatito.jpeg";
import FireStarter from "../images/Fuecoco.jpeg";
import WaterStarter from "../images/Quaxly.jpeg";
import "./News.css";
import "bootstrap/dist/css/bootstrap.css";

function News() {
  return (
    <>
      <div className="center">
        <h1>News</h1>

        <h2>
          The new generation of Pokemon is coming out on November 18, 2022.
          Generation 9 will be set in an iberian inspired region known as
          Paldea.
        </h2>

        <h2>Cover Art Reveal</h2>
        <span>
          <img src={PokeScarlet} alt="pokemon scarlet" />
          <img src={PokeViolet} alt="pokemon violet" />
        </span>
        <p>
          The new Legendary Pokemon appear in these new titles,{" "}
          <span className="scarlet">Koraidon</span> and
          <span className="violet"> Miraidon</span>
        </p>
      </div>
      <div>
        <h4 className="center">Pokemon Scarlet and Violet</h4>
      </div>
      <div className="iframe-container">
        <iframe
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/Qnq6Wizm538"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="center">
        <h3>The theme for the games</h3>
        <p>Scarlet: Past</p> <br />
        <p>Violet: Future</p>
        <h3>New Gimmicks</h3>
        <ul className="list">
          <li>Terra: Let's Pokemon change to any of the 18 different types</li>
          <li>Paradox Forms: Past and Future forms on certain Pokemon</li>
          <li>Convergent Evolutions</li>
        </ul>
        <h3>Multiplayer</h3>
        <p>
          Pokémon Scarlet and Pokémon Violet are the first open-world RPGs in
          the Pokémon series. Along with series staples, such as trading and
          battling Pokémon, players will be able to explore the various
          locations of the region in these games with up to four players.
        </p>
        <h3>The professors</h3>
        <p>
          This will be the first time that a region will have two Professors.
          Although each game will have a different one.
        </p>
        <span className="center">
          <p>Scarlet: Professor Sada</p> <br />
          <img src={ProfSada} alt="Professor Sada" className="images" /> <br />
          <p>Violet: Professor Turo</p> <br />
          <img src={ProfTuro} alt="Professor Turo" className="images" />
        </span>
        <h2>New Details about the starter Pokemon</h2>
        <p>
          New insights on Sprigatito, Fuecoco, and Quaxly—the three Pokémon from
          which players will choose their first partner Pokémon—have been
          revealed.
        </p>
        <h2 className="green">
          <b>Sprigatito</b>
        </h2>
        <img src={GrassStarter} alt="Sprigatito" className="smallImage" />
        <p>
          Capricious and attention seeking, it may sulk if it sees its Trainer
          giving attention to a Pokémon other than itself. When Sprigatito
          kneads and rubs with its forepaws, a sweet aroma is released that can
          mesmerize those around it. This aroma has therapeutic qualities and
          makes opponents lose their will to battle. The composition of its
          fluffy fur is similar to plants, letting it create energy by absorbing
          sunlight. It adds moisture to its fur by grooming itself, which aids
          its ability to photosynthesize.
        </p>
        <ul className="list">
          <li>Category: Grass Cat Pokemon</li>
          <li>Type: Grass</li>
          <li>Height: 1' 4"</li>
          <li>Weight: 9 lbs</li>
          <li>Ability: Overgrow</li>
        </ul>
        <h2 className="red">
          <b>Fuecoco</b>
        </h2>
        <img src={FireStarter} alt="Fuecoco" className="smallImage" />
        <p>
          Fuecoco is laid-back and does things at its own pace. It loves to eat,
          and it will sprint toward any food it finds with a glint in its eye.
          External heat is absorbed by the square scales on Fuecoco’s stomach
          and back, then converted into fire energy. These scales are always
          warm, and at times they can also grow very hot. Flickering atop
          Fuecoco’s head is fire energy that is leaking out from inside the
          Pokémon’s body. When Fuecoco gets excited, its head spouts more
          flames.
        </p>
        <ul className="list">
          <li>Category: Fire Croc Pokemon</li>
          <li>Type: Fire</li>
          <li>Height: 1' 4"</li>
          <li>Weight: 21.6 lbs</li>
          <li>Ability: Blaze</li>
        </ul>
        <h2 className="blue">
          <b>Quaxly</b>
        </h2>
        <img src={WaterStarter} alt="Quaxly" className="smallImage" />
        <p>
          This serious-mannered Pokémon will follow in its Trainer’s wake.
          Quaxly is tidy, and it especially dislikes getting its head dirty. Its
          body is always glossy because the gel secreted by its feathers repels
          water and grime. The coif on its head is slicked back using a rich,
          moist cream, and it becomes unkempt when dry. It has strong legs and
          can swim without difficulty even in places with strong currents. In
          battle, it kicks its opponents swiftly and repeatedly.
        </p>
        <ul className="list">
          <li>Category: Duckling Pokemon</li>
          <li>Type: Water</li>
          <li>Height: 1' 8"</li>
          <li>Weight: 13.4 lbs</li>
          <li>Ability: Torrent</li>
        </ul>
      </div>
    </>
  );
}

export default News;
