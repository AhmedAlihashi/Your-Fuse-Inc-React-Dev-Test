let initialState = {
  data: 4
};

const mainReducer = (state = initialState, action) => {
  if (action.type === "GET_DATA") {
    return {
      ...state,
      data: action.data
    };
  } else {
    return {
      ...state
    };
  }
};

export default mainReducer;
