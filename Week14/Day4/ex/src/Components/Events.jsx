import React, { Component } from "react";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
  }
  clickMe = () => {
    alert("I was clicked");
  };
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      alert(`You pressed Enter and you typed ${event.target.value}`);
    }
  };
  handleToggle = () => {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  };
  render() {
    return (
      <div className="container">
        <div className="btn">
          <button onClick={this.clickMe}>Click for Event</button>
        </div>
        <div>
          <input
            className="input"
            type="text"
            onKeyPress={this.handleKeyPress}
          ></input>
        </div>
        <div>
          <button onClick={this.handleToggle}>
            {this.state.isToggleOn ? "ON" : "OFF"}
          </button>
        </div>
      </div>
    );
  }
}
export default Events;
