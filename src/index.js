import React from 'react';
import App from './App.js';
import ReactDOM from 'react-dom/client';

const rootRef = document.getElementById('root');
const root = ReactDOM.createRoot(rootRef);
root.render(<App/>);


const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.register("/ServiceWorker.js", {
          scope: "/",
        });
        if (registration.installing) {
          console.log("Service worker installing");
        } else if (registration.waiting) {
          console.log("Service worker installed");
        } else if (registration.active) {
          console.log("Service worker active");
        }
      } catch (error) {
        console.error(`Registration failed with ${error}`);
      }
    }
  };

  registerServiceWorker()