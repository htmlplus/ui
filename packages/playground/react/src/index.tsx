import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { applyPolyfills, defineCustomElements } from '@htmlplus/react/loader';

applyPolyfills().then(() => defineCustomElements());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);