import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { ViewportProvider } from './context/ViewportContext';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <StrictMode>
    <ViewportProvider>
      <App/>
    </ViewportProvider>
  </StrictMode>
);