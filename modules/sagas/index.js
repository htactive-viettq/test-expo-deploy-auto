import { all, fork } from "redux-saga/effects";
import login from "./login";

export default function*() {
  yield all([fork(login)]);
}
