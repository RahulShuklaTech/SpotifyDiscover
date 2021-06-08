import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { getTokenReducer } from "./reducers/getTokenReducer";
import { getUserDetailsReducer } from "./reducers/getUserDetailsReducer";
import logger from "redux-logger";




const saveToLocal = state => {
    const localState = JSON.stringify(state);
    localStorage.setItem("localData",localState)
}


const getLocalData = () => {
    const localStateItems  = localStorage.getItem("localState");
    if(localStateItems === null) return undefined;
    return JSON.parse(localStateItems);

}

const rootReducer = combineReducers({
    tokenState: getTokenReducer,
    userState: getUserDetailsReducer
})

const store = createStore(rootReducer,getLocalData(),applyMiddleware(thunk,logger));

store.subscribe(() => saveToLocal(store.getState()));


export default store