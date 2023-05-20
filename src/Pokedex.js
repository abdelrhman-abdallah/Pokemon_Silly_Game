import React, { Component } from "react";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let playerStatus;
    if (this.props.isWinner) {
      playerStatus = (
        <p className="h4 mb-4 text-success alert alert-success">
          Congratulations!!! You Are A WINNER!!!!
        </p>
      );
    } else {
      playerStatus = (
        <p className="h4 mb-4 text-danger alert alert-danger">
          You Lost!!! Better Luck Next Time!!!!
        </p>
      );
    }
    return (
      <div className="container mt-5 text-center">
        <p className="h2 mb-4">Pokemon player {this.props.player}</p>
        <p className="h3 mb-4">Total Score: {this.props.score}</p>
        {playerStatus}
        <div className="row">
          {this.props.pokemonList.map((c) => (
            <div className="col-3" key={this.props.id}>
              <Pokecard key={c.id} id={c.id} type={c.type} base_exp={c.exp} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
