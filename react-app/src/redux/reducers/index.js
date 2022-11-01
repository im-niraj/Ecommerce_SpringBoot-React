import { combineReducers } from "redux";

import { auth, userInfo, selectedProductReducer, cartItemCount } from './AuthReducer';

export default combineReducers({
    auth, userInfo, selectedProductReducer, cartItemCount
})