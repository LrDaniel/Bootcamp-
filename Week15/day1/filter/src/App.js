import React from "react";
import "./App.css";
import User from "./components/User";
import "tachyons";
import SearchBox from "./components/Searchbox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      search: "",
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  InputValue = (e) => {
    const value = e.target.value;
    console.log(value);
  };

  onChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleClick = (value) => {
    this.setState({ search: value });
  };

  render() {
    const { users, search } = this.state;
    console.log(users);

    const filtered = users.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
      <div className="App">
        <header className="App-header">
          <SearchBox onChange={this.handleClick} />
          <div>
            {filtered.map((item, i) => {
              return <User user={item} key={i} />;
            })}
          </div>
        </header>
      </div>
    );
  }
}
export default App;
