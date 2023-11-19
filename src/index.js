import React from 'react';
import App from './App.js';
import ReactDOM from 'react-dom/client';

const rootRef = document.getElementById('root');
const root = ReactDOM.createRoot(rootRef);
root.render(<App/>);


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register(`/ServiceWorker.js`).then((registration) => {
            console.log('Worker registration is successful', registration.scope);
        }, (err) => {
            console.log('Worker registration has failed', err);
        })
    });
} else {
    console.log('Service Worker is not supported by your browser.');
}