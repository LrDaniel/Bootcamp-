import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class TodoList extends Component {
  state = { userInput: "", list: [] };

  handleChange(input) {
    this.setState({ userInput: input });
    console.log(input);
  }

  addList(input) {
    let listArr = this.state.list;
    listArr.push(input);
    this.setState({ userInput: "", list: listArr });
  }

  render() {
    return (
      <>
        <h1>Todo's</h1>
        <input
          type="text"
          onChange={(e) => this.handleChange(e.target.value)}
          value={this.state.userInput}
        />
        <button onClick={() => this.addList(this.state.userInput)}>Add</button>
        <ul>
          {this.state.list.map((item, i) => (
            <ListGroup.Item key={i}>{item}</ListGroup.Item>
          ))}
        </ul>
      </>
    );
  }
}

export default TodoList;
