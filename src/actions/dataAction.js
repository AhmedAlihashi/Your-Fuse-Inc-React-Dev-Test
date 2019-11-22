import * as actionTypes from "./actionTypes";
//es6 imp
export const getData = data => {
  return {
    type: actionTypes.GET_DATA,
    data: data
  };
};
