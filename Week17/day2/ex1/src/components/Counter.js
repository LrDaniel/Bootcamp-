import {
  increment,
  decrement,
  incrementOdd,
  incrementAsync,
} from "../actions/counterActions";
import { connect } from "react-redux";

const Counter = (props) => {
  return (
    <>
      <span>Clicked : {props.number} times</span>
      <button onClick={props.plus}>+</button>
      <button onClick={props.minus}>-</button>
      <button onClick={props.odd}>Increment if odd</button>
      <button onClick={props.asyncPlus}>Increment async</button>
    </>
  );
};
const mapStateToProps = (state) => {
  return { number: state.number };
};

const mapDispatchToProps = (dispatch) => {
  return {
    plus: () => dispatch(increment()),
    minus: () => dispatch(decrement()),
    odd: () => dispatch(incrementOdd()),
    asyncPlus: () => dispatch(incrementAsync()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
