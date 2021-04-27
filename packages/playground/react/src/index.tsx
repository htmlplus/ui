import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import package
import { applyPolyfills, defineCustomElements } from '@htmlplus/react/loader';

// Bind the custom elements to the window object
applyPolyfills().then(() => defineCustomElements());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);