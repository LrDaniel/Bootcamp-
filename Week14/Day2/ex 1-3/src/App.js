import React from "react";
import "./App.css";
import UserFavoriteColors from "./compenents/UserFavoriteColors";
import WithJSX from "./compenents/WithJSX";

const user1 = {
  first_name: "Bob",
  last_name: "Dylan",
  fav_animals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

function App() {
  return (
    <div className="App">
      <WithJSX />
      <h3>{user1.first_name}</h3>
      <h3>{user1.last_name}</h3>
      <UserFavoriteColors favAnimals={user1.fav_animals} />
    </div>
  );
}

export default App;
