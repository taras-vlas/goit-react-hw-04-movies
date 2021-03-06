import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/base.scss';
import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <React.StrictMode>

      {/* слідкує за адресною строкою */}
      <BrowserRouter>  
        <App />
      </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root'),
);