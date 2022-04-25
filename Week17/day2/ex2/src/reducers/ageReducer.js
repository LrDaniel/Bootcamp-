const initState = {
  age: 0,
};

export const ageReducer = (state = initState, actions = {}) => {
  switch (actions.type) {
    case "AGE_UP":
      return { ...state, age: state.age + 1 };
    case "AGE_DOWN":
      return { ...state, age: state.age - 1 };

    default:
      return { ...state };
  }
};
