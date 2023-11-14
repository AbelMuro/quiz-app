import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './Reducers';

const store = configureStore({                      //this will create the store with a reducer
    reducer: rootReducer
})

export default store;
