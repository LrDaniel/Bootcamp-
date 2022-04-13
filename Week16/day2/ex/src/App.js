import "./App.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/actions";
// import decrement from "./redux/actions";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.props.oneUp}>+</button>
          <span>{this.props.number}</span>
          <button onClick={this.props.oneDown}>-</button>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    number: state.num,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    oneUp: () => dispatch(increment()),
    oneDown: () => dispatch(decrement()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
