import React, { Component } from "react";
import { connect } from "react-redux";
import { changePropTwo } from "../redux/actions";

class Child extends Component {
  state = {};
  render() {
    return (
      <>
        <div>{this.props.a} child</div>
        <div>{this.props.b} child</div>
        <div>{this.props.c} </div>

        <div>
          <input
            type="text"
            onChange={this.props.handleInputTwo}
            placeholder="Change PropTwo"
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    a: state.propOne,
    b: state.propTwo,
    c: state.propThree,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputTwo: (e) => dispatch(changePropTwo(e.target.value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Child);
