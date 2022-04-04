import usercss from "./User.css";

const User = (props) => {
  const { user } = props;
  const { name, email, username, id } = user;
  return (
    <div className="dib ba pd3 ma2 tc bg-light-blue grow br3 pa3">
      <div>
        <img src={`https://robohash.org/${id}?size=200x200`}></img>
      </div>
      <div>{name}</div>
      <div>{email}</div>
      <div>{username}</div>
    </div>
  );
};

export default User;
