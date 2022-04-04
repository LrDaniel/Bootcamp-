import React, { Component } from "react";

class SearchBox extends Component {
  state = {
    text: "",
  };

  handlechange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <>
        <input type="text" onChange={this.handlechange} />
        <button onClick={() => this.props.handleClick(this.state.text)}>
          Search
        </button>
      </>
    );
  }
}

export default SearchBox;
