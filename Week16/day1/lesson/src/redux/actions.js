export const changePropOne = (value) => {
  return {
    type: "PROP_ONE",
    payload: value,
  };
};

export const changePropTwo = (value) => {
  return {
    type: "PROP_TWO",
    payload: value,
  };
};

export const ClickOn = () => {
  return {
    type: "Click_MY_BUTTON",
  };
};
