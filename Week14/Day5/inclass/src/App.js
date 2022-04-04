import React from "react";
import "./App.css";
import User from "./components/User";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    // database -> count how many someone init my App
    // calc about
    // alert("hello");
  }
  handleClick = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }));
  };
  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <User name={this.state.name} email={this.state.email} />
          <button onClick={this.handleClick}>Click Me!</button>
          {users.map((item, i) => {
            return (
              <div key={i}>
                <p>{item.name}</p>
              </div>
            );
          })}
        </header>
      </div>
    );
  }
}
export default App;
