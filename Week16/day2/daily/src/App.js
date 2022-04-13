import "./App.css";
import React, { Component } from "react";
import MovieList from "./Components/MovieList";
import MovieDetail from "./Components/MovieDetails";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Redux Movies</h1>
          <MovieList />
          <MovieDetail />
        </div>
      </div>
    );
  }
}

export default App;
