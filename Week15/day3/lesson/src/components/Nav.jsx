import React, { Component } from "react";

class Nav extends Component {
  state = {};

  
  render() {
    return (
      <>
        <button onClick={() => this.navigateTo("home")}>Home</button>
        <button onClick={() => this.navigateTo("about")}>About</button>
        <button onClick={() => this.navigateTo("contact")}>Contact</button>
      </>
    );
  }
}

export default Nav;
