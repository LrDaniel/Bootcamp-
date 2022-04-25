const initStore = {
  number: 0,
};

export const counterReducer = (state = initStore, actions = {}) => {
  switch (actions.type) {
    case "INCREMENT":
      return { ...state, number: state.number + 1 };
    case "DECREMENT":
      return { ...state, number: state.number - 1 };
    case "INCREMENT_ODD":
      return {
        ...state,
        number: state.number % 2 !== 0 ? state.number + 1 : state.number,
      };
    case "INCREMENT_ASYNC":
      return { ...state, number: state.number + 1 };

    default:
      return { ...state };
  }
};
