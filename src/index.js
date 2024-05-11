import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from './context/task';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <App />
  </Provider>
);

