import React, { Component } from "react";

class FromsTest extends Component {
  state = { firstName: "" };

  handleChange = (e) => {
    this.setState({ firstName: e.target.value });
  };

  handleSubmit = (e) => {
    e.prevent.Default();
    alert(this.state.firstName);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          First name:
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default FromsTest;
