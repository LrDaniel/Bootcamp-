import "./App.css";
import React, { Component } from "react";
import Data from "./QuoteDatabase";

class App extends Component {
  state = {
    authors: {},
    color: "",
  };
  getQuote = () => {
    let random = Math.floor(Math.random() * Data.length);
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.setState({ color: randomColor });

    this.setState({ authors: Data[random] });
  };
  render() {
    const { authors, color } = this.state;
    return (
      <div className="App">
        <div className="App-header" style={{ backgroundColor: "#" + color }}>
          <div className="card">
            <p className="quote">"{authors.quote}"</p>
            <p className="author">-{authors.author}-</p>
            <button onClick={this.getQuote} className="btn">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
