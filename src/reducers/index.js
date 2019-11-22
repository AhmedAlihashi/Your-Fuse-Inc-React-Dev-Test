import { combineReducers } from "redux";
import data from "./dataReducer";

//make it es6
export default combineReducers({
  data: data
});
