import React, { Component } from "react";
import Garage from "./Garage";

class Car extends Component {
  constructor() {
    super();
    this.state = {
      color: "red",
    };
  }
  render() {
    const carModel = this.props.model;
    return (
      <div>
        <h1>This car is a {carModel}</h1>
        <h1>
          This is a {this.state.color} {carModel}
        </h1>
        <Garage size="small" />
      </div>
    );
  }
}

export default Car;
