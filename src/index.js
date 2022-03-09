import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import history from './app/utils/history';

// import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider> */}
    <Router history={history}>
      <App />
    </Router>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
