import { ERROR_USER, GETTING_USER, GOT_USER } from "../actions/action_types";



let initialState =  {
    user: "",
    error: "",
    loading: true
}

export function getUserDetailsReducer(state = initialState, action){
    switch (action.type) {
        case GETTING_USER:
            return { ...state, loading: true };
        case GOT_USER:
            return { ...state, user: action.payload, loading: false , error:null};
        case ERROR_USER:
            return { ...state, error: action.error };
        default:
            return state;
    }

}