import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { ViewportProvider } from './context/Viewport';
import { ScrollProvider } from './context/Scroll';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <StrictMode>
    <ViewportProvider>
      <ScrollProvider>
        <App/>
      </ScrollProvider>
    </ViewportProvider>
  </StrictMode>
);