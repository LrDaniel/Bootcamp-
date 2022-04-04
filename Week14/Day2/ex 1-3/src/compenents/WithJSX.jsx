import React, { Component } from "react";

const sum = 5 + 5;

class WithJSX extends Component {
  state = {};
  render() {
    const myelement = <h1>I Love JSX!</h1>;

    return (
      <div>
        <h4>Hello world</h4>
        <h3>{myelement}</h3>
        <h2>{`React is ${sum} times better with JSX`}</h2>
      </div>
    );
  }
}

export default WithJSX;
