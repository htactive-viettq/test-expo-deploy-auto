import { call, takeEvery, put } from "redux-saga/effects";
import { NavigationActions } from "react-navigation";
import { loginRequestAction } from "../actions";
import { login } from "../../api/login";
import { saveCurrentUser } from "../actions/auth";
import { saveCurrentStoreList } from "../actions/store-list";

function* loginRequestHandle({ payload: {
  account,
  password,
  remember
} }) {
  const loginResult = yield call(login, account, password, remember);
  console.log(loginResult);
  if (loginResult.success) {
    // yield put(saveCurrentUser(loginResult.account));
    // yield put(saveCurrentStoreList(loginResult.stores));
    yield put(NavigationActions.navigate("Home"));
  }
}

export default function* () {
  yield takeEvery(loginRequestAction, loginRequestHandle);
}
