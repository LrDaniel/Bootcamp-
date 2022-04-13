import React, { Component } from "react";
import { connect } from "react-redux";
import { MovieDetail } from "../actions/actions";

class MovieList extends Component {
  state = {};

  render() {
    return (
      <>
        <h3>Movie List</h3>
        {this.props.movies_arr.map((item, i) => {
          return (
            <div key={i}>
              <p>{item.title}</p>
              <button onClick={() => this.props.movieDetail(item)}>
                details
              </button>
            </div>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies_arr: state.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    movieDetail: (movie) => dispatch(MovieDetail(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
