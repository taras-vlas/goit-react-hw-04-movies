import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import './styles.css';
//import './styles/base.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      {/* слідкує за адресною строкою */}
      <BrowserRouter>  
        <App />
      </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root'),
);

