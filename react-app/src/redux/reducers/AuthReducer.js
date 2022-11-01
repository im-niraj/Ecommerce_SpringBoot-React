import { ActionType } from '../ActionType';


const initialState = {
    user: {},
    error: '',
    loading: false
};


export const auth = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.AUTH_REQ:
            return { ...state, error: '', loading: true };

        case ActionType.AUTH_SUCCESS:
            const data = action.payload;
            return { ...state, error: '', loading: false, user: data };

        case ActionType.AUTH_FAILURE:
            const error = action.payload;
            return { ...state, loading: false, error: error };
        case ActionType.AUTH_LOGOUT:
            return { state, loading: false };

        default:
            return state;
    }
}


export const userInfo = (state = {}, action) => {
    switch (action.type) {
        case ActionType.USER_INFO_FETCHED:
            const data = action.payload;
            return Object.assign({}, state, { user: data });
        case ActionType.USER_INFO_LOST:
            return Object.assign({}, state, { user: {} });
        default: return state;
    }
}
export const cartItemCount = (state = 0, action) => {
    switch (action.type) {
        case ActionType.CART_COUNTER_UPDATE:
            return action.payload
        default: return state;
    }
}


export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionType.SELECTED_PRODUCT: return { ...state, ...payload };
        case ActionType.REMOVE_SELECTED_PRODUCT: return {};
        default: return state;
    }
}