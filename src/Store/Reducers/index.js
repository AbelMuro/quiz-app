import { combineReducers } from "redux";
import themeReducer from './themeReducer.js';


const rootReducer = combineReducers({
    theme: themeReducer
})

export default rootReducer;