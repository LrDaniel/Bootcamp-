import React, { Component } from "react";
import Data from "./data2.json";

class Example3 extends Component {
  state = {};
  render() {
    return (
      <>
        <img src={Data.Experiences[0].logo} alt="pic" />
        <br></br>
        <a href={Data.Experiences[0].url}>{Data.Experiences[0].companyName}</a>
        <h4>{Data.Experiences[0].roles[0].title}</h4>
        <span>{Data.Experiences[0].roles[0].startDate}</span>
        <span>{Data.Experiences[0].roles[0].location}</span>
        <p>{Data.Experiences[0].roles[0].description}</p>
        <br></br>
        <img src={Data.Experiences[1].logo} alt="pic" />
        <br></br>
        <a href={Data.Experiences[1].url}>{Data.Experiences[1].companyName}</a>
        <h4>{Data.Experiences[1].roles[0].title}</h4>
        <span>{Data.Experiences[1].roles[0].startDate}</span>
        <span>{Data.Experiences[1].roles[0].location}</span>
        <p>{Data.Experiences[1].roles[0].description}</p>
      </>
    );
  }
}

export default Example3;
