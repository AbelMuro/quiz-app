import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
import HeaderBar from './Components/HeaderBar';
import Menu from './Components/Menu';
import Quiz from './Components/Quiz';
import './styles.css';

function App() {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <HeaderBar/>
                <Routes>
                    <Route path='/' element={<Menu/>}/>
                    <Route path='/quiz' element={<Quiz/>}/>
                </Routes>
            </BrowserRouter>            
        </Provider>

    )
}

export default App;