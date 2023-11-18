import React from 'react';
import App from './App.js';
import * as serviceWorker from '../ServiceWorkers.js';
import ReactDOM from 'react-dom/client';

const rootRef = document.getElementById('root');
const root = ReactDOM.createRoot(rootRef);
root.render(<App/>);

serviceWorker.register();