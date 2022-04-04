import React, { Component } from "react";
import "../components/Exercise4.css";

class Exercise4 extends Component {
  state = {};
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };

    return (
      <div className="container">
        <div className="header">
          <h1 style={style_header}>This is a header</h1>
          <p>this is a paragraph</p>
          <a href="google.com">This is a link</a>
          <div className="form">
            <form>
              <h3>This is a from</h3>
              <label for="name">Enter your name:</label>
              <div className="input_submit">
                <input type="text"></input>
                <input type="submit" value="Submit"></input>
              </div>
            </form>
            <div className="img">
              <h4>This is an image:</h4>
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png"
                alt="react img"
              ></img>
            </div>
            <div className="list">
              <h4>This is the list</h4>
              <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Exercise4;
