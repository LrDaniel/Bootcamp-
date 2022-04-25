export const increment = () => {
  return { type: "INCREMENT" };
};

export const decrement = () => {
  return { type: "DECREMENT" };
};

export const incrementOdd = () => {
  return { type: "INCREMENT_ODD" };
};
export const incrementAsync = () => {
  return (dispatch) => {
    setTimeout(() => dispatch({ type: "INCREMENT_ASYNC" }), 1000);
  };
};
