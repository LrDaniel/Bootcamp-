import React, { Component } from "react";
import Data from "./data.json";

class PostList extends Component {
  state = {};

  render() {
    return (
      <>
        {Data.map((item) => {
          return (
            <>
              <h1>{item.title}</h1>
              <h2>{item.content}</h2>
            </>
          );
        })}
      </>
    );
  }
}

export default PostList;
