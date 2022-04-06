import React, { Component } from "react";

class Color extends Component {
  state = { favoriteColor: "red" };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: (this.state.favoriteColor = "yellow") });
    }, 5000);
  }

  changeColor = () => {
    this.setState({ favoriteColor: (this.state.favoriteColor = "blue") });
  };

  render() {
    return (
      <>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Blue</button>
      </>
    );
  }
}

export default Color;
