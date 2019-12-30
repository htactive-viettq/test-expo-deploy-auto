import { call, takeEvery } from "redux-saga/effects";
import { LOGIN_REQUEST } from "../actions";
import { login } from "../../api/login";

function* loginRequestHandle(action) {
  const { infoLogin } = action || {};
  yield call(login, infoLogin.account, infoLogin.password, infoLogin.remember);
}

export default function*() {
  yield takeEvery(LOGIN_REQUEST, loginRequestHandle);
}
