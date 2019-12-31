import { handleActions } from "redux-actions";
import { arrayToObject } from "../../helpers/utils";
import { setCurrentStoreList } from "../actions/store-list";
const initialState = {
  stores: {},
  storeIds: []
};

const reducer = handleActions({
  [setCurrentStoreList](state, { payload: { stores } }) {
    return {
      ...state,
      storeIds: stores.map(r => r.id),
      stores: arrayToObject(stores)
    }
  }
}, initialState);

export default reducer;