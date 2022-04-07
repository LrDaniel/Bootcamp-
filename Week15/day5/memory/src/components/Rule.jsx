import React, { Component } from "react";

class Rule extends Component {
  state = {};
  render() {
    return (
      <>
        <hr />
        <h2 style={{ fontSize: "20px" }}>
          Get points by clicking on an image but don't click on any more than
          once!
        </h2>
        <hr />
      </>
    );
  }
}

export default Rule;
