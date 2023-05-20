import React, { Component } from "react";
import Pokedex from "./Pokedex";

const GeneratePokemonExp = () => Math.floor(Math.random() * 100) + 1;
const GeneratePokemonId = () => Math.floor(Math.random() * 1000) + 1;
const typeList = [
  "Fire",
  "Fighting",
  "Water",
  "Electric",
  "Normal",
  "Grass",
  "Ice",
  "Poison",
];
const GeneratePokemonType = (listofNames) => {
  let randName = Math.floor(Math.random() * listofNames.length);
  return listofNames[randName];
};

const GeneratePokemonList = (number) => {
  const pokemonList = [];
  for (let index = 0; index < number; index++) {
    let pokemonData = {
      id: GeneratePokemonId(),
      type: GeneratePokemonType(typeList),
      exp: GeneratePokemonExp(),
    };
    pokemonList.push(pokemonData);
  }
  return pokemonList;
};

class Pokegame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hand1: GeneratePokemonList(4),
      hand2: GeneratePokemonList(4),
    };
  }
  playGame = async () => {
    this.setState({
      hand1: GeneratePokemonList(4),
      hand2: GeneratePokemonList(4),
    });
  };

  render() {
    const totalExpHand1 = this.state.hand1.reduce(
      (exp, pokemonData) => exp + pokemonData.exp,
      0
    );
    const totalExpHand2 = this.state.hand2.reduce(
      (exp, pokemonData) => exp + pokemonData.exp,
      0
    );
    return (
      <div>
        <p className="h1 mb-5 mt-5 text-center">Pokemon Game</p>
        <div className="d-flex align-items-center justify-content-center">
          <button
            className="btn btn-outline-primary btn-lg"
            onClick={this.playGame}
          >
            Begin The POKEMON WAAAAARS
          </button>
        </div>
        <Pokedex
          player="1"
          pokemonList={this.state.hand1}
          isWinner={totalExpHand1 > totalExpHand2}
          score={totalExpHand1}
        />
        <Pokedex
          player="2"
          pokemonList={this.state.hand2}
          isWinner={totalExpHand2 > totalExpHand1}
          score={totalExpHand2}
        />
      </div>
    );
  }
}

export default Pokegame;
