import typeToReducer from 'type-to-reducer';

import {
    GET_USER_DETAILS
} from './constant'

const initialState = {
    data: null,
    isPending: false,
    error: false
};

const reducer = typeToReducer({
    [ GET_USER_DETAILS ]: {
        PENDING: () => ({
            ...initialState,
            isPending: true
        }),
        REJECTED: (state, action) => ({
            ...initialState,
            error: action.payload,
        }),
        FULFILLED: (state, action) => ({
            ...initialState,
            data: action.payload
        })
    }
}, initialState);

export default reducer;