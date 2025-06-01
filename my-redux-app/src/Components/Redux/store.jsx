import { createStore } from "redux";
import { counterReducer } from "./Reducers/reducers";


export const store = createStore(counterReducer);