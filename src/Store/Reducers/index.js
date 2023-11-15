import { combineReducers } from "redux";
import themeReducer from './themeReducer.js';
import quizReducer from './quizReducer.js';


const rootReducer = combineReducers({
    theme: themeReducer,
    quiz: quizReducer,
})

export default rootReducer;