import { createAction } from "redux-actions";
const SET_CURRENT_STORE_LIST = "STORE_LIST/SET_CURRENT_STORE_LIST";
const SAVE_CURRENT_STORE_LIST = "STORE_LIST/SAVE_CURRENT_STORE_LIST";

export const setCurrentStoreList = createAction(SET_CURRENT_STORE_LIST);
export const saveCurrentStoreList = createAction(SAVE_CURRENT_STORE_LIST);
