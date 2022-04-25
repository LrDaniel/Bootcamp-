import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { ageUp, ageDown } from "../actions/ageAction";
const ageCounter = (props) => {
  return (
    <>
      <div style={{ padding: "20px" }}>your age: {props.age}</div>
      <Button
        onClick={props.agePlus}
        variant="outlined"
        style={{ width: "100px" }}
      >
        AgeUp
      </Button>
      <Button
        onClick={props.ageMinus}
        variant="outlined"
        style={{ width: "100px" }}
      >
        AgeDown
      </Button>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    agePlus: () => dispatch(ageUp()),
    ageMinus: () => dispatch(ageDown()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ageCounter);
