import React, { Component } from "react";

class InputForm extends Component {
  state = {
    fname: "",
    lname: "",
    age: null,
    radio: "",
    isToggleOn: false,
    countries: "",
  };

  handleChange = (e) => {
    const value = e.target === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
    this.setState({ ...this.state, isToggleOn: !this.state.isToggleOn });
  };

  render() {
    return (
      <>
        <form>
          <div>
            <input
              onChange={this.handleChange}
              name="fname"
              type="text"
              placeholder="First Name"
              required
            />
            <br />
            <input
              onChange={() => this.handleChange(!this.state.isToggleOn)}
              name="lname"
              type="text"
              placeholder="Last Name"
              required
            />
            <br />
            <input
              onChange={this.handleChange}
              name="age"
              type="text"
              placeholder="Age"
              required
            />
            <br />
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => this.setState({ radio: e.target.value })}
            />
            Male
            <br />
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={(e) => this.setState({ radio: e.target.value })}
            />
            Female
            <br />
            <label for="countries">Select your destination</label>
            <br />
          </div>
          <div>
            <select
              id="countries"
              name="countries"
              onChange={this.handleChange}
            >
              <option value="default-select">Choose your country</option>
              <option value="Thailand">Thailand</option>
              <option value="Japan">Japan</option>
              <option value="Brazil">Brazil</option>
            </select>
          </div>
          <div>
            <h4>Dietary Restrictions</h4>
            <input
              type="checkbox"
              id="nuts"
              name="nuts"
              onChange={this.handleChange}
              checked={this.state.isToggleOn}
            />
            <label for="scales">Nuts free</label>
            <br />
            <input
              type="checkbox"
              id="lactose"
              name="lactose"
              onChange={this.handleChange}
              checked={this.state.isToggleOn}
            />
            <label for="scales">Lactose free</label>
            <br />
            <input
              type="checkbox"
              id="vegan"
              name="vegan"
              onChange={this.handleChange}
              checked={this.state.isToggleOn}
            />
            <label for="scales">Vegan</label>
            <br />
          </div>

          <input type="submit" value="Submit"></input>
        </form>
        <h3>Entered information:</h3>
        <p>
          Your name:{this.state.fname} {this.state.lname}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender:{this.state.radio}</p>
        <p>Your your destination:{this.state.countries}</p>
        <p>Your dietary restrictions:</p>
        <p>
          **Nuts free:
          {this.state.isToggleOn === true ? "Nut Free" : "No Restrictions"}
        </p>
        <p>
          **Lactose free:
          {this.state.isToggleOn === true ? "Lactose Free" : "No Restrictions"}
        </p>
        <p>
          **Vegan meal:
          {this.state.isToggleOn === true ? "YES" : "No Restrictions"}
        </p>
      </>
    );
  }
}

export default InputForm;
