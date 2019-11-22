import * as actionTypes from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
      return [...state, Object.assign({}, action.contact)];

    default:
      return state;
  }
};
