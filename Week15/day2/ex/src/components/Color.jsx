import React, { Component } from "react";

class Color extends Component {
  state = { favoriteColor: "red" };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: (this.state.favoriteColor = "yellow") });
    }, 5000);
  }

  changeColor = () => {
    this.setState({ favoriteColor: (this.state.favoriteColor = "pink") });
  };

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate = (prevState) => {
    if (prevState.favoriteColor !== this.state.favoriteColor) {
      return console.log(prevState.favoriteColor);
    }
  };

  render() {
    return (
      <>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <div>{}</div>
        <br></br>

        <button onClick={this.changeColor}>Change</button>
      </>
    );
  }
}

export default Color;
