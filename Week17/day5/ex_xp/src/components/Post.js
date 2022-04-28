import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function Post(props) {
  const { id } = useParams();
  return (
    <>
      <div className="container center">
        <h4>{props.posts[id].title}</h4>
        <p>{props.posts[id].body}</p>
        <div>
          <button
            // onClick={handleClick}
            class="waves-effect waves-light btn-large"
            style={{ backgroundColor: "#ff6969" }}
          >
            DELETE
          </button>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // delete: () => dispatch(deletePost()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
