import React from 'react';
import App from './App.js';
import serviceWorker from './ServiceWorker';
import ReactDOM from 'react-dom/client';

const rootRef = document.getElementById('root');
const root = ReactDOM.createRoot(rootRef);
root.render(<App/>);

serviceWorker.unregister();