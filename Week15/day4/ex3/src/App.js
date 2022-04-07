import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {};

  async postData() {
    try {
      let result = await fetch(
        "https://webhook.site/f9c9cbce-d5d0-45bf-aee8-7637852a2bc8",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            key1: "myusername",
            email: "mymail@gmail.com",
            name: "Isaac",
            lastname: "Doe",
            age: 27,
          }),
        }
      );
      console.log("result", result);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.postData}>Press me to post some data</button>
        </header>
      </div>
    );
  }
}

export default App;
