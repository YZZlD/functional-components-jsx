import Bulbasaur from "./images/bulbasaur.jpg";

let favPokemon = "Torchic";
let pokeCharacteristics = {
  type: "Fire",
  move: "Ember",
};

function Showcase() {
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={Bulbasaur} alt={favPokemon} />
      <h2>
        {favPokemon}'s type is{" "}
        <span style={{ backgroundColor: "green", color: "white" }}>
          {pokeCharacteristics.type}
        </span>{" "}
        and knows{" "}
        <span style={{ backgroundColor: "white", color: "green" }}>
          {pokeCharacteristics.move}
        </span>
      </h2>
    </div>
  );
}

export default Showcase;
