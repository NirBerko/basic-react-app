import typeToReducer from 'type-to-reducer';

const initialState = {
    data: null,
    isPending: false,
    error: false
};

const reducerHandler = (CONSTANT) => typeToReducer({
    [ CONSTANT ]: {
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

export default {
    reducerHandler
}