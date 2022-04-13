import React, { Component } from "react";
import { connect } from "react-redux";

class MovieDetail extends Component {
  state = {};
  render() {
    return (
      <>
        <h3>Movie Detail</h3>
        <p>Title:{this.props.detail.title}</p>
        <p>Release Date:{this.props.detail.releaseDate}</p>
        <p>Rating:{this.props.detail.rating}</p>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    detail: state.movie,
  };
};

export default connect(mapStateToProps)(MovieDetail);
