import React from "react";
import Fname from "./components/Fname";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      sname: "",
      results: {},
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Fname
            handleClick={this.handleClick}
            handleChange={this.handleChange}
            results={this.state.results}
          />
        </header>
      </div>
    );
  }
}

export default App;
