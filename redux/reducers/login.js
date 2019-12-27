import { LOGIN_SUCCESS } from "../actions";
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      if (action.payload === "store") {
        action.navigation.navigate("Home");
      } else {
        action.navigation.navigate("Home");
      }
      break;
    default:
      return state;
  }
};
