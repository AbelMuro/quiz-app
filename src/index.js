import React from 'react';
import App from './App.js';
import * as serviceWorker from '../svcWorker.js';
import ReactDOM from 'react-dom/client';

const rootRef = document.getElementById('root');
const root = ReactDOM.createRoot(rootRef);
root.render(<App/>);

console.log(serviceWorker);
serviceWorker.register();