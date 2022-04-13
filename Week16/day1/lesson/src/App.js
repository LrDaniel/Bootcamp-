import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { changePropOne } from "./redux/actions";
import { ClickOn } from "./redux/actions";

import Child from "./Components/Child";

class App extends Component {
  constructor() {
    super();
    this.state = {
      propOne: "one",
      propTwo: "two",
    };
  }
  handleChange = (e) => {
    this.setState({ propOne: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>{this.props.a}</div>
          <div>{this.props.b}</div>
          <div>{this.props.c}</div>
          <button onClick={this.props.click}>Click Me</button>

          <div>
            <input
              type="text"
              onChange={this.props.handleInput}
              placeholder="Change PropOne"
            />
          </div>
          <Child />
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    a: state.propOne,
    b: state.propTwo,
    c: state.propThree,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInput: (e) => dispatch(changePropOne(e.target.value)),
    click: () => dispatch(ClickOn()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
