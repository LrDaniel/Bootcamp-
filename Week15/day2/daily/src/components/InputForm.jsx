import React, { Component } from "react";

class InputForm extends Component {
  state = {};
  render() {
    return (
      <>
        <form>
          <div>
            <input type="text" placeholder="First Name" required />
            <br />
            <input type="text" placeholder="Last Name" required />
            <br />
            <input type="text" placeholder="Age" required />
            <br />
            <input type="radio" name="gender" value="male" /> Male
            <br />
            <input type="radio" name="gender" value="male" /> Female
            <br />
            <label for="countries">Select your destination</label>
            <br />
          </div>
          <div>
            <select id="countries" name="countries">
              <option value="default-select">Choose your country</option>
              <option value="Thailand">Thailand</option>
              <option value="Japan">Japan</option>
              <option value="Brazil">Brazil</option>
            </select>
          </div>
          <div>
            <h4>Dietary Restrictions</h4>
            <input type="checkbox" id="scales" name="scales" />
            <label for="scales">Nuts free</label>
            <br />
            <input type="checkbox" id="scales" name="scales" />
            <label for="scales">Lactose free</label>
            <br />
            <input type="checkbox" id="scales" name="scales" />
            <label for="scales">Vegan</label>
            <br />
          </div>

          <input type="submit" value="Submit"></input>
        </form>
      </>
    );
  }
}

export default InputForm;
