import axios from "axios";

export function loadData() {
  return dispatch => {
    return axios.get("https://api.coincap.io/v2/assets").then(response => {
      dispatch(getData(response.data.data.slice(0, 10)));
    });
  };
}

export function getData(data) {
  return {
    type: "GET_DATA",
    data: data
  };
}
