import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { WebpageStateProvider } from './context/WebpageState';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <StrictMode>
    <WebpageStateProvider>
      <App/>
    </WebpageStateProvider>
  </StrictMode>
);