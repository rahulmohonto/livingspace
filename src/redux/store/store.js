import { combineReducers, createStore } from "redux";
import ApartmentsReducer from "../reducers/apartmentsReducers";
import UserReducer from "../reducers/userReducers";

const rootReducer = combineReducers({
    userDetails: UserReducer,
    apartmentsData: ApartmentsReducer
})

export const store = createStore(rootReducer);