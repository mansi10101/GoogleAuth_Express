import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import React from 'react';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

reportWebVitals();
