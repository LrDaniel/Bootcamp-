import React, { Component } from "react";

class OutputForm extends Component {
  state = {};
  render() {
    return (
      <>
        <h3>Entered information:</h3>
        <p>Your name:</p>
        <p>Your age:</p>
        <p>Your gender:</p>
        <p>Your your destination:</p>
        <p>Your dietary restrictions:</p>
        <p>**Nuts free:</p>
        <p>**Lactose free:</p>
        <p>**Vegan meal:</p>
      </>
    );
  }
}

export default OutputForm;
