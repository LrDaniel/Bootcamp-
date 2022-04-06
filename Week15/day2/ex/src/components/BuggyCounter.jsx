import React, { Component } from "react";

class BuggyCounter extends Component {
  state = { counter: 0 };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    if (this.state.counter >= 5) {
      throw new Error("Rip");
    }
    return (
      <>
        <p>{this.state.counter}</p>
        <button onClick={this.handleClick}>+</button>
      </>
    );
  }
}

export default BuggyCounter;
