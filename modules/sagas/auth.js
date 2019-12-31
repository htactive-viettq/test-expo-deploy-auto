import { call, takeEvery, put } from "redux-saga/effects";
import { saveCurrentUser, setCurrentUser } from "../actions/auth";
import { saveUser } from "../../storages/user-token";

function* saveCurrentUserHandle({ payload: account }) {
  yield call(saveUser, account);
  yield put(setCurrentUser, account);
}

export default function*() {
  yield takeEvery(saveCurrentUser, saveCurrentUserHandle);
}
