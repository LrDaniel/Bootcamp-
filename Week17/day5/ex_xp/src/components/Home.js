import React, { Component } from "react";
import icon from "../styles/blog.png";
import "../styles/style.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    const { posts } = this.props;
    return (
      <>
        <div className="home container">
          <h4 className="center">Home</h4>
          <div className="home">
            {posts.map((item, id) => {
              return (
                <div key={id} className="post card">
                  <img src={icon} alt="icon" />
                  <Link
                    to={"/" + id}
                    style={{ color: "#ff6969", fontSize: "16px" }}
                  >
                    {item.title}
                  </Link>

                  <p>{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps)(Home);
