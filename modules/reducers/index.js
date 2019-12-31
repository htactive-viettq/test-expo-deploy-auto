import { combineReducers } from "redux";
import auth from "./auth";
import storeList from "./store-list";

export default combineReducers({
  auth,
  storeList
});
