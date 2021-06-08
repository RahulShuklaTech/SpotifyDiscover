import { DELETE_TOKEN, ERROR_TOKEN, GETTING_TOKEN, GOT_TOKEN, SET_CODE } from "../actions/action_types";



let initialState = {
    token: null,
    code: null,
    error: null,
    loading: false

}


export function getTokenReducer(state = initialState, action) {

    switch (action.type) {

        case SET_CODE:
            return { ...state, code: action.payload }

        case GETTING_TOKEN:
            return { ...state, loading: true };
        case GOT_TOKEN:
            return { ...state, token: action.payload, loading: false };
        case ERROR_TOKEN:
            return { ...state, error: action.error };
        case DELETE_TOKEN:
            return { ...state, token: null };

        default:
            return state;

    }
}