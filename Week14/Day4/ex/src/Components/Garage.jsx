import React, { Component } from "react";

class Garage extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>Who lives in my {this.props.size} Garage?</h3>
      </div>
    );
  }
}

export default Garage;
