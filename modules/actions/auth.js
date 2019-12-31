import { createAction } from "redux-actions";
const SET_CURRENT_USER = "AUTH/SET_CURRENT_USER";
const SAVE_CURRENT_USER = "AUTH/SAVE_CURRENT_USER";

export const setCurrentUser = createAction(SET_CURRENT_USER);
export const saveCurrentUser = createAction(SAVE_CURRENT_USER);
