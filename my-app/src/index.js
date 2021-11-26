
import reportWebVitals from './reportWebVitals';
import {store} from './reduxe/reduxe';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import MainApp from './App'


  ReactDOM.render(
      <React.StrictMode>
      <MainApp />
      </React.StrictMode>,
      document.getElementById('root')
    );
reportWebVitals();
