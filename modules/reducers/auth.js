import { handleActions } from "redux-actions";
import { setCurrentUser } from "../actions/auth";
const initialState = {
	currentUser: null
};

const reducer = handleActions({
	[setCurrentUser](state, { payload: { account } }) {
		return {
			...state,
			currentUser: account
		}
	}
}, initialState);

export default reducer;