import { combineReducers } from "redux";

import { auth, userInfo, selectedProductReducer } from './AuthReducer';

export default combineReducers({
    auth, userInfo, selectedProductReducer
})