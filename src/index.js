import React from 'react';
import ReactDOM from 'react-dom';
import './fonts/BebasNeue-Regular.otf'
import './fonts/BebasNeue-Regular.ttf'
import './fonts/BebasNeue-Regular.woff'
import './fonts/BebasNeue-Regular.woff2'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
