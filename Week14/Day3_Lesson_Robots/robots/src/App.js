import "./App.css";
import User from "./Components/User";
import users from "./Components/users.json";
import "tachyons";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import React, { Component } from "react";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {users.map((item, i) => {
            return <User key={i} user={item} />;
          })}
        </header>
        <Button as="input" type="button" value="Input" />{" "}
      </div>
    );
  }
}

export default App;
