import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";

function Post(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = props.posts.find((post) => post.id === id);
  const handleClick = () => {
    props.delete(id);
    navigate("/");
  };
  return (
    <>
      <div className="container center">
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <div>
          <button
            onClick={handleClick}
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
    delete: (id) => dispatch(deletePost(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
