import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    if (this.state.count >= 5) {
      throw Error("RIP");
    }
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
