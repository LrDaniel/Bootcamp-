const initState = {
  num: 0,
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, num: state.num + 1 };
    case "decrement":
      return { ...state, num: state.num - 1 };

    default:
      return { ...state };
  }
};
