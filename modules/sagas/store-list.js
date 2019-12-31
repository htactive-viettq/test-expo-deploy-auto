import { call, takeEvery } from "redux-saga/effects";
import { saveCurrentStoreList, setCurrentStoreList } from "../actions/store-list";
import { saveListStore } from "../../storages/list-store";

function* saveCurrentStoreListHandle({ payload: { stores } }) {
  yield call(saveListStore, stores);
  yield put(setCurrentStoreList, stores);
}

export default function* () {
  yield takeEvery(saveCurrentStoreList, saveCurrentStoreListHandle);
}
