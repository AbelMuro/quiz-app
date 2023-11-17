import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistedStore} from './Store';
import {PersistGate} from 'redux-persist/integration/react';
import HeaderBar from './Components/HeaderBar';
import Menu from './Components/Menu';
import Quiz from './Components/Quiz';
import Results from './Components/Results';
import './styles.css';

function App() {
    return(
        <Provider store={store}>
            <PersistGate persistor={persistedStore}>
                <BrowserRouter>
                    <HeaderBar/>
                    <Routes>
                        <Route path='/' element={<Menu/>}/>
                        <Route path='/quiz' element={<Quiz/>}/>
                        <Route path='/results' element={<Results/>}/>
                    </Routes>
                </BrowserRouter>                
            </PersistGate>
            
        </Provider>

    )
}

export default App;