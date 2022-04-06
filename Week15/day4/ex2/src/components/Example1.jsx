import React, { Component } from "react";
import Data from "./data2.json";

class Example1 extends Component {
  state = {};
  render() {
    const social = Data.SocialMedias;
    return (
      <>
        <h1>Links:</h1>
        {social.map((url, index) => {
          return (
            <>
              <ul key={index}>
                <li key={index}>{url}</li>
              </ul>
            </>
          );
        })}
      </>
    );
  }
}

export default Example1;
