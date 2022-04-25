import "./App.css";
import InputForm from "./components/InputForm";
import OutputForm from "./components/OutputForm";
import React, { Component } from "react";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <InputForm />
        <OutputForm />
      </div>
    );
  }
}

export default App;
