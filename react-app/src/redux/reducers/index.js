import { combineReducers } from "redux";

import { auth, userInfo } from './AuthReducer';

export default combineReducers({
    auth, userInfo
})