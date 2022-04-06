import React, { Component } from "react";
import Data from "./data2.json";

class Example2 extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>{Data.Skills[0].Area}</h1>
        {Data.Skills[0].SkillSet.map((item, i) => {
          return (
            <>
              <li style={{ marginLeft: "20px" }} key={i}>
                {item.Name}
              </li>
            </>
          );
        })}
        <h1>{Data.Skills[1].Area}</h1>
        {Data.Skills[1].SkillSet.map((item, i) => {
          return (
            <>
              <li style={{ marginLeft: "20px" }} key={i}>
                {item.Name}
              </li>
            </>
          );
        })}
      </>
    );
  }
}

export default Example2;
