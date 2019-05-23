import * as actionTypes from "../constants/actionTypes.js";

const initState = {
  token: "",
  user: {
    id: "",
    username: ""
  },
  isFetching: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.START_AUTH_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }
    case actionTypes.END_AUTH_REQUEST: {
      return {
        ...state,
        isFetching: false
      };
    }
    case actionTypes.RECEIVE_TOKEN: {
      localStorage.setItem("token", action.token);
      return {
        ...state,
        user: {
          id: "c8ceb287-6b4f-4b85-9292-bc0b42202d7e",
          username: "Khai phá thiên cơ"
        },
        token: action.token
      };
    }
    default: {
      return state;
    }
  }
};
