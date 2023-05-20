import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pokecard.css";

const baseUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let createFancyImgId = (number) => {
  if (number < 10) {
    return `00${number}`;
  } else if (number < 99) {
    return `0${number}`;
  } else {
    return `${number}`;
  }
};

class Pokecard extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    let newId = createFancyImgId(this.props.id);
    let imgSrc = `${baseUrl}${newId}.png`;
    return (
      <div className="card p-2 mb-4 Pokecard-card text-center">
        <div className="Pokecard-img mt-3">
          <img className="card-img-top" src={imgSrc} alt="Card image" />
        </div>
        <p className="card-text h5">Type: {this.props.type}</p>
        <p className="card-text h5">Exp: {this.props.base_exp}</p>
      </div>
    );
  }
}

export default Pokecard;
