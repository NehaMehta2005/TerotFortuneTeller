export const reducer = (state, action) => {
  switch (action.type) {
    case "setActiveTip":
      return { ...state, activeTip: action.payload };
    default:
      return state;
  }
};

export const initialState = {
  activeTip: 0,
};