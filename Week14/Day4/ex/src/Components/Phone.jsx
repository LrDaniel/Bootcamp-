import React, { Component } from "react";

class Phone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Samsung",
      model: "Galaxy S20",
      color: "black",
      year: 2020,
    };
  }

  changeColor = () => {
    this.setState((state) => ({
      color: (state.color = "blue"),
    }));
  };
  render() {
    const { brand, model, color, year } = this.state;

    return (
      <div>
        <h1>My phone is a {brand}</h1>
        <p>
          it is a {color} {model} from {year}
        </p>
        <div className="btn">
          <button onClick={this.changeColor}>Switch color</button>
        </div>
      </div>
    );
  }
}

export default Phone;
