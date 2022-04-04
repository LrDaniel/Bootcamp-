import React, { Component } from "react";

class UserFavoriteColors extends Component {
  state = {};
  render() {
    const animals = this.props.favAnimals;

    return (
      <div className="animalList">
        {animals.map((animal, id) => {
          return (
            <div className="animal" key={id}>
              <li>{`${animal}`}</li>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserFavoriteColors;
